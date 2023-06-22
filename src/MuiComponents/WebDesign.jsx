import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { ProjectsTypo } from "./Typography";
import { Superare } from "../Pages/Superare";
import { Link, Route, Routes } from "react-router-dom";

const projects = [
  {
    title: "Hypeburger",
    image: "TB_Hypeburger.png",
    description: "Web Design, Landing Page",
    projectLink: <Superare />,
    path: "/hypeburger",
  },
  {
    title: "Superare",
    image: "TB_Superare.png",
    description: "Landing Page",
    projectLink: <Superare />,
    path: "/superare",
  },
  {
    title: "Recozy ",
    image: "TB_Recozy.png",
    description: "Landing Page",
    projectLink: <Superare />,
    path: "/recozy",
  },
  {
    title: "Numa",
    image: "TB_Numa.png",
    description: "Landing Page",
    projectLink: <Superare />,
    path: "/numa",
    href: "https://numarecoverycenters.com/"
  },
  {
    title: "Happy Wally",
    image: "TB_HappyWally.png",
    description: "Landing Page",
    projectLink: <Superare />,
    path: "/happywally",
  },
  {
    title: "Socal Ponds",
    image: "TB_SocalPonds.png",
    description: "Landing Page",
    projectLink: <Superare />,
    path: "/socalponds",
  },
  {
    title: "Montrose Search and Rescue",
    image: "TB_MSAR.png",
    description: "Landing Page",
    projectLink: <Superare />,
    path: "/msar",
    href: "https://montrosesar.org/"
  },
  {
    title: "Platter n Boe",
    image: "TB_PNB.png",
    description: "Landing Page",
    projectLink: <Superare />,
    path: "/platternboe",
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
              <CardActionArea href={project.href} target="_blank">
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
