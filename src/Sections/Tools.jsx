import React from "react";
import { ToolsTypo } from "../MuiComponents/Typography";
import { Container, Stack, Tooltip } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { tools } from "../assets/contents";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  // color: theme.palette.text.secondary,
  // background:
  //   "linear-gradient(96.26deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%);",
  // border: "1px solid #FFF",
  // backdropFilter: "blur(20px)",
  background: "transparent",
  boxShadow: "none"
  // borderRadius: "10px",
}));

export const Tools = () => {
  return (
    <Box sx={{ borderTop: "2px solid white", paddingTop: "150px" }}>
      <Container maxWidth="xl">
        <Stack gap={"60px"} alignItems={"center"}>
          <ToolsTypo variant={"h2"}>
            <span>My </span>
            <span style={{ color: "#D6412B" }}>Tech Stack</span>
          </ToolsTypo>
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={"20px"}
              columns={16}
              rowSpacing={"20px"}
              justifyContent={"center"}
            >
              {tools.map((item) => (
                <Grid item xs={12} sm={6} md={2}>
                  <Tooltip title={item.title}>
                    <Item>
                      {item.icon}
                    </Item>
                  </Tooltip>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
