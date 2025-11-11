// src/pages/Gallery.jsx
import { useState } from "react";
import OptimizedImage from "../components/OptimizedImage";
import g1 from "../assets/_P4A0270.jpg";
import g2 from "../assets/_P4A0269.jpg";
import g3 from "../assets/_P4A0273.jpg";
import g4 from "../assets/3_3.jpg";
import g5 from "../assets/_P4A0283.jpg";
import g6 from "../assets/3_7.jpg";
import g7 from "../assets/1_11.jpg";
import g8 from "../assets/1_7.jpg";
import g9 from "../assets/3_5.jpg";
import g10 from "../assets/3.jpg";
import g11 from "../assets/3_6.jpg";

import gallery2 from "../assets/515550823.jpg";
import gallery3 from "../assets/5.jpg";
import gallery4 from "../assets/4.jpg";
import gallery5 from "../assets/6.jpg";
import gallery6 from "../assets/7.jpg";
import gallery7 from "../assets/2_7.jpg";
import gallery8 from "../assets/2_8.jpg";
import gallery9 from "../assets/2_9.jpg";
import gallery10 from "../assets/2_10.jpg";

const IMAGES = [
  g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11,
  gallery2, gallery3, gallery4, gallery5, gallery6,
  gallery7, gallery8, gallery9, gallery10
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [galleryTouchStart, setGalleryTouchStart] = useState(null);

  const openModal = (src, index) => {
    setSelectedImage(src);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % IMAGES.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(IMAGES[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + IMAGES.length) % IMAGES.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(IMAGES[prevIndex]);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextImage();
    }
    if (isRightSwipe) {
      prevImage();
    }
  };

  // Mobile gallery touch handlers (for horizontal scroll)
  const handleGalleryTouchStart = (e) => {
    setGalleryTouchStart(e.targetTouches[0].clientX);
  };

  const handleGalleryTouchMove = (e) => {
    // Allow natural horizontal scrolling
  };

  const handleGalleryTouchEnd = () => {
    setGalleryTouchStart(null);
  };

  return (
    <section className="py-16 bg-bg text-ink">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="font-display text-3xl md:text-5xl gradient-text mb-3">
            Galeria
          </h1>
          <p className="text-ink/70 max-w-2xl mx-auto">
            Shfleto disa nga momentet më të bukura dhe hapësirat e vilave tona —
            çdo foto tregon luksin dhe qetësinë që të pret.
          </p>
        </div>

        {/* Desktop Gallery - Masonry Grid */}
        <div className="hidden sm:block">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
            {IMAGES.map((src, i) => (
              <div
                key={i}
                className="mb-4 rounded-xl2 overflow-hidden shine-wrap hover-glow block break-inside-avoid cursor-pointer group"
                onClick={() => openModal(src, i)}
              >
                <div className="relative">
                  <OptimizedImage
                    src={src}
                    alt={`Gallery ${i + 1}`}
                    priority={i < 6} // Preload first 6 images
                    className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-[1.03] group-hover:brightness-110"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <svg 
                      className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Gallery - Horizontal Slider */}
        <div className="sm:hidden">
          <div className="relative">
            {/* Swipe instruction */}
            <div className="text-center mb-4 text-ink/60 text-sm">
              ← Swipe për të parë më shumë →
            </div>
            
            <div 
              className="overflow-x-auto scrollbar-hide"
              onTouchStart={handleGalleryTouchStart}
              onTouchMove={handleGalleryTouchMove}
              onTouchEnd={handleGalleryTouchEnd}
            >
              <div className="flex gap-4 pb-4" style={{ width: `${IMAGES.length * 280}px` }}>
                {IMAGES.map((src, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 w-64 rounded-xl2 overflow-hidden shadow-lg cursor-pointer group"
                    onClick={() => openModal(src, i)}
                  >
                    <div className="relative">
                      <OptimizedImage
                        src={src}
                        alt={`Gallery ${i + 1}`}
                        priority={i < 4} // Preload first 4 images for mobile
                        className="w-full h-80 object-cover transition-all duration-300 group-active:scale-95"
                      />
                      {/* Mobile tap indicator */}
                      <div className="absolute inset-0 bg-black/0 group-active:bg-black/10 transition-all duration-150 flex items-center justify-center">
                        <svg 
                          className="w-8 h-8 text-white opacity-0 group-active:opacity-100 transition-all duration-150" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation dots for mobile */}
            <div className="flex justify-center mt-4 gap-2">
              {Array.from({ length: Math.ceil(IMAGES.length / 3) }).map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full bg-accent/30"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-2 sm:p-4"
            onClick={closeModal}
          >
            <div 
              className="relative w-full h-full max-w-7xl flex items-center justify-center"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 p-3 sm:p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors touch-manipulation"
              >
                <svg className="w-6 h-6 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Previous button - Desktop */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="hidden sm:flex absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors items-center justify-center"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Next button - Desktop */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="hidden sm:flex absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors items-center justify-center"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Image */}
              <img
                src={selectedImage}
                alt={`Gallery ${currentIndex + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg touch-manipulation"
                onClick={(e) => e.stopPropagation()}
              />

              {/* Mobile Navigation Buttons - Bottom */}
              <div className="sm:hidden absolute bottom-16 left-0 right-0 flex justify-center gap-4 z-10">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="p-4 rounded-full bg-white/20 text-white active:bg-white/40 transition-colors touch-manipulation"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="p-4 rounded-full bg-white/20 text-white active:bg-white/40 transition-colors touch-manipulation"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-black/50 text-white rounded-full text-sm">
                {currentIndex + 1} / {IMAGES.length}
              </div>

              {/* Swipe indicator for mobile */}
              <div className="sm:hidden absolute top-4 left-1/2 transform -translate-x-1/2 text-white/70 text-xs">
                Swipe për të lëvizur
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
