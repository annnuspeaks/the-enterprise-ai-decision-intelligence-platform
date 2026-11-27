export const API_ENDPOINTS = {
  customerChurn: {
    predict: "/customer-churn/predict",
  },
  customerLifetimeValue: {
    predict: "/customer-lifetime-value/predict",
  },
  customerSegmentation: {
    predict: "/customer-segmentation/predict",
  },
  purchasePropensity: {
    predict: "/purchase-propensity/predict",
  },
} as const;