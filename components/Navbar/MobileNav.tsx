import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import GlowText from "../Reusable/GlowText";
import { NAV_DATA } from "../../data/NavData";
import GlowTextNormal from "../Reusable/GlowTextNormal";
import { motion } from "framer-motion"

type props = {
  menu: any;
  setMenu: any;
};

const MobileNav:React.FC<props> = ({ menu, setMenu }) => {
  return (
    <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.6}}
        className='h-screen w-screen  bg-[rgba(0,0,0,0.87)]  backdrop-blur-xl flex md:hidden flex-col fixed top-0 left-0 z-50'>
      <div className='h-32 w-full flex flex-row justify-between items-center px-6 md:px-32 font-JetBrains font-semibold'>
        <Link href='/'>
          <div className='flex flex-row items-center cursor-pointer'>
            <div>
              <Logo />
            </div>
            <div className='ml-4'>
              <GlowText text={"HACKTOBERFEST"} size={"text-xl"} />
            </div>
          </div>
        </Link>
        <div onClick={() => setMenu(!menu)} className='flex md:hidden'>
          <GlowText text={"CLOSE"} size={"text-xl"} />
        </div>{" "}
      </div>
      <div className='flex flex-col px-6'>
        {NAV_DATA.map((e, i) => {
          return (
            <motion.div 
            initial={{translateY:-50,opacity:0}}
            animate={{translateY:0,opacity:1}}
            transition={{delay:i/10+0.2, type: "spring", stiffness: 100 }}
            key={i} className='pb-2 pt-6 border-b border-[#fff]/20'>
              <Link href={e.link}>
                <GlowText text={e.text} size={"text-xl"} />
              </Link>
            </motion.div>
          );
        })}
        <div className="absolute bottom-10 uppercase">
            <GlowTextNormal text={'© 2022 Hack Club ITER, All Rights Reserved '} size={"text-xs"}/>
        </div>
      </div>
    </motion.div>
  );
};

export default MobileNav;
