# Responsive Prototype Development Roadmap

> **Product:** Wellbeing Nutrition – Korean Marine Collagen Peptides  
> **Prototype Objective:** Build an interactive, responsive React + Vite web prototype to demonstrate and usability-test the prioritized CRO interventions (Control vs. Challenger A vs. Challenger B).  
> **Status:** Phase 1 Complete (Research, Documentation & Foundation)

---

## 1. Phased Implementation Roadmap

```
┌────────────────────────────────────────────────────────────────────────┐
│ PHASE 1: Research, Audit & Heuristic Framework (CURRENT)               │
│ • Official PDP teardown and heuristic friction identification          │
│ • Evidence classification template and ICE prioritization matrix       │
│ • Formal A/B testing experimental blueprint                            │
└───────────────────────────────────┬────────────────────────────────────┘
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ PHASE 2: Information Architecture & Component Wireframes               │
│ • Mobile & Desktop responsive layout wireframes                        │
│ • Component hierarchy definition (Atomic design principles)            │
│ • Copydeck & asset preparation (Purity badges, clinical diagram SVGs)  │
└───────────────────────────────────┬────────────────────────────────────┘
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ PHASE 3: React + Vite Frontend Prototype Setup                         │
│ • Clean modern toolchain: React 18+, Vite, Tailwind CSS, Lucide icons │
│ • Modular component architecture with mock state management            │
│ • Device-responsive viewport testing (Mobile-First 360px - 414px)      │
└───────────────────────────────────┬────────────────────────────────────┘
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ PHASE 4: Interactive CRO Variant Switcher & Micro-Interactions         │
│ • Dynamic variant toggle (Control vs Challenger A vs Challenger B)     │
│ • Sticky Mobile CTA component with dynamic pack/price binding          │
│ • Interactive Molecular Absorption (<1000 Da) comparison module        │
│ • Micro-feedback states (Add to Cart toast, mini-drawer preview)       │
└───────────────────────────────────┬────────────────────────────────────┘
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ PHASE 5: Usability Testing, Heuristic Review & Academic Submission    │
│ • Think-aloud usability testing protocol with 5-8 target participants   │
│ • Nielsen Norman Group heuristic compliance check                      │
│ • Final PM case study documentation and presentation slides            │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Phase Breakdown & Deliverables

### Phase 1: Research, Audit & Heuristic Framework (Done)
- [x] Official PDP audit and teardown (`research/product-teardown.md`)
- [x] Standard evidence template with strict validation tiers (`research/evidence-template.md`)
- [x] Sources, clinical literature, and e-commerce conversion benchmarks (`research/sources-and-benchmarks.md`)
- [x] Customer journey map and drop-off friction points (`docs/customer-journey.md`)
- [x] ICE/PIE hypothesis backlog and prioritisation matrix (`docs/cro-prioritisation.md`)
- [x] Rigorous A/B testing plan with sample size math (`docs/ab-testing-plan.md`)

---

### Phase 2: Information Architecture & Component Wireframing
- **Duration:** 3–5 working days
- **Key Deliverables:**
  1. Low-fidelity wireframes for Mobile Viewport (390px) and Desktop (1440px).
  2. Component inventory separating universal elements from variant-specific components:
     - `HeroSection` (Gallery, Title, Star Rating, Pricing Block, Trust Pill)
     - `VariantSelector` (Single Jar vs 2-Pack vs Stick Packs with savings badges)
     - `PurityTrustStrip` (Wild Salmon, Mercury-Free, FDA, FSSAI)
     - `AbsorptionGraphic` (`<1000 Da` nano-peptides vs standard 3000-5000 Da)
     - `TimelineTransformation` (4-8-12 week milestone cards)
     - `StickyMobileCTA` (Conditional bottom sheet bar with active price state)
     - `CartDrawerMock` (Interactive slide-out drawer confirming ATC action)

---

### Phase 3: React + Vite Prototype Foundation
- **Duration:** 4–6 working days
- **Tech Stack Selection:**
  - **Framework:** React 18+ (Functional components, Hooks)
  - **Bundler:** Vite (Lightning-fast HMR, lightweight build)
  - **Styling:** Tailwind CSS (Rapid responsive utility classes, mobile-first breakpoints)
  - **Icons:** `lucide-react` (Clean, accessible SVG icon set)
- **Directory Structure:**
  ```text
  src/
  ├── components/
  │   ├── common/         # Button, Badge, RatingStars, Accordion
  │   ├── layout/         # Header, Footer, StickyMobileCTA, CartDrawer
  │   ├── pdp/            # HeroGallery, ProductInfo, PackSelector, TrustStrip
  │   └── science/        # AbsorptionGraphic, ClinicalTimeline, Ingredients
  ├── context/
  │   ├── CartContext.jsx # Mock cart count, subtotal, and drawer open/close
  │   └── VariantContext.jsx # Active A/B test variant state (Control / Var A / Var B)
  ├── data/
  │   └── productData.js  # Verified copy, prices, packs, FAQs, and reviews
  └── App.jsx
  ```

---

### Phase 4: Interactive CRO Experimentation Layer
- **Duration:** 3–5 working days
- **Key Deliverables:**
  1. **Variant Switcher Bar:** A floating demo bar allowing evaluators or professors to toggle instantly between:
     - `Control`: Existing baseline experience
     - `Challenger A (Trust & Value)`: Micro-price per day + Taste Guarantee + Trust Strip
     - `Challenger B (Full CRO Experience)`: Challenger A + Sticky Mobile CTA + Absorption Graphic
  2. **Simulated Conversion Funnel:**
     - Selecting packs recalculates price, savings, and cost-per-day dynamically.
     - Clicking "Add to Cart" opens a side-drawer showing free shipping progress and checkout intent.
  3. **Mock Telemetry Logger:** Console logger showing simulated events (`pdp_view`, `atc_click`, `variant_switch`, `scroll_depth_50`).

---

### Phase 5: Usability Testing & Academic Reporting
- **Duration:** 5–7 working days
- **Key Deliverables:**
  1. **Usability Testing Protocol:** Task-based testing script:
     - Task 1: "Find out if this product tastes fishy and whether you can mix it in tea."
     - Task 2: "Compare the single jar against the twin pack and add your choice to the cart."
  2. **Quantitative SUS Scoring:** System Usability Scale (SUS) survey administered to 5–8 test users.
  3. **Final University PM Report:** Synthesis of heuristic audit, prioritized experiments, prototype screenshots, and expected commercial ROI.

---

## 3. Non-Functional & Quality Requirements

- **Mobile Viewport Optimization:** Perfectly optimized for 360px to 414px mobile widths (representing >80% of category traffic).
- **Web Content Accessibility Guidelines (WCAG 2.1 AA):**
  - Minimum contrast ratio of 4.5:1 for body text.
  - Interactive elements have minimum touch targets of 44x44px.
  - Full keyboard accessibility and screen-reader aria labels on interactive toggles.
- **Core Web Vitals Emulation:** Keep prototype bundle size $< 150\text{KB}$ gzipped; target Largest Contentful Paint (LCP) $< 2.0\text{s}$.
