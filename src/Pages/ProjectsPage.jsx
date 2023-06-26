import React from "react";
import { WIP } from "../Sections/WIP";
import { Box, Container, ImageList, ImageListItem } from "@mui/material";
import { uiuxProjects, wbProjects } from "../assets/contents";
import { ProjectsTypo } from "../MuiComponents/Typography";

export const ProjectsPage = () => {
  return (
    <>
      <Container maxWidth={"xl"}>
        <Box textAlign={"center"}>
          <ProjectsTypo variant={"h3"}>WEB DESIGN</ProjectsTypo>
          <ImageList sx={{ width: "100%", height: "auto" }} cols={3}>
            {wbProjects.map((item, index) => (
              <ImageListItem key={index}>
                <img src={item.image} srcSet={item.image} loading="lazy" />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
        <Box textAlign={"center"}>
          <ProjectsTypo variant={"h3"}>UI/UX DESIGN</ProjectsTypo>
          <ImageList sx={{ width: "100%", height: "auto" }} cols={3}>
            {uiuxProjects.map((item, index) => (
              <ImageListItem key={index}>
                <img src={item.image} srcSet={item.image} loading="lazy" />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Container>
    </>
  );
};
