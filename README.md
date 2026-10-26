# Wellbeing Nutrition — Korean Marine Collagen Peptides (CRO & E-Commerce Redesign)

A comprehensive Product Management Conversion Rate Optimisation (CRO) research study and modern e-commerce Product Detail Page (PDP) redesign for **[Wellbeing Nutrition Korean Marine Collagen Peptides](https://wellbeingnutrition.com/products/korean-marine-collagen-peptides)**.

---

## 1. Project Overview & Repository Purpose

This repository documents an end-to-end conversion rate optimisation initiative designed to solve primary customer drop-off barriers on Wellbeing Nutrition's flagship marine collagen product page. 

Marine collagen supplements face three documented behavioral friction points at the evaluation stage:
1. **Sensory & Taste Hesitation:** Anxiety regarding fishy aftertaste, odor, or poor beverage mixability.
2. **Upfront Price Shock:** Cognitive friction from a single lump-sum purchase price (~₹1,745+) without transparent daily serving economics.
3. **Academic Information Overload:** Lengthy, research-paper style content layouts that fatigue mobile shoppers before reaching the purchase decision.

This project addresses these challenges through a rigorous research foundation, hypothesis-driven experimentation framework, and a production-grade **React 18 / Vite / Tailwind CSS** e-commerce redesign.

---

## 2. Repository Deliverables

The repository is organized into distinct phases of product discovery, strategy, testing, and UI implementation:

```
collagen-cro-optimisation/
├── research/              # Quantitative & qualitative heuristic audit, benchmarks & customer journey
├── strategy/              # Prioritized CRO hypotheses, claims matrix & retention economics
├── wireframes/            # Responsive mobile and desktop UX wireframes
├── experiments/           # Statistical A/B testing plan with Bonferroni correction & MDE sizing
├── implementation/        # GA4 data layer and event measurement specifications
├── prototype/             # Legacy lightweight vanilla HTML/JS prototype (A/B unit-pricing demo)
└── react-app/             # Modern, production-ready React 18 + Vite + Tailwind PDP redesign
```

### Summary of Key Deliverables

* **`research/`**: Detailed heuristic evaluation of the live PDP, customer journey friction maps, competitor benchmarking against leading collagen brands, and a 4-tier evidence matrix (`[OBSERVATION]`, `[EXTERNAL EVIDENCE]`, `[UNVERIFIED ASSUMPTION]`, `[HYPOTHESIS]`).
* **`strategy/`**: Prioritized CRO interventions, qualified claims matrix, starter-pack economics, and conversational product guide specifications.
* **`wireframes/`**: High-fidelity ASCII and layout wireframes for mobile and desktop viewport states.
* **`experiments/`**: Academic-grade A/B testing blueprint specifying primary metric (Mobile PDP Add-to-Cart rate), secondary guardrails, statistical power calculations, and Bonferroni alpha adjustment.
* **`implementation/`**: Complete Google Analytics 4 (GA4) ecommerce measurement plan and data layer event schemas.
* **`prototype/`**: Lightweight vanilla HTML5/JS demonstration prototype featuring real-time URL query parameter toggles (`?variant=unit_pricing` vs. `?variant=control`).
* **[`react-app/`](./react-app/)**: The full e-commerce PDP redesign engineered with modern component architecture, state management, and comprehensive automated test suites.

---

## 3. Featured Redesign: The React E-Commerce Application

The primary interactive deliverable is located in the [`react-app/`](./react-app/) directory. It translates the CRO research findings into an engaging, high-converting e-commerce shopping experience.

### Key Redesign Highlights

* **Visual 4-Pack Selector:** Displays authentic multi-pack bundle imagery mapped directly to each variant (Pack of 1, 2, 3, and 4) with exact brand pricing, strikethrough MRP, calculated savings %, and daily serving math (₹65–₹70/day).
* **16-Slide Interactive Gallery:** Authentic 1080×1080 product visuals, back-of-pack nutrition panels, clinical graphics, and preparation routines with thumbnail previews.
* **Natural Document Flow:** Cart and purchase controls follow natural scrolling directly below the gallery on mobile, eliminating invasive sticky overlays.
* **Scannable Benefit Blocks:** 3 human-centered benefit blocks with realistic, qualified expectations in place of dense research chapters.
* **Daily Preparation Guide:** Visual beverage pairing tiles (coffee/tea, cold citrus, smoothies) addressing mixability and taste concerns.
* **Community Reviews Section:** Compact rating summary (4.74 / 5.0 across 571 verified reviews), horizontal rating distribution bars, live search, star rating filters, and readable customer review cards.
* **Rule-Based Wellness Assistant:** Deterministic, client-side conversational concierge that answers dosage, sourcing, safety, and allergen queries without sending data to external servers.

> [!TIP]
> For in-depth technical documentation, component architecture, state management, and test suite breakdowns, see the **[`react-app/README.md`](./react-app/README.md)**.

---

## 4. Quick Start: Running the React Application

To run the React redesign locally on your machine:

### Prerequisites
* **Node.js**: v18.0.0 or higher
* **npm**: v9.0.0 or higher

### Installation & Launch

```bash
# 1. Navigate to the React application directory
cd react-app

# 2. Install dependencies
npm install

# 3. Start the local Vite development server
npm run dev
```

Open your browser and navigate to the local URL displayed in the terminal (typically `http://localhost:3000`).

### Automated Testing

Run the automated Vitest test suites from within the `react-app/` directory:

```bash
cd react-app
npm test
```

### Production Build

Create an optimized production bundle:

```bash
cd react-app
npm run build
```

---

## 5. Running the Legacy Prototype

To inspect the standalone, dependency-free vanilla HTML/JS prototype:

```bash
# From the repository root:
python -m http.server 4173 --directory prototype
```

Open `http://localhost:4173` in your browser. Use `?variant=unit_pricing` or `?variant=control` to preview A/B experiment states.

---

## 6. Prototype Limitations & Data Transparency Disclosure

> [!IMPORTANT]
> **Academic & Demonstration Transparency**
> 
> * **Verified Brand Data:** Product pricing (₹1,745 / ₹3,418 / ₹5,019 / ₹6,476), nutrition specifications, certifications (FSSAI Lic. 10019022009134, US FDA facility), aggregate rating (4.74 / 5.0), and total review count (571 verified reviews) reflect Wellbeing Nutrition's published brand data.
> * **Customer Review Cards Disclosure:** Individual customer review cards displayed in the interface are **sample prototype content** (`Sample Review — Prototype Only`) engineered to demonstrate layout hierarchy, keyword search, rating filters, and pagination. They **do not represent real customer testimonials, genuine customer identities, or confirmed biological results**.
> * **E-Commerce Checkout & Review Submission:** Add to Cart, Buy Now, and Review Submission forms run in local client-side state for testing and evaluation purposes; live payment gateway and database integrations are not connected.

---

## 7. Repository & Branch Information

* **Repository:** [https://github.com/Mannat-1806/collagen-cro-optimisation](https://github.com/Mannat-1806/collagen-cro-optimisation)
* **Active Feature Branch:** `feature/react-collagen-redesign`
* **Full React App Documentation:** [`react-app/README.md`](./react-app/README.md)
