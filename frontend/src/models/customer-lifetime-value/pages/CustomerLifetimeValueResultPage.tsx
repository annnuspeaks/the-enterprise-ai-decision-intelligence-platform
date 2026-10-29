import { useMemo } from "react";
import {
  Alert,
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import {
  ArrowLeft,
  BadgeCheck,
  Calculator,
  ChartNoAxesCombined,
  RotateCcw,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import type {
  CustomerLifetimeValueFeatures,
  CustomerLifetimeValuePredictionResponse,
} from "../services/customerLifetimeValueService";
import "./CustomerLifetimeValueResultPage.css";

type ResultLocationState = {
  result?: CustomerLifetimeValuePredictionResponse;
  features?: CustomerLifetimeValueFeatures;
};

type FeatureKey = keyof CustomerLifetimeValueFeatures;
type FeatureDefinition = {
  key: FeatureKey;
  label: string;
  shortLabel: string;
  meaning: string;
  higherMeans: string;
  q1: number | null;
  median: number | null;
  q3: number | null;
  unit?: string;
  caveat?: string;
};

// Reference quartiles from the CLV feature-engineering notebook's 4,266
// observation-period customers. These are descriptive reference points, not
// model classes or thresholds that determine a prediction.
const featureDefinitions: FeatureDefinition[] = [
  {
    key: "observation_invoice_count", label: "Observation invoice count", shortLabel: "Purchase frequency",
    meaning: "Number of distinct invoices recorded for this customer during the observation window.",
    higherMeans: "More recorded invoices; this describes frequency, not necessarily future value by itself.",
    q1: 1, median: 2, q3: 5, unit: "invoices",
  },
  {
    key: "observation_total_value", label: "Observation total value", shortLabel: "Total purchase value",
    meaning: "Sum of the customer's recorded invoice values during the observation window.",
    higherMeans: "Greater cumulative gross purchase value during the historical window.",
    q1: 307.54, median: 689.07, q3: 1676.38,
    caveat: "This is historical purchase value, not profit or the future prediction.",
  },
  {
    key: "observation_average_invoice_value", label: "Average invoice value", shortLabel: "Average spend per invoice",
    meaning: "The customer's total observed purchase value divided by their recorded invoices.",
    higherMeans: "A higher average value per invoice in the observed history.",
    q1: 181.67, median: 290.06, q3: 424.88,
  },
  {
    key: "observation_median_invoice_value", label: "Median invoice value", shortLabel: "Typical invoice value",
    meaning: "The middle invoice value after the customer's observed invoices are ordered by value; it is less affected by unusually large invoices than the average.",
    higherMeans: "A higher typical invoice value in the observed history.",
    q1: 172.26, median: 287.21, q3: 410.38,
  },
  {
    key: "observation_total_quantity", label: "Total quantity", shortLabel: "Units purchased",
    meaning: "Total quantity recorded across the customer's observed invoices.",
    higherMeans: "More units recorded; item prices and product mix can still differ.",
    q1: 157.25, median: 379, q3: 977.75, unit: "units",
  },
  {
    key: "observation_product_line_count", label: "Product-line count", shortLabel: "Recorded product lines",
    meaning: "Total product-line entries across the customer's observed invoices. It is not necessarily a count of unique product categories.",
    higherMeans: "More recorded product-line entries in the observed purchases.",
    q1: 18, median: 43, q3: 100, unit: "lines",
  },
  {
    key: "recency_days", label: "Recency (days)", shortLabel: "Days since last purchase",
    meaning: "Number of days between the customer's last observed purchase and the end of the observation window.",
    higherMeans: "A longer time since the last recorded purchase; higher is not automatically better.",
    q1: 15, median: 47, q3: 134, unit: "days",
  },
  {
    key: "customer_tenure_days", label: "Customer tenure (days)", shortLabel: "Observed customer history",
    meaning: "Days between the first and last recorded purchase within the observation window. This is observed purchase span, not necessarily account age.",
    higherMeans: "A longer span between the first and last observed purchases.",
    q1: 0, median: 103, q3: 247, unit: "days",
  },
  {
    key: "average_days_between_observed_purchases", label: "Average days between purchases", shortLabel: "Average purchase gap",
    meaning: "Observed customer tenure divided by the number of gaps between invoices. It is unavailable for customers with only one invoice; the form may accept a numeric value for prediction.",
    higherMeans: "A longer average interval between recorded purchases; interpret alongside recency and invoice count.",
    q1: 28.69, median: 52.5, q3: 90.25, unit: "days",
    caveat: "This reference statistic was calculated for 2,835 customers with a defined value; single-invoice customers had no observed interval.",
  },
];

function formatNumber(value: number): string {
  return new Intl.NumberFormat(undefined, { maximumFractionDigits: 2 }).format(value);
}

function describeAgainstReference(value: number, definition: FeatureDefinition): string {
  const { q1, median, q3 } = definition;
  if (q1 === null || median === null || q3 === null) return "No reference range available.";
  if (value < q1) return "Below the reference dataset's 25th percentile (lower quartile).";
  if (value <= median) return "Between the reference dataset's 25th percentile and median.";
  if (value <= q3) return "Between the reference dataset's median and 75th percentile.";
  return "Above the reference dataset's 75th percentile (upper quartile).";
}

function getRangeLabel(value: number, definition: FeatureDefinition): string {
  const { q1, median, q3 } = definition;
  if (q1 === null || median === null || q3 === null) return "Reference unavailable";
  if (value < q1) return "Below lower quartile";
  if (value <= median) return "Lower half of reference";
  if (value <= q3) return "Upper half of reference";
  return "Above upper quartile";
}

function CustomerLifetimeValueResultPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as ResultLocationState | null;
  const candidateResult = state?.result;
  const candidateFeatures = state?.features;
  const result = candidateResult &&
    typeof candidateResult.predicted_future_gross_purchase_value === "number" &&
    Number.isFinite(candidateResult.predicted_future_gross_purchase_value) &&
    typeof candidateResult.currency === "string" &&
    typeof candidateResult.target_definition === "string"
      ? candidateResult
      : undefined;
  const hasValidFeatures = !!candidateFeatures && featureDefinitions.every(
    ({ key }) => typeof candidateFeatures[key] === "number" && Number.isFinite(candidateFeatures[key]) && candidateFeatures[key] >= 0,
  );
  const features = hasValidFeatures && candidateFeatures ? candidateFeatures : undefined;

  const formattedPrediction = useMemo(() => {
    if (!result || typeof result.predicted_future_gross_purchase_value !== "number" || !Number.isFinite(result.predicted_future_gross_purchase_value)) return null;
    return formatNumber(result.predicted_future_gross_purchase_value);
  }, [result]);

  if (!result || formattedPrediction === null) {
    return (
      <Box component="main" className="clv-result-page">
        <Container maxWidth="md" className="clv-result-container">
          <Paper elevation={0} className="clv-result-empty">
            <Alert severity="info">No prediction result was found in this page session. Generate a prediction first to view the result.</Alert>
            <Typography component="h1" variant="h4" className="clv-result-title">Your prediction is not available</Typography>
            <Typography className="clv-result-description">Results are passed from the prediction form and are not stored permanently by this page.</Typography>
            <Button variant="contained" onClick={() => navigate("/customer-lifetime-value/predict")} startIcon={<Calculator size={17} />} className="clv-result-primary">Go to prediction form</Button>
          </Paper>
        </Container>
      </Box>
    );
  }

  return (
    <Box component="main" className="clv-result-page">
      <Container maxWidth="lg" className="clv-result-container">
        <Stack spacing={3}>
          <Button className="clv-result-back" startIcon={<ArrowLeft size={17} />} onClick={() => navigate("/customer-lifetime-value/predict")} sx={{ alignSelf: "flex-start" }}>Back to prediction form</Button>

          <Paper elevation={0} className="clv-result-hero">
            <Typography component="div" className="clv-result-eyebrow"><BadgeCheck size={16} /> NEXORA · MODEL 03 · PREDICTION COMPLETE</Typography>
            <Typography component="h1" variant="h1" className="clv-result-title">Customer Lifetime Value <span>Prediction Result</span></Typography>
            <Typography className="clv-result-description">The model's estimate of the customer's gross purchase value over the defined one-year future prediction window.</Typography>
            <Box className="clv-result-value-card">
              <Typography className="clv-result-value-label">Predicted future gross purchase value</Typography>
              <Typography component="p" className="clv-result-value">{formattedPrediction}</Typography>
              <Typography className="clv-result-currency">Currency: {result.currency || "dataset currency"}</Typography>
            </Box>
          </Paper>

          <Paper elevation={0} className="clv-result-detail-card">
            <Box className="clv-result-section-heading"><ChartNoAxesCombined size={21} /><Box><Typography component="h2" variant="h5">Prediction details</Typography><Typography variant="body2" color="text.secondary">What this result represents</Typography></Box></Box>
            <Box className="clv-result-detail-grid">
              <Box className="clv-result-detail-item"><span>Prediction target</span><strong>Future gross purchase value</strong></Box>
              <Box className="clv-result-detail-item"><span>Prediction horizon</span><strong>Fixed one-year window</strong></Box>
              <Box className="clv-result-detail-item"><span>Target definition</span><strong className="clv-result-target">{result.target_definition || "fixed_one_year_future_gross_purchase_value"}</strong></Box>
            </Box>
            <Alert severity="info" className="clv-result-disclaimer">This is a prediction of gross purchase value—not profit, margin, or the customer's entire lifetime value. Actual future purchases may differ from the estimate. The displayed value uses the dataset's currency, which is not specified here as a particular real-world currency.</Alert>
          </Paper>

          {features && (
            <Paper elevation={0} className="clv-result-detail-card">
              <Box className="clv-result-section-heading"><ChartNoAxesCombined size={21} /><Box><Typography component="h2" variant="h5">Understand all 9 customer inputs</Typography><Typography variant="body2" color="text.secondary">What each input means and how this value compares with historical customers</Typography></Box></Box>
              <Alert severity="info" className="clv-result-disclaimer clv-reference-note">Reference ranges come from the CLV feature-engineering notebook's observation-period customer distribution (4,266 customers; the purchase-gap statistic is available for 2,835). Quartiles describe the historical dataset only. They are not customer segments, model decision thresholds, or proof that an input caused this prediction to rise or fall.</Alert>
              <Box className="clv-result-explain-grid">
                {featureDefinitions.map((definition) => {
                  const value = features[definition.key];
                  const label = getRangeLabel(value, definition);
                  return (
                    <Box className="clv-result-explain-card" key={definition.key}>
                      <Box className="clv-result-explain-top"><span>{definition.shortLabel}</span><strong>{formatNumber(value)}{definition.unit ? ` ${definition.unit}` : ""}</strong></Box>
                      <p className="clv-result-explain-meaning">{definition.meaning}</p>
                      <Box className="clv-result-reference-badge">{label}</Box>
                      <p className="clv-result-explain-compare">{describeAgainstReference(value, definition)}</p>
                      <Box className="clv-result-quartiles">
                        <Box><span>25th percentile</span><strong>{definition.q1 === null ? "N/A" : formatNumber(definition.q1)}</strong></Box>
                        <Box><span>Median</span><strong>{definition.median === null ? "N/A" : formatNumber(definition.median)}</strong></Box>
                        <Box><span>75th percentile</span><strong>{definition.q3 === null ? "N/A" : formatNumber(definition.q3)}</strong></Box>
                      </Box>
                      <p className="clv-result-explain-higher"><strong>How to read it:</strong> {definition.higherMeans}</p>
                      {definition.caveat && <p className="clv-result-explain-caveat">{definition.caveat}</p>}
                    </Box>
                  );
                })}
              </Box>
              <Alert severity="warning" className="clv-result-disclaimer">A feature being above or below a reference quartile does not by itself mean the customer is high-value or low-value. The prediction combines all nine inputs through the trained model. These comparisons explain the inputs; they do not explain the model's individual prediction.</Alert>
            </Paper>
          )}

          {features && (
            <Paper elevation={0} className="clv-result-detail-card">
              <Box className="clv-result-section-heading"><Calculator size={21} /><Box><Typography component="h2" variant="h5">Input summary</Typography><Typography variant="body2" color="text.secondary">Exact feature values sent for this prediction</Typography></Box></Box>
              <Box className="clv-result-feature-grid">
                {featureDefinitions.map(({ key, label }) => <Box className="clv-result-feature-item" key={key}><span>{label}</span><strong>{formatNumber(features[key])}</strong></Box>)}
              </Box>
            </Paper>
          )}

          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} justifyContent="flex-end" className="clv-result-actions">
            <Button variant="outlined" startIcon={<RotateCcw size={17} />} onClick={() => navigate("/customer-lifetime-value/predict")} className="clv-result-secondary">Try another prediction</Button>
            <Button variant="contained" startIcon={<ArrowLeft size={17} />} onClick={() => navigate("/customer-lifetime-value")} className="clv-result-primary">Back to model overview</Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default CustomerLifetimeValueResultPage;
