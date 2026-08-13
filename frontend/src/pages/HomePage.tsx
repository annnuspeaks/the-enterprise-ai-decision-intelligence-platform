import {
  ArrowRight,
  BarChart3,
  Brain,
  CircleAlert,
  Gauge,
  LineChart,
  Network,
  ShieldCheck,
  ShoppingCart,
  Users,
} from "lucide-react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import { Link } from "react-router-dom";
import type { ReactNode } from "react";

interface ModelCard {
  title: string;
  description: string;
  status: "Available" | "Coming Soon";
  icon: ReactNode;
  route?: string;
}

const models: ModelCard[] = [
  {
    title: "Customer Segmentation",
    description:
      "Identify meaningful customer groups using behavioral and purchasing patterns.",
    status: "Available",
    icon: <Users size={28} />,
    route: "/customer-segmentation",
  },
  {
    title: "Customer Churn Prediction",
    description:
      "Predict customers who are at risk of leaving and support retention decisions.",
    status: "Coming Soon",
    icon: <CircleAlert size={28} />,
  },
  {
    title: "Customer Lifetime Value",
    description:
      "Estimate the long-term economic value of individual customers.",
    status: "Coming Soon",
    icon: <Gauge size={28} />,
  },
  {
    title: "Purchase Propensity",
    description:
      "Estimate the likelihood that a customer will make a purchase.",
    status: "Coming Soon",
    icon: <ShoppingCart size={28} />,
  },
  {
    title: "Anomaly Detection",
    description:
      "Detect unusual customer behavior and potentially suspicious activity.",
    status: "Coming Soon",
    icon: <ShieldCheck size={28} />,
  },
  {
    title: "Sales & Demand Forecasting",
    description: "Forecast future sales and demand trends to support planning.",
    status: "Coming Soon",
    icon: <LineChart size={28} />,
  },
  {
    title: "Recommendation System",
    description: "Generate personalized product and customer recommendations.",
    status: "Coming Soon",
    icon: <Network size={28} />,
  },
  {
    title: "Dynamic Risk Scoring",
    description:
      "Combine customer signals to produce dynamic business risk scores.",
    status: "Coming Soon",
    icon: <BarChart3 size={28} />,
  },
];

function HomePage() {
  return (
    <Box>
      <Stack spacing={1} sx={{ mb: 5 }}>
        <Typography variant="h3" component="h1">
          Enterprise AI Decision Intelligence
        </Typography>

        <Typography variant="body1" color="text.secondary">
          AI-powered models and decision intelligence for customer and business
          analytics.
        </Typography>
      </Stack>

      <Grid container spacing={3}>
        {models.map((model) => (
          <Grid key={model.title} size={{ xs: 12, sm: 6, lg: 3 }}>
            <Card
              elevation={2}
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  gap: 2,
                }}
              >
                <Box sx={{ color: "primary.main" }}>{model.icon}</Box>

                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  {model.title}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ flexGrow: 1 }}
                >
                  {model.description}
                </Typography>

                <Stack
                  direction="row"
                  spacing={1}
                  sx={{
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{ fontWeight: 600 }}
                    color={
                      model.status === "Available"
                        ? "success.main"
                        : "text.secondary"
                    }
                  >
                    {model.status}
                  </Typography>

                  {model.route ? (
                    <Button
                      size="small"
                      endIcon={<ArrowRight size={16} />}
                      component={Link}
                      to={model.route!}
                    >
                      Open
                    </Button>
                  ) : (
                    <Button size="small" disabled>
                      Coming Soon
                    </Button>
                  )}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Stack
        direction="row"
        spacing={1}
        sx={{
          mt: 5,
          alignItems: "center",
        }}
      >
        <Brain size={20} />
        <Typography variant="body2" color="text.secondary">
          More decision intelligence capabilities will be added as the platform
          evolves.
        </Typography>
      </Stack>
    </Box>
  );
}

export default HomePage;
