# Desktop UX Architecture & Wireframe Specifications

**Project:** Wellbeing Nutrition Korean Marine Collagen Peptides CRO Optimisation  
**Author:** Frontend UX Architect & CRO Strategist  
**Date:** October 25, 2026  
**Status:** Approved for Phase 2 Architecture  
**Dedicated Branch:** `feature/collagen-cro-experience`  

---

## 1. Page Architecture & Vertical Layout Blueprint

```text
+----------------------------------------------------------------------------------------------------+
|  ANNOUNCEMENT BAR: Free Express Shipping over ₹999 | Code: BUY3@10 (10% off on 3+ items)           |
+----------------------------------------------------------------------------------------------------+
|  GLOBAL HEADER: Logo | Collagen & Peptides | Science | Reviews | Search | Account | Cart [1]       |
+----------------------------------------------------------------------------------------------------+
|                                                                                                    |
|  [BREADCRUMB]: Home > Skin & Beauty > Collagen > Pure Korean Marine Collagen Peptides              |
|                                                                                                    |
|  +---------------------------------------+  +----------------------------------------------------+ |
|  |           PRIMARY GALLERY             |  |                 BUY BOX & HERO                     | |
|  |                                       |  |  [KOREAN SOURCED BADGE] [4.74 ★ 571 Verified Reviews]| |
|  |  +---------------------------------+  |  |  Pure Korean Marine Collagen Peptides              | |
|  |  |                                 |  |  |  Hydrolyzed Type I & III Marine Peptides (8 g/serv) | |
|  |  |                                 |  |  |  200 g Tub | 25 Servings | Unflavored Powder       | |
|  |  |       HIGH-RES PRODUCT PACK     |  |  |  -------------------------------------------------  | |
|  |  |      WITH SERVING SCOOP VISUAL  |  |  |  SELECT PACK & DURATION:                            | |
|  |  |                                 |  |  |  +-------------------+  +------------------------+  | |
|  |  |                                 |  |  |  | Pack 1: ₹1,745     |  | Pack 2: ₹3,418 (Save 5%)|  | |
|  |  +---------------------------------+  |  |  | ₹69.80/serv · 25 d |  | ₹68.36/serv · 50 d     |  | |
|  |                                       |  |  | [1 Tub]             |  | [2 Tubs - Popular]     |  | |
|  |  [Thumb 1] [Thumb 2] [Thumb 3] [Thumb4]|  |  +-------------------+  +------------------------+  | |
|  |                                       |  |  +-------------------+  +------------------------+  | |
|  |  [SENSORY REASSURANCE STRIP]          |  |  | Pack 3: ₹5,019     |  | 14-Day Starter: ₹999   |  | |
|  |  ✓ Neutral Taste in Coffee / Tea      |  |  | ₹66.92/serv · 75 d |  | ₹71.35/serv · 14 d     |  | |
|  |  ✓ Smooth Dissolving in Warm Liquids  |  |  | [3 Tubs]           |  | [Taste & Habit Trial]   |  | |
|  |  ✓ Zero Added Sugar                   |  |  +-------------------+  +------------------------+  | |
|  +---------------------------------------+  |                                                    | |
|                                             |  [CTA BUTTONS]:                                    | |
|                                             |  [  ADD TO CART - ₹1,745  ]                        | |
|                                             |  [  ⚡ 1-CLICK BUY VIA GOKWIK  ]                    | |
|                                             |                                                    | |
|                                             |  [PURCHASE PROTECTION TRUST BAR]:                  | |
|                                             |  🛡️ Genuine Origin Sealed | 48-Hr Damage Replace    | |
|                                             |  🚚 Dispatched within 24 Hrs | Free Delivery       | |
|                                             +----------------------------------------------------+ |
+----------------------------------------------------------------------------------------------------+
|  MODULE 2: AT-A-GLANCE PRODUCT HIGHLIGHTS (Type I/III 90:10, 8g Scoop, Zero Sugar, Keto-Friendly)  |
+----------------------------------------------------------------------------------------------------+
|  MODULE 3: PRE-PURCHASE PRODUCT GUIDE AI AGENT (Interactive Assistant Card & Suggested Questions)   |
+----------------------------------------------------------------------------------------------------+
|  MODULE 4: INGREDIENTS & DEEP-SEA KOREAN PROVENANCE (Wild-caught, Sustainable, FSSAI Certified)    |
+----------------------------------------------------------------------------------------------------+
|  MODULE 5: "EVIDENCE AT A GLANCE" CLINICAL SUMMARY (Dermatology RCT Studies & Visual Timeline)     |
+----------------------------------------------------------------------------------------------------+
|  MODULE 6: SEAMLESS DAILY ROUTINE (How to Dissolve: Morning Coffee, Tea, Smoothies, Water)         |
+----------------------------------------------------------------------------------------------------+
|  MODULE 7: DETAILED VERIFIED REVIEW DISCOVERY (Search, Filter by Mix/Age, Star Sorting, Photos)    |
+----------------------------------------------------------------------------------------------------+
|  MODULE 8: TRANSPARENT VALUE COMPARISON & SUBSCRIPTION RETENTION REWARDS                           |
+----------------------------------------------------------------------------------------------------+
|  MODULE 9: RETURN POLICY, STORAGE & SAFETY ADVISORY (Hygiene Policy, Allergen & Physician Guidance)|
+----------------------------------------------------------------------------------------------------+
|  FOOTER: Navigation, FSSAI Lic. 10019022009134, Contact Care, Shipping Terms, Certified Badges     |
+----------------------------------------------------------------------------------------------------+
```

