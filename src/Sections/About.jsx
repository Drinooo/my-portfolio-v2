import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { AboutTypo } from "../MuiComponents/Typography";
import { CustButton } from "../MuiComponents/Button";

export const About = () => {
  return (
    <Box sx={{ borderTop: "2px solid white", pt: "150px", pb: "150px" }}>
      <Container maxWidth="xl">
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            sx={{
              alignItems: "center",
            }}
          >
            <Grid item xs={12} sm={8} md={6}>
              <img
                href="img1.png"
                style={{ maxWidth: "100%", height: "auto", borderRadius: "10%" }}
              />
              <img
                src="img1.png"
                style={{ maxWidth: "100%", height: "auto", borderRadius: "3%" }}
              />
            </Grid>
            <Grid
              item
              xs
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "30px",
              }}
            >
              <AboutTypo variant={"h2"} color={"secondary"}>
                About
              </AboutTypo>
              <AboutTypo variant={"body1"}>
                Hi there! I'm a web designer based in the Philippines. I'm
                passionate about crafting visually appealing and user-friendly
                websites. With a strong foundation in design principles, I'm
                eager to bring fresh perspectives to each project I undertake.
                My goal is to create engaging web experiences that seamlessly
                blend aesthetics with functionality. Let's collaborate to bring
                your vision to life and create an impactful online presence.
              </AboutTypo>
              <CustButton variant={"contained"} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};
