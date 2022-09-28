/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Container = ({ children }) => {
  return (
    <>
      <div>
        <Head>
          <title>Hack The October 2022</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* <img
          className="fixed bottom-0 left-0 z-10 w-32 mt-20"
          src="/hcflag.svg"
          alt="hackclubflag"
        /> */}
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Container;
