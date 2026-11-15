import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import {
  EVENTS_DATA,
  DIRECTORY_ARTISTS,
  WORKSHOPS_DATA,
  MANDATE_ITEMS,
  SPONSOR_TIERS,
  PLAIN_LANGUAGE_SUMMARIES,
  BOARD_MEMBERS,
  VOLUNTEER_ROLES,
} from "../data/siteContent.js";
import {
  filterEvents,
  filterDirectoryArtists,
  getBoothTierDetails,
  validateWorkshopContact,
  validateArtistApplication,
  validateSponsorRequest,
} from "./filters.js";

test("filterEvents filters by category and search query", () => {
  assert.equal(filterEvents(EVENTS_DATA, "All", "").length, 3);
  assert.equal(filterEvents(EVENTS_DATA, "Exhibitions", "").length, 1);
  assert.equal(filterEvents(EVENTS_DATA, "All", "potters").length, 2);
  assert.equal(filterEvents(EVENTS_DATA, "Concerts", "nonexistent").length, 0);
});

test("filterDirectoryArtists filters by discipline and search query", () => {
  assert.equal(filterDirectoryArtists(DIRECTORY_ARTISTS, "All", "").length, 4);
  assert.equal(filterDirectoryArtists(DIRECTORY_ARTISTS, "Ceramics", "").length, 1);
  assert.equal(filterDirectoryArtists(DIRECTORY_ARTISTS, "All", "Musician").length, 1);
});

test("getBoothTierDetails returns exact $120 and $150 booth prices", () => {
  assert.deepEqual(getBoothTierDetails("standard_120"), {
    id: "standard_120",
    fee: 120,
    label: "$120 Standard Booth",
  });
  assert.deepEqual(getBoothTierDetails("full_150"), {
    id: "full_150",
    fee: 150,
    label: "$150 Full 10x10 Booth",
  });
});

test("form validations require non-empty fields", () => {
  assert.equal(validateWorkshopContact({ fullName: "", contact: "" }).valid, false);
  assert.equal(
    validateWorkshopContact({ fullName: "Jordan", contact: "jordan@example.ca" }).valid,
    true
  );

  assert.equal(validateArtistApplication({ artistName: "", email: "a@b.ca" }).valid, false);
  assert.equal(
    validateArtistApplication({ artistName: "Studio", email: "a@b.ca" }).valid,
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
});

test("content and components contain zero forbidden jargon or maker terminology", () => {
  const forbiddenPatterns = [
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

  assert.equal(WORKSHOPS_DATA.length, 3);
  assert.equal(MANDATE_ITEMS.length, 4);
  assert.equal(SPONSOR_TIERS.length, 4);
  assert.equal(BOARD_MEMBERS.length, 3);
  assert.equal(VOLUNTEER_ROLES.length, 2);
  assert.ok(PLAIN_LANGUAGE_SUMMARIES.en && PLAIN_LANGUAGE_SUMMARIES.pa);
});
