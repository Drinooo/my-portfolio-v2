import React from "react";
import { Box, Container, Paper, Stack, styled } from "@mui/material";
import { hypeburger, recozy } from "../assets/contents";
import { ProjectsTypo } from "../MuiComponents/Typography";

export const Hypeburger = () => {
  return (
    <Container maxWidth="xl" sx={{ textAlign: "center", paddingTop: "100px" }}>
      <Box sx={{ paddingBottom: "100px" }}>
        <ProjectsTypo variant="h1">Hypeburger Landing Page</ProjectsTypo>
      </Box>

      <Box>
        <Stack spacing={4}>
          {hypeburger.map((item) => (
            <Paper sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
              <img src={item.img} style={{ width: "100%" }} alt="" />
            </Paper>
          ))}
        </Stack>
      </Box>
      <Box sx={{ paddingBottom: "150px", paddingTop: "20px" }}>
        <ProjectsTypo variant="body1">
          This landing page is also developed using React JS and
          material-tailwind. You can check{" "}
          <a href="#">
            <span color="primary">here</span>
          </a>{" "}
          for the live site.
        </ProjectsTypo>
      </Box>
    </Container>
  );
};
