from dataclasses import dataclass
from typing import Optional


@dataclass(frozen=True)
class ModelDefinition:
    key: str
    name: str
    description: str
    status: str
    endpoint: Optional[str] = None


MODEL_REGISTRY = [
    ModelDefinition(
        key="customer_segmentation",
        name="Customer Segmentation",
        description="Identify meaningful customer groups using behavioral and purchasing patterns.",
        status="available",
        endpoint="/customer-segmentation/predict",
    ),
    ModelDefinition(
        key="customer_churn",
        name="Customer Churn Prediction",
        description="Predict customers who are at risk of leaving and support retention decisions.",
        status="coming_soon",
    ),
    ModelDefinition(
        key="customer_lifetime_value",
        name="Customer Lifetime Value",
        description="Estimate the long-term economic value of individual customers.",
        status="coming_soon",
    ),
    ModelDefinition(
        key="purchase_propensity",
        name="Purchase Propensity",
        description="Estimate the likelihood that a customer will make a purchase.",
        status="deferred",
    ),
    ModelDefinition(
        key="anomaly_detection",
        name="Anomaly Detection",
        description="Detect unusual customer behavior and potentially suspicious activity.",
        status="deferred",
    ),
    ModelDefinition(
        key="sales_demand_forecasting",
        name="Sales & Demand Forecasting",
        description="Forecast future sales and demand trends to support planning.",
        status="coming_soon",
    ),
    ModelDefinition(
        key="recommendation_system",
        name="Recommendation System",
        description="Generate personalized product and customer recommendations.",
        status="coming_soon",
    ),
    ModelDefinition(
        key="dynamic_risk_scoring",
        name="Dynamic Risk Scoring",
        description="Combine customer signals to produce dynamic business risk scores.",
        status="coming_soon",
    ),
]