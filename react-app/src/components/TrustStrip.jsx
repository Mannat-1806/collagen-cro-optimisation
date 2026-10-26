import React from 'react';
import { productData } from '../data/productData';
import { ShieldCheck, Check, Award, Shield } from 'lucide-react';

export default function TrustStrip() {
  const qualityPillars = [
    {
      title: 'Wild Korean Marine Catch',
      desc: 'Sourced exclusively from deep-sea cold-water Korean fisheries (salmon, cod, and haddock) for superior amino density.'
    },
    {
      title: 'Third-Party Mercury Screened',
      desc: 'Every production lot is analytically tested to confirm non-detectable levels of mercury, lead, and arsenic.'
    },
    {
      title: 'FDA & GMP Certified Facilities',
      desc: 'Processed in US FDA registered facilities under current Good Manufacturing Practice (cGMP) standards.'
    },
    {
      title: 'Zero Sugar or Filler Additives',
      desc: '100% pure peptide isolate with 0g sugar, 0g carbohydrates, and zero artificial sweeteners or masking agents.'
    }
  ];

  return (
    <section 
      id="trust" 
      aria-labelledby="trust-heading" 
      className="py-14 sm:py-20 bg-[#FAF8F5] border-b border-[#EAE3D9]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-10 sm:mb-14">
          <div className="flex items-center gap-2 text-xs font-sans font-semibold uppercase tracking-wider text-[#0D9488] mb-2">
            <span className="w-2 h-2 rounded-full bg-[#0D9488]" />
            <span>Purity &amp; Safety Standards</span>
          </div>
          
          <h2 
            id="trust-heading" 
            className="font-serif text-3xl sm:text-4xl text-[#1A1917] font-normal tracking-tight"
          >
            The Wellbeing Quality Standard
          </h2>
          
          <p className="mt-3 text-sm sm:text-base text-[#524E47] font-sans leading-relaxed">
            Traceable marine sourcing and independent laboratory verification ensure purity in every single scoop.
          </p>
        </div>

        {/* 2-Column: Official Advantage Asset & Quality Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-10">
          
          {/* Left Column: Official Quality Asset */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <div className="relative aspect-square max-h-[420px] mx-auto w-full bg-white border border-[#EAE3D9] rounded-2xl overflow-hidden shadow-xs p-3 flex items-center justify-center">
              <img
                src="/product-gallery/slide-10-the_wellbeing_advantage.jpg"
                alt="The Wellbeing Advantage: Mercury Free, US FDA Registered, GMP Compliant, Halal Certified"
                className="w-full h-full object-contain rounded-xl"
                loading="lazy"
              />
              <span className="absolute top-4 left-4 text-[11px] font-sans font-medium text-[#0D9488] bg-white px-2.5 py-1 rounded-full border border-[#99F6E4] shadow-2xs">
                Quality Verification
              </span>
            </div>

            <div className="p-3 bg-white border border-[#EAE3D9] rounded-xl flex items-center justify-between text-xs font-sans text-[#736E65]">
              <span className="flex items-center gap-1.5 font-medium text-[#1A1917]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0D9488]" />
                <span>Heavy Metal Screened</span>
              </span>
              <span>Tested Non-Detectable</span>
            </div>
          </div>

          {/* Right Column: 4 Scannable Trust Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {qualityPillars.map((pillar, idx) => (
              <div 
                key={idx}
                className="p-4 sm:p-5 bg-white border border-[#EAE3D9] rounded-xl flex flex-col gap-1.5 shadow-2xs hover:border-[#0D9488]/40 transition-all"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#F0FDFA] flex items-center justify-center text-[#0D9488] shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <h3 className="font-sans text-xs sm:text-sm font-semibold text-[#1A1917]">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-xs text-[#524E47] font-sans leading-relaxed mt-1">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Verified Facility Certifications Grid */}
        <div className="bg-white border border-[#EAE3D9] rounded-2xl p-5 sm:p-6 shadow-xs">
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-4 h-4 text-[#0D9488]" />
            <h3 className="font-serif text-lg text-[#1A1917] font-normal">
              Official Facility &amp; Processing Certifications
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {productData.certifications.map((cert) => (
              <div 
                key={cert.id} 
                className="p-3 bg-[#FAF8F5] border border-[#EAE3D9] rounded-xl flex flex-col gap-0.5"
              >
                <span className="text-xs font-semibold text-[#1A1917] font-sans flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0D9488] shrink-0" />
                  <span className="truncate">{cert.name}</span>
                </span>
                <span className="text-[11px] text-[#736E65] font-sans leading-tight mt-0.5">{cert.desc}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
