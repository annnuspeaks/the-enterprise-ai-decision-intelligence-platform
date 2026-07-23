import { Box, Button, Container, Typography } from "@mui/material";

function App() {
  return (
    <Container maxWidth="md">
      <Box sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h3" gutterBottom>
          Enterprise AI Decision Intelligence Platform
        </Typography>

        <Typography variant="body1" sx={{ mb: 4 }}>
          Material UI has been configured successfully.
        </Typography>

        <Button variant="contained">
          Get Started
        </Button>
      </Box>
    </Container>
  );
}

export default App;