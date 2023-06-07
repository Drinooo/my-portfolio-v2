import { Box, Container, Grid, Stack } from "@mui/material";
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
      <Stack gap={'60px'}>
      <ContactTypo variant={"h2"} color={"secondary"}>
        Contact Me
      </ContactTypo>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columns={16}>
          <Grid item xs>
            <Box>
              <Grid container columns={16} sx={{ 
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "40px",
             }}>
                <Grid item xs={8}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "16px",
                    }}
                  >
                    <EmailIcon />
                    <ContactTypo variant={"h3"}>Email</ContactTypo>
                    <ContactTypo variant={"body2"}>
                      villalobosaldrin18@gmail.com
                    </ContactTypo>
                  </Box>
                </Grid>

                <Grid item xs={8}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "16px",
                    }}
                  >
                    <PhoneIcon />
                    <ContactTypo variant={"h3"}>Phone</ContactTypo>
                    <ContactTypo variant={"body2"}>
                      09982115529 (Smart)
                    </ContactTypo>
                  </Box>
                </Grid>

                <Grid item xs={8}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "16px",
                    }}
                  >
                    <LocationOnIcon />
                    <ContactTypo variant={"h3"}>Location</ContactTypo>
                    <ContactTypo variant={"body2"}>
                      Cabangan, Zambales, Philippines
                    </ContactTypo>
                  </Box>
                </Grid>

                <Grid item xs={8}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "16px",
                    }}
                  >
                    <PublicIcon />
                    <ContactTypo variant={"h3"}>Social Media</ContactTypo>
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
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={10}>
            <Box>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5470.632420533863!2d120.05265407635353!3d15.158108163181932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33942de3dd777aa7%3A0xf179fdfd8acdc8aa!2sCabangan%20Zambales!5e1!3m2!1sen!2sph!4v1686123098664!5m2!1sen!2sph"
                width="100%"
                height="550"
                style={{ border: 0, borderRadius: "20px" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </Box>
          </Grid>
        </Grid>
      </Box>
      </Stack>
    </Container>
  );
};
