import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function ExpandableSection({ id, title, defaultOpen = false, children }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-[#EAE3D9] py-1.5 transition-colors min-w-0 max-w-full">
      <h3>
        <button
          type="button"
          id={`accordion-header-${id}`}
          aria-expanded={isOpen}
          aria-controls={`accordion-panel-${id}`}
          onClick={() => setIsOpen(!isOpen)}
          className="w-full py-4 text-left flex items-center justify-between gap-4 font-serif text-lg sm:text-xl text-[#1A1917] hover:text-[#1D382B] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1D382B]"
        >
          <span className="font-normal pr-2">{title}</span>
          <span className={`p-1.5 rounded-full transition-colors shrink-0 ${isOpen ? 'bg-[#FAF8F5] text-[#1D382B]' : 'text-[#8C867A] hover:bg-[#FAF8F5]'}`}>
            {isOpen ? (
              <Minus className="w-4 h-4 stroke-[1.8]" aria-hidden="true" />
            ) : (
              <Plus className="w-4 h-4 stroke-[1.8]" aria-hidden="true" />
            )}
          </span>
        </button>
      </h3>
      
      <div
        id={`accordion-panel-${id}`}
        role="region"
        aria-labelledby={`accordion-header-${id}`}
        hidden={!isOpen}
        className={`pb-5 pt-1 text-xs sm:text-sm text-[#524E47] leading-relaxed min-w-0 max-w-full ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        {children}
      </div>
    </div>
  );
}
