#!/usr/bin/env node
// patch-encoding-effect.js
// Run from ~/aloha-encoding-effect:
//   node patch-encoding-effect.js
//
// Changes:
//   1. Removes unverified TikTok 562% stat
//   2. Removes unverified "58% of opening weekend audience" stat
//   3. Replaces "12+ brand partnerships" with "52 brand partners" for Bridgerton S4
//   4. Adds correct sourcing note to Bridgerton stat

const fs = require('fs');
const path = require('path');

const file = path.join(process.cwd(), 'pages', 'index.js');
if (!fs.existsSync(file)) {
  console.error('ERROR: pages/index.js not found. Run from ~/aloha-encoding-effect.');
  process.exit(1);
}

let code = fs.readFileSync(file, 'utf8');
let changes = 0;

// ── FIX 1: TikTok 562% stat (unverified — no traceable source found) ─────────
// Remove the entire sentence. Stat appeared as:
// "TikTok #Michael posts up 562% in one week, outpacing Euphoria."
const tiktok = /TikTok\s+#?Michael\s+posts?\s+up\s+562%[^.]*\.\s*/gi;
if (tiktok.test(code)) {
  code = code.replace(tiktok, '');
  console.log('✓ Fix 1: Removed unverified TikTok 562% stat');
  changes++;
} else {
  console.log('⚠  Fix 1: TikTok 562% pattern not found — check pages/index.js manually');
}

// ── FIX 2: "58% of opening weekend audience" (unverified) ────────────────────
// Verified figure (Chartmetric): 82% of Spotify listeners are under 35.
// Replace with the verified stat.
const audience58 = /58%\s+of\s+the\s+opening\s+weekend\s+audience\s+was\s+under\s+35\.?\s*/gi;
if (audience58.test(code)) {
  code = code.replace(audience58, '82% of post-biopic Spotify listeners are under 35 (Chartmetric, May 2026). ');
  console.log('✓ Fix 2: Replaced unverified "58% opening weekend" with verified Chartmetric listener stat');
  changes++;
} else {
  console.log('⚠  Fix 2: "58% of opening weekend" pattern not found — check pages/index.js manually');
}

// ── FIX 3: Bridgerton "12+" → "52 brand partners" ────────────────────────────
// Source: Netflix VP of Global Partnerships, Marketing Brew, March 2026
const bridgerton12 = /12\+\s+brand\s+partnerships?\s+for\s+Season\s+4/gi;
if (bridgerton12.test(code)) {
  code = code.replace(bridgerton12, '52 brand partners across Season 4 (Netflix, March 2026)');
  console.log('✓ Fix 3: Updated Bridgerton S4 brand partner count from "12+" to "52"');
  changes++;
} else {
  console.log('⚠  Fix 3: "12+ brand partnerships" pattern not found — check pages/index.js manually');
}

if (changes === 0) {
  console.log('\nNo changes made. The strings may be formatted differently in your source.');
  console.log('Make the following manual edits in pages/index.js:');
  console.log('  1. Remove sentence containing "562%" (TikTok stat — unverified)');
  console.log('  2. Replace "58% of the opening weekend audience was under 35" with');
  console.log('     "82% of post-biopic Spotify listeners are under 35 (Chartmetric, May 2026)"');
  console.log('  3. Replace "12+ brand partnerships for Season 4" with');
  console.log('     "52 brand partners across Season 4 (Netflix, March 2026)"');
  process.exit(0);
}

fs.writeFileSync(file, code, 'utf8');
console.log(`\n✓ ${changes} fix(es) applied to pages/index.js`);
console.log('Next step: cd ~/aloha-encoding-effect && vercel --prod --yes');
