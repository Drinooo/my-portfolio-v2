import { Box, Card, CardActionArea, CardMedia, Grid } from "@mui/material";
import React from "react";
import { uiuxProjects } from "../assets/contents";

export const UXDesign = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {uiuxProjects.map((project, index) => (
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
