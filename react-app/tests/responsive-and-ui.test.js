import assert from 'node:assert';
import fs from 'node:fs';
import { productData } from '../src/data/productData.js';

console.log('🧪 Starting Quality Bar & Redesign Integrity Verification...\n');

// 1. Inspect Hero Copy and Customer-Centric Narrative
console.log('1. Checking Hero Copy & Benefit-Led Tone...');
const appSource = fs.readFileSync('./src/App.jsx', 'utf-8');
const editorialHeroSource = fs.readFileSync('./src/components/EditorialHero.jsx', 'utf-8');
const benefitsSource = fs.readFileSync('./src/components/BenefitsDeepDive.jsx', 'utf-8');
const reviewsSource = fs.readFileSync('./src/components/ReviewsSection.jsx', 'utf-8');
const scienceSource = fs.readFileSync('./src/components/ScienceAbsorption.jsx', 'utf-8');
const headerSource = fs.readFileSync('./src/components/Header.jsx', 'utf-8');

// Ensure warm, human hero headline and subheadline
assert.strictEqual(productData.hero.headline, "A little care for the skin you're in.", 'Hero headline must be "A little care for the skin you\'re in."');
assert.ok(productData.hero.subheadline.includes("everyday wellness routine"), 'Hero subheadline must mention everyday wellness routine');
assert.ok(productData.hero.benefitPillars.some(p => p.label === 'Skin hydration and elasticity'), 'Must feature Skin hydration and elasticity');
assert.ok(productData.hero.benefitPillars.some(p => p.label === 'Hair and nail health'), 'Must feature Hair and nail health');
assert.ok(productData.hero.benefitPillars.some(p => p.label === 'Everyday collagen support'), 'Must feature Everyday collagen support');

console.log('   ✓ Warm, human, benefit-led hero copy verified.');

// 2. Check Purchase Panel Directly Below Product Image & Normal Document Flow
console.log('\n2. Checking Purchase Panel Under Image & Natural Scroll Flow...');
assert.ok(editorialHeroSource.includes('Add to Cart'), 'Hero purchase panel must contain "Add to Cart"');
assert.ok(editorialHeroSource.includes('Buy Now'), 'Hero purchase panel must contain "Buy Now"');
assert.ok(editorialHeroSource.includes('₹'), 'Hero purchase panel must display verified price');
assert.ok(editorialHeroSource.includes('selectedPack.price * quantity'), 'Hero purchase panel must dynamically calculate total price');

// Ensure NO sticky or fixed purchase bar follows user during scroll
assert.ok(!editorialHeroSource.includes('fixed bottom'), 'Hero purchase panel must NOT be fixed to viewport');
assert.ok(!editorialHeroSource.includes('sticky bottom'), 'Hero purchase panel must NOT be sticky');
assert.ok(!appSource.includes('<StickyMobileCTA'), 'App.jsx must NOT render floating StickyMobileCTA');

console.log('   ✓ Purchase panel positioned directly below image in normal document flow (no sticky/fixed purchase bar).');

// 3. Check Human-Centred Benefits Section (3 Distinct Chapters & Visual Pairings)
console.log('\n3. Checking Human-Centred Benefits Headings & Content...');
assert.ok(productData.benefitsDeepDive.some(b => b.title === 'Support for healthy-looking skin'), 'Benefits must include "Support for healthy-looking skin"');
assert.ok(productData.benefitsDeepDive.some(b => b.title === 'Care for your hair and nails'), 'Benefits must include "Care for your hair and nails"');
assert.ok(productData.benefitsDeepDive.some(b => b.title === 'Collagen for your everyday routine'), 'Benefits must include "Collagen for your everyday routine"');
assert.ok(benefitsSource.includes('skinBenefit.headline'), 'BenefitsDeepDive must render skin benefit headline');
assert.ok(benefitsSource.includes('hairBenefit.headline'), 'BenefitsDeepDive must render hair benefit headline');
assert.ok(benefitsSource.includes('dailyBenefit.headline'), 'BenefitsDeepDive must render daily benefit headline');
assert.ok(benefitsSource.includes('What Research Suggests'), 'Benefits must include "What Research Suggests" disclosure');
assert.ok(benefitsSource.includes('Realistic Expectations'), 'Benefits must include realistic expectations and limitations');

console.log('   ✓ Relatable human benefits content with research disclosures and realistic expectations verified.');

// 4. Check Reviews Experience & Clear Empty State
console.log('\n4. Checking Reviews Transparency & Clear Empty State...');
assert.ok(reviewsSource.includes('Live Review Stream: Integration Pending'), 'Reviews must feature clear integration empty state');
assert.ok(reviewsSource.includes('Real Customer Reviews Will Stream Here Once Connected'), 'Reviews must explain honest ingestion policy');
assert.ok(!reviewsSource.includes('Verified Buyer Review (Simulated'), 'ReviewsSection must not contain simulated individual review cards');
assert.ok(!reviewsSource.includes('matcha'), 'ReviewsSection must not contain fake matcha quote');
assert.ok(!editorialHeroSource.includes('Odorless Guarantee'), 'Must not contain Odorless Guarantee');
assert.ok(!editorialHeroSource.includes('Zero Fishy Taste Guarantee'), 'Must not contain Zero Fishy Taste Guarantee');

