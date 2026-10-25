import React from 'react';
import { productData } from '../data/productData';
import { Check, BookOpen, HelpCircle, ArrowUpRight } from 'lucide-react';

export default function BenefitsEducation() {
  const { benefitsTiers } = productData;

  return (
    <section id="benefits" aria-labelledby="benefits-heading" className="py-16 sm:py-24 bg-[#FFFFFF] border-b border-[#E4DCD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#E4DCD0] pb-6 gap-4">
          <div className="max-w-2xl">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#736E65]">
              Formulation &amp; Evidence Transparency
            </span>
            <h2 id="benefits-heading" className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A1917] font-normal tracking-tight mt-1">
              Why Ingestible Marine Peptides?
            </h2>
            <p className="text-xs sm:text-sm text-[#5C5850] mt-2 leading-relaxed">
              We separate undeniable product specifications from third-party clinical science and complementary hypotheses to help you make an informed decision without marketing hype.
            </p>
          </div>

          <div className="text-[11px] font-mono text-[#8C867A] shrink-0">
            Three-Tier Evidence Classification
          </div>
        </div>

        {/* 3-Tier Architectural Layout (Staggered Editorial Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Tier 1: Verified Product Facts */}
          <div className="p-7 sm:p-8 bg-[#FAF8F5] border border-[#E4DCD0] flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#E4DCD0] text-[10px] font-mono uppercase tracking-wider text-[#1D382B]">
                <span>Tier 01</span>
                <span className="bg-[#EAF1ED] px-2 py-0.5 font-bold">Verified Product Reality</span>
              </div>

              <h3 className="font-serif text-2xl text-[#1A1917] font-normal mt-4 mb-2">
                What Is in the Jar
              </h3>
              <p className="text-xs text-[#5C5850] mb-6 leading-relaxed">
                Directly observable physical and compositional facts verifiable on every batch of Wellbeing Nutrition Korean Marine Collagen.
              </p>

              <ul className="flex flex-col gap-4 text-xs text-[#5C5850]">
                {benefitsTiers[0].items.map((item, idx) => (
                  <li key={idx} className="flex flex-col gap-1 border-t border-[#E4DCD0]/60 pt-3">
                    <span className="font-medium text-[#1A1917] text-xs flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1D382B]" />
                      {item.title}
                    </span>
                    <span className="text-[11px] text-[#736E65] pl-3 leading-relaxed">
                      {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-[#E4DCD0] text-[10px] font-mono text-[#8C867A] uppercase">
              Batch Lab Verified · FSSAI / FDA Certified
            </div>
          </div>

          {/* Tier 2: Scientific Evidence (General Ingredient Science) */}
          <div className="p-7 sm:p-8 bg-[#FAF8F5] border-2 border-[#1D382B] flex flex-col justify-between h-full shadow-[0_15px_30px_-15px_rgba(29,56,43,0.08)]">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#1D382B]/20 text-[10px] font-mono uppercase tracking-wider text-[#1D382B]">
                <span>Tier 02</span>
                <span className="bg-[#1D382B] text-[#FAF8F5] px-2 py-0.5 font-bold">Clinical Ingredient Studies</span>
              </div>

              <h3 className="font-serif text-2xl text-[#1A1917] font-normal mt-4 mb-2">
                How Peptides Function
              </h3>
              <p className="text-xs text-[#5C5850] mb-6 leading-relaxed">
                Peer-reviewed clinical evidence on low-molecular-weight (&lt;1000 Da) marine collagen peptides across randomized placebo-controlled trials.
              </p>

              <ul className="flex flex-col gap-4 text-xs text-[#5C5850]">
                {benefitsTiers[1].items.map((item, idx) => (
                  <li key={idx} className="flex flex-col gap-1 border-t border-[#1D382B]/10 pt-3">
                    <span className="font-medium text-[#1A1917] text-xs flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1D382B]" />
                      {item.title}
                    </span>
                    <span className="text-[11px] text-[#736E65] pl-3 leading-relaxed">
                      {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-[#1D382B]/20 text-[10px] font-mono text-[#1D382B] uppercase">
              Citing Nutrients (2018) &amp; Int J Dermatol (2021)
            </div>
          </div>

          {/* Tier 3: Complementary Hypotheses */}
          <div className="p-7 sm:p-8 bg-[#FAF8F5] border border-[#E4DCD0] flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#E4DCD0] text-[10px] font-mono uppercase tracking-wider text-[#8F5E38]">
                <span>Tier 03</span>
                <span className="bg-[#F8F1EB] text-[#8F5E38] px-2 py-0.5 font-bold">Individual Hypotheses</span>
              </div>

              <h3 className="font-serif text-2xl text-[#1A1917] font-normal mt-4 mb-2">
                Potential Complementary Outcomes
              </h3>
              <p className="text-xs text-[#5C5850] mb-6 leading-relaxed">
                Secondary benefits reported in nutritional literature that require sustained adherence and vary significantly between individuals.
              </p>

              <ul className="flex flex-col gap-4 text-xs text-[#5C5850]">
                {benefitsTiers[2].items.map((item, idx) => (
                  <li key={idx} className="flex flex-col gap-1 border-t border-[#E4DCD0]/60 pt-3">
                    <span className="font-medium text-[#1A1917] text-xs flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8F5E38]" />
                      {item.title}
                    </span>
                    <span className="text-[11px] text-[#736E65] pl-3 leading-relaxed">
                      {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-[#E4DCD0] text-[10px] font-mono text-[#8C867A] uppercase">
              Secondary Nutritional Association
            </div>
          </div>

        </div>

        {/* Methodological Context Warning Note */}
        <div className="p-4 bg-[#F4F0E8] border border-[#E4DCD0] text-[11px] font-mono text-[#736E65] leading-relaxed">
          <strong>Product Management Research Standard:</strong> We distinguish verified formulation inputs from external clinical ingredient studies. While low-molecular-weight collagen peptides have demonstrated statistical efficacy in published literature, dietary supplements are not intended to diagnose, treat, or cure medical skin disorders.
        </div>

      </div>
    </section>
  );
}
