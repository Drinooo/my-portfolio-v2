import { Box, Container, Stack } from "@mui/material";
import React from "react";
import { WorkTypo } from "../MuiComponents/Typography";
import { CustTimeline } from "../MuiComponents/Timeline";

export const Work = () => {
  return (
    <Box sx={{ borderTop: "2px solid white", paddingTop: "150px", paddingBottom: "150px" }}>
      <Container maxWidth="xl">
        <Stack gap={"60px"} alignItems={"center"}>
          <WorkTypo variant={"h2"}>
            <span>My </span>
            <span style={{ color: "#D6412B" }}>Work Experience</span>
          </WorkTypo>
          <CustTimeline />
        </Stack>
      </Container>
    </Box>
  );
};
