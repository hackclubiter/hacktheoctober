import Image from "next/image";
import React from "react";
import StripBar from "../Reusable/StripBar";

const PrizeTop = () => {
  return (
    <div className='w-full flex flex-col md:flex-row justify-center items-center'>
      <div className='md:h-64 w-full bg-gradient-to-r  m-5 from-purple-400  to-pink-300 rounded-md shadow-custom'>
        <p className='text-gray-100 py-3 font-JetBrains font-bold leading-10 p-4 text-3xl'>
          TOP THREE CONTRIBUTIONS
        </p>
        <div className="mx-5 h-[1px] bg-white/50"></div>
        <ul className='text-xl p-2 m-2 leading-8 font-JetBrains font-medium'>
          <li>Exclusive Hack Club Sticker Pack.</li>
          <li>Certificate of Excellence.</li>
          <li>Special Digital Swag.</li>
        </ul>
      </div>
    </div>
  );
};

export default PrizeTop;
