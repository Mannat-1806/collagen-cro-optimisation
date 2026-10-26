import assert from 'node:assert';
import { generateAssistantResponse, INITIAL_GREETING } from '../src/utils/assistantEngine.js';
import { productData } from '../src/data/productData.js';

console.log('🧪 Starting Verification of Wellness Assistant Engine & Eligibility Knowledge (Phase 3)...\n');

// 1. Initial Greeting Verification (Conversational & Natural)
console.log('1. Checking Conversational Greeting & Starter Chips...');
assert.ok(INITIAL_GREETING.text.includes('Wellbeing Nutrition'), 'Greeting must introduce concierge with brand');
assert.ok(INITIAL_GREETING.text.includes('Wellness Assistant'), 'Greeting must introduce Wellness Assistant');
assert.ok(INITIAL_GREETING.text.includes('Ask me about ingredients'), 'Greeting must include friendly prompt');
assert.ok(!INITIAL_GREETING.text.includes('based strictly on verified product facts'), 'Must remove stiff overly formal disclaimers from initial greeting');
assert.ok(INITIAL_GREETING.suggestions.includes('Which age group can use this?'), 'Must have "Which age group can use this?" starter chip');
assert.ok(INITIAL_GREETING.suggestions.includes('What are the ingredients?'), 'Must have ingredients chip');
assert.ok(INITIAL_GREETING.suggestions.includes('What is the return policy?'), 'Must have returns chip');
console.log('   ✓ Conversational greeting and starter chips verified.');

// 2. Product Eligibility & Age Group Knowledge Verification
console.log('\n2. Checking Product Eligibility & Age Group Responses...');

// A. "Which age group can use this?"
const ageResp1 = generateAssistantResponse('Which age group can use this?');
assert.ok(ageResp1.text.includes('Good question!'), 'Must open with helpful, natural phrasing');
assert.ok(
  ageResp1.text.includes('couldn\'t confirm a specific recommended age range') ||
  ageResp1.text.includes('not specified'),
  'Must explicitly acknowledge that exact age range is not specified in verified sources'
);
assert.ok(ageResp1.text.includes('adults'), 'Must explain product is formulated for adults');
assert.ok(
  ageResp1.text.includes('children') && ageResp1.text.includes('teenagers'),
  'Must caution that children/teenagers should confirm with healthcare professional'
);
assert.ok(!ageResp1.text.includes('18 to 65 only'), 'Must NEVER invent an arbitrary age limit');
assert.ok(!ageResp1.text.includes('suitable for everyone'), 'Must NEVER imply product is suitable for everyone');
console.log('   ✓ "Which age group can use this?" provides an honest, natural answer without inventing limits.');

// B. "What age can use this?" and "Who can take this?"
const ageResp2 = generateAssistantResponse('What age can use this?');
assert.ok(ageResp2.text.includes('adults'), 'Must confirm adult target audience');
assert.ok(ageResp2.text.includes('not specified'), 'Must state exact age is not specified');

const whoResp = generateAssistantResponse('Who can take this?');
assert.ok(whoResp.text.includes('adults'), 'Must explain adult target formulation');
assert.ok(whoResp.text.includes('unisex'), 'Must explain unisex suitability');
console.log('   ✓ "What age can use this?" and "Who can take this?" routed correctly.');

// C. Teenagers & Minors: "Is this suitable for teenagers?" & "Can a 16-year-old take it?"
const teenResp1 = generateAssistantResponse('Is this suitable for teenagers?');
assert.ok(teenResp1.isSafetyNotice, 'Teenager query must trigger safety notice');
assert.ok(teenResp1.text.includes('not specifically formulated or recommended for children or teenagers'), 'Must advise against unguided teen use');
assert.ok(teenResp1.text.includes('pediatrician') || teenResp1.text.includes('healthcare professional'), 'Must direct teens to medical professional');

const teenResp2 = generateAssistantResponse('Can a 16-year-old take it?');
assert.ok(teenResp2.isSafetyNotice, '16-year-old query must trigger safety notice');
assert.ok(teenResp2.text.includes('under 18'), 'Must address under 18 guidance');
assert.ok(teenResp2.text.includes('fish or seafood allergy'), 'Must reiterate fish allergy warning for minors');
console.log('   ✓ Teenager and minor eligibility queries handled with responsible health guidance.');

// D. Older Adults: "Can older adults use it?"
const olderResp = generateAssistantResponse('Can older adults use it?');
assert.ok(olderResp.text.includes('mature and older adults'), 'Must validate mature adult use');
assert.ok(olderResp.text.includes('natural endogenous collagen synthesis steadily decreases'), 'Must explain biological context of aging');
assert.ok(olderResp.text.includes('de Miranda et al. 2021'), 'Must cite relevant clinical meta-analysis');
assert.ok(olderResp.text.includes('prescription medications'), 'Must advise consulting physician for pre-existing conditions');
console.log('   ✓ "Can older adults use it?" provides encouraging, science-backed guidance.');

