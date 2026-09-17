import {
  ArrowRight,
  BarChart3,
  Brain,
  Cpu,
  Database,
  Gauge,
  Network,
  Sparkles,
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

import { Link } from "react-router-dom";

import nexoraLogo from "../assets/nexora-logo.png";
import nexoraIcon from "../assets/nexora-icon.png";

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

const sectionRevealSx = {
  position: "relative",
  animation: "nexoraSectionReveal 700ms cubic-bezier(0.22, 1, 0.36, 1) both",
  "@keyframes nexoraSectionReveal": {
    from: { opacity: 0, transform: "translateY(22px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  },
  "@media (prefers-reduced-motion: reduce)": { animation: "none" },
};

function DecisionIntelligenceIllustration() {
  const nodes = [
    { x: 72, y: 42, icon: <Database size={16} />, label: "DATA" },
    { x: 42, y: 112, icon: <Workflow size={16} />, label: "FLOW" },
    { x: 102, y: 142, icon: <Cpu size={16} />, label: "MODEL" },
    { x: 230, y: 42, icon: <Network size={16} />, label: "SIGNALS" },
    { x: 260, y: 112, icon: <Gauge size={16} />, label: "RISK" },
    { x: 200, y: 142, icon: <BarChart3 size={16} />, label: "INSIGHT" },
  ];

  return (
    <Box
      aria-label="Nexora decision intelligence network illustration"
      role="img"
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: 430,
        mx: "auto",
        aspectRatio: "1.35 / 1",
        minHeight: { xs: 230, sm: 260 },
        borderRadius: 4,
        overflow: "hidden",
        border: 1,
        borderColor: (theme) =>
          theme.palette.mode === "dark"
            ? "rgba(96,165,250,0.18)"
            : "rgba(37,99,235,0.12)",
        background: (theme) =>
          theme.palette.mode === "dark"
            ? "linear-gradient(145deg, rgba(30,41,59,0.72), rgba(15,23,42,0.48))"
            : "linear-gradient(145deg, rgba(255,255,255,0.86), rgba(239,246,255,0.68))",
        boxShadow: (theme) =>
          theme.palette.mode === "dark"
            ? "inset 0 1px 0 rgba(255,255,255,0.06), 0 22px 48px rgba(0,0,0,0.18)"
            : "inset 0 1px 0 rgba(255,255,255,0.9), 0 22px 48px rgba(15,23,42,0.08)",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: "18% 12%",
          background:
            "radial-gradient(circle, rgba(99,102,241,0.16), transparent 62%)",
          animation: "nexoraAmbient 5s ease-in-out infinite",
        },
        "@keyframes nexoraAmbient": {
          "0%, 100%": { transform: "scale(0.94)", opacity: 0.55 },
          "50%": { transform: "scale(1.08)", opacity: 0.9 },
        },
        "@media (prefers-reduced-motion: reduce)": {
          "&::before": { animation: "none" },
        },
      }}
    >
      <Box
        component="svg"
        viewBox="0 0 300 184"
        preserveAspectRatio="xMidYMid meet"
        sx={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      >
        <defs>
          <linearGradient id="nexoraFlow" x1="0" x2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.15" />
            <stop offset="50%" stopColor="currentColor" stopOpacity="0.75" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        {[
          [72, 42, 150, 92],
          [42, 112, 150, 92],
          [102, 142, 150, 92],
          [230, 42, 150, 92],
          [260, 112, 150, 92],
          [200, 142, 150, 92],
        ].map(([x1, y1, x2, y2], index) => (
          <line
            key={`${x1}-${y1}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="url(#nexoraFlow)"
            strokeWidth="1.5"
            strokeDasharray="6 8"
            style={{
              animation: "nexoraDash 3.2s linear infinite",
              animationDelay: `${index * 0.22}s`,
            }}
          />
        ))}
        <circle cx="150" cy="92" r="31" fill="currentColor" opacity="0.08" />
        <circle cx="150" cy="92" r="23" fill="currentColor" opacity="0.08" />
        <circle cx="150" cy="92" r="15" fill="currentColor" opacity="0.14" />
        <circle cx="150" cy="92" r="8" fill="currentColor" opacity="0.8" />
        <style>{`@keyframes nexoraDash { to { stroke-dashoffset: -28; } }`}</style>
      </Box>

      {nodes.map((node, index) => (
        <Box
          key={node.label}
          sx={{
            position: "absolute",
            left: `${(node.x / 300) * 100}%`,
            top: `${(node.y / 184) * 100}%`,
            transform: "translate(-50%, -50%)",
            display: "flex",
            alignItems: "center",
            gap: 0.65,
            px: 1,
            py: 0.65,
            borderRadius: 2,
            border: 1,
            borderColor: "divider",
            backgroundColor: "background.paper",
            color: "primary.main",
            fontSize: "0.58rem",
            fontWeight: 800,
            letterSpacing: "0.05em",
            boxShadow: "0 8px 18px rgba(15,23,42,0.08)",
            animation: "nexoraNodeFloat 3.8s ease-in-out infinite",
            animationDelay: `${index * 0.25}s`,
            zIndex: 2,
          }}
        >
          {node.icon}
          <span>{node.label}</span>
        </Box>
      ))}

      <Stack
        direction="row"
        spacing={0.75}
        sx={{
          position: "absolute",
          left: 16,
          bottom: 13,
          alignItems: "center",
          color: "text.secondary",
          zIndex: 3,
        }}
      >
        <Sparkles size={14} />
        <Typography
          variant="caption"
          sx={{ fontWeight: 800, letterSpacing: "0.06em" }}
        >
          DECISION INTELLIGENCE
        </Typography>
      </Stack>

      <style>{`@keyframes nexoraNodeFloat { 0%,100% { margin-top: 0px; } 50% { margin-top: -4px; } } @media (prefers-reduced-motion: reduce) { * { animation: none !important; } }`}</style>
    </Box>
  );
}

function HomePage() {
  return (
    <>
      <Box
        component="main"
        sx={{
          ...nexoraTypographySx,
          "& .MuiButton-root": { fontWeight: 750 },
          "& .MuiChip-root": { fontWeight: 650 },
        }}
      >
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Stack spacing={7} sx={{ py: { xs: 3, md: 5 } }}>
            <Box
              component="section"
              sx={{
                position: "relative",
                overflow: "hidden",
                borderRadius: 4,
                px: { xs: 3.5, sm: 4.5, md: 6 },
                py: { xs: 3, md: 4 },
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
                  left: "46%",
                  top: "38%",
                  transform: "translate(-50%, -50%)",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(59,130,246,0.11), rgba(99,102,241,0.04) 38%, transparent 72%)",
                  filter: "blur(8px)",
                  animation: "nexoraHeroAmbient 7s ease-in-out infinite",
                  pointerEvents: "none",
                },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  inset: 0,
                  backgroundImage:
                    "linear-gradient(rgba(96,165,250,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.035) 1px, transparent 1px)",
                  backgroundSize: "42px 42px",
                  maskImage:
                    "linear-gradient(to bottom, rgba(0,0,0,0.55), transparent 78%)",
                  pointerEvents: "none",
                  zIndex: -1,
                },
                "@keyframes nexoraHeroAmbient": {
                  "0%, 100%": {
                    transform: "translate(-50%, -50%) scale(0.9)",
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
                spacing={{ xs: 3.5, sm: 4.5, md: 4 }}
                sx={{ alignItems: "center" }}
              >
                <Grid size={{ xs: 12, md: 6 }}>
                  <Stack
                    spacing={2.2}
                    sx={{
                      alignItems: "center",
                      width: "100%",
                      transform: {
                        xs: "translateY(-4px)",
                        md: "translateY(-16px)",
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={nexoraLogo}
                      alt="Nexora — Enterprise Decision Intelligence System"
                      sx={{
                        width: { xs: 210, sm: 260, md: 650 },
                        maxWidth: "100%",
                        height: "auto",
                        objectFit: "contain",
                        objectPosition: "center center",
                      }}
                    />

                    {/* <Chip
                      label="Enterprise AI Decision Intelligence"
                      variant="outlined"
                      sx={{
                        alignSelf: "center",
                        borderRadius: 2,
                        fontWeight: 600,
                      }}
                    /> */}

                    <Stack spacing={1.5}>
                      <Typography
                        variant="h2"
                        component="h1"
                        sx={{
                          fontWeight: 850,
                          letterSpacing: "-0.045em",
                          fontSize: {
                            xs: "2.35rem",
                            sm: "3.05rem",
                            md: "4rem",
                          },
                          lineHeight: 1.02,
                          background:
                            "linear-gradient(100deg, #f8fafc 0%, #dbeafe 24%, #60a5fa 54%, #a78bfa 78%, #f8fafc 100%)",
                          backgroundSize: "220% auto",
                          WebkitBackgroundClip: "text",
                          backgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          color: "transparent",
                          animation:
                            "nexoraTitleGradient 7s ease-in-out infinite",
                          textShadow: "0 0 34px rgba(96,165,250,0.08)",
                          "@keyframes nexoraTitleGradient": {
                            "0%, 100%": { backgroundPosition: "0% 50%" },
                            "50%": { backgroundPosition: "100% 50%" },
                          },
                          "@media (prefers-reduced-motion: reduce)": {
                            animation: "none",
                          },
                        }}
                      >
                        Predict. Analyze. Decide.
                      </Typography>

                      <Typography
                        variant="h6"
                        color="text.secondary"
                        sx={{
                          maxWidth: 620,
                          fontWeight: 400,
                          lineHeight: 1.6,
                        }}
                      >
                        Eight AI and Machine Learning models unified for
                        customer and business decisions.
                      </Typography>
                    </Stack>

                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      spacing={1.5}
                      sx={{ pt: 1 }}
                    >
                      <Button
                        variant="contained"
                        size="large"
                        endIcon={<ArrowRight size={18} strokeWidth={2} />}
                        component={Link}
                        to="/customer-segmentation"
                        sx={{
                          minHeight: 50,
                          px: 3.25,
                          width: { xs: "100%", sm: "auto" },
                          borderRadius: 2.5,
                          textTransform: "none",
                          fontWeight: 800,
                          letterSpacing: "-0.01em",
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
                            "& .MuiButton-endIcon": {
                              transition: "none",
                            },
                          },
                        }}
                      >
                        Explore Dashboard
                      </Button>

                      <Button
                        variant="outlined"
                        size="large"
                        component="a"
                        href="#models"
                        sx={{
                          minHeight: 50,
                          px: 3.25,
                          width: { xs: "100%", sm: "auto" },
                          borderRadius: 2.5,
                          textTransform: "none",
                          fontWeight: 800,
                          letterSpacing: "-0.01em",
                          borderColor: "rgba(59,130,246,0.55)",
                          background:
                            "linear-gradient(135deg, rgba(255,255,255,0.045), rgba(59,130,246,0.055))",
                          backdropFilter: "blur(10px)",
                          WebkitBackdropFilter: "blur(10px)",
                          transition:
                            "transform 180ms ease, border-color 180ms ease, background 180ms ease, box-shadow 180ms ease",
                          "&:hover": {
                            borderColor: "primary.main",
                            background:
                              "linear-gradient(135deg, rgba(59,130,246,0.10), rgba(99,102,241,0.12))",
                            transform: "translateY(-2px)",
                            boxShadow: "0 10px 26px rgba(59,130,246,0.14)",
                          },
                          "@media (prefers-reduced-motion: reduce)": {
                            transition: "none",
                          },
                        }}
                      >
                        Explore Models
                      </Button>
                    </Stack>

                    <Grid container spacing={2} sx={{ pt: 1 }}>
                      <Grid size={{ xs: 12, sm: 4 }}>
                        <Stack
                          direction="row"
                          spacing={1.2}
                          sx={{ alignItems: "center" }}
                        >
                          <Brain size={22} strokeWidth={2} />
                          <Box>
                            <Typography variant="h6" sx={{ fontWeight: 800 }}>
                              8
                            </Typography>
                            <Typography
                              variant="caption"
                              color="text.secondary"
                            >
                              AI Models
                            </Typography>
                          </Box>
                        </Stack>
                      </Grid>

                      <Grid size={{ xs: 12, sm: 4 }}>
                        <Stack
                          direction="row"
                          spacing={1.2}
                          sx={{ alignItems: "center" }}
                        >
                          <Gauge size={22} strokeWidth={2} />
                          <Box>
                            <Typography variant="h6" sx={{ fontWeight: 800 }}>
                              2
                            </Typography>
                            <Typography
                              variant="caption"
                              color="text.secondary"
                            >
                              Live Models
                            </Typography>
                          </Box>
                        </Stack>
                      </Grid>

                      <Grid size={{ xs: 12, sm: 4 }}>
                        <Stack
                          direction="row"
                          spacing={1.2}
                          sx={{ alignItems: "center" }}
                        >
                          <BarChart3 size={22} strokeWidth={2} />
                          <Box>
                            <Typography variant="h6" sx={{ fontWeight: 800 }}>
                              Real-time
                            </Typography>
                            <Typography
                              variant="caption"
                              color="text.secondary"
                            >
                              Prediction Flow
                            </Typography>
                          </Box>
                        </Stack>
                      </Grid>
                    </Grid>

                    <Box
                      sx={{
                        mt: 1,
                        p: 1.25,
                        borderRadius: 2.5,
                        border: 1,
                        borderColor: "divider",
                        background:
                          "linear-gradient(90deg, rgba(59,130,246,0.06), rgba(99,102,241,0.02))",
                      }}
                    >
                      <Stack
                        direction="row"
                        spacing={1}
                        sx={{
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Stack
                          direction="row"
                          spacing={0.75}
                          sx={{ alignItems: "center" }}
                        >
                          <Box
                            sx={{
                              width: 7,
                              height: 7,
                              borderRadius: "50%",
                              bgcolor: "success.main",
                              animation:
                                "nexoraLiveDot 1.8s ease-in-out infinite",
                              "@keyframes nexoraLiveDot": {
                                "0%,100%": {
                                  opacity: 0.35,
                                  transform: "scale(0.85)",
                                },
                                "50%": { opacity: 1, transform: "scale(1.2)" },
                              },
                              "@media (prefers-reduced-motion: reduce)": {
                                animation: "none",
                              },
                            }}
                          />
                          <Typography
                            variant="caption"
                            sx={{ fontWeight: 800 }}
                          >
                            Pipeline active
                          </Typography>
                        </Stack>
                        <Typography variant="caption" color="text.secondary">
                          Data → Model → Decision
                        </Typography>
                      </Stack>
                    </Box>
                  </Stack>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Stack
                    spacing={1.5}
                    sx={{
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                      maxWidth: 700,
                      mx: "auto",
                      height: "100%",
                      transform: {
                        xs: "translateY(-2px)",
                        md: "translateY(-10px)",
                      },
                    }}
                  >
                    <DecisionIntelligenceIllustration />
                    <Stack
                      direction="row"
                      spacing={1}
                      sx={{
                        justifyContent: "center",
                        alignItems: "center",
                        flexWrap: "wrap",
                        width: "100%",
                      }}
                    >
                      {[
                        { label: "Data", Icon: Database },
                        { label: "Models", Icon: Cpu },
                        { label: "Insights", Icon: Sparkles },
                      ].map(({ label, Icon }) => (
                        <Chip
                          key={label}
                          icon={<Icon size={14} />}
                          label={label}
                          size="small"
                          variant="outlined"
                          sx={{ fontWeight: 700 }}
                        />
                      ))}
                    </Stack>
                  </Stack>

                  <Card
                    elevation={0}
                    sx={{
                      width: "100%",
                      maxWidth: "100%",
                      borderRadius: 3,
                      overflow: "hidden",
                      border: 1,
                      borderColor: (theme) =>
                        theme.palette.mode === "dark"
                          ? "rgba(255,255,255,0.12)"
                          : "rgba(15,23,42,0.10)",
                      background: (theme) =>
                        theme.palette.mode === "dark"
                          ? "linear-gradient(145deg, rgba(255,255,255,0.075), rgba(255,255,255,0.025))"
                          : "linear-gradient(145deg, rgba(255,255,255,0.82), rgba(248,250,252,0.58))",
                      backdropFilter: "blur(18px)",
                      WebkitBackdropFilter: "blur(18px)",
                      boxShadow: (theme) =>
                        theme.palette.mode === "dark"
                          ? "inset 0 1px 0 rgba(255,255,255,0.08), 0 18px 45px rgba(0,0,0,0.18)"
                          : "inset 0 1px 0 rgba(255,255,255,0.9), 0 18px 45px rgba(15,23,42,0.08)",
                      animation:
                        "nexoraDashboardFloat 6s ease-in-out infinite, nexoraDashboardGlow 4.5s ease-in-out infinite",
                      willChange: "transform, box-shadow",
                      "@keyframes nexoraDashboardFloat": {
                        "0%, 100%": {
                          transform: "translateY(0px)",
                        },
                        "50%": {
                          transform: "translateY(-6px)",
                        },
                      },
                      "@keyframes nexoraDashboardGlow": {
                        "0%, 100%": {
                          boxShadow:
                            "inset 0 1px 0 rgba(255,255,255,0.08), 0 18px 45px rgba(0,0,0,0.18), 0 0 0 rgba(59,130,246,0)",
                        },
                        "50%": {
                          boxShadow:
                            "inset 0 1px 0 rgba(255,255,255,0.11), 0 20px 48px rgba(0,0,0,0.22), 0 0 28px rgba(59,130,246,0.20)",
                        },
                      },
                    }}
                  >
                    {/* Platform dashboard preview */}
                    <Box
                      sx={{
                        px: 2,
                        py: 1.5,
                        borderBottom: 1,
                        borderColor: "divider",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Stack
                        direction="row"
                        spacing={1}
                        sx={{ alignItems: "center" }}
                      >
                        <Box
                          component="img"
                          src={nexoraIcon}
                          alt=""
                          sx={{
                            width: 30,
                            height: 30,
                            objectFit: "cover",
                            borderRadius: "50%",
                          }}
                        />

                        <Box>
                          <Typography
                            variant="subtitle2"
                            sx={{ fontWeight: 800 }}
                          >
                            Nexora
                          </Typography>

                          <Typography variant="caption" color="text.secondary">
                            Decision Intelligence
                          </Typography>
                        </Box>
                      </Stack>

                      <Chip
                        label="Overview"
                        size="small"
                        variant="outlined"
                        sx={{ fontWeight: 700 }}
                      />
                    </Box>

                    <CardContent
                      sx={{
                        p: { xs: 1.5, sm: 2, md: 2.5 },
                      }}
                    >
                      <Grid container spacing={{ xs: 1, sm: 1.5 }}>
                        <Grid size={{ xs: 12, sm: 6 }}>
                          <Box
                            sx={{
                              position: "relative",
                              minHeight: { xs: 82, sm: 88 },
                              borderRadius: 2,
                              border: 1,
                              borderColor: "divider",
                              overflow: "hidden",
                              background:
                                "linear-gradient(135deg, rgba(99,102,241,0.10), rgba(59,130,246,0.04))",
                            }}
                          >
                            <Box
                              sx={{
                                position: "absolute",
                                inset: 0,
                                opacity: 0.55,
                                backgroundImage:
                                  "radial-gradient(circle at 20% 50%, currentColor 1px, transparent 1.5px)",
                                backgroundSize: "18px 18px",
                                color: "primary.main",
                              }}
                            />

                            <Box
                              sx={{
                                position: "absolute",
                                left: "17%",
                                top: "50%",
                                width: "22%",
                                height: 1,
                                backgroundColor: "primary.main",
                                opacity: 0.35,
                              }}
                            />

                            <Box
                              sx={{
                                position: "absolute",
                                right: "17%",
                                top: "50%",
                                width: "22%",
                                height: 1,
                                backgroundColor: "primary.main",
                                opacity: 0.35,
                              }}
                            />

                            {[
                              { left: "10%", top: "35%", delay: "0s" },
                              { left: "22%", top: "65%", delay: "0.5s" },
                              { left: "78%", top: "35%", delay: "1s" },
                              { left: "90%", top: "65%", delay: "1.5s" },
                            ].map((node) => (
                              <Box
                                key={`${node.left}-${node.top}`}
                                sx={{
                                  position: "absolute",
                                  left: node.left,
                                  top: node.top,
                                  width: 6,
                                  height: 6,
                                  borderRadius: "50%",
                                  backgroundColor: "primary.main",
                                  transform: "translate(-50%, -50%)",
                                  animation:
                                    "nexoraPulse 2.4s ease-in-out infinite",
                                  animationDelay: node.delay,
                                  "@keyframes nexoraPulse": {
                                    "0%, 100%": {
                                      opacity: 0.35,
                                      transform:
                                        "translate(-50%, -50%) scale(0.8)",
                                    },
                                    "50%": {
                                      opacity: 1,
                                      transform:
                                        "translate(-50%, -50%) scale(1.35)",
                                    },
                                  },
                                }}
                              />
                            ))}

                            <Box
                              sx={{
                                position: "absolute",
                                left: "50%",
                                top: "50%",
                                width: { xs: 42, sm: 46 },
                                height: { xs: 42, sm: 46 },
                                borderRadius: "50%",
                                display: "grid",
                                placeItems: "center",
                                transform: "translate(-50%, -50%)",
                                border: 1,
                                borderColor: "primary.main",
                                backgroundColor: "background.paper",
                                boxShadow: "0 0 0 6px rgba(99,102,241,0.08)",
                                animation: "nexoraCore 3s ease-in-out infinite",
                                "@keyframes nexoraCore": {
                                  "0%, 100%": {
                                    transform: "translate(-50%, -50%) scale(1)",
                                  },
                                  "50%": {
                                    transform:
                                      "translate(-50%, -50%) scale(1.08)",
                                  },
                                },
                              }}
                            >
                              <Brain size={20} strokeWidth={2} />
                            </Box>

                            <Typography
                              variant="caption"
                              sx={{
                                position: "absolute",
                                left: 10,
                                bottom: 7,
                                fontWeight: 700,
                                letterSpacing: "0.04em",
                              }}
                            >
                              AI DECISION NETWORK
                            </Typography>
                          </Box>
                        </Grid>

                        {[
                          ["AI Models", "8"],
                          ["Live Models", "2"],
                          ["Prediction Flow", "Real-time"],
                        ].map(([label, value]) => (
                          <Grid key={label} size={{ xs: 6, sm: 3 }}>
                            <Box
                              sx={{
                                p: { xs: 1.25, sm: 1.5 },
                                minHeight: { xs: 82, sm: 88 },
                                borderRadius: 2,
                                border: 1,
                                borderColor: "divider",
                              }}
                            >
                              <Typography
                                variant="caption"
                                color="text.secondary"
                              >
                                {label}
                              </Typography>

                              <Typography
                                variant="h6"
                                sx={{
                                  mt: 0.5,
                                  fontWeight: 800,
                                  lineHeight: 1.15,
                                }}
                              >
                                {value}
                              </Typography>
                            </Box>
                          </Grid>
                        ))}

                        <Grid size={{ xs: 12 }}>
                          <Box
                            sx={{
                              p: { xs: 1.25, sm: 1.75 },
                              borderRadius: 2,
                              border: 1,
                              borderColor: "divider",
                            }}
                          >
                            <Stack
                              direction="row"
                              spacing={1}
                              sx={{
                                justifyContent: "space-between",
                                alignItems: "center",
                                mb: 1.5,
                              }}
                            >
                              <Typography
                                variant="subtitle2"
                                sx={{ fontWeight: 800 }}
                              >
                                Prediction Activity
                              </Typography>

                              <Typography
                                variant="caption"
                                color="text.secondary"
                              >
                                Platform overview
                              </Typography>
                            </Stack>

                            <Box
                              sx={{
                                height: { xs: 78, sm: 96 },
                                display: "flex",
                                alignItems: "flex-end",
                                gap: 0.8,
                                px: 0.5,
                                pb: 0.5,
                              }}
                            >
                              {[
                                34, 52, 43, 68, 58, 76, 64, 86, 72, 92, 80, 96,
                              ].map((height, index) => (
                                <Box
                                  key={index}
                                  sx={{
                                    flex: 1,
                                    height: `${height}%`,
                                    minWidth: 5,
                                    borderRadius: 1,
                                    transformOrigin: "bottom",
                                    animation:
                                      "nexoraBarPulse 2.8s ease-in-out infinite",
                                    animationDelay: `${index * 0.09}s`,
                                    background:
                                      "linear-gradient(180deg, rgba(129,140,248,0.95), rgba(59,130,246,0.55))",
                                    opacity: 0.75 + index / 48,
                                    "@keyframes nexoraBarPulse": {
                                      "0%, 100%": { transform: "scaleY(0.92)" },
                                      "50%": { transform: "scaleY(1.04)" },
                                    },
                                    "@media (prefers-reduced-motion: reduce)": {
                                      animation: "none",
                                    },
                                  }}
                                />
                              ))}
                            </Box>
                          </Box>
                        </Grid>

                        <Grid size={{ xs: 12 }}>
                          <Box
                            sx={{
                              p: { xs: 1.25, sm: 1.75 },
                              borderRadius: 2,
                              border: 1,
                              borderColor: "divider",
                            }}
                          >
                            <Stack
                              direction="row"
                              spacing={1}
                              sx={{
                                justifyContent: "space-between",
                                alignItems: "center",
                                mb: 1.5,
                              }}
                            >
                              <Typography
                                variant="subtitle2"
                                sx={{ fontWeight: 800 }}
                              >
                                Model Status Overview
                              </Typography>

                              <Chip
                                label="2 Live"
                                size="small"
                                color="success"
                                variant="outlined"
                              />
                            </Stack>

                            <Stack spacing={1.1}>
                              {/* {models.map((model) => (
                              <Stack
                                key={model.title}
                                direction="row"
                                spacing={1}
                                sx={{
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                }}
                              >
                                <Stack
                                  direction="row"
                                  spacing={1}
                                  sx={{ alignItems: "center", minWidth: 0 }}
                                >
                                  <Box
                                    sx={{
                                      width: 7,
                                      height: 7,
                                      flexShrink: 0,
                                      borderRadius: "50%",
                                      backgroundColor:
                                        model.status === "Live"
                                          ? "success.main"
                                          : "text.disabled",
                                    }}
                                  />

                                  <Typography
                                    variant="caption"
                                    sx={{
                                      fontWeight: 600,
                                      overflow: "hidden",
                                      textOverflow: "ellipsis",
                                      whiteSpace: "nowrap",
                                    }}
                                  >
                                    {model.title}
                                  </Typography>
                                </Stack>

                                <Typography
                                  variant="caption"
                                  color={
                                    model.status === "Live"
                                      ? "success.main"
                                      : "text.secondary"
                                  }
                                  sx={{
                                    fontWeight: 800,
                                    flexShrink: 0,
                                    fontSize: "0.62rem",
                                  }}
                                >
                                  {model.status === "Live"
                                    ? "LIVE"
                                    : "COMING SOON"}
                                </Typography>
                              </Stack>
                            ))} */}
                            </Stack>
                          </Box>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>

            {/* 4.1.9 Technology Stack */}
            <Box component="section" sx={sectionRevealSx}>
              <Stack spacing={3}>
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    variant="h4"
                    component="h2"
                    sx={{
                      fontWeight: 800,
                      fontSize: { xs: "1.9rem", sm: "2.125rem" },
                    }}
                  >
                    Technology Stack
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 1, maxWidth: 680, mx: "auto" }}
                  >
                    The technologies powering Nexora from data to decisions.
                  </Typography>
                </Box>

                <Grid container spacing={2}>
                  {[
                    ["Python", "AI & Machine Learning"],
                    ["Scikit-learn", "Model Development"],
                    ["Pandas", "Data Processing"],
                    ["NumPy", "Numerical Computing"],
                    ["FastAPI", "Backend API"],
                    ["React", "Frontend Application"],
                    ["Material UI", "Interface System"],
                    ["Vite", "Frontend Tooling"],
                  ].map(([name, category]) => (
                    <Grid key={name} size={{ xs: 6, sm: 4, md: 3 }}>
                      <Card
                        elevation={0}
                        sx={{
                          height: "100%",
                          borderRadius: 2.5,
                          border: 1,
                          borderColor: (theme) =>
                            theme.palette.mode === "dark"
                              ? "rgba(255,255,255,0.10)"
                              : "rgba(15,23,42,0.08)",
                          background: (theme) =>
                            theme.palette.mode === "dark"
                              ? "linear-gradient(145deg, rgba(30,41,59,0.68), rgba(15,23,42,0.46) 48%, rgba(2,6,23,0.56))"
                              : "linear-gradient(145deg, rgba(255,255,255,0.82), rgba(248,250,252,0.62) 48%, rgba(241,245,249,0.72))",
                          backdropFilter: "blur(14px)",
                          WebkitBackdropFilter: "blur(14px)",
                          boxShadow: (theme) =>
                            theme.palette.mode === "dark"
                              ? "inset 0 1px 0 rgba(255,255,255,0.06)"
                              : "inset 0 1px 0 rgba(255,255,255,0.82)",
                          transition:
                            "transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease",
                          "&:hover": {
                            transform: "translateY(-2px)",
                            borderColor: "primary.main",
                            boxShadow: (theme) =>
                              theme.palette.mode === "dark"
                                ? "inset 0 1px 0 rgba(255,255,255,0.08), 0 12px 28px rgba(0,0,0,0.16)"
                                : "inset 0 1px 0 rgba(255,255,255,0.9), 0 12px 28px rgba(15,23,42,0.08)",
                          },
                        }}
                      >
                        <CardContent sx={{ p: 2 }}>
                          <Stack spacing={0.75}>
                            <Typography
                              variant="subtitle1"
                              sx={{ fontWeight: 800 }}
                            >
                              {name}
                            </Typography>

                            <Typography
                              variant="caption"
                              color="text.secondary"
                            >
                              {category}
                            </Typography>
                          </Stack>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Stack>
            </Box>

            {/* 4.1.8 How It Works */}
            <Box component="section" sx={sectionRevealSx}>
              <Stack spacing={3}>
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    variant="h4"
                    component="h2"
                    sx={{
                      fontWeight: 800,
                      fontSize: { xs: "1.9rem", sm: "2.125rem" },
                    }}
                  >
                    How It Works
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 1, maxWidth: 680, mx: "auto" }}
                  >
                    See how data moves through Nexora to become a decision
                    signal.
                  </Typography>
                </Box>

                <Grid container spacing={2.5}>
                  {[
                    {
                      number: "01",
                      icon: <BarChart3 size={28} strokeWidth={2} />,
                      title: "Data Collection",
                      description:
                        "Collect relevant customer and business data required by the selected intelligence model.",
                    },
                    {
                      number: "02",
                      icon: <Network size={28} strokeWidth={2} />,
                      title: "Data Processing",
                      description:
                        "Validate, transform, and prepare input data through the appropriate processing pipeline.",
                    },
                    {
                      number: "03",
                      icon: <Brain size={28} strokeWidth={2} />,
                      title: "AI Model",
                      description:
                        "Apply the selected machine learning model to generate predictions or analytical outputs.",
                    },
                    {
                      number: "04",
                      icon: <Gauge size={28} strokeWidth={2} />,
                      title: "Decision & Insights",
                      description:
                        "Present model results as clear insights that can support better business decisions.",
                    },
                  ].map((step, index) => (
                    <Grid key={step.number} size={{ xs: 12, sm: 6, lg: 3 }}>
                      <Card
                        elevation={0}
                        sx={{
                          height: "100%",
                          borderRadius: 3,
                          border: 1,
                          borderColor: (theme) =>
                            theme.palette.mode === "dark"
                              ? "rgba(255,255,255,0.10)"
                              : "rgba(15,23,42,0.08)",
                          background: (theme) =>
                            theme.palette.mode === "dark"
                              ? "linear-gradient(145deg, rgba(30,41,59,0.68), rgba(15,23,42,0.46) 48%, rgba(2,6,23,0.56))"
                              : "linear-gradient(145deg, rgba(255,255,255,0.82), rgba(248,250,252,0.62) 48%, rgba(241,245,249,0.72))",
                          backdropFilter: "blur(14px)",
                          WebkitBackdropFilter: "blur(14px)",
                          boxShadow: (theme) =>
                            theme.palette.mode === "dark"
                              ? "inset 0 1px 0 rgba(255,255,255,0.06)"
                              : "inset 0 1px 0 rgba(255,255,255,0.82)",
                          position: "relative",
                          transition:
                            "transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease",
                          "&:hover": {
                            transform: "translateY(-3px)",
                            borderColor: "primary.main",
                            boxShadow: (theme) =>
                              theme.palette.mode === "dark"
                                ? "inset 0 1px 0 rgba(255,255,255,0.08), 0 14px 30px rgba(0,0,0,0.16)"
                                : "inset 0 1px 0 rgba(255,255,255,0.9), 0 14px 30px rgba(15,23,42,0.08)",
                          },
                        }}
                      >
                        <CardContent sx={{ p: 2.5 }}>
                          <Stack
                            direction="row"
                            spacing={1.5}
                            sx={{ alignItems: "center", mb: 2 }}
                          >
                            <Box
                              sx={{
                                width: 42,
                                height: 42,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: "50%",
                                border: 1,
                                borderColor: "divider",
                                color: "primary.main",
                                fontWeight: 800,
                                flexShrink: 0,
                              }}
                            >
                              {step.number}
                            </Box>

                            <Box
                              sx={{
                                width: 44,
                                height: 44,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: 2.5,
                                border: 1,
                                borderColor: (theme) =>
                                  theme.palette.mode === "dark"
                                    ? "rgba(96,165,250,0.18)"
                                    : "rgba(37,99,235,0.12)",
                                color: "primary.main",
                                background: (theme) =>
                                  theme.palette.mode === "dark"
                                    ? "linear-gradient(145deg, rgba(59,130,246,0.12), rgba(99,102,241,0.04))"
                                    : "linear-gradient(145deg, rgba(59,130,246,0.08), rgba(99,102,241,0.03))",
                                boxShadow: (theme) =>
                                  theme.palette.mode === "dark"
                                    ? "0 0 0 rgba(59,130,246,0)"
                                    : "0 0 0 rgba(59,130,246,0)",
                                animation:
                                  "nexoraCardIconFloat 3.6s ease-in-out infinite",
                                animationDelay: `${index * 0.18}s`,
                                willChange: "transform, box-shadow",
                                "@keyframes nexoraCardIconFloat": {
                                  "0%, 100%": {
                                    transform: "translateY(0) scale(1)",
                                  },
                                  "50%": {
                                    transform: "translateY(-2px) scale(1.035)",
                                    boxShadow: "0 0 18px rgba(59,130,246,0.16)",
                                  },
                                },
                                "@media (prefers-reduced-motion: reduce)": {
                                  animation: "none",
                                },
                              }}
                            >
                              {step.icon}
                            </Box>
                          </Stack>

                          <Typography
                            variant="h6"
                            component="h3"
                            sx={{ fontWeight: 800 }}
                          >
                            {step.title}
                          </Typography>

                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ mt: 1, lineHeight: 1.65 }}
                          >
                            {step.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Stack>
            </Box>

            {/* 4.1.7 Platform Value / Why Nexora */}
            <Box component="section" sx={sectionRevealSx}>
              <Stack spacing={3}>
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    variant="h4"
                    component="h2"
                    sx={{
                      fontWeight: 800,
                      fontSize: { xs: "1.9rem", sm: "2.125rem" },
                    }}
                  >
                    Why Nexora?
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 1, maxWidth: 680, mx: "auto" }}
                  >
                    One visual system for multiple AI capabilities and business
                    decisions.
                  </Typography>
                </Box>

                <Grid container spacing={2.5}>
                  {[
                    {
                      icon: <Brain size={28} strokeWidth={2} />,
                      title: "AI-Powered Intelligence",
                      description:
                        "Use machine learning models to turn customer and business data into meaningful intelligence.",
                    },
                    {
                      icon: <Network size={28} strokeWidth={2} />,
                      title: "8-Model Architecture",
                      description:
                        "A locked platform architecture that brings eight specialized decision models under one system.",
                    },
                    {
                      icon: <Gauge size={28} strokeWidth={2} />,
                      title: "Real-Time Decisions",
                      description:
                        "Two live AI models demonstrate end-to-end decision intelligence flows.",
                    },
                    {
                      icon: <BarChart3 size={28} strokeWidth={2} />,
                      title: "Actionable Insights",
                      description:
                        "Present model outputs through clear analytics and decision-focused platform experiences.",
                    },
                  ].map((item, index) => (
                    <Grid key={item.title} size={{ xs: 12, sm: 6, lg: 3 }}>
                      <Card
                        elevation={0}
                        sx={{
                          height: "100%",
                          borderRadius: 3,
                          border: 1,
                          borderColor: (theme) =>
                            theme.palette.mode === "dark"
                              ? "rgba(255,255,255,0.10)"
                              : "rgba(15,23,42,0.08)",
                          background: (theme) =>
                            theme.palette.mode === "dark"
                              ? "linear-gradient(145deg, rgba(30,41,59,0.68), rgba(15,23,42,0.46) 48%, rgba(2,6,23,0.56))"
                              : "linear-gradient(145deg, rgba(255,255,255,0.82), rgba(248,250,252,0.62) 48%, rgba(241,245,249,0.72))",
                          backdropFilter: "blur(14px)",
                          WebkitBackdropFilter: "blur(14px)",
                          boxShadow: (theme) =>
                            theme.palette.mode === "dark"
                              ? "inset 0 1px 0 rgba(255,255,255,0.06)"
                              : "inset 0 1px 0 rgba(255,255,255,0.82)",
                          transition:
                            "transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease",
                          "&:hover": {
                            transform: "translateY(-4px)",
                            borderColor: "primary.main",
                            boxShadow: (theme) =>
                              theme.palette.mode === "dark"
                                ? "inset 0 1px 0 rgba(255,255,255,0.08), 0 14px 30px rgba(0,0,0,0.16)"
                                : "inset 0 1px 0 rgba(255,255,255,0.9), 0 14px 30px rgba(15,23,42,0.08)",
                          },
                        }}
                      >
                        <CardContent sx={{ p: 2.5 }}>
                          <Box
                            sx={{
                              width: 56,
                              height: 56,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              borderRadius: 2.5,
                              border: 1,
                              borderColor: (theme) =>
                                theme.palette.mode === "dark"
                                  ? "rgba(96,165,250,0.18)"
                                  : "rgba(37,99,235,0.12)",
                              color: "primary.main",
                              mb: 2,
                              background: (theme) =>
                                theme.palette.mode === "dark"
                                  ? "linear-gradient(145deg, rgba(59,130,246,0.12), rgba(99,102,241,0.04))"
                                  : "linear-gradient(145deg, rgba(59,130,246,0.08), rgba(99,102,241,0.03))",
                              boxShadow: (theme) =>
                                theme.palette.mode === "dark"
                                  ? "0 0 0 rgba(59,130,246,0)"
                                  : "0 0 0 rgba(59,130,246,0)",
                              animation:
                                "nexoraFeatureIconFloat 3.8s ease-in-out infinite",
                              animationDelay: `${index * 0.22}s`,
                              willChange: "transform, box-shadow",
                              "@keyframes nexoraFeatureIconFloat": {
                                "0%, 100%": {
                                  transform: "translateY(0) scale(1)",
                                },
                                "50%": {
                                  transform: "translateY(-2px) scale(1.04)",
                                  boxShadow: "0 0 18px rgba(59,130,246,0.16)",
                                },
                              },
                              "@media (prefers-reduced-motion: reduce)": {
                                animation: "none",
                              },
                            }}
                          >
                            {item.icon}
                          </Box>

                          <Typography
                            variant="h6"
                            component="h3"
                            sx={{ fontWeight: 800 }}
                          >
                            {item.title}
                          </Typography>

                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ mt: 1, lineHeight: 1.65 }}
                          >
                            {item.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Stack>
            </Box>

            {/* 4.1.11 Dashboard CTA */}
            <Box component="section" sx={sectionRevealSx}>
              <Card
                elevation={0}
                sx={{
                  borderRadius: 3,
                  border: 1,
                  borderColor: (theme) =>
                    theme.palette.mode === "dark"
                      ? "rgba(255,255,255,0.12)"
                      : "rgba(15,23,42,0.10)",
                  background: (theme) =>
                    theme.palette.mode === "dark"
                      ? "linear-gradient(145deg, rgba(255,255,255,0.065), rgba(255,255,255,0.022))"
                      : "linear-gradient(145deg, rgba(255,255,255,0.78), rgba(248,250,252,0.5))",
                  backdropFilter: "blur(18px)",
                  WebkitBackdropFilter: "blur(18px)",
                  boxShadow: (theme) =>
                    theme.palette.mode === "dark"
                      ? "inset 0 1px 0 rgba(255,255,255,0.08), 0 18px 45px rgba(0,0,0,0.16)"
                      : "inset 0 1px 0 rgba(255,255,255,0.9), 0 18px 45px rgba(15,23,42,0.07)",
                  overflow: "hidden",
                }}
              >
                <CardContent sx={{ p: { xs: 2.5, md: 4 } }}>
                  <Stack
                    direction={{ xs: "column", md: "row" }}
                    spacing={3}
                    sx={{
                      alignItems: { xs: "flex-start", md: "center" },
                      justifyContent: "space-between",
                    }}
                  >
                    <Stack spacing={1} sx={{ maxWidth: 720 }}>
                      <Typography
                        variant="h4"
                        component="h2"
                        sx={{ fontWeight: 800 }}
                      >
                        Ready to Explore Nexora?
                      </Typography>

                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ lineHeight: 1.7 }}
                      >
                        Explore the live Customer Segmentation experience and
                        see how Nexora turns customer data into actionable
                        intelligence.
                      </Typography>
                    </Stack>

                    <Button
                      variant="contained"
                      size="large"
                      endIcon={<ArrowRight size={18} strokeWidth={2} />}
                      component={Link}
                      to="/customer-segmentation"
                      sx={{
                        minHeight: 50,
                        px: 3.25,
                        flexShrink: 0,
                        width: { xs: "100%", md: "auto" },
                        borderRadius: 2.5,
                        textTransform: "none",
                        fontWeight: 800,
                        letterSpacing: "-0.01em",
                        background:
                          "linear-gradient(135deg, #2563eb 0%, #3b82f6 55%, #6366f1 100%)",
                        boxShadow:
                          "0 10px 28px rgba(37,99,235,0.22), inset 0 1px 0 rgba(255,255,255,0.22)",
                        transition:
                          "transform 180ms ease, box-shadow 180ms ease, filter 180ms ease",
                        "&:hover": {
                          background:
                            "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)",
                          transform: "translateY(-2px)",
                          filter: "brightness(1.05)",
                          boxShadow:
                            "0 14px 34px rgba(37,99,235,0.32), 0 0 22px rgba(99,102,241,0.16), inset 0 1px 0 rgba(255,255,255,0.24)",
                        },
                        "& .MuiButton-endIcon": {
                          transition: "transform 180ms ease",
                        },
                        "&:hover .MuiButton-endIcon": {
                          transform: "translateX(4px)",
                        },
                        "@media (prefers-reduced-motion: reduce)": {
                          transition: "none",
                          "& .MuiButton-endIcon": {
                            transition: "none",
                          },
                        },
                      }}
                    >
                      Open Dashboard
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Box>

            <Box component="section" sx={sectionRevealSx}>
              <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                <Brain size={22} strokeWidth={2} />
                <Typography variant="body2" color="text.secondary">
                  More decision intelligence capabilities will be added as the
                  platform evolves.
                </Typography>
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
}

export default HomePage;
