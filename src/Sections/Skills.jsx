import { Container, Stack } from "@mui/material";
import React from "react";
import { SkillsTypo } from "../MuiComponents/Typography";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { skills } from "../assets/contents";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing("30px"),
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
    <Box sx={{ borderTop: "2px solid white", paddingTop: "100px" }}>
      <Container maxWidth="xl">
        <Stack gap={"60px"} alignItems={"center"}>
          <SkillsTypo variant={"h2"}>
            <span>My </span>
            <span style={{ color: "#D6412B" }}>Skills</span>
          </SkillsTypo>

          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
              justifyContent={"center"}
            >
              {skills.map((item) => (
                <Grid item xs={12} sm={8} md={6}>
                  <Item>
                    <Box sx={{ flexGrow: 1 }}>
                      <Grid
                        container
                        spacing={{ xs: 2, md: 3 }}
                        columns={{ xs: 4, sm: 8, md: 12 }}
                      >
                        <Grid item xs={12} sm={2} md={2}>
                          {item.icon}
                        </Grid>
                        <Grid item xs>
                          <SkillsTypo variant={"h5"}>
                            {item.title}
                          </SkillsTypo>
                          <SkillsTypo variant={"body2"} color={"white"}>
                            {item.desc}
                          </SkillsTypo>
                        </Grid>
                      </Grid>
                    </Box>
                  </Item>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
