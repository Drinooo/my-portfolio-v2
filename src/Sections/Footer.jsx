import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, Container, Link, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { FooterTypo, WorkTypo } from "../MuiComponents/Typography";

const pages = ["Home", "About", "Projects", "Skills", "Contact"];

export const Footer = () => {
  return (
    <footer style={{ color: "#fff", padding: "20px 0" }}>
      <Container maxWidth="xl">
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={6} md={4}>
            <img href="av 1.png" alt="" srcset="" />
            <img src="av 1.png" alt="" srcset="" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: "60px",
              }}
              align="center"
            >
              <Link href="https://example.com" color="inherit" underline="none">
                <WorkTypo variant={'button'}>Home</WorkTypo>
              </Link>
              <Link href="https://example.com/about" color="inherit" underline="none">
              <WorkTypo variant={'button'}>About</WorkTypo>
              </Link>
              <Link href="https://example.com/about" color="inherit" underline="none">
              <WorkTypo variant={'button'}>Projects</WorkTypo>
              </Link>
              <Link href="https://example.com/about" color="inherit" underline="none">
              <WorkTypo variant={'button'}>Skills</WorkTypo>
              </Link>
              <Link href="https://example.com/contact" color="inherit" underline="none">
              <WorkTypo variant={'button'}>Contact</WorkTypo>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              align="center"
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <Link
                href="https://www.instagram.com/yourprofile"
                color="inherit"
              >
                <FacebookIcon />
              </Link>
              <Link href="https://www.twitter.com/yourprofile" color="inherit">
                <InstagramIcon />
              </Link>
              <Link href="https://www.facebook.com/yourprofile" color="inherit">
                <TwitterIcon />
              </Link>
              <Link href="https://www.facebook.com/yourprofile" color="inherit">
                <LinkedInIcon />
              </Link>
            </Box>
          </Grid>
        </Grid>
        <hr style={{ borderColor: "#fff", margin: "20px 0" }} />
        <Typography variant="body2" align="center">
          {"© "}
          {new Date().getFullYear()}{" "}
          <Link href="https://example.com" color="inherit">
            Aldrin Villalobos
          </Link>
        </Typography>
      </Container>
    </footer>
  );
};
