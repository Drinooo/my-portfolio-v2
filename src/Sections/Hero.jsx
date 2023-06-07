import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { HeroTypo } from "../MuiComponents/Typography";
import Typewriter from "typewriter-effect";

export const Hero = () => {
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundImage: `url(Hero%20Section.png)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "30px",
          }}
        >
          <HeroTypo variant={"h1"}>Hey There,</HeroTypo>
          <HeroTypo variant={"h1"}>
            <span>I'm </span>
            <span style={{ color: "#D6412B" }}>Aldrin Villalobos</span>
          </HeroTypo>
          <Paper
            sx={{
              padding: "20px 50px",
              borderRadius: "10px",
            }}
          >
            <HeroTypo variant={"h5"} color={"black"}>
              <Typewriter
                options={{
                  strings: ['Web Designer', 'UI/UX Designer', 'Front End Developer'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </HeroTypo>
          </Paper>
        </Box>
        <img href="hero image.png" alt="" srcset="" />
        <img src="hero image.png" alt="" srcset="" />
      </Container>
    </>
  );
};
