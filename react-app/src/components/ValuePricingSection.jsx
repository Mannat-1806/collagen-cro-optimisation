import React, { useState } from 'react';
import { Minus, Plus, ShoppingBag, Check, ShieldCheck, Truck, Package, HelpCircle, ArrowRight } from 'lucide-react';
import { productData } from '../data/productData';
import { useCart } from '../context/CartContext';

export default function ValuePricingSection({ selectedPack, setSelectedPack, pricingCtaRef }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [pincode, setPincode] = useState('');
  const [pincodeStatus, setPincodeStatus] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const handlePackChange = (pack) => {
    setSelectedPack(pack);
  };

  const handleQuantityDelta = (delta) => {
    setQuantity((prev) => Math.max(1, Math.min(10, prev + delta)));
  };

  const handleAddToCart = () => {
    setIsAdding(true);
    setTimeout(() => {
      addToCart(selectedPack, quantity);
      setIsAdding(false);
      setJustAdded(true);
      setTimeout(() => setJustAdded(false), 2500);
    }, 250);
  };

  const handlePincodeCheck = (e) => {
    e.preventDefault();
    const cleanPin = pincode.trim();
    if (/^[1-9][0-9]{5}$/.test(cleanPin)) {
      setPincodeStatus('valid');
    } else {
      setPincodeStatus('invalid');
    }
  };

  const totalPrice = selectedPack.price * quantity;
  const totalMrp = selectedPack.mrp * quantity;
  const totalServings = selectedPack.servings * quantity;

  return (
    <section 
      id="value-purchase" 
      aria-labelledby="pricing-heading" 
      className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-[#E8E2D8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl border-b border-[#E8E2D8] pb-8 mb-12 sm:mb-16">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#736E65] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1D382B]" />
            Evaluation &amp; Serving Economics
          </span>
          <h2 id="pricing-heading" className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A1917] font-normal tracking-tight mt-2 leading-[1.15]">
            Transparent Value &amp; Pack Options
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#5C5850] leading-relaxed font-sans">
            Now that you understand the science, formulation, and daily routine, evaluate the serving economics below. We disclose every rupee, exact serving counts, and realistic cost-per-day calculations.
          </p>
        </div>

        {/* Two-Column Value & Purchase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Transparent Value Breakdown & Inclusions */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            <div className="p-6 bg-[#FAF8F5] border border-[#E8E2D8]">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#736E65]">
                What Every Delivery Includes
              </span>
              <h3 className="font-serif text-xl text-[#1A1917] font-normal mt-1 mb-4">
                Full Formulation Transparency
              </h3>

              <ul className="flex flex-col gap-3 text-xs text-[#5C5850]">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#1D382B] shrink-0 mt-0.5" aria-hidden="true" />
                  <span><strong>100% Pure Hydrolyzed Marine Peptides:</strong> No maltodextrin, sugar, sweeteners, or fillers.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#1D382B] shrink-0 mt-0.5" aria-hidden="true" />
                  <span><strong>Calibrated 8g Measure Scoop:</strong> Included inside each container for precise daily dosing.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#1D382B] shrink-0 mt-0.5" aria-hidden="true" />
                  <span><strong>Hermetic Induction Seal:</strong> Medical-grade barrier protection against ambient humidity and air.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#1D382B] shrink-0 mt-0.5" aria-hidden="true" />
                  <span><strong>Batch Heavy-Metal Screening:</strong> Certified non-detectable mercury and lead before dispatch.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#1D382B] shrink-0 mt-0.5" aria-hidden="true" />
                  <span><strong>Complimentary Ground Shipping:</strong> Reliable, tracked delivery across all verified Indian PIN codes.</span>
                </li>
              </ul>
            </div>

            {/* Daily Serving Economics Summary Box */}
            <div className="p-6 bg-[#FAF8F5] border border-[#E8E2D8] flex flex-col gap-3 font-mono text-xs">
              <span className="text-[10px] uppercase tracking-wider text-[#736E65]">
                Serving Math &amp; Longevity
              </span>

              <div className="flex justify-between border-b border-[#E8E2D8] pb-2">
                <span className="text-[#5C5850]">Selected Pack</span>
                <span className="font-bold text-[#1A1917]">{selectedPack.name}</span>
              </div>
              <div className="flex justify-between border-b border-[#E8E2D8] pb-2">
                <span className="text-[#5C5850]">Daily Serving Measure</span>
                <span className="text-[#1A1917]">8g per day (1 level scoop)</span>
              </div>
              <div className="flex justify-between border-b border-[#E8E2D8] pb-2">
                <span className="text-[#5C5850]">Total Servings in Cart</span>
                <span className="font-bold text-[#1D382B]">{totalServings} Days of Daily Routine</span>
              </div>
              <div className="flex justify-between items-baseline pt-1">
                <span className="text-[#5C5850]">True Daily Cost</span>
                <span className="text-base font-bold text-[#1D382B]">₹{selectedPack.costPerDay} / day</span>
              </div>
            </div>

            {/* Pincode Delivery Estimator */}
            <div className="p-6 bg-[#FAF8F5] border border-[#E8E2D8]">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#736E65] block mb-1">
                Delivery Availability &amp; Timelines
              </span>
              <p className="text-xs text-[#5C5850] font-sans mb-3">
                Enter your 6-digit postal PIN code to confirm delivery timeframe:
              </p>

              <form onSubmit={handlePincodeCheck} className="flex gap-2">
                <input
                  type="text"
                  maxLength={6}
                  value={pincode}
                  onChange={(e) => {
                    setPincode(e.target.value);
                    if (pincodeStatus) setPincodeStatus(null);
                  }}
                  placeholder="Enter 6-digit PIN"
                  aria-label="Enter 6-digit Indian PIN code"
                  className="flex-1 px-3 py-2 text-xs font-mono bg-[#FFFFFF] border border-[#E8E2D8] focus:border-[#1D382B] focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#1A1917] text-[#FAF8F5] text-xs font-mono uppercase tracking-wider hover:bg-[#33312E] transition-colors"
                >
                  Verify
                </button>
              </form>

              {pincodeStatus === 'valid' && (
                <div className="mt-3 text-xs text-[#1D382B] flex items-center gap-1.5 font-mono">
                  <Truck className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Standard Delivery Available: 2–4 Business Days (Free)</span>
                </div>
              )}
              {pincodeStatus === 'invalid' && (
                <div className="mt-3 text-xs text-[#8C7355] flex items-center gap-1.5 font-mono">
                  <span>Please enter a valid 6-digit Indian PIN code.</span>
                </div>
              )}
            </div>

          </div>

          {/* Right Column: Pack Selection, Quantity & Primary Add to Bag Box */}
          <div className="lg:col-span-7 bg-[#FAF8F5] border-2 border-[#1D382B] p-6 sm:p-10 shadow-[0_20px_40px_-20px_rgba(29,56,43,0.08)] flex flex-col gap-8">
            
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#E8E2D8] pb-6 gap-2">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#736E65]">
                  Select Your Routine Option
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1917] font-normal tracking-tight mt-1">
                  Pure Marine Peptides Powder
                </h3>
              </div>

              <div className="text-right">
                <div className="text-2xl sm:text-3xl font-serif text-[#1A1917] font-normal">
                  ₹{totalPrice.toLocaleString('en-IN')}
                </div>
                <div className="text-xs font-mono text-[#736E65]">
                  MRP ₹{totalMrp.toLocaleString('en-IN')} · ₹{selectedPack.costPerDay}/day
                </div>
              </div>
            </div>

            {/* Pack Selector (Radio Options) */}
            <fieldset className="flex flex-col gap-3">
              <legend className="text-xs font-mono uppercase tracking-widest text-[#736E65] mb-2">
                Available Brand Packs
              </legend>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" role="radiogroup">
                {productData.packs.map((pack) => {
                  const isSelected = selectedPack.id === pack.id;
                  return (
                    <label
                      key={pack.id}
                      onClick={() => handlePackChange(pack)}
                      className={`relative p-5 border text-left cursor-pointer transition-all flex flex-col justify-between ${
                        isSelected
                          ? 'border-[#1D382B] bg-[#FFFFFF] ring-2 ring-[#1D382B]'
                          : 'border-[#E8E2D8] bg-[#FFFFFF] hover:border-[#A39C90]'
                      }`}
                    >
                      <input
                        type="radio"
                        name="pack-choice"
                        value={pack.id}
                        checked={isSelected}
                        onChange={() => handlePackChange(pack)}
                        className="sr-only"
                      />

                      <div>
                        <div className="flex items-center justify-between">
                          <span className="font-serif text-lg text-[#1A1917] font-normal">
                            {pack.name}
                          </span>
                          <span className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            isSelected ? 'border-[#1D382B] bg-[#1D382B]' : 'border-[#A39C90]'
                          }`}>
                            {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#FAF8F5]" />}
                          </span>
                        </div>

                        <p className="text-xs text-[#736E65] mt-1 font-sans">
                          {pack.desc}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-[#E8E2D8] flex items-baseline justify-between">
                        <span className="font-serif text-xl font-normal text-[#1A1917]">
                          ₹{pack.price.toLocaleString('en-IN')}
                        </span>
                        <span className="font-mono text-xs text-[#1D382B] font-bold">
                          ₹{pack.costPerDay}/day
                        </span>
                      </div>

                      {pack.id === 'pack-2-jars' && (
                        <span className="absolute -top-2.5 right-3 text-[10px] font-mono uppercase tracking-wider bg-[#1D382B] text-[#FAF8F5] px-2 py-0.5">
                          Verified Best Value
                        </span>
                      )}
                    </label>
                  );
                })}
              </div>
            </fieldset>

            {/* Quantity Selector & Live Total */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-[#E8E2D8]">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono uppercase tracking-widest text-[#736E65]">
                  Quantity
                </span>
                <div className="inline-flex items-center border border-[#E8E2D8] bg-[#FFFFFF]">
                  <button
                    type="button"
                    onClick={() => handleQuantityDelta(-1)}
                    disabled={quantity <= 1}
                    aria-label="Decrease quantity"
                    className="p-2.5 text-[#5C5850] hover:text-[#1A1917] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    <Minus className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                  <span className="w-10 text-center text-xs font-mono font-bold text-[#1A1917]">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleQuantityDelta(1)}
                    disabled={quantity >= 10}
                    aria-label="Increase quantity"
                    className="p-2.5 text-[#5C5850] hover:text-[#1A1917] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                </div>
              </div>

              <div className="text-right">
                <span className="text-xs font-mono text-[#736E65] block">Order Subtotal</span>
                <span className="text-xl font-serif text-[#1A1917] font-normal">
                  ₹{totalPrice.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            {/* Primary Add to Bag Action Button with Feedback */}
            <div ref={pricingCtaRef} className="flex flex-col gap-3 pt-2">
              <button
                type="button"
                onClick={handleAddToCart}
                disabled={isAdding}
                className={`w-full py-4 px-6 flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.15em] transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-[#1D382B] focus:ring-offset-2 ${
                  justAdded 
                    ? 'bg-[#1D382B] text-[#FAF8F5]' 
                    : 'bg-[#1D382B] hover:bg-[#15291F] text-[#FAF8F5]'
                }`}
              >
                {isAdding ? (
                  <span>Adding to Bag...</span>
                ) : justAdded ? (
                  <>
                    <Check className="w-4 h-4 text-[#FAF8F5]" aria-hidden="true" />
                    <span>Added to Bag Successfully</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4 text-[#FAF8F5]" aria-hidden="true" />
                    <span>Add to Bag — ₹{totalPrice.toLocaleString('en-IN')}</span>
                  </>
                )}
              </button>

              <p className="text-[11px] font-mono text-[#736E65] text-center">
                Academic CRO Prototype · No live charges or data collection · Dispatches next business day
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
