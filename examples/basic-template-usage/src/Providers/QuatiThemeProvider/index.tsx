import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import { SizeFontSmall } from "@cpqd-quati-tokens/web/ts/tokens";
export interface QuatiThemeProviderProps {
  children: React.ReactNode;
}

// constante que cria o tema do material ui
// com base nos tokens do quati
const quatiTheme = createTheme({
  typography: {
    body1: {
      fontSize: SizeFontSmall,
    },
  },
});

export const QuatiThemeProvider: React.FC<QuatiThemeProviderProps> = ({
  children,
}) => {
  return (
    <ThemeProvider theme={quatiTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
