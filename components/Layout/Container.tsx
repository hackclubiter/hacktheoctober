/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Container = ({ children }) => {
  return (
    <>
      <div className="selection:bg-[#b4ff39] selection:text-[#170F1E]">
        <Head>
          <title>Hack The October 2022</title>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="Repository for the hacktheoctober project." />
          <meta name="author" content="hackclubiter" />
          <meta property="og:title" content="hacktheoctober Repository" />
          <meta property="og:description" content="Repository for the hacktheoctober project." />
          <meta property="og:url" content="https://github.com/hackclubiter/hacktheoctober" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="/hcflag.svg"></meta>
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