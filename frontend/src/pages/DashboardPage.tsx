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
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";

interface ModelDefinition {
  key: string;
  name: string;
  description: string;
  status: "Available" | "Coming Soon";
  icon: ReactNode;
  endpoint?: string;
}

const models: ModelDefinition[] = [
  {
    key: "customer_segmentation",
    name: "Customer Segmentation",
    description:
      "Identify meaningful customer groups using behavioral and purchasing patterns.",
    status: "Available",
    icon: <Users size={28} />,
    endpoint: "/customer-segmentation",
  },
  {
    key: "customer_churn",
    name: "Customer Churn Prediction",
    description:
      "Predict customers who are at risk of leaving and support retention decisions.",
    status: "Coming Soon",
    icon: <CircleAlert size={28} />,
  },
  {
    key: "customer_lifetime_value",
    name: "Customer Lifetime Value",
    description:
      "Estimate the long-term economic value of individual customers.",
    status: "Coming Soon",
    icon: <Gauge size={28} />,
  },
  {
    key: "purchase_propensity",
    name: "Purchase Propensity",
    description:
      "Estimate the likelihood that a customer will make a purchase.",
    status: "Coming Soon",
    icon: <ShoppingCart size={28} />,
  },
  {
    key: "anomaly_detection",
    name: "Anomaly Detection",
    description:
      "Detect unusual customer behavior and potentially suspicious activity.",
    status: "Coming Soon",
    icon: <ShieldCheck size={28} />,
  },
  {
    key: "sales_demand_forecasting",
    name: "Sales & Demand Forecasting",
    description:
      "Forecast future sales and demand trends to support planning.",
    status: "Coming Soon",
    icon: <LineChart size={28} />,
  },
  {
    key: "recommendation_system",
    name: "Recommendation System",
    description:
      "Generate personalized product and customer recommendations.",
    status: "Coming Soon",
    icon: <Network size={28} />,
  },
  {
    key: "dynamic_risk_scoring",
    name: "Dynamic Risk Scoring",
    description:
      "Combine customer signals to produce dynamic business risk scores.",
    status: "Coming Soon",
    icon: <BarChart3 size={28} />,
  },
];

function DashboardPage() {
  const liveModels = models.filter((model) => model.status === "Available").length;

  return (
    <Box component="main">
      <Container maxWidth="xl">
        <Stack spacing={5} sx={{ py: { xs: 4, md: 6 } }}>
          <Stack spacing={1}>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 800,
                letterSpacing: "-0.03em",
                fontSize: { xs: "2.35rem", sm: "3rem", md: "3.7rem" },
              }}
            >
              Nexora Dashboard
            </Typography>

            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ maxWidth: 760, fontWeight: 400, lineHeight: 1.6 }}
            >
              Explore Nexora's eight locked AI and Machine Learning models.
              Available models are live, while upcoming capabilities are
              clearly marked as coming soon.
            </Typography>
          </Stack>

          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Card elevation={0} sx={{ height: "100%" }}>
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    AI Models
                  </Typography>
                  <Typography variant="h4" sx={{ mt: 0.5, fontWeight: 800 }}>
                    {models.length}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Locked platform architecture
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, sm: 4 }}>
              <Card elevation={0} sx={{ height: "100%" }}>
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Live Models
                  </Typography>
                  <Typography variant="h4" sx={{ mt: 0.5, fontWeight: 800 }}>
                    {liveModels}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Currently available
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, sm: 4 }}>
              <Card elevation={0} sx={{ height: "100%" }}>
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Platform Status
                  </Typography>
                  <Typography variant="h4" sx={{ mt: 0.5, fontWeight: 800 }}>
                    Active
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Expanding model capabilities
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Stack spacing={2}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={1.5}
              sx={{ justifyContent: "space-between", alignItems: { sm: "center" } }}
            >
              <Box>
                <Typography variant="h4" component="h2" sx={{ fontWeight: 800 }}>
                  AI & Machine Learning Models
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                  Eight specialized models under one decision intelligence platform.
                </Typography>
              </Box>

              <Chip
                label={`${liveModels} Live`}
                color="success"
                variant="outlined"
                size="small"
              />
            </Stack>

            <Grid container spacing={3}>
              {models.map((model) => {
                const available = model.status === "Available";

                return (
                  <Grid key={model.key} size={{ xs: 12, sm: 6, lg: 3 }}>
                    <Card
                      elevation={0}
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        border: 1,
                        borderColor: "divider",
                        transition: "transform 180ms ease, border-color 180ms ease",
                        "&:hover": available
                          ? {
                              transform: "translateY(-3px)",
                              borderColor: "primary.main",
                            }
                          : undefined,
                      }}
                    >
                      <CardContent
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          flexGrow: 1,
                          gap: 1.5,
                        }}
                      >
                        <Stack
                          direction="row"
                          spacing={1.5}
                          sx={{ alignItems: "center", justifyContent: "space-between" }}
                        >
                          <Box sx={{ color: "primary.main" }}>{model.icon}</Box>

                          <Chip
                            label={model.status}
                            size="small"
                            color={available ? "success" : "default"}
                            variant="outlined"
                          />
                        </Stack>

                        <Typography variant="h6" sx={{ fontWeight: 800 }}>
                          {model.name}
                        </Typography>

                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ lineHeight: 1.65, flexGrow: 1 }}
                        >
                          {model.description}
                        </Typography>

                        {available && model.endpoint ? (
                          <Button
                            component={Link}
                            to={model.endpoint}
                            variant="contained"
                            endIcon={<ArrowRight size={17} />}
                            sx={{ alignSelf: "flex-start", mt: 1 }}
                          >
                            Open Model
                          </Button>
                        ) : (
                          <Typography
                            variant="caption"
                            color="text.secondary"
                            sx={{ mt: 1 }}
                          >
                            Model interface will be available as development
                            progresses.
                          </Typography>
                        )}
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Stack>

          <Card elevation={0}>
            <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
              <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
                <Brain size={22} />
                <Typography variant="body2" color="text.secondary">
                  Nexora's model architecture is locked to eight decision
                  intelligence capabilities; models become live as their
                  individual development reaches production readiness.
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Container>
    </Box>
  );
}

export default DashboardPage;
