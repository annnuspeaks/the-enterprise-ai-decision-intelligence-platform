import {
  Activity,
  ArrowRight,
  BarChart3,
  Brain,
  Gauge,
  Network,
  Radar,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
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
import type { Theme } from "@mui/material/styles";

import { Link } from "react-router-dom";

import featuresIllustration from "../assets/features-decision-intelligence.png";

const nexoraTypographySx = {
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
  "& .MuiTypography-overline, & .MuiTypography-caption": {
    fontFamily:
      '"JetBrains Mono", "Cascadia Code", "SFMono-Regular", Consolas, monospace', 
    letterSpacing: "0.055em",
  },
};

const glassCardSx = {
  height: "100%",
  borderRadius: 3,
  border: 1,
  borderColor: (theme: Theme) =>
    theme.palette.mode === "dark"
      ? "rgba(148,163,184,0.15)"
      : "rgba(37,99,235,0.11)",
  background: (theme: Theme) =>
    theme.palette.mode === "dark"
      ? "linear-gradient(145deg, rgba(30,41,59,0.68), rgba(15,23,42,0.42) 55%, rgba(37,99,235,0.045))"
      : "linear-gradient(145deg, rgba(255,255,255,0.86), rgba(248,250,252,0.62) 55%, rgba(239,246,255,0.72))",
  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)",
  boxShadow: (theme: Theme) =>
    theme.palette.mode === "dark"
      ? "inset 0 1px 0 rgba(255,255,255,0.055), 0 16px 38px rgba(0,0,0,0.14)"
      : "inset 0 1px 0 rgba(255,255,255,0.9), 0 16px 38px rgba(15,23,42,0.065)",
  transition:
    "transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease",
  "&:hover": {
    transform: "translateY(-4px)",
    borderColor: "rgba(59,130,246,0.42)",
    boxShadow: (theme: Theme) =>
      theme.palette.mode === "dark"
        ? "inset 0 1px 0 rgba(255,255,255,0.08), 0 18px 42px rgba(0,0,0,0.20), 0 0 24px rgba(59,130,246,0.08)"
        : "inset 0 1px 0 rgba(255,255,255,0.95), 0 18px 42px rgba(15,23,42,0.09), 0 0 24px rgba(59,130,246,0.07)",
  },
  "@media (prefers-reduced-motion: reduce)": {
    transition: "none",
    "&:hover": { transform: "none" },
  },
};

const iconBoxSx = {
  width: 48,
  height: 48,
  display: "grid",
  placeItems: "center",
  flexShrink: 0,
  borderRadius: 2.5,
  border: 1,
  borderColor: "rgba(96,165,250,0.18)",
  color: "primary.main",
  background:
    "linear-gradient(145deg, rgba(59,130,246,0.12), rgba(99,102,241,0.035))",
  animation: "nexoraFeatureIcon 3.8s ease-in-out infinite",
  "@keyframes nexoraFeatureIcon": {
    "0%, 100%": { transform: "translateY(0) scale(1)" },
    "50%": {
      transform: "translateY(-2px) scale(1.035)",
      boxShadow: "0 0 20px rgba(59,130,246,0.13)",
    },
  },
  "@media (prefers-reduced-motion: reduce)": {
    animation: "none",
  },
};

const models = [
  {
    title: "Customer Segmentation",
    status: "Live",
    description: "Group customers by meaningful behavioral patterns.",
    Icon: Users,
  },
  {
    title: "Customer Churn Prediction",
    status: "Live",
    description: "Identify customers who may be at risk of leaving.",
    Icon: Activity,
  },
  {
    title: "Customer Lifetime Value",
    status: "Coming Soon",
    description: "Estimate the long-term value of each customer.",
    Icon: TrendingUp,
  },
  {
    title: "Purchase Propensity",
    status: "Coming Soon",
    description: "Estimate the likelihood of a future purchase.",
    Icon: Target,
  },
  {
    title: "Anomaly Detection",
    status: "Coming Soon",
    description: "Surface unusual patterns and customer activity.",
    Icon: Radar,
  },
  {
    title: "Sales & Demand Forecasting",
    status: "Coming Soon",
    description: "Forecast demand and future sales trends.",
    Icon: BarChart3,
  },
  {
    title: "Recommendation System",
    status: "Coming Soon",
    description: "Generate relevant product and customer recommendations.",
    Icon: Brain,
  },
  {
    title: "Dynamic Risk Scoring",
    status: "Coming Soon",
    description: "Combine signals into dynamic business risk scores.",
    Icon: Gauge,
  },
];

