import { ArrowRight, Brain } from "lucide-react";
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
import { Link } from "react-router-dom";
import { MODEL_REGISTRY } from "../config/modelRegistry";

function DashboardPage() {
  const models = MODEL_REGISTRY;

  const liveModels = models.filter(
    (model) => model.status === "available",
  ).length;

  const modelsInDevelopment = models.length - liveModels;
  const predictionReadiness =
    models.length > 0 ? (liveModels / models.length) * 100 : 0;

  return (
    <Box component="main">
      <Container maxWidth="xl">
        <Stack spacing={5} sx={{ py: { xs: 4, md: 6 } }}>
          <Stack spacing={1}>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 800,
                letterSpacing: "-0.03em",
                fontSize: { xs: "2.35rem", sm: "3rem", md: "3.7rem" },
              }}
            >
              Nexora Dashboard
            </Typography>

            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ maxWidth: 760, fontWeight: 400, lineHeight: 1.6 }}
            >
              Explore Nexora's eight locked AI and Machine Learning models.
              Available models are live, while upcoming capabilities are clearly
              marked as coming soon.
            </Typography>
          </Stack>

          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Card elevation={0} sx={{ height: "100%" }}>
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    AI Models
                  </Typography>
                  <Typography variant="h4" sx={{ mt: 0.5, fontWeight: 800 }}>
                    {models.length}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Locked platform architecture
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, sm: 4 }}>
              <Card elevation={0} sx={{ height: "100%" }}>
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Live Models
                  </Typography>
                  <Typography variant="h4" sx={{ mt: 0.5, fontWeight: 800 }}>
                    {liveModels}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Currently available
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, sm: 4 }}>
              <Card elevation={0} sx={{ height: "100%" }}>
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Platform Status
                  </Typography>
                  <Typography variant="h4" sx={{ mt: 0.5, fontWeight: 800 }}>
                    Active
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Expanding model capabilities
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Card elevation={0}>
            <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
              <Stack spacing={2.5}>
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
                      color="primary.main"
                      sx={{
                        fontWeight: 800,
                        letterSpacing: "0.08em",
                      }}
                    >
                      Prediction Summary
                    </Typography>

                    <Typography
                      variant="h5"
                      sx={{
                        mt: 0.25,
                        fontWeight: 800,
                      }}
                    >
                      Prediction readiness
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        mt: 0.5,
                        maxWidth: 720,
                        lineHeight: 1.6,
                      }}
                    >
                      {liveModels} of {models.length} decision models are
                      currently available for prediction. Additional
                      capabilities are progressing toward production readiness.
                    </Typography>
                  </Box>

                  <Chip
                    label={`${Math.round(predictionReadiness)}% Ready`}
                    color="success"
                    variant="outlined"
                    size="small"
                  />
                </Stack>

                <Stack spacing={1.25}>
                  <Stack
                    direction="row"
                    sx={{
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 700 }}>
                      Platform prediction readiness
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
                    }}
                  />
                </Stack>

                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Box
                      sx={{
                        p: 2,
                        border: 1,
                        borderColor: "divider",
                        borderRadius: 2,
                      }}
                    >
                      <Typography variant="h5" sx={{ fontWeight: 800 }}>
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
                        p: 2,
                        border: 1,
                        borderColor: "divider",
                        borderRadius: 2,
                      }}
                    >
                      <Typography variant="h5" sx={{ fontWeight: 800 }}>
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

          <Stack spacing={2}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={1.5}
              sx={{
                alignItems: "center",
                justifyContent: "space-between",
                gap: 1,
                minWidth: 0,
              }}
            >
              <Box>
                <Typography
                  variant="h4"
                  component="h2"
                  sx={{ fontWeight: 800 }}
                >
                  AI & Machine Learning Models
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 0.5 }}
                >
                  Eight specialized models under one decision intelligence
                  platform.
                </Typography>
              </Box>

              <Chip
                label={`${liveModels} Live`}
                color="success"
                variant="outlined"
                size="small"
              />
            </Stack>

            <Grid container spacing={3}>
              {models.map((model) => {
                const available =
                  model.status === "available" && Boolean(model.route);

                return (
                  <Grid key={model.key} size={{ xs: 12, sm: 6, lg: 3 }}>
                    <Card
                      elevation={0}
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        border: 1,
                        borderColor: "divider",
                        transition:
                          "transform 180ms ease, border-color 180ms ease",
                        "&:hover": available
                          ? {
                              transform: "translateY(-3px)",
                              borderColor: "primary.main",
                            }
                          : undefined,
                      }}
                    >
                      <CardContent
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          flexGrow: 1,
                          gap: { xs: 1.25, sm: 1.5 },
                          p: { xs: 2, sm: 2.5 },
                        }}
                      >
                        <Stack
                          direction="row"
                          spacing={1.5}
                          sx={{
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: 1,
                            minWidth: 0,
                          }}
                        >
                          <Box
                            sx={{
                              color: "primary.main",
                              display: "flex",
                              alignItems: "center",
                              flexShrink: 0,
                            }}
                          >
                            <model.icon size={28} strokeWidth={2} />{" "}
                          </Box>

                          <Chip
                            label={
                              model.status === "available"
                                ? "Available"
                                : model.status === "deferred"
                                  ? "Deferred"
                                  : "Coming Soon"
                            }
                            size="small"
                            color={available ? "success" : "default"}
                            variant="outlined"
                          />
                        </Stack>

                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 800,
                            fontSize: { xs: "1rem", sm: "1.1rem" },
                            lineHeight: 1.3,
                          }}
                        >
                          {model.name}
                        </Typography>

                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            lineHeight: 1.6,
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
                            endIcon={<ArrowRight size={18} strokeWidth={2} />}
                            sx={{ alignSelf: "flex-start", mt: 1 }}
                          >
                            Open Model
                          </Button>
                        ) : (
                          <Typography
                            variant="caption"
                            color="text.secondary"
                            sx={{ mt: 1 }}
                          >
                            Model interface will be available as development
                            progresses.
                          </Typography>
                        )}
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Stack>

          <Card elevation={0}>
            <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
              <Stack
                direction="row"
                spacing={1.5}
                sx={{ alignItems: "center" }}
              >
                <Brain size={22} strokeWidth={2} />
                <Typography variant="body2" color="text.secondary">
                  Nexora's model architecture is locked to eight decision
                  intelligence capabilities; models become live as their
                  individual development reaches production readiness.
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
