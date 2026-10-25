/**
 * Wellbeing Nutrition Korean Marine Collagen Peptides
 * Illustrative Review Dataset for CRO Prototype Demonstration
 * 
 * CRITICAL DISCLOSURE & DATA AUTHENTICITY NOTE:
 * 1. The aggregate rating of 4.74 based on 571 reviews is captured reference data from
 *    the Judge.me review widget on Wellbeing Nutrition's live product page (audited October 25, 2026).
 *    Live review feeds are NOT connected to this academic demonstration prototype.
 * 2. Individual review entries below are SYNTHETIC, ILLUSTRATIVE EXAMPLES created strictly to
 *    demonstrate CRO UX functionality (keyword search, multi-factor filtering, pagination, and
 *    critical review handling).
 * 3. These entries DO NOT represent genuine customer testimonials, real customer identities,
 *    verified purchases, or confirmed biological results.
 * 4. Unverified aggregate metrics (e.g. fabricated verified purchase percentages or unverified
 *    star distributions) have been intentionally omitted.
 */

window.REVIEWS_DEMO_DATA = {
  summary: {
    aggregateRating: 4.74,
    totalReviews: 571,
    ratingSource: "Captured Judge.me Platform Reference (October 2026; live feed not connected)",
    filterOptions: {
      mixRoutine: ["All Routines", "In Morning Coffee", "In Water", "In Smoothies / Juice"],
      usageDuration: ["All Durations", "Less than 1 Month", "1 to 2 Months", "3+ Months (Consistent)"],
      ratings: ["All Ratings", "5 Stars", "4 Stars", "3 Stars", "1–2 Stars (Critical)"]
    }
  },

  // 25 Illustrative Demo Reviews (Synthetic demonstration entries — not real customer feedback)
  items: [
    {
      id: "rev_01",
      author: "Illustrative Reviewer 01",
      location: "Demo Review Submission",
      date: "Illustrative Entry",
      isDemo: true,
      demoDisclaimer: "Illustrative demo review — not real customer feedback",
      rating: 5,
      title: "Neutral in hot black coffee — no noticeable fishy aftertaste",
      body: "Tested in hot morning black coffee daily. Stirs in smoothly within 20–30 seconds with minimal clumping and does not alter the coffee flavor. Nail strength felt noticeably improved after several weeks of daily consistency.",
      usageDuration: "1 to 2 Months",
      mixRoutine: "In Morning Coffee",
      helpfulCount: 42,
      brandResponse: "Simulated Brand Response (Educational Concept): Pairing marine collagen peptides with morning coffee is a popular daily habit. Thank you for testing the preparation guidelines!"
    },
    {
      id: "rev_02",
      author: "Illustrative Reviewer 02",
      location: "Demo Review Submission",
      date: "Illustrative Entry",
      isDemo: true,
      demoDisclaimer: "Illustrative demo review — not real customer feedback",
      rating: 5,
      title: "Solid pure protein supplement for joint comfort and recovery",
      body: "Used post-workout in warm water with fresh lemon. The amino acid profile is solid. While one tub provides 25 servings, I noticed improved joint comfort after 3 weeks of routine running. Sizing up to the 2-pack offers better routine continuity.",
      usageDuration: "1 to 2 Months",
      mixRoutine: "In Water",
      helpfulCount: 29
    },
    {
      id: "rev_03",
      author: "Illustrative Reviewer 03",
      location: "Demo Review Submission",
      date: "Illustrative Entry",
      isDemo: true,
      demoDisclaimer: "Illustrative demo review — not real customer feedback",
      rating: 4,
      title: "Good dissolvability, but plain water has a subtle mineral note",
      body: "Honest sensory feedback: mixed in plain lukewarm water without flavorings, sensitive palates may detect a subtle marine mineral note. When added to orange juice or green tea, the taste is completely masked. Skin felt well hydrated after 6 weeks.",
      usageDuration: "1 to 2 Months",
      mixRoutine: "In Water",
      helpfulCount: 38
    },
    {
      id: "rev_04",
      author: "Illustrative Reviewer 04",
      location: "Demo Review Submission",
      date: "Illustrative Entry",
      isDemo: true,
      demoDisclaimer: "Illustrative demo review — not real customer feedback",
      rating: 2,
      title: "One 200g tub ran out in 25 days before full routine evaluation",
      body: "The quality seems good and it dissolves cleanly, but a 200g tub lasts exactly 25 days at 1 scoop per day. Clinical literature evaluates 8 to 12 weeks, so a 30-day or 60-day pack option would be much more convenient for continuous evaluation.",
      usageDuration: "Less than 1 Month",
      mixRoutine: "In Morning Coffee",
      helpfulCount: 54,
      brandResponse: "Simulated Brand Response (Educational Concept): Because dermatological trials evaluate 8–12 weeks of daily consistency, our Pack of 2 (50-day supply) is designed for continuous routine evaluation."
    },
    {
      id: "rev_05",
      author: "Illustrative Reviewer 05",
      location: "Demo Review Submission",
      date: "Illustrative Entry",
      isDemo: true,
      demoDisclaimer: "Illustrative demo review — not real customer feedback",
      rating: 5,
      title: "Noticeable hair fallout reduction after consistent daily use",
      body: "Took 8g daily in a fruit smoothie for over 90 days. Noticed noticeably less hair fall and healthier temple hair density. Daily consistency over multiple months was crucial.",
      usageDuration: "3+ Months (Consistent)",
      mixRoutine: "In Smoothies / Juice",
      helpfulCount: 47
    },
    {
      id: "rev_06",
      author: "Illustrative Reviewer 06",
      location: "Demo Review Submission",
      date: "Illustrative Entry",
      isDemo: true,
      demoDisclaimer: "Illustrative demo review — not real customer feedback",
      rating: 1,
      title: "Clumped up when poured directly into ice-cold protein shake",
      body: "Tried pouring a scoop directly into refrigerated almond milk and it formed gel-like clumps on top. Instructions should clearly state that it requires room-temperature or warm liquid first before adding ice.",
      usageDuration: "Less than 1 Month",
      mixRoutine: "In Smoothies / Juice",
      helpfulCount: 61,
      brandResponse: "Simulated Brand Response (Educational Concept): Pure marine collagen peptides dissolve best in room-temperature or warm liquids. For cold beverages, dissolve first in 30 ml of room-temperature liquid or use an electric frother."
    },
    {
      id: "rev_07",
      author: "Illustrative Reviewer 07",
      location: "Demo Review Submission",
      date: "Illustrative Entry",
      isDemo: true,
      demoDisclaimer: "Illustrative demo review — not real customer feedback",
      rating: 5,
      title: "Great absorption compared to bovine collagen previously used",
      body: "Switched from bovine to marine peptides due to lower molecular weight. Felt light on digestion with zero bloating. Dissolves cleanly in morning filter coffee.",
      usageDuration: "1 to 2 Months",
      mixRoutine: "In Morning Coffee",
      helpfulCount: 23
    },
    {
      id: "rev_08",
      author: "Illustrative Reviewer 08",
      location: "Demo Review Submission",
      date: "Illustrative Entry",
      isDemo: true,
      demoDisclaimer: "Illustrative demo review — not real customer feedback",
      rating: 4,
      title: "Packaging seal was intact, included scoop is accurate",
      body: "Weighed 1 level scoop on a digital kitchen scale and it measured exactly 8.0 grams. Dissolves well in black tea. Delivery timeline took 5 days.",
      usageDuration: "Less than 1 Month",
      mixRoutine: "In Morning Coffee",
      helpfulCount: 15
    },
    {
      id: "rev_09",
      author: "Illustrative Reviewer 09",
      location: "Demo Review Submission",
      date: "Illustrative Entry",
      isDemo: true,
      demoDisclaimer: "Illustrative demo review — not real customer feedback",
      rating: 5,
      title: "Skin hydration feels significantly better across seasonal changes",
      body: "Working in air-conditioned environments usually leaves skin tight and dry. After completing a 50-day routine, dry patches felt significantly smoother.",
      usageDuration: "1 to 2 Months",
      mixRoutine: "In Water",
      helpfulCount: 31
    },
    {
      id: "rev_10",
      author: "Illustrative Reviewer 10",
      location: "Demo Review Submission",
      date: "Illustrative Entry",
      isDemo: true,
      demoDisclaimer: "Illustrative demo review — not real customer feedback",
      rating: 3,
      title: "Good formulation, but monthly cost adds up on single-tub reorders",
      body: "At ₹1,745 for 25 servings, the daily cost is around ₹69.80. Multi-pack bundles help bring down the cost per serving to ₹68.36 or ₹66.92.",
      usageDuration: "1 to 2 Months",
      mixRoutine: "In Smoothies / Juice",
      helpfulCount: 36,
      brandResponse: "Simulated Brand Response (Educational Concept): Multi-pack bundles (Packs of 2, 3, and 4) are designed to provide unit cost savings for regular daily routines."
    },
    {
      id: "rev_11",
      author: "Illustrative Reviewer 11",
      location: "Demo Review Submission",
      date: "Illustrative Entry",
      isDemo: true,
      demoDisclaimer: "Illustrative demo review — not real customer feedback",
      rating: 5,
      title: "Dissolves clear in warm lemon water every morning",
      body: "Daily routine: 1 mug warm water, half lemon juice, 1 level scoop of marine collagen. Stirs clear in 15 seconds. Brittle nails felt noticeably stronger after 4 weeks.",
      usageDuration: "1 to 2 Months",
      mixRoutine: "In Water",
      helpfulCount: 22
    },
    {
      id: "rev_12",
      author: "Illustrative Reviewer 12",
      location: "Demo Review Submission",
      date: "Illustrative Entry",
      isDemo: true,
      demoDisclaimer: "Illustrative demo review — not real customer feedback",
      rating: 5,
      title: "Zero added sugar or artificial flavorings fits keto routine",
      body: "Most commercial collagen powders add sucralose or artificial fruit flavors. This is unflavored hydrolysate with zero sugars or carbohydrate fillers.",
      usageDuration: "3+ Months (Consistent)",
      mixRoutine: "In Morning Coffee",
      helpfulCount: 19
    },
    {
      id: "rev_13",
      author: "Illustrative Reviewer 13",
      location: "Demo Review Submission",
      date: "Illustrative Entry",
      isDemo: true,
      demoDisclaimer: "Illustrative demo review — not real customer feedback",
      rating: 4,
      title: "Noticeable improvement in skin smoothness after 5 weeks",
      body: "Took around 5 weeks before changes in skin texture became visible. Daily routine adherence without skipping is essential.",
      usageDuration: "1 to 2 Months",
      mixRoutine: "In Smoothies / Juice",
      helpfulCount: 17
    },
    {
      id: "rev_14",
      author: "Illustrative Reviewer 14",
      location: "Demo Review Submission",
      date: "Illustrative Entry",
      isDemo: true,
      demoDisclaimer: "Illustrative demo review — not real customer feedback",
      rating: 2,
      title: "Experienced initial digestive fullness during the first few days",
      body: "Felt mild stomach fullness when taking concentrated protein on an empty stomach. Taking it alongside breakfast resolved the discomfort, but packaging should mention meal pairing for sensitive digestion.",
      usageDuration: "Less than 1 Month",
      mixRoutine: "In Water",
      helpfulCount: 45,
      brandResponse: "Simulated Brand Response (Educational Concept): If you experience mild digestive fullness, we recommend consuming your daily 8 g serving alongside a meal and maintaining adequate hydration."
    },
    {
      id: "rev_15",
      author: "Illustrative Reviewer 15",
      location: "Demo Review Submission",
      date: "Illustrative Entry",
      isDemo: true,
      demoDisclaimer: "Illustrative demo review — not real customer feedback",
      rating: 5,
      title: "Transparent labeling and clear back-of-pack details",
      body: "Appreciate the visible FSSAI license number and Type I & III collagen specifications. Stirs into morning filter coffee cleanly with minimal sediment.",
      usageDuration: "1 to 2 Months",
      mixRoutine: "In Morning Coffee",
      helpfulCount: 14
    },
    {
      id: "rev_16",
      author: "Illustrative Reviewer 16",
      location: "Demo Review Submission",
      date: "Illustrative Entry",
      isDemo: true,
      demoDisclaimer: "Illustrative demo review — not real customer feedback",
      rating: 5,
      title: "Valuable addition to daily healthy aging routine",
      body: "At 46, fine lines around the eyes were becoming noticeable. After 75 days (into my third tub), orbital skin elasticity feels noticeably firmer. Consistency is key.",
      usageDuration: "3+ Months (Consistent)",
      mixRoutine: "In Morning Coffee",
      helpfulCount: 39
    },
    {
      id: "rev_17",
      author: "Illustrative Reviewer 17",
      location: "Demo Review Submission",
      date: "Illustrative Entry",
      isDemo: true,
      demoDisclaimer: "Illustrative demo review — not real customer feedback",
      rating: 4,
      title: "Quality powder, would prefer standard 30 servings per tub",
      body: "Dissolvability and neutrality are high quality. The 25-serving count per tub requires repurchasing before the calendar month ends unless ordering multi-packs.",
      usageDuration: "1 to 2 Months",
      mixRoutine: "In Water",
      helpfulCount: 52
    },
    {
      id: "rev_18",
      author: "Illustrative Reviewer 18",
      location: "Demo Review Submission",
      date: "Illustrative Entry",
      isDemo: true,
      demoDisclaimer: "Illustrative demo review — not real customer feedback",
      rating: 5,
      title: "Mixes smoothly in warm almond milk with turmeric",
      body: "Used as a golden milk evening beverage. Dissolves cleanly without clumping when stirred into warm milk.",
      usageDuration: "1 to 2 Months",
      mixRoutine: "In Water",
      helpfulCount: 16
    },
    {
      id: "rev_19",
      author: "Illustrative Reviewer 19",
      location: "Demo Review Submission",
      date: "Illustrative Entry",
      isDemo: true,
      demoDisclaimer: "Illustrative demo review — not real customer feedback",
      rating: 5,
      title: "Nails stopped splitting after 4 weeks of consistent use",
      body: "Nails were thin and prone to splitting from frequent hand-washing. One scoop daily in morning herbal tea helped improve nail integrity.",
      usageDuration: "1 to 2 Months",
      mixRoutine: "In Morning Coffee",
      helpfulCount: 20
    },
    {
      id: "rev_20",
      author: "Illustrative Reviewer 20",
      location: "Demo Review Submission",
      date: "Illustrative Entry",
      isDemo: true,
      demoDisclaimer: "Illustrative demo review — not real customer feedback",
      rating: 4,
      title: "Fast checkout and intact inner foil seal",
      body: "Purchased on mobile quickly. Tub arrived with tamper-evident inner foil seal intact and measuring scoop included inside.",
      usageDuration: "Less than 1 Month",
      mixRoutine: "In Water",
      helpfulCount: 11
    },
    {
      id: "rev_21",
      author: "Illustrative Reviewer 21",
      location: "Demo Review Submission",
      date: "Illustrative Entry",
      isDemo: true,
      demoDisclaimer: "Illustrative demo review — not real customer feedback",
      rating: 5,
      title: "Gradual skin hydration improvement over 6 weeks",
      body: "Observed that skin felt less parched in dry weather after about 6 weeks. High purity without sweet aftertaste.",
      usageDuration: "1 to 2 Months",
      mixRoutine: "In Smoothies / Juice",
      helpfulCount: 13
    },
    {
      id: "rev_22",
      author: "Illustrative Reviewer 22",
      location: "Demo Review Submission",
      date: "Illustrative Entry",
      isDemo: true,
      demoDisclaimer: "Illustrative demo review — not real customer feedback",
      rating: 1,
      title: "Must highlight marine fish origin clearly for vegetarian households",
      body: "Family member follows a strict vegetarian diet and did not notice the fish origin before opening the parcel. The non-vegetarian fish badge needs to be front-and-center on the product page.",
      usageDuration: "Less than 1 Month",
      mixRoutine: "In Water",
      helpfulCount: 68,
      brandResponse: "Simulated Brand Response (Educational Concept): We have elevated the Non-Vegetarian (Marine Fish) disclosure prominently next to the product title and buy box to ensure complete dietary transparency before purchase."
    },
    {
      id: "rev_23",
      author: "Illustrative Reviewer 23",
      location: "Demo Review Submission",
      date: "Illustrative Entry",
      isDemo: true,
      demoDisclaimer: "Illustrative demo review — not real customer feedback",
      rating: 5,
      title: "Consistent daily intake is essential for results",
      body: "On my fourth tub now. Hair feels thicker and skin hydration is sustained. Daily routine adherence makes all the difference.",
      usageDuration: "3+ Months (Consistent)",
      mixRoutine: "In Morning Coffee",
      helpfulCount: 27
    },
    {
      id: "rev_24",
      author: "Illustrative Reviewer 24",
      location: "Demo Review Submission",
      date: "Illustrative Entry",
      isDemo: true,
      demoDisclaimer: "Illustrative demo review — not real customer feedback",
      rating: 4,
      title: "Dissolves translucent in lukewarm water",
      body: "Tested in lukewarm water with a spoon. Took approximately 20 seconds to stir clear. Clean unflavored profile.",
      usageDuration: "1 to 2 Months",
      mixRoutine: "In Water",
      helpfulCount: 12
    },
    {
      id: "rev_25",
      author: "Illustrative Reviewer 25",
      location: "Demo Review Submission",
      date: "Illustrative Entry",
      isDemo: true,
      demoDisclaimer: "Illustrative demo review — not real customer feedback",
      rating: 5,
      title: "Convenient addition to morning green smoothie",
      body: "Blends seamlessly into morning spinach and apple smoothies without altering flavor or texture. A practical way to meet daily protein goals.",
      usageDuration: "1 to 2 Months",
      mixRoutine: "In Smoothies / Juice",
      helpfulCount: 21
    }
  ]
};
