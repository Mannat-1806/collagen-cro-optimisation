/**
 * Wellbeing Nutrition Korean Marine Collagen Peptides
 * Product & Structured Knowledge Base Data
 * 
 * Note: Captured reference prices and specifications from Phase 1 audit (Oct 25, 2026).
 * This data is structured for local deterministic prototype demonstration.
 */

window.PRODUCT_DATA = {
  metadata: {
    id: "7067936915536",
    sku: "WBNCL",
    title: "Pure Korean Marine Collagen Peptides",
    subtitle: "Hydrolyzed Type I & III Marine Peptides (8 g per serving) for Skin Hydration, Hair Strength & Joint Support",
    flavor: "Unflavored Powder",
    badge: "100% Korean Deep-Sea Sourced",
    weightGrams: 200,
    servingSizeGrams: 8,
    servingsPerTub: 25,
    mrp: 1799.00,
    sellingPrice: 1745.00,
    currency: "INR",
    currencySymbol: "₹",
    rating: 4.74,
    reviewCount: 571,
    fssaiLicense: "10019022009134",
    shelfLifeMonths: 24,
    origin: "India (Marine Collagen Peptides imported from South Korea)",
    dietaryClassification: "Non-Vegetarian (Marine Fish)",
    manufacturer: "Nutritionalab Pvt. Ltd., Lower Parel West, Mumbai 400013"
  },

  packs: [
    {
      id: "pack_1",
      sku: "WBNCL",
      title: "Pack of 1",
      tubs: 1,
      weightGrams: 200,
      servings: 25,
      price: 1745.00,
      mrp: 1799.00,
      discountPct: 3,
      pricePerServing: 69.80,
      durationDays: 25,
      durationLabel: "25-Day Supply (1 scoop/day)",
      badge: "Standard Trial",
      popular: false,
      image: "assets/marine-p1.jpg"
    },
    {
      id: "pack_2",
      sku: "WBNCL-2",
      title: "Pack of 2",
      tubs: 2,
      weightGrams: 400,
      servings: 50,
      price: 3418.00,
      mrp: 3598.00,
      discountPct: 5,
      pricePerServing: 68.36,
      durationDays: 50,
      durationLabel: "50-Day Supply (1 scoop/day)",
      badge: "Most Popular · Complete Routine",
      popular: true,
      image: "assets/marine-p2.jpg"
    },
    {
      id: "pack_3",
      sku: "WBNCL-3",
      title: "Pack of 3",
      tubs: 3,
      weightGrams: 600,
      servings: 75,
      price: 5019.00,
      mrp: 5397.00,
      discountPct: 7,
      pricePerServing: 66.92,
      durationDays: 75,
      durationLabel: "75-Day Supply (1 scoop/day)",
      badge: "Value Multi-Pack",
      popular: false,
      image: "assets/marine-p3.jpg"
    },
    {
      id: "pack_4",
      sku: "WBNCL-4",
      title: "Pack of 4",
      tubs: 4,
      weightGrams: 800,
      servings: 100,
      price: 6476.00,
      mrp: 7196.00,
      discountPct: 10,
      pricePerServing: 64.76,
      durationDays: 100,
      durationLabel: "100-Day Supply (1 scoop/day)",
      badge: "Maximum Savings",
      popular: false,
      image: "assets/marine-p3.jpg"
    }
  ],

  starterConcept: {
    title: "14-Day Taste & Routine Starter Pack",
    weightGrams: 112,
    servings: 14,
    proposedPrice: 999.00,
    pricePerServing: 71.35,
    repeatVoucherValue: 200.00,
    badge: "Concept for Evaluation",
    disclaimer: "Proposed concept for evaluation. SKU creation, packaging feasibility, pricing, and repeat voucher terms require formal business and supply-chain approval. Does not guarantee clinical transformation; intended strictly for evaluating taste, mixability, and daily routine fit.",
    features: [
      "14 daily servings (112 g) of pure Korean marine peptides",
      "Evaluate taste neutrality in your morning coffee or water",
      "Confirm digestive comfort before committing to a full 200 g tub",
      "Includes a simulated ₹200 voucher toward your first full-size tub"
    ]
  },

  gallery: [
    {
      src: "assets/marine-p1.jpg",
      thumb: "assets/marine-p1.jpg",
      alt: "Wellbeing Nutrition Pure Korean Marine Collagen Peptides 200g Tub with 8g Scoop",
      caption: "Pure Korean Marine Collagen Peptides (200 g / 25 Servings)"
    },
    {
      src: "assets/bop-nutritional.jpg",
      thumb: "assets/bop-nutritional.jpg",
      alt: "Back of pack nutritional panel showing 8g protein per serving and FSSAI license",
      caption: "Verified Nutritional Information & Ingredients"
    },
    {
      src: "assets/how-to-use.jpg",
      thumb: "assets/how-to-use.jpg",
      alt: "Preparation guide showing how to dissolve one scoop in warm or room temperature liquids",
      caption: "3-Step Daily Routine Integration"
    },
    {
      src: "assets/marine-p2.jpg",
      thumb: "assets/marine-p2.jpg",
      alt: "Pack of 2 Marine Collagen (400g total, 50 servings supply)",
      caption: "50-Day Routine Supply (Pack of 2)"
    }
  ],

  specifications: [
    { label: "Product Type", value: "Hydrolyzed Collagen Peptide Powder" },
    { label: "Sourcing", value: "Wild-caught Korean deep-sea fish (skin & scales)" },
    { label: "Collagen Profile", value: "90% Type I, 10% Type III Marine Peptides" },
    { label: "Serving Size", value: "8 g (1 level scoop included inside tub)" },
    { label: "Net Weight", value: "200 g per tub (25 servings per tub)" },
    { label: "Dietary Suitability", value: "Non-Vegetarian (Contains Fish) · Gluten-Free · Dairy-Free · Keto-Friendly" },
    { label: "Added Ingredients", value: "Zero added sugar, zero artificial flavors, zero preservatives" },
    { label: "Shelf Life", value: "24 months from manufacturing date (check base of tub for batch details)" },
    { label: "FSSAI License", value: "Lic. No. 10019022009134 (Nutritionalab Pvt. Ltd.)" }
  ],

  clinicalStudies: [
    {
      id: "study_2015",
      journal: "Journal of Cosmetic Dermatology",
      year: 2015,
      doi: "10.1111/jocd.12174",
      doiUrl: "https://onlinelibrary.wiley.com/doi/10.1111/jocd.12174",
      title: "Oral collagen peptide supplementation on skin moisture and the dermal collagen network",
      keyFinding: "Randomized, placebo-controlled clinical trials demonstrated that oral collagen peptide intake significantly increased skin hydration after 8 weeks of daily supplementation and improved dermal collagen density.",
      sampleSize: "Double-blind, placebo-controlled human trial",
      duration: "8 weeks daily intake",
      limitationNote: "Study evaluated oral collagen peptide ingredients. Individual biological outcomes vary based on baseline skin hydration, age, and lifestyle."
    },
    {
      id: "study_2021",
      journal: "Journal of Cosmetic Dermatology",
      year: 2021,
      doi: "10.1111/jocd.13676",
      doiUrl: "https://doi.org/10.1111/jocd.13676",
      title: "Efficacy of freshwater marine collagen on skin wrinkles and elasticity",
      keyFinding: "Parallel-group randomized study demonstrated measurable reductions in eye-wrinkle depth and improvements in skin elasticity compared to baseline and placebo controls.",
      sampleSize: "Randomized, triple-blind, parallel-group clinical study",
      duration: "12 weeks daily consumption",
      limitationNote: "Clinical trial evaluated marine collagen hydrolysates in general. Does not constitute a guaranteed clinical transformation for every individual."
    },
    {
      id: "study_2022",
      journal: "Journal of Medicinal Food",
      year: 2022,
      doi: "10.1089/jmf.2022.K.0097",
      doiUrl: "https://journals.sagepub.com/doi/full/10.1089/jmf.2022.K.0097",
      title: "Low-Molecular-Weight Collagen Peptides reduce skin wrinkles and improve biophysical properties",
      keyFinding: "Demonstrated that low-molecular-weight hydrolyzed peptides undergo rapid intestinal transport and stimulate dermal fibroblast activity for collagen synthesis.",
      sampleSize: "Double-blind, placebo-controlled randomized study",
      duration: "12 weeks",
      limitationNote: "Evaluates biochemical mechanism of low-molecular-weight hydrolysates. Specific Dalton molecular weight of Wellbeing's finished batch requires laboratory certificate confirmation."
    }
  ],

  // Structured Knowledge Base for Product Guide AI Assistant
  knowledgeBase: [
    {
      id: "intent_ingredients",
      keywords: ["ingredient", "what is in it", "contain", "source", "fish", "purity", "additive", "sugar"],
      question: "What exactly is in this product and where is it sourced?",
      answer: "Wellbeing Nutrition Pure Korean Marine Collagen contains 100% pure hydrolyzed marine collagen peptides (90% Type I, 10% Type III) sourced from wild-caught deep-sea fish in South Korea. It contains zero added sugar, artificial sweeteners, preservatives, dairy, or gluten. Each 8 g scoop delivers pure collagen protein with no fillers.",
      source: "Product Back-of-Pack Nutritional Panel & FSSAI Filing",
      confidence: "Verified"
    },
    {
      id: "intent_taste_fishy",
      keywords: ["fishy", "taste", "smell", "odor", "flavour", "flavor", "aftertaste"],
      question: "Does it taste or smell fishy?",
      answer: "The powder is processed through advanced enzymatic hydrolysis to produce an unflavored, neutral powder. When mixed into warm coffee, tea, fruit juice, or smoothies, the taste is virtually undetectable. In plain lukewarm water, some sensitive palates report a faint, natural marine mineral note. Individual sensory perceptions vary.",
      source: "Preparation Guide & Customer Sensory Feedback",
      confidence: "Verified"
    },
    {
      id: "intent_coffee_mix",
      keywords: ["coffee", "hot", "tea", "heat", "temperature", "boiling", "dissolve", "mix"],
      question: "Can I mix it in hot black coffee or tea?",
      answer: "Yes. Hydrolyzed collagen peptides are heat-stable in hot beverages such as morning coffee, tea, and warm water. For best dissolvability, add 1 scoop into your mug, pour your warm liquid over it, and stir briskly for 20–30 seconds. In ice-cold drinks, an electric frother or shaker is recommended to avoid clumping.",
      source: "Usage & Solubility Guidelines",
      confidence: "Verified"
    },
    {
      id: "intent_age_suitability",
      keywords: ["age", "who can use", "young", "teen", "20", "old", "men", "women"],
      question: "Who can use this supplement, and what is the recommended age?",
      answer: "This dietary supplement is formulated for adult women and men (18 years and above). Natural collagen production in the body begins decreasing around age 25. Note: While adult dietary use is standard under FSSAI rules, specific product-level age minimums should be confirmed with your physician if under 18.",
      source: "Dietary Supplement Adult Guidelines (FSSAI)",
      confidence: "Verified Adult Formulation"
    },
    {
      id: "intent_allergy_fish",
      keywords: ["allergy", "allergic", "seafood", "shellfish", "marine", "veg", "vegetarian"],
      question: "Is this suitable for vegetarians or people with seafood allergies?",
      answer: "IMPORTANT SAFETY NOTICE: This product is 100% marine-derived from fish. It is strictly non-vegetarian and NOT suitable for anyone with a known fish or marine seafood allergy. If you experience adverse reactions, discontinue use immediately and seek medical attention.",
      source: "Mandatory Allergen Disclosures & Packaging Symbol",
      confidence: "High Safety Priority"
    },
    {
      id: "intent_pregnancy_breastfeeding",
      keywords: ["pregnant", "pregnancy", "breastfeeding", "lactation", "nursing", "baby"],
      question: "Can I take this while pregnant or breastfeeding?",
      answer: "While marine collagen peptides are dietary proteins, nutritional requirements and immune sensitivities change significantly during pregnancy and nursing. Wellbeing Nutrition strongly advises consulting your OB-GYN or healthcare provider before introducing any new supplement into your prenatal or postnatal routine.",
      source: "Medical Caution & Advisory Standards",
      confidence: "Medical Referral Required"
    },
    {
      id: "intent_side_effects",
      keywords: ["side effect", "breakout", "acne", "bloat", "stomach", "digestion", "gas"],
      question: "Are there any side effects or digestive issues?",
      answer: "Hydrolyzed collagen peptides are generally well-tolerated. However, as with any concentrated protein supplement, some individuals may experience mild digestive fullness when starting. If you have a sensitive stomach, consider starting with half a scoop (4 g) for the first 3 days with a meal before moving to a full 8 g scoop.",
      source: "Clinical Tolerance Literature",
      confidence: "Verified Guidance"
    },
    {
      id: "intent_evidence_timeline",
      keywords: ["evidence", "proof", "clinical", "study", "results", "how long", "timeline", "weeks"],
      question: "What evidence supports the benefits, and how long does it take?",
      answer: "Published dermatological trials on oral collagen peptides demonstrate measurable increases in skin moisture retention, dermal elasticity, and fine line reduction after 4 to 8 weeks of consistent daily intake. Note: One 200 g tub provides 25 days of supply; clinical literature evaluates 8 to 12-week periods. Individual outcomes vary.",
      source: "J. Cosmet. Dermatol. (2015, 2021) & J. Med. Food (2022)",
      confidence: "Peer-Reviewed RCT Data"
    },
    {
      id: "intent_expiry_batch",
      keywords: ["expiry", "expiration", "shelf life", "fresh", "batch", "date"],
      question: "What is the shelf life and exact expiry date?",
      answer: "Wellbeing Nutrition Korean Marine Collagen has a total shelf life of 24 months from the date of manufacture. Exact expiration dates are printed individually on the base of each physical tub alongside the batch number. Store in a cool, dry place away from direct sunlight with the lid tightly closed.",
      source: "Packaging Specifications",
      confidence: "Verified Shelf Life (Batch-Specific Date on Tub Base)"
    },
    {
      id: "intent_comparison",
      keywords: ["compare", "bovine", "nutrova", "other collagen", "difference", "better", "type"],
      question: "How does marine collagen compare to bovine collagen?",
      answer: "Marine collagen is rich in Type I (90%) and Type III (10%) collagen, the primary building blocks of human skin, hair, and nails. Because fish collagen peptides have smaller molecular chains than mammalian (bovine) collagen, scientific literature indicates higher bio-availability and faster digestive absorption.",
      source: "Biochemical Absorption Literature",
      confidence: "Comparative Analysis"
    },
    {
      id: "intent_pricing_cost_per_serving",
      keywords: ["price", "cost", "per serving", "discount", "offer", "pack", "how much"],
      question: "How much does each pack cost per serving?",
      answer: "Based on our captured reference pricing: Pack of 1 (25 servings) is ₹1,745 (₹69.80 / serving). Pack of 2 (50 servings) is ₹3,418 (₹68.36 / serving). Pack of 3 (75 servings) is ₹5,019 (₹66.92 / serving). Pack of 4 (100 servings) is ₹6,476 (₹64.76 / serving). You can also apply promo code BUY3@10 on qualifying bundle orders.",
      source: "Captured Reference Pricing Table",
      confidence: "Verified Pricing"
    },
    {
      id: "intent_return_policy",
      keywords: ["return", "refund", "cancel", "damaged", "broken", "money back", "guarantee"],
      question: "What is the return and refund policy?",
      answer: "Due to health, hygiene, and FSSAI food safety regulations, dietary supplements cannot be returned or refunded once the tamper-evident protective seal is opened. However, if your order arrives physically damaged in transit or defective, email care@wellbeingnutrition.com within 48 hours of delivery with photos for a free replacement.",
      source: "Official Wellbeing Nutrition Refund & Shipping Policy",
      confidence: "Verified Policy"
    }
  ]
};
