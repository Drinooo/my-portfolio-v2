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
        <Stack spacing={5} mb={7}>
          <CTATypo variant={"caption"}>
            Do you have a project idea in mind?
          </CTATypo>
          <CTATypo variant={"h2"}>
            Ready to stand out in the digital world? Let's craft your unique
            online presence!
          </CTATypo>
        </Stack>
        <CTABtn variant="contained" color="primary" size="large" />
      </Container>
    </Box>
  );
};

export default CTA;
