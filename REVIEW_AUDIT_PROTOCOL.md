# FindMyBike review and model-verification protocol
Audit opened: 2026-11-04. Status: **in progress, not a completed 46-bike source verification**.

## Data precedence
1. Manufacturer current-generation model page for model/version, travel, geometry, wheel configuration, sizes, factory builds and MSRP. Store source URL and check date; never merge generations. If no direct source, leave value unverified.
2. Independent, hands-on exact-generation reviews for ride character. Full tests preferred to first rides; first looks and press releases do not establish ride performance.
3. Retailer reviews (Competitive Cyclist, Worldwide Cyclery), creators (Clint Gibbs, Awesome MTB) and broad educational videos (GMBN) supplement, rather than substitute for, independent exact-bike tests. Explicitly label retail/affiliate/sponsored contexts.
4. Search pages and generalized best-of guides are discovery only unless a model-specific hands-on section can be substantiated.

## Evidence tiers (per model, not by raw link count)
- A: Two or more genuinely independent hands-on tests of the **same current model generation**, preferably one sustained review; tests substantiate climbing and descending separately.
- B: One full, independent, exact-generation hands-on review, with supporting independently observed first ride or comparison.
- C: Only one first ride, indirect build test or multiple brief/related reviews; directional conclusion only.
- D: Manufacturer, product listing, first look, or no matching ride test. Spec verification only; ride rating is provisional.

Author/publisher independence matters. A syndicated article reposted on multiple domains counts as **one test**, not two. Source count does not imply independence or credibility.

## Ride scoring update, 0-10
Keep separate descriptors and ratings for climbing efficiency, technical climbing traction, descending grip/composure, maneuverability/playfulness and technical terrain. For each model:
- Normalize review claims into independent **observations**, each with reviewer, URL, date, test model and build, size, tires, suspension setup, terrain, and bias/disclosure notes.
- Assign comparable 1-10 **editorial sub-scores**, not copied publisher ratings. Anchor 5 = workable, 7 = solid, 8 = strong, 9 = category-leading, 10 = exceptional in category. Avoid inventing precision.
- Weigh exact-generation long-term independent ride reviews most (illustrative: 1.0), shorter first rides less (0.65), corroborating creator tests (0.6), retailer tests (0.35), manufacturer pages **0 for ride performance**. Weights apply to observations, not raw link counts.
- Cluster by publisher/tester to prevent double counting. Derive robust weighted consensus with a disagreement range. Never average an article's lack of a negative comment into a positive score.
- Flag contradictory accounts and test-condition mismatches (build, wheel size, travel, damper, tires, generation). Show user-facing confidence A/B/C/D, research date and evidence URLs.
- Re-run user scenario scoring with same input profile on old/new data, report changed top-three, score differences, and why. Do not silently modify the scoring algorithm while refreshing product scores.
- Do not change numerical ride scores until observations and source evidence are recorded; preliminary evidence must be labeled clearly.

## Current audit snapshot / immediate issues
- Current catalog: **46** entries displayed; detailed RESEARCH_V6 group: **15** entries and **24** links. Other bikes have broader older profile links, not independently audited here.
- Existing `researchV6.grade` was automatically set from review URL count; this is not an adequate evidence-confidence measure. Until a full review-link audit, use `Unverified evidence` or `Provisional`, not `Multi-review` / `Single review`.
- Revel Ranger V3: Bikepacking review dated 2026-06-02 is a hands-on ride; other linked sources require individual audit.
- Santa Cruz Tallboy 6: verified 2026-present manufacturer 140F/130R and four-bar platform, size-L geometry available.
- Trek Fuel Gen 7: Trek confirms current modular Fuel family; distinguish EX/LX variants from prior Fuel EX Gen 6.
- Specialized Epic 9: manufacturer current catalog, but the listed manufacturer link is **not an independent ride review**.
- Ibis Ripley SL: Pinkbike link is a model launch/first-look article, **not** a full trail test.
- Pivot Mach 4 SL: Pinkbike link is model launch coverage. Blister link must be assessed separately as hands-on evidence.
- Revel Rascal: Outside/Pinkbike 2026 field-test comparison provides genuine comparative ride evidence; a second URL is not required to label the test as observed, but confidence remains below A without independent corroboration.
- Scott Spark 910: BikeRadar source covers a related Spark DC build, not the exact 910 build. Flag as indirect.

