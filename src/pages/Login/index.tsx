import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNotificationContext } from "../../context/notification.context";
import { LoginValidator } from "../../utils/validateForm";
import { Link } from "react-router-dom";

type LoginType = {
  username: string;
  password: string;
};

export const LoginPage: React.FC<object> = () => {
  const [loginData, setLoginData] = useState<LoginType>({
    username: "",
    password: "",
  });

  const { getError, getSuccess } = useNotificationContext();

  const dataLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    LoginValidator.validate(loginData)
      .then(() => {
        getSuccess(JSON.stringify(loginData));
      })
      .catch((error) => {
        getError(error.message);
      });
    getSuccess(JSON.stringify(loginData));
  };

  return (
    <Container maxWidth="sm">
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh" }}
      >
        <Grid item>
          <Paper sx={{ padding: "1.2em", borderRadius: "10px" }}>
            <Typography variant="h4" sx={{ mt: 1, mb: 1 }}>
              Iniciar sesion
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                name="username"
                margin="normal"
                fullWidth
                label="Email"
                type="text"
                onChange={dataLogin}
                sx={{ mt: 2, mb: 1.5 }}
              />
              <TextField
                name="password"
                margin="normal"
                fullWidth
                label="Password"
                type="password"
                onChange={dataLogin}
                sx={{ mt: 1.5, mb: 1.5 }}
              />
              <Button
                fullWidth
                variant="contained"
                type="submit"
                sx={{ mt: 1.5, mb: 3 }}
              >
                Iniciar sesion
              </Button>
              <Link to="/">
                <Button fullWidth variant="outlined" type="button">
                  Home
                </Button>
              </Link>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
