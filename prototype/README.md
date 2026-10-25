# Wellbeing Nutrition — Korean Marine Collagen Peptides CRO Prototype

**Academic & Product Management CRO Demonstration Prototype**  
**Repository:** [https://github.com/Mannat-1806/collagen-cro-optimisation](https://github.com/Mannat-1806/collagen-cro-optimisation)  
**Dedicated Branch:** `feature/collagen-cro-experience`  
**Date:** October 2026  

---

## 1. Quick Start & Local Execution

The prototype is built with standalone, dependency-free **HTML5, CSS3, and Vanilla JavaScript**. It does not require `npm install`, Node.js packages, or external API keys.

To run the prototype locally:

```bash
# From the repository root (health-collagen):
python -m http.server 4173 --directory prototype
```

Then open your browser at:
```text
http://localhost:4173
```

---

## 2. A/B Experiment Preview Modes

The prototype integrates deterministic URL query-parameter toggles allowing reviewers to inspect the isolated A/B testing conditions specified in `experiments/ab_test_plan.md`:

* **Variant B (Unit-Pricing Active — Default):**  
  `http://localhost:4173/?variant=unit_pricing`  
  *Displays transparent price-per-serving micro-copy (`₹69.80 / serving`) and verified serving counts (`25 Servings`) inside each pack selection card, plus the mobile sticky purchase tray.*

* **Control (Unit-Pricing Omitted):**  
  `http://localhost:4173/?variant=control`  
  *Preserves the identical hero layout, pricing, and visual styling, but omits the price-per-serving breakdown to demonstrate the baseline control experience.*

*(Reviewers can also toggle between variants in real time using the top experiment preview banner).*

---

## 3. Implemented CRO Interventions & Key Features

1. **High-Clarity Hero & Purchase Area (Intervention 1):**
   * High-resolution zoomable gallery with local asset fallbacks.
   * Prominent **Non-Vegetarian (Marine Fish)** allergen badge directly above the fold.
   * Pack selector with real-time recalculation of total price, reference MRP, discount pill, and unit price per serving across Packs 1, 2, 3, and 4.
   * Purchase protection badges (tamper-evident seal, 48-hr damage replacement, FSSAI Lic. 10019022009134).
2. **Local Deterministic Product Guide AI Assistant (Intervention 2):**
   * Accessible via the inline hero card or the floating launcher pill (`💬 Ask Product Guide`).
   * Operates over a local, structured knowledge base (`PRODUCT_DATA.knowledgeBase`).
   * Resolves questions on coffee mixability, fish allergies, age suitability, and return policy without external LLM API dependencies.
   * Features strict uncertainty handling and transparent customer support escalation (`care@wellbeingnutrition.com`).
3. **Detailed Customer Review Explorer (Intervention 3):**
   * Grounded in the captured reference rating of **4.74 ★ based on 571 reviews** (deprecated the conflicting 4.9 testimonial banner).
   * Real-time keyword search (e.g. search for *"coffee"*, *"smell"*, *"nails"*).
   * Filter by mix routine (*In Morning Coffee*, *In Water*, *In Smoothies*).
   * Sort by helpfulness, recency, highest rating, or critical reviews (1–2★).
   * Review cards display verified purchaser badges, dates, usage durations, helpfulness upvotes, and brand responses.
4. **Proposed 14-Serving Starter Pack Concept (Intervention 4):**
   * Dedicated concept module proposing a 14-day trial (112g @ ₹999) with a simulated ₹200 repeat voucher.
   * Explicitly labelled as a concept for evaluation pending business and supply-chain sign-off; does not guarantee clinical transformation.
5. **Ethical Hype & Transparent Value:**
   * Clear value hierarchy, honest sensory expectations, verified offer codes (`BUY3@10`), and real-time pack comparison table.
   * Zero fake countdown timers, zero fake low-stock counters, zero fabricated purchase notifications.
6. **Local Telemetry Event Logger (Measurement Plan Demo):**
   * Click **"⚡ Telemetry Log"** at the bottom-left to inspect the real-time event stream (`product_viewed`, `variant_selected`, `review_filter_applied`, `guide_intent_matched`, `add_to_cart`, `checkout_started`).

---

## 4. Status of Product Facts & Simulated Data Disclosure

| Element | Status | Source / Verification Method |
| :--- | :--- | :--- |
| **Product Specifications** | **Verified Fact** | 200g tub, 8g scoop, 25 servings, 90% Type I / 10% Type III from Korean marine fish, FSSAI Lic. 10019022009134. |
| **Pricing & MRP** | **Captured Reference** | Pack 1: ₹1,745 (₹69.80/serv), Pack 2: ₹3,418 (₹68.36/serv), Pack 3: ₹5,019 (₹66.92/serv), Pack 4: ₹6,476 (₹64.76/serv). |
| **Aggregate Rating** | **Captured Reference** | 4.74 ★ across 571 reviews from Judge.me widget on live storefront (October 2026). |
| **Review Cards (25 items)** | **Illustrative Demo Data** | Synthesized sample dataset created to demonstrate multi-factor search and negative review discovery. |
| **Product Guide Assistant** | **Deterministic Scripted** | Operates over local structured knowledge base. Does not use live LLM APIs. |
| **Cart & GoKwik Checkout** | **Simulated Demo** | Simulates drawer open, cart total calculation, and order confirmation. No financial transaction processed. |
| **14-Day Starter Pack** | **Evaluated Concept** | Proposed SKU requiring supply chain, packaging, and commercial sign-off before production. |

---

## 5. Known Limitations & Production Dependencies

* **Live Checkout:** Production deployment requires connecting GoKwik checkout SDK (`wbn2-direct-checkout.js`) and Shopify Cart API (`/cart/add.js`).
* **Live Review Sync:** In production, review explorer filters should interface directly with Judge.me API / webhooks.
* **Laboratory Daltons:** Exact average Dalton molecular weight of the current batch requires laboratory certificate confirmation from manufacturer quality assurance.
* **Production AI Assistant:** Production rollout would connect an enterprise LLM endpoint with vector store retrieval over validated medical and regulatory documentation.

---

## 6. Manual QA Checklist

- [x] **A/B Switcher:** Toggling between Variant B and Control smoothly hides/shows unit price micro-copy.
- [x] **Pack Selection:** Selecting Packs 1, 2, 3, or 4 updates active card border, CTA price, mobile sticky tray, and gallery image.
- [x] **Sensory Reassurance:** 3-step preparation guide clearly explains hot coffee dissolvability and plain water sensory characteristics.
- [x] **Clinical Evidence:** Study cards link to official DOIs (*Journal of Cosmetic Dermatology*, *Journal of Medicinal Food*).
- [x] **Review Explorer:** Real-time search filters reviews; mix filter pills update review count; upvoting increments helpful counter; critical review sort displays 1★ and 2★ feedback with brand responses.
- [x] **Product Guide AI:** Clicking prompt chips or typing questions displays grounded answers with citations; unmatched queries trigger safe fallback with customer care email.
- [x] **Simulated Checkout:** Adding to cart updates header counter; opening drawer displays item summary; proceeding to checkout triggers simulated confirmation toast.
- [x] **Responsive Layout:** Tested across viewports (320px, 375px, 768px, 1024px, 1440px) with zero horizontal overflow and thumb-friendly touch targets.
- [x] **Telemetry Stream:** Event log drawer records real-time user actions with formatted timestamps and payloads.
