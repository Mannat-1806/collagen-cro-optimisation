# CRO Prioritisation Framework & Backlog

> **Product:** Wellbeing Nutrition – Korean Marine Collagen Peptides  
> **Methodology:** Standardized ICE (Impact, Confidence, Ease) Framework with Pre-Analytics Calibration  
> **Target Page:** [Product Detail Page (PDP)](https://wellbeingnutrition.com/products/korean-marine-collagen-peptides)  
> **Academic Note:** Prioritization scores are calibrated to prevent arbitrary inflation. Because proprietary brand analytics (GA4/Shopify) are currently pending access, pre-analytics Confidence scores are conservatively capped to reflect empirical uncertainty.

---

## 1. Prioritisation Framework & Calibrated Scoring Rubric

To eliminate subjective bias and arbitrary scoring, every CRO hypothesis is evaluated against a strict 1–10 rubric across three dimensions:

$$\text{ICE Score} = \frac{\text{Impact} + \text{Confidence} + \text{Ease}}{3}$$

### 1.1 Objective Scoring Rubric (1–10 Scale)

| Score | **Impact (Expected Funnel Uplift)** | **Confidence (Strength of Evidence)** | **Ease (Engineering & Design Effort)** |
| :---: | :--- | :--- | :--- |
| **9–10** | Massive site-wide impact; directly addresses primary above-the-fold friction for >80% of traffic. | **Only applicable with verified 1st-party analytics:** Confirmed by GA4 funnel drop-off and Hotjar/Clarity heatmaps. *(Currently inactive pending analytics access)*. | Pure copy or minor CSS change; no new logic or component state required. Implementation < 1 day. |
| **7–8** | High impact on key funnel step (e.g., variant selection or mobile purchase flow). | Strong external proof: Supported by peer-reviewed clinical trials AND validated UX patterns from major category leaders. | Moderate frontend component addition (e.g., sticky bottom CTA bar, simple SVG diagram). Implementation 2–3 days. |
| **5–6** | Moderate localized impact (e.g., mid-page educational section or FAQ accordions). | **Calibrated Pre-Analytics Baseline:** Plausible heuristic inference supported by category literature, but unconfirmed on this specific brand. | Requires interactive JavaScript state, video player integration, or multiple responsive viewports. Implementation 4–5 days. |
| **3–4** | Low impact; affects minority of visitors or deep-page elements (<25% scroll depth). | Weak heuristic assumption; subjective aesthetic preference without behavioral justification. | Requires backend modification, inventory logic updates, or checkout alterations. Implementation > 1 week. |
| **1–2** | Negligible or unmeasurable impact. | Pure conjecture; zero supporting evidence. | Heavy platform rebuild or custom ERP/Shopify Liquid backend rebuild. |

---

## 2. Calibrated CRO Hypothesis Backlog

The table below presents the **Pre-Analytics Calibrated ICE Score** (reflecting lack of first-party analytics) alongside the **Post-Analytics Potential Score** (target if first-party data validates the friction):

| Rank | Hypothesis ID | Feature / Optimization Area | Impact (1–10) | Pre-Analytics Confidence (1–10) | Ease (1–10) | **Calibrated ICE Score** | Post-Analytics Potential ICE | Priority Tier |
| :---: | :---: | :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **1** | **H-03** | Persistent Sticky Mobile CTA with Dynamic Variant & Price Display | 9 | 6 | 8 | **7.67** | 8.33 | **P0 (Immediate)** |
| **2** | **H-01** | Value-Per-Serving (`~₹68/day`) + "Zero Fishy Aftertaste" Hero Reassurance | 8 | 6 | 9 | **7.67** | 8.33 | **P0 (Immediate)** |
| **3** | **H-06** | Unified Purity & Safety Strip (Mercury-Free, Wild Fish, FSSAI/FDA) | 7 | 6 | 9 | **7.33** | 8.00 | **P1 (High)** |
| **4** | **H-02** | Enhanced Pack Selector with "Best Value" Framing & Savings Badging | 8 | 5 | 8 | **7.00** | 7.67 | **P1 (High)** |
| **5** | **H-04** | Visual Absorption Explainer: `<1000 Da` Nano-Peptides vs Standard | 8 | 5 | 7 | **6.67** | 7.33 | **P2 (Medium)** |
| **6** | **H-05** | Sensory Micro-Video / Loop Demo of Instant Dissolution & Clarity | 7 | 4 | 6 | **5.67** | 6.33 | **P2 (Medium)** |

---

## 3. Detailed Hypothesis Specifications & Evidence Separation

### H-03: Persistent Sticky Mobile Bottom CTA
- **Direct Observation:** On the live mobile PDP, the primary "Add to Cart" button scrolls out of view once the user reads past the hero section.
- **External Evidence:** Fitts's Law; mobile e-commerce UX studies show persistent action affordances reduce navigation friction.
- **Unverified Assumption:** Assumes mobile visitors who scroll deep into the ingredients or reviews intend to purchase but hesitate or bounce due to the effort of scrolling back to the top.
- **Proposed Change:** A lightweight, persistent bottom sheet/bar that appears after the hero CTA leaves the viewport. Displays selected pack, live discounted price, and an instant "Add to Cart" button.
- **Primary Metric:** Mobile PDP Add-to-Cart (ATC) Rate (%).
- **Calibrated Pre-Analytics ICE:** 9 / 6 / 8 = **7.67** (P0).

---

### H-01: Value-Per-Serving & Sensory Reassurance Pill in Hero
- **Direct Observation:** On the live PDP, the 200g jar is priced at ~₹1,619 to ~₹1,799 (yielding 25 servings of 8g each). Pricing is displayed solely as a lump sum without daily cost context.
- **External Evidence:**
  - Clinical literature proves low-molecular-weight collagen ($\le 1000\text{ Da}$) takes 8–12 weeks of daily intake for visible skin results (*Nutrients* 2018, PMID: [29949889](https://pubmed.ncbi.nlm.nih.gov/29949889/)).
  - Qualitative reviews across retail platforms show fishy odor is the #1 objection for marine collagen.
- **Unverified Assumption:** Assumes first-time visitors abandon the page primarily due to perceived high upfront cost (~₹1,700) and unaddressed fear of fishy taste.
- **Proposed Change:**
  1. Add micro-text beside price: *"Only ~₹68/day (25 daily servings)"*.
  2. Add reassurance badge above CTA: *"100% Odorless & Zero Fishy Aftertaste Guarantee"*.
- **Primary Metric:** Mobile PDP Add-to-Cart (ATC) Rate (%).
- **Calibrated Pre-Analytics ICE:** 8 / 6 / 9 = **7.67** (P0).

---

### H-06: Unified Purity & Certification Trust Strip
- **Direct Observation:** On the live PDP, trust certifications (Mercury-Free, Wild-Caught Korean Fish, Non-GMO, US FDA Registered Facility, FSSAI Certified) are distributed across several vertical sections.
- **External Evidence:** Institutional credibility and trust seals reduce perceived risk during initial brand orientation.
- **Unverified Assumption:** Assumes new visitors fail to notice individual trust badges when dispersed down the page.
- **Proposed Change:** A compact, high-contrast, horizontal trust badge strip positioned directly beneath the hero purchase container.
- **Primary Metric:** Hero-section Bounce Rate and ATC Rate among new visitors.
- **Calibrated Pre-Analytics ICE:** 7 / 6 / 9 = **7.33** (P1).

---

### H-02: Pack Selector Restructuring (Tiered Value Anchoring)
- **Direct Observation:** The PDP offers single jars and multi-pack options, but bundle savings are presented in standard flat list styling.
- **External Evidence:** Anchoring bias and decoy effect in e-commerce behavioral economics.
- **Unverified Assumption:** Assumes customers default to the single jar because savings on multi-packs are not mathematically salient.
- **Proposed Change:** Designate the 2-Jar Pack with a prominent "BEST VALUE - SAVE ₹400" badge and explicit price-per-serving breakdown.
- **Primary Metric:** Average Order Value (AOV) and Multi-Pack Selection Share (%).
- **Calibrated Pre-Analytics ICE:** 8 / 5 / 8 = **7.00** (P1).

---

### H-04: Visual Molecular Weight Comparison (`<1000 Da`)
- **Direct Observation:** The PDP highlights `<1000 Daltons` nano-hydrolyzed peptides in text.
- **External Evidence:** *Nutrients* 2018 (PMID: [29949889](https://pubmed.ncbi.nlm.nih.gov/29949889/)) validates the superior absorption kinetics of low-molecular-weight peptides ($\le 1000\text{ Da}$) over higher-molecular-weight fractions.
- **Unverified Assumption:** Assumes consumers skim past the text claim because "Dalton" is an unfamiliar scientific unit.
- **Proposed Change:** An intuitive visual comparison graphic: Large standard collagen molecules (3,000–5,000 Da) vs. nano-peptides (<1,000 Da) passing directly through the intestinal barrier.
- **Primary Metric:** Scroll-through engagement past 50%; ATC conversion rate.
- **Calibrated Pre-Analytics ICE:** 8 / 5 / 7 = **6.67** (P2).

---

### H-05: Sensory Micro-Video Proof (Clarity & Dissolution)
- **Direct Observation:** The PDP states that the unflavored powder mixes seamlessly into drinks.
- **External Evidence:** Sensory marketing and video demonstration in D2C beauty.
- **Unverified Assumption:** Assumes skeptics do not believe text claims of "zero clumping and clear dissolution" without visual proof.
- **Proposed Change:** An autoplaying, silent 3-second micro-loop showing one 8g scoop dissolving clear in room-temperature water with zero clumping.
- **Primary Metric:** Video interaction rate; ATC rate among visitors reaching the mixability section.
- **Calibrated Pre-Analytics ICE:** 7 / 4 / 6 = **5.67** (P2).

---

## 4. Prioritization Matrix (Calibrated Effort vs Impact)

```
        ▲ High
        │
        │   [H-01] Value/Serving & Taste    [H-03] Sticky Mobile CTA
        │   (Calibrated ICE: 7.67)          (Calibrated ICE: 7.67)
        │
I M P   │   [H-06] Unified Trust Strip      [H-02] Pack Selector & Anchoring
A C T   │   (Calibrated ICE: 7.33)          (Calibrated ICE: 7.00)
        │
        │   [H-05] Dissolution Micro-Video  [H-04] Visual Absorption Graphic
        │   (Calibrated ICE: 5.67)          (Calibrated ICE: 6.67)
        │
        └────────────────────────────────────────────────────────►
          Low                       E A S E                     High
          (High Dev Effort)                         (Low Dev Effort)
```
