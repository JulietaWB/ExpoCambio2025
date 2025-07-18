
export interface Character {
  name: string;
  IconComponent: React.FC<{ className?: string }>;
  promptDescription: string;
}

export interface ProjectEffect {
  economy: number;
  ecosystem: number;
  peopleHappiness: number;
}

export interface ProjectData {
  id: number;
  characterName: string;
  title: string;
  description: string;
  imageUrl: string;
  effects: {
    approve: ProjectEffect;
    reject: ProjectEffect;
  };
  flavorText: {
    approve: string;
    reject: string;
  };
}

export type GeminiProjectResponse = Omit<ProjectData, 'id' | 'characterName'>;

export interface GameState {
  economy: number;
  ecosystem: number;
  peopleHappiness: number;
  rounds: number;
  gameOver: boolean;
  gameMessage: string | null;
  isLoadingProject: boolean;
  currentProject: ProjectData | null;
  currentCharacter: Character | null;
  decisionOutcome: string | null; 
}

export enum StatType {
  Economy = 'economy',
  Ecosystem = 'ecosystem',
  PeopleHappiness = 'peopleHappiness',
}
