import { Box, CircularProgress } from "@mui/material";
import React from "react";

export const Spinner: React.FC<object> = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 30 }}>
      <CircularProgress />
    </Box>
  );
};
