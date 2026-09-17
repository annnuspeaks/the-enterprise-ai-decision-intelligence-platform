import { useState } from "react";

import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Layers3,
  Sparkles,
  Target,
  TrendingDown,
  TrendingUp,
  ShoppingCart,
  Star,
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

import CustomerPredictionForm from "../components/ui/CustomerPredictionForm";
import type { CustomerPredictionResult } from "../components/ui/CustomerPredictionForm";
import CustomerExplorer from "../components/ui/CustomerExplorer";
import customerSegmentationIllustration from "../assets/customer-relationship-management.png";

interface CustomerData {
  customerId: string;
  totalOrders: number;
  totalSpent: number;
  averageOrderValue: number;
  averageReviewScore: number;
  clusterId: number;
}

const pageTypography = {
  "& .MuiTypography-root": {
    fontFamily:
      '"Inter", "Segoe UI Variable Text", "Segoe UI", system-ui, -apple-system, sans-serif',
  },

  "& .MuiTypography-h1, & .MuiTypography-h2, & .MuiTypography-h3, & .MuiTypography-h4, & .MuiTypography-h5, & .MuiTypography-h6":
    {
      fontFamily:
        '"Space Grotesk", "Segoe UI Variable Display", "Segoe UI", system-ui, sans-serif',
      letterSpacing: "-0.025em",
    },

  "& .MuiButton-root, & .MuiChip-label": {
    fontFamily:
      '"Space Grotesk", "Segoe UI Variable Display", "Segoe UI", system-ui, sans-serif',
  },

  "& .MuiTextField-root, & .MuiInputBase-root, & .MuiInputBase-input, & .MuiInputLabel-root, & .MuiFormHelperText-root, & .MuiFormLabel-root":
    {
      fontFamily:
        '"Inter", "Segoe UI Variable Text", "Segoe UI", system-ui, -apple-system, sans-serif',
    },

  "& .MuiTypography-overline, & .MuiTypography-caption": {
    fontFamily:
      '"JetBrains Mono", "Cascadia Code", "SFMono-Regular", Consolas, monospace',
    letterSpacing: "0.055em",
  },
};

const glassCard = {
  borderRadius: 3.5,
  border: 1,
  borderColor: "rgba(148,163,184,0.15)",
  background:
    "linear-gradient(145deg, rgba(30,41,59,0.66), rgba(15,23,42,0.46) 58%, rgba(37,99,235,0.055))",
  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)",
  boxShadow:
    "inset 0 1px 0 rgba(255,255,255,0.055), 0 18px 44px rgba(0,0,0,0.16)",
  transition:
    "transform 200ms ease, border-color 200ms ease, box-shadow 200ms ease",
  "&:hover": {
    transform: "translateY(-4px)",
    borderColor: "rgba(96,165,250,0.34)",
    boxShadow:
      "inset 0 1px 0 rgba(255,255,255,0.07), 0 22px 48px rgba(0,0,0,0.21), 0 0 26px rgba(59,130,246,0.07)",
  },
  "@media (prefers-reduced-motion: reduce)": {
    transition: "none",
    "&:hover": { transform: "none" },
  },
};

const iconTile = {
  width: 46,
  height: 46,
  display: "grid",
  placeItems: "center",
  flexShrink: 0,
  borderRadius: 2.5,
  border: 1,
  borderColor: "rgba(96,165,250,0.18)",
  color: "primary.main",
  background:
    "linear-gradient(145deg, rgba(59,130,246,0.13), rgba(99,102,241,0.035))",
};

/*
 * Cluster profiles are derived from the trained K-Means pipeline.
 * The model uses four customer-level features:
 * total_orders, total_spent, average_order_value and average_review_score.
 *
 * Values below represent the approximate cluster centroid in the original
 * feature scale. The labels/descriptions intentionally describe the observed
 * behavioural pattern instead of inventing unsupported customer segments.
 */
