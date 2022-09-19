import Image from "next/image";
import React from "react";
import StripBar from "../Reusable/StripBar";

const Card2 = () => {
  return (
    <div className="  flex flex-col md:flex-row justify-center items-center">
    <div className="bg-gradient-to-r  m-5 from-purple-400  to-pink-300  h-64 rounded-md shadow-custom w-[90%] md:w-96">
      <p className="text-gray-100 w-full py-3 border-b  border-[#fff]/50 font-JetBrains font-bold leading-10 p-4 text-3xl">
        TOP THREE CONTRIBUTIONS
      </p>
      <ul className="p-2 m-2 leading-8 font-JetBrains font-medium">
        <li>Exclusive Hack Club Sticker Pack.</li>
        <li>Certificate of Excellence.</li>
        <li>Special Digital Swag.</li>
      </ul>
    </div>


    <div className="bg-gradient-to-r m-5 from-teal-400  to-teal-300  h-64 rounded-md shadow-custom2 w-[90%] md:w-96">
      <p className="text-gray-100 w-full py-3 border-b  border-[#fff]/50 font-JetBrains font-bold leading-10 p-4 text-3xl">
        EVERY PARTICIPANT
      </p>
      <ul className="p-2 m-2 leading-8 font-JetBrains font-medium">
        <li>Certificate of Completion..</li>
        <li>Digital Badge..</li>
       
      </ul>
    </div>
    </div>

  );
};

export default Card2;
