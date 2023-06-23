import { CssBaseline, Stack, ThemeProvider } from "@mui/material";
import "./App.css";
import { CustAppBar } from "./MuiComponents/AppBar";
import { Hero } from "./Sections/Hero";
import { About } from "./Sections/About";
import { Work } from "./Sections/Work";
import { Projects } from "./Sections/Projects";
import { Skills } from "./Sections/Skills";
import { Tools } from "./Sections/Tools";
import { theme } from "./MuiComponents/ThemeProvider";
import { Footer } from "./Sections/Footer";
import { Superare } from "./Pages/Superare";
import { Route, Routes } from "react-router-dom";
import { MainRoutes } from "./MainRoutes";
import { Home } from "./Pages/HomePage";
import { AboutPage } from "./Pages/AboutPage";
import { ProjectsPage } from "./Pages/ProjectsPage";
import { SkillsPage } from "./Pages/SkillsPage";
import { ContactPage } from "./Pages/ContactPage";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Stack gap={"150px"}>
          <CustAppBar />
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<AboutPage />} />
            <Route path="/Projects" element={<ProjectsPage />} />
            <Route path="/Skills" element={<SkillsPage />} />
            <Route path="/Contact" element={<ContactPage />} />
          </Routes>
          <Footer />
        </Stack>
      </ThemeProvider>
    </>
  );
};

export default App;
