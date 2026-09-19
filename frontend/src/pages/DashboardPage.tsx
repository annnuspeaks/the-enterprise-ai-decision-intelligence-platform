import {
  Activity,
  ArrowRight,
  Brain,
  CheckCircle2,
  Gauge,
  Layers3,
  Sparkles,
} from "lucide-react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";
import type { Theme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { MODEL_REGISTRY } from "../config/modelRegistry";
import dashboardIllustration from "../assets/dashboard-analytics.png";

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
  "& .MuiTypography-overline, & .MuiTypography-caption": {
    fontFamily:
      '"JetBrains Mono", "Cascadia Code", "SFMono-Regular", Consolas, monospace',
    letterSpacing: "0.055em",
  },
};

const heroGlassCard = {
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

const glassCard = {
  borderRadius: 3.5,
  border: 1,
  borderColor: (theme: Theme) =>
    theme.palette.mode === "dark"
      ? "rgba(148,163,184,0.15)"
      : "rgba(15,23,42,0.10)",
  background: (theme: Theme) =>
    theme.palette.mode === "dark"
      ? "linear-gradient(145deg, rgba(30,41,59,0.68), rgba(15,23,42,0.48) 58%, rgba(37,99,235,0.055))"
      : "linear-gradient(145deg, rgba(255,255,255,0.94), rgba(248,250,252,0.84) 58%, rgba(239,246,255,0.72))",
  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)",
  boxShadow: (theme: Theme) =>
    theme.palette.mode === "dark"
      ? "inset 0 1px 0 rgba(255,255,255,0.055), 0 16px 38px rgba(0,0,0,0.16)"
      : "inset 0 1px 0 rgba(255,255,255,0.92), 0 10px 28px rgba(15,23,42,0.085), 0 2px 7px rgba(15,23,42,0.035)",
  transition:
    "transform 200ms cubic-bezier(0.22,1,0.36,1), border-color 200ms ease, box-shadow 200ms ease",
  "&:hover": {
    transform: "translateY(-3px)",
    borderColor: "rgba(59,130,246,0.28)",
    boxShadow: (theme: Theme) =>
      theme.palette.mode === "dark"
        ? "inset 0 1px 0 rgba(255,255,255,0.08), 0 20px 44px rgba(0,0,0,0.22), 0 0 24px rgba(59,130,246,0.08)"
        : "inset 0 1px 0 rgba(255,255,255,0.96), 0 16px 34px rgba(15,23,42,0.12), 0 0 22px rgba(59,130,246,0.055)",
  },
  "@media (prefers-reduced-motion: reduce)": {
    transition: "none",
    "&:hover": { transform: "none" },
  },
};;

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

