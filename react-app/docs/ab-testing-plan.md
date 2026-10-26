# Formal A/B Testing & Experimentation Plan

> **Experiment ID:** EXP-WBN-COL-001  
> **Product:** Wellbeing Nutrition – Korean Marine Collagen Peptides  
> **Target Page:** [Official Product Detail Page](https://wellbeingnutrition.com/products/korean-marine-collagen-peptides)  
> **Test Structure:** Multi-Arm A/B/n Test (Control vs. Challenger A vs. Challenger B)  
> **Target Audience:** Mobile-First Visitors (Responsive Viewport Optimization)  
> **Academic Note:** Baseline ATC rate ($p_1 = 5.0\%$) is a hypothetical modeling parameter based on category averages. Live sample sizes will be calibrated against verified first-party GA4 telemetry on Day 1.

---

## 1. Experiment Overview & Problem Statements

This experiment tests solutions to three prominent heuristic friction points identified on the mobile PDP:
1. **Sensory Anxiety:** Unaddressed skepticism regarding fishy aftertaste or odor in marine collagen.
2. **Upfront Cost Friction:** A lump-sum price of ~₹1,700 displayed without transparent daily cost context (~₹68/day for 25 servings).
3. **Mobile Navigation Break:** Disappearance of the primary "Add to Cart" CTA as users scroll through educational and review sections.

### Test Variations Specification

```
┌────────────────────────────────────────────────────────────────────────┐
│ Variation 0 (Control - 33.33% Traffic Allocation)                      │
│ Current live PDP layout without modifications.                         │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ├──► Split 1:1:1
                                    │
┌───────────────────────────────────▼────────────────────────────────────┐
│ Variation 1: "Trust & Daily Value" (Challenger A - 33.33% Traffic)      │
│ • Dynamic "Only ~₹68/day (25 servings)" micro-badge beside price.      │
│ • "100% Odorless & Zero Fishy Taste Guarantee" trust pill above CTA.   │
│ • Consolidated Purity & Certification Strip (Wild Fish, FDA, FSSAI).   │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
┌───────────────────────────────────▼────────────────────────────────────┐
│ Variation 2: "Full CRO Journey" (Challenger B - 33.33% Traffic)        │
│ • Includes all elements from Variation 1, PLUS:                        │
│ • Persistent Sticky Mobile Bottom CTA bar with live pack/price sync.   │
│ • Visual Infographic: `<1000 Da` absorption vs standard collagen.      │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Measurement Framework & Metric Definitions

### 2.1 Primary Metric (Decisive Evaluative Metric)
- **Metric:** **Mobile PDP Add-to-Cart (ATC) Rate (%)**
  $$\text{ATC Rate} = \frac{\text{Unique Sessions with at least one "Add to Cart" Event on PDP}}{\text{Total Unique Mobile PDP Sessions}} \times 100$$
- **Hypothesized Direction:** Statistically significant relative lift ($\ge +10.0\%$ MDE).

### 2.2 Secondary Metrics (Diagnostic Funnel Telemetry)
- **E-Commerce Conversion Rate (CVR %):** Completed transactions / total PDP sessions.
- **Average Order Value (AOV in ₹):** Total revenue / total completed transactions.
- **Variant Selector Interaction Rate (%):** Proportion of sessions interacting with the pack/bundle toggles.
- **Scroll Depth past 50% (%):** Proportion of mobile sessions viewing scientific and mixability content.

### 2.3 Guardrail Metrics (Risk Mitigation)
- **Core Web Vitals:** Largest Contentful Paint (LCP) must remain $< 2.5\text{s}$; Cumulative Layout Shift (CLS) $< 0.1$.
- **Cart-to-Checkout Drop-off Rate (%):** Monitored to confirm that ATC intent is qualified and does not cause checkout churn.
- **Customer Support Inquiry Rate regarding Taste/Refunds:** Monitored to confirm taste reassurance does not cause mismatched expectations.

---

## 3. Statistical Power, Multiplicity Correction & Sample Size Math

### 3.1 Statistical Integrity & The Multiple Testing Problem
Because this experiment evaluates **two treatment variants against a single control** (Challenger A vs Control and Challenger B vs Control), conducting two standard independent hypothesis tests at $\alpha = 0.05$ causes an inflation of the **Family-Wise Error Rate (FWER)**:

$$\text{FWER} = 1 - (1 - \alpha)^k = 1 - (1 - 0.05)^2 = 9.75\%$$

To maintain strict statistical consistency and ensure the false positive probability across the entire experiment does not exceed 5%, a **Bonferroni multiplicity correction** is applied:

$$\alpha' = \frac{\alpha}{k} = \frac{0.05}{2} = 0.025$$

For a two-tailed test with $\alpha' = 0.025$, the critical value becomes $Z_{\alpha'/2} = Z_{0.0125} = 2.2414$ (compared to $Z_{0.025} = 1.95996$ in a simple two-sample test).

### 3.2 Statistical Assumptions
- **Baseline Conversion Rate ($p_1$):** 5.0% (Hypothetical category baseline; pending GA4 audit)
- **Overall Significance Level ($\alpha$):** 0.05 (95% experiment-wide confidence)
- **Corrected Significance Level ($\alpha'$):** 0.025 per comparison (Bonferroni)
- **Statistical Power ($1 - \beta$):** 0.80 ($Z_\beta = 0.8416$)
- **Test Directionality:** Two-tailed test

### 3.3 Two-Proportion Sample Size Formula

$$n = \frac{\left( Z_{\alpha'/2}\sqrt{2 \bar{p}(1 - \bar{p})} + Z_{\beta}\sqrt{p_1(1 - p_1) + p_2(1 - p_2)} \right)^2}{(p_2 - p_1)^2}$$

Where:
- $p_1 = 0.05$
- $p_2 = p_1 \times (1 + \text{Relative MDE})$
- $\bar{p} = \frac{p_1 + p_2}{2}$

### 3.4 Statistically Consistent Sample Size Matrix

The table below contrasts the **uncorrected two-sample sample size** against the **multiplicity-corrected sample size** required for rigorous evaluation:

| Scenario | Hypothetical Baseline ATC ($p_1$) | Relative MDE | Target ATC ($p_2$) | Unadjusted $n$ per Variant ($\alpha=0.05$) | **Multiplicity-Corrected $n$ per Variant ($\alpha'=0.025$)** | **Total Experiment Sample (3 Arms)** |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Conservative** | 5.0% | +8.0% | 5.40% | 48,364 | **58,569** | **175,707** |
| **Moderate (Recommended)** | 5.0% | +10.0% | 5.50% | 31,234 | **37,824** | **113,472** |
| **Aggressive** | 5.0% | +15.0% | 5.75% | 14,193 | **17,188** | **51,564** |

> [!IMPORTANT]
> **Operational Protocol:**  
> The sample sizes above are illustrative based on a 5.0% hypothetical baseline. Before launching the live experiment, the true 30-day baseline ATC rate must be extracted from Google Analytics 4, and the sample size table recalculated using the formula above.

---

## 4. Test Duration & Seasonal Governance

To prevent statistical distortions from external factors, the experiment adheres to three operational rules:

1. **Minimum Duration Rule (14 Days / 2 Full Business Cycles):**  
   The experiment must run for a minimum of 14 full consecutive days regardless of whether statistical significance is reached early. This controls for:
   - Day-of-week purchasing variance (weekday vs. weekend buying patterns).
   - Novelty bias from returning visitors exploring new UI elements.
2. **Maximum Duration Rule (28 Days / 4 Weeks):**  
   If a variant has not demonstrated a statistically significant lift within 28 days, the test is concluded as inconclusive. Running tests beyond 4 weeks introduces cookie dilution, browser cache clearing, and seasonality noise.
3. **Continuous Monitoring Without Early Peeking:**  
   Statistical significance must be evaluated only at the scheduled sample size milestones or via a pre-specified sequential testing methodology (e.g., Robbins's Always Valid p-values) to prevent Type I error inflation.

---

## 5. Technical Implementation & Quality Assurance Checklist

### 5.1 Pre-Launch Verification
- [ ] **Anti-Flicker Implementation:** Verify that variation injection utilizes server-side edge routing or synchronous CSS hide rules to prevent Flash of Unstyled Content (FOUC).
- [ ] **Cross-Device Telemetry QA:**
  - Fire `pdp_view` event with dimension `test_variant = control | challenger_a | challenger_b`.
  - Fire `pdp_atc_click` event linked to active variant and selected pack.
  - Fire `sticky_cta_impression` and `sticky_cta_click` for Challenger B.
- [ ] **Viewport Boundary Testing:** Test rendering across mobile viewports (360px, 390px, 414px) and verify sticky bar does not overlap WhatsApp/chat widgets or cookie notices.

### 5.2 Rollback & Abort Thresholds
The experiment will be paused immediately if:
- Technical JavaScript errors exceed 0.5% of sessions on any variant.
- Mobile page load speed (LCP) degrades by $> 400\text{ms}$.
- Cart-to-checkout progression shows a statistically significant decrease ($p < 0.01$).
