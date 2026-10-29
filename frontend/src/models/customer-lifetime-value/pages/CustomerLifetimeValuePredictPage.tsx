import { useState, type FormEvent } from "react";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { ArrowLeft, ArrowRight, Calculator, RotateCcw } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  predictCustomerLifetimeValue,
  type CustomerLifetimeValueFeatures,
} from "../services/customerLifetimeValueService";
import "./CustomerLifetimeValuePredictPage.css";

type FeatureKey =
  | "observation_invoice_count"
  | "observation_total_value"
  | "observation_average_invoice_value"
  | "observation_median_invoice_value"
  | "observation_total_quantity"
  | "observation_product_line_count"
  | "recency_days"
  | "customer_tenure_days"
  | "average_days_between_observed_purchases";

type FeatureDefinition = {
  name: FeatureKey;
  label: string;
  description: string;
  min: number;
  step?: number;
};

const featureGroups: {
  title: string;
  description: string;
  fields: FeatureDefinition[];
}[] = [
  {
    title: "Purchase activity",
    description: "Summarise the customer's observed invoice and purchase history.",
    fields: [
      { name: "observation_invoice_count", label: "Observation invoice count", description: "Number of invoices in the observation window.", min: 0, step: 1 },
      { name: "observation_total_value", label: "Observation total value", description: "Total gross purchase value during the observation window.", min: 0, step: 0.01 },
      { name: "observation_average_invoice_value", label: "Average invoice value", description: "Mean gross value per observed invoice.", min: 0, step: 0.01 },
      { name: "observation_median_invoice_value", label: "Median invoice value", description: "Median gross value of observed invoices.", min: 0, step: 0.01 },
      { name: "observation_total_quantity", label: "Observation total quantity", description: "Total quantity purchased in the observation window.", min: 0, step: 1 },
      { name: "observation_product_line_count", label: "Product-line count", description: "Number of distinct product lines observed.", min: 0, step: 1 },
    ],
  },
  {
    title: "Customer timing",
    description: "Describe how recently and over what span the customer purchased.",
    fields: [
      { name: "recency_days", label: "Recency (days)", description: "Days between the end of the observation window and the last purchase.", min: 0, step: 1 },
      { name: "customer_tenure_days", label: "Customer tenure (days)", description: "Observed customer tenure in days.", min: 0, step: 1 },
      { name: "average_days_between_observed_purchases", label: "Average days between purchases", description: "Average interval between observed purchases, in days.", min: 0, step: 0.01 },
    ],
  },
];

const initialValues: Record<FeatureKey, string> = {
  observation_invoice_count: "",
  observation_total_value: "",
  observation_average_invoice_value: "",
  observation_median_invoice_value: "",
  observation_total_quantity: "",
  observation_product_line_count: "",
  recency_days: "",
  customer_tenure_days: "",
  average_days_between_observed_purchases: "",
};

