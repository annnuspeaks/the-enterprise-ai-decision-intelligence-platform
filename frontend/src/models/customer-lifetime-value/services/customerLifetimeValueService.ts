/**
 * Customer Lifetime Value prediction API service.
 * Keeps HTTP concerns outside the prediction form component.
 */

import axios from "axios";

const API_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000"
).replace(/\/$/, "");

export interface CustomerLifetimeValueFeatures {
  observation_invoice_count: number;
  observation_total_value: number;
  observation_average_invoice_value: number;
  observation_median_invoice_value: number;
  observation_total_quantity: number;
  observation_product_line_count: number;
  recency_days: number;
  customer_tenure_days: number;
  average_days_between_observed_purchases: number;
}

export interface CustomerLifetimeValuePredictionResponse {
  predicted_future_gross_purchase_value: number;
  currency: "dataset_currency" | string;
  target_definition: "fixed_one_year_future_gross_purchase_value" | string;
}

export interface CustomerLifetimeValuePredictionRequest {
  features: CustomerLifetimeValueFeatures;
}

export async function predictCustomerLifetimeValue(
  features: CustomerLifetimeValueFeatures,
): Promise<CustomerLifetimeValuePredictionResponse> {
  const response = await axios.post<CustomerLifetimeValuePredictionResponse>(
    `${API_BASE_URL}/customer-lifetime-value/predict`,
    { features } satisfies CustomerLifetimeValuePredictionRequest,
  );

  const data = response.data;
  if (
    !data ||
    typeof data.predicted_future_gross_purchase_value !== "number" ||
    !Number.isFinite(data.predicted_future_gross_purchase_value) ||
    typeof data.currency !== "string" ||
    typeof data.target_definition !== "string"
  ) {
    throw new Error("The Nexora API returned an invalid prediction response. Please try again or contact support.");
  }

  return data;
}