function DashboardPage() {
  const models = MODEL_REGISTRY;

  const liveModels = models.filter(
    (model) => model.status === "available",
  ).length;

  const modelsInDevelopment = models.length - liveModels;
  const predictionReadiness =
    models.length > 0 ? (liveModels / models.length) * 100 : 0;

  return (
    <Box
      component="main"
      sx={{
        ...pageTypography,
        overflow: "hidden",
        "& .MuiButton-root": { fontWeight: 800 },
        "& .MuiChip-root": { fontWeight: 700 },
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Stack spacing={{ xs: 4, md: 5 }} sx={{ py: { xs: 2.5, md: 4 } }}>
          {/* Dashboard hero */}
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
                "linear-gradient(135deg, rgba(15,23,42,0.64), rgba(30,41,59,0.24) 55%, rgba(37,99,235,0.07))",
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.045), 0 24px 70px rgba(2,6,23,0.18)",
              isolation: "isolate",
              "&::before": {
                content: '""',
                position: "absolute",
                width: 430,
                height: 430,
                right: "22%",
                top: "50%",
                transform: "translate(50%, -50%)",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(59,130,246,0.12), rgba(99,102,241,0.035) 42%, transparent 72%)",
                filter: "blur(8px)",
                animation: "dashboardAmbient 7s ease-in-out infinite",
                pointerEvents: "none",
              },
              "@keyframes dashboardAmbient": {
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
                  spacing={1.55}
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
                    NEXORA / COMMAND CENTER
                  </Typography>

                  <Typography
                    variant="h1"
                    component="h1"
                    sx={{
                      fontWeight: 850,
                      letterSpacing: "-0.045em",
                      fontSize: {
                        xs: "2.3rem",
                        sm: "3rem",
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
                      animation:
                        "dashboardTitleGradient 7s ease-in-out infinite",
                      "@keyframes dashboardTitleGradient": {
                        "0%, 100%": { backgroundPosition: "0% 50%" },
                        "50%": { backgroundPosition: "100% 50%" },
                      },
                      "@media (prefers-reduced-motion: reduce)": {
                        animation: "none",
                      },
                    }}
                  >
                    Nexora Dashboard
                  </Typography>

                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      maxWidth: 570,
                      fontSize: { xs: "0.95rem", sm: "1rem" },
                      lineHeight: 1.62,
                    }}
                  >
                    One command view for Nexora's AI and Machine Learning
                    decision models.
                  </Typography>

                  <Stack
                    direction="row"
                    spacing={0.8}
                    sx={{
                      flexWrap: "wrap",
                      justifyContent: { xs: "center", md: "flex-start" },
                      pt: 0.3,
                    }}
                  >
                    <Chip
                      icon={<Layers3 size={14} />}
                      label={`${models.length} Models`}
                      size="small"
                      variant="outlined"
                      color="primary"
                    />
                    <Chip
                      icon={<CheckCircle2 size={14} />}
                      label={`${liveModels} Live`}
                      size="small"
                      variant="outlined"
                      color="success"
                    />
                    <Chip
                      icon={<Gauge size={14} />}
                      label={`${Math.round(predictionReadiness)}% Ready`}
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
                    ...heroGlassCard,
                    maxWidth: 530,
                    mx: "auto",
                    overflow: "hidden",
                    animation:
                      "dashboardIllustrationFloat 6s ease-in-out infinite, dashboardIllustrationGlow 5s ease-in-out infinite",
                    "@keyframes dashboardIllustrationFloat": {
                      "0%, 100%": { transform: "translateY(0)" },
                      "50%": { transform: "translateY(-6px)" },
                    },
                    "@keyframes dashboardIllustrationGlow": {
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
                          "dashboardImageAura 5s ease-in-out infinite",
                      },
                      "@keyframes dashboardImageAura": {
                        "0%, 100%": {
                          transform: "scale(0.88)",
                          opacity: 0.42,
                        },
                        "50%": {
                          transform: "scale(1.08)",
                          opacity: 0.85,
                        },
                      },
                      "@media (prefers-reduced-motion: reduce)": {
                        "&::before": { animation: "none" },
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={dashboardIllustration}
                      alt="Flat vector illustration of analytics dashboard design"
                      sx={{
                        position: "relative",
                        zIndex: 1,
                        width: "100%",
                        maxWidth: 480,
                        maxHeight: { xs: 255, sm: 310, md: 350 },
                        objectFit: "contain",
                        display: "block",
                        filter:
                          "drop-shadow(0 18px 28px rgba(15,23,42,0.25))",
                        transition:
                          "transform 260ms ease, filter 260ms ease",
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
                        letterSpacing: "0.06em",
                      }}
                    >
                      DECISION INTELLIGENCE CONTROL
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            </Grid>
          </Box>

          {/* KPI strip */}
          <Grid container spacing={2}>
            {[
              {
                label: "AI Models",
                value: models.length,
                detail: "Locked architecture",
                Icon: Brain,
              },
              {
                label: "Live Models",
                value: liveModels,
                detail: "Currently available",
                Icon: Activity,
              },
              {
                label: "Platform Status",
                value: "Active",
                detail: "Capabilities expanding",
                Icon: Sparkles,
              },
            ].map(({ label, value, detail, Icon }, index) => (
              <Grid key={label} size={{ xs: 12, sm: 4 }}>
                <Card
                  elevation={0}
                  sx={{
                    ...glassCard,
                    animation:
                      "dashboardKpiReveal 550ms cubic-bezier(0.22,1,0.36,1) both",
                    animationDelay: `${index * 80}ms`,
                    "@keyframes dashboardKpiReveal": {
                      from: { opacity: 0, transform: "translateY(12px)" },
                      to: { opacity: 1, transform: "translateY(0)" },
                    },
                    "@media (prefers-reduced-motion: reduce)": {
                      animation: "none",
                    },
                  }}
                >
                  <CardContent sx={{ p: { xs: 2, md: 2.35 } }}>
                    <Stack
                      direction="row"
                      spacing={1.4}
                      sx={{ alignItems: "center" }}
                    >
                      <Box sx={iconTile}>
                        <Icon size={21} strokeWidth={2} />
                      </Box>
                      <Box sx={{ minWidth: 0 }}>
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          sx={{ fontWeight: 800 }}
                        >
                          {label}
                        </Typography>
                        <Typography
                          variant="h4"
                          sx={{
                            mt: 0.15,
                            fontWeight: 850,
                            lineHeight: 1,
                          }}
                        >
                          {value}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ mt: 0.55 }}
                        >
                          {detail}
                        </Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Prediction readiness */}
          <Card elevation={0} sx={glassCard}>
            <CardContent sx={{ p: { xs: 2.3, md: 3 } }}>
              <Stack spacing={2.4}>
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
                      PREDICTION SUMMARY
                    </Typography>
                    <Typography
                      variant="h4"
                      component="h2"
                      sx={{
                        mt: 0.25,
                        fontWeight: 850,
                        fontSize: { xs: "1.65rem", sm: "2rem" },
                      }}
                    >
                      Prediction readiness
                    </Typography>
                  </Box>

                  <Chip
                    label={`${Math.round(predictionReadiness)}% Ready`}
                    color="success"
                    variant="outlined"
                    size="small"
                  />
                </Stack>

                <Stack spacing={1.1}>
                  <Stack
                    direction="row"
                    sx={{
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 750 }}>
                      Platform readiness
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {liveModels} / {models.length}
                    </Typography>
                  </Stack>

                  <LinearProgress
                    variant="determinate"
                    value={predictionReadiness}
                    sx={{
                      height: 8,
                      borderRadius: 999,
                      backgroundColor: "rgba(96,165,250,0.08)",
                      "& .MuiLinearProgress-bar": {
                        borderRadius: 999,
                        background:
                          "linear-gradient(90deg, #2563eb, #60a5fa, #6366f1)",
                      },
                    }}
                  />
                </Stack>

                <Grid container spacing={1.5}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Box
                      sx={{
                        p: 1.8,
                        borderRadius: 2.5,
                        border: 1,
                        borderColor: "rgba(96,165,250,0.13)",
                        background:
                          "linear-gradient(135deg, rgba(59,130,246,0.07), rgba(99,102,241,0.025))",
                      }}
                    >
                      <Typography
                        variant="h5"
                        sx={{ fontWeight: 850, color: "primary.main" }}
                      >
                        {liveModels}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Prediction-ready models
                      </Typography>
                    </Box>
                  </Grid>

                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Box
                      sx={{
                        p: 1.8,
                        borderRadius: 2.5,
                        border: 1,
                        borderColor: "rgba(148,163,184,0.12)",
                        background: "rgba(255,255,255,0.018)",
                      }}
                    >
                      <Typography
                        variant="h5"
                        sx={{ fontWeight: 850 }}
                      >
                        {modelsInDevelopment}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Models in development
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Stack>
            </CardContent>
          </Card>

          {/* Model explorer */}
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
                  MODEL EXPLORER
                </Typography>
                <Typography
                  variant="h4"
                  component="h2"
                  sx={{
                    mt: 0.3,
                    fontWeight: 850,
                    fontSize: { xs: "1.65rem", sm: "2.1rem" },
                  }}
                >
                  AI & Machine Learning Models
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 0.35 }}
                >
                  Eight specialized models under one platform.
                </Typography>
              </Box>

              <Chip
                label={`${liveModels} Live`}
                color="success"
                variant="outlined"
                size="small"
              />
            </Stack>

            <Grid container spacing={2}>
              {models.map((model, index) => {
                const available =
                  model.status === "available" && Boolean(model.route);

                return (
                  <Grid key={model.key} size={{ xs: 12, sm: 6, lg: 3 }}>
                    <Card
                      elevation={0}
                      sx={{
                        ...glassCard,
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        animation:
                          "dashboardModelReveal 600ms cubic-bezier(0.22,1,0.36,1) both",
                        animationDelay: `${index * 65}ms`,
                        "@keyframes dashboardModelReveal": {
                          from: { opacity: 0, transform: "translateY(14px)" },
                          to: { opacity: 1, transform: "translateY(0)" },
                        },
                        "@media (prefers-reduced-motion: reduce)": {
                          animation: "none",
                        },
                      }}
                    >
                      <CardContent
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          flexGrow: 1,
                          gap: 1.3,
                          p: { xs: 2, sm: 2.25 },
                        }}
                      >
                        <Stack
                          direction="row"
                          spacing={1.2}
                          sx={{
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <Box
                            sx={{
                              ...iconTile,
                              width: 44,
                              height: 44,
                              animation:
                                "dashboardModelIcon 3.8s ease-in-out infinite",
                              animationDelay: `${index * 0.12}s`,
                              "@keyframes dashboardModelIcon": {
                                "0%, 100%": { transform: "translateY(0)" },
                                "50%": {
                                  transform: "translateY(-2px) scale(1.035)",
                                  boxShadow:
                                    "0 0 20px rgba(59,130,246,0.13)",
                                },
                              },
                              "@media (prefers-reduced-motion: reduce)": {
                                animation: "none",
                              },
                            }}
                          >
                            <model.icon size={22} strokeWidth={2} />
                          </Box>

                          <Chip
                            label={
                              model.status === "available"
                                ? "Live"
                                : model.status === "deferred"
                                  ? "Deferred"
                                  : "Soon"
                            }
                            size="small"
                            color={available ? "success" : "default"}
                            variant="outlined"
                          />
                        </Stack>

                        <Typography
                          variant="h6"
                          component="h3"
                          sx={{
                            fontWeight: 820,
                            fontSize: { xs: "1rem", sm: "1.06rem" },
                            lineHeight: 1.3,
                          }}
                        >
                          {model.name}
                        </Typography>

                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            lineHeight: 1.55,
                            flexGrow: 1,
                            fontSize: { xs: "0.82rem", sm: "0.875rem" },
                          }}
                        >
                          {model.description}
                        </Typography>

                        {available && model.route ? (
                          <Button
                            component={Link}
                            to={model.route}
                            variant="contained"
                            endIcon={<ArrowRight size={17} strokeWidth={2} />}
                            sx={{
                              alignSelf: "flex-start",
                              mt: 0.6,
                              minHeight: 42,
                              px: 2,
                              borderRadius: 2.2,
                              textTransform: "none",
                              background:
                                "linear-gradient(135deg, #2563eb 0%, #3b82f6 55%, #6366f1 100%)",
                              boxShadow:
                                "0 8px 22px rgba(37,99,235,0.2), inset 0 1px 0 rgba(255,255,255,0.2)",
                              transition:
                                "transform 180ms ease, box-shadow 180ms ease",
                              "&:hover": {
                                background:
                                  "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)",
                                transform: "translateY(-2px)",
                                boxShadow:
                                  "0 12px 28px rgba(37,99,235,0.3), 0 0 20px rgba(99,102,241,0.14)",
                              },
                              "& .MuiButton-endIcon": {
                                transition: "transform 180ms ease",
                              },
                              "&:hover .MuiButton-endIcon": {
                                transform: "translateX(3px)",
                              },
                            }}
                          >
                            Open Model
                          </Button>
                        ) : (
                          <Typography
                            variant="caption"
                            color="text.secondary"
                            sx={{ mt: 0.6 }}
                          >
                            Coming through the development pipeline.
                          </Typography>
                        )}
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Stack>

          {/* Compact footer note */}
          <Card elevation={0} sx={glassCard}>
            <CardContent sx={{ p: { xs: 2, md: 2.4 } }}>
              <Stack
                direction="row"
                spacing={1.3}
                sx={{ alignItems: "center" }}
              >
                <Box sx={{ ...iconTile, width: 42, height: 42 }}>
                  <Brain size={20} />
                </Box>
                <Typography variant="body2" color="text.secondary">
                  Nexora's eight-model architecture becomes live as each
                  individual capability reaches production readiness.
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Container>
    </Box>
  );
}

export default DashboardPage;
