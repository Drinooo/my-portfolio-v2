import React from "react";
import { Hero } from "../Sections/Hero";
import { About } from "../Sections/About";
import { Work } from "../Sections/Work";
import { Projects } from "../Sections/Projects";
import { Skills } from "../Sections/Skills";
import { Tools } from "../Sections/Tools";

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Work />
      <Projects />
      <Skills />
      <Tools />
    </>
  );
};
