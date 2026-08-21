import { CircularProgress, Typography } from "@mui/material";

interface LoadingStateProps {
  message?: string;
}

const LoadingState = ({
  message = "Loading...",
}: LoadingStateProps) => {
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
        gap: "12px",
        textAlign: "center",
      }}
    >
      <CircularProgress size={30} />

      <Typography variant="body2" color="text.secondary">
        {message}
      </Typography>
    </div>
  );
};

export default LoadingState;