# Model 04 — Purchase Propensity

## 1. Overview

Purchase Propensity estimates whether an online-shopping browsing session is likely to result in a purchase. The target variable is `Revenue`, a Boolean outcome indicating whether the session resulted in a purchase.

This model is part of **Nexora — The Enterprise AI Decision Intelligence Platform**. Its inference API is implemented with FastAPI and serves the saved preprocessing/model pipeline.

## 2. Dataset

- **Dataset file:** `data/raw/online_shoppers_intention.csv`
- **Observed shape:** 12,330 rows × 18 columns
- **Target:** `Revenue`
- **Missing cells:** 0
- **Exact duplicate rows reported during validation:** 125
- **Purchase sessions:** 1,908 (15.47%)
- **Non-purchase sessions:** 10,422 (84.53%)

The target is imbalanced, so accuracy should not be considered in isolation. Precision, recall, F1, ROC-AUC, and PR-AUC are also useful for evaluation.

### EDA observations

- Median product-related duration was 1,109.9 for purchase sessions versus 510.2 for non-purchase sessions.
- Mean bounce rate was 0.0051 for purchase sessions versus 0.0253 for non-purchase sessions.
- `PageValues` was substantially higher for purchasing sessions and was excluded from the final feature set as a conservative measure against potential outcome leakage.
- The EDA summary records 125 exact duplicate rows. The available summary does not establish whether all duplicates were removed before training; verify the modeling notebook if this decision needs to be documented precisely.

## 3. Notebooks and reports

| Resource | Location |
|---|---|
| Exploratory data analysis notebook | `notebooks/01_purchase_propensity_eda.ipynb` |
| Feature engineering and modeling notebook | `notebooks/02_feature_engineering_and_modeling.ipynb` |
| EDA summary | `notebooks/EDA_summary.md` |
| Model comparison metrics | `reports/model_comparison_metrics.csv` |
| Threshold review | `reports/threshold_review.csv` |
| Backend inference pipeline | `backend/models/purchase_propensity/purchase_propensity_pipeline.joblib` |
| Backend model metadata | `backend/models/purchase_propensity/model_metadata.json` |

The CSV reports and model metadata are the references for the current evaluation figures below.

## 4. Model selection and evaluation

The selected model is **Random Forest**, selected using average precision (PR-AUC). The modeling workflow uses a stratified 80/20 train/test split with `random_state=42`. The Random Forest configuration recorded in the modeling workflow uses 300 trees, `min_samples_leaf=2`, `class_weight="balanced"`, and `n_jobs=-1`.

### Holdout metrics at the default 0.50 cutoff

| Metric | Value |
|---|---:|
| Accuracy | 0.7997 |
| Precision | 0.3770 |
| Recall | 0.4293 |
| F1 | 0.4015 |
| ROC-AUC | 0.7827 |
| PR-AUC (average precision) | 0.3655 |

The comparison report's metrics use the model's default prediction cutoff (0.50 for this binary classifier).

## 5. Decision threshold review

The inference service uses a decision threshold of **0.40**. Among the reviewed cutoffs (0.30, 0.40, 0.50, 0.60), 0.40 had the highest F1 in the threshold-review report.

| Threshold | Precision | Recall | F1 |
|---:|---:|---:|---:|
| 0.30 | 0.2715 | 0.8272 | 0.4088 |
| **0.40 (selected)** | **0.3242** | **0.6518** | **0.4330** |
| 0.50 | 0.3770 | 0.4293 | 0.4015 |
| 0.60 | 0.4561 | 0.2723 | 0.3410 |

A lower threshold generally classifies more sessions as likely purchasers, increasing recall at the potential cost of precision. The 0.40 threshold is a preliminary choice based on F1 among the tested thresholds; business costs and operational requirements should be reviewed before production use.

## 6. API

### Endpoint

- **Method:** `POST`
- **Path:** `/purchase-propensity/predict`
- **Local URL:** `http://127.0.0.1:8000/purchase-propensity/predict`
- **Interactive API docs:** `http://127.0.0.1:8000/docs`
- **Alternative docs:** `http://127.0.0.1:8000/redoc`

The endpoint accepts a JSON object containing a `features` object. Supply the complete set of model input features, with the exact names expected by the trained pipeline. Do not include `Revenue` (the target) or the excluded `PageValues` feature. Feature values must match the schema and types defined by the API.

### Request format

The exact feature list is determined by the trained pipeline. This generic structure illustrates the request shape; replace the placeholder keys with the complete expected feature names and valid values.

```json
{
  "features": {
    "<expected_feature_name_1>": 0,
    "<expected_feature_name_2>": "example"
  }
}
```

**Important:** The example above is a shape illustration, not a directly executable payload. Use Swagger UI and the API schema to construct a request with all required model features.

### Successful response

```json
{
  "purchase_probability": 0.28618064685831185,
  "purchase_prediction": false,
  "threshold": 0.4
}
```

This is an example of a previously verified response, not a guaranteed result for every input.

- `purchase_probability`: predicted probability for purchase class `1`.
- `purchase_prediction`: `true` when the probability is greater than or equal to the configured threshold; otherwise `false`.
- `threshold`: decision threshold used by the inference service.

### Validation and error behavior

The inference service checks for missing or unexpected feature names. The API has been tested to reject invalid feature sets with HTTP `422`. A successful prediction request returned HTTP `200`.

## 7. Run the API locally

From the repository root, open a terminal and run:

```cmd
cd backend
```

Then, from the `backend` directory, with the project's virtual environment and dependencies available:

```cmd
uvicorn app.main:app --reload
```

Open `http://127.0.0.1:8000/docs`, expand `POST /purchase-propensity/predict`, select **Try it out**, enter a valid payload containing all expected features, and select **Execute**.

## 8. Automated tests

The test module is:

`backend/tests/test_purchase_propensity.py`

The test command is run from the `backend` directory:

```cmd
python -m pytest tests/test_purchase_propensity.py -v
```

The recorded run passed **7 tests**. Re-run the test command in the current environment before relying on that result after code or dependency changes.

## 9. Limitations and next checks

- These are preliminary holdout results, not a guarantee of production performance.
- Confirm that all features are available at the actual prediction time.
- `PageValues` is excluded due to potential leakage concerns.
- Confirm and document the duplicate-row handling decision in the modeling notebook.
- Select thresholds using business costs and operational goals, not F1 alone.
- Monitor data drift and prediction quality after deployment.
- The example response is illustrative; predictions vary with input features.

## 10. Current implementation status

- Model pipeline saved under `backend/models/purchase_propensity/`.
- Metadata JSON includes holdout metrics and the selected decision threshold.
- FastAPI prediction endpoint is implemented and has returned a successful response.
- Missing/unexpected feature validation has been tested.
- Automated tests previously passed 7/7.
- Frontend integration and final project screenshots remain separate follow-up tasks.
