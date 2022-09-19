import React from "react";
import type { NextPage } from "next";
import Faq from "../components/Faq/Faq";
import Container from "../components/Layout/Container";
import HeroSection from "../components/Hero";
import Prize from "../components/Prize/Prize";
import Speaker from "../components/Speaker/Speaker";

const Home: NextPage = () => {
  return (
    <Container>
      {/* Hero Section */}
      <HeroSection />
      {/* Prize */}
      <Prize/>
      {/* Speakers */}
      <Speaker/>
      {/* Workshops & Events */}
      {/* FAQ */}
      <Faq />
    </Container>
  );
};
export default Home;