const clusterProfiles = [
  {
    id: 0,
    title: "Positive Low-Activity",
    icon: <Star size={20} />,
    tone: "Positive reviews",
    description:
      "Customers with very low order frequency and low overall spending, but the strongest review experience among the six clusters.",
    metrics: [
      "≈ 1 order",
      "≈ ₹148 total spent",
      "≈ ₹127 average order",
      "≈ 4.75 review score",
    ],
    insight:
      "Represents a small-spend, low-frequency group with comparatively strong customer satisfaction.",
  },
  {
    id: 1,
    title: "Moderate Activity",
    icon: <ShoppingCart size={20} />,
    tone: "More active",
    description:
      "The most active cluster by order count, with moderate spending and a review score close to the overall dataset centre.",
    metrics: [
      "≈ 2.1 orders",
      "≈ ₹422 total spent",
      "≈ ₹140 average order",
      "≈ 4.11 review score",
    ],
    insight:
      "Represents customers showing relatively higher purchasing frequency without extreme spending.",
  },
  {
    id: 2,
    title: "Low-Rating Low-Activity",
    icon: <TrendingDown size={20} />,
    tone: "Low engagement signal",
    description:
      "Very low order activity and spending combined with the second-lowest average review score in the segmentation.",
    metrics: [
      "≈ 1 order",
      "≈ ₹185 total spent",
      "≈ ₹140 average order",
      "≈ 1.86 review score",
    ],
    insight:
      "Represents a low-frequency group distinguished mainly by weak review outcomes.",
  },
  {
    id: 3,
    title: "High-Value Purchases",
    icon: <TrendingUp size={20} />,
    tone: "High monetary value",
    description:
      "Low order frequency but substantially higher spending and average order value than the first three clusters.",
    metrics: [
      "≈ 1 order",
      "≈ ₹1,545 total spent",
      "≈ ₹1,038 average order",
      "≈ 4.00 review score",
    ],
    insight:
      "Represents customers whose monetary value is driven by unusually large individual purchases.",
  },
  {
    id: 4,
    title: "Very High Spend / Mixed Rating",
    icon: <TrendingUp size={20} />,
    tone: "Extreme spending",
    description:
      "Very high total spending and average order value, while review satisfaction is notably lower than the positive-rating clusters.",
    metrics: [
      "≈ 1.3 orders",
      "≈ ₹16,472 total spent",
      "≈ ₹2,648 average order",
      "≈ 2.78 review score",
    ],
    insight:
      "Represents an extreme-spend group where monetary value and customer-rating signals differ strongly.",
  },
  {
    id: 5,
    title: "Extreme-Value / Low-Rating",
    icon: <Target size={20} />,
    tone: "Strongest outlier",
    description:
      "The most extreme spending and average-order-value profile, paired with the lowest average review score.",
    metrics: [
      "≈ 1 order",
      "≈ ₹109,313 total spent",
      "≈ ₹13,664 average order",
      "≈ 1.00 review score",
    ],
    insight:
      "Represents the strongest monetary outlier in the trained model and should be interpreted separately from typical customers.",
  },
];

