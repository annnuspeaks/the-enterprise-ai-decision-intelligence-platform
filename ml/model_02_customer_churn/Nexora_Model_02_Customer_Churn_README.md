<div align="center">

<img src="../../frontend/src/assets/nexora-logo.png" alt="Nexora — Enterprise Decision Intelligence System" width="780"/>

# Model 02 — Customer Churn Prediction

### The Enterprise AI Decision Intelligence Platform

*Customer behaviour → churn-like probability → actionable risk*

</div>

---

# Nexora --- Customer Churn Prediction

> **Model 2 --- AI Decision Intelligence Platform**

An end-to-end binary classification system that converts historical
customer purchasing behaviour into a **churn-like probability, binary
prediction, and business-readable risk level**.

## 1. Problem Statement

**Business problem:** identify customers showing churn-like behavioural
patterns early enough to support retention decisions.

**ML problem:** binary classification.

-   `0` → No churn-like signal
-   `1` → Churn-like signal

The model also returns a probability so decisions can use a risk score
rather than only a yes/no output.

## 2. Dataset

The model uses the **Instacart Online Grocery Shopping** data and
creates one behavioural profile per customer.

Important source tables include:

-   `orders`
-   `order_products__prior`
-   `products`

The feature engineering uses historical prior-purchase behaviour and the
**product → aisle → department** hierarchy.

Instacart does not provide absolute calendar dates. Therefore, true
calendar recency cannot be calculated. The project uses **historical
inactivity proxies** instead.

## 3. Target

Target:

``` text
churn_like_label
```

Identifier:

``` text
user_id
```

`user_id` is excluded from model features because it is an identifier
rather than a predictive signal.

## 4. Feature Engineering

The final model uses **23 numerical behavioural features**.

### Order History

  Feature                 Meaning
  ----------------------- ---------------------------------
  `total_orders`          Total historical orders
  `max_order_number`      Highest observed order sequence
  `latest_order_number`   Most recent order sequence
  `prior_orders`          Number of prior orders used

### Purchase Cycle

  Feature                      Meaning
  ---------------------------- -----------------------------------
  `avg_days_between_orders`    Average interval between orders
  `median_purchase_interval`   Typical purchase interval
  `min_purchase_interval`      Shortest observed interval
  `max_purchase_interval`      Longest observed interval
  `std_purchase_interval`      Variability of purchase intervals

### Order & Reorder Behaviour

  Feature                   Meaning
  ------------------------- --------------------------------
  `prior_order_items`       Total items in prior orders
  `prior_reordered_items`   Number of reordered items
  `avg_items_per_order`     Prior items ÷ prior orders
  `reorder_rate`            Reordered items ÷ prior items
  `products_per_order`      Unique products ÷ prior orders

### Product Diversity

  Feature                   Meaning
  ------------------------- ------------------------------
  `prior_unique_products`   Distinct products purchased
  `unique_aisles`           Distinct product aisles
  `unique_departments`      Distinct product departments

### Category Behaviour

  -----------------------------------------------------------------------
  Feature                             Meaning
  ----------------------------------- -----------------------------------
  `dominant_department_share`         Share of purchases in dominant
                                      department

  `dominant_aisle_share`              Share of purchases in dominant
                                      aisle
  -----------------------------------------------------------------------

### Inactivity Proxies

  ----------------------------------------------------------------------------------------
  Feature                             Meaning
  ----------------------------------- ----------------------------------------------------
  `inactivity_gap`                    `max_purchase_interval - median_purchase_interval`

  `inactivity_ratio`                  `max_purchase_interval / median_purchase_interval`
  ----------------------------------------------------------------------------------------

The feature table is consolidated to one row per customer. Held-out
train/test order information is not used to construct the predictive
feature table.

## 5. Train / Validation / Test

A stratified split with `random_state=42` is used.

  Split             Rows   Features
  ------------ --------- ----------
  Train          144,329         23
  Validation      30,928         23
  Test            30,928         23

Class distribution:

-   Non-churn-like: **79.07%**
-   Churn-like: **20.93%**

The validation set is used for threshold selection. The test set is
reserved for final evaluation.

## 6. Why Random Forest?

Candidate classifiers were compared using metrics relevant to the
imbalanced churn problem.

Random Forest was selected for further optimization because it provided
strong recall/F1 behaviour and stable cross-validation performance.

### Why it fits this problem

