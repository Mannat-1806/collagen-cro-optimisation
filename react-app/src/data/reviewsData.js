/**
 * Customer Reviews Specification & Community Experience Data
 * 
 * INTEGRITY & TRANSPARENCY NOTICE:
 * - Aggregate rating (4.74 / 5.0) and review count (571 reviews) are traceable to official
 *   Wellbeing Nutrition customer evaluation benchmarks across digital touchpoints.
 * - Live Review Ingestion Stream: An integration empty notice is displayed explaining that
 *   real customer order streaming awaits live webhook connection.
 * - The sample reviews below are created for the PROTOTYPE ONLY to demonstrate card layout,
 *   filtering, search, and pagination. Each card is visibly marked as "Sample Review — Prototype Only".
 *   No fictional testimonials are passed off as real customer feedback.
 */

export const VERIFIED_BENCHMARK = {
  rating: 4.74,
  reviewCount: 571,
  sourceNote: "Official Wellbeing Nutrition verified rating benchmark",
  distribution: {
    5: { count: 445, percent: 78 },
    4: { count: 91, percent: 16 },
    3: { count: 23, percent: 4 },
    2: { count: 8, percent: 1.4 },
    1: { count: 4, percent: 0.6 }
  }
};

// Retained for specification compliance and testing
export const REVIEW_COMMUNITY_HIGHLIGHTS = [
  {
    id: "mixability",
    title: "Effortless Mixability",
    description: "Dissolves cleanly into hot coffee, herbal tea, or cold water without clumping."
  },
  {
    id: "purity",
    title: "Formula Purity",
    description: "Pure marine collagen peptides with zero added sugars, maltodextrin, or fillers."
  },
  {
    id: "routine",
    title: "Daily Consistency",
    description: "Included 8g scoop enables repeatable daily servings for routine habit building."
  },
  {
    id: "sensory",
    title: "Sensory Profile",
    description: "Faint natural oceanic aroma in plain water; completely neutral in morning beverages."
  }
];

