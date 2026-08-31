# Phase 5 — ML Model 2: Customer Churn Prediction
## 5.1 Development → Data Preparation
### Completed Subphase Reports

This document records the verified observations from the first three Data Preparation subphases.

---

# 1. Raw Dataset Validation

## Objective
Verify that all required Instacart raw datasets are present in `ml/model_02_customer_churn/data/raw/`.

No transformation or modification was performed.

## Raw Files Verified

| File | Rows | Columns |
|---|---:|---:|
| `orders.csv` | 3,421,083 | 7 |
| `order_products__prior.csv` | 3,243,489 | 4 |
| `order_products__train.csv` | 1,384,617 | 4 |
| `products.csv` | 49,688 | 4 |
| `aisles.csv` | 134 | 2 |
| `departments.csv` | 21 | 2 |

## Verified Schemas

**orders.csv**
- `order_id`
- `user_id`
- `eval_set`
- `order_number`
- `order_dow`
- `order_hour_of_day`
- `days_since_prior_order`

**order_products__prior.csv**
- `order_id`
- `product_id`
- `add_to_cart_order`
- `reordered`

**order_products__train.csv**
- `order_id`
- `product_id`
- `add_to_cart_order`
- `reordered`

**products.csv**
- `product_id`
- `product_name`
- `aisle_id`
- `department_id`

**aisles.csv**
- `aisle_id`
- `aisle`

**departments.csv**
- `department_id`
- `department`

## Result
**PASS**

All six required raw datasets are present and have the expected structure.

> The full `order_products__prior.csv` is approximately 550.80 MB locally. The reduced 1000-row copy provided in chat was only a reference sample; the full local dataset remains the actual development source.

---

# 2. Schema Verification

## Objective
Verify that the dataset schemas and key relationships support the intended customer purchase-history pipeline.

## Key Structure Verified

```text
orders
  |
  +-- order_id
  +-- user_id

order_products__prior / order_products__train
  |
  +-- order_id
  +-- product_id

products
  |
  +-- product_id
  +-- aisle_id
  +-- department_id

aisles
  |
  +-- aisle_id

departments
  |
  +-- department_id
```

## Key Uniqueness Results

| Key | Result |
|---|---:|
| `orders.order_id` | 3,421,083 unique / 3,421,083 rows |
| `orders.user_id` | 206,209 unique users |
| `products.product_id` | 49,688 unique |
| `aisles.aisle_id` | 134 unique |
| `departments.department_id` | 21 unique |

## Referential Structure

The following relationships were confirmed:

```text
orders.order_id
      ↓
order_products.order_id

order_products.product_id
      ↓
products.product_id

products.aisle_id
      ↓
aisles.aisle_id

products.department_id
      ↓
departments.department_id
```

All checked key fields contained **0 missing values**.

The only notable missing field identified so far is `orders.days_since_prior_order`, with **206,209 missing values**. These are expected for first orders because no previous order exists.

## Result
**PASS**

The schemas, identifiers, and core relational structure are suitable for the Model 2 preparation pipeline.

---

# 3. Data Quality Assessment

## Objective
Check whether values fall within valid/expected ranges and whether categorical and relational fields contain invalid values.

## Order-Level Checks

| Field | Observed Result | Status |
|---|---|---|
| `order_number` | 1–100 | PASS |
| `order_dow` | 0–6 | PASS |
| `order_hour_of_day` | 0–23 | PASS |
| `days_since_prior_order` | 0–30 | PASS |
| Negative `days_since_prior_order` | 0 | PASS |

## Product-Order Checks

| Field | Observed Result | Status |
|---|---|---|
| Prior `reordered` | 0, 1 only | PASS |
| Train `reordered` | 0, 1 only | PASS |
| Missing `product_name` | 0 | PASS |

## Product Hierarchy Checks

| Relationship | Invalid References |
|---|---:|
| Product → Aisle | 0 |
| Product → Department | 0 |

## Interpretation

No invalid values were detected in the tested fields.

The 206,209 missing `days_since_prior_order` values are expected for first orders and will be handled deliberately during **Missing Value Analysis**, rather than blindly imputed.

## Result
**PASS**

No raw-data quality issue requiring immediate correction was found in the tested fields.

---

# Consolidated Status

```text
5.1 Development
└── Data Preparation
    ├── [x] Raw Dataset Validation
    ├── [x] Schema Verification
    ├── [x] Data Quality Assessment
    ├── [ ] Missing Value Analysis
    ├── [ ] Duplicate Analysis
    ├── [ ] Temporal Consistency
    ├── [ ] Data Integration / Joining
    └── [ ] Prepared Dataset Export
```

## Reference Rule

This document records the completed observations. Future work should follow the locked checklist above and should not introduce alternative numbering or additional Data Preparation subphases unless explicitly agreed upon.
