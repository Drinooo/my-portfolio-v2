import { Box, Container, Grid } from "@mui/material";
import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PublicIcon from "@mui/icons-material/Public";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { ContactTypo } from "../MuiComponents/Typography";

export const Contact = () => {
  return (
    <Container maxWidth="xl">
      <ContactTypo variant={"h2"} color={'secondary'}>Contact</ContactTypo>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={8}>
            <Box>
              <EmailIcon />
              <ContactTypo variant={"h3"}>Email</ContactTypo>
              <ContactTypo variant={"body2"}>
                villalobosaldrin18@gmail.com
              </ContactTypo>
            </Box>
            <Box>
              <PhoneIcon />
              <ContactTypo variant={"h3"}>Phone</ContactTypo>
              <ContactTypo variant={"body2"}>09982115529 (Smart)</ContactTypo>
            </Box>
            <Box>
              <LocationOnIcon />
              <ContactTypo variant={"h3"}>Location</ContactTypo>
              <ContactTypo variant={"body2"}>
                Cabangan, Zambales, Philippines
              </ContactTypo>
            </Box>
            <Box>
              <PublicIcon />
              <ContactTypo variant={"h3"}>Social Media</ContactTypo>
              <Box>
                <FacebookIcon />
                <InstagramIcon />
                <TwitterIcon />
                <LinkedInIcon />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={8}></Grid>
        </Grid>
      </Box>
    </Container>
  );
};
