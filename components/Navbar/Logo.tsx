import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <div className='flex justify-center items-center relative'>
      <Image src='/Logo.svg' alt='logo' width={50} height={50} />
      <div className='absolute pt-2'>
        <Image src='/H.svg' alt='logo' width={30} height={30} />
      </div>
    </div>
  );
};

export default Logo;
