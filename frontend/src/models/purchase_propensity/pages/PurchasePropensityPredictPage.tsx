import { useState, type FormEvent } from "react";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {
  predictPurchasePropensity,
  type PurchasePropensityFeatures,
} from "../services/purchasePropensityService";
import "./PurchasePropensityPredictPage.css";

type Field = {
  key: keyof PurchasePropensityFeatures;
  label: string;
  hint: string;
  placeholder?: string;
  min?: number;
  step?: number;
  select?: string[];
  boolean?: boolean;
};
const groups: { title: string; description: string; fields: Field[] }[] = [
  {
    title: "Page engagement",
    description: "How the visitor explored the site during this session.",
    fields: [
      {
        key: "Administrative",
        label: "Administrative page visits",
        placeholder: "e.g., 2",
        hint: "Count of administrative pages viewed.",
        min: 0,
        step: 1,
      },
      {
        key: "Administrative_Duration",
        label: "Administrative time (seconds)",
        placeholder: "e.g., 45.5",
        hint: "Time spent on administrative pages.",
        min: 0,
        step: 0.01,
      },
      {
        key: "Informational",
        label: "Informational page visits",
        placeholder: "e.g., 1",
        hint: "Count of informational pages viewed.",
        min: 0,
        step: 1,
      },
      {
        key: "Informational_Duration",
        label: "Informational time (seconds)",
        placeholder: "e.g., 30.0",
        hint: "Time spent on informational pages.",
        min: 0,
        step: 0.01,
      },
      {
        key: "ProductRelated",
        label: "Product-related page visits",
        placeholder: "e.g., 8",
        hint: "Count of product-related pages viewed.",
        min: 0,
        step: 1,
      },
      {
        key: "ProductRelated_Duration",
        label: "Product-related time (seconds)",
        placeholder: "e.g., 240.5",
        hint: "Time spent exploring product pages.",
        min: 0,
        step: 0.01,
      },
    ],
  },
  {
    title: "Session behaviour",
    description: "Signals describing engagement and purchase context.",
    fields: [
      {
        key: "BounceRates",
        label: "Bounce rate",
        placeholder: "e.g., 0.02",
        hint: "Session bounce rate (0–1).",
        min: 0,
        step: 0.0001,
      },
      {
        key: "ExitRates",
        label: "Exit rate",
        placeholder: "e.g., 0.05",
        hint: "Page exit rate (0–1).",
        min: 0,
        step: 0.0001,
      },
      {
        key: "SpecialDay",
        label: "Special-day proximity",
        placeholder: "e.g., 0.0",
        hint: "Dataset's special-day proximity score (0–1).",
        min: 0,
        step: 0.01,
      },
      {
        key: "Month",
        label: "Month",
        placeholder: "e.g., Oct",
        hint: "Month of the session.",
        select: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "June",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      {
        key: "VisitorType",
        label: "Visitor type",
        placeholder: "e.g., Returning Visitor",
        hint: "Visitor category recorded for the session.",
        select: ["Returning_Visitor", "New_Visitor", "Other"],
      },
      {
        key: "Weekend",
        label: "Weekend session",
        placeholder: "e.g., No",
        hint: "Whether the session occurred on a weekend.",
        boolean: true,
      },
    ],
  },
  {
    title: "Technical & acquisition context",
    description: "Environment and traffic-source categories.",
    fields: [
      {
        key: "OperatingSystems",
        label: "Operating system code",
        placeholder: "e.g., 2",
        hint: "Dataset category code.",
        min: 1,
        step: 1,
      },
      {
        key: "Browser",
        label: "Browser code",
        placeholder: "e.g., 2",
        hint: "Dataset category code.",
        min: 1,
        step: 1,
      },
      {
        key: "Region",
        label: "Region code",
        placeholder: "e.g., 1",
        hint: "Dataset category code.",
        min: 1,
        step: 1,
      },
      {
        key: "TrafficType",
        label: "Traffic type code",
        placeholder: "e.g., 2",
        hint: "Dataset category code.",
        min: 1,
        step: 1,
      },
    ],
  },
];
const initial: Record<string, string> = Object.fromEntries(
  groups.flatMap((g) => g.fields).map((f) => [f.key, ""]),
);
function PurchasePropensityPredictPage() {
  const navigate = useNavigate();
  const [values, setValues] = useState(initial);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    const features = {} as PurchasePropensityFeatures;
    for (const group of groups)
      for (const f of group.fields) {
        const raw = values[f.key].trim();
        if (f.boolean) {
          (features as unknown as Record<string, unknown>)[f.key] =
            raw === "true";
          continue;
        }
        if (f.select) {
          if (!raw) {
            setError(`Please select ${f.label.toLowerCase()}.`);
            return;
          }
          (features as unknown as Record<string, unknown>)[f.key] = raw;
          continue;
        }
        const n = Number(raw);
        if (raw === "" || !Number.isFinite(n)) {
          setError(`Enter a valid value for ${f.label.toLowerCase()}.`);
          return;
        }
        if (n < (f.min ?? 0)) {
          setError(`${f.label} cannot be below ${f.min ?? 0}.`);
          return;
        }
        if (f.step === 1 && !Number.isInteger(n)) {
          setError(`${f.label} must be a whole number.`);
          return;
        }
        if (
          (f.key === "BounceRates" ||
            f.key === "ExitRates" ||
            f.key === "SpecialDay") &&
          n > 1
        ) {
          setError(`${f.label} must be between 0 and 1.`);
          return;
        }
        (features as unknown as Record<string, unknown>)[f.key] = n;
      }
    setLoading(true);
    try {
      const result = await predictPurchasePropensity(features);
      navigate("/purchase-propensity/result", { state: { result, features } });
    } catch (err) {
      const detail = axios.isAxiosError(err)
        ? typeof err.response?.data?.detail === "string"
          ? err.response.data.detail
          : "The API could not process this request."
        : "Unexpected error while generating prediction.";
      setError(
        `${detail} Check that the Nexora backend is running and the input fields match its schema.`,
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <Box component="main" className="pp-form-page">
      <Container maxWidth="lg">
        <Stack spacing={3} sx={{ py: { xs: 3, md: 5 } }}>
          <Button
            component={Link}
            to="/purchase-propensity"
            startIcon={<ArrowLeft size={17} />}
            sx={{ alignSelf: "flex-start", textTransform: "none" }}
          >
            Back to overview
          </Button>
          <Box>
            <Typography variant="overline" color="primary">
              MODEL 04 / PREDICTION WORKSPACE
            </Typography>
            <Typography variant="h1" className="pp-form-title">
              Purchase <span>propensity</span>
            </Typography>
            <Typography color="text.secondary">
              Enter all 16 session features to estimate purchase likelihood.
            </Typography>
          </Box>
          {error && (
            <Alert severity="error" onClose={() => setError("")}>
              {error}
            </Alert>
          )}
          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              {groups.map((group) => (
                <Paper
                  key={group.title}
                  elevation={0}
                  className="pp-form-group"
                >
                  <Typography variant="h5">{group.title}</Typography>
                  <Typography
                    color="text.secondary"
                    className="pp-form-group__description"
                  >
                    {group.description}
                  </Typography>
                  <Grid container spacing={2.2} sx={{ mt: 0.4 }}>
                    {group.fields.map((f) => (
                      <Grid key={f.key} size={{ xs: 12, sm: 6 }}>
                        <TextField
                          fullWidth
                          required
                          select={Boolean(f.select || f.boolean)}
                          type={f.select || f.boolean ? "text" : "number"}
                          label={f.label}
                          helperText={f.hint}
                          placeholder={
                            f.select || f.boolean ? undefined : f.placeholder
                          }
                          value={values[f.key]}
                          SelectProps={
                            f.select || f.boolean
                              ? { displayEmpty: true }
                              : undefined
                          }
                          onChange={(e) =>
                            setValues((v) => ({
                              ...v,
                              [f.key]: e.target.value,
                            }))
                          }
                          inputProps={
                            f.select || f.boolean
                              ? undefined
                              : { min: f.min ?? 0, step: f.step ?? "any" }
                          }
                        >
                          {f.boolean || f.select
                            ? [
                                <MenuItem key="placeholder" value="" disabled>
                                  {f.placeholder}
                                </MenuItem>,
                                ...(f.boolean
                                  ? [
                                      <MenuItem key="false" value="false">
                                        No
                                      </MenuItem>,
                                      <MenuItem key="true" value="true">
                                        Yes
                                      </MenuItem>,
                                    ]
                                  : (f.select ?? []).map((v) => (
                                      <MenuItem key={v} value={v}>
                                        {v.replaceAll("_", " ")}
                                      </MenuItem>
                                    ))),
                              ]
                            : null}
                        </TextField>
                      </Grid>
                    ))}
                  </Grid>
                </Paper>
              ))}
              <Stack
                direction={{ xs: "column-reverse", sm: "row" }}
                justifyContent="space-between"
                spacing={1.5}
              >
                <Button
                  variant="outlined"
                  startIcon={<RotateCcw size={17} />}
                  onClick={() => {
                    setValues(initial);
                    setError("");
                  }}
                  sx={{ textTransform: "none" }}
                >
                  Reset form
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  endIcon={
                    loading ? (
                      <CircularProgress size={17} color="inherit" />
                    ) : (
                      <ArrowRight size={18} />
                    )
                  }
                  disabled={loading}
                  sx={{ textTransform: "none", fontWeight: 750 }}
                >
                  {loading ? "Generating prediction…" : "Generate prediction"}
                </Button>
              </Stack>
            </Stack>
          </form>
        </Stack>
      </Container>
    </Box>
  );
}
export default PurchasePropensityPredictPage;
