# Phase 2 Strategic Decisions, Corrected Claims & Unknowns Register

**Project:** Wellbeing Nutrition Korean Marine Collagen Peptides CRO Optimisation  
**Author:** Senior Product Manager & CRO Strategist  
**Date:** October 25, 2026  
**Status:** Approved for Phase 2 Architecture  
**Dedicated Branch:** `feature/collagen-cro-experience`  

---

## 1. Executive Summary

This deliverable provides a formal audit log of all strategic decisions adopted, claims corrected, hypotheses retained, and unresolved unknowns documented during **Phase 2: CRO Strategy, Experiment Design & UX Architecture**. 

It bridges the empirical findings of Phase 1 with the upcoming responsive prototype implementation in Phase 3.

---

## 2. Strategic Decisions Adopted in Phase 2

1. **Selection of Primary Implementation Priority (INT-01):**
   * *Decision:* The **High-Clarity Product Hero & Purchase Area** was selected as the first implementation candidate based on its leading ICE score of **100/125** (Impact: 4, Confidence: 5, Ease: 5).
   * *Rationale:* Solves the primary cognitive barrier (price sticker shock) without requiring physical supply chain modifications or backend dependencies.
2. **Standardization on Isolated A/B Experimentation:**
   * *Decision:* Experiment A (Price-per-serving transparency) and Experiment B (Review discovery) are structured as completely isolated tests rather than a multi-variable redesign.
   * *Rationale:* Adheres to statistical integrity principles, ensuring that conversion lift is definitively attributable to individual design interventions.
3. **Local In-Memory Knowledge Engine for Product Guide AI Agent:**
   * *Decision:* For the upcoming prototype, the assistant is specified to operate over a local, structured JSON knowledge base with strict uncertainty fallbacks rather than connecting to live external LLM APIs.
   * *Rationale:* Eliminates risk of medical hallucinations, guarantees 100% deterministic safety testing, and removes external API cost/rate-limit dependencies.
4. **Conditional Positioning of the 14-Serving Starter Pack:**
   * *Decision:* The starter pack is treated as an evaluated strategic hypothesis and downstream experiment rather than an immediate launch prerequisite.
   * *Rationale:* A new physical SKU requires formal manufacturing MOQs, packaging design, and ERP setup that cannot be assumed without supply chain sign-off.
5. **Harmonization of Social Proof Across Funnel:**
   * *Decision:* The conflicting "4.9 Review" testimonial banner is deprecated in favor of the verified platform rating of **4.74 ★ based on 571 reviews**.
   * *Rationale:* Enforces Nielsen Norman Group trust heuristics to prevent cognitive dissonance among analytical shoppers.

---

## 3. Explicit Claims & Calculation Corrections Enforced

| Item / Claim | Phase 1 Initial Text / Hypothesis | Phase 2 Grounded Correction | Regulatory & Scientific Rationale |
| :--- | :--- | :--- | :--- |
| **Duration & Efficacy Claims** | "Recommended 50-Day Clinical Transformation Course (Matches 8-Week Studies)" | **"50-Day Supply (assuming 1 serving/day)"** | A 50-serving pack does not cover an 8-week (56-day) trial. Finished product efficacy cannot be promised as a "guaranteed transformation" under ASCI regulations. |
| **Price per Serving Verification** | Generic approximation (~₹70/day) | **Programmatically verified prices:**<br>• Pack 1: ₹69.80/serv (25 serv)<br>• Pack 2: ₹68.36/serv (50 serv)<br>• Pack 3: ₹66.92/serv (75 serv)<br>• Pack 4: ₹64.76/serv (100 serv) | Mathematical accuracy grounded in 200g tub / 8g serving size. Labeled strictly as captured reference prices. |
| **Sensory Guarantees** | "100% Odorless & Mixability Pledge; Zero Clumping Guarantee" | **Transparent Sensory Reassurance:** Detailed mixing steps, liquid temperature guide, and honest disclosure that individual taste perceptions vary. | Pure unflavored marine hydrolysates have natural mineral characteristics; universal guarantees mislead consumers and inflate post-purchase refund complaints. |
| **Coffee Price Comparison** | "Cheaper than a daily cup of coffee" | **Removed.** | Avoids arbitrary comparative claims without verified Indian metropolitan beverage cost benchmarks. |
| **Social Proof Numbers** | Inconsistent: 4.74★ badge vs 4.9★ testimonial banner | **Unified to 4.74 ★ (571 verified reviews).** | Resolves internal inconsistency and protects consumer trust. |

---

## 4. Retained Hypotheses (Requiring Empirical Testing)

* **HY-01 (Unit Cost Re-anchoring):** Breaking down ₹1,745 into ₹69.80/day will increase mobile add-to-cart rates by $\ge 10\%$.
* **HY-02 (Sensory Anxiety Alleviation):** Displaying clear 3-step preparation visuals will decrease hero bounce rates among first-time visitors by $\ge 8\%$.
* **HY-03 (Review Explorer Utility):** Providing keyword search and taste/mixing review filters will increase review-section conversion by $\ge 12\%$.
* **HY-04 (Assistant Query Resolution):** Providing instant answers to age suitability and coffee mixability will reduce PDP exits by $\ge 6\%$.

---

## 5. Critical Unknowns Register (Pending Corporate Action)

1. **Analytics Baseline:** Awaiting 90-day device-segmented GA4 export to convert illustrative A/B test sample size models into fixed statistical sample sizes.
2. **Dalton Molecular Weight Certification:** Awaiting laboratory confirmation from manufacturer quality team regarding the exact average Dalton rating.
3. **Heavy Metal Testing Disclosures:** Awaiting certificate of analysis from quality assurance to permit explicit "Heavy Metal Tested" copy in the trust module.
4. **Starter Pack Unit Economics:** Awaiting formal finance and operations sign-off on packaging MOQs and gross margin impact for a 112g trial pouch.

---

## 6. Recommended Next Phase: Phase 3

**Phase 3: Interactive Responsive HTML5/CSS3 Prototype Development**
1. Implement the mobile-first and desktop UX architectures designed in `wireframes/desktop.md` and `wireframes/mobile.md`.
2. Construct the local, deterministic Product Guide AI Agent module utilizing the structured knowledge schema defined in `strategy/product_guide_spec.md`.
3. Embed the verified pricing matrix, price-per-serving calculations, and unified review explorer.
4. Provide interactive URL toggles (`?variant=control`, `?variant=unit_pricing`) to demonstrate the isolated A/B testing variations for stakeholder evaluation.
