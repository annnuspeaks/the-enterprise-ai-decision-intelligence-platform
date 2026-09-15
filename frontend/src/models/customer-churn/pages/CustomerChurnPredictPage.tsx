import { useState } from "react";
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  Clock3,
  Layers3,
  LoaderCircle,
  PackageSearch,
  ShoppingCart,
  Target,
} from "lucide-react";
import {
  Alert,
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import { predictCustomerChurn } from "../services/customerChurnService";

import "./CustomerChurnPredictPage.css";

interface ChurnFormData {
  total_orders: string;
  max_order_number: string;
  avg_days_between_orders: string;
  latest_order_number: string;
  latest_order_dow: string;
  latest_order_hour: string;
  prior_order_items: string;
  prior_unique_products: string;
  prior_reordered_items: string;
  prior_orders: string;
  avg_items_per_order: string;
  reorder_rate: string;
  products_per_order: string;
  unique_aisles: string;
  unique_departments: string;
  dominant_department_share: string;
  dominant_aisle_share: string;
  median_purchase_interval: string;
  min_purchase_interval: string;
  max_purchase_interval: string;
  std_purchase_interval: string;
  inactivity_gap: string;
  inactivity_ratio: string;
}

const initialFormData: ChurnFormData = {
  total_orders: "",
  max_order_number: "",
  avg_days_between_orders: "",
  latest_order_number: "",
  latest_order_dow: "",
  latest_order_hour: "",
  prior_order_items: "",
  prior_unique_products: "",
  prior_reordered_items: "",
  prior_orders: "",
  avg_items_per_order: "",
  reorder_rate: "",
  products_per_order: "",
  unique_aisles: "",
  unique_departments: "",
  dominant_department_share: "",
  dominant_aisle_share: "",
  median_purchase_interval: "",
  min_purchase_interval: "",
  max_purchase_interval: "",
  std_purchase_interval: "",
  inactivity_gap: "",
  inactivity_ratio: "",
};

const fieldGroups = [
  {
    icon: Activity,
    title: "Order History",
    description: "Historical ordering volume and customer order progression.",
    fields: [
      ["total_orders", "Total Orders", "Number of historical orders.", "10"],
      [
        "max_order_number",
        "Maximum Order Number",
        "Highest order sequence observed.",
        "10",
      ],
      [
        "latest_order_number",
        "Latest Order Number",
        "Most recent order sequence in the available history.",
        "10",
      ],
      [
        "prior_orders",
        "Prior Orders",
        "Number of prior orders used in the profile.",
        "9",
      ],
    ],
  },
  {
    icon: Clock3,
    title: "Purchase Cycle",
    description:
      "Signals describing the customer's historical purchase timing.",
    fields: [
      [
        "avg_days_between_orders",
        "Average Days Between Orders",
        "Average historical interval between orders.",
        "7.5",
      ],
      [
        "median_purchase_interval",
        "Median Purchase Interval",
        "Typical historical purchase interval.",
        "7",
      ],
      [
        "min_purchase_interval",
        "Minimum Purchase Interval",
        "Shortest observed purchase interval.",
        "2",
      ],
      [
        "max_purchase_interval",
        "Maximum Purchase Interval",
        "Longest observed purchase interval.",
        "21",
      ],
      [
        "std_purchase_interval",
        "Purchase Interval Variability",
        "Standard deviation of purchase intervals.",
        "4.2",
      ],
    ],
  },
  {
    icon: ShoppingCart,
    title: "Order & Reorder Behaviour",
    description:
      "Signals describing order size, repeat purchasing and reorder tendency.",
    fields: [
      [
        "prior_order_items",
        "Prior Order Items",
        "Total items purchased across prior orders.",
        "86",
      ],
      [
        "prior_reordered_items",
        "Prior Reordered Items",
        "Number of historically reordered items.",
        "54",
      ],
      [
        "avg_items_per_order",
        "Average Items per Order",
        "Average number of items in each prior order.",
        "7.8",
      ],
      [
        "reorder_rate",
        "Reorder Rate",
        "Share of prior items that were reordered.",
        "0.63",
      ],
      [
        "products_per_order",
        "Products per Order",
        "Average unique products represented per order.",
        "6.4",
      ],
    ],
  },
  {
    icon: PackageSearch,
    title: "Product Diversity",
    description:
      "Signals describing the breadth of the customer's historical purchases.",
    fields: [
      [
        "prior_unique_products",
        "Unique Products",
        "Number of distinct products purchased historically.",
        "42",
      ],
      [
        "unique_aisles",
        "Unique Aisles",
        "Number of distinct product aisles represented.",
        "18",
      ],
      [
        "unique_departments",
        "Unique Departments",
        "Number of distinct product departments represented.",
        "7",
      ],
    ],
  },
  {
    icon: Layers3,
    title: "Category Behaviour",
    description: "Signals describing concentration within product categories.",
    fields: [
      [
        "dominant_department_share",
        "Dominant Department Share",
        "Share of purchases belonging to the customer's dominant department.",
        "0.41",
      ],
      [
        "dominant_aisle_share",
        "Dominant Aisle Share",
        "Share of purchases belonging to the customer's dominant aisle.",
        "0.18",
      ],
    ],
  },
  {
    icon: Target,
    title: "Inactivity Signals",
    description:
      "Historical inactivity proxies derived from observed purchase intervals.",
    fields: [
      [
        "inactivity_gap",
        "Inactivity Gap",
        "Difference between the longest and typical purchase interval.",
        "14",
      ],
      [
        "inactivity_ratio",
        "Inactivity Ratio",
        "Longest purchase interval relative to the median interval.",
        "3.0",
      ],
      [
        "latest_order_dow",
        "Latest Order Day",
        "Day-of-week value associated with the latest historical order.",
        "3",
      ],
      [
        "latest_order_hour",
        "Latest Order Hour",
        "Hour-of-day value associated with the latest historical order.",
        "14",
      ],
    ],
  },
];

function CustomerChurnPredictPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<ChurnFormData>(initialFormData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange =
    (field: keyof ChurnFormData) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((current) => ({
        ...current,
        [field]: event.target.value,
      }));
    };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isLoading) {
      return;
    }

    setError(null);
    setIsLoading(true);

    try {
      const features = Object.fromEntries(
        Object.entries(formData).map(([key, value]) => [key, Number(value)]),
      ) as Record<string, number>;

      const prediction = await predictCustomerChurn(features);

      navigate("/customer-churn/result", {
        state: {
          prediction,
        },
      });
    } catch (error) {
      console.error("Customer churn prediction failed:", error);

      setError(
        "We couldn't generate the churn prediction right now. Please check your inputs and try again.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box component="main" className="customer-churn-predict-page">
      <section className="customer-churn-predict-hero">
        <Container maxWidth="xl">
          <Stack spacing={2.5}>
            <Button
              component={Link}
              to="/customer-churn"
              startIcon={<ArrowLeft size={17} />}
              className="customer-churn-predict-back"
              sx={{ alignSelf: "flex-start" }}
            >
              Back to Churn Overview
            </Button>

            <Stack spacing={1.25} className="customer-churn-predict-heading">
              <Typography variant="overline" color="primary">
                Customer Churn Prediction
              </Typography>

              <Typography variant="h1" component="h1">
                Evaluate a customer
                <span> profile.</span>
              </Typography>

              <Typography variant="body1" color="text.secondary">
                Provide the customer's historical behavioural signals required
                by the churn model. Nexora will use these parameters to generate
                the prediction in the next stage.
              </Typography>
            </Stack>
          </Stack>
        </Container>
      </section>

      <section className="customer-churn-predict-form-section">
        <Container maxWidth="xl">
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              {error && (
                <Alert
                  severity="error"
                  onClose={() => setError(null)}
                  className="customer-churn-predict-error"
                >
                  {error}
                </Alert>
              )}
              {fieldGroups.map((group) => {
                const Icon = group.icon;

                return (
                  <Box key={group.title} className="customer-churn-form-group">
                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      spacing={1.5}
                      className="customer-churn-form-group__heading"
                    >
                      <Box className="customer-churn-form-group__icon">
                        <Icon size={21} strokeWidth={1.8} />
                      </Box>

                      <Box>
                        <Typography variant="h5">{group.title}</Typography>

                        <Typography variant="body2" color="text.secondary">
                          {group.description}
                        </Typography>
                      </Box>
                    </Stack>

                    <Grid container spacing={2.5} sx={{ mt: 1 }}>
                      {group.fields.map(
                        ([field, label, helper, placeholder]) => (
                          <Grid key={field} size={{ xs: 12, sm: 6, lg: 4 }}>
                            <TextField
                              fullWidth
                              required
                              label={label}
                              placeholder={`${label} (e.g. ${placeholder})`}
                              type="number"
                              value={formData[field as keyof ChurnFormData]}
                              onChange={handleChange(
                                field as keyof ChurnFormData,
                              )}
                              helperText={helper}
                              slotProps={{
                                htmlInput: {
                                  step: "any",
                                  min: 0,
                                },
                              }}
                            />
                          </Grid>
                        ),
                      )}
                    </Grid>
                  </Box>
                );
              })}

              <Box className="customer-churn-form-note">
                <Typography variant="body2" color="text.secondary">
                  <strong>Input context:</strong> These fields represent
                  historical customer behaviour used by the trained churn model.
                  They are not live customer records stored by Nexora.
                </Typography>
              </Box>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={1.5}
                className="customer-churn-form-actions"
              >
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  disabled={isLoading}
                  className={
                    isLoading ? "customer-churn-predict-submit--loading" : ""
                  }
                  startIcon={
                    isLoading ? (
                      <LoaderCircle
                        size={19}
                        className="customer-churn-loading-icon"
                      />
                    ) : undefined
                  }
                  endIcon={!isLoading ? <ArrowRight size={19} /> : undefined}
                >
                  {isLoading ? "Analyzing Customer..." : "Review Prediction"}
                </Button>

                <Button
                  type="button"
                  variant="outlined"
                  size="large"
                  disabled={isLoading}
                  onClick={() => setFormData(initialFormData)}
                >
                  Clear Form
                </Button>
              </Stack>
            </Stack>
          </form>
        </Container>
      </section>
    </Box>
  );
}

export default CustomerChurnPredictPage;
