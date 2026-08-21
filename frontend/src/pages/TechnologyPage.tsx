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

function TechnologyPage() {
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
              Technology Stack
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400, lineHeight: 1.6 }}>
              The core technologies powering Nexora's AI, backend, frontend, data processing, and machine learning platform.
            </Typography>
          </Stack>

                    <Grid container spacing={2.5}>
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
              <Grid key={name} size={{ xs: 12, sm: 6, md: 3 }}>
                <Card elevation={0} sx={{ height: "100%", border: 1, borderColor: "divider", borderRadius: 3 }}>
                  <CardContent sx={{ p: 2.5 }}>
                    <Typography variant="h6" sx={{ fontWeight: 800 }}>{name}</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 0.75 }}>{category}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Card elevation={0} sx={{ border: 1, borderColor: "divider", borderRadius: 3 }}>
            <CardContent sx={{ p: { xs: 2.5, md: 3.5 } }}>
              <Typography variant="h5" sx={{ fontWeight: 800 }}>Platform architecture</Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, lineHeight: 1.8 }}>
                The frontend is built with React, TypeScript, Vite, and Material UI. FastAPI provides the backend API layer, while Python, Pandas, NumPy, and Scikit-learn support data processing and machine learning workflows.
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

export default TechnologyPage;
