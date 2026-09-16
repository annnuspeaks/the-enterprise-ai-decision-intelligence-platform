# 2.1 Dataset Collection || 2.1.2 Data Validation

Data validation is the first stage of the data engineering pipeline. Before performing preprocessing, feature engineering, or Machine Learning tasks, the integrity and structure of the dataset must be verified.

Since the Olist dataset consists of multiple relational tables, validation is performed individually for each dataset and then collectively to ensure consistency across the complete data model.

---

## 2.1.2.1 Schema Validation

Schema validation ensures that each dataset conforms to the expected structural definition. This includes verifying table dimensions, column names, data types, and primary identifiers before the data is used in downstream processing.

The validation process performs the following checks:

- Successful loading of every dataset.
- Verification of the expected number of rows and columns.
- Validation of all column names.
- Inspection of inferred data types.
- Detection of duplicate column names.
- Identification of missing or unexpected columns.

Performing schema validation at the beginning of the pipeline helps detect structural issues early, reducing the risk of failures during feature engineering, model training, and deployment.

The output of this phase serves as the structural baseline for all subsequent data engineering activities.

---

## 2.1.2.2 Missing Values Analysis

Missing values are one of the most common data quality issues encountered in real-world datasets. Before performing feature engineering or model training, it is essential to identify incomplete records and understand their distribution across all tables.

For the Olist dataset, missing value analysis is performed separately for each relational table to determine:

- The total number of missing values.
- The percentage of missing values per column.
- The distribution of incomplete records.
- Columns requiring cleaning or imputation.

The results of this analysis provide the foundation for designing an appropriate data cleaning strategy in the next phase of the project.

---

## 2.1.2.3 Duplicate Detection

Duplicate records can negatively impact statistical analysis, feature engineering, and Machine Learning model performance. Therefore, identifying duplicate entries is an essential step before data cleaning begins.

Since the Olist dataset consists of multiple relational tables, duplicate detection is performed independently for each table.

The validation process includes:

- Detection of completely duplicated rows.
- Calculation of duplicate counts.
- Measurement of duplicate percentages.
- Identification of datasets requiring duplicate removal.

The findings from this analysis will be used during the Data Cleaning phase to determine whether duplicate records should be removed or retained based on business requirements.