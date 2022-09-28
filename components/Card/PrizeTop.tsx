import Image from "next/image";
import React from "react";
import StripBar from "../Reusable/StripBar";

const PrizeTop = () => {
  return (
    <div className='w-full flex flex-col md:flex-row justify-center items-center hover:scale-[1.05] hover:-translate-y-5 ease-linear duration-150 cursor-pointer'>
      <div className='md:h-64 w-full bg-gradient-to-r  m-5 from-purple-400  to-pink-300 rounded-md shadow-custom'>
        <p className='text-gray-100 py-3 font-JetBrains font-bold md:leading-10 p-4 text-2xl md:text-4xl'>
          TOP THREE CONTRIBUTIONS
        </p>
        <div className="mx-5 h-[1px] bg-white/50"></div>
        <ul className='text-base md:text-2xl p-2 m-2 leading-8 font-JetBrains font-medium'>
          <li>Exclusive Hack Club Sticker Pack.</li>
          <li>Certificate of Excellence.</li>
          <li>Special Digital Swag.</li>
        </ul>
      </div>
    </div>
  );
};

export default PrizeTop;
