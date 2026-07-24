# 2.1 Dataset Collection || 2.1.1 Business Dataset

## 2.1.1.1 Dataset Selection

The **Enterprise AI Decision Intelligence Platform** is built using the **Brazilian E-Commerce Public Dataset by Olist**, a publicly available real-world e-commerce dataset hosted on Kaggle. The dataset contains transactional, customer, seller, product, payment, review, and geolocation data collected from the Olist online marketplace in Brazil between 2016 and 2018.

Unlike single-table datasets designed for a specific Machine Learning problem, the Olist dataset consists of multiple relational tables that accurately represent the architecture of a real production database. This enables the development of several interconnected AI modules using a unified enterprise data source, closely simulating real-world business environments.

The dataset provides complete customer purchase journeys—from order placement and payment processing to product delivery and customer reviews—making it an ideal foundation for building an enterprise decision intelligence platform.

---

### Dataset Information

| Attribute | Details |
|----------|---------|
| **Dataset Name** | Brazilian E-Commerce Public Dataset by Olist |
| **Source** | Kaggle |
| **Provider** | Olist |
| **Dataset Type** | Relational Tabular Dataset |
| **Format** | CSV |
| **Domain** | E-Commerce / Retail Analytics |
| **Time Period** | 2016 – 2018 |
| **Orders** | ~100,000 |
| **Customers** | ~99,000 |
| **Products** | ~33,000 |
| **Sellers** | ~3,000 |
| **Tables** | 9+ interconnected datasets |

---

### Why This Dataset?

The dataset was selected based on the following factors:

- Contains real-world commercial transactions from a production marketplace.
- Multiple relational tables simulate an enterprise database architecture.
- Covers the complete customer lifecycle from purchase to delivery.
- Enables development of multiple Machine Learning models from a single data source.
- Supports advanced feature engineering through table joins and business metrics.
- Provides both structured numerical and categorical data.
- Suitable for predictive analytics, customer intelligence, operational analytics, and business decision support.
- Widely recognized within the data science community for enterprise analytics projects.

---

### AI Modules Supported

The selected dataset enables the implementation of multiple enterprise AI modules, including:

| AI Module | Business Objective |
|-----------|--------------------|
| Customer Segmentation | Identify customer groups for personalized marketing strategies. |
| Customer Churn Prediction | Predict customers at risk of becoming inactive. |
| Customer Lifetime Value (CLV) Prediction | Estimate the long-term revenue potential of each customer. |
| Purchase Propensity Prediction | Predict the likelihood of future purchases. |
| Product Recommendation System | Recommend products based on customer purchasing behavior. |
| Sales Forecasting | Forecast future order volumes and revenue trends. |
| Delivery Delay Prediction | Predict delayed deliveries before shipment completion. |
| Customer Review Sentiment Analysis *(Future Enhancement)* | Analyze customer feedback to improve service quality. |

---

### Dataset Files

The project primarily utilizes the following datasets:

- `olist_customers_dataset.csv`
- `olist_orders_dataset.csv`
- `olist_order_items_dataset.csv`
- `olist_products_dataset.csv`
- `olist_order_payments_dataset.csv`
- `olist_order_reviews_dataset.csv`
- `olist_sellers_dataset.csv`
- `olist_geolocation_dataset.csv`
- `product_category_name_translation.csv`

These datasets are linked using common business identifiers such as **customer_id**, **order_id**, **product_id**, and **seller_id**, forming a complete relational data model suitable for enterprise-scale analytics and Machine Learning workflows.