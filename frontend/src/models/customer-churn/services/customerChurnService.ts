import axios from "axios";

const API_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000"
).replace(/\/+$/, "");

export interface CustomerChurnPredictionFeatures {
  total_orders: number;
  max_order_number: number;
  avg_days_between_orders: number;
  latest_order_number: number;
  latest_order_dow: number;
  latest_order_hour: number;
  prior_order_items: number;
  prior_unique_products: number;
  prior_reordered_items: number;
  prior_orders: number;
  avg_items_per_order: number;
  reorder_rate: number;
  products_per_order: number;
  unique_aisles: number;
  unique_departments: number;
  dominant_department_share: number;
  dominant_aisle_share: number;
  median_purchase_interval: number;
  min_purchase_interval: number;
  max_purchase_interval: number;
  std_purchase_interval: number;
  inactivity_gap: number;
  inactivity_ratio: number;
}

export interface CustomerChurnPredictionResponse {
  churn_prediction: number;
  churn_probability: number;
  threshold: number;
  risk_level: string;
}

export const predictCustomerChurn = async (
  features: CustomerChurnPredictionFeatures,
): Promise<CustomerChurnPredictionResponse> => {
  const response = await axios.post<CustomerChurnPredictionResponse>(
    `${API_BASE_URL}/customer-churn/predict`,
    {
      features,
    },
  );

  return response.data;
};
