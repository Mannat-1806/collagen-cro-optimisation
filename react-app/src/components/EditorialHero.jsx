import React, { useState, useRef, useEffect } from 'react';
import { 
  Check, 
  ZoomIn, 
  X, 
  ShoppingBag, 
  ArrowRight, 
  Minus, 
  Plus, 
  Star,
  Truck,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Sparkles,
  Info
} from 'lucide-react';
import { productData } from '../data/productData';
import { useCart } from '../context/CartContext';

export default function EditorialHero({ selectedPack, setSelectedPack }) {
  const { gallery } = productData;
  const { addToCart, setIsCartOpen, setIsPrototypeModalOpen } = useCart();
  
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [justAdded, setJustAdded] = useState(false);
  
  const thumbRailRef = useRef(null);

  // Dynamically compute active gallery so the primary slide matches the selected pack
  const currentGallery = [
    {
      id: `slide-pack-${selectedPack.id}`,
      src: selectedPack.image || gallery[0].src,
      thumbLabel: `${selectedPack.name} Shot`,
      badge: `${selectedPack.name} · ${selectedPack.servings} Servings`,
      title: `Wellbeing Nutrition Korean Marine Collagen Peptides (${selectedPack.name})`,
      caption: `${selectedPack.name} · ${selectedPack.weightGrams}g Unflavored Powder · ${selectedPack.servings} Servings (8g Calibrated Scoop Included)`,
      isOfficialAsset: true
    },
    ...gallery.slice(1)
  ];

  const activeImage = currentGallery[activeImageIndex] || currentGallery[0];

  // Synchronize gallery when a pack is selected: immediately show that pack's product bundle image
  const handleSelectPack = (pack) => {
    setSelectedPack(pack);
    setActiveImageIndex(0);
  };

  const handlePrev = () => {
    setActiveImageIndex(prev => (prev === 0 ? currentGallery.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveImageIndex(prev => (prev === currentGallery.length - 1 ? 0 : prev + 1));
  };

  // Scroll active thumbnail into view
  useEffect(() => {
    if (thumbRailRef.current) {
      const activeThumb = thumbRailRef.current.children[activeImageIndex];
      if (activeThumb) {
        activeThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [activeImageIndex]);

  const handleAddToCart = () => {
    setIsAdding(true);
    setTimeout(() => {
      addToCart(selectedPack, quantity);
      setIsAdding(false);
      setJustAdded(true);
      setIsCartOpen(true);
      setTimeout(() => setJustAdded(false), 2000);
    }, 200);
  };

  const handleBuyNow = () => {
    addToCart(selectedPack, quantity);
    setIsPrototypeModalOpen(true);
  };

  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const totalPrice = selectedPack.price * quantity;
  const totalMrp = selectedPack.mrp * quantity;
  const totalSavings = totalMrp - totalPrice;

  return (
    <section 
      id="hero" 
      aria-label="Product Details and Purchase Options"
      className="relative pt-4 pb-12 sm:pt-8 sm:pb-16 bg-[#FAF8F5] border-b border-[#EAE3D9]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="pb-4 mb-4 sm:mb-6 border-b border-[#EAE3D9] text-xs font-sans text-[#736E65]">
          <ol className="flex items-center gap-1.5 flex-wrap">
            <li><a href="/" className="hover:text-[#0D9488] transition-colors">Home</a></li>
            <li><span className="text-[#CCC4B6]">/</span></li>
            <li><a href="#benefits" onClick={(e) => scrollToSection(e, 'benefits')} className="hover:text-[#0D9488] transition-colors">Collagen Peptides</a></li>
            <li><span className="text-[#CCC4B6]">/</span></li>
            <li className="text-[#1A1917] font-medium truncate" aria-current="page">Pure Korean Marine Collagen Peptides</li>
          </ol>
        </nav>

        {/* Master Two-Column Shopping Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: Product Visual Gallery (12 High-Res Slides) */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            
            {/* Main Stage Card */}
            <div className="relative w-full aspect-square max-h-[480px] sm:max-h-[540px] bg-white border border-[#EAE3D9] rounded-2xl overflow-hidden flex items-center justify-center shadow-xs">
              
              {/* Product Photograph / Slide */}
              <img
                src={activeImage.src}
                alt={activeImage.title}
                className="w-full h-full object-contain p-2 sm:p-4 transition-transform duration-300 ease-out hover:scale-[1.02]"
                loading="eager"
                fetchPriority="high"
              />

              {/* Top-Left Category Badge */}
              <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 bg-[#F0FDFA]/95 backdrop-blur-xs border border-[#99F6E4] rounded-full text-[11px] font-sans font-medium text-[#0D9488] shadow-2xs">
                <Sparkles className="w-3 h-3 text-[#0D9488]" aria-hidden="true" />
                <span>{activeImage.badge || 'Verified Formulation'}</span>
              </div>

              {/* Top-Right Slide Counter */}
              <div className="absolute top-3 right-3 px-2.5 py-1 bg-[#1A1917]/75 backdrop-blur-xs text-white text-[11px] font-mono rounded-full">
                {String(activeImageIndex + 1).padStart(2, '0')} / {String(currentGallery.length).padStart(2, '0')}
              </div>

              {/* Previous Slide Button */}
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous slide"
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 hover:bg-white border border-[#EAE3D9] text-[#1A1917] shadow-sm hover:shadow transition-all focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
              >
                <ChevronLeft className="w-5 h-5" aria-hidden="true" />
              </button>

              {/* Next Slide Button */}
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next slide"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 hover:bg-white border border-[#EAE3D9] text-[#1A1917] shadow-sm hover:shadow transition-all focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
              >
                <ChevronRight className="w-5 h-5" aria-hidden="true" />
              </button>

              {/* Lightbox Trigger Button */}
              <button
                type="button"
                onClick={() => setIsZoomOpen(true)}
                aria-label="Enlarge image"
                className="absolute bottom-3 right-3 p-2 rounded-lg bg-white/90 hover:bg-white border border-[#EAE3D9] text-[#5C5850] hover:text-[#1A1917] shadow-2xs hover:shadow-xs transition-all focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
              >
                <ZoomIn className="w-4 h-4" aria-hidden="true" />
              </button>

              {/* Subtle Slide Caption Bar */}
              <div className="absolute bottom-3 left-3 right-12 text-[11px] font-sans text-[#524E47] bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-md border border-[#EAE3D9] truncate">
                {activeImage.title}
              </div>

            </div>

            {/* Clickable Thumbnail Rail (12 Slides) */}
            <div className="relative mt-1">
              <div 
                ref={thumbRailRef}
                className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 px-0.5 scrollbar-thin scroll-smooth"
                role="tablist"
                aria-label="Product image slides"
              >
                {currentGallery.map((img, idx) => {
                  const isSelected = activeImageIndex === idx;
                  return (
                    <button
                      key={img.id}
                      type="button"
                      role="tab"
                      aria-selected={isSelected}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative shrink-0 w-16 h-16 sm:w-18 sm:h-18 rounded-xl border-2 overflow-hidden p-1 transition-all flex items-center justify-center bg-white ${
                        isSelected 
                          ? 'border-[#0D9488] ring-2 ring-[#0D9488]/30 shadow-xs' 
                          : 'border-[#EAE3D9] hover:border-[#0D9488]/50 opacity-80 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img.src}
                        alt=""
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                      <span className="sr-only">{img.thumbLabel}</span>
                      
                      {/* Active Thumbnail Indicator Pip */}
                      {isSelected && (
                        <span className="absolute bottom-0.5 right-0.5 w-2 h-2 rounded-full bg-[#0D9488]" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Micro Gallery Guidance Note */}
              <div className="flex items-center justify-between text-[11px] font-sans text-[#736E65] pt-1 px-1">
                <span>Click thumbnails to inspect clinical trials, usage, and nutrition facts</span>
                <span className="font-mono">{currentGallery.length} verified slides</span>
              </div>
            </div>

          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Real Ecommerce Shopping Buy Box (Normal Flow) */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 flex flex-col gap-5 bg-white border border-[#EAE3D9] rounded-2xl p-5 sm:p-7 shadow-xs">
            
            {/* Header: Title, Category & Ratings */}
            <div className="flex flex-col gap-2 border-b border-[#EAE3D9] pb-4">
              
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 text-[11px] font-sans uppercase tracking-wider font-semibold text-[#0D9488] bg-[#F0FDFA] px-2.5 py-0.5 rounded-full border border-[#99F6E4]">
                  Pure Korean Marine Formula
                </span>
                <span className="text-[11px] font-sans text-[#736E65]">
                  &lt;1000 Da
                </span>
              </div>

              <h1 className="font-serif text-2xl sm:text-3xl text-[#1A1917] font-normal tracking-tight leading-tight">
                {productData.title}
              </h1>

              <p className="text-xs sm:text-sm font-sans text-[#524E47] leading-relaxed">
                {productData.subtitle}
              </p>

              {/* Verified Rating & Sales Proof */}
              <div className="flex items-center gap-2 pt-1 text-xs">
                <div className="flex items-center text-[#0D9488]" aria-label="Rated 4.74 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-3.5 h-3.5 fill-[#0D9488] text-[#0D9488]" 
                      aria-hidden="true" 
                    />
                  ))}
                </div>
                <span className="font-mono font-bold text-[#1A1917]">4.74 / 5.0</span>
                <span className="text-[#CCC4B6]">·</span>
                <a 
                  href="#reviews" 
                  onClick={(e) => scrollToSection(e, 'reviews')}
                  className="text-[#0D9488] hover:underline font-sans"
                >
                  571 verified reviews
                </a>
                <span className="text-[#CCC4B6]">·</span>
                <span className="px-2 py-0.5 bg-[#FAF8F5] border border-[#EAE3D9] rounded-full text-[11px] font-medium text-[#524E47]">
                  65k+ Units Sold
                </span>
              </div>

            </div>

            {/* Live Pricing Block */}
            <div className="flex flex-col gap-1.5 p-3.5 sm:p-4 bg-[#FAF8F5] border border-[#EAE3D9] rounded-xl">
              <div className="flex items-baseline justify-between gap-3">
                <div className="flex items-baseline gap-2.5">
                  <span className="text-3xl sm:text-4xl font-serif text-[#1A1917] font-semibold tracking-tight">
                    ₹{totalPrice.toLocaleString('en-IN')}
                  </span>
                  <span className="text-sm font-mono text-[#8C867A] line-through">
                    MRP ₹{totalMrp.toLocaleString('en-IN')}
                  </span>
                </div>
                {selectedPack.discountPercent > 0 && (
                  <span className="px-2.5 py-1 bg-[#0D9488] text-white text-xs font-semibold rounded-full shadow-2xs">
                    Save {selectedPack.discountPercent}%
                  </span>
                )}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-xs font-sans">
                <div className="inline-flex items-center gap-1.5 text-[#0D9488] font-medium">
                  <span className="font-bold">₹{selectedPack.costPerDay}/day</span>
                  <span className="text-[#CCC4B6]">·</span>
                  <span>{selectedPack.servings * quantity} daily servings</span>
                </div>
                <span className="text-[11px] text-[#736E65]">
                  Inclusive of all taxes &amp; free shipping
                </span>
              </div>
            </div>

            {/* Pack Selector (4 Verified Options with Product Bundle Imagery) */}
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center justify-between text-xs font-sans font-medium text-[#524E47]">
                <span className="uppercase tracking-wider font-semibold text-[11px]">Select Pack Supply</span>
                {totalSavings > 0 && (
                  <span className="text-[#0D9488] font-semibold">
                    Save {selectedPack.discountPercent}% (₹{totalSavings.toLocaleString('en-IN')} vs MRP)
                  </span>
                )}
              </div>

              <div className="grid grid-cols-2 gap-2 sm:gap-2.5" role="radiogroup" aria-label="Select pack size">
                {productData.packs.map((pack) => {
                  const isSelected = selectedPack.id === pack.id;
                  return (
                    <button
                      key={pack.id}
                      type="button"
                      role="radio"
                      aria-checked={isSelected}
                      onClick={() => handleSelectPack(pack)}
                      className={`group p-2 sm:p-2.5 rounded-xl text-left border-2 transition-all flex flex-col justify-between relative cursor-pointer ${
                        isSelected
                          ? 'border-[#0D9488] bg-[#F0FDFA] shadow-xs ring-1 ring-[#0D9488]/30'
                          : 'border-[#EAE3D9] bg-white hover:border-[#0D9488]/40 hover:bg-[#FAF8F5]/60'
                      }`}
                    >
                      {/* Product Image at Top with Savings Badge & Radio Indicator */}
                      <div className="relative w-full aspect-4/3 sm:aspect-square max-h-24 sm:max-h-28 bg-[#FAF8F5] rounded-lg border border-[#EAE3D9] p-1.5 flex items-center justify-center overflow-hidden mb-1.5">
                        <img
                          src={pack.image}
                          alt={`${pack.name} - Korean Marine Collagen Peptides`}
                          className="w-full h-full object-contain transition-transform duration-200 group-hover:scale-105"
                          loading="eager"
                        />
                        {pack.discountPercent > 0 && (
                          <span className="absolute top-1 left-1 px-1.5 py-0.5 bg-[#0D9488] text-white text-[10px] font-sans font-bold rounded shadow-2xs">
                            Save {pack.discountPercent}%
                          </span>
                        )}
                        <span className={`absolute top-1 right-1 w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                          isSelected ? 'border-[#0D9488] bg-[#0D9488]' : 'border-[#C8BFB0] bg-white'
                        }`}>
                          {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                        </span>
                      </div>

                      {/* Middle: Pack Name & Prominent Pricing with MRP Strikethrough */}
                      <div>
                        <span className="font-sans font-semibold text-xs sm:text-sm text-[#1A1917] block leading-tight">
                          {pack.name}
                        </span>
                        <div className="flex items-baseline gap-1.5 mt-0.5">
                          <span className="font-serif font-bold text-sm sm:text-base text-[#1A1917]">
                            ₹{pack.price.toLocaleString('en-IN')}
                          </span>
                          <span className="font-mono text-[10px] sm:text-[11px] text-[#8C867A] line-through">
                            MRP ₹{pack.mrp.toLocaleString('en-IN')}
                          </span>
                        </div>
                      </div>

                      {/* Bottom: Servings & Price per Day */}
                      <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-sans text-[#524E47] pt-1 mt-1 border-t border-[#EAE3D9]/60">
                        <span className="text-[#0D9488] font-semibold">₹{pack.costPerDay}/day</span>
                        <span className="text-[#736E65]">{pack.servings} Servings</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quantity Stepper & Add to Cart / Buy Now CTAs */}
            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 items-stretch pt-1">
              
              {/* Stepper */}
              <div className="inline-flex items-center justify-between border border-[#D8CEBE] bg-[#FAF8F5] rounded-xl h-[48px] px-3 sm:w-32 shrink-0">
                <button
                  type="button"
                  onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                  disabled={quantity <= 1}
                  aria-label="Decrease quantity"
                  className="p-1.5 text-[#5C5850] hover:text-[#1A1917] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <Minus className="w-4 h-4" aria-hidden="true" />
                </button>
                <span className="text-sm font-semibold font-mono text-[#1A1917]">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(prev => Math.min(10, prev + 1))}
                  disabled={quantity >= 10}
                  aria-label="Increase quantity"
                  className="p-1.5 text-[#5C5850] hover:text-[#1A1917] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <Plus className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex-1 grid grid-cols-2 gap-2 sm:gap-2.5">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  disabled={isAdding}
                  className="w-full h-[48px] px-3 sm:px-4 bg-[#1D382B] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider rounded-xl hover:bg-[#14271E] active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1D382B]"
                >
                  {justAdded ? (
                    <>
                      <Check className="w-4 h-4 text-[#FAF8F5]" aria-hidden="true" />
                      <span>Added ✓</span>
                    </>
                  ) : isAdding ? (
                    <span>Adding...</span>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" aria-hidden="true" />
                      <span>Add to Cart</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleBuyNow}
                  className="w-full h-[48px] px-3 sm:px-4 bg-[#0D9488] text-white text-xs font-semibold uppercase tracking-wider rounded-xl hover:bg-[#0F766E] active:scale-[0.99] transition-all flex items-center justify-center gap-1.5 sm:gap-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
                >
                  <span>Buy Now</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>

            </div>

            {/* Reassurance & Value Strip */}
            <div className="pt-3 border-t border-[#EAE3D9] flex flex-col gap-2 text-xs font-sans text-[#6E6960]">
              <div className="grid grid-cols-2 gap-2">
                <span className="flex items-center gap-1.5 font-medium text-[#1A1917]">
                  <Truck className="w-4 h-4 text-[#0D9488]" />
                  <span>Free Pan-India Delivery</span>
                </span>
                <span className="flex items-center gap-1.5 font-medium text-[#1A1917]">
                  <Check className="w-4 h-4 text-[#0D9488]" />
                  <span>Calibrated 8g Scoop Inside</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#0D9488]" />
                  <span>Non-GMO &amp; 0g Sugar</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#0D9488]" />
                  <span>Tested Mercury-Free</span>
                </span>
              </div>

              {/* Delivery & Claims Note */}
              <div className="flex items-center justify-between pt-2 border-t border-[#F0EAE1] text-[11px] text-[#736E65]">
                <a 
                  href="#delivery-returns" 
                  onClick={(e) => scrollToSection(e, 'delivery-returns')}
                  className="hover:text-[#0D9488] underline decoration-[#C5BDAF] underline-offset-2"
                >
                  Delivery &amp; Returns Policy
                </a>
                <span className="text-[#0D9488] font-medium">48h Damaged/Defective Claims</span>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* High-Resolution Modal / Lightbox View */}
      {isZoomOpen && (
        <div 
          role="dialog"
          aria-modal="true"
          aria-label="High-resolution packaging view"
          className="fixed inset-0 z-50 bg-[#1A1917]/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsZoomOpen(false)}
        >
          <div 
            className="relative max-w-3xl w-full bg-[#FAF8F5] border border-[#EAE3D9] rounded-2xl p-4 sm:p-6 shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#EAE3D9]">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 bg-[#F0FDFA] text-[#0D9488] text-[11px] font-semibold rounded-full border border-[#99F6E4]">
                  {activeImage.badge || 'Gallery'}
                </span>
                <span className="text-xs font-sans font-medium text-[#1A1917] truncate max-w-xs sm:max-w-md">
                  {activeImage.title}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsZoomOpen(false)}
                aria-label="Close high-resolution zoom"
                className="p-1.5 rounded-lg text-[#736E65] hover:text-[#1A1917] hover:bg-[#EAE3D9]/60 transition-colors"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
            
            <div className="relative aspect-square max-h-[65vh] w-full flex items-center justify-center overflow-hidden bg-white rounded-xl my-4">
              <img
                src={activeImage.src}
                alt={activeImage.title}
                className="w-full h-full object-contain p-4"
              />
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-[#EAE3D9] text-xs font-sans text-[#736E65]">
              <p className="truncate mr-4">{activeImage.caption}</p>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="px-2.5 py-1 bg-white border border-[#EAE3D9] rounded-md hover:bg-[#FAF8F5]"
                >
                  Prev
                </button>
                <span className="font-mono text-[11px]">{activeImageIndex + 1} / {currentGallery.length}</span>
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-2.5 py-1 bg-white border border-[#EAE3D9] rounded-md hover:bg-[#FAF8F5]"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}