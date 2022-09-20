import React from 'react'

const Divider = () => {
  return (
    <div className='max-w-screen-xl w-full flex flex-row mx-auto px-6'>
      <div className='h-[2px] bg-[#E5E1E6] w-full'></div>
      <div className='h-8 bg-[#E5E1E6] w-[10px] skew-x-[45deg] ml-3'></div>
      <div className='h-[1px] bg-[#E5E1E6] w-full mt-[1.9rem] ml-3 flex flex-row justify-end relative'>
        <div className='w-32 md:w-52 mx-2 h-1 rounded-sm bg-[#E5E1E6] -mt-4 '></div>
        <div className='w-4 d:w-10 mx-2 h-1 rounded-sm bg-[#E5E1E6] -mt-4 '></div>
        <div className='w-32 md:w-52 mx-2 h-1 rounded-sm bg-[#E5E1E6] -mt-4 absolute blur-sm right-10'></div>
        <div className='w-4 d:w-10 mx-2 h-1 rounded-sm bg-[#E5E1E6] -mt-4 absolute blur-sm '></div>
      </div>
    </div>
  )
}

export default Divider;