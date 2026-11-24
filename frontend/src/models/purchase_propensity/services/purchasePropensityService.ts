import axios from "axios";

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000").replace(/\/+$/, "");

export interface PurchasePropensityFeatures {
  Administrative: number; Administrative_Duration: number; Informational: number; Informational_Duration: number;
  ProductRelated: number; ProductRelated_Duration: number; BounceRates: number; ExitRates: number; SpecialDay: number;
  Month: string; OperatingSystems: number; Browser: number; Region: number; TrafficType: number; VisitorType: string; Weekend: boolean;
}
export interface PurchasePropensityResponse { purchase_probability: number; purchase_prediction: boolean | number; threshold: number; [key: string]: unknown; }
export async function predictPurchasePropensity(features: PurchasePropensityFeatures): Promise<PurchasePropensityResponse> {
  const response = await axios.post<PurchasePropensityResponse>(`${API_BASE_URL}/purchase-propensity/predict`, { features });
  return response.data;
}
