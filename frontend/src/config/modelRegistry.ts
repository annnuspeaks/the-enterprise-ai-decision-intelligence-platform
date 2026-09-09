import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  CircleAlert,
  Gauge,
  LineChart,
  Network,
  ShieldCheck,
  ShoppingCart,
  Users,
} from "lucide-react";

export type ModelStatus = "available" | "coming_soon" | "deferred";

export interface ModelDefinition {
  key: string;
  name: string;
  shortName: string;
  description: string;
  status: ModelStatus;
  icon: LucideIcon;
  route?: string;
}

export const MODEL_REGISTRY: ModelDefinition[] = [
  {
    key: "customer_segmentation",
    name: "Customer Segmentation",
    shortName: "Segmentation",
    description:
      "Identify meaningful customer groups using behavioral and purchasing patterns.",
    status: "available",
    icon: Users,
    route: "/customer-segmentation",
  },
  {
    key: "customer_churn",
    name: "Customer Churn Prediction",
    shortName: "Churn",
    description:
      "Predict churn-like customer behavior and support retention decisions.",
    status: "available",
    icon: CircleAlert,
    route: "/customer-churn",
  },
  {
    key: "customer_lifetime_value",
    name: "Customer Lifetime Value",
    shortName: "CLV",
    description: "Estimate the long-term economic value of individual customers.",
    status: "coming_soon",
    icon: Gauge,
    route: "/customer-lifetime-value",
  },
  {
    key: "purchase_propensity",
    name: "Purchase Propensity",
    shortName: "Propensity",
    description: "Estimate the likelihood that a customer will make a purchase.",
    status: "deferred",
    icon: ShoppingCart,
  },
  {
    key: "anomaly_detection",
    name: "Anomaly Detection",
    shortName: "Anomaly",
    description:
      "Detect unusual customer behavior and potentially suspicious activity.",
    status: "deferred",
    icon: ShieldCheck,
  },
  {
    key: "sales_demand_forecasting",
    name: "Sales & Demand Forecasting",
    shortName: "Forecasting",
    description: "Forecast future sales and demand trends to support planning.",
    status: "coming_soon",
    icon: LineChart,
  },
  {
    key: "recommendation_system",
    name: "Recommendation System",
    shortName: "Recommendations",
    description: "Generate personalized product and customer recommendations.",
    status: "coming_soon",
    icon: Network,
  },
  {
    key: "dynamic_risk_scoring",
    name: "Dynamic Risk Scoring",
    shortName: "Risk Scoring",
    description: "Combine customer signals to produce dynamic business risk scores.",
    status: "coming_soon",
    icon: BarChart3,
  },
];

export const MODEL_NAVIGATION = MODEL_REGISTRY.filter(
  (model) => model.key !== "customer_segmentation",
);
