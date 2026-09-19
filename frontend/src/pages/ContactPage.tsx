import {
  ArrowRight,
  Building2,
  GitBranch,
  LayoutDashboard,
  MessageCircle,
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
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import contactIllustration from "../assets/contact-us.png";

const pageTypography = {
  "& .MuiTypography-root": {
    fontFamily:
      '"Inter", "Segoe UI Variable Text", "Segoe UI", system-ui, sans-serif',
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

const glassCard = {
  borderRadius: 3.5,
  border: 1,
  borderColor: "rgba(148,163,184,0.15)",
  background:
    "linear-gradient(145deg, rgba(30,41,59,0.68), rgba(15,23,42,0.46) 58%, rgba(37,99,235,0.055))",
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

function ContactPage() {
  return (
    <Box
      component="main"
      sx={{
        ...pageTypography,
        overflow: "hidden",
        "& .MuiButton-root": { fontWeight: 800, textTransform: "none" },
        "& .MuiChip-root": { fontWeight: 700 },
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Stack spacing={{ xs: 3.5, md: 4.5 }} sx={{ py: { xs: 2.5, md: 4 } }}>
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
                "linear-gradient(135deg, rgba(15,23,42,0.68), rgba(30,41,59,0.25) 55%, rgba(37,99,235,0.07))",
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.045), 0 24px 70px rgba(2,6,23,0.18)",
              isolation: "isolate",
              "&::before": {
                content: '""',
                position: "absolute",
                width: 420,
                height: 420,
                right: "18%",
                top: "50%",
                transform: "translate(50%,-50%)",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(59,130,246,0.12), rgba(99,102,241,0.035) 42%, transparent 72%)",
                filter: "blur(8px)",
                animation: "contactAmbient 7s ease-in-out infinite",
                pointerEvents: "none",
              },
              "@keyframes contactAmbient": {
                "0%,100%": {
                  transform: "translate(50%,-50%) scale(.92)",
                  opacity: 0.55,
                },
                "50%": {
                  transform: "translate(50%,-50%) scale(1.08)",
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
                    icon={<MessageCircle size={14} />}
                    label="NEXORA / CONTACT"
                    size="small"
                    variant="outlined"
                    color="primary"
                  />
                  <Typography
                    variant="h1"
                    component="h1"
                    sx={{
                      fontWeight: 850,
                      letterSpacing: "-0.045em",
                      fontSize: { xs: "2.35rem", sm: "3rem", md: "3.75rem" },
                      lineHeight: 1.03,
                      background:
                        "linear-gradient(100deg, #f8fafc 0%, #dbeafe 24%, #60a5fa 54%, #a78bfa 78%, #f8fafc 100%)",
                      backgroundSize: "220% auto",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      color: "transparent",
                      animation: "contactTitleGradient 7s ease-in-out infinite",
                      "@keyframes contactTitleGradient": {
                        "0%,100%": { backgroundPosition: "0% 50%" },
                        "50%": { backgroundPosition: "100% 50%" },
                      },
                      "@media (prefers-reduced-motion: reduce)": {
                        animation: "none",
                      },
                    }}
                  >
                    Contact Nexora
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      maxWidth: 590,
                      fontSize: { xs: ".94rem", sm: "1rem" },
                      lineHeight: 1.65,
                    }}
                  >
                    Connect with the project and explore the wider product
                    ecosystem.
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
                      icon={<Sparkles size={14} />}
                      label="Decision Intelligence"
                      size="small"
                      variant="outlined"
                    />
                    <Chip
                      icon={<LayoutDashboard size={14} />}
                      label="Dashboard Access"
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
                    ...glassCard,
                    maxWidth: 560,
                    mx: "auto",
                    overflow: "hidden",
                    animation:
                      "contactIllustrationFloat 6s ease-in-out infinite, contactIllustrationGlow 5s ease-in-out infinite",
                    "@keyframes contactIllustrationFloat": {
                      "0%,100%": { transform: "translateY(0)" },
                      "50%": { transform: "translateY(-6px)" },
                    },
                    "@keyframes contactIllustrationGlow": {
                      "0%,100%": {
                        boxShadow:
                          "inset 0 1px 0 rgba(255,255,255,.055),0 22px 52px rgba(0,0,0,.22),0 0 18px rgba(59,130,246,.03)",
                      },
                      "50%": {
                        boxShadow:
                          "inset 0 1px 0 rgba(255,255,255,.08),0 25px 58px rgba(0,0,0,.27),0 0 32px rgba(59,130,246,.12)",
                      },
                    },
                    "@media (prefers-reduced-motion: reduce)": {
                      animation: "none",
                    },
                    "&:hover": { transform: "translateY(-8px) scale(1.01)" },
                  }}
                >
                  <Box
                    sx={{
                      minHeight: { xs: 250, sm: 320, md: 365 },
                      p: { xs: 1.5, sm: 2.5, md: 3 },
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      overflow: "hidden",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        width: 280,
                        height: 280,
                        borderRadius: "50%",
                        background:
                          "radial-gradient(circle, rgba(59,130,246,.12), transparent 68%)",
                        animation: "contactImageAura 5s ease-in-out infinite",
                      },
                      "@keyframes contactImageAura": {
                        "0%,100%": { transform: "scale(.88)", opacity: 0.42 },
                        "50%": { transform: "scale(1.08)", opacity: 0.85 },
                      },
                      "@media (prefers-reduced-motion: reduce)": {
                        "&::before": { animation: "none" },
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={contactIllustration}
                      alt="Contact and collaboration illustration"
                      sx={{
                        position: "relative",
                        zIndex: 1,
                        width: "100%",
                        maxWidth: 540,
                        maxHeight: { xs: 255, sm: 315, md: 355 },
                        objectFit: "contain",
                        display: "block",
                        filter: "drop-shadow(0 18px 28px rgba(15,23,42,.25))",
                        transition: "transform 260ms ease, filter 260ms ease",
                        "&:hover": {
                          transform: "scale(1.025)",
                          filter: "drop-shadow(0 22px 34px rgba(15,23,42,.31))",
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
                      CONNECT → EXPLORE → COLLABORATE
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            </Grid>
          </Box>

          <Grid container spacing={2}>
            {[
              {
                icon: <MessageCircle size={21} />,
                title: "Connect",
                detail:
                  "Use the available project channels for information and collaboration.",
              },
              {
                icon: <LayoutDashboard size={21} />,
                title: "Explore",
                detail:
                  "Open the Nexora dashboard and explore its decision intelligence workflow.",
              },
              {
                icon: <GitBranch size={21} />,
                title: "Project Source",
                detail:
                  "Access the project repository for implementation and documentation.",
              },
            ].map((item) => (
              <Grid key={item.title} size={{ xs: 12, md: 4 }}>
                <Card elevation={0} sx={{ ...glassCard, height: "100%" }}>
                  <CardContent sx={{ p: { xs: 2, md: 2.25 } }}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 1.4,
                      }}
                    >
                      <Box sx={iconTile}>{item.icon}</Box>

                      <Typography variant="h6" sx={{ fontWeight: 700 }}>
                        {item.title}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Card elevation={0} sx={{ ...glassCard, height: "100%" }}>
                <CardContent sx={{ p: { xs: 2.2, md: 3 } }}>
                  <Stack spacing={2.2}>
                    <Box>
                      <Typography
                        variant="overline"
                        color="primary"
                        sx={{ fontWeight: 800 }}
                      >
                        PROJECT CONNECTION
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
                        Connect with Nexora
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mt: 0.55, lineHeight: 1.6, maxWidth: 700 }}
                      >
                        Nexora is being developed as a scalable enterprise
                        decision intelligence platform. For project information,
                        collaboration, or related work, use the available
                        product and project links below.
                      </Typography>
                    </Box>
                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      spacing={1.2}
                    >
                      <Button
                        component={Link}
                        to="/dashboard"
                        variant="contained"
                        endIcon={<ArrowRight size={17} />}
                        sx={{
                          minHeight: 48,
                          px: 2.8,
                          borderRadius: 2.5,
                          color: "#fff",
                          background:
                            "linear-gradient(100deg,#2563eb 0%,#4f46e5 52%,#7c3aed 100%)",
                          boxShadow:
                            "0 10px 28px rgba(37,99,235,.24),inset 0 1px 0 rgba(255,255,255,.14)",
                          "&:hover": {
                            background:
                              "linear-gradient(100deg,#3b82f6 0%,#6366f1 52%,#8b5cf6 100%)",
                            transform: "translateY(-2px)",
                            boxShadow: "0 14px 34px rgba(37,99,235,.32)",
                          },
                          "@media (prefers-reduced-motion: reduce)": {
                            "&:hover": { transform: "none" },
                          },
                        }}
                      >
                        Explore Dashboard
                      </Button>
                      <Button
                        component="a"
                        href="https://github.com/annnuspeaks/the-enterprise-ai-decision-intelligence-platform"
                        target="_blank"
                        rel="noreferrer"
                        variant="outlined"
                        startIcon={<GitBranch size={17} />}
                        sx={{
                          minHeight: 48,
                          px: 2.5,
                          borderRadius: 2.5,
                          borderColor: "rgba(96,165,250,.32)",
                          "&:hover": {
                            borderColor: "rgba(96,165,250,.62)",
                            background: "rgba(59,130,246,.055)",
                          },
                        }}
                      >
                        GitHub Repository
                      </Button>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <Card elevation={0} sx={{ ...glassCard, height: "100%" }}>
                <CardContent sx={{ p: { xs: 2.2, md: 3 } }}>
                  <Stack spacing={2}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 1.3,
                      }}
                    >
                      <Box sx={iconTile}>
                        <Building2 size={21} />
                      </Box>

                      <Box>
                        <Typography
                          variant="overline"
                          color="primary"
                          sx={{ fontWeight: 800 }}
                        >
                          PROJECT DETAILS
                        </Typography>

                        <Typography
                          variant="h6"
                          sx={{ fontWeight: 850, mt: 0.1 }}
                        >
                          Project Contact
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        p: 1.5,
                        borderRadius: 2.5,
                        border: 1,
                        borderColor: "rgba(148,163,184,.11)",
                        background: "rgba(15,23,42,.28)",
                      }}
                    >
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ fontWeight: 800 }}
                      >
                        ORGANIZATION
                      </Typography>
                      <Typography sx={{ mt: 0.4, fontWeight: 750 }}>
                        TAS Communication Services
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        p: 1.5,
                        borderRadius: 2.5,
                        border: 1,
                        borderColor: "rgba(148,163,184,.11)",
                        background: "rgba(15,23,42,.28)",
                      }}
                    >
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ fontWeight: 800 }}
                      >
                        PROJECT
                      </Typography>
                      <Typography sx={{ mt: 0.4, fontWeight: 750 }}>
                        Nexora — Enterprise Decision Intelligence System
                      </Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Card elevation={0} sx={{ ...glassCard, overflow: "hidden" }}>
            <CardContent sx={{ p: { xs: 2.2, sm: 2.8, md: 3.2 } }}>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2.5}
                sx={{
                  alignItems: { sm: "center" },
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography
                    variant="overline"
                    color="primary"
                    sx={{ fontWeight: 800 }}
                  >
                    NEXT STEP
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 850, mt: 0.15 }}>
                    Explore Nexora
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 0.55, lineHeight: 1.55 }}
                  >
                    Explore the platform dashboard and its live decision
                    intelligence capabilities.
                  </Typography>
                </Box>
                <Button
                  component={Link}
                  to="/dashboard"
                  variant="contained"
                  endIcon={<ArrowRight size={17} />}
                  sx={{
                    minHeight: 48,
                    px: 2.8,
                    flexShrink: 0,
                    borderRadius: 2.5,
                    color: "#fff",
                    background:
                      "linear-gradient(100deg,#2563eb 0%,#4f46e5 52%,#7c3aed 100%)",
                    boxShadow:
                      "0 10px 28px rgba(37,99,235,.24),inset 0 1px 0 rgba(255,255,255,.14)",
                    "&:hover": {
                      background:
                        "linear-gradient(100deg,#3b82f6 0%,#6366f1 52%,#8b5cf6 100%)",
                      transform: "translateY(-2px)",
                      boxShadow: "0 14px 34px rgba(37,99,235,.32)",
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
export default ContactPage;
