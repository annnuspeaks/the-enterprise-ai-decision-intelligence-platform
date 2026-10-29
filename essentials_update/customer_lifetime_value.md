# Nexora — Model 03 Leftover Tasks
## Customer Lifetime Value (CLV) Prediction

**Purpose:** Record the remaining non-blocking work for Model 03 so development can pause while Model 04 is started for the Semester 3 submission target.

**Current decision (29 October 2026):** Model 03 is functionally usable based on the tests already performed. No known blocking functional issue is currently reported. Defer the remaining polish and final verification tasks until after the Model 04 semester target is addressed.

> Resume this checklist later. Deferred items are not considered completed.

---

## 1. Current Functional Status

- [x] CLV backend/API implemented and responding.
- [x] Prediction endpoint tested: `POST /customer-lifetime-value/predict`.
- [x] Frontend landing page implemented.
- [x] Prediction form implemented.
- [x] Frontend API service integration implemented.
- [x] Prediction result page implemented.
- [x] Landing, prediction, and result routes added.
- [x] Valid prediction flow tested successfully.
- [x] Empty required input validation tested.
- [x] Negative input validation tested.
- [x] Decimal count validation tested for invoice count.
- [x] Inconsistent input validation tested (zero invoice count with positive total value).
- [x] Backend-unavailable error handling tested; page did not crash.
- [x] Direct result-page access without prediction state tested; fallback message/link displayed.

**Target definition:** The model predicts fixed one-year future gross purchase value. It should not be described as profit or as a true unlimited/full customer lifetime value.

---

## 2. Deferred Leftover Tasks

### M03-L1 — Landing-page visual polish
- [ ] Match Model 03 hero card top padding more closely to Model 02.
- [ ] Standardize the Model 03 capsule/chip styling with Models 01 and 02 (height, padding, typography, border, gradient).
- [ ] Review title/description spacing and overall hero balance.
- [ ] Check CTA button and feature-chip styling after the main layout is stable.

### M03-L2 — Cross-model consistency
- [ ] Compare the Model 01, Model 02, and Model 03 landing pages side by side.
- [ ] Make model capsules visually consistent while preserving each model's identity.
- [ ] Re-check Model 01's “Customer Segmentation” heading so the final “g” is not clipped.
- [ ] Preserve existing illustrations, page content, and functionality unless a change is necessary for these fixes.

### M03-L3 — Responsive UI verification
- [ ] Verify the landing page at desktop width.
- [ ] Verify the landing page at tablet width.
- [ ] Verify the landing page at mobile width.
- [ ] Check that the capsule, heading, buttons, and hero content do not clip or overlap.

### M03-L4 — Regression and release checks
- [ ] Re-run a valid prediction from the form through the result page.
- [ ] Re-check empty/invalid input validation.
- [ ] Re-check backend-unavailable messaging.
- [ ] Re-check direct result-page access without state.
- [ ] Run the frontend production build and resolve any build errors, if present.
- [ ] Confirm Models 01 and 02 still render and navigate correctly after shared-style changes.

### M03-L5 — Documentation and evidence
- [ ] Complete API documentation.
- [ ] Update the master README with Model 03's implemented functionality and correct target definition.
- [ ] Capture final landing, prediction, and result screenshots.
- [ ] Update the master project checklist with verified completion status.

---

## 3. Resume Order

When returning to Model 03, work in this order:

1. Inspect the actual current files and browser state before editing; do not assume earlier replacement files were applied.
2. Fix Model 03 hero top spacing and capsule styling.
3. Fix/verify Model 01 capsule gradient and heading clipping.
4. Compare Models 01–03 side by side and make only necessary, minimal CSS changes.
5. Verify responsive layout.
6. Run workflow regression tests and production build.
7. Finish documentation and screenshots.
8. Mark items complete only after verifying them.

---

## 4. Pause / Handoff Note

**Model 03 is paused, not abandoned.** Its main prediction workflow is functional based on the recorded tests. The tasks above are deferred polish, verification, and documentation work, not known blockers to the existing prediction flow.

**Next project focus:** Start Model 04 fundamentals for the Semester 3 target. Keep the Model 03 checklist unchanged until its deferred tasks are resumed and verified.

**Last status recorded:** 29 October 2026.
