# Open Questions, Prioritised Friction Points & ICE Framework

**Project:** Wellbeing Nutrition Korean Marine Collagen Peptides CRO Optimisation  
**Author:** Senior Product Manager & CRO Specialist  
**Access Date:** October 25, 2026  
**Dedicated Branch:** `feature/collagen-cro-experience`  

---

## 1. Executive Summary

This deliverable synthesizes findings from the repository audit, competitor benchmarking, existing page audit, and customer journey analysis. It isolates the **three primary purchase-journey friction points**, establishes a **preliminary maximum-five-intervention CRO list** ranked by an **ICE framework**, and catalogues critical **open questions** requiring corporate, analytical, or manufacturer resolution.

> [!IMPORTANT]
> All ICE scores and impact estimates presented in this document represent **preliminary cross-functional team estimates** based on heuristic evaluation and external e-commerce UX benchmarks (Baymard Institute, Nielsen Norman Group). They are **not** measured business outcomes and must be validated through controlled experimentation.

---

## 2. Top Three Prioritised Purchase-Journey Friction Points

### Friction Point 1: Perceived Financial & Sensory Commitment Barrier for First-Time Buyers
* **The Problem:** Marine collagen peptides carry intense sensory anxiety regarding fishy odor, unpleasant aftertaste, and clumping. At **₹1,745** for an unflavored 200g tub that is **strictly non-returnable once opened**, first-time prospective buyers face a high financial and sensory gamble.
* **Psychological Mechanism:** Loss aversion. If the customer dislikes the taste after one scoop, they lose 100% of their investment with zero return recourse.
* **Why It Is Critical:** This is the primary bottleneck preventing top-of-funnel ad clicks from converting into first-time trial orders.

### Friction Point 2: Sizing Misalignment & Opaque Unit Economics (The 25-Day Supply Trap)
* **The Problem:** The product tub contains **200g (25 servings @ 8g)**. However, the brand's own clinical study citations and FAQ explicitly state that visible skin hydration and wrinkle reduction require **4 to 8 weeks (28 to 56 days)** of consistent daily use. A single tub runs out 3 to 31 days before clinical efficacy is reached!
* **Cognitive Load:** The page does not display a transparent **price-per-serving breakdown (₹69.80 / day)**, and multi-pack savings are marginal (5% on Pack of 2), failing to motivate customers to purchase the clinically necessary 50-day supply.
* **Why It Is Critical:** It depresses both initial Average Order Value (AOV) and long-term customer retention, as customers abandon the product before seeing noticeable results.

### Friction Point 3: Social Proof Incongruity & Abstract Scientific Validation
* **The Problem:** The top Judge.me badge reports **4.74 ★ across 571 reviews**, while a lower testimonial section highlights a conflicting **"4.9 Review"** banner. Furthermore, the 4 academic study cards link directly to raw external DOIs accompanied by a defensive disclaimer (`*Claims are ingredient-based and not for the product...*`).
* **Psychological Mechanism:** Cognitive dissonance and skepticism. According to Nielsen Norman Group credibility research, conflicting review numbers on the same page trigger suspicion that social proof is fabricated or selectively manipulated.
* **Why It Is Critical:** High-intent, analytical buyers who research scientific proof and reviews before committing get cold feet at the final decision stage.

---

## 3. Preliminary Maximum-Five-Intervention List (ICE Framework)

### Scoring Methodology (Scale 1–5):
* **Impact (I):** Expected magnitude of positive lift on primary conversion rate, add-to-cart rate, or blended AOV (1 = Marginal, 5 = Transformative).
* **Confidence (C):** Strength of supporting evidence from competitor audits, live DOM analysis, and established UX principles (1 = Speculative, 5 = Highly Verified).
* **Ease (E):** Technical and operational feasibility to implement via frontend prototype/Shopify theme without backend replatforming (1 = Complex/Requires SKU, 5 = Pure Frontend/Copy Change).
* **Formula:** $\text{ICE Score} = \text{Impact} \times \text{Confidence} \times \text{Ease}$ (Maximum possible: 125).

