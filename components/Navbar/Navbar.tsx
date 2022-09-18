import Link from 'next/link'
import React from 'react'
import GlowText from '../Reusable/GlowText'
import GlowTextNormal from '../Reusable/GlowTextNormal'

const Navbar = () => {
  return (
    <div className='h-20 w-full flex flex-row justify-between items-center px-20 font-JetBrains font-semibold'>
      <Link href="/">
        <GlowText
          text={"HACKTOBERFEST"}
          size={"text-xl"}
        />
        
      </Link>
      
      <div>world</div>
    </div>
  )
}

export default Navbar