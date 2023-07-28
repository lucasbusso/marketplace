import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const NavBar: React.FC<object> = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Container
            sx={{
              maxWidth: "xl",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Container
              sx={{ maxWidth: "xl", display: "flex", alignItems: "center" }}
            >
              <Link to="/">
                <Typography
                  sx={{
                    textDecoration: "none",
                    color: "white",
                    textAnchor: "none",
                  }}
                >
                  Marketplace by Lucas{" "}
                </Typography>
              </Link>
            </Container>
            <Container
              sx={{ display: "flex", justifyContent: "right", gap: "12px" }}
            >
              <Button>
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Login
                </Link>
              </Button>
              <Button variant="contained">Register</Button>
            </Container>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
