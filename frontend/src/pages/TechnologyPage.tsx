import {
  ArrowRight,
  Boxes,
  BrainCircuit,
  Code2,
  Database,
  Layers3,
  Network,
  Server,
  Sparkles,
  TerminalSquare,
  Workflow,
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

import technologyIllustration from "../assets/technology-global-platform.png";

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
  animation: "nexoraTechnologyIcon 3.8s ease-in-out infinite",
  "@keyframes nexoraTechnologyIcon": {
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

const technologies = [
  { name: "Python", category: "AI & Machine Learning", Icon: BrainCircuit },
  { name: "Scikit-learn", category: "Model Development", Icon: Workflow },
  { name: "Pandas", category: "Data Processing", Icon: Database },
  { name: "NumPy", category: "Numerical Computing", Icon: Boxes },
  { name: "FastAPI", category: "Backend API", Icon: Server },
  { name: "React", category: "Frontend Application", Icon: Code2 },
  { name: "Material UI", category: "Interface System", Icon: Layers3 },
  { name: "Vite", category: "Frontend Tooling", Icon: TerminalSquare },
];

function TechnologyPage() {
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
          {/* Technology hero */}
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
                animation: "technologyHeroAmbient 7s ease-in-out infinite",
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
              "@keyframes technologyHeroAmbient": {
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
                    NEXORA / TECHNOLOGY
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
                      animation:
                        "technologyTitleGradient 7s ease-in-out infinite",
                      textShadow: "0 0 34px rgba(96,165,250,0.08)",
                      "@keyframes technologyTitleGradient": {
                        "0%, 100%": { backgroundPosition: "0% 50%" },
                        "50%": { backgroundPosition: "100% 50%" },
                      },
                      "@media (prefers-reduced-motion: reduce)": {
                        animation: "none",
                      },
                    }}
                  >
                    Technology Stack
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
                    The core technologies powering Nexora's AI, backend,
                    frontend, data processing, and machine learning workflows.
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
                      icon={<BrainCircuit size={14} />}
                      label="AI / ML"
                      size="small"
                      variant="outlined"
                      color="primary"
                    />
                    <Chip
                      icon={<Server size={14} />}
                      label="API"
                      size="small"
                      variant="outlined"
                    />
                    <Chip
                      icon={<Code2 size={14} />}
                      label="Frontend"
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
                      "technologyIllustrationFloat 6s ease-in-out infinite, technologyIllustrationGlow 5s ease-in-out infinite",
                    "@keyframes technologyIllustrationFloat": {
                      "0%, 100%": { transform: "translateY(0)" },
                      "50%": { transform: "translateY(-5px)" },
                    },
                    "@keyframes technologyIllustrationGlow": {
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
                        width: 230,
                        height: 230,
                        borderRadius: "50%",
                        background:
                          "radial-gradient(circle, rgba(59,130,246,0.12), transparent 68%)",
                        animation: "technologyImageAura 5s ease-in-out infinite",
                      },
                      "@keyframes technologyImageAura": {
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
                      src={technologyIllustration}
                      alt="Flat vector illustration representing global digital technology and communication"
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
                      NEXORA TECHNOLOGY LAYER
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            </Grid>
          </Box>

          {/* Technology grid */}
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
                    NEXORA / STACK
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
                    Built layer by layer.
                  </Typography>
                </Box>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ maxWidth: 390, lineHeight: 1.6 }}
                >
                  Eight technologies across the core platform stack.
                </Typography>
              </Stack>

              <Grid container spacing={2}>
                {technologies.map(({ name, category, Icon }, index) => (
                  <Grid key={name} size={{ xs: 12, sm: 6, lg: 3 }}>
                    <Card
                      elevation={0}
                      sx={{
                        ...glassCardSx,
                        animation:
                          "technologyCardReveal 600ms cubic-bezier(0.22,1,0.36,1) both",
                        animationDelay: `${index * 70}ms`,
                        "@keyframes technologyCardReveal": {
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
                      <CardContent sx={{ p: { xs: 2.1, md: 2.35 } }}>
                        <Box
                          sx={{
                            ...iconBoxSx,
                            animationDelay: `${index * 0.12}s`,
                          }}
                        >
                          <Icon size={21} strokeWidth={2} />
                        </Box>

                        <Typography
                          variant="h6"
                          component="h3"
                          sx={{
                            mt: 1.8,
                            fontWeight: 800,
                            fontSize: { xs: "1.03rem", md: "1.08rem" },
                          }}
                        >
                          {name}
                        </Typography>

                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ mt: 0.7, lineHeight: 1.55 }}
                        >
                          {category}
                        </Typography>

                        <Box
                          sx={{
                            mt: 1.5,
                            height: 3,
                            borderRadius: 99,
                            overflow: "hidden",
                            background:
                              "linear-gradient(90deg, rgba(59,130,246,0.08), rgba(99,102,241,0.16))",
                            "&::after": {
                              content: '""',
                              display: "block",
                              width: `${34 + ((index * 7) % 43)}%`,
                              height: "100%",
                              borderRadius: 99,
                              background:
                                "linear-gradient(90deg, #60a5fa, #6366f1)",
                              animation:
                                "technologyPulse 3.4s ease-in-out infinite",
                            },
                            "@keyframes technologyPulse": {
                              "0%, 100%": { opacity: 0.45 },
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
                ))}
              </Grid>
            </Stack>
          </Box>

          {/* Architecture */}
          <Card elevation={0} sx={glassCardSx}>
            <CardContent sx={{ p: { xs: 2.5, md: 3.5 } }}>
              <Grid
                container
                spacing={{ xs: 2.5, md: 4 }}
                sx={{ alignItems: "center" }}
              >
                <Grid size={{ xs: 12, md: 8 }}>
                  <Stack spacing={1}>
                    <Typography
                      variant="overline"
                      color="primary"
                      sx={{ fontWeight: 800 }}
                    >
                      PLATFORM ARCHITECTURE
                    </Typography>
                    <Typography
                      variant="h4"
                      component="h2"
                      sx={{
                        fontWeight: 820,
                        fontSize: {
                          xs: "1.65rem",
                          sm: "2rem",
                          md: "2.25rem",
                        },
                      }}
                    >
                      Frontend → API → ML
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ maxWidth: 850, lineHeight: 1.7 }}
                    >
                      React, TypeScript, Vite, and Material UI form the
                      frontend. FastAPI provides the API layer, while Python,
                      Pandas, NumPy, and Scikit-learn support data and ML
                      workflows.
                    </Typography>
                  </Stack>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2.5,
                      border: 1,
                      borderColor: "rgba(96,165,250,0.16)",
                      background:
                        "linear-gradient(135deg, rgba(59,130,246,0.065), rgba(99,102,241,0.025))",
                    }}
                  >
                    <Stack
                      direction="row"
                      spacing={1.2}
                      sx={{ alignItems: "center" }}
                    >
                      <Box sx={{ ...iconBoxSx, width: 44, height: 44 }}>
                        <Network size={21} />
                      </Box>
                      <Box>
                        <Typography
                          variant="subtitle2"
                          sx={{ fontWeight: 800 }}
                        >
                          Modular stack
                        </Typography>
                        <Typography
                          variant="caption"
                          color="text.secondary"
                        >
                          Connected platform layers
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

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
                      See the technology stack in action.
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

export default TechnologyPage;
