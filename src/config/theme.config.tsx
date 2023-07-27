import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React from "react";

type ThemeProp = {
  children: JSX.Element;
};

enum ThemePalette {
  primary = "#c8fa5f",
  background = "#12181b",
  error = "#f44336",
  bg_error = "rgba(244, 67, 54, 0.1)",
}

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: ThemePalette.background,
    },
    primary: {
      main: ThemePalette.primary,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        style: {
          textTransform: "none",
          boxShadow: "none",
        },
      },
    },
    MuiAlert: {
      defaultProps: {
        style: {
          borderRadius: "0.5em",
          fontSize: "1em",
        },
      },
      styleOverrides: {
        standardError: {
          border: `1px solid ${ThemePalette.error}`,
          background: ThemePalette.bg_error,
        },
      },
    },
  },
});

export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
