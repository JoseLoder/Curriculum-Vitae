// Construye la URL de un archivo de /public respetando el `base` de Vite,
// para que funcione igual en local y en GitHub Pages.
export const assetUrl = (path) => import.meta.env.BASE_URL + path.replace(/^\//, '');
