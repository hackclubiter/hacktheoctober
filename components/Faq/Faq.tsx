import React from 'react'
import { FAQ_DATA } from '../../data/FaqData';
import GlowTextNormal from '../Reusable/GlowTextNormal';
import FaqItem from './FaqItem';

const Faq = () => {
  return (
    <div id="FAQ" className='max-w-screen-xl mx-auto px-4 md:px-6 flex flex-col justify-center my-20 selection:bg-[#b4ff39] selection:text-[#170F1E] '>
       <div className='mx-auto'>
        <GlowTextNormal text="[ Frequently Asked questions ]" size="text-lg md:text-5xl"/>
       </div>

       <div className='flex flex-col space-y-4 mt-10'>
          {FAQ_DATA.map((e,i)=>{
            return(
              <FaqItem key={i} a={e.a} q={e.q} />
            )
          })}
       </div>
    </div>
  )
}

export default Faq;