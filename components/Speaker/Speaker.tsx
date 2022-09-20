import React from "react";
import { SPEAKER_DATA } from "../../data/SpeakersData";
import SpeakerCard from "../Card/SpeakerCard";
import GlowTextNormal from "../Reusable/GlowTextNormal";

const Speaker = () => {
  return (
    <div
      id='Prize'
      className='max-w-screen-2xl mx-auto px-4 md:px-6 flex flex-col justify-center my-32 selection:bg-[#b4ff39] selection:text-[#170F1E] '
    >
      <div className='mx-auto'>
        <GlowTextNormal
          text='[ Our Speakers! ]'
          size='text-lg md:text-5xl uppercase'
        />
      </div>
      <div className='w-full flex flex-wrap flex-col justify-center md:flex-row mt-6 md:mt-10'>
        {SPEAKER_DATA.map((e, i) => {
          return (
            <SpeakerCard
              key={i}
              name={e.name}
              description={e.description}
              image={e.image}
              twitter={e.twitter}
              linkedin={e.linkedin}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Speaker;
