import apiClient from "../api/client";
import { API_ENDPOINTS } from "../api/endpoints";

export interface CustomerSegmentationRequest {
  total_orders: number;
  total_spent: number;
  average_order_value: number;
  average_review_score: number;
}

export interface CustomerSegmentationResponse {
  cluster_id: number;
  segment_name: string;
}

export async function predictCustomerSegmentation(
  request: CustomerSegmentationRequest,
): Promise<CustomerSegmentationResponse> {
  const response = await apiClient.post<CustomerSegmentationResponse>(
    API_ENDPOINTS.customerSegmentation.predict,
    request,
  );

  return response.data;
}