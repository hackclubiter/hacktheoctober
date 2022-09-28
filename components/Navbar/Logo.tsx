import React, { FunctionComponent } from "react";
import Image from "next/image";

interface LogoProps {
  width: number;
  height: number;
}

const Logo: FunctionComponent<LogoProps> = ({ width, height }) => {
  return (
    <div className="flex justify-center items-center relative">
      <Image src="/Logo.svg" alt="logo" width={width} height={height} />
      <div className="absolute pt-2">
        <Image
          src="/hto.jpg"
          alt="logo"
          width={width * 0.6}
          height={height * 0.6}
        />
      </div>
    </div>
  );
};

export default Logo;
