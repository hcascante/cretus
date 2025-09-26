# Configuración de Desarrollo - Cretus

## 🚀 Inicio Rápido

1. **Instalar dependencias:**
```bash
npm install --legacy-peer-deps
```

2. **Ejecutar en desarrollo:**
```bash
npm run dev
```

3. **Abrir en el navegador:**
```
http://localhost:3000
```

## 📁 Estructura del Proyecto

```
cretus/
├── app/
│   ├── configuracion/     # Página de configuración
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   └── page.tsx          # Landing page
├── components/
│   └── ui/               # Componentes UI reutilizables
├── lib/
│   └── utils.ts          # Utilidades
└── public/               # Archivos estáticos
```

## 🎨 Personalización

### Colores
Los colores se pueden personalizar en `app/globals.css`:

```css
:root {
  --primary: oklch(0.55 0.25 330);  /* Magenta de Pomelo */
  --accent: oklch(0.65 0.2 340);    /* Rosa claro */
}
```

### Componentes
Los componentes UI están en `components/ui/` y pueden ser personalizados.

## 🔧 Scripts Disponibles

- `npm run dev` - Ejecutar en desarrollo
- `npm run build` - Construir para producción
- `npm run start` - Ejecutar en producción
- `npm run lint` - Ejecutar linter

## 📱 Responsive Design

El proyecto está optimizado para:
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)

## 🚀 Despliegue

### Vercel
1. Conectar repositorio a Vercel
2. Configurar variables de entorno
3. Desplegar automáticamente

### Docker
```bash
docker-compose up -d
```

## 🐛 Solución de Problemas

### Error de dependencias
```bash
npm install --legacy-peer-deps
```

### Error de TypeScript
```bash
npx tsc --noEmit
```

### Error de linting
```bash
npm run lint
```

## 📞 Soporte

Para soporte técnico, contacta al equipo de desarrollo.