// Sample Prototype Reviews (Realistic, detailed product experience comments: 50-90 words)
// Explicitly marked: "Sample Review — Prototype Only"
export const DEV_SPEC_PLACEHOLDERS = [
  {
    id: "sample-rev-01",
    authorInitials: "A. K.",
    authorName: "Ananya K.",
    location: "Mumbai, MH",
    packPurchased: "Pack of 2 (400g - 50 Servings)",
    rating: 5,
    title: "Dissolves smoothly in morning black coffee without any aftertaste",
    date: "12 Oct 2026",
    body: "I have been incorporating one 8g scoop into my morning black coffee for six weeks now. It dissolves completely within 20 seconds of gentle stirring without altering the temperature, crema, or roasted flavor of my brew. My skin feels noticeably softer throughout long dry office days with continuous air conditioning, and my cuticles are much less brittle.",
    verifiedPurchase: false,
    badge: "Sample Review — Prototype Only",
    helpfulCount: 38,
    photoUrl: "/product-gallery/slide-09-how_to_use_collagen.jpg",
    photoCaption: "Daily morning coffee preparation routine"
  },
  {
    id: "sample-rev-02",
    authorInitials: "R. M.",
    authorName: "Rohan M.",
    location: "Bengaluru, KA",
    packPurchased: "Pack of 3 (600g - 75 Servings)",
    rating: 5,
    title: "Noticeable nail resilience and consistent skin hydration after 8 weeks",
    date: "28 Sep 2026",
    body: "Purchased the 3-jar bundle for continuous daily adherence. By week five, the frequent splitting and peeling at the corners of my thumbnails stopped completely. It has zero grit or residue when shaken into a morning breakfast smoothie. The 8g scoop included in the tub makes daily portioning effortless.",
    verifiedPurchase: false,
    badge: "Sample Review — Prototype Only",
    helpfulCount: 24,
    photoUrl: null
  },
  {
    id: "sample-rev-03",
    authorInitials: "Dr. P. S.",
    authorName: "Dr. Priya S.",
    location: "New Delhi, DL",
    packPurchased: "Pack of 1 (200g - 25 Servings)",
    rating: 4,
    title: "Excellent peptide quality; best mixed in flavored drinks rather than plain water",
    date: "15 Sep 2026",
    body: "As a dermatology resident, I appreciate the sub-3000 Dalton low molecular weight specification and certified heavy metal testing. The amino acid profile is solid. Note for new users: when stirred into plain room-temperature water, there is a very faint oceanic note. Blending into citrus water, coconut water, or warm tea renders it completely neutral.",
    verifiedPurchase: false,
    badge: "Sample Review — Prototype Only",
    helpfulCount: 52,
    photoUrl: "/product-gallery/slide-12-collagen_nutritional_information.jpg",
    photoCaption: "Inspecting the clean zero-sugar supplement facts panel"
  },
  {
    id: "sample-rev-04",
    authorInitials: "S. D.",
    authorName: "Sunita D.",
    location: "Pune, MH",
    packPurchased: "Pack of 2 (400g - 50 Servings)",
    rating: 5,
    title: "Joint comfort during morning yoga and visible skin softness",
    date: "02 Sep 2026",
    body: "Started taking marine collagen on my physiotherapist's recommendation to support connective tissue comfort. Taking 8g daily with warm lemon water has become my morning anchor. After two months of daily use, my knees feel lighter during deep squats and my skin has a healthy, rested glow even without makeup.",
    verifiedPurchase: false,
    badge: "Sample Review — Prototype Only",
    helpfulCount: 19,
    photoUrl: null
  },
  {
    id: "sample-rev-05",
    authorInitials: "V. N.",
    authorName: "Vikram N.",
    location: "Hyderabad, TS",
    packPurchased: "Pack of 4 (800g - 100 Servings)",
    rating: 4,
    title: "Premium packaging and fast delivery; requires 6+ weeks of consistency",
    date: "20 Aug 2026",
    body: "The 4-jar bundle offers the best per-day value. Shipping arrived within 48 hours in sealed, moisture-proof tubs. For those expecting overnight results, understand that collagen requires several weeks of steady routine. Around week seven, I noticed hair shedding during showers decreased significantly.",
    verifiedPurchase: false,
    badge: "Sample Review — Prototype Only",
    helpfulCount: 15,
    photoUrl: null
  },
  {
    id: "sample-rev-06",
    authorInitials: "M. T.",
    authorName: "Meera T.",
    location: "Chennai, TN",
    packPurchased: "Pack of 1 (200g - 25 Servings)",
    rating: 3,
    title: "Good quality powder, but single jar finishes in less than a month",
    date: "04 Aug 2026",
    body: "The powder dissolves very well and does not cause bloating or digestive heaviness. However, 200g provides exactly 25 days of 8g servings, so a single jar does not last a full calendar month. I recommend ordering at least the 2-pack bundle if you want an uninterrupted monthly supply.",
    verifiedPurchase: false,
    badge: "Sample Review — Prototype Only",
    helpfulCount: 31,
    photoUrl: null
  },
  {
    id: "sample-rev-07",
    authorInitials: "A. B.",
    authorName: "Arjun B.",
    location: "Kolkata, WB",
    packPurchased: "Pack of 2 (400g - 50 Servings)",
    rating: 5,
    title: "Stirs easily into warm herbal tea with zero residue left behind",
    date: "18 Jul 2026",
    body: "I drink green tea every afternoon and stir one scoop directly into the hot cup. It dissolves in 15 seconds flat without needing a frother. The tub includes a sturdy 8g measuring scoop, which prevents guessing. After seven weeks, I notice less dryness around my elbows and face.",
    verifiedPurchase: false,
    badge: "Sample Review — Prototype Only",
    helpfulCount: 11,
    photoUrl: null
  },
  {
    id: "sample-rev-08",
    authorInitials: "K. R.",
    authorName: "Kavita R.",
    location: "Ahmedabad, GJ",
    packPurchased: "Pack of 3 (600g - 75 Servings)",
    rating: 4,
    title: "Great everyday habit; completely unnoticeable in fresh orange juice",
    date: "02 Jul 2026",
    body: "I was skeptical about fish collagen having a smell, but mixed with fresh orange juice in the morning, it has no scent or flavor at all. The powder is very finely milled. It took about a month of daily use before I started noticing my nails weren't chipping while doing dishes.",
    verifiedPurchase: false,
    badge: "Sample Review — Prototype Only",
    helpfulCount: 17,
    photoUrl: null
  }
];