function FeaturesPage() {
  return (
    <Box
      component="main"
      sx={{
        ...nexoraTypographySx,
        "& .MuiButton-root": { fontWeight: 750 },
        "& .MuiChip-root": { fontWeight: 650 },
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Stack spacing={{ xs: 4, md: 5.5 }} sx={{ py: { xs: 3, md: 4.5 } }}>
          {/* Features hero */}
          <Box
            component="section"
            sx={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 4,
              px: { xs: 2.5, sm: 4, md: 5.5 },
              py: { xs: 3, sm: 3.5, md: 4 },
              border: 1,
              borderColor: (theme) =>
                theme.palette.mode === "dark"
                  ? "rgba(148,163,184,0.16)"
                  : "rgba(37,99,235,0.12)",
              background:
                "linear-gradient(135deg, rgba(15,23,42,0.58), rgba(30,41,59,0.22) 52%, rgba(37,99,235,0.07))",
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.045), 0 24px 70px rgba(2,6,23,0.18)",
              isolation: "isolate",
              "&::before": {
                content: '""',
                position: "absolute",
                width: 360,
                height: 360,
                left: "47%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(59,130,246,0.11), rgba(99,102,241,0.035) 40%, transparent 72%)",
                filter: "blur(8px)",
                animation: "featuresHeroAmbient 7s ease-in-out infinite",
                pointerEvents: "none",
              },
              "&::after": {
                content: '""',
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "linear-gradient(rgba(96,165,250,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.03) 1px, transparent 1px)",
                backgroundSize: "42px 42px",
                maskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,0.48), transparent 78%)",
                pointerEvents: "none",
                zIndex: -1,
              },
              "@keyframes featuresHeroAmbient": {
                "0%, 100%": {
                  transform: "translate(-50%, -50%) scale(0.92)",
                  opacity: 0.55,
                },
                "50%": {
                  transform: "translate(-50%, -50%) scale(1.08)",
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
                  spacing={1.8}
                  sx={{
                    alignItems: { xs: "center", md: "flex-start" },
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  <Typography
                    variant="overline"
                    color="primary"
                    sx={{ fontWeight: 800, fontSize: "0.68rem" }}
                  >
                    NEXORA / CAPABILITIES
                  </Typography>

                  <Typography
                    variant="h1"
                    component="h1"
                    sx={{
                      fontWeight: 850,
                      letterSpacing: "-0.045em",
                      fontSize: {
                        xs: "2.35rem",
                        sm: "3.05rem",
                        md: "3.65rem",
                      },
                      lineHeight: 1.03,
                      background:
                        "linear-gradient(100deg, #f8fafc 0%, #dbeafe 24%, #60a5fa 54%, #a78bfa 78%, #f8fafc 100%)",
                      backgroundSize: "220% auto",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      color: "transparent",
                      animation: "featuresTitleGradient 7s ease-in-out infinite",
                      textShadow: "0 0 34px rgba(96,165,250,0.08)",
                      "@keyframes featuresTitleGradient": {
                        "0%, 100%": { backgroundPosition: "0% 50%" },
                        "50%": { backgroundPosition: "100% 50%" },
                      },
                      "@media (prefers-reduced-motion: reduce)": {
                        animation: "none",
                      },
                    }}
                  >
                    Nexora Features
                  </Typography>

                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      maxWidth: 570,
                      fontSize: { xs: "0.96rem", sm: "1rem" },
                      lineHeight: 1.65,
                    }}
                  >
                    Eight specialized models turning business signals into
                    actionable decision intelligence.
                  </Typography>

                  <Stack
                    direction="row"
                    spacing={0.8}
                    sx={{
                      pt: 0.4,
                      flexWrap: "wrap",
                      justifyContent: { xs: "center", md: "flex-start" },
                    }}
                  >
                    <Chip
                      icon={<Zap size={14} />}
                      label="2 Live Models"
                      size="small"
                      variant="outlined"
                      color="primary"
                    />
                    <Chip
                      icon={<Network size={14} />}
                      label="8 Model Architecture"
                      size="small"
                      variant="outlined"
                    />
                  </Stack>
                </Stack>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Card
                  elevation={0}
                  sx={{
                    width: "100%",
                    maxWidth: 520,
                    mx: "auto",
                    borderRadius: 4,
                    overflow: "hidden",
                    border: 1,
                    borderColor: (theme) =>
                      theme.palette.mode === "dark"
                        ? "rgba(148,163,184,0.18)"
                        : "rgba(37,99,235,0.13)",
                    background: (theme) =>
                      theme.palette.mode === "dark"
                        ? "rgba(17,24,39,0.82)"
                        : "rgba(255,255,255,0.78)",
                    backdropFilter: "blur(18px)",
                    WebkitBackdropFilter: "blur(18px)",
                    boxShadow: (theme: Theme) =>
                      theme.palette.mode === "dark"
                        ? "inset 0 1px 0 rgba(255,255,255,0.07), 0 24px 55px rgba(0,0,0,0.25), 0 0 32px rgba(59,130,246,0.08)"
                        : "inset 0 1px 0 rgba(255,255,255,0.9), 0 24px 55px rgba(15,23,42,0.12), 0 0 32px rgba(59,130,246,0.07)",
                    animation:
                      "featuresIllustrationFloat 6s ease-in-out infinite, featuresIllustrationGlow 5s ease-in-out infinite",
                    "@keyframes featuresIllustrationFloat": {
                      "0%, 100%": { transform: "translateY(0)" },
                      "50%": { transform: "translateY(-5px)" },
                    },
                    "@keyframes featuresIllustrationGlow": {
                      "0%, 100%": {
                        boxShadow:
                          "inset 0 1px 0 rgba(255,255,255,0.07), 0 24px 55px rgba(0,0,0,0.22), 0 0 18px rgba(59,130,246,0.03)",
                      },
                      "50%": {
                        boxShadow:
                          "inset 0 1px 0 rgba(255,255,255,0.09), 0 26px 58px rgba(0,0,0,0.26), 0 0 30px rgba(59,130,246,0.12)",
                      },
                    },
                    "&:hover": {
                      transform: "translateY(-7px) scale(1.01)",
                    },
                    "@media (prefers-reduced-motion: reduce)": {
                      animation: "none",
                      "&:hover": { transform: "none" },
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      minHeight: { xs: 270, sm: 330, md: 390 },
                      p: { xs: 1.5, sm: 2.5, md: 3 },
                      overflow: "hidden",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        width: 220,
                        height: 220,
                        borderRadius: "50%",
                        background:
                          "radial-gradient(circle, rgba(59,130,246,0.12), transparent 68%)",
                        animation: "featuresImageAura 5s ease-in-out infinite",
                      },
                      "@keyframes featuresImageAura": {
                        "0%, 100%": { transform: "scale(0.88)", opacity: 0.45 },
                        "50%": { transform: "scale(1.08)", opacity: 0.85 },
                      },
                      "@media (prefers-reduced-motion: reduce)": {
                        "&::before": { animation: "none" },
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={featuresIllustration}
                      alt="Flat vector illustration representing digital product and platform capabilities"
                      sx={{
                        position: "relative",
                        zIndex: 1,
                        width: "100%",
                        maxWidth: 455,
                        height: "auto",
                        maxHeight: { xs: 275, sm: 335, md: 375 },
                        objectFit: "contain",
                        display: "block",
                        filter:
                          "drop-shadow(0 18px 28px rgba(15,23,42,0.20))",
                        transition:
                          "transform 260ms ease, filter 260ms ease",
                        "&:hover": {
                          transform: "scale(1.025)",
                          filter:
                            "drop-shadow(0 22px 34px rgba(15,23,42,0.26))",
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
                        left: { xs: 14, sm: 18 },
                        bottom: { xs: 11, sm: 15 },
                        zIndex: 2,
                        fontWeight: 800,
                        color: "text.secondary",
                        letterSpacing: "0.06em",
                      }}
                    >
                      DECISION INTELLIGENCE CAPABILITIES
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            </Grid>
          </Box>

          {/* Model capability grid */}
          <Box component="section">
            <Stack spacing={2.5}>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={1.5}
                sx={{
                  alignItems: { sm: "flex-end" },
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography
                    variant="overline"
                    color="primary"
                    sx={{ fontWeight: 800 }}
                  >
                    NEXORA / MODELS
                  </Typography>
                  <Typography
                    variant="h3"
                    component="h2"
                    sx={{
                      mt: 0.35,
                      fontWeight: 820,
                      fontSize: { xs: "1.9rem", sm: "2.25rem", md: "2.55rem" },
                    }}
                  >
                    Eight models. One platform.
                  </Typography>
                </Box>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ maxWidth: 390, lineHeight: 1.6 }}
                >
                  Live and upcoming capabilities, clearly separated.
                </Typography>
              </Stack>

              <Grid container spacing={2}>
                {models.map((model, index) => {
                  const Icon = model.Icon;

                  return (
                    <Grid key={model.title} size={{ xs: 12, sm: 6, lg: 3 }}>
                      <Card
                        elevation={0}
                        sx={{
                          ...glassCardSx,
                          animation:
                            "featureCardReveal 600ms cubic-bezier(0.22,1,0.36,1) both",
                          animationDelay: `${index * 70}ms`,
                          "@keyframes featureCardReveal": {
                            from: {
                              opacity: 0,
                              transform: "translateY(14px)",
                            },
                            to: {
                              opacity: 1,
                              transform: "translateY(0)",
                            },
                          },
                          "@media (prefers-reduced-motion: reduce)": {
                            animation: "none",
                          },
                        }}
                      >
                        <CardContent
                          sx={{
                            p: { xs: 2.1, md: 2.35 },
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <Stack
                            direction="row"
                            spacing={1.2}
                            sx={{
                              alignItems: "flex-start",
                              justifyContent: "space-between",
                            }}
                          >
                            <Box
                              sx={{
                                ...iconBoxSx,
                                width: 44,
                                height: 44,
                                animationDelay: `${index * 0.12}s`,
                              }}
                            >
                              <Icon size={21} strokeWidth={2} />
                            </Box>

                            <Chip
                              label={model.status === "Live" ? "LIVE" : "SOON"}
                              size="small"
                              variant="outlined"
                              color={
                                model.status === "Live" ? "success" : "default"
                              }
                              sx={{
                                height: 24,
                                fontSize: "0.62rem",
                                fontWeight: 800,
                                letterSpacing: "0.045em",
                              }}
                            />
                          </Stack>

                          <Typography
                            variant="h6"
                            component="h3"
                            sx={{
                              mt: 1.8,
                              fontWeight: 800,
                              fontSize: { xs: "1.02rem", md: "1.06rem" },
                              lineHeight: 1.25,
                            }}
                          >
                            {model.title}
                          </Typography>

                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{
                              mt: 0.75,
                              lineHeight: 1.55,
                              flexGrow: 1,
                              fontSize: "0.84rem",
                            }}
                          >
                            {model.description}
                          </Typography>

                          <Box
                            sx={{
                              mt: 1.6,
                              height: 3,
                              borderRadius: 99,
                              overflow: "hidden",
                              background:
                                "linear-gradient(90deg, rgba(59,130,246,0.08), rgba(99,102,241,0.16))",
                              "&::after": {
                                content: '""',
                                display: "block",
                                width: model.status === "Live" ? "72%" : "28%",
                                height: "100%",
                                borderRadius: 99,
                                background:
                                  model.status === "Live"
                                    ? "linear-gradient(90deg, #22c55e, #60a5fa)"
                                    : "linear-gradient(90deg, #60a5fa, #6366f1)",
                                animation:
                                  "featureProgressPulse 3.4s ease-in-out infinite",
                              },
                              "@keyframes featureProgressPulse": {
                                "0%, 100%": { opacity: 0.55 },
                                "50%": { opacity: 1 },
                              },
                              "@media (prefers-reduced-motion: reduce)": {
                                "&::after": { animation: "none" },
                              },
                            }}
                          />
                        </CardContent>
                      </Card>
                    </Grid>
                  );
                })}
              </Grid>
            </Stack>
          </Box>

          {/* CTA */}
          <Card
            elevation={0}
            sx={{
              ...glassCardSx,
              overflow: "hidden",
              position: "relative",
              "&::before": {
                content: '""',
                position: "absolute",
                width: 280,
                height: 280,
                right: "-7%",
                top: "50%",
                transform: "translateY(-50%)",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(59,130,246,0.13), transparent 68%)",
                pointerEvents: "none",
              },
            }}
          >
            <CardContent sx={{ p: { xs: 2.5, md: 3.2 } }}>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2.5}
                sx={{
                  position: "relative",
                  zIndex: 1,
                  alignItems: { sm: "center" },
                  justifyContent: "space-between",
                }}
              >
                <Stack
                  direction="row"
                  spacing={1.5}
                  sx={{ alignItems: "center" }}
                >
                  <Box
                    sx={{
                      ...iconBoxSx,
                      width: 44,
                      height: 44,
                      animationDelay: "0.15s",
                    }}
                  >
                    <Sparkles size={21} />
                  </Box>

                  <Box>
                    <Typography
                      variant="h5"
                      component="h2"
                      sx={{
                        fontWeight: 820,
                        fontSize: { xs: "1.35rem", sm: "1.55rem" },
                      }}
                    >
                      Explore the platform
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 0.35 }}
                    >
                      See the live decision intelligence workflow.
                    </Typography>
                  </Box>
                </Stack>

                <Button
                  component={Link}
                  to="/dashboard"
                  variant="contained"
                  endIcon={<ArrowRight size={18} strokeWidth={2} />}
                  sx={{
                    minHeight: 50,
                    px: 3,
                    width: { xs: "100%", sm: "auto" },
                    flexShrink: 0,
                    borderRadius: 2.5,
                    textTransform: "none",
                    fontWeight: 800,
                    background:
                      "linear-gradient(135deg, #2563eb 0%, #3b82f6 55%, #6366f1 100%)",
                    boxShadow:
                      "0 10px 28px rgba(37,99,235,0.24), inset 0 1px 0 rgba(255,255,255,0.22)",
                    transition:
                      "transform 180ms ease, box-shadow 180ms ease, filter 180ms ease",
                    "&:hover": {
                      background:
                        "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)",
                      transform: "translateY(-2px)",
                      filter: "brightness(1.05)",
                      boxShadow:
                        "0 14px 34px rgba(37,99,235,0.34), 0 0 22px rgba(99,102,241,0.18), inset 0 1px 0 rgba(255,255,255,0.24)",
                    },
                    "& .MuiButton-endIcon": {
                      transition: "transform 180ms ease",
                    },
                    "&:hover .MuiButton-endIcon": {
                      transform: "translateX(4px)",
                    },
                    "@media (prefers-reduced-motion: reduce)": {
                      transition: "none",
                      "& .MuiButton-endIcon": { transition: "none" },
                    },
                  }}
                >
                  Open Dashboard
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Container>
    </Box>
  );
}

export default FeaturesPage;
