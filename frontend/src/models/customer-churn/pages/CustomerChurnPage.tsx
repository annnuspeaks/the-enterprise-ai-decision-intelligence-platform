import {
  Activity,
  ArrowRight,
  BarChart3,
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

const workflowSteps = [
  {
    number: "01",
    title: "Provide customer parameters",
    description:
      "Supply the behavioral parameters required by the churn model for the customer being evaluated.",
  },
  {
    number: "02",
    title: "Model evaluates behaviour",
    description:
      "The trained machine learning pipeline processes the supplied customer profile.",
  },
  {
    number: "03",
    title: "Receive churn risk",
    description:
      "Nexora returns a churn probability, prediction, and business-readable risk level.",
  },
];

const performanceMetrics = [
  {
    icon: BarChart3,
    label: "ROC-AUC",
    value: "0.836",
    description: "Test-set ranking performance",
  },
  {
    icon: Target,
    label: "PR-AUC",
    value: "0.500",
    description: "Test-set precision-recall performance",
  },
  {
    icon: Activity,
    label: "F1 Score",
    value: "0.553",
    description: "Test-set balance of precision and recall",
  },
  {
    icon: ShieldCheck,
    label: "Recall",
    value: "0.773",
    description: "Test-set churn detection coverage",
  },
];

const churnDistribution = [
  {
    label: "Non-churn-like",
    percentage: 79.07,
    count: "163,024",
  },
  {
    label: "Churn-like",
    percentage: 20.93,
    count: "43,161",
  },
];

const riskAnalytics = [
  {
    label: "True Negatives",
    value: "17,838",
    description: "Correctly identified non-churn-like cases",
  },
  {
    label: "False Positives",
    value: "6,616",
    description: "Non-churn-like cases flagged for review",
  },
  {
    label: "False Negatives",
    value: "1,467",
    description: "Churn-like cases not detected",
  },
  {
    label: "True Positives",
    value: "5,007",
    description: "Correctly detected churn-like cases",
  },
];

function CustomerChurnPage() {
  return (
    <Box component="main" className="customer-churn-page">
      <section className="customer-churn-hero">
        <Container maxWidth="xl">
          <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
            <Grid size={{ xs: 12, md: 7 }}>
              <Stack spacing={3} className="customer-churn-hero__content">
                <Chip
                  icon={<Brain size={16} />}
                  label="AI Decision Intelligence Model"
                  variant="outlined"
                  className="customer-churn-hero__chip"
                />

                <Typography
                  variant="h1"
                  component="h1"
                  className="customer-churn-hero__title"
                >
                  Customer Churn
                  <span> Prediction</span>
                </Typography>

                <Typography
                  variant="h5"
                  color="text.secondary"
                  className="customer-churn-hero__subtitle"
                >
                  Identify customers showing churn-like behavioural patterns
                  before retention opportunities are missed.
                </Typography>

                <Typography
                  variant="body1"
                  color="text.secondary"
                  className="customer-churn-hero__description"
                >
                  Nexora evaluates customer purchasing behaviour and returns a
                  probability-based churn risk assessment. Provide the required
                  customer parameters and let the trained model generate the
                  decision signal.
                </Typography>

                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={1.5}
                  className="customer-churn-hero__actions"
                >
                  <Button
                    component={Link}
                    to="/customer-churn/predict"
                    variant="contained"
                    size="large"
                    endIcon={<ArrowRight size={19} />}
                  >
                    Start Prediction
                  </Button>

                  <Button href="#how-it-works" variant="outlined" size="large">
                    See How It Works
                  </Button>
                </Stack>
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <Box className="customer-churn-hero__visual">
                <div className="customer-churn-orbit customer-churn-orbit--one" />
                <div className="customer-churn-orbit customer-churn-orbit--two" />

                <Box className="customer-churn-hero-card">
                  <Box className="customer-churn-hero-card__icon">
                    <ShieldCheck size={30} strokeWidth={1.8} />
                  </Box>

                  <Typography variant="overline" color="text.secondary">
                    Churn Risk Engine
                  </Typography>

                  <Typography variant="h5" sx={{ fontWeight: 800 }}>
                    Behaviour → Risk
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    Customer signals are transformed into an actionable churn
                    risk assessment.
                  </Typography>

                  <Stack spacing={1.2} sx={{ mt: 2 }}>
                    <Box className="customer-churn-signal">
                      <span />
                      Purchase behaviour
                    </Box>

                    <Box className="customer-churn-signal">
                      <span />
                      Inactivity signals
                    </Box>

                    <Box className="customer-churn-signal">
                      <span />
                      Reorder patterns
                    </Box>
                  </Stack>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className="customer-churn-section customer-churn-section--muted">
        <Container maxWidth="xl">
          <Stack spacing={1.5} className="customer-churn-section__heading">
            <Typography variant="overline" color="primary">
              Model performance
            </Typography>

            <Typography variant="h2" component="h2">
              Validated churn prediction performance.
            </Typography>

            <Typography variant="body1" color="text.secondary">
              These metrics summarize how the trained churn model performed on
              its held-out test set. They describe model performance, not a live
              customer population.
            </Typography>
          </Stack>

          <Grid container spacing={2.5} sx={{ mt: 2 }}>
            {performanceMetrics.map((metric) => {
              const Icon = metric.icon;

              return (
                <Grid key={metric.label} size={{ xs: 12, sm: 6, lg: 3 }}>
                  <Box className="customer-churn-metric-card">
                    <Box className="customer-churn-metric-card__top">
                      <Box className="customer-churn-metric-card__icon">
                        <Icon size={21} strokeWidth={1.8} />
                      </Box>

                      <Typography variant="overline" color="text.secondary">
                        {metric.label}
                      </Typography>
                    </Box>

                    <Typography
                      variant="h3"
                      className="customer-churn-metric-card__value"
                    >
                      {metric.value}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      {metric.description}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>

          <Typography
            variant="caption"
            color="text.secondary"
            className="customer-churn-metric-note"
          >
            Evaluation context: held-out test set · Operating threshold: 0.63
          </Typography>
        </Container>
      </section>

      <section className="customer-churn-section">
        <Container maxWidth="xl">
          <Stack spacing={1.5} className="customer-churn-section__heading">
            <Typography variant="overline" color="primary">
              What this model does
            </Typography>

            <Typography variant="h2" component="h2">
              Turn customer behaviour into a retention signal.
            </Typography>

            <Typography variant="body1" color="text.secondary">
              The churn model analyses behavioural signals from a customer
              profile and estimates the likelihood of churn-like behaviour. The
              result is designed to support business decision-making, not
              replace it.
            </Typography>
          </Stack>

          <Grid container spacing={2.5} sx={{ mt: 2 }}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box className="customer-churn-info-card">
                <Activity size={24} />
                <Typography variant="h6">Behavioural Analysis</Typography>
                <Typography variant="body2" color="text.secondary">
                  Evaluate purchase timing, activity, ordering frequency and
                  repeat behaviour.
                </Typography>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Box className="customer-churn-info-card">
                <Brain size={24} />
                <Typography variant="h6">
                  Machine Learning Prediction
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  A trained Random Forest pipeline converts the supplied
                  customer profile into a probability-based prediction.
                </Typography>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Box className="customer-churn-info-card">
                <ShieldCheck size={24} />
                <Typography variant="h6">Business Risk Signal</Typography>
                <Typography variant="body2" color="text.secondary">
                  Translate the model output into a clear risk level that can
                  support retention decisions.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section
        id="how-it-works"
        className="customer-churn-section customer-churn-section--muted"
      >
        <Container maxWidth="xl">
          <Stack spacing={1.5} className="customer-churn-section__heading">
            <Typography variant="overline" color="primary">
              How it works
            </Typography>

            <Typography variant="h2" component="h2">
              From customer parameters to decision signal.
            </Typography>

            <Typography variant="body1" color="text.secondary">
              Nexora does not treat its training dataset as a company's live
              customer database. In real usage, the organization supplies the
              customer information required by the model.
            </Typography>
          </Stack>

          <Grid container spacing={3} sx={{ mt: 2 }}>
            {workflowSteps.map((step) => (
              <Grid key={step.number} size={{ xs: 12, md: 4 }}>
                <Box className="customer-churn-step">
                  <Typography
                    variant="overline"
                    color="primary"
                    className="customer-churn-step__number"
                  >
                    {step.number}
                  </Typography>

                  <Typography variant="h6">{step.title}</Typography>

                  <Typography variant="body2" color="text.secondary">
                    {step.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>

      <section className="customer-churn-section">
        <Container maxWidth="xl">
          <Stack spacing={1.5} className="customer-churn-section__heading">
            <Typography variant="overline" color="primary">
              Churn distribution
            </Typography>

            <Typography variant="h2" component="h2">
              Understanding the model's target distribution.
            </Typography>

            <Typography variant="body1" color="text.secondary">
              The training data contains both churn-like and non-churn-like
              customer behaviour. This distribution provides context for the
              classification problem and model evaluation.
            </Typography>
          </Stack>

          <Box className="customer-churn-distribution">
            <Box className="customer-churn-distribution__bar">
              <Box
                className="customer-churn-distribution__segment customer-churn-distribution__segment--stable"
                sx={{ width: "79.07%" }}
              />
              <Box
                className="customer-churn-distribution__segment customer-churn-distribution__segment--risk"
                sx={{ width: "20.93%" }}
              />
            </Box>

            <Grid container spacing={2.5} sx={{ mt: 1 }}>
              {churnDistribution.map((item) => (
                <Grid key={item.label} size={{ xs: 12, sm: 6 }}>
                  <Box className="customer-churn-distribution-card">
                    <Box>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        fontWeight={600}
                      >
                        {item.label}
                      </Typography>

                      <Typography
                        variant="h3"
                        className="customer-churn-distribution-card__value"
                      >
                        {item.percentage.toFixed(2)}%
                      </Typography>
                    </Box>

                    <Typography variant="body2" color="text.secondary">
                      {item.count} records
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>

            <Typography
              variant="caption"
              color="text.secondary"
              className="customer-churn-distribution__note"
            >
              Dataset class distribution · Not a live customer population
            </Typography>
          </Box>
        </Container>
      </section>

      <section className="customer-churn-section customer-churn-section--muted">
        <Container maxWidth="xl">
          <Stack spacing={1.5} className="customer-churn-section__heading">
            <Typography variant="overline" color="primary">
              Risk analytics
            </Typography>

            <Typography variant="h2" component="h2">
              How the model handles churn risk.
            </Typography>

            <Typography variant="body1" color="text.secondary">
              At the selected operating threshold, the model prioritizes
              detecting churn-like behaviour while balancing false alerts. The
              confusion matrix below shows its performance on the held-out test
              set.
            </Typography>
          </Stack>

          <Grid container spacing={2.5} sx={{ mt: 2 }}>
            {riskAnalytics.map((metric) => (
              <Grid key={metric.label} size={{ xs: 12, sm: 6, lg: 3 }}>
                <Box className="customer-churn-risk-card">
                  <Typography
                    variant="overline"
                    color="text.secondary"
                    fontWeight={600}
                  >
                    {metric.label}
                  </Typography>

                  <Typography
                    variant="h3"
                    className="customer-churn-risk-card__value"
                  >
                    {metric.value}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    {metric.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Box className="customer-churn-risk-summary">
            <Stack spacing={1}>
              <Typography variant="h6">Detection profile</Typography>

              <Typography variant="body2" color="text.secondary">
                The model detects 77.34% of churn-like cases at the selected
                threshold, while 43.08% of its positive predictions are actually
                churn-like.
              </Typography>

              <Typography variant="caption" color="text.secondary">
                Test-set evaluation · Operating threshold: 0.63
              </Typography>
            </Stack>
          </Box>
        </Container>
      </section>

      <section className="customer-churn-section">
        <Container maxWidth="xl">
          <Stack spacing={1.5} className="customer-churn-section__heading">
            <Typography variant="overline" color="primary">
              Customer profile
            </Typography>

            <Typography variant="h2" component="h2">
              What information does the model use?
            </Typography>

            <Typography variant="body1" color="text.secondary">
              The prediction workflow organizes the model's required behavioural
              signals into business-friendly sections rather than exposing a raw
              machine-learning feature list.
            </Typography>
          </Stack>

          <Grid container spacing={2.5} sx={{ mt: 2 }}>
            {parameterGroups.map((group) => {
              const Icon = group.icon;

              return (
                <Grid key={group.title} size={{ xs: 12, sm: 6, lg: 4 }}>
                  <Box className="customer-churn-parameter-card">
                    <Box className="customer-churn-parameter-card__icon">
                      <Icon size={22} strokeWidth={1.8} />
                    </Box>

                    <Typography variant="h6">{group.title}</Typography>

                    <Typography variant="body2" color="text.secondary">
                      {group.description}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </section>

      <section className="customer-churn-cta">
        <Container maxWidth="lg">
          <Box className="customer-churn-cta__inner">
            <Stack spacing={1.5}>
              <Typography variant="overline" color="primary">
                Ready to evaluate a customer?
              </Typography>

              <Typography variant="h3" component="h2">
                Generate a churn risk assessment.
              </Typography>

              <Typography variant="body1" color="text.secondary">
                Enter the customer's required behavioural parameters and
                continue to the prediction workflow.
              </Typography>
            </Stack>

            <Button
              component={Link}
              to="/customer-churn/predict"
              variant="contained"
              size="large"
              endIcon={<ArrowRight size={19} />}
            >
              Open Prediction Form
            </Button>
          </Box>
        </Container>
      </section>
    </Box>
  );
}

export default CustomerChurnPage;
