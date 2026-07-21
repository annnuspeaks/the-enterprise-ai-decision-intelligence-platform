# Engineering Decision Record (EDR-006)

# Machine Learning Standards

## Decision

Adopt consistent Machine Learning standards to ensure every model is reproducible, explainable, maintainable, and suitable for production-inspired deployment.

---

## ML Lifecycle

**CRISP-DM**

```text
Business Understanding
        ↓
Data Understanding
        ↓
Data Preparation
        ↓
Modeling
        ↓
Evaluation
        ↓
Deployment
```

---

## Experiment Tracking

### Semester 3

- Markdown Experiment Log

### Semester 4

- MLflow

---

## Model Versioning

Example:

```text
customer_segmentation_v1.pkl
customer_segmentation_v2.pkl
churn_prediction_v1.pkl
```

Maintain a Model Registry with:

- Model Name
- Version
- Algorithm
- Dataset Version
- Evaluation Metrics
- Training Date
- Status

---

## Dataset Versioning

```text
raw_dataset_v1.csv
processed_dataset_v1.csv
```

Raw datasets remain immutable.

---

## Feature Engineering Standards

Every engineered feature must include:

- Name
- Data Type
- Source
- Transformation
- Business Meaning

---

## Evaluation Metrics

| Model | Metrics |
|--------|---------|
| Customer Segmentation | Silhouette Score, Davies–Bouldin Index |
| Churn Prediction | Accuracy, Precision, Recall, F1, ROC-AUC |
| CLV Prediction | MAE, RMSE, R² |
| Purchase Propensity | Precision, Recall, F1, ROC-AUC |
| Anomaly Detection | Precision, Recall, F1 (when labels exist), qualitative validation |

---

## Model Selection Strategy

Compare at least three algorithms before selecting the final model.

---

## Hyperparameter Tuning

Use:

- GridSearchCV
- RandomizedSearchCV

---

## Explainability

Use:

- SHAP
- Feature Importance
- Confusion Matrix
- ROC Curve

---

## Reproducibility

Record:

- Random Seed
- Dataset Version
- Model Version
- Library Versions
- Hyperparameters

---

## Model Serialization

Use `joblib`.

Store trained models under:

```text
models/artifacts/
```

---

## Inference Pipeline

```text
Input
   ↓
Validation
   ↓
Preprocessing
   ↓
Prediction
   ↓
Business Interpretation
   ↓
API Response
```

---

## Model Documentation

Each model documents:

- Business Problem
- Dataset
- Features
- Algorithms Compared
- Selected Model
- Evaluation Metrics
- Explainability
- Limitations
- Future Improvements

---

## Reason

- Consistent ML workflow
- Easier maintenance
- Better reproducibility
- Stronger documentation
- Interview-ready implementation

---

## Trade-offs

### Advantages

- Standardized development
- Reproducible experiments
- Better explainability
- Easier model comparison

### Disadvantages

- Additional documentation effort
- Slightly longer development cycle

---

## Locked

- CRISP-DM lifecycle
- Experiment tracking strategy
- Model & dataset versioning
- Feature engineering standards
- Evaluation metrics
- Model comparison policy
- Hyperparameter tuning strategy
- Explainability standards
- Reproducibility requirements
- joblib serialization
- Standard inference pipeline
- Model documentation

---

**Status:** 🔒 Locked
