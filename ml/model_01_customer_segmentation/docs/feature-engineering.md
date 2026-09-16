# 2.1 Dataset Collection || 2.1.4 Feature Engineering

Feature engineering is the process of transforming raw business data into meaningful variables that improve the predictive capability of Machine Learning models.

The Olist dataset contains multiple relational tables representing different business entities. By combining these tables and deriving new business metrics, we can create features that better capture customer behavior, purchasing patterns, seller performance, logistics efficiency, and payment characteristics.

Well-designed features often contribute more to model performance than the choice of Machine Learning algorithm itself.

---

## 2.1.4.1 Feature Creation

Feature creation involves generating new variables from existing data that better represent underlying business processes.

For this project, engineered features are derived by integrating customer, order, payment, product, seller, and review datasets. These features provide richer business context for downstream AI modules.

Examples include:

- Customer order frequency
- Average order value
- Total customer spending
- Average delivery duration
- Delivery delay
- Average review score
- Payment installments
- Freight percentage
- Product diversity
- Seller activity

The engineered features produced in this phase will form the primary input for exploratory data analysis and Machine Learning model development.

---

---

## 2.1.4.2 Categorical Feature Encoding

The purpose of this notebook is to identify categorical features present in the engineered customer dataset and recommend an appropriate encoding strategy for each feature.

Actual encoding is intentionally **not performed** in this notebook because different Machine Learning models may require different preprocessing pipelines.

This design keeps preprocessing modular, reproducible, and prevents data leakage.

---

## 2.1.4.3 Feature Scaling

Many Machine Learning algorithms perform better when numerical features are on comparable scales. However, the scaling technique depends on the characteristics of the target model.

Rather than applying a single scaling method globally, this project defines a scaling strategy that will be implemented independently within each Machine Learning pipeline.

The scaling strategy includes:

- Identifying numerical features.
- Determining whether scaling is required.
- Selecting the appropriate scaler based on the model.
- Excluding identifier columns from scaling.

This approach keeps preprocessing modular, reproducible, and free from data leakage.