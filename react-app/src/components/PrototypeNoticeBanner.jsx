import React from 'react';

export default function PrototypeNoticeBanner() {
  return (
    <aside
      aria-label="Academic Prototype Evaluation Notice"
      className="bg-[#24221E] text-[#D8D2C6] text-[11px] py-2 px-4 tracking-wider uppercase font-sans border-b border-[#38342E] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 min-w-0">
        <p className="truncate text-xs min-w-0">
          <span className="text-[#A39C8F] font-medium mr-2">Prototype Archive:</span>
          University Product Management Capstone · Educational Model Only · No Real Commerce
        </p>
        <span className="hidden sm:inline-block text-[#A39C8F] shrink-0 text-[10px] tracking-widest font-mono">
          Target: Wellbeing Nutrition PDP
        </span>
      </div>
    </aside>
  );
}
