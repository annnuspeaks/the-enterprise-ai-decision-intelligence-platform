import {
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";

interface DashboardCardProps {
  title: string;
  value: string | number;
  description: string;
}

function DashboardCard({
  title,
  value,
  description,
}: DashboardCardProps) {
  return (
    <Card elevation={2}>
      <CardContent>
        <Stack spacing={1}>
          <Typography
            variant="body2"
            color="text.secondary"
          >
            {title}
          </Typography>

          <Typography
            variant="h4"
            component="div"
            fontWeight={700}
          >
            {value}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
          >
            {description}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default DashboardCard;