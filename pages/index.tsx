import React from "react";
import type { NextPage } from "next";
import Faq from "../components/Faq/Faq";
import Container from "../components/Layout/Container";
import HeroSection from "../components/Hero";
import Prize from "../components/Prize/Prize";
import Speaker from "../components/Speaker/Speaker";
import Divider from "../components/Reusable/Divider";
import Divider2 from "../components/Reusable/Divider2";
import Event from "../components/Events/Event";

const Home: NextPage = () => {
  return (
    <Container>
      {/* Hero Section */}
      <HeroSection />
      {/* Prize */}
      <Divider2/>
      <Prize/>
      {/* Speakers */}
      <Divider/>
      <Speaker/>
      {/* Workshops & Events */}
      <Divider2/>
      <Event/>
      {/* FAQ */}
      <Divider/>
      <Faq />
    </Container>
  );
};
export default Home;
