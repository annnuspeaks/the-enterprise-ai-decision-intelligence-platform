# Customer Churn Prediction API

## Overview

The Customer Churn Prediction API provides a prediction endpoint for estimating churn-like behavior for an individual customer.

The API accepts the feature values required by the deployed Customer Churn prediction pipeline and returns a binary prediction, churn probability, operating threshold, and business-readable risk level.

---

## Base URL

For local development:

```text
http://127.0.0.1:8000
```

All endpoint paths in this document are relative to the base URL.

---

## Endpoint

### Predict Customer Churn

```http
POST /customer-churn/predict
```

Predicts churn-like behavior using the deployed tuned Random Forest pipeline.

### Full Local URL

```text
http://127.0.0.1:8000/customer-churn/predict
```

---

## Request

### Content Type

```text
application/json
```

### Request Body

The request contains a `features` object. The object must contain exactly the feature names expected by the deployed model.

```json
{
  "features": {
    "total_orders": 10,
    "max_order_number": 10,
    "avg_days_between_orders": 30.0,
    "latest_order_number": 10,
    "latest_order_dow": 2,
    "latest_order_hour": 14,
    "median_purchase_interval": 28.0,
    "min_purchase_interval": 7.0,
    "max_purchase_interval": 60.0,
    "std_purchase_interval": 15.0,
    "prior_order_items": 20,
    "prior_unique_products": 12,
    "prior_reordered_items": 8,
    "prior_orders": 9,
    "avg_items_per_order": 2.2,
    "reorder_rate": 0.4,
    "products_per_order": 1.5,
    "unique_aisles": 8,
    "unique_departments": 4,
    "dominant_department_share": 0.5,
    "dominant_aisle_share": 0.3,
    "inactivity_gap": 45.0,
    "inactivity_ratio": 0.8
  }
}
```

> The numeric values above are illustrative request values. The API contract requires the feature names shown below.

---

## Required Features

The deployed model expects the following 23 features:

| # | Feature | Type |
|---:|---|---|
| 1 | `total_orders` | number |
| 2 | `max_order_number` | number |
| 3 | `avg_days_between_orders` | number |
| 4 | `latest_order_number` | number |
| 5 | `latest_order_dow` | number |
| 6 | `latest_order_hour` | number |
| 7 | `median_purchase_interval` | number |
| 8 | `min_purchase_interval` | number |
| 9 | `max_purchase_interval` | number |
| 10 | `std_purchase_interval` | number |
| 11 | `prior_order_items` | number |
| 12 | `prior_unique_products` | number |
| 13 | `prior_reordered_items` | number |
| 14 | `prior_orders` | number |
| 15 | `avg_items_per_order` | number |
| 16 | `reorder_rate` | number |
| 17 | `products_per_order` | number |
| 18 | `unique_aisles` | number |
| 19 | `unique_departments` | number |
| 20 | `dominant_department_share` | number |
| 21 | `dominant_aisle_share` | number |
| 22 | `inactivity_gap` | number |
| 23 | `inactivity_ratio` | number |

The backend validates the supplied feature names against the deployed model's `feature_names_in_` collection.

- Missing expected features are rejected.
- Unexpected feature names are rejected.
- Valid features are reordered to the model's expected order before inference.

---

## Response

### Successful Response

```json
{
  "churn_prediction": 1,
  "churn_probability": 0.78,
  "threshold": 0.63,
  "risk_level": "High"
}
```

### Response Fields

| Field | Type | Description |
|---|---|---|
| `churn_prediction` | integer | Binary prediction: `0` or `1`. |
| `churn_probability` | number | Predicted probability of churn-like behavior, between `0` and `1`. |
| `threshold` | number | Operating threshold used to convert probability into the binary prediction. |
| `risk_level` | string | Business-readable churn risk classification. |

---

## Prediction Threshold

The deployed model uses a selected operating threshold of approximately:

```text
0.63
```

The threshold was selected using the **Maximum validation F1** method.

Prediction logic:

```text
if probability >= 0.63
    churn_prediction = 1
else
    churn_prediction = 0
```

The threshold is loaded from the deployed model metadata rather than hard-coded in the API route.

---

## Risk Classification

The backend assigns a risk level using the predicted probability:

```text
probability >= selected threshold
        → High

0.33 <= probability < selected threshold
        → Medium

probability < 0.33
        → Low
```

Therefore, the risk level and binary churn prediction use related but distinct rules.

---

## Processing Flow

```text
Client
  │
  ▼
POST /customer-churn/predict
  │
  ▼
Request Validation
  │
  ▼
Customer Churn Service
  │
  ├── Validate expected features
  ├── Remove unexpected/missing contract mismatch
  ├── Arrange features in model order
  │
  ▼
Tuned Random Forest Pipeline
  │
  ▼
Churn Probability
  │
  ├── Apply selected threshold
  └── Assign risk level
  │
  ▼
API Response
```

---

## Example cURL Request

```bash
curl -X POST "http://127.0.0.1:8000/customer-churn/predict" ^
  -H "Content-Type: application/json" ^
  -d "{"features":{"total_orders":10,"max_order_number":10,"avg_days_between_orders":30.0,"latest_order_number":10,"latest_order_dow":2,"latest_order_hour":14,"median_purchase_interval":28.0,"min_purchase_interval":7.0,"max_purchase_interval":60.0,"std_purchase_interval":15.0,"prior_order_items":20,"prior_unique_products":12,"prior_reordered_items":8,"prior_orders":9,"avg_items_per_order":2.2,"reorder_rate":0.4,"products_per_order":1.5,"unique_aisles":8,"unique_departments":4,"dominant_department_share":0.5,"dominant_aisle_share":0.3,"inactivity_gap":45.0,"inactivity_ratio":0.8}}"
```

### Example Response

```json
{
  "churn_prediction": 1,
  "churn_probability": 0.78,
  "threshold": 0.63,
  "risk_level": "High"
}
```

---

## Model Integration

The endpoint loads the deployed Customer Churn pipeline through the backend inference layer.

Model artifact:

```text
backend/models/customer_churn/customer_churn_pipeline.joblib
```

Model metadata:

```text
backend/models/customer_churn/metadata.json
```

The metadata identifies the deployed model as:

```text
Model: Tuned Random Forest
Type: RandomForestClassifier
Target: churn_like_label
```

The API performs inference only; model training is outside the API request workflow.

---

## Error and Validation Behavior

### Invalid Feature Contract

If required model features are missing or unexpected feature names are supplied, the inference service raises a validation error containing the missing and unexpected feature names.

Conceptually:

```json
{
  "missing_features": [],
  "unexpected_features": []
}
```

The exact HTTP error response format should be treated as implementation-dependent because the current service raises a Python `ValueError` and does not define a dedicated FastAPI exception handler for this condition.

### Request Schema Validation

The request schema requires:

```text
features: Dict[str, float]
```

The response schema also validates:

- `churn_probability` between `0` and `1`
- `threshold` between `0` and `1`

---

## Endpoint Summary

| Method | Endpoint | Purpose |
|---|---|---|
| `POST` | `/customer-churn/predict` | Predict churn-like behavior and return probability and risk level. |

---

## Notes

- The endpoint is currently registered as **available** in the Nexora model registry.
- The model registry exposes the endpoint as `/customer-churn/predict`.
- The API uses the deployed model's expected feature names and ordering.
- The selected operating threshold is loaded from model metadata.
- The risk classification threshold of `0.33` for Medium/Low classification is implemented in the inference service.
