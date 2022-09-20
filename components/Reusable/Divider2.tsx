import React from "react";

const Divider2 = () => {
  return (
    <div className='max-w-screen-xl w-full flex flex-row mx-auto px-6'>
      <div className='h-[1px] bg-[#E5E1E6] w-full relative flex flex-row mt-[1.9rem]'>
        <div className='w-32 md:w-52 mx-2 h-1 rounded-sm bg-[#E5E1E6] -mt-6 '></div>
        <div className='w-32 md:w-52 mx-2 h-1 rounded-sm bg-[#E5E1E6] -mt-6 absolute blur-sm '></div>
      </div>
      <div className='h-8 bg-[#E5E1E6] w-[10px] -skew-x-[45deg] ml-3'></div>
      <div className='h-[2px] bg-[#E5E1E6] w-full  ml-3 flex flex-row justify-end relative'></div>
    </div>
  );
};

export default Divider2;
