// Asset path helper for GitHub Pages
export const getAssetPath = (path) => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In production (GitHub Pages), add the base path
  if (import.meta.env.PROD) {
    return `/doktor_web/${cleanPath}`;
  }
  
  // In development, use the path as is
  return `/${cleanPath}`;
};

// Helper for image paths
export const getImagePath = (imagePath) => {
  return getAssetPath(`assets/images/${imagePath}`);
};

// Helper for i18n paths
export const getI18nPath = (lang) => {
  return getAssetPath(`assets/i18n/${lang}.json`);
};
