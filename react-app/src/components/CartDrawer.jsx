import React, { useEffect } from 'react';
import { X, Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    subtotal,
    setIsPrototypeModalOpen
  } = useCart();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isCartOpen) {
        setIsCartOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCartOpen, setIsCartOpen]);

  if (!isCartOpen) return null;

  const handleCheckoutClick = () => {
    setIsCartOpen(false);
    setIsPrototypeModalOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true" aria-labelledby="cart-title">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#1A1917]/50 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-8 sm:pl-10">
        <div className="w-screen max-w-md bg-[#FAF8F5] border-l border-[#EAE3D9] shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-[#EAE3D9] flex items-center justify-between">
            <div>
              <span className="text-[10px] font-sans uppercase tracking-wider font-semibold text-[#736E65]">
                Order Selection
              </span>
              <h2 id="cart-title" className="font-serif text-2xl text-[#1A1917] font-normal tracking-tight">
                Shopping Bag ({items.reduce((s, i) => s + i.quantity, 0)})
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-[#736E65] hover:text-[#1A1917] hover:bg-[#F0EAE1] rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1D382B]"
              aria-label="Close cart drawer"
            >
              <X className="w-5 h-5 stroke-[1.8]" aria-hidden="true" />
            </button>
          </div>

          {/* Delivery Note */}
          <div className="px-5 sm:px-6 py-2.5 bg-[#F5EFEB] border-b border-[#EAE3D9] text-xs font-sans text-[#524E47]">
            Complimentary Courier Delivery Included on All Orders
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 flex flex-col gap-4">
            {items.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center p-8 text-[#736E65]">
                <p className="font-serif text-2xl text-[#1A1917]">Your bag is empty</p>
                <p className="text-xs font-sans text-[#8C867A] mt-2">
                  Select a product pack on the page to begin your order.
                </p>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.packId}
                  className="p-4 bg-white border border-[#EAE3D9] rounded-xl flex flex-col gap-3 shadow-2xs"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-serif text-lg text-[#1A1917] font-normal leading-snug">
                        Korean Marine Collagen Peptides
                      </h3>
                      <p className="text-xs font-sans font-medium text-[#736E65] mt-0.5">{item.name}</p>
                      <p className="text-[11px] font-mono text-[#8C867A]">
                        {item.servings * item.quantity} daily 8g servings
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeFromCart(item.packId)}
                      className="p-1 text-[#8C867A] hover:text-rose-700 transition-colors focus-visible:ring-1 focus-visible:ring-rose-600 rounded"
                      aria-label={`Remove ${item.name} from bag`}
                    >
                      <Trash2 className="w-4 h-4 stroke-[1.8]" aria-hidden="true" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between pt-2.5 border-t border-[#EAE3D9]">
                    {/* Stepper */}
                    <div className="flex items-center border border-[#D8CEBE] bg-[#FAF8F5] rounded-lg px-2 py-0.5 font-mono text-xs">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.packId, item.quantity - 1)}
                        className="p-1 text-[#5C5850] hover:text-[#1A1917] focus-visible:ring-1 focus-visible:ring-[#1D382B]"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" aria-hidden="true" />
                      </button>
                      <span className="font-bold text-[#1A1917] px-2.5">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.packId, item.quantity + 1)}
                        className="p-1 text-[#5C5850] hover:text-[#1A1917] focus-visible:ring-1 focus-visible:ring-[#1D382B]"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" aria-hidden="true" />
                      </button>
                    </div>

                    {/* Total */}
                    <span className="font-serif text-lg text-[#1A1917] font-medium">
                      ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Block */}
          {items.length > 0 && (
            <div className="p-5 sm:p-6 border-t border-[#EAE3D9] bg-[#F5EFEB] flex flex-col gap-3">
              <div className="flex items-baseline justify-between text-base">
                <span className="font-sans text-xs uppercase tracking-wider font-semibold text-[#736E65]">Subtotal</span>
                <span className="font-serif text-2xl text-[#1A1917] font-medium">
                  ₹{subtotal.toLocaleString('en-IN')}
                </span>
              </div>
              <div className="flex flex-col gap-0.5 text-xs font-sans text-[#736E65]">
                <span>Taxes &amp; complimentary shipping included.</span>
                <span>Shop with confidence: 48h damaged/defective claims policy.</span>
              </div>

              <button
                type="button"
                onClick={handleCheckoutClick}
                className="w-full py-3.5 px-4 bg-[#1D382B] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider rounded-xl hover:bg-[#14271E] transition-all flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D382B] min-h-[48px] shadow-sm"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <p className="text-[10px] text-center font-sans text-[#8C867A]">
                [CRO Prototype · Simulates checkout intent with zero data collection]
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
