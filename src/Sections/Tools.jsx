import React from "react";
import { ToolsTypo } from "../MuiComponents/Typography";
import { Container, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { BootstrapIcon, CSSIcon, CanvaIcon, FigmaIcon, GithubIcon, HTMLIcon, IllustratorIcon, IonicIcon, JavaScriptIcon, MUIIcon, PhotoshopIcon, ReactIcon, VSCodeIcon, ViteIcon, XDIcon } from "../MuiComponents/Icons";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  background: 'linear-gradient(96.26deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%);',
  border: '1px solid #FFF',
  backdropFilter: 'blur(20px)',
  borderRadius: '10px'
}));

export const Tools = () => {
  return (
    <Container maxWidth="xl">
      <Stack gap={'60px'} alignItems={'center'}>
      <ToolsTypo variant={"h2"}>
      <span>My </span><span style={{ color: '#D6412B' }}>Tech Stack</span>
      </ToolsTypo>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={'20px'} columns={16} rowSpacing={'20px'}>
          <Grid item xs={4}>
            <Item>
              <HTMLIcon />
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <CSSIcon />
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <JavaScriptIcon />
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <BootstrapIcon />
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <ReactIcon />
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <ViteIcon />
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <IonicIcon />
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <MUIIcon />
            </Item>
          </Grid>
          <Grid item xs={4}>
          <Item>
            <GithubIcon />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
           <FigmaIcon />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <XDIcon />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <PhotoshopIcon />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
           <IllustratorIcon />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <CanvaIcon />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <VSCodeIcon />
          </Item>
        </Grid>
        </Grid>
      </Box>        
      </Stack>

    </Container>
  );
};
