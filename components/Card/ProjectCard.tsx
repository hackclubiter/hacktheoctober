/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import Link from "next/link";

//React icons
import { MdDateRange,MdAccessTime } from "react-icons/md";

type props = {
  name: String;
  description: String;
  link: String;
};

const ProjectCard:React.FC<props> = ({name,description,link}) => {
  return (
    <div className='w-full md:w-80 flex flex-col md:flex-row justify-center items-center hover:scale-[1.05] hover:-translate-y-2 ease-linear duration-150 cursor-pointer'>
      <div
        className={`h-56 bg-gradient-to-b w-full  flex flex-col justify-between  m-3 p-3     hover:shadow-xl hover:shadow-cyan-500/50  from-[rgba(124,127,255)] border-4 border-[rgba(64,221,255)] rounded-md to-[rgba(64,221,255)] hover:scale-[1.05] hover:-translate-y-2 ease-linear duration-150 cursor-pointer font-JetBrains relative`}
      >
        <div className=" w-full h-full bg-[url('/bganimated.gif')] mix-blend-color-dodge absolute top-0 bg-cover bg-center"></div>
        <div>
        <div className='text-2xl text-black/90  z-10 font-sans font-extrabold'>{name}</div>
        <div className='text-lg font-bold text-black/60  z-10'>
          {description}
        </div>
        </div>

        <div className='w-full  flex flex-row mt-6 justify-between z-10'>
          <Link href={'https://www.github.com/'+link.toString()}>
            <div
              className='w-full text-center bg-black  py-1 text-lg text-white hover:text-cyan-300 ease-linear duration-150 '
              style={{
                clipPath:
                  "polygon(12px 0px, 100% 0px, 100% 72%, calc(100% - 12px) 100%, 0px 100%, 0px 12px)",
              }}
            >
              {"GitHub"}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
