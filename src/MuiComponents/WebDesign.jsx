import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { Card, CardActionArea, CardMedia } from "@mui/material";
import { wbProjects } from "../assets/contents";

export const CustGrid = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {wbProjects.map((project, index) => (
          <Grid item xs={12} sm={4} md={4}>
            <Card
              key={index}
              sx={{
                background:
                  "linear-gradient(114.03deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%)",
                backdropFilter: "blur(20px)",
              }}
            >
              <Link to={project.path}>
                <CardActionArea target="_blank">
                  <CardMedia
                    component="img"
                    image={project.image}
                    alt={project.title}
                  />
                </CardActionArea>
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
