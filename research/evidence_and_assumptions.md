# Evidence, Assumptions & Research Registers

**Project:** Wellbeing Nutrition Korean Marine Collagen Peptides CRO Optimisation  
**Author:** Senior Product Manager & CRO Specialist  
**Access Date:** October 25, 2026  
**Dedicated Branch:** `feature/collagen-cro-experience`  

---

## 1. Register Architecture & Epistemological Standards

To ensure that conversion rate optimization interventions are grounded in empirical reality rather than subjective bias, this project enforces four distinct registers:

1. **OBSERVED FACT (OF):** Verifiable data points, text, elements, scripts, or network responses directly inspected on the live website or official public documentation.
2. **INTERPRETATION (IN):** A reasoned UX or cognitive psychology deduction explaining why an observed fact likely impacts user behavior, conversion velocity, or purchase anxiety.
3. **HYPOTHESIS (HY):** A structured, testable proposal predicting that a specific design or copy intervention will produce a measurable change in user behavior.
4. **UNKNOWN (UN):** Crucial commercial, behavioral, or operational questions that cannot be determined without access to internal proprietary data, analytics, or manufacturer agreements.

---

## 2. Register 1: Observed Facts (Verifiable Evidence)

| ID | Category | Observed Fact | Source / Verification Method | Access Date |
| :--- | :--- | :--- | :--- | :--- |
| **OF-01** | Formulation & Size | Wellbeing Nutrition Korean Marine Collagen is sold in a 200g tub with an 8g serving size, yielding exactly 25 servings. | Verified via Back-of-Pack image asset and Shopify product JSON (`/products/korean-marine-collagen-peptides.json`). | Oct 25, 2026 |
| **OF-02** | Pricing & Variants | Selling price for 1 tub is ₹1,745 (₹1,799 MRP, 3% off); Pack of 2 is ₹3,418 (5% off); Pack of 3 is ₹5,019 (7% off); Pack of 4 is ₹6,476 (10% off). | Verifiable in Shopify variants array (`sku: WBNCL, WBNCL-2, WBNCL-3, WBNCL-4`). | Oct 25, 2026 |
| **OF-03** | Price Transparency | No price-per-serving (₹69.80) or cost-per-day breakdown is displayed inside the variant selection box. | Verified via PDP DOM inspection (`.variant-picker`). | Oct 25, 2026 |
| **OF-04** | Scientific Evidence | The page presents 4 external academic study cards linking directly to external DOIs: `doi:10.1111/jocd.12174` (2015), `doi:10.1111/jocd.13676` (2021), `doi:10.1089/jmf.2022.K.0097` (2022), and `article/129086` (Orthopedic Reviews). | Extracted from `.evidence-section a.abs-link` in page HTML. | Oct 25, 2026 |
| **OF-05** | Legal Disclaimer | The product page contains the verbatim disclaimer: `*Claims are ingredient-based and not for the product. Images are for illustration purpose only**`. | Located in DOM beneath ingredient efficacy section. | Oct 25, 2026 |
| **OF-06** | Social Proof Incongruity | The hero Judge.me review badge displays an aggregate rating of `4.74 ★` with `571 reviews`, while the lower testimonial section claims `"4.9 Review"` across 4 static quotes. | Verified in Judge.me DOM badge (`data-average-rating='4.74'`) and `.testimonial-section` heading. | Oct 25, 2026 |
| **OF-07** | Review Incentives | Judge.me configuration exposes an active 10% coupon incentive for submitting a review (`coupon_value_percentage: 10`). | Extracted from `window.jdgmSettings` script tag in HTML. | Oct 25, 2026 |
| **OF-08** | Return & Refund Policy | Wellbeing Nutrition policy states that orders cannot be cancelled once shipped, and returns are strictly not accepted if the product is opened, used, or the seal is broken. Damaged goods must be reported within 48 hours with photos. | Verified on official policy page: `https://wellbeingnutrition.com/pages/refunds-cancellation`. | Oct 25, 2026 |
| **OF-09** | Payment Integrations | Storefront integrates GoKwik Direct 1-Click Checkout (`wbn2-direct-checkout.js`) and Snapmint 3-month cardless EMI (`checkout-merchant.snapmint.com`). | Verified via script `src` attributes and DOM network triggers. | Oct 25, 2026 |
| **OF-10** | Competitor Pricing | Nutrova charges ₹2,140 for 200g (20 servings @ ₹107/serving); HK Vitals charges ₹849 for 200g (25 servings @ ₹42.45/serving). | Verified via `nutrova.com` and `hkvitals.com` product JSON endpoints. | Oct 25, 2026 |

---

## 3. Register 2: Interpretations (Reasoned UX & Behavioral Analysis)

