# Mobile UX Architecture & Wireframe Specifications

**Project:** Wellbeing Nutrition Korean Marine Collagen Peptides CRO Optimisation  
**Author:** Frontend UX Architect & Mobile CRO Specialist  
**Date:** October 25, 2026  
**Status:** Approved for Phase 2 Architecture  
**Dedicated Branch:** `feature/collagen-cro-experience`  

---

## 1. Mobile-First Architecture & Viewport Layout (375px - 430px)

```text
+-------------------------------------------------------------+
| TOP BAR: Free Express Shipping over ₹999 | Code: BUY3@10    |
+-------------------------------------------------------------+
| [☰ Menu]       WELLBEING NUTRITION       [🔍]  [🛒 Cart (1)]|
+-------------------------------------------------------------+
|                                                             |
|  [SWIPEABLE IMAGE CAROUSEL (1:1 Aspect Ratio)]              |
|  +-------------------------------------------------------+  |
|  |                                                       |  |
|  |       HIGH-RES PRODUCT PACK + SCOOP VISUAL            |  |
|  |                                                       |  |
|  +-------------------------------------------------------+  |
|  [ •  ○  ○  ○  ○ ] (Swipe Indicator Dots)                   |
|                                                             |
|  [KOREAN SOURCED BADGE]  ★ 4.74 (571 Reviews)               |
|  Pure Korean Marine Collagen Peptides                       |
|  Hydrolyzed Type I & III (8 g/serv) | 200 g (25 Servings)   |
|                                                             |
|  ---------------------------------------------------------  |
|  SELECT PACK & DURATION:                                    |
|  +-------------------------------------------------------+  |
|  | (•) Pack of 1: ₹1,745  (Save 3%)                      |  |
|  |     ₹69.80 / serving · 25-Day Supply                  |  |
|  +-------------------------------------------------------+  |
|  | ( ) Pack of 2: ₹3,418  (Save 5%) [POPULAR - 50 DAYS]  |  |
|  |     ₹68.36 / serving · 50-Day Supply                  |  |
|  +-------------------------------------------------------+  |
|  | ( ) Pack of 3: ₹5,019  (Save 7%)                      |  |
|  |     ₹66.92 / serving · 75-Day Supply                  |  |
|  +-------------------------------------------------------+  |
|  | ( ) 14-Day Starter Pack: ₹999 [TASTE & HABIT TRIAL]   |  |
|  |     ₹71.35 / serving · 14-Day Supply + ₹200 Voucher   |  |
|  +-------------------------------------------------------+  |
|                                                             |
|  [PRIMARY CTA - 48px Touch Height]:                         |
|  +-------------------------------------------------------+  |
|  |             ADD TO CART — ₹1,745                      |  |
|  +-------------------------------------------------------+  |
|  +-------------------------------------------------------+  |
|  |        ⚡ 1-CLICK CHECKOUT VIA GOKWIK                  |  |
|  +-------------------------------------------------------+  |
|                                                             |
|  🛡️ Genuine Origin Sealed | 48-Hr Damage Replacement         |
|  🚚 Dispatched in 24 Hrs | Free Delivery                    |
|                                                             |
|  ---------------------------------------------------------  |
|  MODULE 2: AT-A-GLANCE ICON GRID (2x2 Mobile Tiles)         |
|  [ 8g Peptides ] [ Korean Deep-Sea ]                        |
|  [ Zero Sugar  ] [ Keto & Gluten-Free]                      |
|                                                             |
|  ---------------------------------------------------------  |
|  MODULE 3: ASK PRODUCT GUIDE AI (Mobile Prompt Banner)      |
|  "Questions about coffee mixing, age, or fish allergies?"   |
|  [ Coffee mixability? ] [ Seafood allergy? ]                |
|  [ How many days/pack? ]                                    |
|                                                             |
|  ---------------------------------------------------------  |
|  MODULE 4: CLINICAL EVIDENCE AT A GLANCE (Swipe Cards)      |
|  +-------------------------------------------------------+  |
|  | Study Snapshot: J. Cosmetic Dermatology               |  |
|  | +28% Skin Hydration over 8 weeks daily use           |  |
|  +-------------------------------------------------------+  |
|                                                             |
|  ---------------------------------------------------------  |
|  MODULE 5: HOW TO MIX IN 3 EASY STEPS                      |
|  1. Scoop (8g) -> 2. Stir in Coffee/Water -> 3. Enjoy Daily |
|                                                             |
|  ---------------------------------------------------------  |
|  MODULE 6: VERIFIED CUSTOMER REVIEWS                        |
|  ★ 4.74 / 5.0 (571 Verified Reviews)                        |
|  [🔍 Search reviews...]                                     |
|  [ Filter: All ] [ In Coffee ] [ 2+ Months ]                |
|                                                             |
|  ---------------------------------------------------------  |
|  MODULE 7: RETURN POLICY & HYGIENE ADVISORY                 |
|  Non-returnable once opened | 48-hr Transit Damage Cover    |
|                                                             |
+-------------------------------------------------------------+
|  FIXED MOBILE STICKY BOTTOM TRAY (Always Visible):         |
|  +-------------------------------------------------------+  |
|  | Pack 1 (₹1,745 · ₹69.80/d) | [ ADD TO CART ]          |  |
|  +-------------------------------------------------------+  |
+-------------------------------------------------------------+
```

