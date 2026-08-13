import {
  Box,
  Card,
  CardContent,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

import type { CustomerExplorerData } from "../../types/customer";

interface CustomerExplorerProps {
  customer: CustomerExplorerData;
}

function CustomerExplorer({ customer }: CustomerExplorerProps) {
  return (
    <Card elevation={2}>
      <CardContent>
        <Stack spacing={3}>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              Customer Explorer
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Customer-level segmentation details.
            </Typography>
          </Box>

          <Divider />

          <Stack spacing={2}>
            <Box>
              <Typography variant="body2" color="text.secondary">
                Customer ID
              </Typography>

              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                {customer.customerId}
              </Typography>
            </Box>

            <Box>
              <Typography variant="body2" color="text.secondary">
                Total Orders
              </Typography>

              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                {" "}
                {customer.totalOrders.toLocaleString()}
              </Typography>
            </Box>

            <Box>
              <Typography variant="body2" color="text.secondary">
                Total Spent
              </Typography>

              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                {customer.totalSpent.toFixed(2)}
              </Typography>
            </Box>

            <Box>
              <Typography variant="body2" color="text.secondary">
                Average Order Value
              </Typography>

              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                {customer.averageOrderValue.toFixed(2)}
              </Typography>
            </Box>

            <Box>
              <Typography variant="body2" color="text.secondary">
                Average Review Score
              </Typography>

              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                {customer.averageReviewScore.toFixed(2)}
              </Typography>
            </Box>

            <Box>
              <Typography variant="body2" color="text.secondary">
                Cluster
              </Typography>

              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                Cluster {customer.clusterId}
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default CustomerExplorer;
