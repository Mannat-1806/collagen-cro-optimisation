import React, { useState } from 'react';
import PrototypeNoticeBanner from './components/PrototypeNoticeBanner';
import Header from './components/Header';
import EditorialHero from './components/EditorialHero';
import BenefitsDeepDive from './components/BenefitsDeepDive';
import UsageMixability from './components/UsageMixability';
import IngredientsNutrition from './components/IngredientsNutrition';
import TrustStrip from './components/TrustStrip';
import ScienceAbsorption from './components/ScienceAbsorption';
import ReviewsSection from './components/ReviewsSection';
import ExpandableSection from './components/ExpandableSection';
import CartDrawer from './components/CartDrawer';
import PrototypeModal from './components/PrototypeModal';
import WellnessAssistant from './components/WellnessAssistant';
import { productData } from './data/productData';
import { ExternalLink, Check, ArrowUp, Sparkles, ShieldCheck, Mail, HelpCircle } from 'lucide-react';

export default function App() {
  const [selectedPack, setSelectedPack] = useState(productData.packs[0]);

  const scrollToHero = (e) => {
    e.preventDefault();
    const heroEl = document.getElementById('hero');
    if (heroEl) {
      heroEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1A1917] antialiased">
      {/* 1. Academic Prototype Compliance Banner */}
      <PrototypeNoticeBanner />

      {/* 2. Header with Navigation */}
      <Header />

      <main className="flex-1">
        {/* 3. Hero: Product Visual Gallery (Left) & Buy Box with Pack Selector (Right) - Normal Document Flow */}
        <EditorialHero 
          selectedPack={selectedPack}
          setSelectedPack={setSelectedPack}
        />

        {/* 4. Sequence Step 1: BENEFITS (3 Visually Appealing Blocks) */}
        <BenefitsDeepDive />

        {/* 5. Sequence Step 2: HOW TO USE (Compact Ritual & Drinks) */}
        <UsageMixability />

        {/* 6. Sequence Step 3: INGREDIENTS AND NUTRITION (Clean Specs & Label Facts) */}
        <IngredientsNutrition />

        {/* 7. Sequence Step 4: QUALITY AND PRODUCT DETAILS (Trust Standards & Sourcing) */}
        <TrustStrip />

        {/* 8. Sequence Step 5: THE SCIENCE BEHIND COLLAGEN (Compact & Expandable) */}
        <ScienceAbsorption />

        {/* 9. Sequence Step 6: CUSTOMER REVIEWS & TRANSPARENCY */}
        <ReviewsSection />

        {/* 10. Sequence Step 6 Continued: FAQS & DELIVERY/RETURNS POLICIES */}
        <section id="faqs" aria-labelledby="faqs-heading" className="py-14 sm:py-20 bg-white border-b border-[#EAE3D9]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
            
            <div className="border-b border-[#EAE3D9] pb-5">
              <div className="flex items-center gap-2 text-xs font-sans font-semibold uppercase tracking-wider text-[#0D9488] mb-2">
                <span className="w-2 h-2 rounded-full bg-[#0D9488]" />
                <span>Help &amp; Customer Policies</span>
              </div>
              <h2 id="faqs-heading" className="font-serif text-3xl sm:text-4xl text-[#1A1917] font-normal tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="mt-2 text-sm text-[#524E47] font-sans leading-relaxed">
                Clear answers regarding daily usage, marine sourcing, shipping timelines, and return protocols.
              </p>
            </div>

            <div className="flex flex-col">
              {/* Verified Product FAQs */}
              {productData.faqs.map((faq, index) => (
                <ExpandableSection key={index} id={`faq-${index}`} title={faq.q} defaultOpen={index === 0}>
                  <p className="font-sans text-xs sm:text-sm text-[#524E47] leading-relaxed">
                    {faq.a}
                  </p>
                </ExpandableSection>
              ))}

              {/* Verified Delivery & Returns Policy */}
              <ExpandableSection id="delivery-returns" title="Delivery &amp; Returns Policy" defaultOpen={true}>
                <div className="flex flex-col gap-3 font-sans text-xs sm:text-sm text-[#524E47] leading-relaxed pt-1">
                  <p className="font-medium text-[#1A1917]">
                    {productData.deliveryAndReturns.intro}
                  </p>
                  <p>
                    {productData.deliveryAndReturns.hygienePolicy}
                  </p>
                  <p className="text-xs text-[#736E65]">
                    {productData.deliveryAndReturns.timelineNote}
                  </p>
                  <div className="pt-3 border-t border-[#EAE3D9] flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1 font-sans">
                    <span className="text-[#1A1917] font-semibold">{productData.deliveryAndReturns.supportPrompt}</span>
                    <a href="mailto:support@wellbeingnutrition.com" className="text-[#0D9488] font-medium hover:underline">
                      support@wellbeingnutrition.com
                    </a>
                  </div>
                </div>
              </ExpandableSection>
            </div>

          </div>
        </section>

        {/* 11. Reassuring Purchase CTA Banner */}
        <section aria-label="Purchase Summary" className="py-12 sm:py-16 bg-[#FAF8F5] border-b border-[#EAE3D9]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-4">
            <span className="text-xs font-sans font-semibold uppercase tracking-wider text-[#0D9488]">
              Ready to Begin Your Routine?
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#1A1917] font-normal tracking-tight">
              Korean Marine Collagen Peptides
            </h2>
            <p className="text-xs sm:text-sm text-[#524E47] max-w-lg leading-relaxed font-sans">
              Pure unflavored peptides with a calibrated 8g scoop in every jar. Complimentary Pan-India delivery with next business day dispatch.
            </p>
            <div className="mt-2">
              <a
                href="#hero"
                onClick={scrollToHero}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1D382B] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider rounded-xl hover:bg-[#14271E] transition-all shadow-xs"
              >
                <span>Select Your Supply</span>
                <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Shopping Bag Drawer */}
      <CartDrawer />

      {/* Educational Compliance Modal */}
      <PrototypeModal />

      {/* Interactive Wellness Concierge */}
      <WellnessAssistant selectedPack={selectedPack} />

      {/* 12. Polished, Brand-Consistent Footer */}
      <footer className="bg-[#1A1917] text-[#FAF8F5] py-12 sm:py-16 border-t border-[#2E2C28]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-[#2E2C28] pb-8">
            <div>
              <span className="font-serif text-2xl tracking-[0.14em] font-normal uppercase text-white">
                Wellbeing Nutrition
              </span>
              <p className="text-xs font-sans text-[#8C867A] mt-1">
                Pure Korean Marine Collagen Peptides · Customer-Centric Wellness
              </p>
            </div>

            <div className="flex items-center gap-6 text-xs font-sans text-[#8C867A]">
              <a href="#benefits" className="hover:text-white transition-colors">Benefits</a>
              <a href="#routine" className="hover:text-white transition-colors">How to Use</a>
              <a href="#ingredients" className="hover:text-white transition-colors">Ingredients</a>
              <a href="#science" className="hover:text-white transition-colors">Science</a>
              <a href="#faqs" className="hover:text-white transition-colors">FAQs</a>
              <a href="#delivery-returns" className="hover:text-white transition-colors">Delivery &amp; Returns</a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-sans text-[#8C867A] gap-4">
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#0D9488]" />
              <span>Customer Care: <a href="mailto:support@wellbeingnutrition.com" className="text-white hover:underline">support@wellbeingnutrition.com</a></span>
            </div>
            <span>Pan-India Complimentary Delivery · Next Business Day Dispatch</span>
          </div>

          <div className="border-t border-[#2E2C28] pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] font-sans text-[#736E65] gap-2">
            <span>© 2026 Academic Product Management Assignment · Built with React 18, Vite &amp; Tailwind CSS</span>
            <span>Citing Peer-Reviewed Evidence: PMID 29949889, PMID 33742449, PMID 35049916</span>
          </div>

        </div>
      </footer>
    </div>
  );
}
