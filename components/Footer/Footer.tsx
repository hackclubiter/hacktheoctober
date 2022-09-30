import React from "react";
import Link from "next/link";
import Image from "next/image";
import GlowText from "../Reusable/GlowText";
import GlowTextNormal from "../Reusable/GlowTextNormal";
import StripBar from "../Reusable/StripBar";

const Footer = () => {
  return (
    <>
      <StripBar />
      <div
        id="Footer"
        className=" flex flex-col md:flex-row pb-10 md:pb-28 px-6 md:px-0 justify-center space-y-12 md:space-x-20"
      >
        <div className="flex flex-col items-start mt-10">
          <Image src="/hto.png" width={220} height={120} alt="logo" />

          <div className="uppercase mt-6">
            <GlowTextNormal text={"© 2022 Hack The October,"} size={"text-xl"} />
            <GlowTextNormal text={" All Rights Reserved "} size={"text-xl"} />
          </div>
        </div>
        <div className="flex flex-col items-start ">
          <div className="mb-6 uppercase">
            <GlowTextNormal text={"Hack Club ITER"} size={"text-3xl"} />
          </div>
          <Link href="https://iter.hackclub.com/">
            <div className="w-full py-2 border-b border-[#fff]/20">
              <GlowText text={"WEBSITE"} size={"text-lg"} />
            </div>
          </Link>
          <Link href="https://iter.hackclub.com/code-of-conduct">
            <div className="w-full py-2 border-b border-[#fff]/20">
              <GlowText text={"CODE 0F CONDUCT"} size={"text-lg"} />
            </div>
          </Link>
          <Link href="https://iter.hackclub.com/discord">
            <div className="w-full py-2 border-b border-[#fff]/20">
              <GlowText text={"DISCORD"} size={"text-lg"} />
            </div>
          </Link>
        </div>

        <div className="flex flex-col items-start">
          <div className="mb-6 uppercase">
            <GlowTextNormal text={"Hack Club"} size={"text-3xl"} />
          </div>
          <Link href="https://hackclub.com/">
            <div className="w-full py-2 border-b border-[#fff]/20">
              <GlowText text={"WEBSITE"} size={"text-lg"} />
            </div>
          </Link>
          <Link href="https://hackclub.com/press/">
            <div className="w-full py-2 border-b border-[#fff]/20">
              <GlowText text={"PRESS"} size={"text-lg"} />
            </div>
          </Link>
        </div>

        <div className="flex flex-col items-start">
          <div className="mb-6 uppercase">
            <GlowTextNormal text={"Hactoberfest"} size={"text-3xl"} />
          </div>
          <Link href="https://hacktoberfest.com/">
            <div className="w-full py-2 border-b border-[#fff]/20">
              <GlowText text={"WEBSITE"} size={"text-lg"} />
            </div>
          </Link>
          <Link href="https://www.digitalocean.com/legal/terms-of-service-agreement">
            <div className="w-full py-2 border-b border-[#fff]/20">
              <GlowText text={"TERM"} size={"text-lg"} />
            </div>
          </Link>
        </div>

        <div className="flex flex-col items-start">
          <div className="mb-6 uppercase">
            <GlowTextNormal text={"Our scoial"} size={"text-3xl"} />
          </div>
          <Link href="https://twitter.com/hackclubiter">
            <div className="w-full py-2 border-b border-[#fff]/20">
              <GlowText text={"TWITTER"} size={"text-lg"} />
            </div>
          </Link>
          <Link href="https://github.com/hackclubiter">
            <div className="w-full py-2 border-b border-[#fff]/20">
              <GlowText text={"GITHUB"} size={"text-lg"} />
            </div>
          </Link>
          <Link href="https://www.youtube.com/c/hackclubiter">
            <div className="w-full py-2 border-b border-[#fff]/20">
              <GlowText text={"YOUTUBE"} size={"text-lg"} />
            </div>
          </Link>
          <Link href="https://www.instagram.com/hackclubiter/">
            <div className="w-full py-2 border-b border-[#fff]/20">
              <GlowText text={"INSTAGRAM"} size={"text-lg"} />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
