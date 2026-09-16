# 2.1 Dataset Collection || 2.1.3 Data Cleaning

Data cleaning is a critical stage in the data engineering pipeline that transforms raw data into a reliable and analysis-ready format. Real-world datasets often contain inconsistencies, missing values, duplicate records, incorrect data types, and unnecessary attributes that can negatively impact downstream analytics and Machine Learning models.

The objective of this phase is to improve data quality while preserving the integrity of the original business information.

---

## 2.1.3.1 Cleaning Pipeline

A standardized data cleaning pipeline is established to ensure that every dataset undergoes the same sequence of preprocessing operations. Applying a consistent pipeline improves reproducibility, simplifies maintenance, and enables seamless integration with later feature engineering and model development stages.

The cleaning pipeline includes the following operations:

- Creating working copies of the raw datasets.
- Removing duplicate records where appropriate.
- Handling missing values based on business relevance.
- Converting columns to appropriate data types.
- Standardizing textual values where necessary.
- Validating the cleaned datasets after preprocessing.

The cleaned datasets generated in this phase will serve as the foundation for feature engineering and exploratory data analysis.

---

## 2.1.3.2 Outlier Handling

Outliers are observations that significantly deviate from the majority of the data. In business datasets, outliers may represent genuine customer behavior, data entry errors, fraudulent transactions, or exceptional business events.

Since the Olist dataset contains transactional and financial information, outliers should not be removed blindly. Each numeric feature must be evaluated individually to determine whether extreme values represent valid business scenarios or erroneous records.

The outlier analysis performed in this phase includes:

- Identification of numerical features.
- Statistical summary of numerical variables.
- Visualization using boxplots.
- Detection of outliers using the Interquartile Range (IQR) method.
- Business interpretation of detected outliers.
- Recommendation for treatment in subsequent preprocessing stages.

Rather than immediately removing extreme observations, this phase focuses on understanding their business significance to ensure valuable information is not unintentionally discarded.