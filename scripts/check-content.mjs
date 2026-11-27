import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const raw = fs.readFileSync(path.join(__dirname, "../site.config.ts"), "utf8");

assert(raw.includes('email: "hallo@astodigi.com"'), "Email must be hallo@astodigi.com");
assert(raw.includes("Kabupaten Tegal"), "Location must be Tegal");
assert(raw.includes("0857 0000 0000 (placeholder)"), "Phone must be marked placeholder");

const faqMatches = raw.match(/q:\s*"/g) || [];
assert.equal(faqMatches.length, 12, "FAQ count must be 12");

const postMatches = raw.match(/slug:\s*"([a-z0-9-]+)"/g) || [];
assert(postMatches.length >= 11, "Must contain all demo and post slugs");

assert(!raw.includes("5 Hari Kerja"), "5 Hari Kerja must be removed");
assert(!raw.includes("2 Putaran Revisi"), "2 Putaran Revisi must be removed");
assert(!raw.includes("100% Kepemilikan"), "100% Kepemilikan stat must be removed");

assert(raw.includes("bukan sistem rekam medis"), "Clinic compliance disclaimer required");
assert(raw.includes("Bisa dikembangkan bertahap"), "About principle 4 must match draft");

const projects = raw.split("  projects: [")[1].split("] as Project[]")[0];
const assets = [...projects.matchAll(/image: "(\/img\/projects\/[^"/]+)"/g)].map((match) => match[1]);
assert.equal(assets.length, 8);
for (const asset of assets) assert(fs.existsSync(path.join(__dirname, "../public", asset)), `Missing ${asset}`);
assert.deepEqual([...projects.matchAll(/slug: "([^"]+)"/g)].slice(0, 2).map((match) => match[1]), ["golfer", "pristinz"]);
assert.deepEqual([...projects.matchAll(/liveUrl: "([^"]+)"/g)].map((match) => match[1]), [
  "https://golfer.framer.website/",
  "https://prisitnz.framer.website/",
]);
assert.equal((projects.match(/label: "Demo Concept"/g) || []).length, 6);

console.log("PASS: Content constraints validated without extra dependencies.");
