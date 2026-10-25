import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function StickyMobileCTA({ selectedPack, heroCtaRef }) {
  const { addToCart } = useCart();
  const [isVisible, setIsVisible] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    const targetElement = heroCtaRef?.current;
    if (!targetElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger only when hero CTA is scrolled past
        setIsVisible(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
        rootMargin: '-40px 0px 0px 0px'
      }
    );

    observer.observe(targetElement);

    return () => {
      observer.disconnect();
    };
  }, [heroCtaRef]);

  const handleStickyAddToCart = () => {
    setIsAdding(true);
    setTimeout(() => {
      addToCart(selectedPack, 1);
      setIsAdding(false);
    }, 200);
  };

  // Render strictly on mobile/tablet viewports (< 768px)
  return (
    <aside
      aria-label="Sticky Purchase Controls"
      className={`fixed bottom-0 left-0 right-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-t border-[#E4DCD0] p-3 md:hidden transition-transform duration-300 shadow-[0_-10px_20px_-10px_rgba(26,25,23,0.08)] ${
        isVisible ? 'translate-y-0' : 'translate-y-full pointer-events-none'
      }`}
    >
      <div className="max-w-md mx-auto flex items-center justify-between gap-3">
        {/* Pack Name & Synchronized Price */}
        <div className="flex flex-col">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#736E65] truncate max-w-[130px]">
            {selectedPack.name}
          </span>
          <div className="flex items-baseline gap-1.5">
            <span className="font-serif text-lg font-normal text-[#1A1917]">
              ₹{selectedPack.price.toLocaleString('en-IN')}
            </span>
            <span className="text-[10px] font-mono text-[#736E65]">
              (₹{selectedPack.costPerDay}/day)
            </span>
          </div>
        </div>

        {/* Action Button */}
        <button
          type="button"
          onClick={handleStickyAddToCart}
          disabled={isAdding}
          className="flex-1 max-w-[200px] flex items-center justify-center gap-2 py-3 px-4 bg-[#1D382B] text-[#FAF8F5] text-xs font-mono uppercase tracking-widest hover:bg-[#14271E] active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1D382B] min-h-[44px]"
        >
          {isAdding ? (
            <span>Adding...</span>
          ) : (
            <>
              <span>Add to Bag</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </>
          )}
        </button>
      </div>
    </aside>
  );
}