---

### Intervention Ranking Table

| Rank | Intervention Code & Name | Primary Mechanism | Impact (1–5) | Confidence (1–5) | Ease (1–5) | ICE Score (Max 125) | Target Metric |
| :---: | :--- | :--- | :---: | :---: | :---: | :---: | :--- |
| **1** | **INT-01: Transparent Price-Per-Serving & Daily Cost Breakdown** | Display `₹69.80 / day` prominently beneath variant pricing in the buy box. | 4 | 5 | 5 | **100** | Add-to-Cart (ATC) Rate |
| **2** | **INT-02: Goal-Oriented "Clinical Course" Multi-Pack Sizing** | Re-label Pack of 2 as "Recommended 50-Day Clinical Course (Complete 8-Week Results)" with repeat voucher. | 4 | 4 | 4 | **64** | Multi-Pack Take Rate / AOV |
| **3** | **INT-03: Sensory Reassurance & Rapid Mixability Assurance Module** | Above-the-fold 3-step visual dissolving pledge (100% odorless, coffee/water clear dissolution). | 4 | 4 | 4 | **64** | Hero-to-Cart Progression |
| **4** | **INT-04: Harmonized Social Proof & Filterable Review Hierarchy** | Unify rating to 4.74★ across page; introduce demographic & concern filters (Age 30s/40s, Fine Lines, Coffee mix). | 3 | 5 | 4 | **60** | Review Widget Engagement |
| **5** | **INT-05: Low-Commitment 14-Serving Starter Kit / Trial SKU** | Introduce a 14-day starter option (₹999) with ₹200 cashback credit on next full-size tub. | 5 | 4 | 2 | **40** | First-Time Conversion Rate |

---

### Detailed Intervention Profiles

#### INT-01: Transparent Price-Per-Serving & Daily Cost Breakdown
* **Description:** Add dynamic inline micro-copy beneath each variant button in the buy box showing exact cost per serving (`Pack of 1: ₹69.80/day`, `Pack of 2: ₹68.36/day`, `Pack of 3: ₹66.92/day`).
* **Behavioral Rationale:** Reframes an intimidating ₹1,745 expense into a daily expense lower than a café latte (~₹70/day), reducing purchase friction.
* **Implementation Effort:** Pure frontend liquid/JS update in the Shopify variant picker. Zero operational or supply chain overhead.

#### INT-02: Goal-Oriented "Clinical Course" Multi-Pack Sizing
* **Description:** Reframe generic "Pack of 1 / 2 / 3" options into clinical milestones:
  * *1 Tub (25 Days):* "Starter Reset" (₹1,745)
  * *2 Tubs (50 Days):* "Recommended Full Clinical Transformation (Matches 8-Week Studies)" (₹3,418 + extra repeat perk)
  * *3 Tubs (75 Days):* "Long-Term Maintenance & Joint Support" (₹5,019).
* **Behavioral Rationale:** Bridges the gap between the 25-day tub and the 56-day clinical requirement, giving shoppers a logical medical reason to purchase multiple packs upfront.
* **Implementation Effort:** Frontend copy and UI badge restructuring.

#### INT-03: Sensory Reassurance & Rapid Mixability Assurance Module
* **Description:** Introduce an interactive "Sensory Guarantee" module in the primary gallery and directly above the fold:
  1. *100% Odorless Marine Peptides* (zero fishy aftertaste).
  2. *Instant Dissolution* in 30 seconds (hot coffee, cold water, smoothies).
  3. *Zero Clumping Guarantee*.
* **Behavioral Rationale:** Tackles the number-one reason consumers abandon unflavored marine collagen carts.
* **Implementation Effort:** High-quality visual cards and micro-copy within existing Shopify section blocks.

#### INT-04: Harmonized Social Proof & Filterable Review Hierarchy
* **Description:** Align the rating count across the entire page to the verified Judge.me aggregate (`4.74 ★ based on 571 verified reviews`). Replace static testimonial claims with filter tags: `Age: 25-34`, `Concern: Fine Lines`, `Mix: Morning Coffee`.
* **Behavioral Rationale:** Removes trust-damaging rating contradictions and allows users to self-identify with authentic peers.
* **Implementation Effort:** Update theme liquid templates and configure Judge.me custom metadata tags.

