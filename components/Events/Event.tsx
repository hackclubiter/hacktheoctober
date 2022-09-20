import React from "react";
import { EVENT_DATA } from "../../data/EventData";
import EventCard from "../Card/EventCard";
import GlowTextNormal from "../Reusable/GlowTextNormal";

const Event = () => {
  return (
    <div
      id='Event'
      className='max-w-screen-2xl mx-auto px-4 md:px-6 flex flex-col justify-center my-20 selection:bg-[#b4ff39] selection:text-[#170F1E] '
    >
      <div className='mx-auto'>
        <GlowTextNormal
          text='[ Workshops & Events! ]'
          size='text-lg md:text-5xl uppercase'
        />
      </div>
      <div className='w-full flex flex-wrap flex-col justify-center md:flex-row mt-6 md:mt-10'>
        {EVENT_DATA.map((e,i)=>{
            return(
                <EventCard
                    key={i}
                    name={e.name}
                    description={e.description}
                    startTime={e.endTime}
                    endTime={e.endTime}
                    link={e.link}
                />
            )
        })}
      </div>
    </div>
  );
};

export default Event;
