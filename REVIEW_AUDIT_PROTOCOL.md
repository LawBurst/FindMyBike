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