#### INT-05: Low-Commitment 14-Serving Starter Kit / Trial SKU
* **Description:** Offer a 14-serving starter pouch / travel stick-pack box at an accessible entry price (e.g., ₹999), paired with a guaranteed ₹200 voucher towards their subsequent 200g tub.
* **Behavioral Rationale:** Captures ultra-hesitant shoppers who refuse to gamble ₹1,745 on an unflavored supplement.
* **Implementation Effort:** Requires supply chain manufacturing, new packaging SKU, and inventory allocation (hence low Ease score of 2).

---

## 4. Formal Data Requests & Open Questions Register

The following unresolved questions must be submitted to Wellbeing Nutrition internal stakeholders to validate assumptions prior to final experimentation and prototyping:

### Category A: Manufacturer & Formulation Documentation
1. **Molecular Weight (Daltons):** What is the exact average molecular weight (in Daltons) of the Korean Marine Collagen Peptides used by Wellbeing Nutrition? *(Competitor Nutrova heavily promotes "3000 Dalton"; stating the exact Dalton rating builds major clinical credibility).*
2. **Marine Sourcing Details:** What specific species of deep-sea wild fish are used, and does the manufacturer hold certified sustainable fishing (e.g., MSC) or heavy-metal testing certificates?
3. **Scoop Accuracy & Density:** Does 1 level scoop consistently deliver exactly 8g, and is a scoop physically included inside every single tub?

### Category B: Proprietary Analytics & Quantitative Funnel Data
1. **Device & Funnel Drop-Off:** What are the exact mobile vs. desktop drop-off percentages at each stage: `PDP View` → `Variant Selection` → `Add to Cart` → `GoKwik Checkout Opened` → `Payment Success`?
2. **Variant Purchase Distribution:** What percentage of current buyers choose Pack of 1 vs. Pack of 2 vs. Pack of 3/4?
3. **Cohort Repeat Rate:** What is the 30-day, 60-day, and 90-day repurchase rate for first-time buyers of Korean Marine Collagen? Does a Pack of 1 customer repeat at higher or lower rates than a Pack of 2 customer?

### Category C: Commercial, Operational & SKU Feasibility
1. **Trial SKU Viability:** Is the packaging and operations team capable of producing a 14-serving pouch or sachet box within the current fiscal quarter?
2. **Gross Margin Limits:** What is the minimum contribution margin threshold for multi-packs? Can we offer a 12–15% discount or a bundled shaker/frother on Pack of 2 without degrading EBITDA?
3. **Repeat-Purchase Voucher Logic:** Can Shopify / GoKwik automatically issue a targeted ₹200 discount code to first-time purchasers via WhatsApp/SMS on Day 18 post-delivery?

### Category D: Legal, Regulatory & Compliance Boundaries
1. **ASCI & FSSAI Claim Boundaries:** Does legal counsel permit the phrase *"Recommended 50-Day Clinical Transformation Course"* if accompanied by footnote citations to the published 8-week dermatology studies?
2. **Return & Damage Communication:** Can we explicitly place a *"100% Genuine Seal & Transit Damage Replacement Guarantee"* badge inside the buy box without misleading customers into thinking opened tubs can be returned?

---

## 5. Recommended Phase 2 Roadmap

Upon review and approval of Phase 1 deliverables, Phase 2 should focus on:
1. **Experiment Design Documentation:** Formalizing statistical power calculations, sample size requirements, and guardrail metrics for **Hypothesis 1 (Price-Per-Serving & Pack Sizing)** and **Hypothesis 2 (Sensory Reassurance & Unified Social Proof)**.
2. **Wireframe & Content Architecture:** Drafting desktop and mobile wireframes incorporating the 5 prioritized CRO interventions.
3. **Responsive HTML/CSS Prototype Development:** Constructing a production-grade interactive prototype in a later phase to demonstrate the target experience.
