# Customer Journey Map & Funnel Drop-off Analysis

> **Product:** Wellbeing Nutrition – Korean Marine Collagen Peptides  
> **Target Page:** [Product Detail Page (PDP)](https://wellbeingnutrition.com/products/korean-marine-collagen-peptides)  
> **Context:** D2C Beauty & Ingestible Wellness E-Commerce (Mobile-First Focus)  
> **Academic Note:** All quantitative funnel drops are labeled `[Baseline Needed: GA4 / Shopify Analytics]`. Industry benchmarks cited for context must NOT be treated as empirical proof of Wellbeing Nutrition's actual performance.

---

## 1. Heuristic Behavioral Mental Models (Unvalidated PM Hypotheses — Not Empirical Personas)

> [!IMPORTANT]
> **Methodological Integrity Notice:**  
> The three archetypes below are **exploratory heuristic mental models formulated to structure UX walkthroughs**. They are **NOT empirical customer personas** derived from user interviews, ethnographic research, or first-party cohort segmentation. Until qualitative customer interviews and quantitative cluster analyses are conducted, these profiles remain **unverified hypotheses** of potential consumer mindsets.

### Mental Model A: "The Preventative Glow Seeker" (Hypothetical Skincare-Conscious Buyer)
- **Hypothesized Intent:** Seeking systemic collagen replenishment to complement topical skincare (retinol, hyaluronic acid, vitamin C).
- **Hypothesized Mindset:** Understands that natural collagen declines after age 25; looking for genuine bioavailable formulations rather than marketing hype.
- **Hypothesized Friction:** Doubts whether ingestible marine collagen is truly absorbed intact by the body or simply digested as ordinary protein.
- **Evidence Status:** `[UNVERIFIED ASSUMPTION: Heuristic Mental Model]`

### Mental Model B: "The Sensory Skeptic" (Hypothetical Taste/Smell Hesitant Buyer)
- **Hypothesized Intent:** Wants visible hair, nail, and skin rejuvenation, but is highly sensitive to odor or taste in powdered supplements.
- **Hypothesized Mindset:** May have had negative prior experiences with chalky protein shakes or fishy oils; fears spending ~₹1,700 on a 200g jar that will be wasted.
- **Hypothesized Friction:** "Will this make my morning coffee or water smell fishy? Does it dissolve completely clear without clumping?"
- **Evidence Status:** `[UNVERIFIED ASSUMPTION: Heuristic Mental Model]`

### Mental Model C: "The Value & Routine Calculator" (Hypothetical Price-Sensitive Buyer)
- **Hypothesized Intent:** Exploring ingestible collagen across multiple brands (e.g., comparing on Amazon, Nykaa, or Wellbeing Nutrition).
- **Hypothesized Mindset:** Evaluating cost versus longevity; weighing single jar purchases against multi-pack bundles or subscriptions.
- **Hypothesized Friction:** Perceives the ~₹1,700 price tag as a steep upfront commitment without an immediate calculation of cost per daily scoop (~₹65–₹72/day for 25 servings).
- **Evidence Status:** `[UNVERIFIED ASSUMPTION: Heuristic Mental Model]`

---

## 2. End-to-End PDP Journey Architecture

```
┌────────────────────────────────────────────────────────────────────────┐
│ STAGE 1: Discovery & Ingress (Paid Social / Search / Direct / Referral) │
└───────────────────────────────────┬────────────────────────────────────┘
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ STAGE 2: First 5-Second Landing & Orientation (Above-the-Fold Hero)   │
└───────────────────────────────────┬────────────────────────────────────┘
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ STAGE 3: Cognitive Evaluation & Scientific Proof (Mid-Page Scroll)     │
└───────────────────────────────────┬────────────────────────────────────┘
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ STAGE 4: Sensory Reassurance & Habit Integration (Mixability & Reviews)│
└───────────────────────────────────┬────────────────────────────────────┘
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ STAGE 5: Decision, Pack Selection & Add-to-Cart (Bottom Hero / Sticky) │
└───────────────────────────────────┬────────────────────────────────────┘
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ STAGE 6: Cart Drawer & Checkout Commitment (Purchase Completion)       │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Journey Matrix: Actions, Heuristic Inferences & Proposed CRO Interventions

| Journey Stage | User Actions & Observed UI | Heuristic Friction / Opportunity | Required Telemetry / Baseline Data | Proposed CRO Hypothesis |
| :--- | :--- | :--- | :--- | :--- |
| **Stage 1: Ingress & Ad Alignment** | User lands from advertising or organic search onto the PDP. | Potential cognitive dissonance if the landing page hero does not immediately mirror the specific ad creative promise. | `[Baseline Needed: GA4]` Bounce Rate segmented by acquisition channel (Meta vs Google CPC vs Organic). | Align dynamic hero copy with primary acquisition campaign messaging. |
| **Stage 2: First 5 Seconds (Hero Screen)** | Evaluates image gallery, product title, star rating, lump-sum price (~₹1,700), and "Add to Cart" button. | • High upfront price displayed as a lump sum without daily habit context (~₹65–₹72/day for 25 servings).<br>• No explicit reassurance addressing fishy aftertaste in the hero viewport. | `[Baseline Needed: GA4]` Hero screen exit rate; First-screen bounce rate. | **H-01:** Introduce "₹68 / day (25 servings)" micro-badge + "100% Odorless & Zero Fishy Taste" trust pill above CTA. |
| **Stage 3: Scientific Evaluation** | Scrolls down to investigate claims: Wild-caught Korean fish, `<1000 Daltons`, Type I & III peptides, 8–12 week timeline. | "Daltons" is an abstract scientific concept; users cannot visualize why `<1000 Da` nano-peptides absorb more effectively than standard 3,000–5,000 Da collagens. | `[Baseline Needed: Hotjar/Clarity]` Scroll depth distribution past 25% and 50% on mobile viewports. | **H-04:** Introduce an intuitive visual comparison infographic: Nano-peptide absorption (`<1000 Da`) vs standard larger molecules. |
| **Stage 4: Sensory & Usage Proof** | Seeks answers to: "How do I take this? Will it alter my morning beverage? Is it certified safe?" | Mixability guide is placed mid-page; users who hesitate early may not reach this section without visual proof. | `[Baseline Needed: Clarity]` Click interaction rate on mixability section, video thumbnails, and FAQ accordions. | **H-05:** Embed a 3-second micro-loop displaying 1 scoop dissolving clear in room-temperature water with zero residue. |
| **Stage 5: Configuration & Selection** | Considers single 200g jar vs 2-pack bundle vs flavor/stick-pack options. | On mobile viewports, prolonged scrolling through reviews separates the user from the purchase CTA, requiring tedious scrolling back up. | `[Baseline Needed: GA4]` Pack switch rate; Variant selector click-through rate. | **H-02 & H-03:**<br>• Clear "Best Value" framing on multi-pack.<br>• Persistent **Sticky Mobile CTA** that maintains pack selection and price affordance. |
| **Stage 6: Cart & Checkout Commitment** | Clicks "Add to Cart", views side-drawer cart, proceeds to checkout. | Potential checkout friction (shipping fees, delivery timeline, or payment options). *(Note: Category 70% cart abandonment is a macro benchmark, not verified brand data).* | `[Baseline Needed: Shopify]` Exact Cart-to-Initiate-Checkout and Checkout-to-Purchase conversion rates. | Transparent delivery date estimator, free shipping milestone bar in cart drawer, instant UPI options. |

---

## 4. Academic Summary of Evidence Gaps & Telemetry Requirements

To validate or refute the heuristic assumptions in this journey map, the following empirical data must be acquired:
1. **First-Party Funnel Conversion Metrics:** Exact baseline session-to-ATC and session-to-purchase conversion rates from Google Analytics 4.
2. **Mobile Interaction Heatmaps:** Quantitative scroll depth and tap heatmaps from Microsoft Clarity or Hotjar to confirm whether mobile visitors drop off before encountering scientific proof.
3. **Qualitative Customer Research:** Post-purchase surveys or moderated user usability sessions with 5–8 verified consumers to replace hypothetical mental models with empirical customer insights.
