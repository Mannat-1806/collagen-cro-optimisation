import React, { useState } from 'react';
import { productData } from '../data/productData';
import { Sparkles, Check, ChevronDown, Activity, Info } from 'lucide-react';

export default function IngredientsNutrition() {
  const [showTechnicalDetails, setShowTechnicalDetails] = useState(false);

  // Amino acid profile from product packaging and slide-06
  const primaryAminoAcids = [
    { name: 'Glycine', percentage: '24%', desc: 'Foundational building block for dermal collagen synthesis' },
    { name: 'Proline', percentage: '13%', desc: 'Essential for keratin matrix density and hair/nail strength' },
    { name: 'Hydroxyproline', percentage: '12%', desc: 'Unique bioactive amino acid stimulating fibroblast activity' },
    { name: 'Other Bioactive Aminos', percentage: '51%', desc: 'Arginine, Glutamic Acid, Alanine, Serine & Lysine' },
  ];

  return (
    <section 
      id="ingredients" 
      aria-labelledby="ingredients-heading" 
      className="py-14 sm:py-20 bg-white border-b border-[#EAE3D9]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-10 sm:mb-14">
          <div className="flex items-center gap-2 text-xs font-sans font-semibold uppercase tracking-wider text-[#0D9488] mb-2">
            <span className="w-2 h-2 rounded-full bg-[#0D9488]" />
            <span>Pure Formula &amp; Nutrition</span>
          </div>
          
          <h2 
            id="ingredients-heading" 
            className="font-serif text-3xl sm:text-4xl text-[#1A1917] font-normal tracking-tight"
          >
            100% Pure Marine Peptides. Nothing Else.
          </h2>
          
          <p className="mt-3 text-sm sm:text-base text-[#524E47] font-sans leading-relaxed">
            One single active ingredient with verified nutritional transparency. Zero added sugar, zero carbohydrates, and zero artificial sweeteners.
          </p>
        </div>

        {/* 4 Quick Stat Pills */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
          <div className="p-3.5 bg-[#FAF8F5] border border-[#EAE3D9] rounded-xl flex flex-col gap-0.5">
            <span className="text-[11px] font-sans uppercase tracking-wider text-[#736E65] font-semibold">Active Ingredient</span>
            <span className="font-serif text-lg font-normal text-[#1A1917]">100% Marine Peptides</span>
            <span className="text-[11px] text-[#0D9488] font-sans">Types I &amp; III</span>
          </div>

          <div className="p-3.5 bg-[#FAF8F5] border border-[#EAE3D9] rounded-xl flex flex-col gap-0.5">
            <span className="text-[11px] font-sans uppercase tracking-wider text-[#736E65] font-semibold">Protein Per Scoop</span>
            <span className="font-serif text-lg font-normal text-[#1A1917]">7.9g Pure Protein</span>
            <span className="text-[11px] text-[#0D9488] font-sans">31.6 kcal / 8g Scoop</span>
          </div>

          <div className="p-3.5 bg-[#FAF8F5] border border-[#EAE3D9] rounded-xl flex flex-col gap-0.5">
            <span className="text-[11px] font-sans uppercase tracking-wider text-[#736E65] font-semibold">Added Sugars</span>
            <span className="font-serif text-lg font-normal text-[#1A1917]">0g Sugar</span>
            <span className="text-[11px] text-[#0D9488] font-sans">Zero Carbs &amp; Fat</span>
          </div>

          <div className="p-3.5 bg-[#FAF8F5] border border-[#EAE3D9] rounded-xl flex flex-col gap-0.5">
            <span className="text-[11px] font-sans uppercase tracking-wider text-[#736E65] font-semibold">Origin &amp; Catch</span>
            <span className="font-serif text-lg font-normal text-[#1A1917]">Korean Wild Catch</span>
            <span className="text-[11px] text-[#0D9488] font-sans">Deep Sea Fisheries</span>
          </div>
        </div>

        {/* 2-Column: Nutrition Label Visual & Clean Nutrition Table */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left: Official Back-of-Pack Nutrition Graphic */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <div className="relative aspect-square max-h-[420px] w-full bg-[#FAF8F5] border border-[#EAE3D9] rounded-2xl overflow-hidden shadow-xs p-3 flex items-center justify-center">
              <img
                src="/product-gallery/slide-12-collagen_nutritional_information.jpg"
                alt="Wellbeing Nutrition Korean Marine Collagen Nutritional Information and Supplement Facts"
                className="w-full h-full object-contain rounded-xl"
                loading="lazy"
              />
              <span className="absolute top-4 left-4 text-[11px] font-sans font-medium text-[#0D9488] bg-white px-2.5 py-1 rounded-full border border-[#99F6E4] shadow-2xs">
                Official Label Facts
              </span>
            </div>

            <div className="p-3 bg-[#FAF8F5] border border-[#EAE3D9] rounded-xl flex items-center justify-between text-xs font-sans text-[#736E65]">
              <span>Calibrated 8g Scoop</span>
              <span className="text-[#0D9488] font-medium">Types I &amp; III Collagen</span>
            </div>
          </div>

          {/* Right: Tabular Nutrition Profile & Collapsible Amino Acids */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            
            {/* The Compact Nutrition Table */}
            <div className="bg-white border border-[#EAE3D9] rounded-2xl overflow-hidden shadow-xs">
              <div className="p-4 sm:p-5 bg-[#FAF8F5] border-b border-[#EAE3D9] flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-lg sm:text-xl text-[#1A1917] font-normal">
                    Supplement Facts
                  </h3>
                  <p className="text-xs font-sans text-[#736E65]">
                    Per 8g daily serving (1 level scoop)
                  </p>
                </div>
                <span className="text-xs font-mono font-bold text-[#0D9488] bg-white border border-[#EAE3D9] px-2.5 py-1 rounded-full">
                  31.60 kcal / Scoop
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-sans border-collapse">
                  <thead>
                    <tr className="bg-white border-b border-[#EAE3D9] text-[11px] uppercase tracking-wider font-semibold text-[#736E65]">
                      <th className="p-3.5">Parameter</th>
                      <th className="p-3.5">Per 8g Scoop</th>
                      <th className="p-3.5">Per 100g Powder</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EAE3D9]">
                    {productData.nutritionTable.map((row, idx) => {
                      const isHighValue = row.label === 'Protein' || row.label === 'Marine Collagen Peptides';
                      return (
                        <tr 
                          key={idx} 
                          className={`hover:bg-[#FAF8F5]/80 transition-colors ${
                            isHighValue ? 'bg-[#F0FDFA]/30 font-medium' : ''
                          }`}
                        >
                          <td className="p-3.5 font-medium text-[#1A1917]">{row.label}</td>
                          <td className={`p-3.5 font-mono font-bold ${isHighValue ? 'text-[#0D9488]' : 'text-[#1A1917]'}`}>
                            {row.value}
                          </td>
                          <td className="p-3.5 font-mono text-[#736E65]">{row.per100g}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Dietary Tags Strip */}
            <div className="flex flex-wrap gap-2 text-xs font-sans">
              {productData.dietaryDisclosures.map((item, idx) => (
                <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FAF8F5] border border-[#EAE3D9] rounded-lg text-[#1A1917] font-medium">
                  <Check className="w-3.5 h-3.5 text-[#0D9488]" />
                  <span>{item}</span>
                </span>
              ))}
            </div>

            {/* Collapsible Deeper Technical Ingredient Details */}
            <div className="border border-[#EAE3D9] bg-[#FAF8F5] rounded-xl overflow-hidden transition-all">
              <button
                type="button"
                onClick={() => setShowTechnicalDetails(!showTechnicalDetails)}
                aria-expanded={showTechnicalDetails}
                className="w-full p-4 flex items-center justify-between text-left text-xs font-sans font-semibold uppercase tracking-wider text-[#1A1917] hover:text-[#0D9488] transition-colors focus:outline-none"
              >
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#0D9488]" />
                  <span>Technical Ingredient Dossier &amp; Amino Acid Profile</span>
                </div>
                <ChevronDown 
                  className={`w-4 h-4 text-[#736E65] transition-transform duration-200 ${
                    showTechnicalDetails ? 'rotate-180' : ''
                  }`} 
                  aria-hidden="true" 
                />
              </button>

              {showTechnicalDetails && (
                <div className="p-4 pt-1 border-t border-[#EAE3D9] flex flex-col gap-3 text-xs font-sans text-[#524E47] bg-white">
                  <p className="text-xs leading-relaxed text-[#524E47]">
                    Hydrolyzed marine peptides contain a distinct amino acid fingerprint optimized for dermal cross-linking, dominated by glycine, proline, and hydroxyproline.
                  </p>

                  <div className="grid grid-cols-2 gap-2 mt-1">
                    {primaryAminoAcids.map((aa, idx) => (
                      <div key={idx} className="p-2.5 bg-[#FAF8F5] border border-[#EAE3D9] rounded-lg">
                        <div className="flex items-baseline justify-between">
                          <span className="font-semibold text-xs text-[#1A1917]">{aa.name}</span>
                          <span className="font-serif text-sm font-bold text-[#0D9488]">{aa.percentage}</span>
                        </div>
                        <span className="text-[10px] text-[#736E65] block mt-0.5 leading-snug">{aa.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Allergen Notice */}
            <div className="p-3 bg-amber-50/70 border border-amber-200/80 rounded-xl text-xs text-amber-900 font-sans flex items-start gap-2">
              <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <span>
                <strong>Allergen Notice:</strong> Contains 100% wild-caught marine fish. Strictly contraindicated for individuals with known fish or seafood allergies. Not suitable for vegetarians or vegans.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