-   Ensemble of many decision trees
-   Captures nonlinear relationships
-   Suitable for structured/tabular behavioural data
-   Robust to different feature scales
-   Provides probabilities through `predict_proba`
-   Supports feature-importance analysis

## 7. Hyperparameter Tuning

The Random Forest was optimized using **RandomizedSearchCV**.

Key settings:

``` text
n_iter       = 12
random_state = 42
scoring      = PR-AUC
```

Search space included:

``` text
n_estimators
max_depth
min_samples_split
min_samples_leaf
max_features
class_weight
```

The search was performed only on training data; validation and test data
remained untouched.

The final estimator is the selected tuned Random Forest pipeline.

## 8. Operating Threshold

The default `0.50` probability cutoff was not blindly used.

Selected operating threshold:

``` text
0.63
```

Selection method:

``` text
Maximum validation F1
```

Validation performance at the selected threshold:

  Metric              Score
  ---------------- --------
  Accuracy           0.7414
  Precision          0.4342
  Recall             0.7763
  F1                 0.5569
  Best CV PR-AUC     0.4986

### Why threshold tuning?

`predict_proba()` produces a continuous probability. A threshold
converts that probability into a class.

Example:

``` text
probability = 0.62
threshold   = 0.63

0.62 < 0.63
prediction  = 0
```

Changing the threshold changes the precision/recall trade-off without
retraining the model.

## 9. Final Test Performance

Held-out test-set results:

  Metric           Score
  ---------- -----------
  ROC-AUC      **0.836**
  PR-AUC       **0.500**
  F1 Score     **0.553**
  Recall       **0.773**

Test confusion matrix:

  Outcome             Count
  ---------------- --------
  True Negative      17,838
  False Positive      6,616
  False Negative      1,467
  True Positive       5,007

The model detects about **77.3% of churn-like cases** at the selected
operating threshold, while some positive alerts are false positives.

## 10. Evaluation Metrics --- Viva Ready

### Accuracy

Fraction of all predictions that are correct.

``` text
(TP + TN) / (TP + TN + FP + FN)
```

### Precision

Of all predicted positives, how many are actually positive?

``` text
TP / (TP + FP)
```

### Recall

Of all actual positives, how many were detected?

``` text
TP / (TP + FN)
```

Recall is especially important here because missing a potential churner
can mean a missed retention opportunity.

### F1 Score

Harmonic mean of precision and recall.

``` text
2 × Precision × Recall / (Precision + Recall)
```

### ROC-AUC

Measures how well the model ranks positive cases above negative cases
across thresholds.

### PR-AUC

Summarizes precision-recall performance and is especially informative
for the smaller positive class.

## 11. Explainability

The model-development workflow includes:

-   Global feature importance
-   Feature-importance visualization
-   SHAP analysis

**SHAP = SHapley Additive exPlanations.**

It explains how individual features contribute to a prediction.

Conceptually:

``` text
Prediction
  = Base value
  + Feature contribution 1
  + Feature contribution 2
  + ...
```

The project records explainability as completed. This README does not
invent a final ranked importance list where the available project
records do not provide it.

## 12. Production Inference Flow

``` text
Customer behavioural profile
          ↓
FastAPI request validation
          ↓
pandas DataFrame
          ↓
Loaded ML pipeline
          ↓
Feature validation + correct ordering
          ↓
predict_proba()
          ↓
Churn probability
          ↓
0.63 operating threshold
          ↓
Binary prediction
          ↓
Risk level
          ↓
JSON response
```

The backend reads the model's `feature_names_in_` and checks:

1.  missing features;
2.  unexpected features;
3.  correct feature ordering.

This reduces training-serving feature mismatch.

## 13. Risk Logic

Binary prediction:

``` text
probability >= 0.63 → prediction = 1
probability < 0.63  → prediction = 0
```

Risk classification:

``` text
probability >= 0.63        → High
0.33 <= probability < 0.63 → Medium
probability < 0.33         → Low
```

Prediction and risk level are related but are not identical.

Example:

``` text
probability = 0.61
prediction  = 0
risk        = Medium
```

## 14. Backend API

### Endpoint

``` http
POST /customer-churn/predict
```

### Request structure

