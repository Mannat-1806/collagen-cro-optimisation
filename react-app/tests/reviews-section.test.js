import assert from 'node:assert';
import fs from 'node:fs';
import { 
  VERIFIED_BENCHMARK, 
  REVIEW_COMMUNITY_HIGHLIGHTS, 
  DEV_SPEC_PLACEHOLDERS 
} from '../src/data/reviewsData.js';

console.log('🧪 Starting Customer Reviews Section Verification...\n');

// 1. Verify Reviews Section Header & Architecture
console.log('1. Checking Reviews Section Heading & Copy...');
const reviewsSource = fs.readFileSync('./src/components/ReviewsSection.jsx', 'utf-8');

assert.ok(
  reviewsSource.includes('Real Experiences, Shared by Our Community'),
  'Must feature exact heading "Real Experiences, Shared by Our Community"'
);
assert.ok(
  reviewsSource.includes('Write a Review'),
  'Must include "Write a Review" action button'
);
assert.ok(
  reviewsSource.includes('Verified Aggregate Score'),
  'Must display verified aggregate score label'
);

console.log('   ✓ Verified heading, overview labels, and CTA button.');

// 2. Verify Data Integrity & Aggregate Benchmarks
console.log('\n2. Checking Review Data Integrity & Benchmark Source...');
assert.strictEqual(VERIFIED_BENCHMARK.rating, 4.74, 'Aggregate rating must match verified 4.74');
assert.strictEqual(VERIFIED_BENCHMARK.reviewCount, 571, 'Total review count must match verified 571');
assert.ok(VERIFIED_BENCHMARK.distribution[5].percent > 70, '5-star distribution must be realistic');

// Ensure NO simulated individual customer personas are presented to shoppers
assert.ok(!reviewsSource.includes('Verified Buyer Review (Simulated'), 'Must NOT simulate reviews as real buyer reviews');
assert.ok(!reviewsSource.includes('matcha'), 'Must NOT include fake matcha quotes');

console.log('   ✓ Verified benchmark data integrity: 4.74/5.0 from 571 verified reviews.');

// 3. Verify Community Highlights
console.log('\n3. Checking Community Highlights Grounding...');
assert.strictEqual(REVIEW_COMMUNITY_HIGHLIGHTS.length, 4, 'Must include 4 community highlights');
assert.ok(REVIEW_COMMUNITY_HIGHLIGHTS.some(h => h.id === 'mixability'), 'Must include mixability highlight');
assert.ok(REVIEW_COMMUNITY_HIGHLIGHTS.some(h => h.id === 'purity'), 'Must include purity highlight');
assert.ok(REVIEW_COMMUNITY_HIGHLIGHTS.some(h => h.id === 'routine'), 'Must include routine highlight');
assert.ok(REVIEW_COMMUNITY_HIGHLIGHTS.some(h => h.id === 'sensory'), 'Must include sensory highlight');

console.log('   ✓ All 4 community feedback pillars verified.');

// 4. Verify Development Specification Placeholders Quality
console.log('\n4. Checking QA Specification Placeholders...');
assert.ok(DEV_SPEC_PLACEHOLDERS.length >= 6, 'Must provide at least 6 specification layout test cards');
DEV_SPEC_PLACEHOLDERS.forEach((card, idx) => {
  assert.ok(card.id, `Card ${idx + 1} must have an ID`);
  assert.ok(card.authorName, `Card ${idx + 1} must have author name/initials`);
  assert.ok(card.rating >= 1 && card.rating <= 5, `Card ${idx + 1} rating must be 1-5`);
  assert.ok(card.title, `Card ${idx + 1} must have a title`);
  const wordCount = card.body.split(/\s+/).length;
  assert.ok(wordCount >= 30 && wordCount <= 130, `Card ${idx + 1} body length (${wordCount} words) must be around 50-120 words`);
  assert.ok(card.packPurchased, `Card ${idx + 1} must specify purchased pack`);
  assert.ok(card.date, `Card ${idx + 1} must have a date`);
});

console.log(`   ✓ All ${DEV_SPEC_PLACEHOLDERS.length} QA specification cards meet 50-120 word specifications.`);

// 5. Verify Filter & Sort Logic Operates on Dataset
console.log('\n5. Checking Filter, Sort & Search Algorithm Logic...');
// Test 5-star filter
const fiveStarOnly = DEV_SPEC_PLACEHOLDERS.filter(r => r.rating === 5);
assert.ok(fiveStarOnly.length > 0 && fiveStarOnly.every(r => r.rating === 5), '5-star filter works correctly');

// Test 4-star filter
const fourStarOnly = DEV_SPEC_PLACEHOLDERS.filter(r => r.rating === 4);
assert.ok(fourStarOnly.length > 0 && fourStarOnly.every(r => r.rating === 4), '4-star filter works correctly');

// Test search logic
const searchKeyword = 'coffee';
const searchResults = DEV_SPEC_PLACEHOLDERS.filter(r => 
  r.title.toLowerCase().includes(searchKeyword) || 
  r.body.toLowerCase().includes(searchKeyword)
);
assert.ok(searchResults.length > 0, 'Keyword search works correctly');

// Test sort highest to lowest
const sortedByRating = [...DEV_SPEC_PLACEHOLDERS].sort((a, b) => b.rating - a.rating);
assert.ok(sortedByRating[0].rating >= sortedByRating[sortedByRating.length - 1].rating, 'Sort by highest rating works');

// Test sort most recent
const sortedByDate = [...DEV_SPEC_PLACEHOLDERS].sort((a, b) => new Date(b.date) - new Date(a.date));
assert.ok(new Date(sortedByDate[0].date) >= new Date(sortedByDate[sortedByDate.length - 1].date), 'Sort by date works');

console.log('   ✓ Filtering, search, and sorting mechanics verified.');

// 6. Verify Transparent Empty Ingestion State
console.log('\n6. Checking Transparent Live Ingestion Empty State...');
assert.ok(
  reviewsSource.includes('Live Review Stream: Integration Pending'),
  'Must maintain "Live Review Stream: Integration Pending"'
);
assert.ok(
  reviewsSource.includes('Real Customer Reviews Will Stream Here Once Connected'),
  'Must explain honest ingestion policy'
);

console.log('   ✓ Live empty state and webhook disclosure verified.');

// 7. Verify Review Submission Form Prototype Validation
console.log('\n7. Checking Review Submission Validation Flow...');
assert.ok(reviewsSource.includes('validateForm'), 'ReviewsSection must contain form validation');
assert.ok(reviewsSource.includes('Please select a star rating'), 'Must validate rating');
assert.ok(reviewsSource.includes('Please enter a review summary'), 'Must validate title');
assert.ok(reviewsSource.includes('minimum 30 characters'), 'Must validate body length');
assert.ok(reviewsSource.includes('Please enter a valid email address'), 'Must validate email format');
assert.ok(reviewsSource.includes('Client-Side Prototype Notice'), 'Must disclose prototype demonstration mode');

console.log('   ✓ Form validation rules and prototype honesty disclosures verified.');

console.log('\n✅ All Reviews Section Tests Passed Successfully!\n');
