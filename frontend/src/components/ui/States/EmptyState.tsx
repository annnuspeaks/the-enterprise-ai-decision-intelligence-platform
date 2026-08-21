import { Inbox } from "lucide-react";
import { Typography } from "@mui/material";

interface EmptyStateProps {
  title?: string;
  message?: string;
}

const EmptyState = ({
  title = "Nothing here yet",
  message = "There is no data available to display.",
}: EmptyStateProps) => {
  return (
    <div
      style={{
        minHeight: 220,
        width: "100%",
        padding: "40px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        textAlign: "center",
      }}
    >
      <Inbox size={28} strokeWidth={1.8} />

      <Typography variant="h6">
        {title}
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ maxWidth: 480 }}
      >
        {message}
      </Typography>
    </div>
  );
};

export default EmptyState;