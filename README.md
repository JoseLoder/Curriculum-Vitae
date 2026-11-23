# Portfolio · José Miguel Martín Silva

Mi primer portfolio personal, desarrollado con **React** y **Material UI**. Recoge mi presentación, mis proyectos y mi experiencia profesional y académica.

🔗 **Web:** https://joseloder.pro

## Stack

- **React 18** + **Vite**
- **Material UI** (componentes, iconos y tema claro/oscuro)
- **React Router** (`createHashRouter`)
- **ESLint** para la calidad del código
- **Vercel** para el despliegue, con dominio propio

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

Cada push a `main` se despliega automáticamente en [Vercel](https://vercel.com), en el dominio [joseloder.pro](https://joseloder.pro).

## Contacto

- LinkedIn: [joseloder](https://www.linkedin.com/in/joseloder)
- GitHub: [JoseLoder](https://github.com/JoseLoder)
