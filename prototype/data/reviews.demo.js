/**
 * Wellbeing Nutrition Korean Marine Collagen Peptides
 * Illustrative Review Dataset for Prototype Demonstration
 * 
 * DISCLOSURE:
 * The aggregate rating of 4.74 based on 571 reviews is captured reference data from
 * the Judge.me widget on Wellbeing Nutrition's live product page (October 2026).
 * 
 * Individual review cards below represent an explicitly labelled illustrative dataset
 * created strictly to demonstrate keyword search, multi-factor filtering, helpfulness sorting,
 * and negative review discovery. These do not represent actual proprietary customer testimonials.
 */

window.REVIEWS_DEMO_DATA = {
  summary: {
    aggregateRating: 4.74,
    totalReviews: 571,
    verifiedPurchaserPct: 91,
    ratingDistribution: {
      5: 442,
      4: 87,
      3: 26,
      2: 10,
      1: 6
    },
    filterOptions: {
      mixRoutine: ["All Routines", "In Morning Coffee", "In Water", "In Smoothies / Juice"],
      usageDuration: ["All Durations", "Less than 1 Month", "1 to 2 Months", "3+ Months (Consistent)"],
      ratings: ["All Ratings", "5 Stars", "4 Stars", "3 Stars", "1–2 Stars (Critical)"]
    }
  },

  // 25 Illustrative Sample Reviews covering diverse ratings, mixes, durations, and critical feedback
  items: [
    {
      id: "rev_01",
      author: "Priya S.",
      location: "Mumbai, MH",
      verified: true,
      rating: 5,
      date: "2026-09-18",
      title: "Completely neutral in hot black coffee — no fishy aftertaste",
      body: "I was extremely skeptical about buying unflavored marine collagen because I have a sensitive nose. I mix one scoop into my hot morning black coffee every single day. It dissolves within 20 seconds with zero lumps and doesn't change the coffee flavor at all. Into my second month and my cuticles and nail strength are noticeably better.",
      usageDuration: "1 to 2 Months",
      mixRoutine: "In Morning Coffee",
      helpfulCount: 42,
      brandResponse: "Thank you for the detailed feedback, Priya! Pairing collagen peptides with morning coffee is our team's favorite daily routine."
    },
    {
      id: "rev_02",
      author: "Vikram R.",
      location: "Bengaluru, KA",
      verified: true,
      rating: 5,
      date: "2026-09-24",
      title: "Solid pure protein supplement for joint comfort and recovery",
      body: "I take this post-workout mixed into warm water with a squeeze of fresh lemon. The amino acid profile is solid. While one tub only lasted me 25 days, I noticed less morning knee stiffness around week 3 of running. Switched to the 2-pack for better continuity.",
      usageDuration: "1 to 2 Months",
      mixRoutine: "In Water",
      helpfulCount: 29
    },
    {
      id: "rev_03",
      author: "Ananya M.",
      location: "New Delhi, DL",
      verified: true,
      rating: 4,
      date: "2026-10-02",
      title: "Good dissolvability, but plain water has a slight mineral hint",
      body: "Just to be honest with other buyers: if you mix this in room temperature plain water with nothing else, you might notice a very subtle mineral/ocean scent. It is not overpowering, but it's there. However, if you add it to orange juice or green tea, it disappears 100%. Skin feels plump and well hydrated after 6 weeks.",
      usageDuration: "1 to 2 Months",
      mixRoutine: "In Water",
      helpfulCount: 38
    },
    {
      id: "rev_04",
      author: "Neha K.",
      location: "Pune, MH",
      verified: true,
      rating: 2,
      date: "2026-08-30",
      title: "One tub ran out before I could see visible skin changes",
      body: "The quality seems good and it mixes well, but a 200g tub lasts only 25 days. The clinical claims mention 8 weeks for skin texture improvement, so why isn't the tub sized for at least 30 or 60 days? I felt I had to repurchase too quickly just to evaluate whether it was working.",
      usageDuration: "Less than 1 Month",
      mixRoutine: "In Morning Coffee",
      helpfulCount: 54,
      brandResponse: "We hear you, Neha! Because collagen remodeling requires 8–12 weeks of daily consistency, we recommend our 50-day bundle (Pack of 2) for comprehensive routine continuity."
    },
    {
      id: "rev_05",
      author: "Sneha G.",
      location: "Hyderabad, TS",
      verified: true,
      rating: 5,
      date: "2026-09-12",
      title: "Noticeable hair fallout reduction after 3 months of daily use",
      body: "I am 34 and suffered postpartum hair shedding. I have been taking 8g daily in my fruit smoothie for over 90 days. My hairstylist pointed out new baby hair growth along my temples. You definitely have to be consistent every single day; do not expect overnight miracles.",
      usageDuration: "3+ Months (Consistent)",
      mixRoutine: "In Smoothies / Juice",
      helpfulCount: 47
    },
    {
      id: "rev_06",
      author: "Karan D.",
      location: "Gurugram, HR",
      verified: false,
      rating: 1,
      date: "2026-07-15",
      title: "Clumped up when I poured it into ice cold protein shake",
      body: "Tried dumping a scoop into my cold almond milk shake straight from the fridge and it formed jelly-like sticky balls on top. Instructions should make it much clearer that it needs warm or room-temp liquid first. Had to use a blender to break it down.",
      usageDuration: "Less than 1 Month",
      mixRoutine: "In Smoothies / Juice",
      helpfulCount: 61,
      brandResponse: "Hi Karan, pure marine collagen peptides dissolve best in room-temperature liquids or warm beverages. For ice-cold drinks, we advise mixing in 30ml of room-temp water first or using an electric frother!"
    },
    {
      id: "rev_07",
      author: "Meera T.",
      location: "Chennai, TN",
      verified: true,
      rating: 5,
      date: "2026-09-05",
      title: "Great absorption compared to the bovine collagen I used previously",
      body: "Switched from bovine to Korean marine collagen because of the lower molecular weight peptides. Noticeably lighter on my stomach with zero bloating. My morning coffee dissolvability test passed with flying colors.",
      usageDuration: "1 to 2 Months",
      mixRoutine: "In Morning Coffee",
      helpfulCount: 23
    },
    {
      id: "rev_08",
      author: "Aditi B.",
      location: "Kolkata, WB",
      verified: true,
      rating: 4,
      date: "2026-10-10",
      title: "Packaging seal was intact, scoop is accurate",
      body: "Checked the scoop weight on my digital kitchen scale and 1 level scoop was exactly 8.1 grams. Dissolves cleanly in black tea. Good product, but delivery took 5 days to Kolkata which felt slightly slow.",
      usageDuration: "Less than 1 Month",
      mixRoutine: "In Morning Coffee",
      helpfulCount: 15
    },
    {
      id: "rev_09",
      author: "Rohit P.",
      location: "Ahmedabad, GJ",
      verified: true,
      rating: 5,
      date: "2026-08-20",
      title: "Skin hydration feels significantly better through changing seasons",
      body: "I work long hours in air-conditioned offices which normally leaves my skin flaky and tight. 50 days in (finished my second pack) and my dry forehead patches are completely gone. A very clean supplement.",
      usageDuration: "1 to 2 Months",
      mixRoutine: "In Water",
      helpfulCount: 31
    },
    {
      id: "rev_10",
      author: "Simran J.",
      location: "Chandigarh, PB",
      verified: true,
      rating: 3,
      date: "2026-09-28",
      title: "Decent product, but price per month is on the higher side",
      body: "At ₹1,745 for 25 days, you end up spending over ₹2,100 per calendar month. The product itself is fine and odorless in juice, but they need to offer better bulk discounts on repeat purchases.",
      usageDuration: "1 to 2 Months",
      mixRoutine: "In Smoothies / Juice",
      helpfulCount: 36,
      brandResponse: "Thank you for the honest feedback, Simran. Check out our multi-pack bundles which bring the cost per serving down to ₹68.36/day."
    },
    {
      id: "rev_11",
      author: "Pooja V.",
      location: "Jaipur, RJ",
      verified: true,
      rating: 5,
      date: "2026-10-14",
      title: "Dissolves clear in warm lemon water every morning",
      body: "My daily routine: 1 mug warm water, juice of half a lemon, 1 scoop Korean collagen. Stirs clear in 15 seconds. My brittle winter nails stopped splitting after about 4 weeks. Will definitely repurchase.",
      usageDuration: "1 to 2 Months",
      mixRoutine: "In Water",
      helpfulCount: 22
    },
    {
      id: "rev_12",
      author: "Deepak S.",
      location: "Lucknow, UP",
      verified: true,
      rating: 5,
      date: "2026-09-08",
      title: "Zero added sugar is the big selling point for me",
      body: "Most collagen powders on the market are loaded with artificial orange or watermelon flavoring and sucralose. This is 100% clean peptides with zero carbs or sugar, which fits my keto diet perfectly.",
      usageDuration: "3+ Months (Consistent)",
      mixRoutine: "In Morning Coffee",
      helpfulCount: 19
    },
    {
      id: "rev_13",
      author: "Divya N.",
      location: "Kochi, KL",
      verified: true,
      rating: 4,
      date: "2026-08-14",
      title: "Noticeable improvement in skin glow and smoothness",
      body: "Took about 5 weeks before my friends started asking what skincare product I was using. The only caveat is you must remember to take it every day without skipping.",
      usageDuration: "1 to 2 Months",
      mixRoutine: "In Smoothies / Juice",
      helpfulCount: 17
    },
    {
      id: "rev_14",
      author: "Shweta M.",
      location: "Indore, MP",
      verified: false,
      rating: 2,
      date: "2026-07-22",
      title: "Had slight bloating for the first four days",
      body: "My stomach felt heavy and bloated when I started with a full scoop. The website should suggest starting with a smaller dose for people with weak digestion. After dropping to half a scoop it settled down, but the initial experience was uncomfortable.",
      usageDuration: "Less than 1 Month",
      mixRoutine: "In Water",
      helpfulCount: 45,
      brandResponse: "Thank you for sharing, Shweta. We have updated our usage guidelines to recommend starting with half a scoop (4g) for individuals with sensitive digestion."
    },
    {
      id: "rev_15",
      author: "Arjun H.",
      location: "Nagpur, MH",
      verified: true,
      rating: 5,
      date: "2026-09-15",
      title: "Very clean Korean sourcing, back of pack details are transparent",
      body: "Appreciate that the manufacturer provides the FSSAI license and clear Type I & III collagen breakdowns. Stirs into my morning filter coffee with zero sediment at the bottom.",
      usageDuration: "1 to 2 Months",
      mixRoutine: "In Morning Coffee",
      helpfulCount: 14
    },
    {
      id: "rev_16",
      author: "Kavita S.",
      location: "Bhopal, MP",
      verified: true,
      rating: 5,
      date: "2026-10-05",
      title: "My holy grail for skin hydration and aging gracefully",
      body: "At 46, fine lines around my eyes were becoming pronounced. 75 days in (into my third tub), and the skin around my orbital bone looks visibly tighter and smoother. Highly recommend staying consistent.",
      usageDuration: "3+ Months (Consistent)",
      mixRoutine: "In Morning Coffee",
      helpfulCount: 39
    },
    {
      id: "rev_17",
      author: "Nikhil C.",
      location: "Surat, GJ",
      verified: true,
      rating: 4,
      date: "2026-08-29",
      title: "Great product, wish the tub had 30 servings instead of 25",
      body: "Everything about the formulation is 5 stars. The 25 servings count is the only minor gripe because a calendar month is 30 or 31 days. Would love to see a 30-day single tub option.",
      usageDuration: "1 to 2 Months",
      mixRoutine: "In Water",
      helpfulCount: 52
    },
    {
      id: "rev_18",
      author: "Tanvi D.",
      location: "Noida, UP",
      verified: true,
      rating: 5,
      date: "2026-09-22",
      title: "Mixes effortlessly in warm almond milk with turmeric",
      body: "I drink this as a golden milk collagen elixir before bed. Very soothing and zero clumping when stirred in warm milk.",
      usageDuration: "1 to 2 Months",
      mixRoutine: "In Water",
      helpfulCount: 16
    },
    {
      id: "rev_19",
      author: "Sunita L.",
      location: "Patna, BR",
      verified: true,
      rating: 5,
      date: "2026-08-04",
      title: "Nails stopped breaking after 4 weeks",
      body: "My nails were paper-thin due to frequent washing. Taking one scoop every morning in tea has transformed them completely.",
      usageDuration: "1 to 2 Months",
      mixRoutine: "In Morning Coffee",
      helpfulCount: 20
    },
    {
      id: "rev_20",
      author: "Harish M.",
      location: "Coimbatore, TN",
      verified: true,
      rating: 4,
      date: "2026-09-30",
      title: "GoKwik 1-click checkout was super fast",
      body: "Ordered via GoKwik on mobile and it took less than 30 seconds. Arrived in 3 days with a tight foil seal.",
      usageDuration: "Less than 1 Month",
      mixRoutine: "In Water",
      helpfulCount: 11
    },
    {
      id: "rev_21",
      author: "Ritu A.",
      location: "Dehradun, UK",
      verified: true,
      rating: 5,
      date: "2026-10-18",
      title: "Subtle glow on skin within 6 weeks",
      body: "Noticed that my skin requires less heavy moisturizers in the dry mountain autumn weather. Very happy with the quality.",
      usageDuration: "1 to 2 Months",
      mixRoutine: "In Smoothies / Juice",
      helpfulCount: 13
    },
    {
      id: "rev_22",
      author: "Farhan Q.",
      location: "Srinagar, JK",
      verified: false,
      rating: 1,
      date: "2026-06-25",
      title: "Did not realize it was non-veg fish source before buying",
      body: "My mother is strictly vegetarian and I ordered this without checking the non-veg mark carefully. Returned it unopened after contacting support. Please make the non-veg fish label more prominent on the front of the site.",
      usageDuration: "Less than 1 Month",
      mixRoutine: "In Water",
      helpfulCount: 68,
      brandResponse: "Thank you for this critical feedback, Farhan. We have elevated our Non-Vegetarian (Marine Fish) badge directly next to the product title so all customers can verify dietary suitability before purchasing."
    },
    {
      id: "rev_23",
      author: "Anuradha K.",
      location: "Thane, MH",
      verified: true,
      rating: 5,
      date: "2026-09-02",
      title: "Consistent daily routine is the secret",
      body: "On my 4th tub now. Hair texture is fuller and skin elasticity is genuinely improved. 5 stars for a clean Korean formula.",
      usageDuration: "3+ Months (Consistent)",
      mixRoutine: "In Morning Coffee",
      helpfulCount: 27
    },
    {
      id: "rev_24",
      author: "Gaurav T.",
      location: "Vadodara, GJ",
      verified: true,
      rating: 4,
      date: "2026-08-18",
      title: "Good product, dissolves clear, neutral aroma",
      body: "Tested in lukewarm water with a spoon. Took 20 seconds to turn completely translucent. Worth the price.",
      usageDuration: "1 to 2 Months",
      mixRoutine: "In Water",
      helpfulCount: 12
    },
    {
      id: "rev_25",
      author: "Isha P.",
      location: "Panaji, GA",
      verified: true,
      rating: 5,
      date: "2026-10-12",
      title: "Replaced my expensive beauty serums with this collagen",
      body: "Nourishing from the inside out works so much better than topical creams. Tastes totally fine in my morning green smoothie.",
      usageDuration: "1 to 2 Months",
      mixRoutine: "In Smoothies / Juice",
      helpfulCount: 21
    }
  ]
};
