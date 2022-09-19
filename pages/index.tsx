import React from "react";
import type { NextPage } from "next";
import Faq from "../components/Faq/Faq";
import Container from "../components/Layout/Container";
import HeroSection from "../components/Hero";
import Prize from "../components/Prize/Prize";

const Home: NextPage = () => {
  return (
    <Container>
      {/* Hero Section */}
      <HeroSection />
      {/* Prize */}
      <Prize/>
      {/* Speakers */}
      {/* Workshops & Events */}
      {/* FAQ */}
      <Faq />
    </Container>
  );
};
export default Home;
