# BRAND OF TALENT - Reglas de Desarrollo

## Estructura de Componentes
- Cada página debe tener componentes modulares en su respectivo folder dentro de `src/components/`
- Los componentes se importan en el archivo principal de la página (ej: `Home.jsx`)
- Mantener la estructura definida en `siteStructure.md`
- Nunca ejecutes comandos, solo da la instrucción al usuario de hacerlo.

## Convenciones de Naming
- Nombre de la marca: **BRAND OF TALENT** 
- Componentes: PascalCase (ej: `Hero.jsx`, `CommMessage.jsx`)
- Archivos de páginas: PascalCase (ej: `Home.jsx`, `About.jsx`)
- Clases CSS: kebab-case (ej: `.hero-content`, `.nav-container`)

## Estructura de Folders
```
src/
├── components/
│   ├── home/
│   │   ├── Hero.jsx
│   │   ├── CommMessage.jsx
│   │   ├── Benefits.jsx
│   │   └── QuoteCTA.jsx
│   ├── about/
│   │   ├── History.jsx
│   │   ├── Differentiators.jsx
│   │   └── Vision.jsx
│   └── [otros folders según siteStructure.md]
└── pages/
    ├── Home.jsx
    ├── About.jsx
    └── [otras páginas]
```

## Paleta de Colores
- backgroundColor: #1D1D1D
- textColor: #E8E0DC
- typography: Poppins

## Logo
- Archivo: `public/BOT_logo.png`
- Usar en navbar y footer
- Nombre: BRAND OF TALENT

## Principios
- Mantener componentes pequeños y reutilizables
- Cada componente debe tener una responsabilidad específica
- Seguir el diseño responsivo
- NO cambiar el contenido de texto a menos que se especifique
- Priorizar la creatividad en el diseño manteniendo estructura simple 
- Evita abusar del CSS para solucionar
- Prioriza usar estilos de tailwind en lugar de css puro