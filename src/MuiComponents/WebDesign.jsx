import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { ProjectsTypo } from "./Typography";

const projects = [
  {
    title: "Hypeburger",
    image: "TB_Hypeburger.png",
    description: "Web Design, Landing Page",
  },
  {
    title: "Superare",
    image: "TB_Superare.png",
    description: "Landing Page",
  },
  {
    title: "Recozy ",
    image: "TB_Recozy.png",
    description: "Landing Page",
  },
  {
    title: "Numa",
    image: "TB_Numa.png",
    description: "Landing Page",
  },
  {
    title: "Happy Wally",
    image: "TB_HappyWally.png",
    description: "Landing Page",
  },
  {
    title: "Socal Ponds",
    image: "TB_SocalPonds.png",
    description: "Landing Page",
  },
  {
    title: "Montrose Search and Rescue",
    image: "TB_MSAR.png",
    description: "Landing Page",
  },
  {
    title: "Platter n Boe",
    image: "TB_PNB.png",
    description: "Landing Page",
  },
];

export const CustGrid = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {projects.map((project, index) => (
          <Grid item xs={2} sm={4} md={4}>
            <Card
              key={index}
              sx={{
                background:
                  "linear-gradient(114.03deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%)",
                backdropFilter: "blur(20px)",
              }}
            >
              <CardActionArea>
              <CardMedia
                component="img"
                image={project.image}
                alt={project.title}
              />
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
