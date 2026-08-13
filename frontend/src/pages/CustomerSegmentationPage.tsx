import { useEffect, useState } from "react";

import {
  Alert,
  Box,
  CircularProgress,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import DashboardCard from "../components/ui/DashboardCard";
import ClusterVisualization from "../components/ui/ClusterVisualization";
import CustomerExplorer from "../components/ui/CustomerExplorer";
import { predictCustomerSegmentation } from "../services/customerSegmentationService";

interface CustomerData {
  customerId: string;
  totalOrders: number;
  totalSpent: number;
  averageOrderValue: number;
  averageReviewScore: number;
  clusterId: number;
}

const demoCustomer = {
  customerId: "demo-customer-001",
  totalOrders: 12,
  totalSpent: 1850.75,
  averageOrderValue: 154.23,
  averageReviewScore: 4.6,
};

function CustomerSegmentationPage() {
  const [customer, setCustomer] = useState<CustomerData>({
    ...demoCustomer,
    clusterId: 0,
  });

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadPrediction() {
      try {
        setIsLoading(true);
        setError(null);

        const prediction = await predictCustomerSegmentation({
          total_orders: demoCustomer.totalOrders,
          total_spent: demoCustomer.totalSpent,
          average_order_value: demoCustomer.averageOrderValue,
          average_review_score: demoCustomer.averageReviewScore,
        });

        if (isMounted) {
          setCustomer({
            ...demoCustomer,
            clusterId: prediction.cluster_id,
          });
        }
      } catch {
        if (isMounted) {
          setError(
            "Unable to connect to the Customer Segmentation prediction service.",
          );
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadPrediction();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <Container maxWidth="lg">
      <Stack spacing={4} sx={{ py: 6 }}>
        <Box>
          <Typography variant="h3" component="h1" gutterBottom>
            Customer Segmentation
          </Typography>

          <Typography variant="body1" color="text.secondary">
            Customer segmentation overview based on the validated ML model.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <DashboardCard
              title="Total Customers"
              value="96,096"
              description="Customers included in segmentation."
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <DashboardCard
              title="Clusters"
              value="6"
              description="Customer segments identified by K-Means."
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <DashboardCard
              title="Silhouette Score"
              value="0.629"
              description="Overall clustering quality."
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <DashboardCard
              title="Davies-Bouldin"
              value="0.629"
              description="Cluster separation metric."
            />
          </Grid>
        </Grid>

        <ClusterVisualization />

        {error && <Alert severity="error">{error}</Alert>}

        {isLoading ? (
          <Stack
            spacing={2}
            sx={{
              py: 4,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CircularProgress />
            <Typography variant="body2" color="text.secondary">
              Generating customer segmentation prediction...
            </Typography>
          </Stack>
        ) : (
          <CustomerExplorer customer={customer} />
        )}
      </Stack>
    </Container>
  );
}

export default CustomerSegmentationPage;
