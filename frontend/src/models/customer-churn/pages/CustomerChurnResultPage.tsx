import {
  ArrowLeft,
  CheckCircle2,
  CircleAlert,
  ShieldCheck,
  Target,
  TrendingUp,
} from "lucide-react";
import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";

import "./CustomerChurnResultPage.css";

interface CustomerChurnPrediction {
  churn_prediction: number;
  churn_probability: number;
  threshold: number;
  risk_level: string;
}

function CustomerChurnResultPage() {
  const location = useLocation();

  const prediction = location.state?.prediction as
    | CustomerChurnPrediction
    | undefined;

  if (!prediction) {
    return (
      <Box component="main" className="customer-churn-result-page">
        <Container maxWidth="md">
          <Box className="customer-churn-result-empty">
            <CircleAlert size={42} strokeWidth={1.6} />

            <Typography variant="h4" component="h1">
              Prediction unavailable
            </Typography>

            <Typography color="text.secondary">
              No prediction result was found. Start a new customer churn
              assessment to generate a result.
            </Typography>

            <Button
              component={Link}
              to="/customer-churn/predict"
              variant="contained"
              endIcon={<TrendingUp size={18} />}
            >
              Start New Prediction
            </Button>
          </Box>
        </Container>
      </Box>
    );
  }

  const probability = prediction.churn_probability * 100;
  const threshold = prediction.threshold * 100;
  const isChurnLike = prediction.churn_prediction === 1;
  const riskLevel = prediction.risk_level;

  const interpretation =
    riskLevel === "High"
      ? "The customer's predicted churn probability is at or above the model's operating threshold. This profile should be treated as a priority retention signal."
      : riskLevel === "Medium"
        ? "The customer shows a meaningful churn signal, but the probability remains below the model's operating threshold. Targeted engagement may be appropriate."
        : "The customer's predicted churn probability is below the medium-risk boundary. The model does not identify a strong churn-like signal for this profile.";

  const recommendedAction =
    riskLevel === "High"
      ? "Prioritize this customer for retention outreach and review recent engagement or purchase activity."
      : riskLevel === "Medium"
        ? "Consider targeted engagement and continue monitoring the customer's purchase activity for signs of increasing churn risk."
        : "Maintain normal customer engagement and continue monitoring future behavioural signals.";

  return (
    <Box component="main" className="customer-churn-result-page">
      <section className="customer-churn-result-hero">
        <Container maxWidth="xl" className="customer-churn-container">
          <Stack spacing={2.5}>
            <Button
              component={Link}
              to="/customer-churn/predict"
              startIcon={<ArrowLeft size={17} />}
              className="customer-churn-result-back"
              sx={{ alignSelf: "flex-start" }}
            >
              New Prediction
            </Button>

            <Stack spacing={1.25}>
              <Typography variant="overline" color="primary">
                Customer Churn Prediction
              </Typography>

              <Typography
                variant="h1"
                component="h1"
                className="customer-churn-result-title"
              >
                Prediction <span>complete.</span>
              </Typography>

              <Typography variant="body1" color="text.secondary">
                Nexora has evaluated the supplied customer behavioural profile
                and generated a probability-based churn risk assessment.
              </Typography>
            </Stack>
          </Stack>
        </Container>
      </section>

      <section className="customer-churn-result-section">
        <Container maxWidth="xl">
          <Stack spacing={3.5}>
            <Box
              className={`customer-churn-result-summary customer-churn-result-summary--${riskLevel.toLowerCase()}`}
            >
              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={3}
                alignItems={{ xs: "flex-start", md: "center" }}
                justifyContent="space-between"
              >
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box className="customer-churn-result-summary__icon">
                    {isChurnLike ? (
                      <CircleAlert size={30} strokeWidth={1.8} />
                    ) : (
                      <CheckCircle2 size={30} strokeWidth={1.8} />
                    )}
                  </Box>

                  <Box>
                    <Typography variant="overline" color="text.secondary">
                      Model prediction
                    </Typography>

                    <Typography variant="h3">
                      {isChurnLike
                        ? "Churn-like behaviour detected"
                        : "No strong churn-like signal"}
                    </Typography>
                  </Box>
                </Stack>

                <Chip
                  label={`${riskLevel} Risk`}
                  className="customer-churn-result-risk-chip"
                />
              </Stack>
            </Box>

            <Grid container spacing={2.5}>
              <Grid size={{ xs: 12, md: 5 }}>
                <Box className="customer-churn-result-card customer-churn-result-card--visual">
                  <Stack spacing={2.5}>
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <Box className="customer-churn-result-card__icon">
                        <ShieldCheck size={21} strokeWidth={1.8} />
                      </Box>

                      <Typography variant="h6">Churn Probability</Typography>
                    </Stack>

                    <Box className="customer-churn-probability">
                      <Typography
                        variant="h1"
                        className="customer-churn-probability__value"
                      >
                        {probability.toFixed(1)}%
                      </Typography>

                      <Typography color="text.secondary">
                        Estimated probability of churn-like behaviour
                      </Typography>
                    </Box>

                    <Box>
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        sx={{ mb: 1 }}
                      >
                        <Typography variant="body2" color="text.secondary">
                          Probability
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                          Threshold {threshold.toFixed(0)}%
                        </Typography>
                      </Stack>

                      <Box className="customer-churn-result-progress">
                        <LinearProgress
                          variant="determinate"
                          value={Math.min(probability, 100)}
                        />

                        <Box
                          className="customer-churn-result-progress__threshold"
                          sx={{ left: `${threshold}%` }}
                        />
                      </Box>
                    </Box>
                  </Stack>
                </Box>
              </Grid>

              <Grid size={{ xs: 12, md: 7 }}>
                <Box className="customer-churn-result-card">
                  <Stack spacing={2.5}>
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <Box className="customer-churn-result-card__icon">
                        <Target size={21} strokeWidth={1.8} />
                      </Box>

                      <Typography variant="h6">Prediction Signal</Typography>
                    </Stack>

                    <Grid container spacing={2}>
                      <Grid size={{ xs: 12, sm: 4 }}>
                        <Box className="customer-churn-result-stat">
                          <Typography variant="overline" color="text.secondary">
                            Prediction
                          </Typography>

                          <Typography variant="h4">
                            {prediction.churn_prediction}
                          </Typography>

                          <Typography variant="body2" color="text.secondary">
                            Binary model output
                          </Typography>
                        </Box>
                      </Grid>

                      <Grid size={{ xs: 12, sm: 4 }}>
                        <Box className="customer-churn-result-stat">
                          <Typography variant="overline" color="text.secondary">
                            Risk Level
                          </Typography>

                          <Typography variant="h4">{riskLevel}</Typography>

                          <Typography variant="body2" color="text.secondary">
                            Business-readable risk
                          </Typography>
                        </Box>
                      </Grid>

                      <Grid size={{ xs: 12, sm: 4 }}>
                        <Box className="customer-churn-result-stat">
                          <Typography variant="overline" color="text.secondary">
                            Threshold
                          </Typography>

                          <Typography variant="h4">
                            {threshold.toFixed(0)}%
                          </Typography>

                          <Typography variant="body2" color="text.secondary">
                            Operating threshold
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Stack>
                </Box>
              </Grid>
            </Grid>

            <Grid container spacing={2.5}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box className="customer-churn-result-card customer-churn-result-card--insight">
                  <Stack spacing={1.5}>
                    <Typography variant="overline" color="primary">
                      Interpretation
                    </Typography>

                    <Typography variant="h5">What this result means</Typography>

                    <Typography color="text.secondary">
                      {interpretation}
                    </Typography>
                  </Stack>
                </Box>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Box className="customer-churn-result-card customer-churn-result-card--action">
                  <Stack spacing={1.5}>
                    <Typography variant="overline" color="primary">
                      Recommended Action
                    </Typography>

                    <Typography variant="h5">
                      Turn the signal into action
                    </Typography>

                    <Typography color="text.secondary">
                      {recommendedAction}
                    </Typography>
                  </Stack>
                </Box>
              </Grid>
            </Grid>

            <Box className="customer-churn-result-disclaimer">
              <Typography variant="body2" color="text.secondary">
                This prediction is a decision-support signal based on the
                supplied historical behavioural parameters. It should support,
                not replace, business judgement.
              </Typography>
            </Box>
          </Stack>
        </Container>
      </section>
    </Box>
  );
}

export default CustomerChurnResultPage;
