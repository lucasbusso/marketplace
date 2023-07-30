import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React from "react";

type ThemeProp = {
  children: JSX.Element;
};

enum ThemePalette {
  primary = "#45a9ff",
  background = "#3974a7",
  error = "#f44336",
  bg_error = "rgba(244, 67, 54, 0.1)",
  success = "#66bb6a",
  bg_success = "rgba(102,187,106,0.1)",
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
        standardSuccess: {
          border: `1px solid ${ThemePalette.success}`,
          background: ThemePalette.bg_success,
        },
      },
    },
    MuiAppBar: {
      defaultProps: {
        style: {
          background: "#1d4364",
        },
      },
    },
    MuiCard: {
      defaultProps: {
        style: {
          background: "#101f2d",
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
