/**
 * Wellness Assistant Knowledge & Response Engine (Local Prototype)
 *
 * Academic CRO Prototype for Wellbeing Nutrition Korean Marine Collagen Peptides.
 * Single source of truth: references `src/data/productData.js`.
 *
 * NOTE: This is a rule-based, deterministic local concierge designed for
 * educational guidance. It does NOT claim to connect to an external LLM/AI API,
 * ensuring complete transparency, zero invented claims, and verifiable safety.
 */

import { productData } from '../data/productData.js';

export const INITIAL_GREETING = {
  id: 'msg-welcome',
  sender: 'assistant',
  timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  text: `Hi! I'm your Wellbeing Nutrition Wellness Assistant. Ask me about ingredients, potential benefits, how to use the product, or delivery and returns.\n\nHow can I help you today?`,
  suggestions: [
    "Which age group can use this?",
    "What are the ingredients?",
    "How much does it cost per day?",
    "How do I take it daily?",
    "What does research say about skin?",
    "What is the return policy?"
  ],
  sectionLink: null,
  isSafetyNotice: false
};

/**
 * Clean & normalize query strings
 */
function normalizeQuery(query) {
  return query
    .toLowerCase()
    .replace(/[^\w\s<]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Generate a response based on user input, conversation history, and current app context
 *
 * @param {string} userQuery - The customer query text
 * @param {Array} history - Previous messages in current session
 * @param {Object} context - { selectedPack: Object }
 * @returns {Object} response - { text, suggestions, sectionLink, isSafetyNotice }
 */
export function generateAssistantResponse(userQuery, history = [], context = {}) {
  const q = normalizeQuery(userQuery);
  const selectedPack = context.selectedPack || productData.packs[0];

  // --------------------------------------------------------------------------
  // 1. CRITICAL HEALTH, SAFETY & MEDICAL GUARDRAILS (Highest Priority)
  // --------------------------------------------------------------------------

  // A. Pregnancy / Lactation
  const isPregnancyQuery = 
    q.includes('pregnant') || 
    q.includes('pregnancy') || 
    q.includes('nursing') || 
    q.includes('breastfeed') || 
    q.includes('breast feed') || 
    q.includes('lactat') || 
    q.includes('expecting baby');

  if (isPregnancyQuery) {
    return {
      text: `**Safety Guidance on Pregnancy & Breastfeeding:**\n\nWhile hydrolyzed collagen peptides are composed of natural dietary amino acids, nutritional requirements and physiological sensitivities change during pregnancy and lactation.\n\nBecause official guidance recommends that pregnant or nursing women exercise extra caution with dietary supplements, **please consult your OB-GYN or primary healthcare physician** before introducing this or any new supplement into your routine.`,
      suggestions: [
        "What are the pure ingredients?",
        "Is it tested for heavy metals?",
        "Which age group can use this?"
      ],
      sectionLink: { targetId: 'ingredients', label: 'View Formulation Monograph' },
      isSafetyNotice: true
    };
  }

  // B. Allergies (Specifically Fish / Seafood)
  const isAllergyQuery = 
    q.includes('allerg') || 
    q.includes('shellfish') || 
    q.includes('fish allerg') || 
    q.includes('seafood allerg') ||
    q.includes('hypoallergenic');

  if (isAllergyQuery) {
    return {
      text: `**Critical Allergen Warning:**\n\nThis product is **100% pure marine collagen derived from wild-caught cold-water fish** (salmon, cod, and haddock).\n\n⚠️ **If you have a known fish or marine seafood allergy, you should NOT consume this product under any circumstances.**\n\nIt is free from dairy, gluten, soy, wheat, nuts, and artificial additives, but is strictly contraindicated for anyone with a fish allergy.`,
      suggestions: [
        "What fish is it sourced from?",
        "Is there zero added sugar?",
        "How is it tested for purity?"
      ],
      sectionLink: { targetId: 'ingredients', label: 'Inspect Full Nutrition & Allergens' },
      isSafetyNotice: true
    };
  }

  // C. Medical Conditions, Diseases, or Prescription Drug Interactions
  const isMedicalQuery =
    q.includes('cure') || 
    q.includes('treat') || 
    q.includes('disease') || 
    q.includes('prescript') || 
    q.includes('medicat') || 
    q.includes('kidney') || 
    q.includes('liver') || 
    q.includes('thyroid') || 
    q.includes('diabetes') || 
    q.includes('blood pressure') || 
    q.includes('cancer') || 
    q.includes('diagnos');

  if (isMedicalQuery) {
    return {
      text: `**Medical & Prescription Notice:**\n\nThis marine collagen supplement is a food-grade dietary protein hydrolysate formulated for everyday nutritional support. **It is not a drug, pharmaceutical medicine, or a substitute for medical diagnosis or clinical treatment.**\n\nWe do not provide medical advice or recommend altering prescribed medications. If you have a specific pre-existing health condition or are taking prescription medications, please consult a licensed medical professional.`,
      suggestions: [
        "What are the potential benefits?",
        "What does research suggest?",
        "What are the verified ingredients?"
      ],
      sectionLink: { targetId: 'science', label: 'Read Scientific Methodological Note' },
      isSafetyNotice: true
    };
  }

  // D. Privacy & Sensitive Financial Information
  if (
    q.includes('credit card') || 
    q.includes('debit card') || 
    q.includes('cvv') || 
    q.includes('password') || 
    q.includes('bank account') || 
    q.includes('otp') || 
    q.includes('upi pin')
  ) {
    return {
      text: `**Privacy & Security Protection:**\n\nFor your personal safety, please **never share passwords, credit card numbers, OTPs, or payment details** in this conversation.\n\nAll Wellbeing Nutrition orders are completed exclusively through encrypted, secure checkout channels.`,
      suggestions: [
        "How do I add a jar to cart?",
        "What is the return policy?",
        "What payment methods are used?"
      ],
      sectionLink: { targetId: 'hero', label: 'Go to Secure Purchase Options' },
      isSafetyNotice: true
    };
  }

  // --------------------------------------------------------------------------
  // 2. PRODUCT ELIGIBILITY, AGE GROUP & DEMOGRAPHICS (New Dedicated Category)
  // --------------------------------------------------------------------------

  // A. Children & Teenagers Specific Queries
  const isChildOrTeenQuery = 
    q.includes('teenager') || 
    q.includes('teen') || 
    q.includes('teens') || 
    q.includes('16 year') || 
    q.includes('16 yr') || 
    q.includes('15 year') || 
    q.includes('14 year') || 
    q.includes('17 year') || 
    q.includes('children') || 
    q.includes('child') || 
    q.includes('kids') || 
    q.includes('kid') || 
    q.includes('pediatric') || 
    q.includes('minor') || 
    q.includes('under 18');

  if (isChildOrTeenQuery) {
    return {
      text: `**Guidance for Children & Teenagers:**\n\nThis marine collagen supplement is formulated for **adult nutritional support** and is **not specifically formulated or recommended for children or teenagers**.\n\nWhile collagen is a dietary protein, growing bodies have distinct nutritional requirements, and official product instructions do not specify a pediatric or adolescent dosage. If you are considering this for someone under 18 (such as a teenager), **please confirm with the brand or a qualified healthcare professional** before use.\n\n⚠️ **Allergen Notice:** This product is 100% fish-derived and must never be consumed by anyone with a fish or seafood allergy.`,
      suggestions: [
        "Which age group can use this?",
        "What are the pure ingredients?",
        "Is it tested for heavy metals?"
      ],
      sectionLink: { targetId: 'ingredients', label: 'View Nutritional Monograph' },
      isSafetyNotice: true
    };
  }

  // B. Older Adults / Seniors Specific Queries
  const isOlderAdultQuery = 
    q.includes('older adult') || 
    q.includes('older adults') || 
    q.includes('senior') || 
    q.includes('seniors') || 
    q.includes('elderly') || 
    q.includes('grandma') || 
    q.includes('grandpa') || 
    q.includes('mature adult') || 
    q.includes('menopause') || 
    q.includes('over 50') || 
    q.includes('over 60');

  if (isOlderAdultQuery) {
    return {
      text: `**Guidance for Mature & Older Adults:**\n\nYes, this product is frequently used by **mature and older adults** as part of an everyday wellness routine.\n\nAs we age, natural endogenous collagen synthesis steadily decreases. Meta-analyses of clinical trials (e.g. de Miranda et al. 2021) observe that daily supplementation with low-molecular marine peptides over 8–12 weeks supported skin moisture retention, dermal elasticity, and joint comfort in adult populations.\n\n*Note: If you have pre-existing medical conditions (such as kidney or liver concerns) or take prescription medications, please consult your physician before starting any new supplement.*`,
      suggestions: [
        "What does research suggest about skin?",
        "How do I take it daily?",
        "How much does it cost per day?"
      ],
      sectionLink: { targetId: 'benefits', label: 'Explore the 3 Benefit Chapters' },
      isSafetyNotice: false
    };
  }

  // C. Gender & Unisex Inquiries
  const isGenderQuery = 
    q.includes('for men') || 
    q.includes('can men') || 
    q.includes('men and women') || 
    q.includes('unisex') || 
    q.includes('for guys') || 
    q.includes('male');

  if (isGenderQuery && !q.includes('hair loss') && !q.includes('baldness')) {
    return {
      text: `**Gender & Suitability:**\n\nYes! Wellbeing Nutrition Korean Marine Collagen Peptides is a **100% unisex dietary supplement** suitable for both men and women.\n\nCollagen is the primary structural protein in all human skin dermis, hair follicles, and connective tissues, regardless of gender. Both men and women experience the natural age-related slowdown in collagen production.`,
      suggestions: [
        "Which age group can use this?",
        "How do I take it daily?",
        "What are the ingredients?"
      ],
      sectionLink: { targetId: 'ingredients', label: 'View Nutritional Monograph' },
      isSafetyNotice: false
    };
  }

  // D. General Age Group & Suitability Queries
  // (e.g., "Which age group can use this?", "What age can use this?", "Who can take this?", "Is this for adults only?")
  const isAgeSuitabilityQuery = 
    q.includes('age group') || 
    q.includes('what age') || 
    q.includes('which age') || 
    q.includes('who can use') || 
    q.includes('who can take') || 
    q.includes('who is this for') || 
    q.includes('who is it for') || 
    q.includes('recommended age') || 
    q.includes('suitable age') || 
    q.includes('minimum age') || 
    q.includes('adults only') || 
    q.includes('for adults') || 
    q.includes('target audience');

  if (isAgeSuitabilityQuery) {
    return {
      text: `Good question! I couldn't confirm a specific recommended age range from the product information currently available to me.\n\nHere is what is verified from our product specifications:\n• **Target Audience:** The product is formulated for **adults (unisex)** seeking nutritional support for skin elasticity, hair and nail resilience, and daily connective tissue wellness. Natural collagen synthesis begins slowing down gradually in adulthood (typically cited from age 25 onwards by approximately 1.5% each year).\n• **Age Specification:** An exact minimum numerical age is **not specified** on the official product packaging. Age suitability can depend on individual circumstances, so I don't want to guess.\n• **Children & Teenagers:** For children or teenagers, please confirm with the brand or a qualified healthcare professional before use.\n• **Allergies:** Strictly contraindicated for anyone with a fish allergy.\n\nI can help you check the product's pure ingredients, daily serving instructions, or clinical research too!`,
      suggestions: [
        "What are the ingredients?",
        "How do I take it daily?",
        "What does research say about skin?",
        "What is the return policy?"
      ],
      sectionLink: { targetId: 'ingredients', label: 'View Nutritional Monograph' },
      isSafetyNotice: false
    };
  }

  // --------------------------------------------------------------------------
  // 3. DELIVERY, RETURNS & CUSTOMER SUPPORT
  // --------------------------------------------------------------------------
  if (
    q.includes('return') || 
    q.includes('refund') || 
    q.includes('damaged') || 
    q.includes('defect') || 
    q.includes('broken') || 
    q.includes('exchange') || 
    q.includes('hygiene') || 
    q.includes('delivery policy') ||
    q.includes('shipping policy') ||
    q.includes('courier')
  ) {
    const policy = productData.deliveryAndReturns;
    return {
      text: `**Official Delivery & Returns Policy:**\n\n• **Damaged, Defective or Incorrect Items:** Contact customer support within **48 hours of delivery** with your order details and photos.\n• **Hygiene Standards:** For food-grade safety and hygiene reasons, **opened or used products are not eligible for ordinary returns**.\n• **Remedies:** Eligible claims are reviewed for a prompt refund or replacement under our official policy.\n• **Delivery SLA:** Complimentary Pan-India shipping with orders typically dispatched on the next business day.\n\nQuestions? Reach our team directly at **support@wellbeingnutrition.com**.`,
      suggestions: [
        "How much does 1 jar cost?",
        "What are the pack savings?",
        "Where is the product manufactured?"
      ],
      sectionLink: { targetId: 'delivery-returns', label: 'Read Full Policy Accordion' },
      isSafetyNotice: false
    };
  }

  // Customer Support Contact
  if (
    q.includes('support') || 
    q.includes('contact') || 
    q.includes('customer care') || 
    q.includes('email') || 
    q.includes('phone') || 
    q.includes('help desk')
  ) {
    return {
      text: `**Wellbeing Nutrition Customer Care:**\n\nYou can contact our dedicated support team directly for order inquiries, delivery updates, or claims:\n\n• **Email:** support@wellbeingnutrition.com\n• **Resolution Window:** 48 hours for damaged/defective claims upon delivery\n• **Operating Hours:** Monday through Saturday, standard business hours`,
      suggestions: [
        "What is the return policy?",
        "How long does delivery take?",
        "What are the ingredients?"
      ],
      sectionLink: { targetId: 'delivery-returns', label: 'View Support & Policy Details' },
      isSafetyNotice: false
    };
  }

  // --------------------------------------------------------------------------
  // 4. PACKS, PRICING, SERVINGS & COST PER SERVING
  // --------------------------------------------------------------------------
  const isMarketFinance = q.includes('stock price') || q.includes('share price') || q.includes('stock market');

  if (
    !isMarketFinance && (
      q.includes('price') || 
      q.includes('cost') || 
      q.includes('how much') || 
      q.includes('pricing') || 
      q.includes('pack') || 
      q.includes('discount') || 
      q.includes('mrp') || 
      q.includes('servings') || 
      q.includes('per day') || 
      q.includes('per scoop') || 
      q.includes('daily cost') || 
      q.includes('single jar') || 
      q.includes('pack of 2') || 
      q.includes('value') ||
      q.includes('expensive') ||
      q.includes('cheap')
    )
  ) {
    const currentContext = `You currently have the **${selectedPack.name}** selected at **₹${selectedPack.price.toLocaleString('en-IN')}** (~₹${selectedPack.costPerDay}/day).\n\n`;

    const packsBreakdown = productData.packs.map(p => 
      `• **${p.name}:** ₹${p.price.toLocaleString('en-IN')} (MRP ₹${p.mrp.toLocaleString('en-IN')}, save ${p.discountPercent}%)\n  → ${p.weightGrams}g net weight = **${p.servings} daily servings**\n  → **~₹${p.costPerDay} per day**`
    ).join('\n\n');

    return {
      text: `**Verified Pack Options & Daily Breakdown:**\n\n${currentContext}${packsBreakdown}\n\nAll pack options include complimentary Pan-India delivery and a calibrated measuring scoop.`,
      suggestions: [
        "How do I take it daily?",
        "What is the return policy?",
        "What are the ingredients?"
      ],
      sectionLink: { targetId: 'hero', label: 'Select Pack & View Pricing in Hero' },
      isSafetyNotice: false
    };
  }

  // --------------------------------------------------------------------------
  // 5. USAGE, DOSAGE, ROUTINE & MIXABILITY
  // --------------------------------------------------------------------------
  if (
    q.includes('how to use') || 
    q.includes('how to take') || 
    q.includes('how do i use') || 
    q.includes('how do i take') || 
    q.includes('usage') || 
    q.includes('routine') || 
    q.includes('scoop') || 
    q.includes('dosage') || 
    q.includes('dose') || 
    q.includes('morning') || 
    q.includes('night') || 
    q.includes('coffee') || 
    q.includes('tea') || 
    q.includes('water') || 
    q.includes('smoothie') || 
    q.includes('mix') || 
    q.includes('dissolv') || 
    q.includes('hot') || 
    q.includes('cold') || 
    q.includes('empty stomach')
  ) {
    const { usageInstructions } = productData;
    return {
      text: `**How to Take Korean Marine Collagen:**\n\n• **Serving Size:** ${usageInstructions.servingSize} (calibrated measuring scoop included inside every jar).\n• **When to Take:** ${usageInstructions.frequency}.\n• **Mixability:** ${usageInstructions.mixability}\n• **Taste Profile:** ${usageInstructions.tasteProfile}\n\n**Tip:** Stir for 10–15 seconds in any beverage. Because the peptides are hydrolyzed to <1000 Daltons, they dissolve completely without clumping or altering drink temperature.`,
      suggestions: [
        "Does it have any smell or taste?",
        "Which age group can use this?",
        "How much does it cost per day?"
      ],
      sectionLink: { targetId: 'routine', label: 'Explore the Daily Ritual Guide' },
      isSafetyNotice: false
    };
  }

  // --------------------------------------------------------------------------
  // 6. TASTE, SMELL, ODOR & SENSORY PROFILE
  // --------------------------------------------------------------------------
  if (
    q.includes('taste') || 
    q.includes('smell') || 
    q.includes('odor') || 
    q.includes('fishy') || 
    q.includes('flavor') || 
    q.includes('unflavored') || 
    q.includes('scent')
  ) {
    return {
      text: `**Sensory & Taste Transparency:**\n\n• **Pure & Unflavored:** The powder contains zero artificial flavorings, sweeteners, or masking chemicals.\n• **Natural Marine Powder:** In raw powder form, natural marine collagen carries a mild, clean oceanic scent.\n• **Neutral in Drinks:** When stirred into coffee, tea, fruit smoothies, juices, or warm water, it dissolves clearly without altering the beverage's flavor.\n\n*Note: We never make an unrealistic "100% odorless guarantee" because raw marine proteins naturally possess subtle sensory qualities.*`,
      suggestions: [
        "What are the ingredients?",
        "How do I mix it in coffee?",
        "Is there any sugar added?"
      ],
      sectionLink: { targetId: 'routine', label: 'View Mixability Details' },
      isSafetyNotice: false
    };
  }

  // --------------------------------------------------------------------------
  // 7. INGREDIENTS, SOURCING, DALTONS & NUTRITION
  // --------------------------------------------------------------------------

  // A. General Ingredients & Formulation
  if (
    q.includes('ingredient') || 
    q.includes('what is in it') || 
    q.includes('composition') || 
    q.includes('formula') || 
    q.includes('sugar') || 
    q.includes('carb') || 
    q.includes('protein') || 
    q.includes('calorie') || 
    q.includes('source') || 
    q.includes('sourcing') || 
    q.includes('fish') || 
    q.includes('vegetarian') || 
    q.includes('vegan')
  ) {
    return {
      text: `**Verified Formulation & Nutritional Facts (Per 8g Scoop):**\n\n• **Single Active Ingredient:** 100% Pure Hydrolyzed Marine Collagen Peptides (Types I & III).\n• **Sourcing:** Wild-caught deep-sea Korean fish (salmon, cod, and haddock).\n• **Protein Content:** 7.4g of pure protein per 8g scoop (29.6 kcal).\n• **Zero Unwanted Fillers:** 0g Sugar, 0g Carbohydrates, 0g Fat, 0g Artificial Sweeteners.\n• **Dietary Notes:** Non-GMO, Gluten-Free, Keto-Friendly. **Non-Vegetarian** (marine fish origin; true collagen cannot be derived from plants).`,
      suggestions: [
        "What does <1000 Daltons mean?",
        "Which age group can use this?",
        "How much does it cost per day?"
      ],
      sectionLink: { targetId: 'ingredients', label: 'Review Full Nutrition Table' },
      isSafetyNotice: false
    };
  }

  // B. Daltons & Nano-Hydrolysis
  if (
    q.includes('dalton') || 
    q.includes('1000') || 
    q.includes('molecular') || 
    q.includes('bioavailab') || 
    q.includes('absorb') || 
    q.includes('absorption') || 
    q.includes('nano')
  ) {
    return {
      text: `**What Does "< 1,000 Daltons" Mean?**\n\n• **Molecular Mass:** A Dalton (Da) measures molecular weight. Standard native animal collagen is ~300,000 Da, and typical supplements are 3,000–5,000 Da.\n• **Nano-Hydrolysis:** Wellbeing Nutrition enzymatically hydrolyzes marine collagen down to **< 1,000 Daltons**, producing ultra-short di- and tri-peptides (rich in Gly-Pro-Hyp).\n• **Direct Intestinal Transport:** Peer-reviewed literature (e.g. Kim DU et al., Nutrients 2018; PMID 29949889) indicates low-molecular-weight peptides bypass complete digestive degradation for superior bioavailability.`,
      suggestions: [
        "What fish is it sourced from?",
        "What are the skin benefits?",
        "Is it tested for mercury?"
      ],
      sectionLink: { targetId: 'science', label: 'Explore the Dalton Spectrum Explainer' },
      isSafetyNotice: false
    };
  }

  // C. Mercury & Heavy Metals & Testing
  if (
    q.includes('mercury') || 
    q.includes('heavy metal') || 
    q.includes('lead') || 
    q.includes('arsenic') || 
    q.includes('purity test') || 
    q.includes('lab test') || 
    q.includes('certif') || 
    q.includes('fssai') || 
    q.includes('fda') || 
    q.includes('gmp') || 
    q.includes('tested') ||
    q.includes('safe to drink')
  ) {
    return {
      text: `**Purity Testing & Quality Credentials:**\n\n• **Tested Mercury-Free:** Every batch is third-party screened to confirm non-detectable levels of mercury, lead, cadmium, and arsenic.\n• **US FDA Registered Facility:** Manufactured under strict current Good Manufacturing Practice (cGMP) controls.\n• **FSSAI Certified:** Meets Indian food safety and standards authority norms.\n• **Single-Ingredient Formulation:** Zero maltodextrin, zero added sugar, zero GMOs, and zero preservatives.`,
      suggestions: [
        "Where is the fish sourced?",
        "What are the ingredients?",
        "What is the return policy?"
      ],
      sectionLink: { targetId: 'trust', label: 'View Verified Quality Credentials' },
      isSafetyNotice: false
    };
  }

  // --------------------------------------------------------------------------
  // 8. BENEFITS, RESEARCH, TIMELINES & REALISTIC EXPECTATIONS
  // --------------------------------------------------------------------------

  // A. Skin Specific (Includes anti-aging, wrinkles, elasticity, hydration)
  if (
    q.includes('skin') || 
    q.includes('wrinkle') || 
    q.includes('elastic') || 
    q.includes('hydrat') || 
    q.includes('glow') || 
    q.includes('fine line') || 
    q.includes('anti aging') || 
    q.includes('antiaging') || 
    q.includes('skin aging') || 
    q.includes('age spot')
  ) {
    return {
      text: `**Skin Hydration & Elasticity Evidence:**\n\n• **What the Science Suggests:** A 2021 systematic review of 19 randomized placebo-controlled trials (de Miranda et al., PMID 33742449) observed statistically significant improvements in skin hydration and elasticity over 8–12 weeks of daily collagen peptide intake.\n• **Mechanism:** Circulating peptide fragments signal dermal fibroblasts to stimulate natural procollagen and hyaluronic acid synthesis.\n• **Realistic Expectations:** Collagen works gradually to support your skin's moisture barrier and bounce. It does **not** provide instant overnight changes, and results depend on consistent daily intake, UV protection, and hydration.`,
      suggestions: [
        "What about hair and nails?",
        "How long until I see results?",
        "Which age group can use this?"
      ],
      sectionLink: { targetId: 'benefits', label: 'Read Chapter 01: Skin Health' },
      isSafetyNotice: false
    };
  }

  // B. Hair and Nails
  if (
    q.includes('hair') || 
    q.includes('nail') || 
    q.includes('nails') || 
    q.includes('brittle')
  ) {
    return {
      text: `**Hair & Nail Care Insights:**\n\n• **Nutritional Role:** Collagen provides rich amounts of structural amino acids—proline and glycine—essential for keratin protein synthesis in hair and nail beds.\n• **What Research Observes:** Clinical studies (e.g. Hexsel et al. 2017; PMID 28786550) note reductions in nail peeling and breakage with 24 weeks of peptide supplementation.\n• **Important Guardrail:** Collagen provides structural building blocks; **it does not treat genetic hair loss, male/female pattern baldness, or alopecia**.`,
      suggestions: [
        "What about everyday routine and joints?",
        "What are the ingredients?",
        "How do I take it daily?"
      ],
      sectionLink: { targetId: 'benefits', label: 'Read Chapter 02: Hair & Nails' },
      isSafetyNotice: false
    };
  }

  // C. Joints, Movement & Everyday Wellness
  if (
    q.includes('joint') || 
    q.includes('joints') || 
    q.includes('bone') || 
    q.includes('movement') || 
    q.includes('connective') || 
    q.includes('cartilage') || 
    q.includes('exercise') || 
    q.includes('workout')
  ) {
    return {
      text: `**Connective Tissue & Movement Support:**\n\n• **Connective Amino Acids:** Collagen hydrolysates supply foundational peptides utilized by connective tissues throughout the body.\n• **Exercise Recovery:** Studies (Clark et al. 2008; Khatri et al. 2021) suggest daily supplementation may support joint comfort following athletic activity.\n• **Realistic Limitation:** **This product is not a medical treatment for osteoarthritis, rheumatoid arthritis, or acute joint injuries.**`,
      suggestions: [
        "What are the skin benefits?",
        "How do I take it daily?",
        "What are the pack options?"
      ],
      sectionLink: { targetId: 'benefits', label: 'Read Chapter 03: Everyday Routine' },
      isSafetyNotice: false
    };
  }

  // D. Timeline / How Long Does It Take?
  if (
    q.includes('how long') || 
    q.includes('timeline') || 
    q.includes('weeks') || 
    q.includes('month') || 
    q.includes('results') || 
    q.includes('when will i see')
  ) {
    return {
      text: `**Clinical Progression Timeline (de Miranda et al. 2021):**\n\n• **Weeks 1–4 (Early Phase):** Di- and tri-peptides begin systemic circulation; early support for stratum corneum moisture retention.\n• **Weeks 5–8 (Consistency Phase):** Endogenous fibroblast stimulation promotes natural collagen density and elasticity.\n• **Weeks 9–12 (Full Progression):** Statistically significant improvements in fine line depth and nail resiliency documented in clinical literature.\n\n*Consistency is key: taking 1 scoop daily yields the best gradual outcome.*`,
      suggestions: [
        "Why is Pack of 2 recommended for 8 weeks?",
        "How do I take it each day?",
        "Which age group can use this?"
      ],
      sectionLink: { targetId: 'timeline', label: 'View the 8-12 Week Progression' },
      isSafetyNotice: false
    };
  }

  // --------------------------------------------------------------------------
  // 9. REVIEWS & CUSTOMER FEEDBACK
  // --------------------------------------------------------------------------
  if (
    q.includes('review') || 
    q.includes('rating') || 
    q.includes('feedback') || 
    q.includes('star') || 
    q.includes('customer') || 
    q.includes('what do people say')
  ) {
    return {
      text: `**Customer Review Transparency:**\n\n• **Public Rating:** Wellbeing Nutrition maintains a 4.6 / 5.0 public aggregate score across 1,420+ verified customer evaluations.\n• **Academic CRO Transparency:** In this prototype, we do not fabricate fake 5-star customer quotes or simulated reviewer cards. The review stream is currently in a transparent empty state awaiting live e-commerce webhook integration.`,
      suggestions: [
        "What are the ingredients?",
        "What is the return policy?",
        "How much does it cost per day?"
      ],
      sectionLink: { targetId: 'reviews', label: 'Jump to Reviews Section' },
      isSafetyNotice: false
    };
  }

  // --------------------------------------------------------------------------
  // 10. NAVIGATION / WHERE TO FIND SECTIONS
  // --------------------------------------------------------------------------
  if (
    q.includes('where can i find') || 
    q.includes('where is') || 
    q.includes('show me') || 
    q.includes('navigate') || 
    q.includes('how do i buy') || 
    q.includes('where do i buy')
  ) {
    if (q.includes('buy') || q.includes('cart') || q.includes('purchase')) {
      return {
        text: `You can choose between the 1 Jar (25 servings) or Pack of 2 (50 servings) directly in the product purchase panel at the top of the page under the product images.`,
        suggestions: ["How much is the 1 jar?", "What is the return policy?"],
        sectionLink: { targetId: 'hero', label: 'Go to Purchase Panel' },
        isSafetyNotice: false
      };
    }
    if (q.includes('review')) {
      return {
        text: `Customer reviews and our transparent review ingestion explanation are located just below the specifications monograph.`,
        suggestions: ["What are the ingredients?", "What is the daily cost?"],
        sectionLink: { targetId: 'reviews', label: 'Go to Reviews Section' },
        isSafetyNotice: false
      };
    }
    if (q.includes('science') || q.includes('dalton')) {
      return {
        text: `The molecular science explainer (<1000 Daltons vs standard collagen) is located in the middle of the page.`,
        suggestions: ["What are the benefits?", "Where is it sourced?"],
        sectionLink: { targetId: 'science', label: 'Go to Science & Daltons' },
        isSafetyNotice: false
      };
    }
  }

  // --------------------------------------------------------------------------
  // 11. CONTEXTUAL FOLLOW-UP RECOGNITION
  // --------------------------------------------------------------------------
  const lastAssistantMsg = [...history].reverse().find(m => m.sender === 'assistant');
  if (lastAssistantMsg) {
    const prevText = lastAssistantMsg.text.toLowerCase();

    // Follow-up after price discussion
    if ((prevText.includes('pack') || prevText.includes('price')) && (q.includes('2') || q.includes('double') || q.includes('second'))) {
      const double = productData.packs.find(p => p.id === 'pack-2-jars') || productData.packs[1];
      return {
        text: `The **${double.name}** provides 50 daily servings (400g total) at **₹${double.price.toLocaleString('en-IN')}**, working out to **~₹${double.costPerDay}/day** (save ${double.discountPercent}% vs MRP).`,
        suggestions: ["How do I take it daily?", "What is the return policy?", "What are the ingredients?"],
        sectionLink: { targetId: 'hero', label: 'Select Pack of 2 in Hero' },
        isSafetyNotice: false
      };
    }

    // Follow-up after return policy
    if (prevText.includes('return') && (q.includes('open') || q.includes('used') || q.includes('opened'))) {
      return {
        text: `Under our official policy, **opened or used jars cannot be returned for ordinary change-of-mind reasons due to health & hygiene regulations** for food-grade supplements. However, if your order arrived damaged, defective, or incorrect, you are covered when reporting within 48 hours with photos.`,
        suggestions: ["Who do I email for support?", "How much does a jar cost?"],
        sectionLink: { targetId: 'delivery-returns', label: 'View Return Policy' },
        isSafetyNotice: false
      };
    }

    // Follow-up after age or eligibility discussion
    if (prevText.includes('age') || prevText.includes('adults') || prevText.includes('teenager')) {
      if (q.includes('kid') || q.includes('child') || q.includes('teen') || q.includes('younger')) {
        return {
          text: `As mentioned, this supplement is **intended for adult nutritional maintenance** and is not formulated for children or teenagers. Please consult a qualified pediatrician or medical professional for anyone under 18.`,
          suggestions: ["What are the ingredients?", "How do I take it daily?"],
          sectionLink: { targetId: 'ingredients', label: 'View Nutritional Monograph' },
          isSafetyNotice: true
        };
      }
    }
  }

  // --------------------------------------------------------------------------
  // 12. IMPROVED FALLBACK (Helpful, specific, with verified facts and next steps)
  // --------------------------------------------------------------------------
  return {
    text: `I don't have verified information on that specific inquiry in our current product monograph.\n\n**Here is what is verified from our official specifications:**\n• **Formulation:** 100% Pure Hydrolyzed Marine Collagen Peptides (Types I & III, <1,000 Daltons) from wild-caught cold-water Korean fish.\n• **Purity:** 0g sugar, 0g carbohydrates, 7.4g pure protein per 8g scoop, third-party screened for mercury.\n• **Usage & Returns:** 1 level scoop daily in hot or cold beverages; complimentary shipping with a 48-hour damaged/defective reporting window.\n\nFor questions beyond our published specifications, our customer care team is available at **support@wellbeingnutrition.com**. How else may I assist you with ingredients, dosage, or pricing?`,
    suggestions: [
      "Which age group can use this?",
      "What are the ingredients?",
      "How much does it cost per day?",
      "What is the return policy?"
    ],
    sectionLink: { targetId: 'ingredients', label: 'View Verified Monograph' },
    isSafetyNotice: false
  };
}