---

## 2. In-Depth Module Specifications (11 Strategic Modules)

### Module 1: First-Screen Hero & Buy Box Controls
* **Customer Problem Addressed:** High upfront price shock (₹1,745); uncertainty about pack duration; fear of fishy taste.
* **Proposed Interface Behavior:** Two-column desktop grid (55% gallery, 45% sticky buy box). Clicking a pack option immediately recalculates total price, price per serving, and duration callouts without page reload.
* **Supporting Evidence / Hypothesis:** Baymard Institute benchmark indicates 68% of supplement shoppers seek cost-per-day transparency; displaying ₹69.80/serving reframes psychological affordability.
* **Desktop Presentation:**
  * Left: High-resolution zoomable pack shot + 4 lifestyle thumbnails + back-of-pack nutrition panel modal trigger + "Dissolves in 30s" preparation strip.
  * Right: Verified Korean provenance badge, 4.74★ Judge.me rating link, 4-tier variant selector, primary ATC and GoKwik instant checkout buttons, and purchase protection badges.
* **Interaction States:**
  * *Hover:* Variant cards elevate with subtle shadow and border transition.
  * *Active / Selected:* Deep navy border with checkmark icon and blue gradient highlight.
  * *Disabled:* Grayed out with "Out of Stock" micro-copy if inventory hits zero.
* **Data Requirements:** Real-time Shopify variant JSON, inventory stock levels, active coupon states.
* **Accessibility:** High contrast text (WCAG AAA compliant), full keyboard tab navigation (`tabindex="0"`), ARIA labels on all variant radios (`aria-checked="true"`).

### Module 2: At-a-Glance Specification Tiles
* **Customer Problem Addressed:** Cognitive overload from reading lengthy walls of text to find basic product facts.
* **Proposed Interface Behavior:** 4-column horizontal icon grid displaying core product metrics.
* **Content:**
  1. `8 g Pure Marine Peptides per Scoop` (Type I & III Hydrolyzed Collagen).
  2. `Korean Deep-Sea Origin` (Wild-caught, cold-extracted).
  3. `100% Unflavored` (Zero added sugar, zero artificial sweeteners).
  4. `Dietary Clean` (Gluten-free, dairy-free, keto-friendly).
* **Accessibility:** Semantic HTML list with screen-reader accessible SVGs.

### Module 3: Product Guide AI Agent (Interactive Assistant)
* **Customer Problem Addressed:** Hesitation regarding age suitability, coffee mixing, seafood allergies, or safety during breastfeeding.
* **Proposed Interface Behavior:** An embedded card containing 4 one-click starter query chips. Clicking a chip or entering custom text smoothly expands a conversational interface inside the page context without redirecting the user.
* **Desktop Presentation:** Centered 2-column container. Left: Assistant avatar, value proposition, and trust statement. Right: Chat stream with instant answers, source citations, and human escalation link (`care@wellbeingnutrition.com`).
* **Interaction States:**
  * *Idle:* Shows 4 chips (`"Can I mix in hot coffee?"`, `"Is this safe with seafood allergies?"`, `"How many days per pack?"`, `"Can I return it?"`).
  * *Loading:* Gentle pulse animation while querying local structured knowledge.
  * *Answered:* Grounded answer + citation + suggested follow-up chips.

