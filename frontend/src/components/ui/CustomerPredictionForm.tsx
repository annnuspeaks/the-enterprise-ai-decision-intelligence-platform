import { useState } from "react";

import {
  Alert,
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { predictCustomerSegmentation } from "../../services/customerSegmentationService";

export interface CustomerPredictionResult {
  totalOrders: number;
  totalSpent: number;
  averageOrderValue: number;
  averageReviewScore: number;
  clusterId: number;
  segmentName: string;
}

interface CustomerPredictionFormProps {
  onPrediction: (result: CustomerPredictionResult) => void;
}

function CustomerPredictionForm({ onPrediction }: CustomerPredictionFormProps) {
  const [totalOrders, setTotalOrders] = useState("12");
  const [totalSpent, setTotalSpent] = useState("1850.75");
  const [averageOrderValue, setAverageOrderValue] = useState("154.23");
  const [averageReviewScore, setAverageReviewScore] = useState("4.6");

  const [result, setResult] = useState<CustomerPredictionResult | null>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePredict = async () => {
    setError(null);
    setResult(null);

    const orders = Number(totalOrders);
    const spent = Number(totalSpent);
    const orderValue = Number(averageOrderValue);
    const reviewScore = Number(averageReviewScore);

    if (
      !Number.isFinite(orders) ||
      !Number.isFinite(spent) ||
      !Number.isFinite(orderValue) ||
      !Number.isFinite(reviewScore)
    ) {
      setError("Please enter valid numeric values.");
      return;
    }

    if (orders < 0 || spent < 0 || orderValue < 0) {
      setError("Orders, spending, and order value cannot be negative.");
      return;
    }

    if (reviewScore < 0 || reviewScore > 5) {
      setError("Average review score must be between 0 and 5.");
      return;
    }

    try {
      setIsLoading(true);

      const prediction = await predictCustomerSegmentation({
        total_orders: orders,
        total_spent: spent,
        average_order_value: orderValue,
        average_review_score: reviewScore,
      });

      const predictionResult: CustomerPredictionResult = {
        totalOrders: orders,
        totalSpent: spent,
        averageOrderValue: orderValue,
        averageReviewScore: reviewScore,
        clusterId: prediction.cluster_id,
        segmentName: prediction.segment_name,
      };

      setResult(predictionResult);

      onPrediction(predictionResult);
    } catch {
      setError(
        "Unable to generate prediction. Please make sure the backend service is running.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <CardContent>
        <Stack spacing={3}>
          <div>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              Customer Prediction
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Enter customer-level features to generate a real-time segmentation
              prediction.
            </Typography>
          </div>

          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Total Orders"
                type="number"
                value={totalOrders}
                onChange={(event) => setTotalOrders(event.target.value)}
                slotProps={{ htmlInput: { min: 0 } }}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Total Spent"
                type="number"
                value={totalSpent}
                onChange={(event) => setTotalSpent(event.target.value)}
                slotProps={{ htmlInput: { min: 0, step: "0.01" } }}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Average Order Value"
                type="number"
                value={averageOrderValue}
                onChange={(event) => setAverageOrderValue(event.target.value)}
                slotProps={{ htmlInput: { min: 0, step: "0.01" } }}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Average Review Score"
                type="number"
                value={averageReviewScore}
                onChange={(event) => setAverageReviewScore(event.target.value)}
                slotProps={{ htmlInput: { min: 0, max: 5, step: "0.1" } }}
              />
            </Grid>
          </Grid>

          {error && <Alert severity="error">{error}</Alert>}

          <Button
            variant="contained"
            onClick={handlePredict}
            disabled={isLoading}
          >
            {isLoading ? "Predicting..." : "Predict Customer Segment"}
          </Button>

          {result && (
            <Alert severity="success">
              Prediction: <strong>{result.segmentName}</strong>
            </Alert>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
}

export default CustomerPredictionForm;
