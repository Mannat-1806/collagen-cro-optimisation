import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2, ShieldCheck, Maximize2 } from 'lucide-react';
import { productData } from '../data/productData';

export default function MediaGallery() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const slides = productData.gallery;
  const current = slides[activeIdx];

  const handlePrev = () => {
    setActiveIdx(prev => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx(prev => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section aria-label="Official Product Photography" className="flex flex-col gap-4">
      {/* Main Photographic Stage */}
      <div className="relative aspect-square w-full bg-[#FFFFFF] border border-[#E4DCD0] overflow-hidden group shadow-[0_10px_30px_-15px_rgba(26,25,23,0.06)]">
        
        {/* Top Floating Attribution Label */}
        <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FAF8F5]/90 backdrop-blur-md border border-[#E4DCD0] text-[10px] font-mono tracking-wider uppercase text-[#1D382B]">
            <CheckCircle2 className="w-3 h-3 text-[#1D382B]" aria-hidden="true" />
            Official Brand Photography
          </span>
        </div>

        {/* Zoom Toggle Indicator */}
        <button
          type="button"
          onClick={() => setIsZoomed(!isZoomed)}
          className="absolute top-4 right-4 z-10 p-2 bg-[#FAF8F5]/90 backdrop-blur-md border border-[#E4DCD0] text-[#5C5850] hover:text-[#1A1917] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1D382B]"
          aria-label={isZoomed ? "Reset zoom" : "Zoom product image"}
        >
          <Maximize2 className="w-3.5 h-3.5" aria-hidden="true" />
        </button>

        {/* Authentic Image Render */}
        <div 
          className="w-full h-full flex items-center justify-center p-2 sm:p-4 transition-transform duration-500 ease-out cursor-zoom-in"
          onClick={() => setIsZoomed(!isZoomed)}
        >
          <img
            src={current.src}
            alt={current.title}
            className={`w-full h-full object-contain transition-all duration-300 ${
              isZoomed ? 'scale-125' : 'scale-100'
            }`}
            loading="eager"
          />
        </div>

        {/* Carousel Arrow Controls */}
        <button
          type="button"
          onClick={handlePrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-[#FAF8F5]/90 hover:bg-[#FFFFFF] border border-[#E4DCD0] text-[#1A1917] transition-all opacity-0 group-hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1D382B]"
          aria-label="Previous product photograph"
        >
          <ChevronLeft className="w-4 h-4" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-[#FAF8F5]/90 hover:bg-[#FFFFFF] border border-[#E4DCD0] text-[#1A1917] transition-all opacity-0 group-hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1D382B]"
          aria-label="Next product photograph"
        >
          <ChevronRight className="w-4 h-4" aria-hidden="true" />
        </button>

        {/* Bottom Slide Meta */}
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-[#5C5850] bg-[#FAF8F5]/90 backdrop-blur-md px-3 py-1.5 border border-[#E4DCD0]">
          <span className="truncate pr-2">{current.caption}</span>
          <span className="shrink-0 text-[#1D382B] font-bold">
            0{activeIdx + 1} / 0{slides.length}
          </span>
        </div>
      </div>

      {/* Synchronized Thumbnail Row */}
      <div className="grid grid-cols-4 gap-2 sm:gap-3" role="tablist" aria-label="Product photography thumbnails">
        {slides.map((slide, idx) => {
          const isSelected = activeIdx === idx;
          return (
            <button
              key={slide.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => {
                setActiveIdx(idx);
                setIsZoomed(false);
              }}
              className={`relative aspect-square border transition-all p-1 bg-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1D382B] ${
                isSelected
                  ? 'border-[#1D382B] ring-1 ring-[#1D382B]/30'
                  : 'border-[#E4DCD0] opacity-70 hover:opacity-100'
              }`}
            >
              <img
                src={slide.src}
                alt={slide.title}
                className="w-full h-full object-contain"
                loading="lazy"
              />
              <span className="sr-only">{slide.thumbLabel}</span>
            </button>
          );
        })}
      </div>

      {/* Sourcing Source Verification Note */}
      <div className="flex items-center justify-between text-[10px] font-mono text-[#8C867A] pt-1 border-t border-[#E4DCD0]">
        <span>Imagery: Official Wellbeing Nutrition CDN Assets</span>
        <span>Resolution: 1080 × 1080px</span>
      </div>
    </section>
  );
}
