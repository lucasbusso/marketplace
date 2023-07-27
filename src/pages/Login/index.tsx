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

type LoginType = {
  username: string;
  password: string;
};

export const LoginPage: React.FC<object> = () => {
  const [loginData, setLoginData] = useState<LoginType>({
    username: "",
    password: "",
  });

  const dataLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log(loginData);
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
                required
                onChange={dataLogin}
                sx={{ mt: 2, mb: 1.5 }}
              />
              <TextField
                name="password"
                margin="normal"
                fullWidth
                label="Password"
                type="password"
                required
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
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
