import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import { AboutPage } from "./Pages/AboutPage";
import { ProjectsPage } from "./Pages/ProjectsPage";
import { SkillsPage } from "./Pages/SkillsPage";
import { ContactPage } from "./Pages/ContactPage";
import { Home } from "./Pages/HomePage";
import { Recozy } from "./Pages/Recozy";
import { Hypeburger } from "./Pages/Hypeburger";
import { Superare } from "./Pages/Superare";
import { NumaPage } from "./Pages/NumaPage";

export const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Projects" element={<ProjectsPage />} />
        <Route path="/Skills" element={<SkillsPage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/Hypeburger" element={<Hypeburger />} />
        <Route path="/Superare" element={<Superare />} />
        <Route path="/Recozy" element={<Recozy />} />
        <Route path="/Numa" element={<NumaPage />} />
      </Routes>
    </>
  );
};
