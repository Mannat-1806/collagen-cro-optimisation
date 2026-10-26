import React, { useState } from 'react';
import { productData } from '../data/productData';
import { ChevronDown, Sparkles, Droplets, HeartHandshake, Check } from 'lucide-react';

export default function BenefitsDeepDive() {
  const { benefitsDeepDive } = productData;
  const [skinBenefit, hairBenefit, dailyBenefit] = benefitsDeepDive;

  // Toggle state for optional deeper research details
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleDetails = (id) => {
    setExpandedCard(prev => (prev === id ? null : id));
  };

  const benefitCards = [
    {
      id: 'skin',
      benefit: skinBenefit,
      tag: 'Skin Hydration & Bounce',
      headline: skinBenefit.headline,
      shortSummary: 'Collagen forms 75% of your skin\'s inner dermis layer, providing natural cushion and moisture retention to keep skin feeling supple and fresh.',
      image: skinBenefit.visual.src,
      imageAlt: skinBenefit.visual.alt,
      keyBenefit: 'Supports Dermal Elasticity & Texture'
    },
    {
      id: 'hair-nails',
      benefit: hairBenefit,
      tag: 'Hair & Nail Strength',
      headline: hairBenefit.headline,
      shortSummary: 'Provides high concentrations of proline and glycine, the essential structural amino acids required for strong keratin matrix synthesis in hair and nail beds.',
      image: hairBenefit.visual.src,
      imageAlt: hairBenefit.visual.alt,
      keyBenefit: 'Proline & Glycine Amino Support'
    },
    {
      id: 'daily',
      benefit: dailyBenefit,
      tag: 'Daily Connective Care',
      headline: dailyBenefit.headline,
      shortSummary: '100% unflavored, pure peptide isolate that dissolves neutrally into your morning coffee, tea, or cold water to support everyday joint and tissue wellness.',
      image: dailyBenefit.visual.src,
      imageAlt: dailyBenefit.visual.alt,
      keyBenefit: 'Dissolves Neutrally in Any Drink'
    }
  ];

  return (
    <section 
      id="benefits" 
      aria-labelledby="benefits-main-title" 
      className="py-14 sm:py-20 bg-white border-b border-[#EAE3D9]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Clean, concise & customer-friendly */}
        <div className="max-w-2xl mb-10 sm:mb-14">
          <div className="flex items-center gap-2 text-xs font-sans font-semibold uppercase tracking-wider text-[#0D9488] mb-2">
            <span className="w-2 h-2 rounded-full bg-[#0D9488]" />
            <span>Targeted Daily Care</span>
          </div>
          <h2 
            id="benefits-main-title" 
            className="font-serif text-3xl sm:text-4xl text-[#1A1917] font-normal tracking-tight"
          >
            A Little Care for Skin, Hair &amp; Movement
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#524E47] font-sans leading-relaxed">
            Wholesome structural nourishment designed to fit seamlessly into your everyday morning routine—without artificial shortcuts or cosmetic exaggerations.
          </p>
        </div>

        {/* 3 Balanced Visual Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {benefitCards.map((item) => {
            const isExpanded = expandedCard === item.id;
            return (
              <div 
                key={item.id}
                className="bg-[#FAF8F5] border border-[#EAE3D9] rounded-2xl overflow-hidden flex flex-col justify-between hover:border-[#0D9488]/40 hover:shadow-xs transition-all"
              >
                {/* Visual Header */}
                <div className="relative aspect-4/3 w-full bg-white border-b border-[#EAE3D9] p-3 flex items-center justify-center overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 text-[11px] font-sans font-medium text-[#0D9488] bg-white/95 px-2.5 py-1 rounded-full border border-[#99F6E4] shadow-2xs">
                    {item.tag}
                  </span>
                </div>

                {/* Content Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#1A1917] font-normal leading-snug">
                      {item.headline}
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm text-[#524E47] font-sans leading-relaxed">
                      {item.shortSummary}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#EAE3D9] flex flex-col gap-2.5">
                    <div className="flex items-center gap-2 text-xs font-sans text-[#0D9488] font-medium">
                      <Check className="w-4 h-4 shrink-0 text-[#0D9488]" />
                      <span>{item.keyBenefit}</span>
                    </div>

                    {/* Expandable Deeper Evidence & Realistic Expectations */}
                    <div className="border border-[#EAE3D9] bg-white rounded-xl overflow-hidden transition-all">
                      <button
                        type="button"
                        onClick={() => toggleDetails(item.id)}
                        aria-expanded={isExpanded}
                        className="w-full p-2.5 px-3 flex items-center justify-between text-left text-[11px] font-sans font-semibold uppercase tracking-wider text-[#524E47] hover:text-[#0D9488] transition-colors focus:outline-none"
                      >
                        <span>What Research Suggests</span>
                        <ChevronDown 
                          className={`w-3.5 h-3.5 text-[#736E65] transition-transform duration-200 ${
                            isExpanded ? 'rotate-180' : ''
                          }`} 
                          aria-hidden="true" 
                        />
                      </button>

                      {isExpanded && (
                        <div className="p-3 pt-1 border-t border-[#EAE3D9]/60 flex flex-col gap-2.5 text-xs font-sans text-[#524E47] leading-relaxed bg-[#FAF8F5]">
                          <div>
                            <strong className="text-[#1A1917] block font-medium">What Research Suggests:</strong>
                            <p className="mt-0.5 text-[11px] text-[#524E47]">{item.benefit.whatResearchSuggests}</p>
                            <span className="text-[10px] font-mono text-[#8C867A] block mt-1">
                              Citation: {item.benefit.researchCitation}
                            </span>
                          </div>

                          <div className="pt-2 border-t border-[#EAE3D9]/60">
                            <strong className="text-amber-900 block font-medium">Realistic Expectations:</strong>
                            <p className="mt-0.5 text-[11px] text-[#524E47]">{item.benefit.whatToExpect}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Reassuring Ecommerce Note */}
        <div className="mt-8 p-4 bg-[#F0FDFA] border border-[#99F6E4] rounded-xl flex items-center justify-between flex-wrap gap-3 text-xs font-sans text-[#0A4D52]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#0D9488] shrink-0" />
            <span>100% pure hydrolysed marine collagen (Types I &amp; III) · 0g added sugar · Free from artificial colorants or sweeteners.</span>
          </div>
          <span className="font-semibold text-[#0D9488]">Daily Consistency Over Overnight Hype</span>
        </div>

      </div>
    </section>
  );
}
