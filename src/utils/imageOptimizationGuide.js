/**
 * Manual image optimization guidelines dhe utilities
 * 
 * Për të optimizuar performance në production:
 * 1. Kompreso manualisht fotot me tools si ImageOptim, TinyPNG ose Squoosh
 * 2. Përdor format modern (WebP, AVIF) kur është e mundur
 * 3. Krijon multiple sizes për responsive images
 * 4. Përdor lazy loading për fotot jo-kritike
 */

/**
 * Recommended image sizes për different use cases:
 */
export const IMAGE_BREAKPOINTS = {
  // Thumbnail sizes
  thumb: [150, 300],
  // Card images  
  card: [400, 600, 800],
  // Hero images
  hero: [800, 1200, 1600, 2400],
  // Gallery images
  gallery: [400, 800, 1200]
};

/**
 * Generate srcSet për responsive images
 */
export function generateResponsiveSrc(baseName, sizes, format = 'jpg') {
  return sizes
    .map(size => `${baseName}_${size}w.${format} ${size}w`)
    .join(', ');
}

/**
 * Performance recommendations për different image types
 */
export const OPTIMIZATION_SETTINGS = {
  hero: {
    quality: 85, // Higher quality for important images
    formats: ['webp', 'jpg'],
    sizes: IMAGE_BREAKPOINTS.hero,
    loading: 'eager',
    fetchpriority: 'high'
  },
  gallery: {
    quality: 75, // Balanced quality/size
    formats: ['webp', 'jpg'],
    sizes: IMAGE_BREAKPOINTS.gallery,
    loading: 'lazy'
  },
  thumbnail: {
    quality: 70, // Lower quality for small images
    formats: ['webp', 'jpg'],
    sizes: IMAGE_BREAKPOINTS.thumb,
    loading: 'lazy'
  }
};

/**
 * Calculate approximate load time for image size
 */
export function estimateLoadTime(sizeKB, connectionType = '4g') {
  const speeds = {
    '2g': 50, // KB/s
    '3g': 200,
    '4g': 1000,
    'wifi': 2000
  };
  
  return Math.ceil(sizeKB / speeds[connectionType]);
}

/**
 * Check if image should be preloaded based on priority
 */
export function shouldPreload(imageType, index = 0) {
  const preloadRules = {
    hero: index < 1, // Only first hero image
    gallery: index < 3, // First 3 gallery images
    card: index < 6 // First 6 card images
  };
  
  return preloadRules[imageType] || false;
}