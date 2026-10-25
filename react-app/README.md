# Wellbeing Nutrition – Korean Marine Collagen Peptides (PDP Redesign)

A modern, conversion-focused e-commerce Product Detail Page (PDP) redesign for **Wellbeing Nutrition Korean Marine Collagen Peptides**, built with **React 18**, **Vite**, and **Tailwind CSS**.

---

## 1. Project Overview

This project redesigns the online shopping experience for Wellbeing Nutrition's flagship Korean Marine Collagen Peptides supplement. The redesign transitions the product detail page from an academic, text-heavy layout into a polished, trustworthy, and customer-friendly e-commerce experience designed to reduce customer hesitation and boost purchase confidence.

### Key Objectives
* **Conversion-First UX:** Immediate access to product variants, authentic bundle photos, transparent daily cost math, and purchase actions directly below the gallery in normal document flow (no sticky/fixed purchase bars).
* **Benefit-Led Storytelling:** Replacing dense scientific monographs with scannable benefit cards, visual preparation routines, and transparent ingredient specifications.
* **Customer-Centric Reviews:** Prioritizing readable customer comments with live keyword search, star rating filters, sorting, and an interactive review submission flow.
* **Factual & Scientific Integrity:** Every pack option, price, serving count, and clinical reference is strictly grounded in verifiable product and clinical trial data.

---

## 2. Key Features

### 🛍️ Product Hero & Dynamic 4-Pack Selector
* **Two-Column E-Commerce Layout:** Left gallery column paired with the right purchase decision box on desktop; smoothly stacks on mobile viewports.
* **16-Slide High-Resolution Gallery:** Features authentic 1080×1080 packaging photos, clinical trial graphics, preparation steps, and back-of-pack nutrition panels with interactive thumbnails and previous/next navigation.
* **4-Pack Visual Variant Selector:** Each pack option displays its authentic bundle photograph, selling price, MRP with strikethrough, savings percentage, cost per day, and serving count:
  * **Pack of 1:** ₹1,745 (MRP ₹1,799, save 3% · ₹70/day · 25 servings)
  * **Pack of 2:** ₹3,418 (MRP ₹3,598, save 5% · ₹68/day · 50 servings)
  * **Pack of 3:** ₹5,019 (MRP ₹5,397, save 7% · ₹67/day · 75 servings)
  * **Pack of 4:** ₹6,476 (MRP ₹7,196, save 10% · ₹65/day · 100 servings)
* **Natural Document Flow:** Cart and purchase controls follow natural scrolling without invasive sticky viewport overlays.

### 🌿 Human-Centred Benefits Grid
* 3 visually distinct benefit cards with authentic product gallery pairings:
  1. **Skin Hydration & Bounce:** Supports dermal moisture, elasticity, and fine line reduction.
  2. **Hair & Nail Strength:** Supplies proline and glycine peptides as structural building blocks.
  3. **Daily Connective Care:** Wholesome joint comfort and active body mobility.
* Qualified claims with an expandable *"What Research Suggests & Realistic Expectations"* disclosure.

### ☕ Visual Daily Routine & Beverage Pairings
* Authentic preparation graphic with step-by-step guidance.
* 3 compact beverage tiles illustrating daily habit integration:
  * **Hot Morning Brew:** Heat-stable in black coffee, green tea, or matcha.
  * **Cold Hydration:** Fresh citrus water, coconut water, or cold infusions.
  * **Smoothies & Breakfast Bowls:** Blends smoothly with zero clumping or chalkiness.

### 🔬 Clean Nutritional Specifications & Trust Strip
* 4 quick-reference metric pills: `8,000 mg Pure Marine Collagen`, `100% Type I & III`, `0g Added Sugar`, and `36 kcal`.
* Authentic back-of-pack nutrition label (`slide-12`) with readable supplement facts and collapsible 18-amino-acid breakdown.
* 5 official facility certifications: US FDA Registered Facility, FSSAI Licensed, GMP Certified, 3rd-Party Heavy Metal Tested, and Korean Deep-Sea Sourced.

