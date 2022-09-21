import React from "react";
import type { NextPage } from "next";
import Container from "../components/Layout/Container";
import HeroSection from "../components/Hero";
import Divider from "../components/Reusable/Divider";
import Divider2 from "../components/Reusable/Divider2";
import Projects_Page from "../components/Projects/Projects_Page";
const Projects: NextPage = () => {
  return (
    <Container>
      {/* <Divider2 /> */}
      {/* <HeroSection /> */}
      {/*Projects */}
      <Projects_Page/>
    </Container>
  );
};

export default Projects;
