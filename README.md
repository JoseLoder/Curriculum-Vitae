# Portfolio · José Miguel Martín Silva

Mi primer portfolio personal, desarrollado con **React** y **Material UI**. Recoge mi presentación, mis proyectos y mi experiencia profesional y académica.

🔗 **Demo:** https://joseloder.github.io/Curriculum-Vitae/

## Stack

- **React 18** + **Vite**
- **Material UI** (componentes, iconos y tema claro/oscuro)
- **React Router** (`createHashRouter`, compatible con GitHub Pages)
- **ESLint** para la calidad del código
- **GitHub Actions** para el despliegue automático en GitHub Pages

## Funcionalidades

- Tres páginas: *Sobre mí*, *Proyectos* y *Experiencia*
- Cambio de tema claro / oscuro con React Context
- Navegación que marca la página activa
- Tarjetas de proyecto con capturas que rotan automáticamente
- Diseño responsive con los breakpoints de MUI
- Página de error personalizada

## Estructura

```
src/
├── pages/        # LandingPage, Projects, Experience
├── components/   # Header, Footer, tarjetas, acordeones…
├── contexts/     # ThemeContext (modo claro/oscuro)
├── hooks/        # useTheme
└── utils/        # assetUrl (rutas de /public según el base de Vite)
```

## Ejecutar en local

```bash
npm install
npm run dev       # servidor de desarrollo
npm run build     # build de producción en dist/
npm run lint      # análisis con ESLint
```

## Despliegue

Cada push a `main` lanza el workflow [`.github/workflows/main.yml`](.github/workflows/main.yml), que compila el proyecto y lo publica en GitHub Pages.

## Contacto

- LinkedIn: [joseloder](https://www.linkedin.com/in/joseloder)
- GitHub: [JoseLoder](https://github.com/JoseLoder)