| ID | Related Fact | Interpretation / Cognitive Mechanism | Confidence |
| :--- | :--- | :--- | :---: |
| **IN-01** | OF-01, OF-04 | **Clinical Duration Mismatch Friction:** Because clinical studies and the brand's own FAQ state that visible outcomes require 4 to 8 weeks (28–56 days), a 25-serving tub sets customers up for premature abandonment before noticing results, depressing long-term retention. | High |
| **IN-02** | OF-02, OF-03 | **Price Sticker Shock:** Presenting ₹1,745 as an upfront lump sum without a daily cost anchor (₹69.80/day) triggers high friction, especially when compared to coffee or skincare routines that cost more on a daily basis. | High |
| **IN-03** | OF-02 | **Weak Bundle Economics:** Escalating discounts by only 2% per pack tier (3% -> 5% -> 7% -> 10%) provides insufficient incentive for a customer to commit ₹3,418 or ₹5,019 upfront without a stronger value proposition or risk mitigation. | High |
| **IN-04** | OF-06 | **Social Proof Skepticism:** Analytical consumers who spot the mismatch between the 4.74 top star rating and the 4.9 testimonial banner lose trust in the authenticity of the customer reviews, increasing bounce rates (NNg Credibility Heuristic). | High |
| **IN-05** | OF-08 | **Sensory & Financial Loss Aversion:** Because collagen is non-returnable once opened and marine-sourced supplements carry high fears of fishy odor and digestive upset, first-time shoppers face complete financial loss if they dislike the taste, creating high cart hesitation. | High |
| **IN-06** | OF-04, OF-05 | **Academic Jargon Barrier:** Generic journal citations with defensive disclaimers fail to translate complex clinical science into accessible consumer reassurance, leaving non-technical shoppers uncertain of actual benefits. | Medium |

---

## 4. Register 3: Hypotheses (Testable CRO Interventions)

| ID | Addressed Friction | Structured Hypothesis | Primary Metric | Guardrail Metric |
| :--- | :--- | :--- | :--- | :--- |
| **HY-01** | Cost Sticker Shock (IN-02) | **If** we display the price-per-serving breakdown (`₹69.80 / day`) next to the total price in the buy box, **then** first-time visitor add-to-cart rates will increase, **because** customers will reframe the cost as an affordable daily routine rather than an expensive discretionary expense. | Add-to-Cart (ATC) Rate | Average Order Value (AOV) |
| **HY-02** | Pack Duration Mismatch (IN-01, IN-03) | **If** we re-architect multi-packs into goal-oriented clinical courses (e.g., 2 Tubs / 50 Days as "Recommended Clinical Transformation Course") with enhanced repeat-purchase vouchers, **then** multi-pack selection share will increase by >15%, **because** customers will understand why 50 days are required to achieve clinical efficacy. | Multi-pack Take Rate (%) | Blended Gross Margin (%) |
| **HY-03** | Sensory & Taste Anxiety (IN-05) | **If** we introduce a prominent "100% Odorless & Mixability Pledge" module alongside a proposed 14-serving low-commitment trial SKU, **then** top-of-funnel conversion rate among first-time visitors will increase, **because** the perceived sensory and financial risk is mitigated. | First-time Conversion Rate | Starter-to-Full SKU Repeat Rate |
| **HY-04** | Review Credibility (IN-04) | **If** we harmonize the aggregate review rating across all page touchpoints to a verified 4.74 ★ and introduce demographic filters (age bracket, primary concern, coffee/water mix), **then** review-section interaction depth and subsequent cart-adds will increase, **because** social proof will appear transparent and relevant. | PDP-to-Checkout Progression | Review Widget Click-Through |
| **HY-05** | Suitability Doubts (IN-06) | **If** we embed an interactive "Collagen Suitability & Routine Assistant" that answers key questions (age suitability, non-veg source, pregnancy, morning routine, and timing), **then** PDP exit rate will decline, **because** shoppers get instant answers without bouncing to search engines. | PDP Exit Rate (%) | Direct Checkout Click Rate |

---

## 5. Register 4: Unknowns (Internal & Proprietary Data Gaps)

| ID | Operational Domain | Critical Unknown / Data Gap | Action Required to Resolve |
| :--- | :--- | :--- | :--- |
| **UN-01** | Commercial / Packaging | Can Wellbeing Nutrition's supply chain produce and package a 14-serving trial pouch or stick-pack box at acceptable unit economics? | Submit formal data request to Operations & Packaging team. |
| **UN-02** | Analytics / Funnel | What is the exact mobile vs. desktop drop-off rate between PDP view, Add-to-Cart, and GoKwik checkout completion for this specific SKU? | Request GA4 / Shopify funnel export for the last 90 days. |
| **UN-03** | Customer Support Logs | What are the top 5 pre-purchase customer inquiries submitted to `care@wellbeingnutrition.com` and customer support channels regarding marine collagen? | Request Zendesk / Freshdesk ticket categorization summary. |
| **UN-04** | Margins & COGS | What are the gross contribution margins on Pack of 1 vs. Pack of 2, and what is the maximum permissible promotional discount before compromising unit profitability? | Request unit economics schedule from Finance. |
| **UN-05** | Regulatory / Compliance | Does legal counsel permit renaming generic "Pack of 2" to "50-Day Clinical Transformation Course" under ASCI (Advertising Standards Council of India) and FSSAI guidelines? | Submit proposed copy changes to Brand Legal & Regulatory team. |
| **UN-06** | Cohort Retention | What percentage of first-time buyers of Pack of 1 reorder within 30, 60, and 90 days? | Request cohort repeat-purchase analytics from CRM / Retention team. |
