import React, { useState } from 'react';
import { ExternalLink, BookOpen, ChevronDown, Sparkles, Clock, ArrowRight } from 'lucide-react';
import { productData } from '../data/productData';

export default function ScienceAbsorption() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setOpenAccordion(prev => (prev === id ? null : id));
  };

  return (
    <section 
      id="science" 
      aria-labelledby="science-heading" 
      className="py-14 sm:py-20 bg-white border-b border-[#EAE3D9]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-10 sm:mb-14">
          <div className="flex items-center gap-2 text-xs font-sans font-semibold uppercase tracking-wider text-[#0D9488] mb-2">
            <span className="w-2 h-2 rounded-full bg-[#0D9488]" />
            <span>Cellular Bioavailability</span>
          </div>
          
          <h2 
            id="science-heading" 
            className="font-serif text-3xl sm:text-4xl text-[#1A1917] font-normal tracking-tight"
          >
            The Science Behind Collagen
          </h2>
          
          <p className="mt-3 text-sm sm:text-base text-[#524E47] font-sans leading-relaxed">
            Standard collagen molecules are too large to be absorbed intact. Through low-temperature enzymatic hydrolysis, peptides are cleaved below 1,000 Daltons for rapid intestinal transport.
          </p>
        </div>

        {/* 3 Concise Science Takeaways (Concise & Scannable) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8">
          <div className="p-5 bg-[#FAF8F5] border border-[#EAE3D9] rounded-xl flex flex-col justify-between gap-3">
            <div>
              <span className="font-mono text-xs font-bold text-[#0D9488] uppercase tracking-wider">01 · Molecular Size</span>
              <h3 className="font-serif text-lg font-normal text-[#1A1917] mt-1.5">
                Nano-Hydrolysis to &lt;1,000 Da
              </h3>
              <p className="text-xs text-[#524E47] font-sans leading-relaxed mt-1">
                Cleaved 300x smaller than raw food collagen, producing ultra-fine di- and tri-peptides ready for direct uptake.
              </p>
            </div>
            <span className="text-[11px] font-mono text-[#0D9488]">Direct Intestinal Transit</span>
          </div>

          <div className="p-5 bg-[#FAF8F5] border border-[#EAE3D9] rounded-xl flex flex-col justify-between gap-3">
            <div>
              <span className="font-mono text-xs font-bold text-[#0D9488] uppercase tracking-wider">02 · Transport</span>
              <h3 className="font-serif text-lg font-normal text-[#1A1917] mt-1.5">
                Active Plasma Bioavailability
              </h3>
              <p className="text-xs text-[#524E47] font-sans leading-relaxed mt-1">
                Intact peptide fragments enter systemic circulation to signal dermal fibroblasts for natural procollagen synthesis.
              </p>
            </div>
            <span className="text-[11px] font-mono text-[#0D9488]">Fibroblast Signaling</span>
          </div>

          <div className="p-5 bg-[#FAF8F5] border border-[#EAE3D9] rounded-xl flex flex-col justify-between gap-3">
            <div>
              <span className="font-mono text-xs font-bold text-[#0D9488] uppercase tracking-wider">03 · Clinical Arc</span>
              <h3 className="font-serif text-lg font-normal text-[#1A1917] mt-1.5">
                Gradual 8–12 Week Progression
              </h3>
              <p className="text-xs text-[#524E47] font-sans leading-relaxed mt-1">
                Meta-analyses observe statistically significant improvements in hydration and elasticity over 8 to 12 weeks of daily intake.
              </p>
            </div>
            <span className="text-[11px] font-mono text-[#0D9488]">Consistent Daily Routine</span>
          </div>
        </div>

        {/* Expandable Deeper Science Accordions (Clean, Compact, Optional Reading) */}
        <div className="border border-[#EAE3D9] bg-[#FAF8F5] rounded-2xl overflow-hidden divide-y divide-[#EAE3D9]">
          
          {/* Accordion 1: Molecular Weight Comparison */}
          <div>
            <button
              type="button"
              onClick={() => toggleAccordion('daltons')}
              aria-expanded={openAccordion === 'daltons'}
              className="w-full p-4 sm:p-5 flex items-center justify-between text-left hover:bg-white/60 transition-colors focus:outline-none"
            >
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-[#0D9488]" />
                <span className="font-serif text-base sm:text-lg text-[#1A1917] font-normal">
                  Molecular Weight Spectrum: The Dalton (Da) Mass Comparison
                </span>
              </div>
              <ChevronDown className={`w-4 h-4 text-[#736E65] transition-transform duration-200 ${openAccordion === 'daltons' ? 'rotate-180' : ''}`} />
            </button>

            {openAccordion === 'daltons' && (
              <div className="p-5 sm:p-6 bg-white border-t border-[#EAE3D9] flex flex-col gap-4 text-xs font-sans">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-5 max-w-[280px] mx-auto">
                    <img 
                      src="/product-gallery/slide-04-collagen_absorption.png" 
                      alt="Daltons Absorption" 
                      className="w-full h-auto object-contain rounded-lg border border-[#EAE3D9]"
                    />
                  </div>
                  <div className="lg:col-span-7 flex flex-col divide-y divide-[#EAE3D9]">
                    <div className="py-2.5 flex items-center justify-between">
                      <div>
                        <strong className="text-[#1A1917] block">Native Food Collagen (e.g. Bone Broth)</strong>
                        <span className="text-[#736E65] text-[11px]">Requires extensive stomach digestion; low intact peptide bioavailability.</span>
                      </div>
                      <span className="font-mono text-xs text-[#736E65] shrink-0">~300,000 Da</span>
                    </div>

                    <div className="py-2.5 flex items-center justify-between">
                      <div>
                        <strong className="text-[#1A1917] block">Standard Market Supplements</strong>
                        <span className="text-[#736E65] text-[11px]">Commercial bovine or porcine hydrolysates with heavier chains.</span>
                      </div>
                      <span className="font-mono text-xs text-[#736E65] shrink-0">3,000 – 5,000 Da</span>
                    </div>

                    <div className="py-2.5 flex items-center justify-between bg-[#F0FDFA] p-2 rounded-lg border border-[#99F6E4]">
                      <div>
                        <strong className="text-[#0D9488] block">Wellbeing Nutrition Korean Marine Peptides</strong>
                        <span className="text-[#0A4D52] text-[11px]">Ultra-cleaved di- and tri-peptides directly absorbed across intestinal barrier.</span>
                      </div>
                      <span className="font-mono text-xs font-bold text-[#0D9488] shrink-0">&lt; 1,000 Da</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Accordion 2: Biological Progression Timeline */}
          <div id="timeline">
            <button
              type="button"
              onClick={() => toggleAccordion('timeline')}
              aria-expanded={openAccordion === 'timeline'}
              className="w-full p-4 sm:p-5 flex items-center justify-between text-left hover:bg-white/60 transition-colors focus:outline-none"
            >
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#0D9488]" />
                <span className="font-serif text-base sm:text-lg text-[#1A1917] font-normal">
                  Clinical 8–12 Week Progression (Meta-Analysis Overview)
                </span>
              </div>
              <ChevronDown className={`w-4 h-4 text-[#736E65] transition-transform duration-200 ${openAccordion === 'timeline' ? 'rotate-180' : ''}`} />
            </button>

            {openAccordion === 'timeline' && (
              <div className="p-5 sm:p-6 bg-white border-t border-[#EAE3D9] flex flex-col gap-4 text-xs font-sans">
                <p className="text-xs text-[#736E65]">
                  *Note: Derived from pooled meta-analysis data across 19 randomized placebo-controlled trials studying daily hydrolyzed peptide intake. Results develop gradually and vary based on baseline diet and sun protection.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {productData.timeline.map((step, idx) => (
                    <div key={idx} className="p-3.5 bg-[#FAF8F5] border border-[#EAE3D9] rounded-xl flex flex-col gap-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono font-bold text-[#0D9488]">{step.week}</span>
                        <span className="text-[10px] text-[#736E65]">Milestone 0{idx + 1}</span>
                      </div>
                      <h4 className="font-serif text-sm font-semibold text-[#1A1917] mt-0.5">{step.milestone}</h4>
                      <p className="text-[11px] text-[#524E47] leading-relaxed mt-0.5">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Accordion 3: Peer-Reviewed PubMed Citations */}
          <div>
            <button
              type="button"
              onClick={() => toggleAccordion('citations')}
              aria-expanded={openAccordion === 'citations'}
              className="w-full p-4 sm:p-5 flex items-center justify-between text-left hover:bg-white/60 transition-colors focus:outline-none"
            >
              <div className="flex items-center gap-2.5">
                <BookOpen className="w-4 h-4 text-[#0D9488]" />
                <span className="font-serif text-base sm:text-lg text-[#1A1917] font-normal">
                  Peer-Reviewed Clinical Literature &amp; PubMed Identifiers (PMIDs)
                </span>
              </div>
              <ChevronDown className={`w-4 h-4 text-[#736E65] transition-transform duration-200 ${openAccordion === 'citations' ? 'rotate-180' : ''}`} />
            </button>

            {openAccordion === 'citations' && (
              <div className="p-5 sm:p-6 bg-white border-t border-[#EAE3D9] flex flex-col divide-y divide-[#EAE3D9] text-xs font-sans">
                {productData.scientificBacking.map((cite, idx) => (
                  <div key={idx} className="py-3 first:pt-0 last:pb-0 flex flex-col gap-1">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <h4 className="text-xs font-medium text-[#1A1917] font-sans">{cite.title}</h4>
                      <a
                        href={cite.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-mono text-[#0D9488] hover:underline shrink-0"
                      >
                        <span>{cite.source}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                    <p className="text-[11px] text-[#524E47] leading-relaxed">{cite.summary}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
