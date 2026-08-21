import { AlertCircle } from "lucide-react";
import { Typography } from "@mui/material";

interface ErrorStateProps {
  title?: string;
  message?: string;
}

const ErrorState = ({
  title = "Something went wrong",
  message = "We couldn't load this information. Please try again.",
}: ErrorStateProps) => {
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
      <AlertCircle size={30} strokeWidth={1.8} />

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

export default ErrorState;