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

function ContactPage() {
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
              Contact Nexora
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400, lineHeight: 1.6 }}>
              Connect with the project and explore the wider product ecosystem.
            </Typography>
          </Stack>

                    <Grid container spacing={2.5}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Card elevation={0} sx={{ height: "100%", border: 1, borderColor: "divider", borderRadius: 3 }}>
                <CardContent sx={{ p: { xs: 2.5, md: 3.5 } }}>
                  <Typography variant="h5" sx={{ fontWeight: 800 }}>Connect with Nexora</Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, lineHeight: 1.8 }}>
                    Nexora is being developed as a scalable enterprise decision intelligence platform. For project information, collaboration, or related work, use the available product and project links below.
                  </Typography>
                  <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ mt: 3 }}>
                    <Button component={Link} to="/dashboard" variant="contained" endIcon={<ArrowRight size={18} />}>
                      Explore Dashboard
                    </Button>
                    <Button component="a" href="https://github.com/annnuspeaks/the-enterprise-ai-decision-intelligence-platform" target="_blank" rel="noreferrer" variant="outlined">
                      GitHub Repository
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <Card elevation={0} sx={{ height: "100%", border: 1, borderColor: "divider", borderRadius: 3 }}>
                <CardContent sx={{ p: { xs: 2.5, md: 3.5 } }}>
                  <Typography variant="h6" sx={{ fontWeight: 800 }}>Project Contact</Typography>
                  <Stack spacing={1.5} sx={{ mt: 2 }}>
                    <Box>
                      <Typography variant="caption" color="text.secondary">Organization</Typography>
                      <Typography variant="body1" sx={{ fontWeight: 700 }}>TAS Communication Services</Typography>
                    </Box>
                    <Box>
                      <Typography variant="caption" color="text.secondary">Project</Typography>
                      <Typography variant="body1" sx={{ fontWeight: 700 }}>Nexora — Enterprise Decision Intelligence System</Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
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

export default ContactPage;
