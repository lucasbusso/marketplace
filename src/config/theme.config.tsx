import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React from "react";

type ThemeProp = {
  children: JSX.Element;
};

enum ThemePalette {
  primary = "#c8fa5f",
  background = "#12181b",
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
