import React from "react";
import PrizeAll from "../Card/PrizeAll";
import PrizeTop from "../Card/PrizeTop";
import GlowTextNormal from "../Reusable/GlowTextNormal";

const Prize = () => {
  return (
    <div
      id='Prize'
      className='max-w-screen-xl mx-auto px-4 md:px-6 flex flex-col justify-center my-20 selection:bg-[#b4ff39] selection:text-[#170F1E] '
    >
      <div className='mx-auto'>
        <GlowTextNormal
          text='[ What’s in it for the top contributors? ]'
          size='text-lg md:text-5xl md:flex hidden uppercase'
        />
        <GlowTextNormal text='[Prizes]' size='text-lg md:text-5xl md:hidden' />
      </div>
      <div className='w-full flex flex-col md:flex-row mt-6 md:mt-10'>
        <PrizeTop />
        <PrizeAll />
      </div>
    </div>
  );
};

export default Prize;
