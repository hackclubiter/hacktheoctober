import React from 'react'
import { PROJECT_DATA } from '../../data/ProjectData';
import ProjectCard from '../Card/ProjectCard';
import SpeakerCard from '../Card/SpeakerCard';
import Divider from '../Reusable/Divider';
import GlowTextNormal from '../Reusable/GlowTextNormal';

const Projects_Page = () => {
  return (
    <div
      id='Prize'
      className='max-w-screen-2xl mx-auto px-4 md:px-6 flex flex-col justify-center selection:bg-[#b4ff39] selection:text-[#170F1E] mt-10'
    >
      <div className='mx-auto mb-20'>
        <GlowTextNormal
          text='[ Open Sourced Projects! ]'
          size='text-lg md:text-5xl uppercase'
        />
      </div>
      <Divider/>
      <div className='w-full flex flex-wrap flex-col justify-center md:flex-row mt-6 md:mt-10'>
          {PROJECT_DATA.map((e,i)=>{
            return (
              <ProjectCard
                key={i}
                name={e.projectName}
                description={e.des}
                link={e.projectRepo}
              />
            )
          })}
      </div>
    </div>
  )
}

export default Projects_Page;