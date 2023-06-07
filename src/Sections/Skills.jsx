import { Container, Stack } from "@mui/material";
import React from "react";
import { SkillsTypo } from "../MuiComponents/Typography";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {
  GraphicIcon,
  UIUXIcon,
  WebDevIcon,
  WebIcon,
} from "../MuiComponents/Icons";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing('30px'),
  textAlign: "left",
  color: theme.palette.text.secondary,
  background:
    "linear-gradient(96.26deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%);",
  border: "1px solid #FFF",
  backdropFilter: "blur(20px)",
  borderRadius: "10px",
}));

export const Skills = () => {
  return (
    <Container maxWidth="xl">
      <Stack gap={"60px"} alignItems={'center'}>
        <SkillsTypo variant={"h2"}>
          <span>My </span>
          <span style={{ color: "#D6412B" }}>Skills</span>
        </SkillsTypo>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={"20px"} columns={16} rowSpacing={"20px"}>
            <Grid item xs={8}>
              <Item>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2} columns={16}>
                    <Grid item xs={2}>
                      <WebIcon />
                    </Grid>
                    <Grid item xs>
                      <SkillsTypo variant={"h5"}>Web/Mobile Design</SkillsTypo>
                      <SkillsTypo variant={"body2"} color={"white"}>
                        Proficient in Figma and Adobe XD for creating visually
                        appealing and user-friendly website designs.
                        Knowledgeable in designing responsive web interfaces
                        that adapt to different screen sizes and devices.
                      </SkillsTypo>
                    </Grid>
                  </Grid>
                </Box>
              </Item>
            </Grid>

            <Grid item xs={8}>
              <Item>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2} columns={16}>
                    <Grid item xs={2}>
                      <UIUXIcon />
                    </Grid>
                    <Grid item xs>
                      <SkillsTypo variant={"h5"}>UI/UX Design</SkillsTypo>
                      <SkillsTypo variant={"body2"} color={"white"}>
                        Proficient in Figma and Adobe XD for creating engaging
                        and user-centric UI/UX designs. Able to create prototypes and to communicate design concepts. Stay up-to-date with the
                        latest UI/UX design trends and best practices.
                      </SkillsTypo>
                    </Grid>
                  </Grid>
                </Box>
              </Item>
            </Grid>

            <Grid item xs={8}>
              <Item>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2} columns={16}>
                    <Grid item xs={2}>
                      <GraphicIcon />
                    </Grid>
                    <Grid item xs>
                      <SkillsTypo variant={"h5"}>Graphic Design</SkillsTypo>
                      <SkillsTypo variant={"body2"} color={"white"}>
                        Proficient in Adobe Photoshop, Illustrator, and Canva
                        for creating visually stunning graphics. Able to
                        translate client requirements and brand guidelines into
                        compelling visual designs.
                      </SkillsTypo>
                    </Grid>
                  </Grid>
                </Box>
              </Item>
            </Grid>

            <Grid item xs={8}>
              <Item>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2} columns={16}>
                    <Grid item xs={2}>
                      <WebDevIcon />
                    </Grid>
                    <Grid item xs>
                      <SkillsTypo variant={"h5"}>Web Development</SkillsTypo>
                      <SkillsTypo variant={"body2"} color={"white"}>
                        Proficient in web development languages such as HTML,
                        CSS, and JavaScript. Skilled in building responsive and
                        user-friendly websites that work across different
                        browsers and devices.
                      </SkillsTypo>
                    </Grid>
                  </Grid>
                </Box>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </Container>
  );
};
