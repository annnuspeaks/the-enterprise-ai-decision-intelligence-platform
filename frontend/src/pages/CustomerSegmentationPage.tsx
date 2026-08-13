import { useState } from "react";

import CustomerPredictionForm from "../components/ui/CustomerPredictionForm";
import type { CustomerPredictionResult } from "../components/ui/CustomerPredictionForm";

import { Box, Container, Grid, Stack, Typography } from "@mui/material";

import DashboardCard from "../components/ui/DashboardCard";
import ClusterVisualization from "../components/ui/ClusterVisualization";
import CustomerExplorer from "../components/ui/CustomerExplorer";

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

  const handlePrediction = (prediction: CustomerPredictionResult) => {
    setCustomer({
      customerId: demoCustomer.customerId,
      totalOrders: prediction.totalOrders,
      totalSpent: prediction.totalSpent,
      averageOrderValue: prediction.averageOrderValue,
      averageReviewScore: prediction.averageReviewScore,
      clusterId: prediction.clusterId,
    });
  };

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

        <CustomerPredictionForm onPrediction={handlePrediction} />

        <CustomerExplorer customer={customer} />
      </Stack>
    </Container>
  );
}

export default CustomerSegmentationPage;
