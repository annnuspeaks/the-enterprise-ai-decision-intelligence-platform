# Model 04 — Purchase Propensity EDA Summary

## Dataset validation
- Shape: **12,330 rows × 18 columns**
- Target: `Revenue` (Boolean)
- Missing cells: **0**
- Exact duplicate rows: **125**
- Purchase sessions: **1,908 (15.47%)**
- Non-purchase sessions: **10,422 (84.53%)**

## Initial observations
- Target is imbalanced; evaluate with precision, recall, F1, ROC-AUC and PR-AUC, not accuracy alone.
- Median product-related duration is **1109.9** for purchase sessions vs **510.2** for non-purchase sessions.
- Mean bounce rate is **0.0051** for purchase sessions vs **0.0253** for non-purchase sessions.
- `PageValues` is much higher in purchasing sessions; investigate whether it is available at prediction time and whether it could leak outcome-related information.
- There are 125 exact duplicate rows. Investigate and document a deduplication decision before training.

## Next
1. Review feature definitions and leakage risk, especially `PageValues`.
2. Create a stratified train/test split.
3. Build preprocessing + baseline classification pipeline.
4. Compare models using appropriate imbalanced-class metrics.
