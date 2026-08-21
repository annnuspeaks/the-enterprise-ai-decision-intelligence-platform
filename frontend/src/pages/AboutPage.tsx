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

function AboutPage() {
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
              About Nexora
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400, lineHeight: 1.6 }}>
              A unified enterprise decision intelligence platform connecting business data with specialized AI and Machine Learning capabilities.
            </Typography>
          </Stack>

                    <Grid container spacing={2.5}>
            {[
              ["Unified Decision Intelligence", "Nexora brings multiple AI and Machine Learning capabilities together under one platform."],
              ["Eight-Model Architecture", "The platform is locked around eight specialized decision models that will become live progressively."],
              ["Business-Focused Outputs", "Model results are presented as clear analytics and decision-support experiences rather than raw predictions."],
              ["Production-Oriented Growth", "Live capabilities are exposed immediately while future models remain clearly marked as Coming Soon."],
            ].map(([title, description]) => (
              <Grid key={title} size={{ xs: 12, sm: 6, lg: 3 }}>
                <Card elevation={0} sx={{ height: "100%", border: 1, borderColor: "divider", borderRadius: 3 }}>
                  <CardContent sx={{ p: 2.5 }}>
                    <Typography variant="h6" sx={{ fontWeight: 800 }}>{title}</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1, lineHeight: 1.7 }}>{description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Card elevation={0} sx={{ border: 1, borderColor: "divider", borderRadius: 3 }}>
            <CardContent sx={{ p: { xs: 2.5, md: 3.5 } }}>
              <Typography variant="h5" sx={{ fontWeight: 800 }}>What Nexora is built to do</Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, maxWidth: 900, lineHeight: 1.8 }}>
                Nexora is an enterprise decision intelligence system designed to connect customer and business data with specialized machine learning models. The current live capability is Customer Segmentation, while the remaining locked models will be introduced as their individual development reaches production readiness.
              </Typography>
            </CardContent>
          </Card>

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
                  endIcon={<ArrowRight size={18} strokeWidth={2} />} sx={{ minHeight: 46, flexShrink: 0 }}>
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

export default AboutPage;
