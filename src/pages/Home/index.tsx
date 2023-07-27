import { Button, Container } from "@mui/material";
import React from "react";
import { useNotificationContext } from "../../context/notification.context";

export const HomePage: React.FC<object> = () => {
  const { getError, getSuccess } = useNotificationContext();

  const error = () => {
    getError("hola mundo");
  };

  const success = () => {
    getSuccess("hola mundo");
  };

  return (
    <Container maxWidth="xl">
      <Button variant="contained" fullWidth onClick={error}>
        home
      </Button>
      <Button variant="contained" fullWidth onClick={success}>
        home
      </Button>
    </Container>
  );
};
