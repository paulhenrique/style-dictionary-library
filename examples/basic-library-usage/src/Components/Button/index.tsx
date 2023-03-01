import React from "react";
import { Button, ButtonGroup, makeStyles } from "@mui/material";

const QuatiButton = () => {
  return (
    <ButtonGroup
      variant="contained"
      color="primary"
      aria-label="contained primary button group"
    >
      <Button>Default</Button>

      <Button color="primary">Primary</Button>

      <Button color="secondary">Secondary</Button>

      <Button disabled>Disabled</Button>

      <Button href="#contained-buttons">Link</Button>
    </ButtonGroup>
  );
};
export default QuatiButton;
