import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { CustGrid } from "../MuiComponents/WebDesign";
import { Card, CardContent, Container, Stack, makeStyles, styled } from "@mui/material";
import { ProjectsTypo } from "../MuiComponents/Typography";
import { theme } from "../MuiComponents/ThemeProvider";
import { UXDesign } from "../MuiComponents/UXDesign";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

export const Projects = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ borderTop: "2px solid white", paddingTop: "100px" }}>
      <Container maxWidth="xl">
        <Stack gap={"60px"} alignItems={"center"}>
          <ProjectsTypo variant={"h2"}>
            <span>My </span>
            <span style={{ color: "#D6412B" }}>Projects</span>
          </ProjectsTypo>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                textColor="secondary"
                indicatorColor="secondary"
                centered
              >
                <Tab label="Web Design" {...a11yProps(0)} />
                <Tab label="UI/UX Design" {...a11yProps(1)} />
                <Tab label="Graphic Design" {...a11yProps(2)} />
                <Tab label="Web Development" {...a11yProps(3)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <CustGrid />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <UXDesign />
            </TabPanel>
            <TabPanel value={value} index={2}>
              Graphic Design
            </TabPanel>
            <TabPanel value={value} index={3}>
              Web Development
            </TabPanel>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
