import {
  ArrowRight,
  BarChart3,
  Eye,
  ShoppingCart,
  Sparkles,
  Target,
  Timer,
  Users,
} from "lucide-react";
import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import heroArtwork from "../local_assets/purchase-propensity-hero.png";
import "./PurchasePropensityPage.css";

const inputs = [
  {
    icon: ShoppingCart,
    title: "Product engagement",
    text: "Product-page visits and time spent exploring products.",
  },
  {
    icon: Eye,
    title: "Browsing behaviour",
    text: "Bounce rate, exit rate and informational-page activity.",
  },
  {
    icon: Timer,
    title: "Visit context",
    text: "Month, weekend activity and visitor type.",
  },
  {
    icon: Users,
    title: "Session context",
    text: "Traffic source, browser, region and operating system.",
  },
];
const steps = [
  {
    n: "01",
    title: "Describe the session",
    text: "Enter the visitor's session and browsing signals.",
  },
  {
    n: "02",
    title: "Estimate intent",
    text: "The trained model estimates purchase likelihood.",
  },
  {
    n: "03",
    title: "Act on the signal",
    text: "Use the result to guide timely, relevant engagement.",
  },
];
function PurchasePropensityPage() {
  return (
    <Box component="main" className="pp-page">
      <section className="pp-hero">
        <Container maxWidth="xl">
          <Grid container spacing={{ xs: 3, md: 5 }} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={2} className="pp-hero__copy">
                <Chip
                  icon={<Sparkles size={15} />}
                  label="MODEL 04 / PURCHASE PROPENSITY"
                  variant="outlined"
                  className="pp-eyebrow"
                />
                <Typography component="h1" variant="h1" className="pp-title">
                  Predict purchase <span>intent.</span>
                </Typography>
                <Typography variant="h5" className="pp-subtitle">
                  Understand which browsing sessions are more likely to convert.
                </Typography>
                <Typography color="text.secondary" className="pp-description">
                  Nexora analyses session behaviour and visit context to
                  estimate the likelihood of a customer making a
                  purchase—helping teams prioritise relevant engagement.
                </Typography>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={1.5}
                  className="pp-actions"
                >
                  <Button
                    component={Link}
                    to="/purchase-propensity/predict"
                    variant="contained"
                    size="large"
                    endIcon={<ArrowRight size={18} />}
                  >
                    Start Prediction
                  </Button>
                  <Button
                    component="a"
                    href="#signals"
                    variant="outlined"
                    size="large"
                  >
                    Explore signals
                  </Button>
                </Stack>
                <Stack direction="row" useFlexGap flexWrap="wrap" spacing={1}>
                  <Chip
                    size="small"
                    icon={<Target size={14} />}
                    label="Probability-based"
                  />
                  <Chip
                    size="small"
                    icon={<BarChart3 size={14} />}
                    label="Session analytics"
                  />
                </Stack>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box className="pp-hero__visual">
                <div className="pp-hero__glow" />
                <img
                  src={heroArtwork}
                  alt="Purchase propensity illustration with shopping activity and probability gauge"
                  className="pp-hero__artwork"
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className="pp-trust">
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            {[
              { big: "ML", small: "Session intelligence" },
              { big: "0–1", small: "Purchase probability" },
              { big: "40%", small: "Decision threshold" },
            ].map((x) => (
              <Grid key={x.small} size={{ xs: 12, sm: 4 }}>
                <div className="pp-trust__item">
                  <strong>{x.big}</strong>
                  <span>{x.small}</span>
                </div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>
      <section className="pp-section" id="signals">
        <Container maxWidth="xl">
          <div className="pp-heading">
            <Typography variant="overline" color="primary">
              WHAT THE MODEL CONSIDERS
            </Typography>
            <Typography variant="h2">Signals behind the prediction</Typography>
            <Typography color="text.secondary">
              A compact view of the session information used by the model.
            </Typography>
          </div>
          <Grid container spacing={2.5} sx={{ mt: 1 }}>
            {inputs.map(({ icon: Icon, title, text }) => (
              <Grid key={title} size={{ xs: 12, sm: 6, md: 3 }}>
                <Paper elevation={0} className="pp-card">
                  <div className="pp-card__icon">
                    <Icon size={23} />
                  </div>
                  <Typography variant="h6">{title}</Typography>
                  <Typography color="text.secondary">{text}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>
      <section className="pp-section pp-section--soft">
        <Container maxWidth="xl">
          <div className="pp-heading">
            <Typography variant="overline" color="primary">
              HOW IT WORKS
            </Typography>
            <Typography variant="h2">From session to signal</Typography>
          </div>
          <Grid container spacing={2.5} sx={{ mt: 1 }}>
            {steps.map((s) => (
              <Grid key={s.n} size={{ xs: 12, md: 4 }}>
                <Paper elevation={0} className="pp-step">
                  <span>{s.n}</span>
                  <Typography variant="h6">{s.title}</Typography>
                  <Typography color="text.secondary">{s.text}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
          <Box className="pp-bottom-cta">
            <Stack spacing={1}>
              <Typography variant="h4">
                Ready to estimate purchase intent?
              </Typography>
              <Typography color="text.secondary">
                Enter the session signals and review the prediction.
              </Typography>
            </Stack>
            <Button
              component={Link}
              to="/purchase-propensity/predict"
              variant="contained"
              size="large"
              endIcon={<ArrowRight size={18} />}
            >
              Predict Purchase Propensity
            </Button>
          </Box>
        </Container>
      </section>
    </Box>
  );
}
export default PurchasePropensityPage;
