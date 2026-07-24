# 2.1 Dataset Collection || 2.1.1 Business Dataset

## 2.1.1.2 Data Dictionary

The **Brazilian E-Commerce Public Dataset by Olist** consists of multiple relational tables that collectively describe customer transactions, products, sellers, payments, reviews, and logistics. Unlike a single-table dataset, each table represents a different business entity and is connected through unique identifiers, forming a normalized relational database.

---

### Dataset Overview

| Property | Details |
|----------|---------|
| Dataset Name | Brazilian E-Commerce Public Dataset by Olist |
| Dataset Type | Relational Tabular Dataset |
| Format | CSV |
| Number of Tables | 9 |
| Domain | E-Commerce / Retail Analytics |
| Time Period | 2016 – 2018 |

---

### Dataset Tables

#### 1. Customers Dataset

**File:** `olist_customers_dataset.csv`

| Column | Data Type | Description |
|---------|-----------|-------------|
| customer_id | String | Unique customer identifier used in transactions. |
| customer_unique_id | String | Permanent identifier representing an individual customer. |
| customer_zip_code_prefix | Integer | Customer ZIP code prefix. |
| customer_city | String | Customer city. |
| customer_state | String | Customer state. |

---

#### 2. Orders Dataset

**File:** `olist_orders_dataset.csv`

| Column | Data Type | Description |
|---------|-----------|-------------|
| order_id | String | Unique order identifier. |
| customer_id | String | Customer who placed the order. |
| order_status | String | Current order status. |
| order_purchase_timestamp | Datetime | Purchase timestamp. |
| order_approved_at | Datetime | Payment approval timestamp. |
| order_delivered_carrier_date | Datetime | Shipment handover timestamp. |
| order_delivered_customer_date | Datetime | Delivery completion timestamp. |
| order_estimated_delivery_date | Datetime | Estimated delivery date. |

---

#### 3. Order Items Dataset

**File:** `olist_order_items_dataset.csv`

| Column | Data Type | Description |
|---------|-----------|-------------|
| order_id | String | Order identifier. |
| order_item_id | Integer | Item sequence within an order. |
| product_id | String | Purchased product identifier. |
| seller_id | String | Seller identifier. |
| shipping_limit_date | Datetime | Shipping deadline. |
| price | Float | Product selling price. |
| freight_value | Float | Shipping cost. |

---

#### 4. Products Dataset

**File:** `olist_products_dataset.csv`

| Column | Data Type | Description |
|---------|-----------|-------------|
| product_id | String | Product identifier. |
| product_category_name | String | Product category. |
| product_name_length | Integer | Product name length. |
| product_description_length | Integer | Product description length. |
| product_photos_qty | Integer | Number of product photos. |
| product_weight_g | Float | Product weight (grams). |
| product_length_cm | Float | Product length (cm). |
| product_height_cm | Float | Product height (cm). |
| product_width_cm | Float | Product width (cm). |

---

#### 5. Payments Dataset

**File:** `olist_order_payments_dataset.csv`

| Column | Data Type | Description |
|---------|-----------|-------------|
| order_id | String | Order identifier. |
| payment_sequential | Integer | Payment sequence number. |
| payment_type | String | Payment method used. |
| payment_installments | Integer | Number of installments. |
| payment_value | Float | Payment amount. |

---

#### 6. Reviews Dataset

**File:** `olist_order_reviews_dataset.csv`

| Column | Data Type | Description |
|---------|-----------|-------------|
| review_id | String | Review identifier. |
| order_id | String | Associated order. |
| review_score | Integer | Customer rating (1–5). |
| review_comment_title | String | Review title. |
| review_comment_message | String | Review description. |
| review_creation_date | Datetime | Review creation date. |
| review_answer_timestamp | Datetime | Review response timestamp. |

---

#### 7. Sellers Dataset

**File:** `olist_sellers_dataset.csv`

| Column | Data Type | Description |
|---------|-----------|-------------|
| seller_id | String | Seller identifier. |
| seller_zip_code_prefix | Integer | Seller ZIP code prefix. |
| seller_city | String | Seller city. |
| seller_state | String | Seller state. |

---

#### 8. Geolocation Dataset

**File:** `olist_geolocation_dataset.csv`

| Column | Data Type | Description |
|---------|-----------|-------------|
| geolocation_zip_code_prefix | Integer | ZIP code prefix. |
| geolocation_lat | Float | Latitude. |
| geolocation_lng | Float | Longitude. |
| geolocation_city | String | City name. |
| geolocation_state | String | State name. |

---

#### 9. Product Category Translation Dataset

**File:** `product_category_name_translation.csv`

| Column | Data Type | Description |
|---------|-----------|-------------|
| product_category_name | String | Original Portuguese category. |
| product_category_name_english | String | English category translation. |

---

### Primary Keys

| Table | Primary Key |
|---------|-------------|
| Customers | customer_id |
| Orders | order_id |
| Order Items | (order_id, order_item_id) |
| Products | product_id |
| Payments | (order_id, payment_sequential) |
| Reviews | review_id |
| Sellers | seller_id |

---

### Major Relationships

| Parent Table | Child Table | Join Key |
|--------------|-------------|----------|
| Customers | Orders | customer_id |
| Orders | Order Items | order_id |
| Orders | Payments | order_id |
| Orders | Reviews | order_id |
| Products | Order Items | product_id |
| Sellers | Order Items | seller_id |

---

### Business Significance

The relational structure of the Olist dataset enables end-to-end analysis of the e-commerce lifecycle, including customer behavior, purchasing patterns, seller performance, payment trends, logistics, and product analytics. These relationships provide the foundation for building multiple interconnected AI modules within the Enterprise AI Decision Intelligence Platform.