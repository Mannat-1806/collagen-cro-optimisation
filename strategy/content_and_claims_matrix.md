# Central Content & Claims Matrix

**Project:** Wellbeing Nutrition Korean Marine Collagen Peptides CRO Optimisation  
**Author:** Senior Product Manager & CRO Strategist  
**Date:** October 25, 2026  
**Status:** Approved for Phase 2 Architecture  
**Dedicated Branch:** `feature/collagen-cro-experience`  

---

## 1. Executive Summary & Regulatory Guardrails

This document establishes the verified content specification for the Wellbeing Nutrition Korean Marine Collagen Peptides product experience. In strict accordance with Indian advertising standards (ASCI) and Food Safety and Standards Authority of India (FSSAI) dietary supplement regulations:

* Every claim distinguishes between **ingredient-level evidence** and **finished-product claims**.
* No claims promise "guaranteed clinical cures", "instant wrinkle removal", or "universal odorless outcomes".
* All durations, serving counts, and prices are mathematically verified against physical packaging and captured reference data.

---

## 2. Core Product Copy & Specification Specification

### 2.1 Product Headlines & Hero Micro-copy
* **Primary Headline (H1):** `Pure Korean Marine Collagen Peptides | Unflavored Powder`
* **Sub-Headline:** `Hydrolyzed Type I & III Marine Peptides (8 g per serving) to support skin hydration, hair strength, and joint flexibility.`
* **Serving & Format Callout:** `200 g Tub | 25 Servings (8 g per scoop) | Unflavored Powder | Non-Vegetarian`
* **Provenance Badge:** `Sourced from wild-caught Korean deep-sea fish | Hydrolyzed for easy absorption`
* **Rating Anchor:** `4.74 ★ (571 verified reviews)` *(Links directly to review explorer)*

### 2.2 Pricing, Pack Sizing & Duration Breakdown

| Pack Sizing | Captured Reference Price | Captured Reference MRP | Captured Discount | Verified Servings | Price Per Serving | Neutral Duration Description |
| :--- | :---: | :---: | :---: | :---: | :---: | :--- |
| **Pack of 1** | ₹1,745 | ₹1,799 | 3% | 25 servings | **₹69.80 / serving** | 25-day supply (assuming 1 serving/day) |
| **Pack of 2** | ₹3,418 | ₹3,598 | 5% | 50 servings | **₹68.36 / serving** | 50-day supply (assuming 1 serving/day) |
| **Pack of 3** | ₹5,019 | ₹5,397 | 7% | 75 servings | **₹66.92 / serving** | 75-day supply (assuming 1 serving/day) |
| **Pack of 4** | ₹6,476 | ₹7,196 | 10% | 100 servings | **₹64.76 / serving** | 100-day supply (assuming 1 serving/day) |

*Disclaimer attached to pricing:*  
`*Prices shown are captured reference prices. Daily duration estimates assume the manufacturer's recommended serving of one 8 g scoop per day. Individual consumption rates may vary.`

### 2.3 Verified Product Specifications Table

| Specification Field | Verified Specification Value | Source Verification |
| :--- | :--- | :--- |
| **Brand** | Wellbeing Nutrition | Product packaging / live storefront |
| **Product Type** | Dietary Supplement (Hydrolyzed Collagen Peptides) | Back of pack |
| **Dietary Classification** | Non-Vegetarian (Marine Fish) | Back of pack green/brown dot symbol |
| **Net Weight** | 200 grams | Packaging & Shopify JSON |
| **Serving Size** | 8 grams (1 level scoop) | Back of pack nutritional panel |
| **Servings per Container** | 25 servings | Calculated: 200 g / 8 g = 25 |
| **Collagen Type Breakdown** | 90% Type I, 10% Type III Collagen Peptides | Official product FAQ JSON-LD |
| **Flavor** | Unflavored / Neutral | Product specification |
| **Shelf Life** | 24 months from manufacturing date | Back of pack specification |
| **Country of Origin** | India (Ingredients sourced from Korea) | Back of pack manufacturer details |
| **FSSAI License Number** | 10019022009134 (Nutritionalab Pvt. Ltd.) | PDP DOM manufacturer section |

---

## 3. Comprehensive Claims & Evidence Evaluation Register