// E. "Does this help with skin aging?" must route to Skin Benefits, NOT Age Group Eligibility!
const skinAgingResp = generateAssistantResponse('Does this help with skin aging and wrinkles?');
assert.ok(skinAgingResp.text.includes('Skin Hydration & Elasticity Evidence'), 'Must route to Skin Benefits');
assert.ok(skinAgingResp.text.includes('dermal fibroblasts'), 'Must explain skin mechanism');
assert.ok(!skinAgingResp.text.includes('couldn\'t confirm a specific recommended age range'), 'Must NOT trigger age group fallback for skin aging');
console.log('   ✓ "Does this help with skin aging?" correctly distinguishes anti-aging from demographic age.');

// 3. Health & Medical Safety Guardrails
console.log('\n3. Checking Critical Health & Safety Guardrails...');

// A. Pregnancy / Lactation
const pregResp = generateAssistantResponse('Can pregnant or breastfeeding women use it?');
assert.ok(pregResp.isSafetyNotice, 'Pregnancy query must trigger safety notice flag');
assert.ok(pregResp.text.includes('OB-GYN') || pregResp.text.includes('physician'), 'Must advise consulting physician/OB-GYN');
assert.ok(!pregResp.text.includes('guarantee safe'), 'Must never guarantee safety in pregnancy');
console.log('   ✓ Pregnancy/breastfeeding safety advice correctly routes to physician consultation.');

// B. Fish / Marine Allergies
const allergyResp = generateAssistantResponse('Is it safe if I have a fish allergy?');
assert.ok(allergyResp.isSafetyNotice, 'Allergy query must trigger safety notice flag');
assert.ok(allergyResp.text.includes('NOT consume'), 'Must strictly warn against consumption for fish allergy');
assert.ok(allergyResp.text.includes('wild-caught cold-water fish'), 'Must disclose fish source');
console.log('   ✓ Fish allergy safety warning correctly cautions customer.');

// C. Disease, Cure, Medication
const medResp = generateAssistantResponse('Will this cure my arthritis or kidney disease?');
assert.ok(medResp.isSafetyNotice, 'Medical cure query must trigger safety notice');
assert.ok(medResp.text.includes('not a drug') || medResp.text.includes('not a substitute'), 'Must disclaim medical treatment/cure');
assert.ok(medResp.text.includes('licensed medical professional'), 'Must advise medical professional');
console.log('   ✓ Disease/medication queries disclaim medical diagnosis and treatment.');

// D. Financial / Privacy
const cardResp = generateAssistantResponse('Here is my credit card 4111 2222');
assert.ok(cardResp.isSafetyNotice, 'Payment data query must trigger security notice');
assert.ok(cardResp.text.includes('never share passwords'), 'Must protect sensitive credentials');
console.log('   ✓ Privacy and financial data protection guardrail verified.');

// 4. Pricing, Packs, and Dynamic Selected Pack Awareness
console.log('\n4. Checking Pricing Math & Selected Pack Context...');
const singleJar = productData.packs[0];
const doublePack = productData.packs[1];

// Default context (single jar)
const priceResp1 = generateAssistantResponse('How much does it cost per day?', [], { selectedPack: singleJar });
assert.ok(priceResp1.text.includes('₹1,745'), 'Must mention single jar ₹1,745');
assert.ok(priceResp1.text.includes('~₹70 per day') || priceResp1.text.includes('₹70'), 'Must state ~₹70 per day');
assert.ok(priceResp1.text.includes('₹3,418'), 'Must also mention Pack of 2 value');
assert.ok(priceResp1.sectionLink && priceResp1.sectionLink.targetId === 'hero', 'Must link to hero purchase panel');

// Context when pack of 2 is selected
const priceResp2 = generateAssistantResponse('Tell me the price', [], { selectedPack: doublePack });
assert.ok(priceResp2.text.includes(doublePack.name), 'Must highlight selected Pack of 2');
assert.ok(priceResp2.text.includes('50 daily servings'), 'Must specify 50 servings for pack of 2');
console.log('   ✓ Pack pricing and dynamic selected pack math verified.');

// 5. Delivery & Returns Policy
console.log('\n5. Checking Delivery & Returns Policy Truth...');
const returnResp = generateAssistantResponse('What is your return policy if I open the jar?');
assert.ok(returnResp.text.includes('48 hours'), 'Must state 48 hours for damaged/defective items');
assert.ok(returnResp.text.includes('opened or used products are not eligible'), 'Must state hygiene exemption for opened jars');
assert.ok(returnResp.text.includes('support@wellbeingnutrition.com'), 'Must provide support email');
assert.strictEqual(returnResp.sectionLink.targetId, 'delivery-returns', 'Must link to delivery-returns section');
console.log('   ✓ Official Delivery & Returns policy response verified.');