### 🧬 "The Science Behind Collagen" (Compact & Collapsible)
* 3 concise takeaway cards displayed by default (Sub-3,000 Daltons Nano-Peptides, Intestinal Barrier Uptake, Fibroblast Stimulation).
* Collapsible deep-dive drawers for the Daltons molecular weight comparison, 8–12 week clinical progression timeline, and peer-reviewed PubMed citations (*PMID: 29949889*, *PMID: 33742449*, *PMID: 35049916*).

### ⭐ Customer Experiences & Reviews
* **Compact Header (Occupies ~12% Viewport):** Displays `4.74 / 5.0` rating with 5 gold stars and `(571 Verified Reviews)` inline alongside `Verified Aggregate Score`.
* **Collapsible Rating Breakdown:** Expandable 5-star to 1-star horizontal distribution bars with interactive click-to-filter capability.
* **Immediately Visible Customer Comments:** 6+ detailed review cards displayed in a balanced 2-column grid on desktop and stacked on mobile, with a functional "Load More Reviews" button.
* **Interactive Controls:** Real-time search by keyword, star rating filter pills (`All`, `5★`, `4★`, `3★`, `2★`, `1★`), sorting (`Most Recent`, `Highest Rated`, `Lowest Rated`, `Most Helpful`), helpful counters, and photo attachment lightbox.
* **Review Submission Experience:** Accessible modal with client-side validation for rating, headline, body text, pack size, author name, email, and recommendation toggle.

### 💬 Interactive Wellness Shopping Assistant
* Fixed, accessible concierge button (`Ask our Wellness Assistant`) opening a conversational assistant.
* 100% deterministic, rule-based responses grounded in verified product data (`productData.js`).
* Answers customer inquiries on ingredients, dosage, pack math, mixability, and official 48-hour return policies with section jump links.
* Strict medical safety guardrails for pregnancy, fish allergies, and minors.

---

## 3. Technology Stack

* **Framework:** React 18.3 (`react`, `react-dom`)
* **Build Tool:** Vite 6.0 (Fast HMR, optimized ESM bundling)
* **Styling:** Tailwind CSS 3.4 & PostCSS with Autoprefixer
* **Typography:** Cormorant Garamond (Editorial serif headings) & Inter (UI sans-serif)
* **Icons:** Lucide React (`lucide-react`)
* **Testing:** Node.js native test runner (`node:assert`, `node:fs`)

---

## 4. Prerequisites

* **Node.js:** v18.0.0 or higher (LTS recommended)
* **npm:** v9.0.0 or higher

---

## 5. Installation & Setup

1. **Navigate to the application directory:**
   ```bash
   cd react-app
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

---

## 6. Development & Build Commands

All commands should be executed from within the `react-app/` directory:

| Command | Action | Output / URL |
| :--- | :--- | :--- |
| `npm run dev` | Starts the local Vite development server with hot module replacement | `http://localhost:5173` |
| `npm test` | Runs the full automated verification test suite across all 4 modules | Command line test output (100% pass) |
| `npm run build` | Compiles and optimizes assets into production-ready bundle | Creates `dist/` directory (~3.2s build time) |
| `npm run preview` | Serves the production build locally for verification | `http://localhost:4173` |

---

## 7. Project Structure

