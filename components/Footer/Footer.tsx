import Link from 'next/link'
import React from 'react'
import GlowTextNormal from '../Reusable/GlowTextNormal'
import Divider from './Divider'

const Footer = () => {
  return (
    <div className="flex flex-col m-10 md:m-0 md:flex-row  md:justify-center md:items-center">
   


    <div className="flex flex-col space-y-4 mb-10 m-10">
      <GlowTextNormal text="Hack Club ITER" size="text-3xl"/>
      <span className="font-JetBrains">Website</span>
      <Divider/>
      <span className="font-JetBrains">Code of Conduct</span>
      <Divider/>
      <span className="font-JetBrains">Discord</span>
      
    </div>



    <div className="flex flex-col space-y-4 mb-10 m-10">
    <GlowTextNormal text="Hack Club " size="text-3xl"/>
      <span className="font-JetBrains">Website</span>
      <Divider/>
      
      <span className="font-JetBrains">Code of Conduct</span>
      <Divider/>
      <span className="font-JetBrains">Discord</span>
      
    </div>


    <div className="flex flex-col space-y-4 mb-10 m-10">
    <GlowTextNormal text="" size="text-3xl"/>
      <span className="font-JetBrains">Website</span>
      <Divider/>
      
      <span className="font-JetBrains">Code of Conduct</span>
      <Divider/>
      
      <span className="font-JetBrains">Discord</span>
      
    </div>


    <div className="flex flex-col space-y-4 mb-10 m-10">
      <p className="font-JetBrains font-extrabold text-3xl">Hack Club Iter</p>
      <span className="font-JetBrains">Website</span>
      <Divider/>
      
      <span className="font-JetBrains">Code of Conduct</span>
      <Divider/>
      
      <span className="font-JetBrains">Discord</span>
      
    </div>
    </div>
  )
}

export default Footer