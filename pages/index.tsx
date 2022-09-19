import React from "react";
import type { NextPage } from "next";
import Faq from "../components/Faq/Faq";
import Container from "../components/Layout/Container";
import Card from "../components/Card/Card";
import HeroSection from "../components/Hero";

const Home: NextPage = () => {
  return (
    <Container>
      {/* Hero Section */}
      <HeroSection />
      {/* Info */}
      <div className="flex flex-col md:flex-row m-5 items-center justify-center">
        <Card />
        <Card />
      </div>

      {/* FAQ */}
      <Faq />
    </Container>
  );
};
export default Home;
