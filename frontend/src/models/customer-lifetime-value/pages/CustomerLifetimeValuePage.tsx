import {
  ArrowDownRight,
  ArrowRight,
  BarChart3,
  CalendarClock,
  Coins,
  Database,
  Gauge,
  ShoppingBag,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import clvHeroArtwork from "../local_assets/customer-lifetime-value-hero.png";
import "./CustomerLifetimeValuePage.css";

const valueSignals = [
  {
    icon: ShoppingBag,
    title: "Purchase history",
    description:
      "Summarise observed invoice activity, purchase value, quantity, and product-line diversity.",
  },
  {
    icon: CalendarClock,
    title: "Customer recency",
    description:
      "Use recency, customer tenure, and the observed purchase interval to describe purchase timing.",
  },
  {
    icon: TrendingUp,
    title: "Future value estimate",
    description:
      "Estimate gross purchase value over the defined one-year prediction window.",
  },
  {
    icon: BarChart3,
    title: "Decision support",
    description:
      "Turn model output into a clear value estimate that can support customer analysis.",
  },
];

const workflow = [
  {
    number: "01",
    title: "Describe the customer",
    description:
      "Provide the nine customer-level features calculated from the observation window.",
  },
  {
    number: "02",
    title: "Estimate future purchase value",
    description:
      "The trained Random Forest pipeline processes the feature profile and generates an estimate.",
  },
  {
    number: "03",
    title: "Review the result",
    description:
      "Read the predicted future gross purchase value with its fixed one-year target definition.",
  },
];

const featureGroups = [
  {
    icon: Database,
    title: "Purchase activity",
    items: ["Invoice count", "Total purchase value", "Average & median invoice value"],
  },
  {
    icon: ShoppingBag,
    title: "Product activity",
    items: ["Total quantity", "Distinct product-line count"],
  },
  {
    icon: CalendarClock,
    title: "Customer timing",
    items: ["Recency in days", "Customer tenure", "Average days between purchases"],
  },
];

function CustomerLifetimeValuePage() {
  return (
    <Box component="main" className="customer-lifetime-value-page">
      <section className="clv-hero">
        <Container maxWidth="xl">
          <Grid container spacing={{ xs: 3, md: 4 }} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={1.5} className="clv-hero__content">
                <Chip
                  icon={<Sparkles size={15} />}
                  label="MODEL 03 / CUSTOMER LIFETIME VALUE"
                  variant="outlined"
                  className="clv-hero__eyebrow"
                />
                <Typography component="h1" variant="h1" className="clv-hero__title clv-gradient-title">
                  Customer Lifetime <span>Value Prediction</span>
                </Typography>
                <Typography component="p" variant="h5" className="clv-hero__subtitle">
                  Understand the future purchase value a customer may contribute.
                </Typography>
                <Typography component="p" variant="body1" color="text.secondary" className="clv-hero__description">
                  Nexora uses observed purchasing behaviour to estimate a customer’s gross purchase value over a defined one-year future window—turning historical activity into a forward-looking value signal.
                </Typography>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} className="clv-hero__actions">
                  <Button
                    href="/customer-lifetime-value/predict"
                    variant="contained"
                    size="large"
                    endIcon={<ArrowRight size={18} />}
                  >
                    Start Prediction
                  </Button>
                  <Button href="#how-it-works" variant="outlined" size="large" endIcon={<ArrowDownRight size={18} />}>
                    Explore workflow
                  </Button>
                </Stack>
                <Stack direction="row" useFlexGap flexWrap="wrap" spacing={1} className="clv-hero__badges">
                  <Chip size="small" icon={<Gauge size={14} />} label="Random Forest" />
                  <Chip size="small" icon={<CalendarClock size={14} />} label="Fixed 1-year horizon" />
                  <Chip size="small" icon={<Target size={14} />} label="Prediction-ready API" />
                </Stack>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box className="clv-hero__visual">
                <div className="clv-hero__glow" />
                <img
                  src={clvHeroArtwork}
                  alt="Illustration of customer analytics, purchase activity, and a customer lifetime value estimate"
                  className="clv-hero__artwork"
                />
                <Box className="clv-hero__visual-caption">
                  <Coins size={17} />
                  <span>Observed behaviour <b>→</b> Future purchase value</span>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className="clv-trust-strip" aria-label="Model summary">
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Box className="clv-trust-item"><Users size={21} /><div><strong>Customer-level</strong><span>Individual feature profile</span></div></Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Box className="clv-trust-item"><CalendarClock size={21} /><div><strong>One-year horizon</strong><span>Defined future period</span></div></Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Box className="clv-trust-item"><BarChart3 size={21} /><div><strong>Business-readable</strong><span>Gross purchase value estimate</span></div></Box>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className="clv-section" id="capabilities">
        <Container maxWidth="xl">
          <Stack spacing={1.3} className="clv-section__heading">
            <Typography variant="overline" color="primary">WHAT THE MODEL HELPS WITH</Typography>
            <Typography variant="h2" component="h2">A clearer view of customer value.</Typography>
            <Typography variant="body1" color="text.secondary">
              Bring together purchasing activity and customer timing to estimate future gross purchase value across a consistent prediction horizon.
            </Typography>
          </Stack>
          <Grid container spacing={2.5} sx={{ mt: 2 }}>
            {valueSignals.map((signal) => {
              const Icon = signal.icon;
              return (
                <Grid key={signal.title} size={{ xs: 12, sm: 6, lg: 3 }}>
                  <Box className="clv-feature-card">
                    <Box className="clv-feature-card__icon"><Icon size={22} strokeWidth={1.8} /></Box>
                    <Typography variant="h6" component="h3">{signal.title}</Typography>
                    <Typography variant="body2" color="text.secondary">{signal.description}</Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </section>

      <section className="clv-section clv-section--soft" id="how-it-works">
        <Container maxWidth="xl">
          <Stack spacing={1.3} className="clv-section__heading">
            <Typography variant="overline" color="primary">THE WORKFLOW</Typography>
            <Typography variant="h2" component="h2">From customer signals to a value estimate.</Typography>
            <Typography variant="body1" color="text.secondary">A focused, three-step workflow designed around the current CLV prediction API.</Typography>
          </Stack>
          <Grid container spacing={2.5} sx={{ mt: 2 }}>
            {workflow.map((step) => (
              <Grid key={step.number} size={{ xs: 12, md: 4 }}>
                <Box className="clv-step-card">
                  <span className="clv-step-card__number">{step.number}</span>
                  <Typography variant="h5" component="h3">{step.title}</Typography>
                  <Typography variant="body2" color="text.secondary">{step.description}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>

      <section className="clv-section" id="model-inputs">
        <Container maxWidth="xl">
          <Stack spacing={1.3} className="clv-section__heading">
            <Typography variant="overline" color="primary">MODEL INPUTS</Typography>
            <Typography variant="h2" component="h2">Nine features. Three signal groups.</Typography>
            <Typography variant="body1" color="text.secondary">
              The model uses aggregated customer features from the observation window. The prediction is based on these values, not on personally identifying customer details.
            </Typography>
          </Stack>
          <Grid container spacing={2.5} sx={{ mt: 2 }}>
            {featureGroups.map((group) => {
              const Icon = group.icon;
              return (
                <Grid key={group.title} size={{ xs: 12, md: 4 }}>
                  <Box className="clv-input-card">
                    <Box className="clv-input-card__heading"><Icon size={21} /><Typography variant="h6" component="h3">{group.title}</Typography></Box>
                    <Stack spacing={1.1}>
                      {group.items.map((item) => <Box key={item} className="clv-input-card__item"><span />{item}</Box>)}
                    </Stack>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
          <Box className="clv-definition-note">
            <Box className="clv-definition-note__icon"><Sparkles size={20} /></Box>
            <div>
              <Typography variant="subtitle1" component="h3">A precise definition matters</Typography>
              <Typography variant="body2" color="text.secondary">
                This model predicts fixed one-year future gross purchase value. It is not a direct estimate of profit, margin, or a customer’s entire lifetime value. Actual future spending may differ from the prediction.
              </Typography>
            </div>
          </Box>
        </Container>
      </section>

      <section className="clv-bottom-cta">
        <Container maxWidth="xl">
          <Box className="clv-bottom-cta__inner">
            <Box>
              <Typography variant="overline" color="primary">NEXORA · MODEL 03</Typography>
              <Typography variant="h2" component="h2">Ready to explore customer value?</Typography>
              <Typography variant="body1" color="text.secondary">
                Use the customer feature profile to estimate gross purchase value over the defined one-year prediction window.
              </Typography>
            </Box>
            <Button
              href="/customer-lifetime-value/predict"
              variant="contained"
              size="large"
              endIcon={<ArrowRight size={18} />}
            >
              Start Prediction
            </Button>
          </Box>
        </Container>
      </section>
    </Box>
  );
}

export default CustomerLifetimeValuePage;
