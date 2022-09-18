import React from "react";
import type { NextPage } from "next";
import Faq from "../components/Faq/Faq";
import Container from "../components/Layout/Container";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Container>
      <div className='text-5xl text-blue-600 font-JetBrains'>
        Hack The October
      </div>
      <Faq/>
    </Container>
  );
}
export default Home;