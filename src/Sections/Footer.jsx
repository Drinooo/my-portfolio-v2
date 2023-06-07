import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, Container, MenuItem, Typography } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const pages = ["Home", "About", "Projects", "Skills", "Contact"];

export const Footer = () => {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "32px",
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs>
            <img href="av 1.png" alt="" srcset="" />
            <img src="av 1.png" alt="" srcset="" />
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                gap: "60px",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Grid>
          <Grid item xs>
          <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <FacebookIcon />
                <InstagramIcon />
                <TwitterIcon />
                <LinkedInIcon />
              </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
