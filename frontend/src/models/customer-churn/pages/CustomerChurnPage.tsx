import {
  Activity,
  ArrowRight,
  Brain,
  Clock3,
  Database,
  Layers3,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

import customerChurnIllustration from "../local_assets/customer-churn.png";
import "./CustomerChurnPage.css";

const parameterGroups = [
  {
    icon: Activity,
    title: "Order History",
    description:
      "Historical ordering activity used to understand the customer's purchasing pattern.",
  },
  {
    icon: Clock3,
    title: "Purchase Cycle",
    description:
      "Time-based signals describing how regularly and frequently the customer purchases.",
  },
  {
    icon: Target,
    title: "Recency & Inactivity",
    description:
      "Signals describing recent activity and periods of customer inactivity.",
  },
  {
    icon: Layers3,
    title: "Reorder Behaviour",
    description:
      "Signals describing repeat purchases and the customer's tendency to reorder products.",
  },
  {
    icon: Database,
    title: "Product Diversity",
    description:
      "Historical product-level behaviour representing the breadth of the customer's purchases.",
  },
  {
    icon: Users,
    title: "Category Behaviour",
    description:
      "Signals describing how the customer interacts with product categories.",
  },
];

const modelStats = [
  {
    icon: Layers3,
    value: "23",
    label: "Input Features",
    description: "Behavioural parameters used by the prediction workflow.",
  },
  {
    icon: Target,
    value: "0.63",
    label: "Operating Threshold",
    description: "Selected threshold used for the model's binary prediction.",
  },
  {
    icon: ShieldCheck,
    value: "0.836",
    label: "ROC-AUC",
    description: "Held-out test-set ranking performance.",
  },
];

function CustomerChurnPage() {
  return (
    <Box component="main" className="customer-churn-page">
      <Container maxWidth="xl" className="customer-churn-container">
        <Stack spacing={{ xs: 3, md: 4 }} sx={{ py: { xs: 2.5, md: 4 } }}>
          <Box component="section" className="churn-glass-hero">
            <Grid
              container
              spacing={{ xs: 3, md: 4 }}
              sx={{ alignItems: "center" }}
            >
              <Grid size={{ xs: 12, md: 6 }}>
                <Stack spacing={1.5} className="churn-hero-copy">
                  <Chip
                    icon={<Brain size={14} />}
                    label="MODEL 02 / CUSTOMER CHURN"
                    size="small"
                    variant="outlined"
                    color="primary"
                    className="churn-model-chip"
                  />

                  <Typography
                    variant="h1"
                    component="h1"
                    className="churn-gradient-title"
                  >
                    Customer Churn Prediction
                  </Typography>

                  <Typography
                    variant="body1"
                    color="text.secondary"
                    className="churn-hero-description"
                  >
                    Identify customers showing churn-like behavioural patterns
                    and generate a probability-based risk assessment using the
                    trained churn model.
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      flexWrap: "wrap",
                      gap: 0.8,
                    }}
                  >
                    <Chip
                      icon={<ShieldCheck size={14} />}
                      label="Prediction Ready"
                      color="success"
                      variant="outlined"
                      size="small"
                    />
                    <Chip
                      icon={<Layers3 size={14} />}
                      label="23 Features"
                      variant="outlined"
                      size="small"
                    />
                    <Chip
                      icon={<Target size={14} />}
                      label="Random Forest"
                      variant="outlined"
                      size="small"
                    />
                  </Box>

                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={1.1}
                    sx={{ pt: 0.5 }}
                  >
                    <Button
                      component={Link}
                      to="/customer-churn/predict"
                      variant="contained"
                      size="large"
                      endIcon={<ArrowRight size={18} />}
                      className="churn-primary-cta"
                    >
                      Start Prediction
                    </Button>
                    <Button
                      href="#model-inputs"
                      variant="outlined"
                      size="large"
                      className="churn-secondary-cta"
                    >
                      Explore Model
                    </Button>
                  </Stack>
                </Stack>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Box className="churn-illustration-card">
                  <Box
                    component="img"
                    src={customerChurnIllustration}
                    alt="Customer churn and retention illustration"
                    className="churn-illustration"
                  />
                  <Typography
                    variant="caption"
                    className="churn-illustration-caption"
                  >
                    BEHAVIOUR → PREDICTION → RETENTION
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Grid container spacing={2}>
            {modelStats.map((item) => {
              const Icon = item.icon;
              return (
                <Grid key={item.label} size={{ xs: 12, sm: 6, md: 4 }}>
                  <Box className="churn-glass-card churn-stat-card">
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Box className="churn-icon-tile">
                        <Icon size={21} />
                      </Box>

                      <Typography variant="overline" color="text.secondary">
                        {item.label}
                      </Typography>
                    </Box>
                    <Typography variant="h3" className="churn-stat-value">
                      {item.value}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>

          <Box component="section" id="model-inputs" className="churn-section">
            <Stack spacing={0.8} className="churn-section-heading">
              <Typography variant="overline" color="primary">
                MODEL INPUTS
              </Typography>
              <Typography
                variant="h2"
                component="h2"
                className="churn-section-title"
              >
                The customer behaviour signals Nexora evaluates.
              </Typography>
              <Typography variant="body1" color="text.secondary">
                The workflow groups the model's required behavioural signals
                into clear business-facing categories.
              </Typography>
            </Stack>

            <Grid container spacing={2} sx={{ mt: 1 }}>
              {parameterGroups.map((group) => {
                const Icon = group.icon;
                return (
                  <Grid key={group.title} size={{ xs: 12, sm: 6, lg: 4 }}>
                    <Box className="churn-glass-card churn-feature-card">
                      <Box className="churn-icon-tile">
                        <Icon size={21} />
                      </Box>
                      <Typography variant="h6" className="churn-card-title">
                        {group.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {group.description}
                      </Typography>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Box>

          <Box className="churn-cta">
            <Box>
              <Typography variant="overline" color="primary">
                LIVE INFERENCE WORKSPACE
              </Typography>
              <Typography variant="h4" className="churn-cta-title">
                Generate a churn risk assessment.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Enter the required customer behavioural parameters and review
                the model-generated risk signal.
              </Typography>
            </Box>
            <Button
              component={Link}
              to="/customer-churn/predict"
              variant="contained"
              endIcon={<ArrowRight size={18} />}
              className="churn-primary-cta"
            >
              Open Prediction Form
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default CustomerChurnPage;
