import React from 'react'


const Card = () => {
  return (
    <div className='bg-gradient-to-b  md:w-[40%] m-5   p-2  hover:shadow-xl hover:shadow-cyan-500/50   from-[rgba(124,127,255)] border-4 border-[rgba(64,221,255)] rounded-md to-[rgba(64,221,255)] '>

<p className=' text-black font-JetBrains font-extrabold uppercase  text-4xl m-4 '>Preptember</p>
<p className='  text-gray-900 m-5 text-lg tracking-wide font-JetBrains leading-7 '>September is the perfect time to prepare for Hacktoberfest. Get a jump start by finding projects to contribute to, adding the ‘hacktoberfest’ tag to your projects, or familiarizing yourself with Git.</p>
   <div className=' m-6 mt-9 flex '>
    <button className=' rounded-md font-JetBrains mr-10 bg-black p-3 font-medium'>GET THE EVENT KIT</button>
    <button className='bg-black p-3 rounded-md font-JetBrains font-medium'>HOW TO PARTICIPATE</button>
   </div>

    </div>
  )
}

export default Card