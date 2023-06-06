import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { HeroTypo } from "../MuiComponents/Typography";
import { CustButton1 } from "../MuiComponents/Button";

export const Hero = () => {
  return (
    <>
      <Container maxWidth="xl"
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundImage: `url(http://localhost:5173/Hero%20Section.png)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems: 'center', gap: '30px' }}>
          <HeroTypo variant={"h1"}>Hey There, I'm</HeroTypo>
          <HeroTypo variant={"h1"} color={'secondary'}>Aldrin Villalobos</HeroTypo>
          <CustButton1 variant={"contained"} />
        </Box>
        <img src="src/assets/Hero Image.png" alt="" />
      </Container>
    </>
  );
};
