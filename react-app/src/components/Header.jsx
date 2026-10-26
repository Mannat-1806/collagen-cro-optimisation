import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { totalItemsCount, setIsCartOpen } = useCart();

  return (
    <header className="sticky top-0 z-30 bg-[#FAF8F5]/92 backdrop-blur-md border-b border-[#EAE3D9] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-3">
        
        {/* Brand Wordmark */}
        <div className="flex items-center min-w-0">
          <a
            href="#hero"
            className="group flex flex-col focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1D382B] rounded-xs min-w-0"
            aria-label="Wellbeing Nutrition Home"
          >
            <span className="font-serif text-lg sm:text-2xl tracking-[0.1em] sm:tracking-[0.14em] font-medium text-[#1A1917] uppercase group-hover:text-[#1D382B] transition-colors truncate">
              Wellbeing Nutrition
            </span>
            <span className="text-[9px] sm:text-[10px] font-sans font-medium tracking-[0.12em] sm:tracking-[0.18em] text-[#8C867A] uppercase -mt-0.5 truncate">
              Korean Marine Collagen Peptides
            </span>
          </a>
        </div>

        {/* Clean, Simple Consumer Navigation */}
        <nav aria-label="Page Navigation" className="hidden md:flex items-center gap-7 lg:gap-9 text-xs tracking-wider uppercase font-medium text-[#5C5850] shrink-0">
          <a 
            href="#benefits" 
            className="hover:text-[#1D382B] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1D382B] py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1.5px] after:bg-[#1D382B] after:transition-all"
          >
            Benefits
          </a>
          <a 
            href="#science" 
            className="hover:text-[#1D382B] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1D382B] py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1.5px] after:bg-[#1D382B] after:transition-all"
          >
            Ingredients &amp; Science
          </a>
          <a 
            href="#reviews" 
            className="hover:text-[#1D382B] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1D382B] py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1.5px] after:bg-[#1D382B] after:transition-all"
          >
            Reviews
          </a>
          <a 
            href="#routine" 
            className="hover:text-[#1D382B] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1D382B] py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1.5px] after:bg-[#1D382B] after:transition-all"
          >
            How to Use
          </a>
        </nav>

        {/* Cart Drawer Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className="group flex items-center gap-2 py-1.5 px-3 sm:py-2 sm:px-3.5 bg-white/80 hover:bg-white border border-[#EAE3D9] hover:border-[#D8CEBE] rounded-full transition-all shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D382B]"
            aria-label={`Open bag containing ${totalItemsCount} items`}
          >
            <span className="hidden sm:inline-block text-xs uppercase tracking-wider font-sans font-medium text-[#5C5850] group-hover:text-[#1A1917]">
              Bag
            </span>
            <div className="relative flex items-center">
              <ShoppingBag className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#1A1917] stroke-[1.8]" aria-hidden="true" />
              {totalItemsCount > 0 && (
                <span
                  className="absolute -top-2 -right-2.5 bg-[#1D382B] text-[#FAF8F5] text-[10px] font-mono w-4 h-4 sm:w-4.5 sm:h-4.5 rounded-full flex items-center justify-center font-bold shadow-xs"
                  aria-live="polite"
                >
                  {totalItemsCount}
                </span>
              )}
            </div>
          </button>
        </div>

      </div>
    </header>
  );
}