``` json
{
  "features": {
    "total_orders": 10,
    "max_order_number": 10,
    "avg_days_between_orders": 7.5,
    "latest_order_number": 10,
    "latest_order_dow": 3,
    "latest_order_hour": 14,
    "prior_order_items": 86,
    "prior_unique_products": 42,
    "prior_reordered_items": 54,
    "prior_orders": 9,
    "avg_items_per_order": 7.8,
    "reorder_rate": 0.63,
    "products_per_order": 6.4,
    "unique_aisles": 18,
    "unique_departments": 8,
    "dominant_department_share": 0.40,
    "dominant_aisle_share": 0.18,
    "median_purchase_interval": 7,
    "min_purchase_interval": 2,
    "max_purchase_interval": 21,
    "std_purchase_interval": 4.2,
    "inactivity_gap": 14,
    "inactivity_ratio": 3
  }
}
```

### Response

``` json
{
  "churn_prediction": 1,
  "churn_probability": 0.818,
  "threshold": 0.63,
  "risk_level": "High"
}
```

The actual probability depends on the submitted customer profile.

## 15. Backend Architecture

``` text
React frontend
      ↓
customer_churn_service.ts
      ↓
POST /customer-churn/predict
      ↓
FastAPI route
      ↓
Pydantic schema
      ↓
CustomerChurnService
      ↓
Model Loader
      ↓
Tuned Random Forest pipeline
      ↓
Prediction response
```

Important files:

``` text
backend/app/
├── main.py
├── api/
│   ├── router.py
│   ├── routes/
│   │   └── customer_churn.py
│   └── schemas/
│       └── customer_churn.py
└── ml/inference/
    ├── customer_churn_service.py
    └── model_loader.py
```

Model artifacts:

``` text
models/customer_churn/
├── customer_churn_pipeline.joblib
└── metadata.json
```

The model and metadata are cached after loading so they are not
unnecessarily reloaded for every request.

## 16. Frontend Workflow

``` text
Customer Churn Overview
        ↓
Prediction Form
        ↓
Enter 23 behavioural features
        ↓
Review Prediction
        ↓
Loading State
        ↓
FastAPI prediction
        ↓
Result Page
```

Result page displays:

-   Churn prediction
-   Churn probability
-   Risk level
-   Threshold
-   Probability visualization
-   Interpretation
-   Recommended action

Failure handling includes a visible API error state and prevents
duplicate submissions while a request is processing.

## 17. Result Interpretation

### High Risk

``` text
Probability >= 63%
Prediction = 1
```

Strong churn-like signal relative to the operating threshold.

Suggested response: prioritize retention outreach and review recent
engagement/purchase behaviour.

### Medium Risk

``` text
33% <= Probability < 63%
Prediction = 0
```

Meaningful churn-like signal exists, but it is below the production
decision threshold.

Suggested response: targeted engagement and monitoring.

### Low Risk

``` text
Probability < 33%
Prediction = 0
```

No strong churn-like signal according to the current risk boundaries.

Suggested response: normal engagement and monitoring.

## 18. Why Not Accuracy Alone?

The class distribution is approximately:

``` text
Non-churn-like ≈ 79%
Churn-like     ≈ 21%
```

A model can have high accuracy while still missing many positive cases.

Therefore the project pays particular attention to:

-   Recall
-   F1
-   PR-AUC
-   ROC-AUC

## 19. Leakage Prevention

The workflow separates:

``` text
Training data
     ↓
Validation data
     ↓
Test data
```

Important controls:

-   Feature engineering uses historical prior-order information.
-   Held-out train/test order information is not used to build the
    feature table.
-   Hyperparameter search uses training data.
-   Threshold selection uses validation data.
-   Final performance is reported on the held-out test set.

Using test information to choose a threshold would leak evaluation
information into the decision rule.

## 20. Reproducibility

Primary reproducibility setting:

``` text
random_state = 42
```

The workflow records:

-   feature construction;
-   data split;
-   model comparison;
-   hyperparameter search;
-   threshold selection;
-   final test evaluation;
-   explainability.

## 21. Limitations

1.  The model predicts **churn-like behaviour**, not guaranteed future
    customer departure.
2.  No absolute calendar dates are available in the source data, so
    inactivity is represented with historical interval proxies.
3.  A model probability should not automatically be interpreted as a
    perfectly calibrated real-world percentage.
4.  False positives exist; results are decision support.
5.  Performance depends on historical data quality and distribution.
6.  Production use should include monitoring and periodic retraining
    when behaviour or data distribution changes.

## 22. Examiner / Viva Questions

### What is customer churn?

Customer churn means a customer stops or significantly reduces their
relationship/activity with a business. In this project, the target is
specifically **churn-like behaviour** derived from the available
customer purchase history.

### Why is this a classification problem?

Because the final decision has two classes: `0` and `1`.

