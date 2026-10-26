import React from 'react';
import { productData } from '../data/productData';
import { Clock, Sparkles, Check, ArrowRight } from 'lucide-react';

export default function ClinicalTimeline() {
  return (
    <section 
      id="timeline" 
      aria-labelledby="timeline-heading" 
      className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-[#EAE3D9] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-sans font-semibold uppercase tracking-wider text-[#0D9488] mb-2.5">
            <span className="w-2 h-2 rounded-full bg-[#0D9488]" />
            <span>The 90-Day Renewal Timeline</span>
          </div>
          
          <h2 
            id="timeline-heading" 
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A1917] font-normal tracking-tight leading-[1.15]"
          >
            What to Expect Over 12 Weeks
          </h2>
          
          <p className="mt-4 text-sm sm:text-base text-[#524E47] font-sans leading-relaxed">
            Collagen provides progressive cellular support rather than overnight cosmetic change. Consistent daily use with 1 scoop daily yields cumulative results.
          </p>
        </div>

        {/* 2-Column: Official Timeline Visual + 3 Structured Milestones */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-10">
          
          {/* Left: Official Timeline Graphic Asset (slide-07) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <div className="relative aspect-square w-full bg-white border border-[#EAE3D9] rounded-2xl overflow-hidden shadow-xs p-4 flex items-center justify-center">
              <img
                src="/product-gallery/slide-07-collagen_timeline.jpg"
                alt="Wellbeing Nutrition Collagen Timeline: Day 30 hydrates skin, Day 60 reduces wrinkles, Day 90 reduces fine lines & strengthens nails"
                className="w-full h-full object-contain rounded-xl"
                loading="lazy"
              />
              <span className="absolute top-4 left-4 text-[11px] font-sans font-medium text-[#0D9488] bg-white px-2.5 py-1 rounded-full border border-[#99F6E4] shadow-2xs">
                Clinical Progression
              </span>
            </div>

            <div className="p-3 bg-white border border-[#EAE3D9] rounded-xl flex items-center justify-between text-xs font-sans text-[#736E65]">
              <span className="text-[#0D9488] font-semibold">1 Scoop / Day</span>
              <span>25 Servings / 200g Jar</span>
              <span className="text-[#1A1917] font-medium">8g Daily Regimen</span>
            </div>
          </div>

          {/* Right: 3 Progression Milestone Cards */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {productData.timeline.map((step, idx) => (
              <div 
                key={idx} 
                className="p-5 sm:p-6 bg-white border border-[#EAE3D9] rounded-2xl flex flex-col sm:flex-row sm:items-start justify-between gap-4 hover:border-[#0D9488]/40 transition-all shadow-2xs"
              >
                <div className="sm:w-1/3 flex flex-col gap-1">
                  <span className="text-xs font-sans uppercase tracking-wider font-bold text-[#0D9488] flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{step.week}</span>
                  </span>
                  <span className="text-xs font-serif text-[#8C867A]">Milestone 0{idx + 1}</span>
                </div>

                <div className="sm:w-2/3 flex flex-col gap-1.5">
                  <h3 className="font-serif text-lg sm:text-xl text-[#1A1917] font-normal leading-snug">
                    {step.milestone}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#524E47] font-sans leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        <div className="p-4 bg-white border border-[#EAE3D9] rounded-xl text-xs text-[#736E65] font-sans leading-relaxed flex items-start gap-2 max-w-4xl">
          <Sparkles className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
          <span>
            <strong>Clinical Adherence Note:</strong> Timeline expectations are grounded in peer-reviewed meta-analysis data (de Miranda et al. 2021). Results develop gradually and are enhanced by daily hydration, sun protection, and balanced protein nutrition.
          </span>
        </div>

      </div>
    </section>
  );
}
