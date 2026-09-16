# Customer Segmentation API

## Overview

The Customer Segmentation API provides a prediction endpoint for assigning a customer to a behavioral segment represented by a cluster identifier.

The API accepts four customer-level behavioral and purchasing features and returns the predicted cluster along with a business-readable segment name.

---

## Base URL

For local development:

```text
http://127.0.0.1:8000
```

All endpoint paths in this document are relative to the base URL.

---

## Endpoint

### Predict Customer Segment

```http
POST /customer-segmentation/predict
```

Predicts the customer cluster using the deployed Customer Segmentation model.

### Full Local URL

```text
http://127.0.0.1:8000/customer-segmentation/predict
```

---

## Request

### Content Type

```text
application/json
```

### Request Body

```json
{
  "total_orders": 10,
  "total_spent": 5000.0,
  "average_order_value": 500.0,
  "average_review_score": 4.5
}
```

### Input Fields

| Field | Type | Required | Validation | Description |
|---|---|---:|---|---|
| `total_orders` | integer | Yes | `>= 0` | Total number of orders placed by the customer. |
| `total_spent` | number | Yes | `>= 0` | Total amount spent by the customer. |
| `average_order_value` | number | Yes | `>= 0` | Average monetary value of the customer's orders. |
| `average_review_score` | number | Yes | `0–5` | Average customer review score. |

All four fields are required.

---

## Response

### Successful Response

The endpoint returns a JSON response containing the predicted cluster identifier and its corresponding segment label.

Example:

```json
{
  "cluster_id": 2,
  "segment_name": "Cluster 2"
}
```

### Response Fields

| Field | Type | Description |
|---|---|---|
| `cluster_id` | integer | Predicted customer cluster identifier. |
| `segment_name` | string | Business-readable segment name generated from the predicted cluster. |

---

## Processing Flow

The request is processed through the backend inference layer:

```text
Client
  │
  ▼
POST /customer-segmentation/predict
  │
  ▼
Request Validation
  │
  ▼
Customer Segmentation Service
  │
  ▼
Trained Customer Segmentation Pipeline
  │
  ▼
Cluster Prediction
  │
  ▼
API Response
```

The API constructs a feature record using the four request fields and passes it to the Customer Segmentation inference service.

The predicted cluster identifier is converted to an integer and returned as:

```text
Cluster <cluster_id>
```

for the `segment_name` field.

---

## Validation

The request schema applies the following validation rules:

- `total_orders` must be a non-negative integer.
- `total_spent` must be non-negative.
- `average_order_value` must be non-negative.
- `average_review_score` must be between `0` and `5`.
- All four fields are mandatory.

Invalid request data is rejected by the FastAPI/Pydantic request-validation layer before model inference.

---

## Example cURL Request

```bash
curl -X POST "http://127.0.0.1:8000/customer-segmentation/predict" ^
  -H "Content-Type: application/json" ^
  -d "{"total_orders":10,"total_spent":5000.0,"average_order_value":500.0,"average_review_score":4.5}"
```

### Example Response

```json
{
  "cluster_id": 2,
  "segment_name": "Cluster 2"
}
```

---

## Model Integration

The endpoint loads the trained Customer Segmentation pipeline through the backend model-loading layer.

The deployed model artifact is stored at:

```text
backend/models/customer_segmentation/customer_segmentation_pipeline.joblib
```

The API does not perform model training. It uses the trained pipeline for inference.

---

## Endpoint Summary

| Method | Endpoint | Purpose |
|---|---|---|
| `POST` | `/customer-segmentation/predict` | Predict the customer's behavioral cluster. |

---

## Notes

- This endpoint is intended for inference against the deployed Customer Segmentation model.
- The API currently returns the cluster identifier as the segment representation.
- The `segment_name` is generated from the predicted cluster identifier (for example, `Cluster 2`).
