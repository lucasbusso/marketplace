import { Button, Container } from "@mui/material";
import React from "react";
import { HeaderComponent } from "../../components";

export const HomePage: React.FC<object> = () => {
  return (
    <Container maxWidth="xl">
      <HeaderComponent
        title="Hola mundo"
        description="Hola mundo bienvenido a Codrr"
        element={
          <Button fullWidth variant="contained">
            Hola mundo
          </Button>
        }
      />
    </Container>
  );
};
