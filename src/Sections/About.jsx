import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { AboutTypo } from "../MuiComponents/Typography";
import { CustButton } from "../MuiComponents/Button";

export const About = () => {
  return (
    <Container maxWidth='xl'>
      <Box 
        sx={{ 
          flexGrow: 1, 
        }}>
        <Grid container columns={16} 
          sx={{ 
            display: "flex", 
            flexDirection: "row", 
            alignItems: "center"  
          }}>
          <Grid item xs={8}>
            <img src="src/assets/About Image.png" alt="" />
          </Grid>
          <Grid item xs={8} 
            sx={{ 
              display: 'flex', 
              flexDirection: "column", 
              alignItems: "flex-start", 
              gap: '30px' 
            }}>
            <AboutTypo variant={'h2'} color={'secondary'}>About</AboutTypo>
            <AboutTypo variant={'body1'}>Hi there! I'm a web designer based in the Philippines. I'm passionate about crafting visually appealing and user-friendly websites. With a strong foundation in design principles, I'm eager to bring fresh perspectives to each project I undertake. My goal is to create engaging web experiences that seamlessly blend aesthetics with functionality. Let's collaborate to bring your vision to life and create an impactful online presence.</AboutTypo>
            <CustButton variant={'contained'} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
