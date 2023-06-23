import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import { AboutPage } from "./Pages/AboutPage";
import { ProjectsPage } from "./Pages/ProjectsPage";
import { SkillsPage } from "./Pages/SkillsPage";
import { ContactPage } from "./Pages/ContactPage";
import { Home } from "./Pages/HomePage";

export const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Projects" element={<ProjectsPage />} />
        <Route path="/Skills" element={<SkillsPage />} />
        <Route path="/Contact" element={<ContactPage />} />
      </Routes>
    </>
  );
};