// 6. Serving Instructions & Mixability
console.log('\n6. Checking Serving & Ritual Guidance...');
const usageResp = generateAssistantResponse('How do I take this every day?');
assert.ok(usageResp.text.includes('1 level scoop (8g)'), 'Must mention 1 level scoop (8g)');
assert.ok(usageResp.text.includes('calibrated measuring scoop'), 'Must mention scoop included');
assert.ok(usageResp.text.includes('coffee') || usageResp.text.includes('tea'), 'Must mention hot/cold mixing');
assert.strictEqual(usageResp.sectionLink.targetId, 'routine', 'Must link to routine section');
console.log('   ✓ Serving and mixability ritual verified.');

// 7. Ingredients, Daltons & Purity
console.log('\n7. Checking Ingredients & Daltons Science...');
const ingResp = generateAssistantResponse('What are the pure ingredients?');
assert.ok(ingResp.text.includes('100% Pure Hydrolyzed Marine Collagen Peptides'), 'Must state exact formulation');
assert.ok(ingResp.text.includes('0g Sugar'), 'Must verify 0g sugar');
assert.ok(ingResp.text.includes('7.4g of pure protein'), 'Must verify protein content');

const daltonResp = generateAssistantResponse('What does <1000 Daltons mean?');
assert.ok(daltonResp.text.includes('< 1,000 Daltons'), 'Must explain <1000 Da');
assert.ok(daltonResp.text.includes('300,000 Da'), 'Must contrast with native collagen');
assert.ok(daltonResp.text.includes('Kim DU et al.'), 'Must reference peer-reviewed literature');
console.log('   ✓ Ingredients and molecular science verified.');

// 8. Contextual Follow-up
console.log('\n8. Checking Contextual Follow-Up Handling...');
const historyPrice = [
  { sender: 'user', text: 'How much does it cost?' },
  { sender: 'assistant', text: '• Pack of 1: ₹1,745... • Pack of 2: ₹3,418...' }
];
const followUpPrice = generateAssistantResponse('And the double pack?', historyPrice);
assert.ok(followUpPrice.text.includes('Pack of 2'), 'Follow-up must resolve to Pack of 2');
assert.ok(followUpPrice.text.includes('50 daily servings'), 'Must explain 50 daily servings');

const historyAge = [
  { sender: 'user', text: 'Which age group can use this?' },
  { sender: 'assistant', text: 'Good question! I couldn\'t confirm a specific recommended age range... Formulated for adults...' }
];
const followUpAge = generateAssistantResponse('Can teenagers take it?', historyAge);
assert.ok(followUpAge.isSafetyNotice, 'Follow-up on teenagers must trigger safety notice');
assert.ok(followUpAge.text.includes('under 18') || followUpAge.text.includes('pediatrician'), 'Follow-up must advise medical consultation for minors');
console.log('   ✓ Contextual follow-up correctly handled for pricing and eligibility.');

// 9. Improved Fallback for Unsupported Queries
console.log('\n9. Checking Improved Fallback for Unsupported Queries...');
const unknownResp = generateAssistantResponse('Can you tell me about stock prices in Tokyo?');
assert.ok(unknownResp.text.includes('don\'t have verified information'), 'Must clearly acknowledge what is unknown');
assert.ok(unknownResp.text.includes('100% Pure Hydrolyzed Marine Collagen Peptides'), 'Must share relevant verified facts');
assert.ok(unknownResp.text.includes('support@wellbeingnutrition.com'), 'Must offer a useful next step');
assert.ok(unknownResp.suggestions.length >= 2, 'Must suggest relevant questions');
assert.ok(unknownResp.suggestions.includes('Which age group can use this?'), 'Fallback suggestions must include age question');
console.log('   ✓ Improved fallback behaviour verified (explains unknown, shares facts, offers next steps).');

// 10. Data Structure Integrity in productData.eligibility
console.log('\n10. Checking productData.eligibility Data Structure...');
assert.ok(productData.eligibility, 'productData.eligibility must exist');
assert.strictEqual(productData.eligibility.ageGuidance.isExactAgeSpecified, false, 'isExactAgeSpecified must be false');
assert.ok(productData.eligibility.ageGuidance.status.includes('Not specified in verified sources'), 'Must record status as Not specified in verified sources');
assert.ok(productData.eligibility.targetAudience.includes('Adults'), 'Target audience must specify adults');
assert.ok(productData.eligibility.ageGuidance.childrenAndTeens.includes('under 18'), 'Children and teens guidance must mention under 18');
console.log('   ✓ productData.eligibility data structure verified as single source of truth.');

console.log('\n✅ All Wellness Assistant Engine & Eligibility Tests Passed Successfully!\n');
