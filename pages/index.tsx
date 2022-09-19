import React from "react";
import type { NextPage } from "next";
import Faq from "../components/Faq/Faq";
import Container from "../components/Layout/Container";
import styles from "../styles/Home.module.css";
import Card from "../components/Card/Card";
import Card2 from "../components/Card/Card2";

const Home: NextPage = () => {
  return (
    <Container>
      <div className='text-5xl text-blue-600 font-JetBrains'>
        Hack The October
      </div>
      <div className="flex flex-col md:flex-row m-5 items-center justify-center">
        <Card/>
        <Card/>

      </div>


      <div className="flex flex-col md:flex-row m-5 items-center justify-center">
      <Card2/>
      
      </div>
      <Faq/>
    </Container>
  );
}
export default Home;