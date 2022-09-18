import Link from "next/link";
import React from "react";
import GlowText from "../Reusable/GlowText";
import GlowTextNormal from "../Reusable/GlowTextNormal";
import Divider from "./Divider";

const Footer = () => {
  return (
    <div className="flex  flex-col m-[0.7px] md:m-0 md:flex-row  md:justify-center md:items-center">
      <div className=" flex md:h-40 flex-col space-y-4 mb-10 m-10">
        <GlowTextNormal text="Hack Club ITER" size="text-3xl " />
        <GlowText text="WEBSITE" size="text-lg" />
        <Divider />
        <GlowText text="CODE 0F CONDUCT" size="text-lg" />
        <Divider />
        <GlowText text="DISCORD" size="text-lg" />
        <Divider />
      </div>

      <div className=" md:h-40 flex flex-col space-y-4 mb-10 m-10">
        <GlowTextNormal text="Hack Club " size="text-3xl" />
        <GlowText text="WEBSITE" size="text-lg" />
        <Divider />

        <GlowText text="PRESS" size="text-lg" />
        <Divider />
      </div>

      <div className="md:h-40 flex flex-col space-y-4 mb-10 m-10">
        <GlowTextNormal text="Hactoberfest" size="text-3xl" />
        <GlowText text="WEBSITE" size="text-lg" />
        <Divider />

        <GlowText text="TERM" size="text-lg" />
        <Divider />
      </div>

      <div className=" md:h-40 flex flex-col space-y-4 mb-10 m-10">
        <GlowTextNormal text="Our scoial" size="text-3xl" />
        <GlowText text="TWITTER" size="text-lg" />
        <Divider />
        <GlowText text="INSTAGRAM" size="text-lg" />
        <Divider />

        <GlowText text="YOUTUBE" size="text-lg" />
        <Divider />
        <GlowText text="GITHUB" size="text-lg" />
        <Divider />
      </div>
    </div>
  );
};

export default Footer;