| Claim ID | Category | Exact Proposed Wording | Target Domain | Underlying Evidence & Source | Refers to Ingredient or Product? | Evidence Strength | Manufacturer Confirmation Needed? | Legal / Regulatory Review Needed? | Permitted in Prototype? |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :---: | :---: | :---: |
| **CL-01** | Efficacy | "Supports skin moisture retention and elasticity over 4 to 8 weeks of daily use." | Skin | *J. Cosmet. Dermatol.* 2015 ([doi:10.1111/jocd.12174](https://onlinelibrary.wiley.com/doi/10.1111/jocd.12174)) & 2021 ([doi:10.1111/jocd.13676](https://doi.org/10.1111/jocd.13676)). | Ingredient | Strong (Peer-reviewed randomized controlled trials on oral collagen peptides) | No | Yes (ASCI compliance) | **Yes (with ingredient disclaimer)** |
| **CL-02** | Efficacy | "Helps strengthen brittle nails and support hair keratin infrastructure." | Hair/Nails | *J. Cosmet. Dermatol.* 2017 & systematic review on Type I collagen hydrolysates. | Ingredient | Moderate (Multiple published clinical observations) | No | Yes | **Yes** |
| **CL-03** | Bioavailability | "Hydrolyzed marine collagen peptides feature smaller molecular chains than intact collagen, enabling efficient absorption." | Absorption | Published biochemistry reviews; peptide molecular weight comparisons. | Ingredient | Strong | Yes (Request exact Dalton rating) | No | **Yes (Qualitative only; do not invent Daltons)** |
| **CL-04** | Sourcing | "Pure hydrolyzed marine collagen derived from Korean deep-sea fish." | Provenance | Live brand packaging and product specification. | Product | Moderate (Stated on pack; awaiting supplier audit report) | Yes (Wild-caught species cert) | No | **Yes** |
| **CL-05** | Sensory | "Unflavored powder designed to dissolve in coffee, tea, smoothies, or water. Individual taste and aroma perceptions may vary." | Sensory | Live product instructions and user feedback. | Product | Moderate (Neutral formulation; transparent sensory variance disclosure) | No | No | **Yes** |
| **CL-06** | Safety | "Non-GMO, gluten-free, dairy-free, with zero added sugar or artificial fillers." | Safety / Diet | Official product FAQ JSON-LD. | Product | Moderate | Yes (Batch lab certificates) | Yes | **Yes** |
| **CL-07** | Age Guidance | "Formulated for adult consumption (18 years and above)." | Suitability | Standard FSSAI dietary supplement adult guidelines. | Product | Strong | Yes (Confirm official brand policy) | No | **Yes** |
| **CL-08** | Medical Caution | "Not recommended during pregnancy or breastfeeding without prior physician consultation. Contains fish." | Safety | Standard allergen and maternal health disclosures. | Product | Strong | No (Mandatory allergen disclosure) | Yes | **Yes** |

---

## 4. Sensory Reassurance & Preparation Guide Copy

### Proposed Module: "How to Prepare & What to Expect"
```markdown
### Seamless Daily Integration in 3 Steps
1. **Scoop:** Add 1 level scoop (8 g) to an empty cup or glass.
2. **Pour & Stir:** Add 200–250 ml of room temperature water, morning coffee, herbal tea, or your favorite smoothie. Stir for 20–30 seconds until fully dissolved.
3. **Enjoy Daily:** Consume once daily, ideally in the morning or between meals.

#### Transparent Sensory Transparency:
* **Taste:** Completely unflavored with no added sugar or sweeteners. When mixed into coffee, juice, or smoothies, the taste is virtually undetectable. In plain water, some users detect a faint, characteristic marine mineral note.
* **Dissolvability:** Dissolves smoothly in warm liquids and room-temperature beverages. If mixing into ice-cold liquids, stir thoroughly or use an electric frother to prevent settling.
```

---

## 5. Review Section Labels & Structured Taxonomy

* **Section Title:** `Verified Customer Experiences`
* **Summary Counter:** `4.74 out of 5 Stars | Based on 571 Verified Customer Reviews`
* **Filter Pills (Conditional on Structured Data Availability):**
  * *Experience Type:* `All Reviews` | `Taste & Mixing Experience` | `Long-Term Routine (2+ Months)` | `With Customer Photos`
  * *Mix Routine:* `In Morning Coffee` | `In Water` | `In Smoothies / Juice`
  * *Benefit Observed:* `Skin Hydration` | `Nail Strength` | `Hair Health` | `Joint Comfort`
* **Sort Options:** `Most Helpful` | `Most Recent` | `Highest Rated` | `Critical Reviews (1–2 Stars)`
* **Authenticity Disclosure:**  
  `Reviews are collected from verified purchasers via our independent review partner. Reviewers may have received a store coupon for submitting honest feedback. We display both positive and negative reviews in accordance with our transparency standards.`

---

## 6. Product Guide AI Agent Suggested Prompts & Safety Guardrails

### 6.1 Quick-Prompt Starter Chips
1. *"Can I mix this into my morning hot coffee?"*
2. *"Is this safe if I have a seafood allergy?"*
3. *"How many days does one 200g tub last?"*
4. *"When is the best time of day to take this?"*
5. *"Can I return this product if I open it?"*
6. *"How does marine collagen compare to bovine collagen?"*

### 6.2 Pre-Scripted Boundary & Uncertainty Responses

* **On Seafood Allergies:**  
  > *"Because this product is 100% pure marine collagen derived from fish, it is strictly not suitable for individuals with fish or seafood allergies. Please do not consume this product if you have known marine allergies."*

* **On Pregnancy & Breastfeeding:**  
  > *"While marine collagen peptides are a dietary protein, nutritional needs and sensitivities vary significantly during pregnancy and nursing. Wellbeing Nutrition strongly advises consulting your healthcare provider or OB-GYN before introducing any new dietary supplement to your prenatal or postpartum routine."*

* **On Medical Conditions & Prescription Drugs:**  
  > *"I am an automated product guide and cannot provide clinical or medical diagnoses. If you have an existing medical condition or are taking prescription medications, please share the ingredient panel with your doctor."*

* **On Missing / Unknown Information:**  
  > *"I don't have verified information from Wellbeing Nutrition regarding that specific question. Our dedicated customer care team can assist you directly at care@wellbeingnutrition.com or via WhatsApp support."*

---

## 7. Purchase Protection & Return Policy Messaging

* **Buy Box Badge:**  
  `🛡️ 100% Authentic Product | Tamper-Evident Seal | Transit Damage Replacement Guaranteed`
* **Detailed Policy Modal Copy:**  
  ```markdown
  ### Delivery & Return Policy Transparency
  * **Hygienic Safety Standard:** To protect consumer health and safety, dietary supplements cannot be returned or refunded once the tamper-evident protective seal is broken or the product is opened.
  * **Transit Damage Protection:** If your package arrives damaged, tampered with, or defective, contact us within 48 hours of delivery at care@wellbeingnutrition.com with a photograph of the outer box and product. We will issue a priority replacement immediately at zero cost.
  * **Cancellation Window:** Orders may be cancelled free of charge at any time prior to warehouse dispatch.
  ```

---

## 8. Unresolved Claims Contradiction Log

| Contradiction Identified | Source A | Source B | Resolution for Phase 2 Architecture |
| :--- | :--- | :--- | :--- |
| **Review Rating Score** | Judge.me schema badge: `4.74 ★` (571 reviews) | Lower testimonial section: `4.9 Review` | **Resolved:** Unified across the entire page to the verified `4.74 ★` platform metric. The unverified `4.9` label is permanently deprecated. |
| **Duration vs Clinical Threshold** | Tub contains 25 servings (25 days at 1 scoop/day) | Study cards cite 4 to 8 weeks (28 to 56 days) for visible outcomes | **Resolved:** Transparently display `25 servings / 25-day supply` on 1 Pack, and position Pack of 2 as a `50-day supply (assuming 1 serving/day)` without claiming guaranteed results. |
| **Sensory Guarantees** | Phase 1 proposed "100% Odorless & Zero Clumping Guarantee" | Empirical user feedback and biological reality of marine peptides | **Resolved:** Replaced with honest sensory guidance acknowledging that individual taste perceptions vary and providing correct liquid preparation steps. |
