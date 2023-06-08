import {
  Box,
  Container,
  CssBaseline,
  Stack,
  ThemeProvider,
} from "@mui/material";
import "./App.css";
import { CustAppBar } from "./MuiComponents/AppBar";
import { Hero } from "./Sections/Hero";
import { About } from "./Sections/About";
import { Work } from "./Sections/Work";
import { Projects } from "./Sections/Projects";
import { Skills } from "./Sections/Skills";
import { Tools } from "./Sections/Tools";
import { Contact } from "./Sections/Contact";
import { theme } from "./MuiComponents/ThemeProvider";
import { Footer } from "./Sections/Footer";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Stack gap={"150px"}>
          <CustAppBar />
          <Hero />
          <About />
          <Work />
          <Projects />
          <Skills />
          <Tools />
          <Contact />
          {/* <Footer /> */}
        </Stack>
      </ThemeProvider>
    </>
  );
};

export default App;
