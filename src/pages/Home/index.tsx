import { Button, Container } from "@mui/material";
import React from "react";

export const HomePage: React.FC<object> = () => {
  return (
    <Container maxWidth="xl">
      <Button variant="contained" fullWidth>
        home
      </Button>
      <Button variant="contained" fullWidth>
        home
      </Button>
    </Container>
  );
};
