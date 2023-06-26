import React from "react";
import { WIP } from "../Sections/WIP";
import { Box, Container, Grid, IconButton, Input, Stack } from "@mui/material";
import { ContactTypo } from "../MuiComponents/Typography";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import PlaceIcon from "@mui/icons-material/Place";
import PublicIcon from "@mui/icons-material/Public";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Email } from "@mui/icons-material";

export const ContactPage = () => {
  return (
    <>
      <Container maxWidth={"xl"}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} columns={16}>
            <Grid item xs={8}>
              <Stack spacing={5}>
                <ContactTypo variant={"h2"}>Contact Me</ContactTypo>
                <Box>
                  <EmailIcon sx={{ fontSize: 40 }} />
                  <ContactTypo variant={"h6"}>Email</ContactTypo>
                  <ContactTypo variant={"body1"}>
                    villalobosaldrin18@gmail.com
                  </ContactTypo>
                </Box>

                <Box>
                  <PhoneIcon sx={{ fontSize: 40 }} />
                  <ContactTypo variant={"h6"}>Phone</ContactTypo>
                  <ContactTypo variant={"body1"}>
                    09982115529 (Smart)
                  </ContactTypo>
                </Box>

                <Box>
                  <PublicIcon sx={{ fontSize: 40 }} />
                  <ContactTypo variant={"h6"}>Social Media</ContactTypo>
                  <Stack direction={"row"} spacing={2}>
                    <IconButton aria-label="Facebook" href="">
                      <FacebookIcon color="tertiary" sx={{ fontSize: 30 }} />
                    </IconButton>
                    <IconButton aria-label="Twitter" href="">
                      <InstagramIcon color="tertiary" sx={{ fontSize: 30 }} />
                    </IconButton>
                    <IconButton aria-label="Instagram" href="">
                      <TwitterIcon color="tertiary" sx={{ fontSize: 30 }} />
                    </IconButton>
                    <IconButton aria-label="Instagram" href="https://www.linkedin.com/in/aldrinvillalobos" target="blank">
                      <LinkedInIcon color="tertiary" sx={{ fontSize: 30 }} />
                    </IconButton>
                  </Stack>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={8}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123223.64233157509!2d120.03065244918226!3d15.172681532338636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3394299f173f92eb%3A0x3a664052e01dccdd!2sCabangan%2C%20Zambales!5e0!3m2!1sen!2sph!4v1687757029163!5m2!1sen!2sph"
                width="100%"
                height="450"
                style={{ border: 0, borderRadius: "1%" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};
