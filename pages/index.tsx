import React from "react";
import type { NextPage } from "next";
import Faq from "../components/Faq/Faq";
import Container from "../components/Layout/Container";
import Card from "../components/Card/Card";
import HeroSection from "../components/Hero";
import Card2 from "../components/Card/Card2";
import Crad3 from "../components/Card/Crad3";

const Home: NextPage = () => {
  return (
    <Container>
      {/* Hero Section */}
      <HeroSection />
      <Crad3/>
      {/* Info */}
      <div className="flex flex-col md:flex-row m-5 items-center justify-center">
        <Card />
        <Card />
      </div>

      <div className="flex flex-col md:flex-row m-5 items-center justify-center">
        <Card2 />
      </div>

      {/* FAQ */}
      <Faq />
    </Container>
  );
};
export default Home;
