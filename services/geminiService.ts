
import { GoogleGenAI, GenerateContentResponse, Type } from "@google/genai";
import { ProjectData, GeminiProjectResponse, Character } from '../types';
import { GEMINI_MODEL_NAME, API_KEY_ERROR_MESSAGE, GENERIC_API_ERROR_MESSAGE } from '../constants';

const parseGeminiJsonResponse = <T,>(jsonString: string): T | null => {
  let cleanJsonString = jsonString.trim();
  // With responseSchema, the output should be clean JSON, but this handles potential markdown fences as a fallback.
  const fenceRegex = /^```(\w*)?\s*\n?(.*?)\n?\s*```$/s; // Matches ```json ... ``` or ``` ... ```
  const match = cleanJsonString.match(fenceRegex);
  if (match && match[2]) {
    cleanJsonString = match[2].trim();
  }
  try {
    return JSON.parse(cleanJsonString) as T;
  } catch (error) {
    console.error("Failed to parse JSON response:", error, "Raw string:", jsonString);
    return null;
  }
};

const projectSchema = {
    type: Type.OBJECT,
    properties: {
      title: { type: Type.STRING, description: "Título del proyecto corto y atractivo (máx. 10 palabras)." },
      description: { type: Type.STRING, description: "Breve descripción del proyecto (máx. 30 palabras)." },
      imageUrl: { type: Type.STRING, description: "Una palabra clave relevante para Unsplash para una imagen (ej. 'parque moderno', 'fábrica ocupada')." },
      effects: {
        type: Type.OBJECT,
        properties: {
          approve: {
            type: Type.OBJECT,
            properties: {
              economy: { type: Type.INTEGER, description: "Entero entre -20 y 20." },
              ecosystem: { type: Type.INTEGER, description: "Entero entre -20 y 20." },
              peopleHappiness: { type: Type.INTEGER, description: "Entero entre -20 y 20." },
            },
            required: ['economy', 'ecosystem', 'peopleHappiness'],
          },
          reject: {
            type: Type.OBJECT,
            properties: {
              economy: { type: Type.INTEGER, description: "Entero entre -10 y 10." },
              ecosystem: { type: Type.INTEGER, description: "Entero entre -10 y 10." },
              peopleHappiness: { type: Type.INTEGER, description: "Entero entre -10 y 10." },
            },
            required: ['economy', 'ecosystem', 'peopleHappiness'],
          },
        },
        required: ['approve', 'reject'],
      },
      flavorText: {
        type: Type.OBJECT,
        properties: {
          approve: { type: Type.STRING, description: "Un texto de consecuencia corto e impactante si se aprueba (máx. 20 palabras)." },
          reject: { type: Type.STRING, description: "Un texto de consecuencia corto e impactante si se rechaza (máx. 20 palabras)." },
        },
        required: ['approve', 'reject'],
      },
    },
    required: ['title', 'description', 'imageUrl', 'effects', 'flavorText'],
};

export const generateNewProject = async (character: Character): Promise<ProjectData | { error: string }> => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error(API_KEY_ERROR_MESSAGE);
    return { error: API_KEY_ERROR_MESSAGE };
  }

  const ai = new GoogleGenAI({ apiKey });

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: GEMINI_MODEL_NAME,
      contents: character.promptDescription,
      config: {
        responseMimeType: "application/json",
        responseSchema: projectSchema,
      },
    });
    
    const projectData = parseGeminiJsonResponse<GeminiProjectResponse>(response.text);

    if (!projectData) {
      console.error("Failed to parse project data from Gemini response.");
      return { error: "Se recibieron datos de proyecto en formato no válido de la IA." };
    }
    
    // This validation is now less critical due to responseSchema, but acts as a good safeguard.
    if (!projectData.title || !projectData.description || !projectData.effects || !projectData.flavorText) {
        console.error("Incomplete project data received:", projectData);
        return { error: "La IA generó datos de proyecto incompletos." };
    }

    return {
      id: Date.now(), // Generate a unique numeric ID for the project
      characterName: character.name,
      ...projectData,
    };

  } catch (error) {
    console.error("Error fetching project from Gemini API:", error);
    if (error instanceof Error && error.message.includes("API key not valid")) {
        return { error: "Clave de API no válida. Por favor, revisa tu variable de entorno API_KEY." };
    }
    return { error: GENERIC_API_ERROR_MESSAGE };
  }
};