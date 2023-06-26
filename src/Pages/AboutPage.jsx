import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { WIPIcon } from "../MuiComponents/Icons";
import { WIP } from "../Sections/WIP";
import { AboutTypo } from "../MuiComponents/Typography";
import { CustButton } from "../MuiComponents/Button";
import { Tools } from "../Sections/Tools";
import { Clients } from "../Sections/Clients";

export const AboutPage = () => {
  return (
    // <WIP />
    <>
      <Container maxWidth={"xl"}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            sx={{
              alignItems: "center",
            }}
          >
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
              <AboutTypo variant={"h1"}>About Me</AboutTypo>
              <AboutTypo>
                Hi, I am Aldrin Villalobos. I'm a web designer based in the
                Philippines. I'm passionate about crafting visually appealing
                and user-friendly websites. With a strong foundation in design
                principles, I'm eager to bring fresh perspectives to each
                project I undertake. My goal is to create engaging web
                experiences that seamlessly blend aesthetics with functionality.
                Let's collaborate to bring your vision to life and create an
                impactful online presence. With a year's worth of expertise in
                design and front end development, I've shared my successes with
                large and small firms, startups, businesses, and local and
                worldwide public figures. Along with working on projects for
                clients, I share my projects frequently on Instagram.
              </AboutTypo>
              <CustButton variant={"contained"} />
            </Grid>
            <Grid item xs={12} sm={8} md={6}>
              <img
                href="about image.png"
                style={{ maxWidth: "100%", height: "auto" }}
              />
              <img
                src="about image.png"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Clients />
      <Tools />
    </>
  );
};