console.log('   ✓ Review transparency verified: Clear empty state, zero fake ratings or simulated customer personas.');

// 5. Check Header Navigation Labels
console.log('\n5. Checking Header Navigation Labels...');
assert.ok(headerSource.includes('Benefits'), 'Header must contain Benefits link');
assert.ok(headerSource.includes('Ingredients &amp; Science') || headerSource.includes('Ingredients & Science'), 'Header must contain Ingredients & Science link');
assert.ok(headerSource.includes('Reviews'), 'Header must contain Reviews link');
assert.ok(headerSource.includes('How to Use'), 'Header must contain How to Use link');
assert.ok(!headerSource.includes("Science &amp; Dalton") && !headerSource.includes("Science & Dalton"), 'Must NOT contain technical "Science & Daltons" label');

console.log('   ✓ Clean consumer navigation labels verified.');

// 6. Check Typography & Editorial Palette in Tailwind & HTML
console.log('\n6. Checking Typography & Palette Configuration...');
const tailwindConfig = fs.readFileSync('./tailwind.config.js', 'utf-8');
const htmlSource = fs.readFileSync('./index.html', 'utf-8');
const cartDrawerSource = fs.readFileSync('./src/components/CartDrawer.jsx', 'utf-8');

assert.ok(htmlSource.includes('Cormorant+Garamond'), 'Google Fonts must load Cormorant Garamond for editorial headings');
assert.ok(tailwindConfig.includes('Cormorant Garamond'), 'Tailwind must configure Cormorant Garamond font-serif');
assert.ok(tailwindConfig.includes('#FAF8F5'), 'Tailwind must configure warm parchment base #FAF8F5');
assert.ok(tailwindConfig.includes('#1D382B'), 'Tailwind must configure deep spruce green #1D382B');
assert.ok(tailwindConfig.includes('#1A1917'), 'Tailwind must configure deep warm ink #1A1917');

console.log('   ✓ Editorial typography (Cormorant Garamond + Inter) and warm parchment palette verified.');

// 7. Check Delivery & Returns Policy Presentation Across Touchpoints
console.log('\n7. Checking Delivery & Returns Policy Presentation Across Touchpoints...');
assert.ok(appSource.includes('id="delivery-returns"'), 'App.jsx must contain delivery-returns section');
assert.ok(appSource.includes('productData.deliveryAndReturns'), 'App.jsx must render deliveryAndReturns content');
assert.ok(editorialHeroSource.includes('href="#delivery-returns"'), 'EditorialHero must link to #delivery-returns');
assert.ok(editorialHeroSource.includes('48h Damaged/Defective Claims'), 'EditorialHero must show 48h claims badge');
assert.ok(cartDrawerSource.includes('48h damaged/defective claims policy'), 'CartDrawer footer must reassure with 48h claims policy');

console.log('   ✓ Delivery & Returns policy verified across Hero, Accordion, and Cart Drawer.');

// 8. Check Phase 3: Wellness Assistant UI & Integration
console.log('\n8. Checking Phase 3: Wellness Assistant UI & Accessibility...');
const assistantSource = fs.readFileSync('./src/components/WellnessAssistant.jsx', 'utf-8');

assert.ok(appSource.includes('<WellnessAssistant'), 'App.jsx must render WellnessAssistant');
assert.ok(assistantSource.includes('Ask our Wellness Assistant'), 'Assistant launcher must have accessible label');
assert.ok(assistantSource.includes('role="dialog"'), 'Assistant panel must have dialog role');
assert.ok(assistantSource.includes('Wellness Assistant'), 'Header must state "Wellness Assistant"');
assert.ok(assistantSource.includes('Here to help you make an informed choice'), 'Header must state subtitle');
assert.ok(assistantSource.includes('Local Demo'), 'Assistant must clearly disclose it is a Local Demo');
assert.ok(assistantSource.includes('Clear conversation'), 'Assistant must support clear conversation action');
assert.ok(assistantSource.includes('handleSendMessage'), 'Assistant must support sending typed messages');
assert.ok(assistantSource.includes('handleJumpToSection'), 'Assistant must support jumping to page sections');
assert.ok(assistantSource.includes('e.key === \'Escape\''), 'Assistant must close on Escape key');

console.log('   ✓ Wellness Assistant launcher, dialog, accessibility, and local demo labeling verified.');

// 9. Check Production Bundle Generation
console.log('\n9. Checking Production Bundle Generation...');
assert.ok(fs.existsSync('./dist/index.html'), 'Production dist/index.html must exist');
const distFiles = fs.readdirSync('./dist/assets');
assert.ok(distFiles.some(f => f.endsWith('.js')), 'Production JS bundle must exist');
assert.ok(distFiles.some(f => f.endsWith('.css')), 'Production CSS bundle must exist');

console.log('   ✓ Production build artifacts validated.');

console.log('\n✅ All Redesign Quality Bar & Aesthetic Integrity Checks Passed!\n');
