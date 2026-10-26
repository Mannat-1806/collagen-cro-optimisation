# Responsive Prototype Technical & Functional Specification

> **Document ID:** SPEC-WBN-PROT-001  
> **Target Product:** [Wellbeing Nutrition – Korean Marine Collagen Peptides](https://wellbeingnutrition.com/products/korean-marine-collagen-peptides)  
> **Status:** Draft / Specification Phase (Pre-Implementation)  
> **Academic Scope:** University Product Management CRO Capstone Prototype  
> **Prototype Environment:** Isolated React 18 + Vite frontend mock. Strictly independent of the live production website. **No real payment gateways, customer data harvesting, or live order processing.**

---

## 1. Top Three Defensible UX Opportunities

Grounding our prototype in the audited research, we focus on three defensible UX opportunities. Each clearly delineates verified ground truth from unvalidated behavioral hypotheses:

### Opportunity 1: Persistent Sticky Mobile Bottom CTA (H-03)
- **Observed Fact `[OBSERVATION: Verified PDP]`:** The live mobile PDP is vertically extensive (~4,000–6,000px) due to educational content, ingredient breakdowns, and reviews. Once the user scrolls past the hero section (~700px), the primary "Add to Cart" button disappears from the viewport.
- **Unvalidated Hypothesis `[HYPOTHESIS: To Be Tested]`:** Mobile users exploring deep scientific and ingredient sections encounter navigation friction when ready to purchase, having to scroll all the way back to the top. Keeping a persistent bottom sheet CTA within thumb reach will reduce navigation fatigue and increase mobile Add-to-Cart (ATC) rate.
- **Implementation Scope:** A lightweight sticky bar that activates only when the hero CTA scrolls out of view on viewports $\le 768\text{px}$.

---

### Opportunity 2: Above-the-Fold Daily Serving Cost & Sensory Reassurance Pill (H-01)
- **Observed Fact `[OBSERVATION: Verified PDP]`:** The 200g unflavored jar is priced at ~₹1,619 to ₹1,799 with an 8g scoop size, yielding exactly **25 servings per jar**. The live page displays only the total lump-sum price (~₹1,700) and discount percentage. It does not calculate the daily serving cost (~₹65–₹72/day). Furthermore, retail category feedback on marine collagen frequently cites apprehension regarding fishy smell or aftertaste.
- **Unvalidated Hypothesis `[HYPOTHESIS: To Be Tested]`:** Re-framing a ~₹1,700 lump-sum expenditure into an accessible daily habit (~₹68/day) lowers perceived financial commitment (mental accounting bias). Pairing this with a verified sensory reassurance callout ("Unflavored Pure Marine Peptides · Neutral Beverage Mixing") directly above the CTA resolves sensory ambiguity without inventing unverified taste guarantees.
- **Implementation Scope:** A calculated dynamic daily badge (`₹XX / day`) beside the price and a sensory reassurance trust pill anchored directly above the primary CTA button.

---

### Opportunity 3: Consolidated Purity/Verification Strip & Visual Molecular Explainer (H-06 & H-04)
- **Observed Fact `[OBSERVATION: Verified PDP]`:** The product holds legitimate third-party certifications (FSSAI, US FDA registered facility, GMP compliant, tested mercury-free) and utilizes nano-hydrolyzed peptides at `<1000 Daltons`. However, certifications are scattered vertically down the page, and the `<1000 Da` attribute is communicated purely through text without visual context explaining what a Dalton is relative to standard collagens.
- **Unvalidated Hypothesis `[HYPOTHESIS: To Be Tested]`:** Consolidating purity and regulatory credentials into a high-contrast horizontal strip directly beneath the hero purchase container, paired with an intuitive visual graphic comparing nano-peptides (<1000 Da) to standard larger molecules (3000–5000 Da), enhances comprehension and credibility, reducing early bounce rates.
- **Implementation Scope:** A unified trust badge row and an SVG-based educational absorption diagram in the science section.

---

## 2. Target Viewports & Responsive Breakpoints

The prototype will be engineered mobile-first using Tailwind CSS breakpoints:

| Viewport Category | Width Range | Target Test Devices / Viewports | Strategic Role |
| :--- | :--- | :--- | :--- |
| **Mobile Narrow** | **360px – 389px** | Samsung Galaxy S8/S20 (360px), iPhone SE (375px) | Ensures zero horizontal overflow and readable typography on compact screens. |
| **Mobile Standard** | **390px – 414px** | iPhone 12/13/14/15 (390px), iPhone 14/15 Plus (414px) | **Primary Design Target** (representing >75% of mobile traffic). |
| **Tablet / Foldable** | **768px – 1023px** | iPad Mini (768px), iPad Air (820px) | Adaptive grid: 1-column transitioning to 2-column layout. |
| **Desktop Standard** | **1280px – 1439px** | 13" MacBook / Standard Laptops (1280px, 1366px) | Split 2-column layout: Sticky media gallery (left) + scrolling buy-box (right). |
| **Desktop Wide** | **$\ge$ 1440px** | External Displays / High-Res Monitors (1440px, 1920px) | Max-width containment (`max-w-7xl mx-auto`) with balanced whitespace. |

---

## 3. Page Structure & Section Sequencing

The prototype will render sections in the following verified hierarchy:

```
┌────────────────────────────────────────────────────────────────────────┐
│ 1. Global Prototype Banner & Navigation Header                         │
│    • Academic prototype disclaimer notice                              │
│    • Brand logo, mock search, and interactive Cart Drawer trigger      │
├────────────────────────────────────────────────────────────────────────┤
│ 2. Hero Section (Mobile 1-Column | Desktop 2-Column Split)             │
│    • Left (Desktop): Media Gallery (Product Jar, Scooping, Lifestyle)  │
│    • Right: Product Info, Price, Servings, Pack Selector, CTA          │
├────────────────────────────────────────────────────────────────────────┤
│ 3. Consolidated Purity & Regulatory Trust Strip                        │
│    • Wild Korean Fish, Mercury-Free, US FDA Facility, FSSAI, Non-GMO  │
├────────────────────────────────────────────────────────────────────────┤
│ 4. Scientific Absorption Explainer (<1000 Da vs 3000-5000 Da)          │
│    • Visual molecular size diagram & peer-reviewed literature context │
├────────────────────────────────────────────────────────────────────────┤
│ 5. Clinical Timeline of Transformation (8–12 Weeks)                    │
│    • Week 4: Hydration | Week 8: Elasticity | Week 12: Wrinkle Depth   │
├────────────────────────────────────────────────────────────────────────┤
│ 6. Consumption Guide & Mixability Demonstration                        │
│    • Hot/cold beverage instructions, 100% dissolution reassurance      │
├────────────────────────────────────────────────────────────────────────┤
│ 7. Nutritional & Amino Acid Breakdown (Expandable Disclosure)          │
│    • Pure Type I & III, 8g serving details, 0g sugar, 0g fat          │
├────────────────────────────────────────────────────────────────────────┤
│ 8. Verified Reviews & Heuristic Filtering                              │
│    • Aggregate star rating (4.6/5), verified buyer badges, mock cards  │
├────────────────────────────────────────────────────────────────────────┤
│ 9. Frequently Asked Questions (Accordion)                              │
│    • Marine non-veg status, smell/taste, age, daily timing             │
├────────────────────────────────────────────────────────────────────────┤
│ 10. Persistent Sticky Mobile CTA Bar (Mobile Viewport Only)            │
│     • Active pack, live price, and direct "Add to Cart" action         │
├────────────────────────────────────────────────────────────────────────┤
│ 11. Interactive Slide-Out Cart Drawer (Mock Checkout Flow)             │
│     • Selected items, free delivery progress bar, prototype modal      │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Exact Content Hierarchy & Component Specifications

### 4.1 Hero Buy Box Information Architecture

1. **Category Tag:** `Ingestible Beauty & Wellness · Marine Peptides`
2. **Product Headline:** `Korean Marine Collagen Peptides`
3. **Rating Snippet:**
   - Visual: 5 star icons (4.6 filled).
   - Text: `4.6 / 5.0 Rating · Based on 1,420+ Verified Customer Reviews` *(Clearly marked as verified PDP aggregate)*.
4. **Pricing Block:**
   - **Selling Price:** `₹1,699` (Large, high-contrast bold font).
   - **Maximum Retail Price (MRP):** `₹2,299` (Strikethrough, muted grey).
   - **Discount Pill:** `Save 26%` (Green highlight badge).
   - **Serving Cost Micro-Badge (H-01):** `Only ~₹68 / day (25 daily servings of 8g)` *(Calculated dynamically: Price ÷ Servings)*.
5. **Pack Selection Module (Tiered Anchoring):**
   - **Option A (Default):** `Single Jar (200g)`
     - Subtitle: `25 Servings · ~₹68/day`
     - Price: `₹1,699`
   - **Option B (Recommended / Best Value):** `Pack of 2 (400g)`
     - Badge: `MOST POPULAR · SAVE ₹400`
     - Subtitle: `50 Servings · ~₹60/day`
     - Price: `₹2,999` *(MRP ₹4,598)*
   - **Option C:** `Pack of 3 (600g)`
     - Badge: `BEST VALUE`
     - Subtitle: `75 Servings · ~₹57/day`
     - Price: `₹4,299` *(MRP ₹6,897)*
6. **Sensory Reassurance Callout (H-01):**
   - Icon: Sparkles / Leaf icon.
   - Text: `100% Pure & Unflavored Marine Peptides · Neutral Mixing in Any Beverage` *(Grounded in verified product facts; no unverified money-back taste guarantee)*.
7. **Purchase Actions:**
   - **Quantity Stepper:** `[-] 1 [+]` (Bounds: 1 to 10).
   - **Primary CTA Button:** `Add to Cart — ₹1,699` (High contrast, full-width on mobile).
   - **Express Checkout Button:** `Buy Now with UPI / Fast Checkout` (Direct trigger to mock checkout drawer).
8. **Pincode Delivery Estimator:**
   - Input field: `Enter 6-digit Pincode` with button `Check`.
   - Feedback: Validates 6 numeric digits $\implies$ returns simulated delivery estimate: *"Delivery in 3–4 business days · Free Shipping on this order"*.
   - Disclaimer: `[Prototype simulation — live delivery times subject to courier network]`.

---

## 5. Interaction Requirements

### 5.1 Pack Selector & Quantity Interactions
- **Action:** User clicks on a pack card (Single, 2-Pack, or 3-Pack).
- **State Changes:**
  1. Selected card applies active border (`ring-2 ring-primary bg-primary/5`).
  2. Hero selling price and MRP update immediately.
  3. Dynamic daily cost recalculates: $\text{Daily Cost} = \frac{\text{Selected Price}}{\text{Servings Count}}$.
  4. Primary CTA text updates to show active total price.
  5. Sticky mobile CTA synchronizes its internal pack name and price state.
- **Quantity Stepper:**
  - Clicking `[+]` increments quantity; clicking `[-]` decrements (minimum floor = 1).
  - Total price in CTA button updates: $\text{Total} = \text{Pack Price} \times \text{Quantity}$.

### 5.2 Add to Cart & Cart Drawer Flow
- **Action:** User clicks "Add to Cart" (either in hero or on sticky mobile bar).
- **State Changes:**
  1. Button transitions to loading state (`Adding...` with spinner, 250ms simulated network latency).
  2. Header cart counter badge increments by selected quantity.
  3. Slide-out Cart Drawer opens smoothly from the right edge with backdrop overlay.
  4. Drawer displays item name, selected pack, thumbnail placeholder, unit price, and subtotal.
  5. Free Shipping Progress Bar displays: `100% — You've unlocked FREE Express Delivery!`.
- **Checkout Guardrail:** Clicking "Proceed to Checkout" in the drawer opens an accessible prototype modal stating:
  > *"Academic Prototype Notice: This is an educational CRO prototype for a university assignment. No real transaction has occurred, and no personal data or payment details have been collected."*

### 5.3 Persistent Sticky Mobile Bottom CTA
- **Viewport Restriction:** Enabled only on screens $\le 768\text{px}$.
- **Trigger Logic:** Monitored via an `IntersectionObserver` observing the hero "Add to Cart" button.
  - When hero button exits viewport upwards $\implies$ Sticky bar slides up with CSS transition (`translate-y-0`).
  - When hero button re-enters viewport $\implies$ Sticky bar slides down (`translate-y-full`).
- **Sticky Bar Content:**
  - Left column: Active pack name + live price + daily serving micro-text.
  - Right column: "Add to Cart" button (triggers identical cart flow).

### 5.4 Expandable Information Sections (Accordions)
- **Sections:** Ingredients & Nutrition, Consumption Guidelines, Clinical Evidence Notes, FAQs.
- **Behavior:**
  - One or multiple accordions can be toggled independently.
  - Toggle headers use semantic `<button>` elements with `aria-expanded="true|false"` and `aria-controls="content-id"`.
  - Icon transitions smoothly ($180^\circ$ chevron rotation).

---

## 6. Accessibility & Usability Standards (WCAG 2.1 AA)

1. **Color Contrast:**
   - Body text against background: Minimum contrast ratio of **4.5:1**.
   - Large headings ($\ge 18\text{pt}$ bold) and UI components (buttons, active borders): Minimum contrast ratio of **3.0:1**.
2. **Touch Target Dimensions:**
   - All interactive controls (buttons, pack cards, quantity selectors, accordion headers) must have minimum touch targets of **$44 \times 44\text{px}$** on mobile viewports.
3. **Keyboard Navigation & Focus Management:**
   - Logical tab sequencing across all interactive elements.
   - High-visibility focus indicators (`focus-visible:ring-2 focus-visible:ring-offset-2`).
   - Pressing `Escape` closes the Cart Drawer and Prototype Modal, returning focus to the triggering element.
4. **Screen Reader Semantic Roles & ARIA:**
   - Dynamic price updates announced via `aria-live="polite"`.
   - Cart item count updates announced via `aria-live="assertive"`.
   - Meaningful `alt` attributes on all images; decorative icons marked with `aria-hidden="true"`.
5. **Reduced Motion:**
   - Media query `@media (prefers-reduced-motion: reduce)` disables non-essential animations (e.g., sticky bar slide transitions become instant cut-ins).

---

## 7. Responsive Layout Specifications

```
MOBILE (360px – 414px)                    DESKTOP (1280px+)
┌─────────────────────────────────┐       ┌─────────────────────────────────────────────────────────┐
│ Global Prototype Header (Cart)  │       │ Global Prototype Header (Search, Nav, Cart Counter)     │
├─────────────────────────────────┤       ├────────────────────────────┬────────────────────────────┤
│ Media Gallery (Swipe Carousel)  │       │ Media Gallery (Left Col)   │ Product Info Buy-Box       │
├─────────────────────────────────┤       │                            │ • Title & Rating           │
│ Product Title & Stars (4.6/5)   │       │ • Main HD Image Stage      │ • Selling Price & MRP      │
│ Price & Serving Cost Pill       │       │ • Thumbnails (4-pack)      │ • ~₹68/day Serving Badge   │
│ Pack Selector (1, 2, 3 jars)    │       │ • Dissolution preview card │ • Pack Selector (1/2/3)    │
│ Neutral Sensory Reassurance     │       │                            │ • Neutral Sensory Callout  │
│ Quantity & "Add to Cart" CTA    │       │                            │ • Quantity & Add to Cart   │
│ Pincode Delivery Check          │       │                            │ • Pincode Checker          │
├─────────────────────────────────┤       ├────────────────────────────┴────────────────────────────┤
│ Unified Purity & Trust Strip    │       │ Unified Purity & Certification Trust Strip (5 badges)   │
├─────────────────────────────────┤       ├─────────────────────────────────────────────────────────┤
│ Molecular Explainer (<1000 Da)  │       │ Scientific Molecular Explainer (<1000 Da vs Standard)   │
├─────────────────────────────────┤       ├─────────────────────────────────────────────────────────┤
│ 8-12 Week Timeline Cards        │       │ Clinical Timeline of Transformation (3-Column Grid)     │
├─────────────────────────────────┤       ├─────────────────────────────────────────────────────────┤
│ Mixability Guide & Recipes      │       │ Mixability & Lifestyle Consumption Guide                │
├─────────────────────────────────┤       ├─────────────────────────────────────────────────────────┤
│ Verified Customer Reviews       │       │ Customer Reviews Grid & Heuristic Filter Tabs           │
├─────────────────────────────────┤       ├─────────────────────────────────────────────────────────┤
│ FAQ Accordion                   │       │ FAQ Accordion (2-Column Expandable Layout)              │
├─────────────────────────────────┤       └─────────────────────────────────────────────────────────┘
│ [STICKY MOBILE CTA BAR]         │       *(Sticky CTA hidden on Desktop >= 1024px)*
└─────────────────────────────────┘
```

---

## 8. Test Cases & Verification Scenarios

| Test Case ID | Category | Scenario / Action | Expected Result | Pass Criteria |
| :---: | :--- | :--- | :--- | :--- |
| **TC-01** | Pack Selection | Click "Pack of 2 (400g)". | Price changes to ₹2,999; serving badge updates to `~₹60/day (50 servings)`; CTA button reflects ₹2,999. | Price, math, and active card border update instantaneously. |
| **TC-02** | Quantity Bounds | Click decrement button `[-]` when quantity is 1. | Quantity remains 1; button is visually disabled; does not allow 0 or negative values. | Quantity cannot fall below 1. |
| **TC-03** | Cart Drawer | Click "Add to Cart" with 2 units selected. | Cart drawer opens; displays 2 units of selected pack; cart badge shows `2`; subtotal calculates correctly. | Subtotal matches Quantity $\times$ Pack Price. |
| **TC-04** | Sticky CTA Trigger | Scroll mobile viewport past the hero CTA button. | Sticky bar transitions smoothly from bottom of screen displaying selected pack and price. | Bar appears within 100ms of hero CTA exiting viewport. |
| **TC-05** | Sticky CTA Sync | Switch pack inside the hero selector, then scroll down. | Sticky bar immediately reflects the newly selected pack and price. | State remains synchronized across hero and sticky component. |
| **TC-06** | Pincode Validation | Enter invalid pincode `123`, then valid `400001`. | Rejects `123` with validation prompt; accepts `400001` with estimated delivery date. | Regex `^[1-9][0-9]{5}$` correctly enforced. |
| **TC-07** | Safety Guardrail | Click "Proceed to Checkout" in the Cart Drawer. | Opens educational prototype modal; does NOT redirect to payment gateway or submit form data. | Zero live transaction or data harvesting capability. |
| **TC-08** | Accessibility | Navigate entire page using `Tab` and `Shift+Tab`. | All interactive elements receive visible focus outline; modal traps focus; `Esc` closes drawer. | Full WCAG 2.1 AA keyboard compliance. |

---

## 9. Implementation Rationale Ledger & Verification Matrix

| Interplemented Feature | Documented CRO Hypothesis | Target Component | Research Rationale & Behavioral Mechanism | Empirical Verification Status |
| :--- | :---: | :--- | :--- | :--- |
| **Dynamic Serving-Cost Re-framing** | **H-01** | `ProductHero.jsx` | Cognitive re-framing: Decomposing ~₹1,700 into ~₹68/day lowers perceived upfront financial commitment (mental accounting). Grounded in 200g ÷ 8g scoop = 25 servings. | Verified calculation: ₹1,699 / 25 = ₹67.96 (~₹68). Updates dynamically on pack switch. |
| **Neutral Sensory Reassurance** | **H-01** | `ProductHero.jsx` | Proactively neutralizes consumer hesitation regarding fish odor/flavor by stating unflavored formulation and neutral beverage mixability without fabricating an unverified guarantee. | Grounded in verified unflavored product specification. |
| **Persistent Sticky Mobile Bottom CTA** | **H-03** | `StickyMobileCTA.jsx` | Fitts's Law: Eliminates upward scroll fatigue on long mobile PDP viewports (~5,000px). Maintains live pack and price synchronization. | Verified via `IntersectionObserver` triggering only when hero CTA leaves viewport on screens $\le 768\text{px}$. |
| **Visual Molecular Explainer (&lt;1000 Da)** | **H-04** | `ScienceAbsorption.jsx` | Dual-coding theory: Translates abstract Dalton numbers into an intuitive visual comparison between standard 3,000–5,000 Da molecules and nano-peptides. | Grounded in peer-reviewed clinical trials: Kim DU et al. (*Nutrients* 2018, PMID: 29949889). |
| **Consolidated Trust & Certification Strip** | **H-06** | `TrustStrip.jsx` | Institutional authority heuristic: Consolidates fragmented credentials (Wild Korean Fish, Mercury-Free, US FDA facility, FSSAI, Non-GMO) into a single prominent trust bar. | Grounded in verified official PDP certifications. |
| **Interactive Cart Drawer & Safety Modal** | Safety Guardrail | `CartDrawer.jsx` & `PrototypeModal.jsx` | Simulates full Add-to-Cart micro-conversion intent while strictly isolating prototype from live payments and user data collection. | Verified: Checkout button triggers academic notice modal with zero telemetry harvesting. |
