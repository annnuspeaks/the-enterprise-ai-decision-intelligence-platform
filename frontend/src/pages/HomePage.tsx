import { ArrowRight, BarChart3, Brain, Gauge, Network } from "lucide-react";

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
import ThemeToggle from "../components/layout/Navbar/ThemeToggle";

function HomePage() {
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: { xs: 78, sm: 88 },
          right: { xs: 14, sm: 24 },
          zIndex: 900,
        }}
      >
        <ThemeToggle />
      </Box>
      <Box component="main">
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Stack spacing={7} sx={{ py: { xs: 3, md: 5 } }}>
            <Box
              component="section"
              sx={{
                position: "relative",
                overflow: "hidden",
                borderRadius: 4,
                px: { xs: 3.5, sm: 4.5, md: 6 },
                py: { xs: 4, md: 6 },
                border: 1,
                borderColor: "divider",
                background:
                  "linear-gradient(135deg, rgba(15,23,42,0.42), rgba(30,41,59,0.18))",
              }}
            >
              <Grid
                container
                spacing={{ xs: 3.5, sm: 4.5, md: 4 }}
                sx={{ alignItems: "center" }}
              >
                <Grid size={{ xs: 12, md: 6 }}>
                  <Stack spacing={2.5}>
                    <Box
                      component="img"
                      src={nexoraLogo}
                      alt="Nexora — Enterprise Decision Intelligence System"
                      sx={{
                        width: { xs: 210, sm: 260, md: 300 },
                        maxWidth: "100%",
                        height: "auto",
                        objectFit: "contain",
                        objectPosition: "left center",
                      }}
                    />

                    <Chip
                      label="Enterprise AI Decision Intelligence"
                      variant="outlined"
                      sx={{
                        alignSelf: "flex-start",
                        borderRadius: 2,
                        fontWeight: 600,
                      }}
                    />

                    <Stack spacing={1.5}>
                      <Typography
                        variant="h2"
                        component="h1"
                        sx={{
                          fontWeight: 800,
                          letterSpacing: "-0.03em",
                          fontSize: {
                            xs: "2.1rem",
                            sm: "2.8rem",
                            md: "3.7rem",
                          },
                          lineHeight: 1.05,
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
                        An end-to-end decision intelligence platform built
                        around eight AI and Machine Learning models for customer
                        and business analytics.
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
                          minHeight: 48,
                          px: 3,
                          width: { xs: "100%", sm: "auto" },
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
                          minHeight: 48,
                          px: 3,
                          width: { xs: "100%", sm: "auto" },
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
                              1
                            </Typography>
                            <Typography
                              variant="caption"
                              color="text.secondary"
                            >
                              Live Model
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
                  </Stack>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Card
                    elevation={0}
                    sx={{
                      width: "100%",
                      maxWidth: "100%",
                      borderRadius: 3,
                      overflow: "hidden",
                      border: 1,
                      borderColor: "divider",
                      backgroundColor: "background.paper",
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
                        {[
                          ["Total Customers", "96,096"],
                          ["AI Models", "8"],
                          ["Live Models", "1"],
                          ["Prediction Flow", "Real-time"],
                        ].map(([label, value]) => (
                          <Grid key={label} size={{ xs: 6 }}>
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
                                    background:
                                      "linear-gradient(180deg, rgba(129,140,248,0.95), rgba(59,130,246,0.55))",
                                    opacity: 0.75 + index / 48,
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
                                label="1 Live"
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
            <Box component="section">
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
                    The core technologies powering Nexora's AI, backend,
                    frontend, and analytics platform.
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
                          borderColor: "divider",
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
            <Box component="section">
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
                    From business data to intelligent model outputs, Nexora
                    follows a structured decision intelligence workflow.
                  </Typography>
                </Box>

                <Grid container spacing={2.5}>
                  {[
                    {
                      number: "01",
                      icon: <BarChart3 size={24} strokeWidth={2} />,
                      title: "Data Collection",
                      description:
                        "Collect relevant customer and business data required by the selected intelligence model.",
                    },
                    {
                      number: "02",
                      icon: <Network size={24} strokeWidth={2} />,
                      title: "Data Processing",
                      description:
                        "Validate, transform, and prepare input data through the appropriate processing pipeline.",
                    },
                    {
                      number: "03",
                      icon: <Brain size={24} strokeWidth={2} />,
                      title: "AI Model",
                      description:
                        "Apply the selected machine learning model to generate predictions or analytical outputs.",
                    },
                    {
                      number: "04",
                      icon: <Gauge size={24} strokeWidth={2} />,
                      title: "Decision & Insights",
                      description:
                        "Present model results as clear insights that can support better business decisions.",
                    },
                  ].map((step) => (
                    <Grid key={step.number} size={{ xs: 12, sm: 6, lg: 3 }}>
                      <Card
                        elevation={0}
                        sx={{
                          height: "100%",
                          borderRadius: 3,
                          border: 1,
                          borderColor: "divider",
                          position: "relative",
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

                            <Box sx={{ color: "primary.main" }}>
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
            <Box component="section">
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
                    A unified decision intelligence platform designed to bring
                    multiple AI capabilities together in one business-focused
                    experience.
                  </Typography>
                </Box>

                <Grid container spacing={2.5}>
                  {[
                    {
                      icon: <Brain size={24} strokeWidth={2} />,
                      title: "AI-Powered Intelligence",
                      description:
                        "Use machine learning models to turn customer and business data into meaningful intelligence.",
                    },
                    {
                      icon: <Network size={24} strokeWidth={2} />,
                      title: "8-Model Architecture",
                      description:
                        "A locked platform architecture that brings eight specialized decision models under one system.",
                    },
                    {
                      icon: <Gauge size={24} strokeWidth={2} />,
                      title: "Real-Time Decisions",
                      description:
                        "The live Customer Segmentation model demonstrates an end-to-end prediction flow.",
                    },
                    {
                      icon: <BarChart3 size={24} strokeWidth={2} />,
                      title: "Actionable Insights",
                      description:
                        "Present model outputs through clear analytics and decision-focused platform experiences.",
                    },
                  ].map((item) => (
                    <Grid key={item.title} size={{ xs: 12, sm: 6, lg: 3 }}>
                      <Card
                        elevation={0}
                        sx={{
                          height: "100%",
                          borderRadius: 3,
                          border: 1,
                          borderColor: "divider",
                          transition:
                            "transform 180ms ease, border-color 180ms ease",
                          "&:hover": {
                            transform: "translateY(-4px)",
                            borderColor: "primary.main",
                          },
                        }}
                      >
                        <CardContent sx={{ p: 2.5 }}>
                          <Box
                            sx={{
                              width: 50,
                              height: 50,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              borderRadius: 2.5,
                              border: 1,
                              borderColor: "divider",
                              color: "primary.main",
                              mb: 2,
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
            <Box component="section">
              <Card
                elevation={0}
                sx={{
                  borderRadius: 3,
                  border: 1,
                  borderColor: "divider",
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
                        minHeight: 48,
                        px: 3,
                        flexShrink: 0,
                        width: { xs: "100%", md: "auto" },
                      }}
                    >
                      Open Dashboard
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Box>

            <Box component="section">
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