### Why Random Forest?

It is an ensemble of decision trees, captures nonlinear tabular
relationships, is robust, produces probabilities, and supports
feature-importance analysis.

### What is an ensemble?

A method that combines multiple models/learners to obtain a stronger
overall predictor.

### What is bagging?

Training models on different bootstrap samples and combining their
predictions. Random Forest is a bagging-based tree ensemble.

### What is `predict_proba()`?

It returns estimated probabilities for the classes. We use the
positive-class probability to make the churn decision.

### Why not directly use `predict()`?

Because `predict()` directly gives the class. This project needs the
probability first so a business operating threshold can be applied.

### Why is the threshold 0.63 instead of 0.50?

Because threshold analysis selected **0.63 by maximum validation F1**.
This gives a more suitable precision/recall trade-off for the business
objective.

### Why use validation data for threshold selection?

The test set must remain unseen for final unbiased evaluation.

### Why is recall important?

A false negative is a churn-like customer that the system failed to
flag. Missing such a customer can mean a missed retention opportunity.

### What is a false positive?

A non-churn-like customer incorrectly flagged as positive.

### Why are false positives acceptable?

If the business prioritizes finding more potential churners, some
additional customers can be reviewed even when they ultimately do not
churn.

### Why PR-AUC?

The positive class is smaller, so precision-recall behaviour is
particularly informative.

### What is ROC-AUC?

It measures ranking/discrimination ability across classification
thresholds.

### What is overfitting?

When a model learns training-specific noise/patterns and performs worse
on unseen data.

### How was overfitting/generalization considered?

Through cross-validation plus separate validation and held-out test
evaluation.

### What is data leakage?

Using information during training/model selection that would not
legitimately be available at prediction time.

### What is SHAP?

A feature-attribution method that explains how features contribute to a
prediction.

### What is a confusion matrix?

A table containing:

``` text
TN  FP
FN  TP
```

It shows correct and incorrect predictions for both classes.

### What is a false negative in this project?

An actual churn-like customer predicted as non-churn-like.

### What is a false positive in this project?

A non-churn-like customer predicted as churn-like.

### Why use `class_weight="balanced"`?

It gives relatively more importance to the minority class during
training. The tuning workflow included `class_weight` as a searched
Random Forest parameter.

### Why use `random_state=42`?

To make stochastic data splitting/search/model behaviour reproducible.

### Why is `user_id` excluded?

It identifies the customer but does not represent behavioural
information useful for generalization.

### Why are inactivity features called proxies?

Because the source data has no absolute calendar dates. They represent
historical gaps relative to a customer's purchase cycle, not today's
exact inactivity.

### What is the difference between probability and prediction?

Probability is continuous, e.g. `0.61`. Prediction is the binary
decision after applying the threshold.

### What is the difference between prediction and risk level?

Prediction is the binary model decision. Risk level is a
business-readable classification using the defined probability bands.

## 23. 30-Second Viva Answer

> **"This is a binary customer churn-like behaviour prediction system
> built using the Instacart customer purchase data. We created 23
> behavioural features covering order history, purchase cycle, reorder
> behaviour, product diversity, category behaviour and historical
> inactivity proxies. We compared classifiers and selected a Random
> Forest for tuning. Because the positive class is smaller, we focused
> on recall, F1 and PR-AUC rather than accuracy alone. The operating
> threshold was optimized on validation data and selected as 0.63 using
> maximum F1. On the held-out test set, the model achieved ROC-AUC
> 0.836, PR-AUC 0.500, F1 0.553 and recall 0.773. The trained pipeline
> is served through FastAPI and the React frontend displays the
> probability, prediction, risk level and recommended action."**

## 24. One-Line Architecture Answer

> **Historical behaviour → feature engineering → train/validation/test
> split → model comparison → Random Forest tuning → validation threshold
> optimization → held-out test evaluation → FastAPI inference → React
> result visualization.**

## 25. Final Model Summary

``` text
Model             : Tuned Random Forest
Estimator         : RandomForestClassifier
Problem           : Binary classification
Target            : churn_like_label
Input features    : 23
Threshold         : 0.63
Threshold method  : Maximum validation F1
Test ROC-AUC      : 0.836
Test PR-AUC       : 0.500
Test F1           : 0.553
Test Recall       : 0.773
```

**Purpose:** identify customers showing churn-like behavioural patterns
and convert the result into an actionable retention signal.

**Decision-support disclaimer:** the model output should support
business judgement, not replace it.

