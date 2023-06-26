import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { AboutTypo } from "../MuiComponents/Typography";

export const Clients = () => {
  return (
    <Box sx={{ borderTop: "2px solid white", paddingTop: "150px" }}>
      <Container maxWidth={"xl"}>
        <AboutTypo variant={"h4"}>CLIENTS I'VE WORKED WITH</AboutTypo>
        <Box sx={{ flexGrow: 1, mt: 5 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 2 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            sx={{
              alignItems: "center",
            }}
          >
            <Grid item xs={12} sm={8} md={3}>
              <AboutTypo variant={"body1"}>NMS Recruitment</AboutTypo>
            </Grid>
            <Grid item xs={12} sm={8} md={3}>
              <AboutTypo variant={"body1"}>Share My Circle</AboutTypo>
            </Grid>
            <Grid item xs={12} sm={8} md={3}>
              <AboutTypo variant={"body1"}>TribeTXT</AboutTypo>
            </Grid>
            <Grid item xs={12} sm={8} md={3}>
              <AboutTypo variant={"body1"}>Her Erotic Story</AboutTypo>
            </Grid>
            <Grid item xs={12} sm={8} md={3}>
              <AboutTypo variant={"body1"}>My Allied Health Academy</AboutTypo>
            </Grid>
            <Grid item xs={12} sm={8} md={3}>
              <AboutTypo variant={"body1"}>Numa Behaviour Health</AboutTypo>
            </Grid>
            <Grid item xs={12} sm={8} md={3}>
              <AboutTypo variant={"body1"}>
                Montrose Search and Rescue
              </AboutTypo>
            </Grid>
            <Grid item xs={12} sm={8} md={3}>
              <AboutTypo variant={"body1"}>Go Ahead Eagles</AboutTypo>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};
