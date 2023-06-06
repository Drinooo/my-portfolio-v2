import { ThemeProvider, Typography } from "@mui/material";
import React from "react";
import { theme } from "./ThemeProvider";

export const HeroTypo = ({ variant, children, color }) => {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant={variant} color={color} sx={{ textAlign: "center" }}>{children}</Typography>
    </ThemeProvider>
  );
};

export const AboutTypo = ({ variant, children, color }) => {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant={variant} color={color}>{children}</Typography>
    </ThemeProvider>
  );
};

export const WorkTypo = ({ variant, children, color }) => {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant={variant} color={color} sx={{ textAlign: "center" }}>{children}</Typography>
    </ThemeProvider>
  );
};

export const SkillsTypo = ({ variant, children, color }) => {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant={variant} color={color} sx={{ textAlign: "center" }}>{children}</Typography>
    </ThemeProvider>
  );
};

export const ToolsTypo = ({ variant, children, color }) => {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant={variant} color={color} sx={{ textAlign: "center" }}>{children}</Typography>
    </ThemeProvider>
  );
};

export const ContactTypo = ({ variant, children, color }) => {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant={variant} color={color}>{children}</Typography>
    </ThemeProvider>
  );
};