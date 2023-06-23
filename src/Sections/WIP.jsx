import { Box, Typography } from "@mui/material";
import React from "react";
import { WIPIcon } from "../MuiComponents/Icons";

export const WIP = () => {
  return (
    <Box textAlign="center">
      <WIPIcon />
      <Box mt={5}>
        <Typography variant="h2">
          This page is currently in the development phase.
        </Typography>
        <Typography variant="h4">-Dev Aldrin</Typography>
      </Box>
    </Box>
  );
};