## Full audit queue
1. Export all 46 models with generation/build IDs, manufacturer URL, geometry, MSRP and availability; verify each on current official pages.
2. Review all 24 RESEARCH_V6 URLs and all other model review links; label publication type, independence, date, tested build, generation, and hands-on evidence.
3. Find model-specific current independent reviews on Pinkbike, BikeRadar, Blister, The Loam Wolf, Singletracks, Bikepacking, ENDURO, Outside, NSMB, and relevant creator/retailer video channels.
4. Make evidence ledger with a row per publication and category-level observations. Audit 2027-model launch news separately from in-use 2026 tests.
5. Assign evidence tiers and calibrated climbing/descending scores. Compute revised rankings; report movements and weak-evidence alternatives.
6. Run regression checks for multiple rider types, budgets, preferred brands, and suspension choices; check manufacturer configs and link validity.
7. Update only source-supported bike records and present a changelog, with a follow-up review cadence.

### Sources used for initial verification
- https://web.santacruzbicycles.com/pages/product-support/tallboy-6-my-27
- https://www.trekbikes.com/us/en_US/fuel-generations/
- https://www.specialized.com/us/en/shop/bikes/mountain-bikes/cross-country-mountain-bikes/epic
- https://bikepacking.com/bikes/revel-ranger-v3-review/
- https://www.pinkbike.com/news/the-ibis-ripley-sl-2026-xc-dc-first-look.html
- https://www.pinkbike.com/news/pivots-new-mach-4-sl-adds-capability-not-weight.html
- https://www.outsideonline.com/outdoor-gear/bikes-and-biking/best-trail-bikes?scope=anon

This file documents the protocol; it does not certify all bike specifications, scores or individual links.

## Audit run: 2026-11-04 (first scoring update, v6.8)
**Scope and caveat:** This is a substantive first pass, **not** a completed 46-bike full independent model-and-build audit. Eleven bikes now have source-level evidence tiers (A/B/C/D); 35 are still awaiting that work. Manufacturer lineup spotchecks were performed for Canyon, Trek, Ibis, Pivot and Santa Cruz, but not every build/size/price. The daily 8 AM America/Denver automation will continue the queue.

### Reviewed bike evidence and scores
| Model | Evidence | Old climb | New climb | Old descend | New descend | Decision |
|---|---|---:|---:|---:|---:|---|
| Pivot Trailcat SL (2026) | A: Loam Wolf 2026 full test and Mountain Bike Action 2025 SL/LT long form | 9.20 | 9.20 | 8.95 | **8.80** | Fast steep descents notably less settled; reviewers differed on climbing position; retain climb |
| Pivot Trailcat LT (2026) | A: BikeRadar full test; Mountain Bike Action comparison; ENDURO 2026 group test | 8.80 | **8.70** | 9.30 | 9.30 | Good climbing, but ENDURO reported light front end and weaker grip on steep technical climbs |
| Revel Ranger V3 | A: BIKEPACKING.com 2026 month-long and NSMB Oct 2026 two-month | 9.35 | 9.35 | 9.15 | 9.15 | Consensus supported; no change |
| Pivot Mach 4 SL V4 | B: Blister 2026 5-month full test; Pinkbike launch not counted | 9.65 | 9.65 | 8.65 | 8.65 | Existing scores plausibly supported, more source comparison pending |
| Canyon Lux Trail 2027 | C: Pinkbike exact-generation first ride; ENDURO first look | 9.00 | 9.00 | 8.70 | 8.70 | No score change without full comparative corroboration |
| Trek Fuel EX Gen 7 | B: Singletracks EX/LX comparative hands-on, Pinkbike review link pending individual depth audit | 8.40 | 8.40 | 9.35 | 9.35 | No change |
| Trek Fuel LX Gen 7 | B: Singletracks full head-to-head with EX | 8.05 | 8.05 | 9.65 | 9.65 | No change |
| Transition Spur V2 | B: Pinkbike review March 2026 | 9.20 | 9.20 | 8.90 | 8.90 | No change |
| Santa Cruz Tallboy 6 | C: Pinkbike first ride; additional links need individual depth audit | 9.00 | 9.00 | 9.35 | 9.35 | No change |
| Ibis Ripley SL | D: Pinkbike introduction only | 9.35 | 9.35 | 8.55 | 8.55 | Scores provisional; don't treat as independently corroborated |
| Specialized Epic 9 | C: BikeMag first ride May 2026 | 9.75 | 9.75 | 8.60 | 8.60 | No change |

