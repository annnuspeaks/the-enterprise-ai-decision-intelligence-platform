import {
  Alert,
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import {
  ArrowLeft,
  CheckCircle2,
  RotateCcw,
  ShoppingCart,
  Target,
  TrendingUp,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import type {
  PurchasePropensityFeatures,
  PurchasePropensityResponse,
} from "../services/purchasePropensityService";
import "./PurchasePropensityResultPage.css";
type State = {
  result?: PurchasePropensityResponse;
  features?: PurchasePropensityFeatures;
};
function PurchasePropensityResultPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { result, features } = (location.state || {}) as State;
  if (!result)
    return (
      <Container maxWidth="md">
        <Alert
          severity="info"
          sx={{ my: 6 }}
          action={
            <Button component={Link} to="/purchase-propensity/predict">
              Start prediction
            </Button>
          }
        >
          No prediction result was found. Submit a session profile first.
        </Alert>
      </Container>
    );
  const probability = Number(result.purchase_probability);
  const pct = Math.max(0, Math.min(100, probability * 100));
  const prediction = Boolean(result.purchase_prediction);
  const threshold = Number(result.threshold ?? 0.4);
  const band =
    probability < 0.3
      ? {
          name: "Lower likelihood",
          desc: "This session has a comparatively lower estimated purchase probability. Consider improving product discovery or reducing friction.",
        }
      : probability < 0.6
        ? {
            name: "Moderate likelihood",
            desc: "The session shows some purchase potential. Relevant product information or a timely, non-intrusive offer may help.",
          }
        : {
            name: "Higher likelihood",
            desc: "The model estimates a stronger purchase likelihood. Keep checkout convenient and avoid unnecessary interruptions.",
          };
  return (
    <Box component="main" className="pp-result-page">
      <Container maxWidth="lg">
        <Stack spacing={3} sx={{ py: { xs: 3, md: 5 } }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            flexWrap="wrap"
            gap={1}
          >
            <Button
              onClick={() => navigate(-1)}
              startIcon={<ArrowLeft size={17} />}
              sx={{ textTransform: "none" }}
            >
              Back to inputs
            </Button>
            <Button
              component={Link}
              to="/purchase-propensity/predict"
              startIcon={<RotateCcw size={16} />}
              sx={{ textTransform: "none" }}
            >
              New prediction
            </Button>
          </Stack>
          <Box>
            <Typography variant="overline" color="primary">
              MODEL 04 / PREDICTION RESULT
            </Typography>
            <Typography variant="h1" className="pp-result-title">
              Prediction <span>complete.</span>
            </Typography>
            <Typography color="text.secondary">
              Purchase likelihood estimated from the submitted browsing session.
            </Typography>
          </Box>
          <Paper
            elevation={0}
            className={`pp-result-hero ${prediction ? "pp-result-hero--positive" : "pp-result-hero--negative"}`}
          >
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={3}
              alignItems={{ md: "center" }}
              justifyContent="space-between"
            >
              <Box>
                <div className="pp-result-kicker">
                  <ShoppingCart size={18} /> PURCHASE PROPENSITY
                </div>
                <Typography variant="h3" className="pp-result-outcome">
                  {prediction ? "Purchase predicted" : "Purchase not predicted"}
                </Typography>
                <Typography color="text.secondary">
                  Decision threshold: {(threshold * 100).toFixed(0)}%
                  probability
                </Typography>
              </Box>
              <Box className="pp-probability">
                <strong>{pct.toFixed(1)}%</strong>
                <span>Estimated probability</span>
                <div className="pp-probability__track">
                  <i style={{ width: `${pct}%` }} />
                </div>
              </Box>
            </Stack>
          </Paper>
          <Grid container spacing={2.5}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Paper elevation={0} className="pp-result-card">
                <Stack direction="row" spacing={1.2} alignItems="center">
                  <Target color="var(--mui-palette-primary-main)" />
                  <Typography variant="h5">
                    What this probability means
                  </Typography>
                </Stack>
                <Typography variant="h6" className="pp-band-title">
                  {band.name}
                </Typography>
                <Typography color="text.secondary">{band.desc}</Typography>
                <Alert severity="info" sx={{ mt: 2 }}>
                  Interpretation bands are explanatory guides, not separate
                  model classes. The API's decision uses its returned threshold.
                </Alert>
              </Paper>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <Paper elevation={0} className="pp-result-card">
                <Stack direction="row" spacing={1.2} alignItems="center">
                  <TrendingUp color="var(--mui-palette-primary-main)" />
                  <Typography variant="h5">Business next step</Typography>
                </Stack>
                <Typography color="text.secondary" sx={{ mt: 2 }}>
                  {prediction
                    ? "Prioritise a smooth product-to-checkout journey and relevant assistance."
                    : "Test clearer product discovery, helpful information, or lower-friction navigation."}
                </Typography>
                <div className="pp-result-note">
                  <CheckCircle2 size={18} />
                  <span>
                    Use this as a decision-support signal, not a guarantee of a
                    purchase.
                  </span>
                </div>
              </Paper>
            </Grid>
          </Grid>
          <Paper elevation={0} className="pp-result-card">
            <Typography variant="h5">Submitted session summary</Typography>
            <Grid container spacing={2} sx={{ mt: 1 }}>
              {features &&
                [
                  {
                    label: "Product page visits",
                    value: features.ProductRelated,
                  },
                  {
                    label: "Product time",
                    value: `${features.ProductRelated_Duration} sec`,
                  },
                  { label: "Bounce rate", value: features.BounceRates },
                  {
                    label: "Visitor type",
                    value: features.VisitorType.replaceAll("_", " "),
                  },
                  { label: "Month", value: features.Month },
                  { label: "Weekend", value: features.Weekend ? "Yes" : "No" },
                ].map((item) => (
                  <Grid key={item.label} size={{ xs: 6, sm: 4, md: 2 }}>
                    <div className="pp-summary-item">
                      <span>{item.label}</span>
                      <strong>{item.value}</strong>
                    </div>
                  </Grid>
                ))}
            </Grid>
          </Paper>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
            <Button
              component={Link}
              to="/purchase-propensity/predict"
              variant="contained"
              endIcon={<RotateCcw size={17} />}
              sx={{ textTransform: "none" }}
            >
              Run another prediction
            </Button>
            <Button
              component={Link}
              to="/purchase-propensity"
              variant="outlined"
              sx={{ textTransform: "none" }}
            >
              Model overview
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
export default PurchasePropensityResultPage;