### Module 4: Ingredients & Provenance Deep-Dive
* **Customer Problem Addressed:** Skepticism regarding fish source, processing quality, and contaminants.
* **Proposed Interface Behavior:** Split visual panel highlighting wild deep-sea Korean fish sourcing, low-temperature hydrolysis extraction, and FSSAI license verification (`Lic. No. 10019022009134`).
* **Evidence:** Direct packaging disclosure and manufacturer marketing documentation.

### Module 5: "Evidence at a Glance" Clinical Summary
* **Customer Problem Addressed:** Academic DOIs linking to dense scientific papers intimidate ordinary shoppers, while the defensive disclaimer creates doubt.
* **Proposed Interface Behavior:** 3 structured "Clinical Study Snapshots" summarizing published peer-reviewed findings in plain language:
  * *Study 1 (J. Cosmet. Dermatol. 2015):* Significant improvement in skin hydration and collagen density after 8 weeks of daily oral intake.
  * *Study 2 (J. Cosmet. Dermatol. 2021):* Visible reduction in skin wrinkle depth and improved elasticity over a 12-week placebo-controlled trial.
  * *Study 3 (J. Med. Food 2022):* Low-molecular-weight peptides demonstrated rapid intestinal absorption.
* **Compliance Guardrail:** Clear note stating: `*Studies evaluated oral collagen peptide ingredients over 8–12 weeks. Individual results depend on age, diet, and daily routine consistency.`

### Module 6: How to Prepare & Sensory Guidance
* **Customer Problem Addressed:** The fear of clumping, foaming, or fishy aftertaste.
* **Proposed Interface Behavior:** 3-step visual preparation guide with clear liquid temperature guidelines (hot coffee vs room-temperature water vs ice-cold smoothies). Transparent sensory disclaimer acknowledging that while taste is neutral in flavored drinks, sensitive palates may detect a mild marine mineral note in plain water.

### Module 7: Detailed Verified Review Discovery Experience
* **Customer Problem Addressed:** Discrepancy between 4.74★ and 4.9★ ratings; inability to find reviews matching specific customer demographics or concerns.
* **Proposed Interface Behavior:** Comprehensive review explorer:
  * **Header:** Verified `4.74 ★` aggregate based on 571 Judge.me verified reviews.
  * **Search Input:** Real-time keyword filter (e.g. typing "coffee" filters reviews mentioning coffee mixability).
  * **Pill Filters:** `All`, `Taste & Mixing`, `Used for 2+ Months`, `With Customer Photos`.
  * **Star Sort:** Dedicated filter tab for 1★ and 2★ reviews to demonstrate full transparency.

### Module 8: Value Comparison & Starter Pack Proposition
* **Customer Problem Addressed:** Reluctance to spend ₹1,745 on an untried supplement; uncertainty between Pack 1 and Pack 2.
* **Proposed Interface Behavior:** Clean comparative table showing Pack 1 (25 servings @ ₹69.80/serving), Pack 2 (50 servings @ ₹68.36/serving), and the proposed 14-Day Starter Pack (14 servings @ ₹71.35/serving + ₹200 repeat voucher).

### Module 9: Delivery, Hygiene & Purchase Protection
* **Customer Problem Addressed:** Fear of receiving damaged items and uncertainty regarding non-returnable supplement rules.
* **Proposed Interface Behavior:** 3-column trust badge card explaining hygienic safety (sealed products non-returnable), transit damage protection (48-hr replacement guarantee), and free shipping thresholds.

### Module 10: Fixed Desktop Sticky Purchase Bar
* **Customer Problem Addressed:** Users scrolling down to reviews or science lose easy access to purchase controls.
* **Proposed Interface Behavior:** Appears at top or bottom of viewport when the main buy box scrolls out of view. Displays thumbnail, title, selected pack dropdown, price per serving, and "Add to Cart" button.

### Module 11: Repeat-Purchase & Retention Incentives
* **Customer Problem Addressed:** Cliff drop-off in repurchases after Day 25.
* **Proposed Interface Behavior:** Inline banner explaining the repeat replenishment programme: *"Every customer receives a digital reorder voucher via WhatsApp on Day 18 to ensure uninterrupted daily routine."*
