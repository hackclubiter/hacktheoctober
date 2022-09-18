import React from 'react'
import GlowTextNormal from '../Reusable/GlowTextNormal';
import FaqItem from './FaqItem';

const Faq = () => {
  return (
    <div className='max-w-screen-xl mx-auto px-6 flex flex-col justify-center my-20'>
       <div className='mx-auto'>
        <GlowTextNormal text="[ Frequently Asked questions ]" size="text-5xl"/>
       </div>

        <FaqItem a={'sdadasdsadasd'} q={'asdasdsadasdsdsad'}/>
    </div>
  )
}

export default Faq;