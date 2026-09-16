# NEXORA — FINAL SEMESTER 3 SCREENSHOT PHASE

## Context

Nexora — The Enterprise AI Decision Intelligence Platform — is being developed incrementally across semesters.

Semester 3 ke current stage par screenshot/documentation capture intentionally HOLD ki ja rahi hai because:
- UI mein abhi visual discrepancies aur incomplete states hain.
- Platform UI abhi further polish/enhancement se guzregi.
- Nexora Landing Page par currently training/development dataset se derived customer records visible ho sakte hain, jo final presentation ke liye appropriate production-like representation nahi hai.
- Multiple models aur workflows abhi development/integration stages mein hain.
- Isliye abhi screenshots capture karke documentation mein freeze nahi karna hai.

## Screenshot Phase Trigger

Final screenshot phase tab start karna hai jab Semester 3 ka planned scope complete ho:

- Total 8 planned ML models mein se 4 models Semester 3 mein completed/integrated hon.
- In 4 models ke frontend workflows functional hon.
- Backend APIs properly integrated hon.
- Prediction/results flows working hon.
- Dashboard/model widgets final intended state mein hon.
- Major UI discrepancies resolve ho chuki hon.
- Landing page polished ho.
- Training/development dataset ke raw customer records ko directly "real customers" ke form mein misleadingly present na kiya ja raha ho.
- Final UI should represent the platform professionally for academic evaluation, GitHub documentation, portfolio presentation, and future demonstrations.

## Screenshot Storage — LOCKED DECISION

All Nexora screenshots will be stored in ONE GLOBAL location:

assets/screenshots/

Do NOT scatter screenshots across:
- frontend/
- backend/
- individual model directories
- notebooks/
- docs/

The screenshot workspace should remain consolidated.

Dedicated subdirectories may be created inside assets/screenshots/ only when they are actually required.

Preferred future structure:

assets/
└── screenshots/
    ├── platform/
    ├── model-01-customer-segmentation/
    ├── model-02-customer-churn/
    ├── model-03-<name>/
    ├── model-04-<name>/
    └── api/

Do not create unnecessary empty directories in advance.

## Final Screenshot Categories

At the end of Semester 3, first inspect the final UI and decide the exact screenshot set.

Potential categories:

### 1. Platform
- Final Nexora Landing Page
- Final Dashboard
- Overall platform/model overview
- Important navigation or major platform-level screens

### 2. Model 01 — Customer Segmentation
- Model workflow/input screen
- Prediction/result screen
- Important analytics/visualization screen, if applicable

### 3. Model 02 — Customer Churn
- Churn workflow/input screen
- Prediction/result screen
- Churn analytics/KPI screen, if applicable

### 4. Model 03
- Capture only after its final Semester 3 implementation is complete.

### 5. Model 04
- Capture only after its final Semester 3 implementation is complete.

### 6. API / Technical Evidence
Capture only those API/Swagger/backend screens that materially strengthen project documentation or academic demonstration.

## Screenshot Quality Rules

Before capturing final screenshots:

1. Start the final verified frontend/backend versions.
2. Confirm the application is working end-to-end.
3. Remove/avoid development-only states, debug overlays, temporary placeholders, and obvious test data.
4. Ensure no misleading representation of training data as actual production customers.
5. Ensure typography, spacing, cards, buttons, navigation, charts, icons, and responsive layout are in their intended final state.
6. Use consistent browser/device dimensions wherever practical.
7. Keep screenshots clean and presentation-ready.
8. Do not capture screenshots merely because a page exists; capture only after the corresponding feature/UI is considered final for Semester 3.
9. Do not alter working application logic merely to make a screenshot look better.
10. Preserve the actual final application state.

## Documentation Integration

After final screenshots are captured:

- Store them under:
  assets/screenshots/

- Update the relevant README/documentation files with relative paths.
- Use screenshots selectively rather than filling documentation with unnecessary images.
- Prefer screenshots that demonstrate:
  - platform identity
  - working ML workflows
  - prediction results
  - analytics
  - integration between frontend and backend
  - overall UI quality

## Git Workflow

Do NOT commit screenshot files individually during the current development phase.

At the end of Semester 3:

1. Capture the complete final screenshot set.
2. Review every screenshot.
3. Organize them under assets/screenshots/.
4. Update README/documentation references.
5. Run git status.
6. Verify that only intended files changed.
7. Stage screenshots + documentation together where appropriate.
8. Commit with a clear documentation/assets commit message.
9. Push to GitHub.
10. Then complete the relevant Master Checklist items.

## Current Status

Screenshot phase is intentionally ON HOLD.

Current location:

assets/screenshots/

No final screenshots need to be captured now.

Resume this phase only at the end of Semester 3, after 4 of the planned 8 models have been completed/integrated and the Nexora UI has reached its intended final Semester 3 presentation state.

IMPORTANT:
Do not prematurely capture or freeze screenshots before this milestone.
First finish the Semester 3 implementation and UI polishing.
Then perform a dedicated final screenshot review and capture session.