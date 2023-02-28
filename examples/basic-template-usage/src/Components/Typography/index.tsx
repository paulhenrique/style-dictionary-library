import { Box, Typography, TypographyProps } from "@mui/material";
import React from "react";

// array que contém todas as variações de tipografia do material ui
const materialUITypographyVariations: TypographyProps["variant"][] = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "subtitle1",
  "subtitle2",
  "body1",
  "body2",
  "caption",
  "button",
];

// componente que renderiza todas as variações de tipografia do material ui
const QuatiTypography = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      {materialUITypographyVariations.map((typographyVariation) => (
        <Typography key={typographyVariation} variant={typographyVariation}>
          {typographyVariation}
        </Typography>
      ))}
    </Box>
  );
};

export default QuatiTypography;
