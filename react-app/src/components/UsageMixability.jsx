import React from 'react';
import { productData } from '../data/productData';
import { Coffee, Droplets, Sparkles, Clock, Check } from 'lucide-react';

export default function UsageMixability() {
  const { usageInstructions } = productData;

  const drinkOptions = [
    {
      icon: Coffee,
      title: 'Hot Coffee or Tea',
      desc: 'Heat-stable peptides dissolve completely without altering temperature, taste, or curdling milk.'
    },
    {
      icon: Droplets,
      title: 'Water or Fresh Juices',
      desc: 'Stirs cleanly into cold or room-temperature water, citrus juice, or coconut water in 10–15 seconds.'
    },
    {
      icon: Sparkles,
      title: 'Smoothies & Shakes',
      desc: 'Adds 7.9g of pure marine protein and bioactive amino acids with zero added sugar or texture changes.'
    }
  ];

  return (
    <section 
      id="routine" 
      aria-labelledby="usage-heading" 
      className="py-14 sm:py-20 bg-[#FAF8F5] border-b border-[#EAE3D9]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-10 sm:mb-14">
          <div className="flex items-center gap-2 text-xs font-sans font-semibold uppercase tracking-wider text-[#0D9488] mb-2">
            <span className="w-2 h-2 rounded-full bg-[#0D9488]" />
            <span>Effortless Preparation</span>
          </div>
          
          <h2 
            id="usage-heading" 
            className="font-serif text-3xl sm:text-4xl text-[#1A1917] font-normal tracking-tight"
          >
            How to Take Korean Marine Collagen
          </h2>
          
          <p className="mt-3 text-sm sm:text-base text-[#524E47] font-sans leading-relaxed">
            One calibrated scoop (8g) daily in 250ml of your favorite beverage. Completely unflavored and soluble in hot or cold liquids.
          </p>
        </div>

        {/* 2-Column: Authentic Usage Graphic & 3 Drink Tiles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Official Preparation Graphic */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <div className="relative aspect-square max-h-[420px] mx-auto w-full bg-white border border-[#EAE3D9] rounded-2xl overflow-hidden shadow-xs flex items-center justify-center p-3">
              <img
                src="/product-gallery/slide-09-how_to_use_collagen.jpg"
                alt="One Scoop Daily Beauty Ritual - How to Use Korean Marine Collagen"
                className="w-full h-full object-contain rounded-xl"
                loading="lazy"
              />
              <span className="absolute top-4 left-4 text-[11px] font-sans font-medium text-[#0D9488] bg-white px-2.5 py-1 rounded-full border border-[#99F6E4] shadow-2xs">
                Daily Ritual Guide
              </span>
            </div>

            <div className="p-3 bg-white border border-[#EAE3D9] rounded-xl flex items-center justify-between text-xs font-sans text-[#736E65]">
              <span className="flex items-center gap-1.5 font-medium text-[#1A1917]">
                <Clock className="w-3.5 h-3.5 text-[#0D9488]" />
                <span>Anytime of Day</span>
              </span>
              <span>1 Scoop in 250ml Drink</span>
              <span className="text-[#0D9488] font-semibold">10-Second Dissolve</span>
            </div>
          </div>

          {/* Right Column: 3 Compact Beverage Cards & Consistency Note */}
          <div className="lg:col-span-7 flex flex-col gap-3.5">
            {drinkOptions.map((opt, idx) => {
              const Icon = opt.icon;
              return (
                <div 
                  key={idx}
                  className="p-4 sm:p-5 bg-white border border-[#EAE3D9] rounded-xl flex items-start gap-4 hover:border-[#0D9488]/40 transition-all shadow-2xs"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#F0FDFA] border border-[#99F6E4] flex items-center justify-center text-[#0D9488] shrink-0 mt-0.5">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-[#1A1917] font-normal">
                      {opt.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#524E47] font-sans leading-relaxed mt-1">
                      {opt.desc}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Routine Commitment Pill */}
            <div className="p-4 bg-[#F0FDFA] border border-[#99F6E4] rounded-xl flex items-center gap-3 text-xs text-[#0A4D52]">
              <Check className="w-4 h-4 text-[#0D9488] shrink-0" />
              <span>
                <strong>Consistency is key:</strong> Enjoy 1 scoop daily for 8–12 weeks for progressive skin hydration, hair resilience, and connective tissue maintenance.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
