import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import {
  DIRECTORY_CARDS,
  WORKSHOP_PARTNERS,
  MANDATE_ITEMS,
  SPONSOR_OPTIONS,
  PLAIN_LANGUAGE_SUMMARIES,
  BOARD_MEMBERS,
} from "../data/siteContent.js";
import {
  filterDirectoryCards,
  validateArtistContactForm,
  validateSponsorRequest,
  validateNewsletterForm,
} from "./filters.js";

test("filterDirectoryCards handles All, Ceramics, Music, Other Art, and search", () => {
  const all = filterDirectoryCards(DIRECTORY_CARDS, "All", "");
  assert.equal(all.length, 4);
  assert.equal(all[3].displayTitle, "Music & Other Art Artist");

  const ceramics = filterDirectoryCards(DIRECTORY_CARDS, "Ceramics", "");
  assert.equal(ceramics.length, 1);
  assert.equal(ceramics[0].displayTitle, "Ceramic Artist");

  const music = filterDirectoryCards(DIRECTORY_CARDS, "Music", "");
  assert.equal(music.length, 1);
  assert.equal(music[0].displayTitle, "Music Artist");

  const otherArt = filterDirectoryCards(DIRECTORY_CARDS, "Other Art", "");
  assert.equal(otherArt.length, 1);
  assert.equal(otherArt[0].displayTitle, "Other Art Artist");

  const searchPrint = filterDirectoryCards(DIRECTORY_CARDS, "All", "Print");
  assert.equal(searchPrint.length, 1);
  assert.equal(searchPrint[0].displayTitle, "Print Artist");
});

test("form validations enforce required fields and CASL/tax consent", () => {
  assert.equal(
    validateArtistContactForm({ nameOrBusiness: "", email: "a@b.ca" }).valid,
    false
  );
  assert.equal(
    validateArtistContactForm({ nameOrBusiness: "Studio", email: "a@b.ca" }).valid,
    true
  );

  assert.equal(
    validateSponsorRequest({
      businessName: "Local Cafe",
      email: "info@cafe.ca",
      taxAcknowledge: false,
    }).valid,
    false
  );
  assert.equal(
    validateSponsorRequest({
      businessName: "Local Cafe",
      email: "info@cafe.ca",
      taxAcknowledge: true,
    }).valid,
    true
  );

  assert.equal(
    validateNewsletterForm({ firstName: "Sam", email: "sam@example.ca", consent: false }).valid,
    false
  );
  assert.equal(
    validateNewsletterForm({ firstName: "Sam", email: "sam@example.ca", consent: true }).valid,
    true
  );
});

test("entire codebase has zero dollar prices, zero rounded-full pills, and zero forbidden words", () => {
  const forbiddenPatterns = [
    /\$\d+/,
    /rounded-full/,
    /\bmaker\b/i,
    /\bmakers\b/i,
    /supabase/i,
    /\.ics\b/i,
    /3-Field Checkout/i,
    /Auto-Compressed/i,
    /300-DPI/i,
    /Purpose 2\(/i,
    /Section 28/i,
    /Sections 56/i,
    /\bCRRA\b/,
    /\bCARFAC\b/,
    /\bCFM\b/,
    /Wheelchair & Transit Standards/i,
  ];

  const srcRoot = path.resolve(process.cwd(), "src");
  const filesToCheck = [];

  function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (entry.name.endsWith(".js") && !entry.name.endsWith(".test.js")) {
        filesToCheck.push(fullPath);
      }
    }
  }
  walk(srcRoot);

  assert.ok(filesToCheck.length >= 10);
  for (const file of filesToCheck) {
    const content = fs.readFileSync(file, "utf8");
    for (const pattern of forbiddenPatterns) {
      assert.equal(
        pattern.test(content),
        false,
        `Forbidden pattern ${pattern} found in ${file}`
      );
    }
  }

  assert.equal(WORKSHOP_PARTNERS.length, 4);
  assert.equal(MANDATE_ITEMS.length, 4);
  assert.equal(SPONSOR_OPTIONS.length, 4);
  assert.equal(BOARD_MEMBERS.length, 3);
  assert.ok(PLAIN_LANGUAGE_SUMMARIES.en && PLAIN_LANGUAGE_SUMMARIES.pa);
});
