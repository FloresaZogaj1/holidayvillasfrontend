import { useState, useRef, useEffect } from 'react';

export default function OptimizedImage({ 
  src, 
  alt, 
  className = "", 
  loading = "lazy", 
  priority = false,
  placeholder = true,
  quality = 75,
  onLoad = () => {},
  ...props 
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();

  // Intersection Observer për lazy loading
  useEffect(() => {
    if (!imgRef.current || priority) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '50px' } // Fillo loading 50px para se të jetë visible
    );

    observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad();
  };

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {/* Placeholder */}
      {placeholder && !isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent/5 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-accent/20 border-t-accent/60 rounded-full animate-spin"></div>
        </div>
      )}
      
      {/* Main Image */}
      {(isInView || priority) && (
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : loading}
          decoding="async"
          fetchpriority={priority ? "high" : "auto"}
          className={`
            w-full h-full object-cover transition-opacity duration-300
            ${isLoaded ? 'opacity-100' : 'opacity-0'}
            ${className.includes('hover:scale') ? className.split(' ').find(c => c.includes('hover:scale')) : ''}
          `}
          onLoad={handleLoad}
          {...props}
        />
      )}
    </div>
  );
}
