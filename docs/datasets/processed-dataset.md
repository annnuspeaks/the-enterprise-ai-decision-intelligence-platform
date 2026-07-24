# 2.1 Dataset Collection || 2.1.6 Processed Dataset

## Overview

The processed dataset represents the final output of the data engineering pipeline. It combines the results of data validation, data cleaning, feature engineering, and preprocessing into a structured dataset that is ready for exploratory data analysis and machine learning development.

This dataset serves as the primary input for all subsequent phases of the Enterprise AI Decision Intelligence Platform.

---

## Dataset Information

| Attribute | Value |
|-----------|-------|
| Dataset Name | Processed Customer Features Dataset |
| Source Dataset | Brazilian E-Commerce Public Dataset by Olist |
| Dataset File | `processed_dataset.csv` |
| Storage Location | `data/processed/processed_dataset.csv` |
| Project Phase | Phase 2 – Data Engineering |
| Status | Final Processed Dataset |

---

## Data Processing Pipeline

The processed dataset was generated through the following pipeline:

```text
Raw Dataset
      │
      ▼
Data Validation
      │
      ▼
Data Cleaning
      │
      ▼
Feature Engineering
      │
      ▼
Encoding Strategy Definition
      │
      ▼
Scaling Strategy Definition
      │
      ▼
Processed Dataset Export
```

---

## Included Transformations

The exported dataset incorporates the following preprocessing steps:

- Data validation
- Missing value handling
- Duplicate removal
- Data cleaning
- Feature engineering
- Business feature generation
- Data type standardization

### Note

Encoding and feature scaling were intentionally **not applied** during data engineering.

These transformations will be performed inside individual Machine Learning pipelines during the model development phase to prevent data leakage and support model-specific preprocessing strategies.

---

## Dataset Characteristics

The processed dataset contains engineered customer-level features suitable for analytical and predictive modeling.

The dataset includes:

- Customer identifiers
- Purchase behavior features
- Spending-related features
- Review-related features
- Order-related features
- Geographic information
- Target variable for churn prediction

---

## Data Quality Summary

The exported dataset has passed the complete data engineering workflow.

Validation confirms:

- Missing values handled during preprocessing.
- Duplicate records removed where applicable.
- Feature engineering successfully completed.
- Data consistency verified.
- Dataset exported successfully.

---

## Intended Usage

This dataset will be used throughout the remaining project phases, including:

- Exploratory Data Analysis
- Machine Learning Pipeline Development
- Model Training
- Model Evaluation
- Hyperparameter Optimization
- Model Deployment
- API Integration
- Dashboard Development

---

## Related Documentation

- `dataset-collection.md`
- `data-dictionary.md`
- `data-validation.md`
- `data-cleaning.md`
- `feature-engineering.md`
- `exploratory-data-analysis.md`

---

## Conclusion

The processed dataset represents the finalized output of the data engineering phase. It provides a reliable and consistent foundation for machine learning experimentation while preserving a modular preprocessing workflow. Subsequent project phases will use this dataset as the primary source for feature preprocessing, model training, evaluation, and deployment.