function CustomerLifetimeValuePredictPage() {
  const navigate = useNavigate();
  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (name: FeatureKey, value: string) => {
    setValues((current) => ({ ...current, [name]: value }));
    if (error) setError("");
  };

  const handleReset = () => {
    setValues(initialValues);
    setError("");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    const features = {} as CustomerLifetimeValueFeatures;

    for (const group of featureGroups) {
      for (const field of group.fields) {
        const rawValue = values[field.name].trim();
        const parsedValue = Number(rawValue);
        if (rawValue === "" || !Number.isFinite(parsedValue)) {
          setError(`Please enter a valid number for "${field.label}".`);
          return;
        }
        if (parsedValue < field.min) {
          setError(`"${field.label}" cannot be negative.`);
          return;
        }
        if (field.step === 1 && !Number.isInteger(parsedValue)) {
          setError(`"${field.label}" must be a whole number.`);
          return;
        }
        features[field.name] = parsedValue;
      }
    }

    // Cross-field validation: a customer with no recorded invoices cannot
    // have non-zero purchase aggregates or an observed purchase interval.
    if (features.observation_invoice_count === 0) {
      const purchaseFields: { key: FeatureKey; label: string }[] = [
        { key: "observation_total_value", label: "Observation total value" },
        { key: "observation_average_invoice_value", label: "Average invoice value" },
        { key: "observation_median_invoice_value", label: "Median invoice value" },
        { key: "observation_total_quantity", label: "Observation total quantity" },
        { key: "observation_product_line_count", label: "Product-line count" },
        { key: "average_days_between_observed_purchases", label: "Average days between purchases" },
      ];
      const inconsistent = purchaseFields.find(({ key }) => features[key] !== 0);
      if (inconsistent) {
        setError(`There are 0 observed invoices, so "${inconsistent.label}" must also be 0. Please check the customer's observation-window aggregates.`);
        return;
      }
    }

    // Average purchase value cannot exceed the total observed value when the
    // inputs describe the same non-negative observation window.
    if (features.observation_average_invoice_value > features.observation_total_value) {
      setError('"Average invoice value" cannot exceed "Observation total value". Please check both inputs.');
      return;
    }
    if (features.observation_median_invoice_value > features.observation_total_value) {
      setError('"Median invoice value" cannot exceed "Observation total value". Please check both inputs.');
      return;
    }

    setLoading(true);
    try {
      const result = await predictCustomerLifetimeValue(features);
      navigate("/customer-lifetime-value/result", {
        state: { result, features },
      });
    } catch (requestError) {
      if (axios.isAxiosError(requestError)) {
        const detail = requestError.response?.data?.detail;
        const apiMessage = Array.isArray(detail)
          ? detail.map((item: { msg?: string; loc?: (string | number)[] }) => {
              const field = item.loc?.filter((part) => part !== "body" && part !== "features").join(" → ");
              return field ? `${field}: ${item.msg || "Invalid value"}` : item.msg || "Invalid value";
            }).join(" ")
          : typeof detail === "string" ? detail : "";
        setError(
          apiMessage || (requestError.response
            ? "The API rejected this prediction request. Check that all nine values are valid and consistent, then try again."
            : "Could not connect to the Nexora API. Confirm that the backend is running and try again."),
        );
      } else {
        setError(requestError instanceof Error
          ? requestError.message
          : "An unexpected error occurred while generating the prediction. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="main" className="clv-predict-page">
      <Container maxWidth="lg" className="clv-predict-container">
        <Stack spacing={3}>
          <Button
            className="clv-predict-back"
            startIcon={<ArrowLeft size={17} />}
            onClick={() => navigate("/customer-lifetime-value")}
            sx={{ alignSelf: "flex-start" }}
          >
            Back to model overview
          </Button>

          <Paper elevation={0} className="clv-predict-hero">
            <Stack spacing={1.5}>
              <Typography className="clv-predict-eyebrow" variant="overline">
                NEXORA · MODEL 03
              </Typography>
              <Typography component="h1" variant="h1" className="clv-predict-title">
                Customer Lifetime Value <span>Prediction</span>
              </Typography>
              <Typography variant="body1" className="clv-predict-description">
                Enter the customer's aggregated purchase history and timing features to estimate future gross purchase value over the model's fixed one-year prediction window.
              </Typography>
              <Box className="clv-predict-note">
                <Calculator size={18} />
                <Typography variant="body2">
                  Use non-negative values calculated from the defined observation window. Do not enter customer-identifying details.
                </Typography>
              </Box>
            </Stack>
          </Paper>

          {error && <Alert severity="error" onClose={() => setError("")}>{error}</Alert>}

          <Box component="form" onSubmit={handleSubmit} noValidate>
            <Stack spacing={3}>
              {featureGroups.map((group, groupIndex) => (
                <Paper elevation={0} className="clv-predict-form-card" key={group.title}>
                  <Box className="clv-predict-form-heading">
                    <span className="clv-predict-step">{String(groupIndex + 1).padStart(2, "0")}</span>
                    <Box>
                      <Typography component="h2" variant="h5">{group.title}</Typography>
                      <Typography variant="body2" color="text.secondary">{group.description}</Typography>
                    </Box>
                  </Box>
                  <Grid container spacing={2.25}>
                    {group.fields.map((field) => (
                      <Grid key={field.name} size={{ xs: 12, sm: 6, md: 4 }}>
                        <TextField
                          fullWidth
                          required
                          type="number"
                          label={field.label}
                          value={values[field.name]}
                          onChange={(event) => handleChange(field.name, event.target.value)}
                          inputProps={{ min: field.min, step: field.step ?? "any" }}
                          helperText={field.description}
                          className="clv-predict-input"
                          disabled={loading}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </Paper>
              ))}

              <Paper elevation={0} className="clv-predict-disclaimer">
                <Typography variant="subtitle2">Understand the target</Typography>
                <Typography variant="body2" color="text.secondary">
                  This model predicts fixed one-year future gross purchase value. It is not a direct estimate of profit, margin, or a customer's entire lifetime value. Actual future spending may differ from the prediction.
                </Typography>
              </Paper>

              <Stack direction={{ xs: "column-reverse", sm: "row" }} spacing={1.5} justifyContent="flex-end">
                <Button type="button" variant="outlined" startIcon={<RotateCcw size={17} />} onClick={handleReset} disabled={loading} className="clv-predict-reset">
                  Reset form
                </Button>
                <Button type="submit" variant="contained" endIcon={loading ? <CircularProgress size={17} color="inherit" /> : <ArrowRight size={18} />} disabled={loading} className="clv-predict-submit">
                  {loading ? "Generating prediction…" : "Generate prediction"}
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default CustomerLifetimeValuePredictPage;
