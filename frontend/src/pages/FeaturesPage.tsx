import { ArrowRight } from "lucide-react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

function FeaturesPage() {
  return (
    <Box component="main">
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Stack spacing={5} sx={{ py: { xs: 4, md: 7 } }}>
          <Stack spacing={1.5} sx={{ maxWidth: 850 }}>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 800,
                letterSpacing: "-0.03em",
                fontSize: { xs: "2.35rem", sm: "3rem", md: "3.7rem" },
              }}
            >
              Nexora Features
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400, lineHeight: 1.6 }}>
              Explore the eight locked decision intelligence models and understand which capabilities are live today.
            </Typography>
          </Stack>

                    <Grid container spacing={2.5}>
            {[
              ["Customer Segmentation", "Live", "Identify meaningful customer groups using behavioral and purchasing patterns."],
              ["Customer Churn Prediction", "Coming Soon", "Predict customers who are at risk of leaving and support retention decisions."],
              ["Customer Lifetime Value", "Coming Soon", "Estimate the long-term economic value of individual customers."],
              ["Purchase Propensity", "Coming Soon", "Estimate the likelihood that a customer will make a purchase."],
              ["Anomaly Detection", "Coming Soon", "Detect unusual customer behavior and potentially suspicious activity."],
              ["Sales & Demand Forecasting", "Coming Soon", "Forecast future sales and demand trends to support planning."],
              ["Recommendation System", "Coming Soon", "Generate personalized product and customer recommendations."],
              ["Dynamic Risk Scoring", "Coming Soon", "Combine customer signals to produce dynamic business risk scores."],
            ].map(([title, status, description]) => (
              <Grid key={title} size={{ xs: 12, sm: 6, lg: 3 }}>
                <Card elevation={0} sx={{ height: "100%", border: 1, borderColor: "divider", borderRadius: 3 }}>
                  <CardContent sx={{ p: 2.5, height: "100%", display: "flex", flexDirection: "column" }}>
                    <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center", gap: 1 }}>
                      <Typography variant="h6" sx={{ fontWeight: 800 }}>{title}</Typography>
                      <Typography variant="caption" sx={{ fontWeight: 800, whiteSpace: "nowrap", color: status === "Live" ? "success.main" : "text.secondary" }}>
                        {status.toUpperCase()}
                      </Typography>
                    </Stack>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1.25, lineHeight: 1.7, flexGrow: 1 }}>
                      {description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Card elevation={0} sx={{ border: 1, borderColor: "divider", borderRadius: 3 }}>
            <CardContent sx={{ p: { xs: 2.5, md: 3.5 } }}>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2.5}
                sx={{ alignItems: { sm: "center" }, justifyContent: "space-between" }}>
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 800 }}>
                    Explore Nexora
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 0.75 }}>
                    Explore the platform dashboard and its live decision intelligence capabilities.
                  </Typography>
                </Box>
                <Button component={Link} to="/dashboard" variant="contained"
                  endIcon={<ArrowRight size={18} />} sx={{ minHeight: 46, flexShrink: 0 }}>
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
