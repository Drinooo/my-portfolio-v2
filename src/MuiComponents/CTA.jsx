import { Box, Button, Container, Stack } from "@mui/material";
import React from "react";
import { CTATypo } from "./Typography";
import { CTABtn } from "./Button";

const CTA = () => {
  return (
    <Box
      sx={{
        padding: "80px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Container maxWidth="xl">
        <Stack>
          <CTATypo variant={"caption"}>Have a project in mind?</CTATypo>
          <CTATypo variant={"h2"}>
            You’re one step closer to making an outstanding brand!
          </CTATypo>
        </Stack>
        <CTABtn variant="contained" color="primary" size="large">
          Sign Up
        </CTABtn>
      </Container>
    </Box>
  );
};

export default CTA;