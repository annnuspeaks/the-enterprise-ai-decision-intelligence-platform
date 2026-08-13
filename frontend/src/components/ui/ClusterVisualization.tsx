import { Box, Card, CardContent, Stack, Typography } from "@mui/material";

interface ClusterData {
  cluster: number;
  count: number;
  percentage: number;
}

const clusterData: ClusterData[] = [
  {
    cluster: 0,
    count: 69743,
    percentage: 72.58,
  },
  {
    cluster: 1,
    count: 2973,
    percentage: 3.09,
  },
  {
    cluster: 2,
    count: 20488,
    percentage: 21.32,
  },
  {
    cluster: 3,
    count: 2848,
    percentage: 2.96,
  },
  {
    cluster: 4,
    count: 43,
    percentage: 0.04,
  },
  {
    cluster: 5,
    count: 1,
    percentage: 0.0,
  },
];

function ClusterVisualization() {
  return (
    <Card elevation={2}>
      <CardContent>
        <Stack spacing={3}>
          <Box>
            <Typography variant="h6" fontWeight={700}>
              Customer Cluster Distribution
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Distribution of customers across the six validated segments.
            </Typography>
          </Box>

          <Stack spacing={2}>
            {clusterData.map((item) => (
              <Box key={item.cluster}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{ mb: 0.75 }}
                >
                  <Typography variant="body2" fontWeight={600}>
                    Cluster {item.cluster}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    {item.count.toLocaleString()} customers (
                    {item.percentage.toFixed(2)}%)
                  </Typography>
                </Stack>

                <Box
                  sx={{
                    width: "100%",
                    height: 10,
                    borderRadius: 5,
                    backgroundColor: "action.hover",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    sx={{
                      width: `${Math.max(item.percentage, 0.5)}%`,
                      height: "100%",
                      borderRadius: 5,
                      backgroundColor: "primary.main",
                    }}
                  />
                </Box>
              </Box>
            ))}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default ClusterVisualization;
