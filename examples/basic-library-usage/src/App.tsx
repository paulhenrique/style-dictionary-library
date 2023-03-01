import { Container } from "@mui/material";
import QuatiTypography from "Components/Typography";
import { QuatiThemeProvider } from "Providers/QuatiThemeProvider";
import QuatiButton from "Components/Button";

export const App = () => {
  return (
    <QuatiThemeProvider>
      <Container>
        <QuatiTypography />
        <QuatiButton />
      </Container>
    </QuatiThemeProvider>
  );
};