---

## 2. Deliberate Mobile UX Principles & Responsive Adaptations

Unlike a simple scaled-down desktop page, the mobile experience is engineered around **thumb-zone ergonomics**, **scroll fatigue reduction**, and **viewport clutter mitigation**:

### 2.1 Fixed Sticky Purchase Tray Ergonomics
* **The Problem:** Competing floating elements (cookie banners, live chats, cart bars) often consume over 35% of the mobile viewport, causing frustration.
* **Proposed Interface Behavior:**
  * Clean, compact 56px sticky bottom bar docked to the bottom of the viewport.
  * Shows currently selected variant, total price, unit price (`₹69.80/d`), and an instant "Add to Cart" button.
  * Uses CSS `env(safe-area-inset-bottom)` to prevent collisions with iOS home indicator bars and Android bottom navigation bars.
  * Tapping the variant text opens a smooth bottom drawer to switch packs without scrolling all the way back to the top hero.

### 2.2 Mobile Product Guide AI Agent (Bottom Sheet Drawer)
* **The Problem:** Desktop two-column chat interfaces break completely on mobile screens or block the purchase CTA.
* **Proposed Interface Behavior:**
  * Embedded hero chips allow quick 1-tap inquiries.
  * A floating conversational action pill (`💬 Product Guide`) is docked above the sticky purchase bar.
  * Tapping expands a native **modal bottom sheet** covering 80% of the screen height, featuring:
    * Quick query chips.
    * Touch-friendly keyboard input.
    * Grounded answer stream with collapsible citations.
    * Swipe-down gesture or top "✕" button to dismiss instantly.

### 2.3 Touch Targets & Variant Selector Cards
* **The Problem:** Crammed horizontal pill buttons cause tap errors on touchscreens.
* **Proposed Interface Behavior:**
  * Variant options are structured as full-width vertical stacked cards with a minimum height of **52px** (exceeding Apple's 44px and Android's 48px touch guidelines).
  * Generous internal padding and high visual contrast for selected state (dark navy border, blue accent checkmark, and highlighted per-serving price).

### 2.4 Swipeable Horizontal Carousels with Snap Points
* **The Problem:** Long vertical pages create scroll fatigue on mobile networks.
* **Proposed Interface Behavior:**
  * Gallery, Clinical Evidence cards, and Review Photos utilize CSS horizontal scroll-snap (`scroll-snap-type: x mandatory`).
  * Explicit visual progress dots and peek-previews (showing 15% of the next card) encourage natural horizontal swiping without cluttering vertical screen space.

### 2.5 Collapsible Information Accordions
* **The Problem:** Detailed regulatory, ingredient, and manufacturer specifications overwhelm mobile viewports.
* **Proposed Interface Behavior:**
  * Modules 4 (Ingredients), 7 (Return & Hygiene Policy), and FAQ are organized into native `<details>` accordions with smooth CSS height transitions.
  * Users can scan section headers effortlessly and expand only the specific topics they wish to inspect.

---

## 3. Responsive Breakpoint & Interaction State Mapping

| Viewport Width | Layout Mode | Hero Gallery | Variant Selector | Sticky CTA Behavior | Assistant Trigger |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **< 480px (Mobile)** | Single Column Stack | 1:1 Aspect ratio, touch swipe with snap points | Full-width vertical stacked cards (52px tap height) | Fixed 56px bottom bar with safe-area padding | Floating action pill (`💬`) expanding modal bottom sheet |
| **481px - 768px (Tablet)** | Single Column Hybrid | 4:3 Aspect ratio carousel with thumbnail preview | 2x2 grid of variant cards | Fixed bottom bar | Side drawer overlay |
| **> 768px (Desktop)** | Two-Column Grid | 55% Sticky gallery with zoom & thumbnails | 2x2 grid in sticky buy box | Top/bottom viewport sticky bar (on scroll) | Embedded inline card + expandable drawer |

---

## 4. Mobile Accessibility & Performance Standards

* **Touch Target Size:** Minimum 48 x 48 CSS pixels for all interactive CTA buttons, variant cards, and chip filters.
* **Thumb-Zone Optimization:** Critical action buttons ("Add to Cart", "GoKwik Checkout", variant picker) are positioned within the natural lower-half thumb zone.
* **Dynamic Font Scaling:** Base typography uses fluid `rem` units (`16px` minimum body copy) to prevent automatic iOS Safari zoom on input focus.
* **Zero Viewport Shifting (CLS = 0):** Image carousels and sticky trays reserve exact aspect ratios and height footprints to eliminate cumulative layout shifts during page load.
