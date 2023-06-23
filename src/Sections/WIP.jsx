import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { WIPIcon } from "../MuiComponents/Icons";

export const WIP = () => {
  return (
    <Box textAlign="center">
      <Container maxWidth="md">
        <WIPIcon />
      </Container>

      <Box mt={5}>
        <Typography variant="h2">
          This page is currently in the development phase.
        </Typography>
      </Box>
    </Box>
  );
};
