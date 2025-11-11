// Utility functions për image optimization

/**
 * Generate responsive image srcSet për different screen sizes
 */
export function generateSrcSet(baseSrc, sizes = [400, 800, 1200, 1600]) {
  const extension = baseSrc.split('.').pop();
  const baseName = baseSrc.replace(`.${extension}`, '');
  
  return sizes
    .map(size => `${baseName}_${size}w.${extension} ${size}w`)
    .join(', ');
}

/**
 * Get optimized image URL based on device capabilities
 * For local development, just return the original src
 */
export function getOptimizedImageUrl(src, options = {}) {
  // For local assets, return original src without modification
  // Image optimization should be handled by CDN or build process
  return src;
}

/**
 * Preload critical images
 */
export function preloadImages(urls, priority = 'high') {
  if (typeof window === 'undefined') return;
  
  urls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = url;
    if (priority) {
      link.fetchPriority = priority;
    }
    document.head.appendChild(link);
  });
}

/**
 * Lazy load image with Intersection Observer
 */
export function lazyLoadImage(img, src, options = {}) {
  const { rootMargin = '50px', threshold = 0.1 } = options;
  
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.src = src;
            entry.target.classList.add('loaded');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin, threshold }
    );
    
    observer.observe(img);
  } else {
    // Fallback për old browsers
    img.src = src;
  }
}

/**
 * Image compression utility (client-side)
 */
export function compressImage(file, quality = 0.8, maxWidth = 1920) {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
      // Calculate new dimensions
      let { width, height } = img;
      
      if (width > maxWidth) {
        height = (height * maxWidth) / width;
        width = maxWidth;
      }
      
      canvas.width = width;
      canvas.height = height;
      
      // Draw dhe compress
      ctx.drawImage(img, 0, 0, width, height);
      
      canvas.toBlob(
        (blob) => resolve(blob),
        'image/jpeg',
        quality
      );
    };
    
    img.src = URL.createObjectURL(file);
  });
}