function CustomerSegmentationPage() {
  const [customer, setCustomer] = useState<CustomerData | null>(null);

  const handlePrediction = (prediction: CustomerPredictionResult) => {
    setCustomer({
      customerId: "prediction-result",
      totalOrders: prediction.totalOrders,
      totalSpent: prediction.totalSpent,
      averageOrderValue: prediction.averageOrderValue,
      averageReviewScore: prediction.averageReviewScore,
      clusterId: prediction.clusterId,
    });
  };

  const hasPrediction = customer !== null;

  return (
    <Box
      component="main"
      sx={{
        ...pageTypography,
        overflow: "hidden",

        "& .MuiButton-root": {
          fontWeight: 800,
          textTransform: "none",
        },

        "& .MuiChip-root": {
          fontWeight: 700,
        },

        /*
         * Homepage-style primary CTA polish for the nested prediction form.
         * This targets the existing MUI Button without changing the form API.
         */
        "& .MuiButton-contained": {
          minHeight: 48,
          px: { xs: 2.2, sm: 3 },
          borderRadius: 2.5,
          color: "#ffffff",
          background:
            "linear-gradient(100deg, #2563eb 0%, #4f46e5 52%, #7c3aed 100%)",
          boxShadow:
            "0 10px 28px rgba(37,99,235,0.24), inset 0 1px 0 rgba(255,255,255,0.14)",
          border: "1px solid rgba(147,197,253,0.22)",
          transition:
            "transform 180ms ease, box-shadow 180ms ease, filter 180ms ease",
        },

        "& .MuiButton-contained:hover": {
          background:
            "linear-gradient(100deg, #3b82f6 0%, #6366f1 52%, #8b5cf6 100%)",
          boxShadow:
            "0 14px 34px rgba(37,99,235,0.32), 0 0 24px rgba(99,102,241,0.12)",
          transform: "translateY(-2px)",
          filter: "brightness(1.04)",
        },

        "& .MuiButton-contained:active": {
          transform: "translateY(0)",
        },

        "& .MuiButton-contained.Mui-disabled": {
          color: "rgba(255,255,255,0.78)",
          background:
            "linear-gradient(100deg, rgba(37,99,235,0.58), rgba(79,70,229,0.58))",
          boxShadow: "none",
        },

        "@media (prefers-reduced-motion: reduce)": {
          "& .MuiButton-contained": {
            transition: "none",
          },
          "& .MuiButton-contained:hover": {
            transform: "none",
          },
        },
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Stack spacing={{ xs: 3.5, md: 4.5 }} sx={{ py: { xs: 2.5, md: 4 } }}>
          {/* Hero */}
          <Box
            component="section"
            sx={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 4,
              px: { xs: 2.5, sm: 4, md: 5 },
              py: { xs: 3, sm: 3.5, md: 4 },
              border: 1,
              borderColor: "rgba(148,163,184,0.15)",
              background:
                "linear-gradient(135deg, rgba(15,23,42,0.66), rgba(30,41,59,0.24) 55%, rgba(37,99,235,0.07))",
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.045), 0 24px 70px rgba(2,6,23,0.18)",
              isolation: "isolate",
              "&::before": {
                content: '""',
                position: "absolute",
                width: 430,
                height: 430,
                right: "18%",
                top: "50%",
                transform: "translate(50%, -50%)",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(59,130,246,0.12), rgba(99,102,241,0.035) 42%, transparent 72%)",
                filter: "blur(8px)",
                animation: "segmentationAmbient 7s ease-in-out infinite",
                pointerEvents: "none",
              },
              "@keyframes segmentationAmbient": {
                "0%, 100%": {
                  transform: "translate(50%, -50%) scale(0.92)",
                  opacity: 0.55,
                },
                "50%": {
                  transform: "translate(50%, -50%) scale(1.08)",
                  opacity: 1,
                },
              },
              "@media (prefers-reduced-motion: reduce)": {
                "&::before": { animation: "none" },
              },
            }}
          >
            <Grid
              container
              spacing={{ xs: 3, md: 4 }}
              sx={{ alignItems: "center", position: "relative", zIndex: 1 }}
            >
              <Grid size={{ xs: 12, md: 6 }}>
                <Stack
                  spacing={1.5}
                  sx={{
                    alignItems: { xs: "center", md: "flex-start" },
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  <Chip
                    icon={<BrainCircuit size={14} />}
                    label="MODEL 01 / CUSTOMER SEGMENTATION"
                    size="small"
                    variant="outlined"
                    color="primary"
                    sx={{ alignSelf: { xs: "center", md: "flex-start" } }}
                  />

                  <Typography
                    variant="h1"
                    component="h1"
                    sx={{
                      fontWeight: 850,
                      letterSpacing: "-0.045em",
                      fontSize: {
                        xs: "2.3rem",
                        sm: "3rem",
                        md: "3.7rem",
                      },
                      lineHeight: 1.03,
                      background:
                        "linear-gradient(100deg, #f8fafc 0%, #dbeafe 24%, #60a5fa 54%, #a78bfa 78%, #f8fafc 100%)",
                      backgroundSize: "220% auto",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      color: "transparent",
                      animation:
                        "segmentationTitleGradient 7s ease-in-out infinite",
                      "@keyframes segmentationTitleGradient": {
                        "0%, 100%": { backgroundPosition: "0% 50%" },
                        "50%": { backgroundPosition: "100% 50%" },
                      },
                      "@media (prefers-reduced-motion: reduce)": {
                        animation: "none",
                      },
                    }}
                  >
                    Customer Segmentation
                  </Typography>

                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      maxWidth: 590,
                      fontSize: { xs: "0.94rem", sm: "1rem" },
                      lineHeight: 1.65,
                    }}
                  >
                    Turn customer behaviour into meaningful segments and use
                    the trained clustering model to support more targeted
                    business decisions.
                  </Typography>

                  <Stack
                    direction="row"
                    spacing={0.8}
                    sx={{
                      flexWrap: "wrap",
                      justifyContent: { xs: "center", md: "flex-start" },
                      pt: 0.4,
                    }}
                  >
                    <Chip
                      icon={<Layers3 size={14} />}
                      label="6 Segments"
                      size="small"
                      variant="outlined"
                    />
                    <Chip
                      icon={<Target size={14} />}
                      label="K-Means"
                      size="small"
                      variant="outlined"
                    />
                    <Chip
                      icon={<Sparkles size={14} />}
                      label="Prediction Ready"
                      size="small"
                      variant="outlined"
                      color="success"
                    />
                  </Stack>
                </Stack>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Card
                  elevation={0}
                  sx={{
                    ...glassCard,
                    maxWidth: 540,
                    mx: "auto",
                    overflow: "hidden",
                    animation:
                      "segmentationIllustrationFloat 6s ease-in-out infinite, segmentationIllustrationGlow 5s ease-in-out infinite",
                    "@keyframes segmentationIllustrationFloat": {
                      "0%, 100%": { transform: "translateY(0)" },
                      "50%": { transform: "translateY(-6px)" },
                    },
                    "@keyframes segmentationIllustrationGlow": {
                      "0%, 100%": {
                        boxShadow:
                          "inset 0 1px 0 rgba(255,255,255,0.055), 0 22px 52px rgba(0,0,0,0.22), 0 0 18px rgba(59,130,246,0.03)",
                      },
                      "50%": {
                        boxShadow:
                          "inset 0 1px 0 rgba(255,255,255,0.08), 0 25px 58px rgba(0,0,0,0.27), 0 0 32px rgba(59,130,246,0.12)",
                      },
                    },
                    "@media (prefers-reduced-motion: reduce)": {
                      animation: "none",
                    },
                    "&:hover": {
                      transform: "translateY(-8px) scale(1.01)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      minHeight: { xs: 250, sm: 315, md: 365 },
                      p: { xs: 1.5, sm: 2.5, md: 3 },
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      overflow: "hidden",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        width: 260,
                        height: 260,
                        borderRadius: "50%",
                        background:
                          "radial-gradient(circle, rgba(59,130,246,0.12), transparent 68%)",
                        animation:
                          "segmentationImageAura 5s ease-in-out infinite",
                      },
                      "@keyframes segmentationImageAura": {
                        "0%, 100%": { transform: "scale(0.88)", opacity: 0.42 },
                        "50%": { transform: "scale(1.08)", opacity: 0.85 },
                      },
                      "@media (prefers-reduced-motion: reduce)": {
                        "&::before": { animation: "none" },
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={customerSegmentationIllustration}
                      alt="Customer relationship management and segmentation illustration"
                      sx={{
                        position: "relative",
                        zIndex: 1,
                        width: "100%",
                        maxWidth: 500,
                        maxHeight: { xs: 255, sm: 315, md: 350 },
                        objectFit: "contain",
                        display: "block",
                        filter:
                          "drop-shadow(0 18px 28px rgba(15,23,42,0.25))",
                        transition: "transform 260ms ease, filter 260ms ease",
                        "&:hover": {
                          transform: "scale(1.025)",
                          filter:
                            "drop-shadow(0 22px 34px rgba(15,23,42,0.31))",
                        },
                        "@media (prefers-reduced-motion: reduce)": {
                          transition: "none",
                        },
                      }}
                    />

                    <Typography
                      variant="caption"
                      sx={{
                        position: "absolute",
                        left: { xs: 13, sm: 17 },
                        bottom: { xs: 10, sm: 14 },
                        zIndex: 2,
                        fontWeight: 800,
                        color: "text.secondary",
                      }}
                    >
                      BEHAVIOUR → SEGMENT → DECISION
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            </Grid>
          </Box>

          {/* Model capability cards */}
          <Grid container spacing={2}>
            {[
              {
                icon: <Layers3 size={21} />,
                title: "Six Segments",
                detail: "K-Means groups customers by behavioural similarity.",
              },
              {
                icon: <Target size={21} />,
                title: "Prediction Flow",
                detail: "Enter customer attributes and generate a segment.",
              },
              {
                icon: <CheckCircle2 size={21} />,
                title: "Result Explorer",
                detail: "Review the generated customer profile after inference.",
              },
            ].map((item) => (
              <Grid key={item.title} size={{ xs: 12, md: 4 }}>
                <Card elevation={0} sx={{ ...glassCard, height: "100%" }}>
                  <CardContent sx={{ p: { xs: 2, md: 2.25 } }}>
                    <Stack
                      direction="row"
                      spacing={1.4}
                      sx={{ alignItems: "center" }}
                    >
                      <Box sx={iconTile}>{item.icon}</Box>
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{ fontWeight: 820, fontSize: "1rem" }}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ mt: 0.35, lineHeight: 1.5 }}
                        >
                          {item.detail}
                        </Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Prediction workspace */}
          <Card
            elevation={0}
            sx={{
              ...glassCard,
              overflow: "visible",
              "& .MuiCard-root": {
                borderColor: "rgba(148,163,184,0.14)",
              },
            }}
          >
            <CardContent sx={{ p: { xs: 2, sm: 2.5, md: 3 } }}>
              <Stack spacing={2}>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={1.5}
                  sx={{
                    alignItems: { xs: "flex-start", sm: "center" },
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography
                      variant="overline"
                      color="primary"
                      sx={{ fontWeight: 800 }}
                    >
                      LIVE INFERENCE WORKSPACE
                    </Typography>

                    <Typography
                      variant="h4"
                      component="h2"
                      sx={{
                        mt: 0.25,
                        fontWeight: 850,
                        fontSize: { xs: "1.55rem", sm: "2rem" },
                      }}
                    >
                      Generate a customer segment
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 0.35, maxWidth: 680 }}
                    >
                      Provide customer behaviour metrics below. Nexora will
                      send the inputs to the trained model and return the
                      predicted segment.
                    </Typography>
                  </Box>

                  <Chip
                    icon={
                      hasPrediction ? (
                        <CheckCircle2 size={14} />
                      ) : (
                        <Sparkles size={14} />
                      )
                    }
                    label={hasPrediction ? "Prediction Complete" : "Ready"}
                    color={hasPrediction ? "success" : "primary"}
                    variant="outlined"
                    size="small"
                  />
                </Stack>

                <Box
                  sx={{
                    position: "relative",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: 3,
                      height: "100%",
                      borderRadius: 999,
                      background:
                        "linear-gradient(180deg, #60a5fa, #6366f1, transparent)",
                      opacity: 0.75,
                      animation: "inferencePulse 2.2s ease-in-out infinite",
                    },
                    "@keyframes inferencePulse": {
                      "0%, 100%": { opacity: 0.35 },
                      "50%": { opacity: 0.95 },
                    },
                    "@media (prefers-reduced-motion: reduce)": {
                      "&::before": { animation: "none" },
                    },
                  }}
                >
                  <Box sx={{ pl: { xs: 1.2, sm: 1.7 } }}>
                    <CustomerPredictionForm onPrediction={handlePrediction} />
                  </Box>
                </Box>
              </Stack>
            </CardContent>
          </Card>

          {/* Prediction result */}
          <Box>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={1.5}
              sx={{
                alignItems: { xs: "flex-start", sm: "center" },
                justifyContent: "space-between",
                mb: 1.6,
              }}
            >
              <Box>
                <Typography
                  variant="overline"
                  color="primary"
                  sx={{ fontWeight: 800 }}
                >
                  PREDICTION RESULT
                </Typography>

                <Typography
                  variant="h4"
                  component="h2"
                  sx={{
                    mt: 0.25,
                    fontWeight: 850,
                    fontSize: { xs: "1.55rem", sm: "2rem" },
                  }}
                >
                  Customer insight
                </Typography>
              </Box>

              <Chip
                label={hasPrediction ? "Result available" : "Awaiting prediction"}
                color={hasPrediction ? "success" : "default"}
                variant="outlined"
                size="small"
              />
            </Stack>

            {hasPrediction && customer ? (
              <Box
                sx={{
                  animation:
                    "resultReveal 520ms cubic-bezier(0.22,1,0.36,1) both",
                  "@keyframes resultReveal": {
                    from: { opacity: 0, transform: "translateY(12px)" },
                    to: { opacity: 1, transform: "translateY(0)" },
                  },
                  "@media (prefers-reduced-motion: reduce)": {
                    animation: "none",
                  },
                }}
              >
                <CustomerExplorer customer={customer} />
              </Box>
            ) : (
              <Card elevation={0} sx={{ ...glassCard }}>
                <CardContent sx={{ p: { xs: 2.2, md: 3 } }}>
                  <Stack
                    spacing={1}
                    sx={{
                      alignItems: "center",
                      textAlign: "center",
                      py: { xs: 2, md: 3 },
                    }}
                  >
                    <Box sx={iconTile}>
                      <Target size={21} />
                    </Box>

                    <Typography variant="h6" sx={{ fontWeight: 800 }}>
                      Your result will appear here
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ maxWidth: 560, lineHeight: 1.55 }}
                    >
                      Submit the prediction form to see the generated segment
                      and customer-level interpretation.
                    </Typography>

                    <Button
                      variant="text"
                      endIcon={<ArrowRight size={17} />}
                      sx={{ mt: 0.5 }}
                      onClick={() =>
                        window.scrollTo({
                          top: 0,
                          behavior: "smooth",
                        })
                      }
                    >
                      Back to inference form
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            )}
          </Box>

          {/* Cluster overview */}
          <Box component="section">
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={1.5}
              sx={{
                alignItems: { xs: "flex-start", md: "center" },
                justifyContent: "space-between",
                mb: 1.6,
              }}
            >
              <Box>
                <Typography
                  variant="overline"
                  color="primary"
                  sx={{ fontWeight: 800 }}
                >
                  MODEL INTERPRETATION
                </Typography>

                <Typography
                  variant="h4"
                  component="h2"
                  sx={{
                    mt: 0.25,
                    fontWeight: 850,
                    fontSize: { xs: "1.55rem", sm: "2rem" },
                  }}
                >
                  Customer Segment Overview
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 0.35, maxWidth: 760, lineHeight: 1.6 }}
                >
                  Explore the six behavioural groups learned by the trained
                  K-Means model. Each profile is based on its learned feature
                  centroid rather than a manually assigned customer category.
                </Typography>
              </Box>

              <Chip
                icon={<Layers3 size={14} />}
                label="6 distinct clusters"
                variant="outlined"
                size="small"
              />
            </Stack>

            <Grid container spacing={2}>
              {clusterProfiles.map((cluster) => {
                const isPredicted = customer?.clusterId === cluster.id;

                return (
                  <Grid key={cluster.id} size={{ xs: 12, sm: 6, lg: 4 }}>
                    <Card
                      elevation={0}
                      sx={{
                        ...glassCard,
                        height: "100%",
                        position: "relative",
                        overflow: "hidden",
                        borderColor: isPredicted
                          ? "rgba(96,165,250,0.62)"
                          : "rgba(148,163,184,0.15)",
                        boxShadow: isPredicted
                          ? "inset 0 1px 0 rgba(255,255,255,0.07), 0 22px 52px rgba(0,0,0,0.22), 0 0 30px rgba(59,130,246,0.12)"
                          : undefined,
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          left: 0,
                          top: 0,
                          width: 3,
                          height: "100%",
                          background:
                            "linear-gradient(180deg, rgba(96,165,250,0.9), rgba(99,102,241,0.35), transparent)",
                          opacity: isPredicted ? 1 : 0.35,
                        },
                      }}
                    >
                      <CardContent sx={{ p: { xs: 2, md: 2.35 } }}>
                        <Stack spacing={1.7}>
                          <Stack
                            direction="row"
                            spacing={1.2}
                            sx={{
                              alignItems: "flex-start",
                              justifyContent: "space-between",
                            }}
                          >
                            <Stack
                              direction="row"
                              spacing={1.2}
                              sx={{ alignItems: "center", minWidth: 0 }}
                            >
                              <Box sx={iconTile}>{cluster.icon}</Box>

                              <Box sx={{ minWidth: 0 }}>
                                <Typography
                                  variant="caption"
                                  color="text.secondary"
                                  sx={{ fontWeight: 800 }}
                                >
                                  CLUSTER {cluster.id}
                                </Typography>

                                <Typography
                                  variant="h6"
                                  sx={{
                                    fontWeight: 820,
                                    fontSize: "1.05rem",
                                    mt: 0.15,
                                  }}
                                >
                                  {cluster.title}
                                </Typography>
                              </Box>
                            </Stack>

                            {isPredicted && (
                              <Chip
                                label="Current"
                                size="small"
                                color="primary"
                                variant="outlined"
                              />
                            )}
                          </Stack>

                          <Chip
                            label={cluster.tone}
                            size="small"
                            variant="outlined"
                            sx={{
                              alignSelf: "flex-start",
                              borderColor: "rgba(148,163,184,0.18)",
                            }}
                          />

                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ lineHeight: 1.58 }}
                          >
                            {cluster.description}
                          </Typography>

                          <Box
                            sx={{
                              display: "grid",
                              gridTemplateColumns: {
                                xs: "1fr 1fr",
                                sm: "1fr 1fr",
                              },
                              gap: 0.75,
                            }}
                          >
                            {cluster.metrics.map((metric) => (
                              <Box
                                key={metric}
                                sx={{
                                  px: 1,
                                  py: 0.85,
                                  borderRadius: 1.8,
                                  border: 1,
                                  borderColor: "rgba(148,163,184,0.11)",
                                  background:
                                    "rgba(15,23,42,0.28)",
                                }}
                              >
                                <Typography
                                  variant="caption"
                                  color="text.secondary"
                                  sx={{ fontSize: "0.69rem" }}
                                >
                                  {metric}
                                </Typography>
                              </Box>
                            ))}
                          </Box>

                          <Box
                            sx={{
                              mt: 0.2,
                              pt: 1.25,
                              borderTop: 1,
                              borderColor: "rgba(148,163,184,0.11)",
                            }}
                          >
                            <Typography
                              variant="caption"
                              color="primary"
                              sx={{ fontWeight: 800 }}
                            >
                              WHAT IT REPRESENTS
                            </Typography>

                            <Typography
                              variant="body2"
                              color="text.secondary"
                              sx={{ mt: 0.35, lineHeight: 1.55 }}
                            >
                              {cluster.insight}
                            </Typography>
                          </Box>
                        </Stack>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default CustomerSegmentationPage;