```text
react-app/
├── public/
│   ├── images/                        # Base product packaging photos
│   └── product-gallery/               # 16 authentic 1080x1080 product & infographic slides
│       ├── slide-01-marine_collagen.jpg
│       ├── slide-02-collagen_to_reduce_signs_of_ageing.jpg
│       ├── slide-03-collagen_science.jpg
│       ├── slide-04-collagen_absorption.png
│       ├── ...
│       └── slide-16-marine_collagen_unflavored_pack_of_4.jpg
├── src/
│   ├── components/                    # Modular UI components
│   │   ├── BenefitsDeepDive.jsx       # 3-column e-commerce benefits grid
│   │   ├── CartDrawer.jsx             # Slide-out shopping cart drawer
│   │   ├── EditorialHero.jsx          # Hero section with 4-pack visual selector & gallery
│   │   ├── ExpandableSection.jsx      # Accessible accordion component
│   │   ├── Header.jsx                 # Brand navigation header
│   │   ├── IngredientsNutrition.jsx   # Nutrition label, stats & amino acid breakdown
│   │   ├── PrototypeModal.jsx         # Prototype purchase action notification
│   │   ├── PrototypeNoticeBanner.jsx  # Academic prototype compliance banner
│   │   ├── ReviewsSection.jsx         # Compact reviews overview & customer comments grid
│   │   ├── ScienceAbsorption.jsx      # Compact science & clinical evidence overview
│   │   ├── TrustStrip.jsx             # Sourcing pillars & facility certifications
│   │   ├── UsageMixability.jsx        # Preparation routine & daily beverage pairings
│   │   └── WellnessAssistant.jsx      # Conversational customer concierge dialog
│   ├── context/
│   │   └── CartContext.jsx            # Cart state management (items, totals, open/close)
│   ├── data/
│   │   ├── productData.js             # Verified product specs, prices, packs & policies
│   │   └── reviewsData.js             # Verified benchmark metrics & sample prototype reviews
│   ├── utils/
│   │   └── assistantEngine.js         # Deterministic NLP matching & safety guardrails
│   ├── App.jsx                        # Root page component & layout orchestrator
│   ├── index.css                      # Tailwind directives & global styling rules
│   └── main.jsx                       # Application entry point
├── tests/                             # Automated test suites
│   ├── assistant-engine.test.js       # Wellness assistant query routing & safety tests
│   ├── prototype-logic.test.js        # Serving math, pricing & citation integrity tests
│   ├── responsive-and-ui.test.js      # Quality bar, DOM integrity & layout tests
│   └── reviews-section.test.js        # Review filtering, search, sorting & form validation
├── docs/                              # CRO strategy, testing plan & architecture specs
├── .gitignore                         # Build, dependency & secret exclusion rules
├── index.html                         # HTML5 template with Google Fonts configuration
├── package.json                       # Dependencies, scripts & project metadata
├── postcss.config.js                  # PostCSS plugins configuration
├── tailwind.config.js                 # Custom theme, colors & font family definitions
└── vite.config.js                     # Vite build & plugin settings
```

---

## 8. Current Prototype Limitations & Transparency Disclosures

> [!IMPORTANT]
> **Data Authenticity & Consumer Protection Standards**
> 
> To uphold strict academic rigor and prevent consumer deception, this prototype distinguishes between verified brand data and prototype demonstration features:

1. **Customer Reviews Disclosure:**
   * **Verified Benchmark:** The overall rating of **4.74 / 5.0** and the count of **571 verified reviews** represent Wellbeing Nutrition's published customer satisfaction benchmarks across official digital touchpoints.
   * **Individual Review Comments:** The individual customer review cards displayed on the page are **clearly identified sample prototype content** (`Sample Review — Prototype Only`). They illustrate the layout hierarchy, typography, keyword search, rating filters, and pagination. They **do not represent real customer testimonials, genuine customer identities, or confirmed biological results**.
   * **Live Stream Ingestion:** An explicit status banner discloses: `"Live Review Stream: Integration Pending. Real Customer Reviews Will Stream Here Once Connected to live verified-order webhooks."`
2. **Review Submission Simulation:**
   * Submissions made via the "Write a Review" modal undergo client-side validation and are prepended to the local session state so evaluators can test the flow. Submissions are not transmitted to or stored in a persistent production database.
3. **E-Commerce Checkout Simulation:**
   * The "Add to Cart" and "Buy Now" buttons trigger the interactive cart drawer with dynamic price calculations and pack switching. Payment gateway APIs (e.g. Razorpay, Shopify Pay) are not connected.
4. **Wellness Assistant Architecture:**
   * The assistant is a local, deterministic, rule-based concierge running directly in the browser. It relies strictly on verified data in `productData.js` and does not transmit customer queries to external generative AI services or third-party servers.
5. **Delivery & Returns Disclosures:**
   * Shipping timelines (2–4 business days pan-India) and the 48-hour damaged/defective claims policy match official brand documentation. Opened food-grade ingestibles are exempt from routine returns for health and hygiene safety.
