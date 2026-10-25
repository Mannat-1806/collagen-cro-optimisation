import React, { useEffect } from 'react';
import { X, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function PrototypeModal() {
  const { isPrototypeModalOpen, setIsPrototypeModalOpen, items, subtotal } = useCart();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isPrototypeModalOpen) {
        setIsPrototypeModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPrototypeModalOpen, setIsPrototypeModalOpen]);

  if (!isPrototypeModalOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A1917]/50 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="w-full max-w-lg bg-[#FAF8F5] border border-[#E4DCD0] p-6 sm:p-8 shadow-2xl flex flex-col gap-6 animate-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="flex items-start justify-between border-b border-[#E4DCD0] pb-4">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#736E65]">
              Evaluation Boundary
            </span>
            <h2 id="modal-title" className="font-serif text-2xl text-[#1A1917] font-normal tracking-tight mt-0.5">
              Academic CRO Prototype Notice
            </h2>
          </div>

          <button
            type="button"
            onClick={() => setIsPrototypeModalOpen(false)}
            className="p-1.5 text-[#736E65] hover:text-[#1A1917] hover:bg-[#F4F0E8] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1D382B]"
            aria-label="Close notice"
          >
            <X className="w-5 h-5 stroke-[1.5]" aria-hidden="true" />
          </button>
        </div>

        {/* Text */}
        <div className="text-xs sm:text-sm text-[#5C5850] flex flex-col gap-3 leading-relaxed font-sans">
          <div className="flex items-start gap-2.5">
            <Check className="w-4 h-4 text-[#1D382B] shrink-0 mt-0.5" aria-hidden="true" />
            <p>
              <strong className="text-[#1A1917]">Micro-Conversion Intent Recorded:</strong> The prototype recorded successful navigation from product detail page through cart selection to simulated checkout.
            </p>
          </div>

          <div className="flex items-start gap-2.5">
            <Check className="w-4 h-4 text-[#1D382B] shrink-0 mt-0.5" aria-hidden="true" />
            <p>
              <strong className="text-[#1A1917]">Zero Transactional Footprint:</strong> This prototype is strictly decoupled from live payment gateways. No actual payment details, addresses, or phone numbers are requested or stored.
            </p>
          </div>
        </div>

        {/* Monograph Payload */}
        <div className="p-4 bg-[#F4F0E8] border border-[#E4DCD0] font-mono text-xs flex flex-col gap-2">
          <span className="text-[10px] uppercase tracking-wider text-[#736E65]">
            Simulated State Machine Payload
          </span>
          <div className="flex justify-between border-b border-[#D8CEBE] pb-1.5">
            <span className="text-[#5C5850]">Selected Units:</span>
            <span className="font-bold text-[#1A1917]">{items.reduce((s, i) => s + i.quantity, 0)} units</span>
          </div>
          <div className="flex justify-between border-b border-[#D8CEBE] pb-1.5">
            <span className="text-[#5C5850]">Calculated Subtotal:</span>
            <span className="font-bold text-[#1A1917]">₹{subtotal.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#5C5850]">Target SKU:</span>
            <span className="text-[#1A1917] truncate max-w-[200px]">Korean Marine Collagen Peptides (200g)</span>
          </div>
        </div>

        {/* Dismiss Button */}
        <button
          type="button"
          onClick={() => setIsPrototypeModalOpen(false)}
          className="w-full py-3 bg-[#1D382B] text-[#FAF8F5] text-xs font-mono uppercase tracking-widest hover:bg-[#14271E] transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1D382B]"
        >
          Return to Prototype
        </button>

      </div>
    </div>
  );
}
