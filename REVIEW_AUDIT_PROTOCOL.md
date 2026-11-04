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

### Source coverage: Worldwide Cyclery (2026-11-04)
Search both the [Worldwide Cyclery blog](https://worldwidecyclery.com/blogs/worldwide-cyclery-blog) and the [official Worldwide Cyclery YouTube channel](https://www.youtube.com/@WorldwideCyclery) when auditing a model. Include relevant MTB Podcast episodes as contextual material. Treat these as retailer-produced editorial material, not automatically independent third-party scoring evidence. If the blog embeds or summarizes the same YouTube ride test, record both URLs for transparency but count it as one underlying test. Record bike generation/build, ride-test evidence versus product overview, sponsorship, publication date, and claims before changing scores.

## Expanded independent review search, 2026-11-04 (v6.9)
Previously verified A: Ranger V3, Trailcat SL and Trailcat LT. This source-discovery pass adds five A-grade entries (Mach 4 SL V4, Transition Spur V2, Yeti LT, Pivot Firebird Gen 5, Revel Ritual), for **8 verified A-grade bike records**, distributed XC 1, downcountry 2, trail 2, enduro 3. Specialized Epic 9 upgraded to B (one full independent multi-month comparison + independent first rides); Scott Spark RC C from a BikeRadar first ride. These are per-review evidence judgments, not claims that the entire 46-bike catalog has been manufacturer-audited.

Model / newly discovered independent reviews:
- Pivot Mach 4 SL V4: https://bikerumor.com/four-months-one-big-race-pivot-mach-4-sl-long-term-review/ (Oct 2 2026, Jeremy Benson four-month, Downieville race); https://nminus1bikes.substack.com/p/pivot-mach-4-sl-mountain-bike-review (Aug 12 2026, James Huang) alongside prior https://blisterreview.com/gear-reviews/pivot-mach-4-sl-v4 (Aug 2026 five-month). Reject BikeRadar 2023 Team XX SL as previous generation.
- Specialized Epic 9: https://www.bikeradar.com/features/tech/versus/orbea-oiz-vs-specialized-epic-9 (Oct 22 2026, back-to-back over months), https://www.pinkbike.com/news/first-ride-specialized-epic-9-unapologetically-race-focused.html (Apr 28 first ride), BikeMag first ride already recorded. Grade B until second long test.
- Yeti LT: https://theloamwolf.com/reviews/bikes/yeti-lt/ (Oct 23 2026 group test) alongside https://www.pinkbike.com/news/review-the-yeti-new-lt-enduro-adjustable-long-chainstay.html (Jul 14 extended review). One test per independent editorial team: group-test video and article count once.
- Pivot Firebird Gen 5: https://theloamwolf.com/reviews/bikes/pivot-firebird-gen-5/ (May 13 2026, full season) and https://www.pinkbike.com/news/review-2026-pivot-firebird-well-balanced-refined-enduro.html (Apr 2 2025); Seb Stott Feb 2026 followup https://www.pinkbike.com/news/staff-rides-seb-stotts-pivot-firebird-long-term-review.html counts as **same reviewer**, not a third independent test.
- Revel Ritual: https://theloamwolf.com/reviews/bikes/review-revel-ritual/ (Jan 30 2026) and https://www.pinkbike.com/news/review-the-revel-ritual-2026-enduro-bike-numbers-trail-bike-handling.html (Mar 9 2026 eight-month review).
- Transition Spur V2: https://theloamwolf.com/reviews/bikes/review-transition-spur-v2/ (Mar 3 2026), https://theloamwolf.com/reviews/bikes/transition-spur/ (Sep 23 2026 shootout), https://www.pinkbike.com/news/review-the-2026-transition-spur-is-lightly-revised-and-still-just-as-fun.html (Mar 3 2026).
- Scott Spark RC: https://www.bikeradar.com/reviews/bikes/mountain-bikes/2026-scott-spark-rc-world-cup-evo-first-ride-review (first ride only). A custom Dangerholm Spark story isn't an ordinary stock bike ride test.

**Scoring action:** No new climb/descend numeric change in this pass. For newly added RESEARCH_V6 entries, initial catalog numeric scores were preserved: Firebird 7.5/9.8 and Ritual 7.1/9.7. Score adjustments require cross-source normalized assessment and user-profile regression tests. Source count rises, evidence grade improves; score validation is a separate step.

**Ranking milestone:** 8 A bikes now spread XC 1 / DC 2 / Trail 2 / Enduro 3, so enduro has just reached the minimum 3-bike provisional ranking threshold. Remaining review discovery should target more current XC and trail bikes, plus broad manufacturer configuration spotchecks.

## Latest-generation-only independent review expansion: 2026-11-04 (v7.0)
Auditing rule hardened: current means exact manufacturer-confirmed generation and compatible travel/platform. A publication date in 2026 does NOT establish a review of a 2026-generation bike. Same-name old models cannot qualify. First looks, manufacturer marketing, simple product overviews, or side-by-side showroom videos do not count as full independent trail tests. Accompanying article and video for the same riding event is one test. Build/fork/tire differences should be recorded.

Fresh current-generation source findings:
- **Specialized Epic 9, Grade A from B**: Blister Oct 1 2026 full review tested over four months (https://blisterreview.com/gear-reviews/specialized-epic-9); Singletracks Sep 8 full current Epic 9 review (https://www.singletracks.com/mtb-gear/specialized-epic-9-sharpens-xc-race-focus-review/); BikeRadar Oct 22 multi-month independent comparison with current Oiz (https://www.bikeradar.com/features/tech/versus/orbea-oiz-vs-specialized-epic-9). Epic 8 sources excluded. Keep climb 9.75, descend 8.60 pending quantitative cross-model score calibration.
- **Santa Cruz Blur V5, Grade C, not A**: Aug 4 2026 current-generation first rides from Pinkbike (https://www.pinkbike.com/news/first-ride-santa-cruz-updates-the-blur-more-travel-more-weight-more-fun.html) and MBA (https://mbaction.com/new-santa-cruz-blur-first-ride-review/). Previous Blur V4 and Maklin showroom V4-versus-V5 comparison are not acceptable independent long-term V5 test evidence. Keep provisional climb 9.50 descend 8.00.
- **Ibis Ripmo V3, Grade A**: Blister two-month current V3 ride (https://blisterreview.com/gear-reviews/ibis-ripmo-v3), MBA independent long-term V3 (https://mbaction.com/ibis-ripmo-v3-review/), OutdoorGearLab V3 comparative test (https://www.outdoorgearlab.com/topics/biking/best-trail-mountain-bike?sort_field=1&specs=n). Both V2 and Ripley V5 ineligible as V3 sources. Preserve numeric climb 8.10 descend 9.40 until normalized reassessment.
- **Santa Cruz Hightower V4, Grade B**: manufacturer confirms 2026-present 150/160 (https://www.santacruzbicycles.com/pages/product-support/hightower-4-my-27); MBA Jan 2026 full review (https://mbaction.com/the-trail-bike-that-wants-to-do-everything-santa-cruz-hightower-review/). Don't use V3 reviews. Unchanged numeric scores.
- **Revel Rascal V3 / current chassis, Grade B conditional**: Singletrack World Sept 2026 two-month current X0 test on 150F/130R (https://singletrackworld.com/2026/09/revel-rascal-review-okay-trail-bikes-arent-so-pointless-after-all/). Pinkbike Dec 2025 field test was *Rascal SL* 140F/130R with different layup (https://www.pinkbike.com/news/revel-rascal-sl-review.html), now labeled Rascal in a 2026 Outside/Pinkbike roundup. Its distinct build/fork must be disclosed; verify generation equivalence at manufacturer before upgrading from B to A. Old-generation Rascal tests cannot qualify.
- **Yeti ASR Lunch Ride**: Pinkbike Oct 28 2026 rides updated build (115/130, 2024-derived chassis), not the same 120F standard ASR; report only as variant/context, not an independent test of the standard build (https://www.pinkbike.com/news/yeti-asr-lunch-ride-review-meatier-tires-more-travel.html).
- **Trek Supercaliber**: Manufacturer currently labels Gen 2 (https://www.trekbikes.com/us/en_US/supercaliber/). Any Gen 1 review excluded; no new current-gen independent full ride verified in this pass.

Numeric scores unchanged in v7.0 because this pass expands evidence/grades, and score recalibration against comparable current models is a separate evidence-traceable step. Pending: source-level audit of all remaining models (including hardtails) plus build price/weight checks. The existing review-count display reflects URLs, not count of independent tests.

## Allied Cycle Works XC / Trail inclusion: 2026-11-04 (v7.6)
**Catalog grew from 46 to 48 bikes.** Added current Allied BC40 (XC) and current Allied FITZ (Trail). Added manufacturer-provided size-L geometry, current manufacturer *from* build prices (these are configurable starting prices, not confirmed live checkout amounts), product photos with Allied credits, brand-preference checkbox, baseline comparative ride scores and review evidence. Framesets intentionally excluded from build choices. Existing scoring formula unchanged. Brand filtering now supports Allied.

**Allied FITZ** — exact current 2026 chassis, factory travel **140/140mm**, 29-inch, size-L reach 480 / stack 633.3 / HTA 64.5° / STA 76.5° / wheelbase 1254 / chainstay 440, official https://alliedcycleworks.com/collections/fitz . Manufacturer starting complete build listings: GX AXS $7,020, X0 $8,765, XX SL $11,425. Blister measured **27.2 lb, L, X0, stock 140/140**, Oct 30 2026, four months' use https://blisterreview.com/gear-reviews/allied-fitz . Pinkbike Mike Kazimer Apr 30 2026 current 140/140 ride test https://www.pinkbike.com/u/mikekazimer/blog/allied-fitz-review-the-xc-riders-trail-bike.html . Bikerumor Jeremy Benson Oct 16 2026 six-week independent test was **modified, available 150/150mm configuration**, not base factory 140/140, https://bikerumor.com/allied-fitz-review/ . Thus **A** evidence, 3 independent test programs but only 2 directly stock 140/140 rides; 150/150 is caveated, don't use its descending conclusions unadjusted. Common theme: light and efficient superb climbing/traction with capable yet firmer/less aggressive descending. Provisional subjective comparative ride scores **climb 9.25 / descend 8.8**; no existing-bike score adjustments.

**Allied BC40** — current factory XC race bike 120/120, 29-inch, size-L reach 475 / stack 622 / HTA 66.5° / STA 76° / wheelbase 1210 / chainstay 435, official https://alliedcycleworks.com/collections/bc40 . Listed Shimano XT M8200 $6,885; GX Transmission $6,970; X0 Transmission $8,710; XTR M9200 Di2 $10,920; XX SL $12,905, all configuration-dependent manufacturer starting prices. **Crucial version warning:** current BC40 has revised lighter/stiffer carbon layup (claimed 100g reduction), revised co-molded bottom bracket and main pivot, added chainguide. Pinkbike Mike Levy Nov 3 2022 https://www.pinkbike.com/news/field-test-allied-cycle-works-bc40-the-fun-race-bike.html and Escape Collective James Huang Dec 19 2023 https://escapecollective.com/allied-bc40-review/ tested the **previous laminate revision**. They appear as *historical context only*, **zero verified current revised-frame tests**. Grade **C**, no verified icon, no claim of same-generation independent consensus. Initial comparative editorial climb 9.3 / descend 8.35 are **provisional**, pending exact revised-frame testing. Catalog full bike weight left unverified (claimed frame + shock 1950g, not a complete-bike weight).

**Scoring caution:** Both models now participate in recommendations because user expressly requested them. Their baseline ratings are estimates relative to existing ride characteristics until cross-bike normalization. Their brand/build/ride fit is processed by the existing algorithm. Continue looking for current BC40 revision reviews.