Numbers represent comparative editorial scores, not source-published numerical test ratings; the two changes are small confidence-calibrated adjustments that may be revised with new evidence.

### Geometry and source improvements
- Pivot Trailcat SL size-L low-setting geometry corrected to reach 480, stack 606, wheelbase 1226, chainstay 432, BB 338, STA 76°, HTA 65.8°; previously displayed medium-associated reach and wheelbase. Verified against dealer geometry reproduction (manufacturer-origin), flagged secondary.
- Canyon Lux Trail 2027 size-L geometry recorded (reach 470, stack 616, STA 76.1°, HTA 64.8°, wheelbase 1231, chainstay 440, seat tube 450). Secondary size chart crosschecked against Canyon 2026 announcement.
- Links now point to direct NSMB Revel Ranger riding review, direct Pivot LT full review, and Canyon 2027 first ride; non-testing launch links are not counted as long-term riding evidence.

### Specific supporting reviews
- https://nsmb.com/articles/revel-ranger/ (Oct 12 2026)
- https://bikepacking.com/bikes/revel-ranger-v3-review/ (Jun 2 2026)
- https://blisterreview.com/gear-reviews/pivot-mach-4-sl-v4 (Aug 2026)
- https://theloamwolf.com/reviews/bikes/pivot-trailcat-sl-review/ (Sep 20 2026)
- https://mbaction.com/pivot-trailcat-sl-lt-review/ (Nov 18 2025)
- https://www.bikeradar.com/reviews/bikes/mountain-bikes/full-suspension-mountain-bikes/pivot-trailcat-lt-pro-x0-review
- https://enduro-mtb.com/en/the-best-trail-bike-mtb-review/pivot-trailcat-lt-pro-x0/ (2026)
- https://www.singletracks.com/mtb-gear/trek-fuel-ex-vs-lx-review-putting-modular-claims-to-the-practical-test/ (Oct 20 2026)
- https://www.pinkbike.com/news/first-ride-canyon-lux-trail-light-slack-and-ready-for-long-rides-2026.html (2026)
- https://media-centre.canyon.com/en-INT/267961-canyon-unveils-redesigned-lux-trail-built-to-play-the-trail/ (Jul 14 2026)
- https://otesports.com/bikes/pivot-trailcat/ (geometry dealer)

### Next run priority
Finish 35 remaining bike-by-bike exact-generation verification and supporting review grading; prioritize the existing seven model/bike families with 2027 launches and verified generation changes, audit build weights by size, reconcile source-linked geometry and factory build configuration/US MSRP; then rescore only where a change is defensible. Validate UI rankings for repeatable XC/DC/trail/enduro rider profiles after any additional changes.

### Lineup reconciliation flag, 2026-11-04
Yeti's official support article **Current Yeti bike lineup**, updated Oct 28 2026, lists SB140 among past models but the brand's public SB140 purchase/product page still displays kits and prices. Treat the SB140's **new-production status as unresolved**; do not assert it is current or retired solely from one page. Confirm directly before dropping or retaining it in current-model recommendations.
- https://support.yeticycles.com/hc/en-us/articles/57879114400283-Current-Yeti-bike-lineup
- https://yeticycles.com/en-us/bikes/sb140

Manufacturer lineup spotchecks (not complete geometry/build audits) included the current Pivot, Ibis, Revel, Trek and Canyon model catalogs. Remaining model-specific checks remain in queue.
