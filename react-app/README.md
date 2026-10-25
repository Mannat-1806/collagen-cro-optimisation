# Product Management Case Study: Conversion Rate Optimisation (CRO)
## Wellbeing Nutrition – Korean Marine Collagen Peptides Product Detail Page (PDP)

> **Course / Academic Context:** Advanced Product Management & Growth Strategy  
> **Target Product:** [Wellbeing Nutrition – Korean Marine Collagen Peptides](https://wellbeingnutrition.com/products/korean-marine-collagen-peptides)  
> **Focus Area:** Conversion Rate Optimisation (CRO), Heuristic UX Audit, Experimentation Design & Responsive Prototyping  
> **Status:** Phase 1 Complete (Audited Research Foundation, Strategy & Experimentation Architecture)

---

## 1. Executive Summary & Project Objective

This project delivers an end-to-end Product Management Conversion Rate Optimisation (CRO) strategy and validation prototype for **Wellbeing Nutrition's Korean Marine Collagen Peptides** product detail page (PDP).

### Core Problem Statement
Wellbeing Nutrition's Korean Marine Collagen Peptides is a premium supplement formulated with wild-caught deep-sea Korean fish (salmon, cod, haddock) and nano-hydrolyzed Type I & III peptides at `<1000 Daltons`. However, D2C ingestible beauty supplements face three prominent behavioral friction barriers at the PDP evaluation stage:
1. **The Sensory Barrier ("Fishy Aftertaste" Hesitation):** Prospective customers frequently hesitate to purchase marine collagen out of concern for unpleasant odor, fishy taste, or clumping in beverages.
2. **The High-Upfront Cost Barrier:** Displaying a single lump-sum purchase price (~₹1,700) without a transparent daily breakdown (~₹65–₹72/day for 25 servings) creates cognitive sticker shock.
3. **Mobile Viewport Navigation Friction:** With the vast majority of traffic arriving on mobile devices, prolonged vertical scrolling through educational and clinical content causes users to lose immediate access to the purchase call-to-action (CTA).

### Objective
Systematically formulate, prioritize, and design evidence-backed CRO interventions to increase the **Mobile PDP Add-to-Cart (ATC) Rate** and downstream **E-Commerce Conversion Rate**, validated via a responsive prototype and an academic-grade A/B testing blueprint.

---

## 2. Research Integrity & Evidence Standards

To maintain academic and professional rigor, this repository strictly adheres to a **Four-Tier Evidence Classification**:

- `[OBSERVATION: Verified PDP]` — Directly observable on the live official product page (exact copy, pack size, price, serving count, visible certifications).
- `[EXTERNAL EVIDENCE: Verified Source]` — Supported by cited external sources with permanent identifiers/URLs (PubMed PMIDs, DOIs, authoritative benchmark studies).
- `[UNVERIFIED ASSUMPTION: Baseline Needed]` — Qualitative inferences regarding user drop-offs, internal metrics, or traffic channel breakdowns that require first-party Google Analytics 4 (GA4) or Shopify access.
- `[HYPOTHESIS: To Be Experimentally Tested]` — Falsifiable Product Management propositions engineered for experimentation.

> [!WARNING]
> **Integrity Guardrails:**
> 1. No conversion rates, private revenue analytics, customer interviews, or clinical claims have been fabricated.
> 2. Generic industry benchmarks (e.g. 70% cart abandonment) are macro category context and are **never treated as proof** of Wellbeing Nutrition's actual performance.
> 3. Behavioral personas are treated strictly as **heuristic mental models**, not empirical customer segments.
> 4. Prioritization confidence scores are **calibrated to reflect pre-analytics uncertainty** rather than arbitrarily inflated.
> 5. A/B testing calculations incorporate **multiplicity correction (Bonferroni)** to account for multiple treatment arms against control.

---

## 3. Repository Architecture

```text
collagen-cro-optimization/
├── .env.example                       # Safe environment variable template (no secrets)
├── .gitignore                         # Comprehensive ignore rules (Node, Vite, secrets, build)
├── README.md                          # Master project documentation, objectives & verification
├── research/                          # Research foundation & evidence catalog
│   ├── evidence-template.md           # Standardized 4-tier evidence and hypothesis template
│   ├── product-teardown.md            # Component-by-component heuristic audit of the live PDP
│   └── sources-and-benchmarks.md      # Scientific literature (PMIDs), brand assets & D2C benchmarks
└── docs/                              # PM frameworks & experimentation strategy
    ├── customer-journey.md            # Heuristic mental models, funnel stages & drop-off analysis
    ├── cro-prioritisation.md          # Calibrated ICE scoring rubric & ranked hypothesis backlog
    ├── ab-testing-plan.md             # Formal A/B/n test plan, Bonferroni correction, sample size math
    ├── prototype-roadmap.md           # 5-phase responsive React+Vite prototype roadmap
    └── prototype-spec.md              # Detailed component, layout & interaction prototype spec
```

---

## 4. Documentation Index

| Document | Primary Focus | Key Deliverable |
| :--- | :--- | :--- |
| [evidence-template.md](file:///d:/downloads/collagen-cro-optimization/research/evidence-template.md) | Research Standards | Standardized template separating facts, external literature with URLs, assumptions, and hypotheses with a worked reference example. |
| [product-teardown.md](file:///d:/downloads/collagen-cro-optimization/research/product-teardown.md) | UX & Heuristic Audit | Detailed component analysis of the live PDP, evaluating cognitive load, trust signals, and mobile friction. |
| [sources-and-benchmarks.md](file:///d:/downloads/collagen-cro-optimization/research/sources-and-benchmarks.md) | Ground Truth & Benchmarks | Scientific validation of `<1000 Da` peptides (PMID: [29949889](https://pubmed.ncbi.nlm.nih.gov/29949889/)), clinical timelines (PMID: [33742449](https://pubmed.ncbi.nlm.nih.gov/33742449/)), and benchmarks with explicit non-conflation guardrails. |
| [customer-journey.md](file:///d:/downloads/collagen-cro-optimization/docs/customer-journey.md) | User Journey Mapping | 3 heuristic mental models (unvalidated hypotheses), end-to-end PDP interaction flow, and data requirements for drop-off telemetry. |
| [cro-prioritisation.md](file:///d:/downloads/collagen-cro-optimization/docs/cro-prioritisation.md) | Growth Prioritization | Calibrated 1–10 ICE scoring rubric and backlog of 6 CRO initiatives with pre-analytics uncertainty adjustments. |
| [ab-testing-plan.md](file:///d:/downloads/collagen-cro-optimization/docs/ab-testing-plan.md) | Experimentation Blueprint | Statistically consistent multi-arm test plan with Bonferroni multiplicity correction, guardrail metrics, and variant specs. |
| [prototype-roadmap.md](file:///d:/downloads/collagen-cro-optimization/docs/prototype-roadmap.md) | Engineering & Prototype Plan | Phased roadmap for building a responsive React 18 + Vite prototype with an interactive A/B variant switcher. |
| [prototype-spec.md](file:///d:/downloads/collagen-cro-optimization/docs/prototype-spec.md) | Functional Specification | Viewport definitions, content hierarchy, interaction logic, WCAG 2.1 AA accessibility & test cases. |

---

## 5. Summary of Calibrated CRO Hypotheses

Our calibrated ICE prioritization ranks the top immediate interventions as follows:

| ID | Initiative | Calibrated ICE Score | Priority | Core Mechanism |
| :---: | :--- | :---: | :---: | :--- |
| **H-03** | **Persistent Sticky Mobile Bottom CTA** | **7.67** | P0 | Keeps selected pack, live price, and "Add to Cart" affordance within thumb reach during deep educational scrolling. |
| **H-01** | **Value-Per-Serving + Neutral Sensory Callout** | **7.67** | P0 | Displays "Only ~₹68/day (25 servings)" beside total price and adds a verified unflavored/neutral mixing callout above CTA. |
| **H-06** | **Unified Purity & Certification Trust Strip** | **7.33** | P1 | Consolidates Wild Fish, Mercury-Free, US FDA Registered Facility, and FSSAI credentials beneath hero. |
| **H-02** | **Pack Selector Restructuring & Savings Anchoring** | **7.00** | P1 | Clarifies pack savings with prominent "Best Value - Save ₹400" badging to boost Average Order Value (AOV). |
| **H-04** | **Visual Molecular Absorption Explainer (`<1000 Da`)** | **6.67** | P2 | Translates abstract Dalton numbers into an intuitive visual comparison against standard 3000-5000 Da collagens. |
| **H-05** | **Sensory Dissolution Micro-Video Proof** | **5.67** | P2 | Visual proof of a single scoop dissolving instantly in water with zero clumping or cloudiness. |

---

## 6. How to Verify & Review This Foundation

Follow these steps to inspect and verify the repository assets:

1. **Verify File Structure:**
   Run the following PowerShell command in the repository root:
   ```powershell
   Get-ChildItem -Recurse -File | Select-Object FullName
   ```

2. **Inspect Research Templates & Standards:**
   - Review [evidence-template.md](file:///d:/downloads/collagen-cro-optimization/research/evidence-template.md) to confirm clear segregation between facts, external literature with source URLs, assumptions, and hypotheses.
   - Review [sources-and-benchmarks.md](file:///d:/downloads/collagen-cro-optimization/research/sources-and-benchmarks.md) to verify that internal metrics are labeled `[Baseline Needed]` and clinical claims are backed by PMIDs.

3. **Inspect Heuristic Audit & Journey Map:**
   - Cross-check [product-teardown.md](file:///d:/downloads/collagen-cro-optimization/research/product-teardown.md) against the live [Wellbeing Nutrition PDP](https://wellbeingnutrition.com/products/korean-marine-collagen-peptides).
   - Review [customer-journey.md](file:///d:/downloads/collagen-cro-optimization/docs/customer-journey.md) to verify that customer profiles are transparently marked as unvalidated heuristic mental models.

4. **Verify Prioritization & Statistical Consistency:**
   - Inspect the calibrated ICE scoring rubric in [cro-prioritisation.md](file:///d:/downloads/collagen-cro-optimization/docs/cro-prioritisation.md).
   - Inspect the statistical power formulas ($\alpha=0.05, \beta=0.20$), Bonferroni correction ($\alpha'=0.025$), and sample size tables in [ab-testing-plan.md](file:///d:/downloads/collagen-cro-optimization/docs/ab-testing-plan.md).

5. **Review Git & Security Configuration:**
   - Confirm [.gitignore](file:///d:/downloads/collagen-cro-optimization/.gitignore) explicitly excludes `.env`, `node_modules/`, `dist/`, and secrets.

---

## 7. Customer-First Journey & Prototype Verification Guide

The responsive React 18 + Vite prototype implements a customer-centric sequence designed around education and natural purchase discovery:

1. **Hero & Immediate Purchase Access:** [`EditorialHero.jsx`](file:///d:/downloads/collagen-cro-optimization/src/components/EditorialHero.jsx) — Warm, human headline (*“A little care for the skin you're in.”*), friendly jargon-free explanation, 3 simple benefit themes, official 1080×1080 photography, and a **compact purchase panel placed directly below the product image in normal document flow** with verified price (₹1,699 for 25 servings @ ₹68/day), pack selector, quantity steppers, and side-by-side **Add to Cart** and **Buy Now** buttons. When scrolling past the hero, the purchase panel scrolls away naturally with zero fixed/sticky locking.
2. **Relatable Benefits:** [`BenefitsDeepDive.jsx`](file:///d:/downloads/collagen-cro-optimization/src/components/BenefitsDeepDive.jsx) — 3 human-centred chapters (*“Support for healthy-looking skin”*, *“Care for your hair and nails”*, *“Collagen for your everyday routine”*) answering 3 customer questions: (1) what collagen does in the body, (2) what research suggests, and (3) what to realistically expect.
3. **The Science Behind Collagen:** [`ScienceAbsorption.jsx`](file:///d:/downloads/collagen-cro-optimization/src/components/ScienceAbsorption.jsx) & [`ClinicalTimeline.jsx`](file:///d:/downloads/collagen-cro-optimization/src/components/ClinicalTimeline.jsx) — Optional deep-dive for curious customers covering nano-hydrolysis (<1000 Da), Dalton spectrum, and methodological distinction between ingredient literature and commercial product.
4. **Build Trust & Verify Specs:** [`TrustStrip.jsx`](file:///d:/downloads/collagen-cro-optimization/src/components/TrustStrip.jsx) — Formulation monograph, FSSAI, US FDA facility, non-detectable mercury batch testing.
5. **Explore Genuine Reviews:** [`ReviewsSection.jsx`](file:///d:/downloads/collagen-cro-optimization/src/components/ReviewsSection.jsx) — Authenticated aggregate 4.6/5.0 score across 1,420+ evaluations, sentiment focus areas, and review ingestion protocol.
6. **Everyday Routine & Inquiries:** [`UsageMixability.jsx`](file:///d:/downloads/collagen-cro-optimization/src/components/UsageMixability.jsx) & FAQs — Daily preparation in hot/cold liquids, 8g scoop measure, and nutritional breakdown.
7. **Verified Delivery & Returns Policy:** Transparently communicated across three friction touchpoints: hero purchase panel badge with direct anchor jump, an expandable policy accordion in product monographs, and cart drawer checkout reassurance detailing the 48-hour damaged/defective reporting window and food-grade hygiene standards.
8. **Clean Navigation:** [`Header.jsx`](file:///d:/downloads/collagen-cro-optimization/src/components/Header.jsx) — Simple customer-facing labels: *Benefits*, *Ingredients & Science*, *Reviews*, *How to Use*.
9. **Interactive Wellness Shopping Assistant (Phase 3):** [`WellnessAssistant.jsx`](file:///d:/downloads/collagen-cro-optimization/src/components/WellnessAssistant.jsx) & [`assistantEngine.js`](file:///d:/downloads/collagen-cro-optimization/src/utils/assistantEngine.js) — A fixed circular launcher (`Ask our Wellness Assistant`) that opens an interactive, accessible concierge dialog. Grounded entirely in verified product data (`src/data/productData.js`), it answers inquiries on pure ingredients, pack pricing/serving math, consumption ritual, and official 48-hour return policies with direct section jump links. Strictly implements medical safety disclosures (recommending physician consultation for pregnancy, fish allergies, or health conditions) and is clearly labeled as a transparent local demo rule-based system without simulated live AI dependencies.

### Verification Commands:

1. **Run Dual Integrity & Quality Bar Tests:**
   ```bash
   npm test
   ```
   *Expected outcome:* Validates serving math, PubMed citations, compliance, absence of fake claims/guarantees, warm hero copy, purchase panel under image in normal flow, human benefits structure, Delivery & Returns policy, and the complete Phase 3 Wellness Assistant engine & UI.

2. **Run Production Build Check:**
   ```bash
   npm run build
   ```
   *Expected outcome:* Compiles into `dist/` with 0 errors in under 5 seconds.

3. **Launch Local Development Server:**
   ```bash
   npm run dev
   ```
   *Expected outcome:* Starts local development server on `http://localhost:3000`.

4. **Launch Production Preview:**
   ```bash
   npm run preview
   ```
   *Expected outcome:* Previews the optimized production bundle locally.
