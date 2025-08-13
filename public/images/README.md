# Imágenes del Juego

## Imagen de Fondo de la Pantalla de Título

Para cambiar la imagen de fondo de la pantalla de título del juego:

1. Coloca tu imagen en esta carpeta (`public/images/`)
2. Nombra el archivo como `title-background.jpg` (o cambia la ruta en `components/TitleScreen.tsx`)
3. Formatos soportados: JPG, PNG, WebP
4. Tamaño recomendado: 1920x1080 píxeles o similar (16:9)

### Ubicación del archivo:
```
public/images/title-background.jpg
```

### Personalización:
Si quieres usar un nombre diferente para tu imagen, edita la línea 12 en `components/TitleScreen.tsx`:

```tsx
backgroundImage: 'url(/images/tu-imagen.jpg)',
```

### Consejos:
- Usa imágenes de alta resolución para mejor calidad
- Considera el contraste con el texto blanco
- El overlay negro (30% de opacidad) ayuda con la legibilidad
- Las decoraciones SVG se mantienen sobre la imagen
