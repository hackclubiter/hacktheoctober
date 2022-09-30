import React, { FunctionComponent } from "react";
import Image from "next/image";

interface LogoProps {
  width: number;
  height: number;
}

const Logo: FunctionComponent<LogoProps> = ({ width, height }) => {
  return (
    <div className="flex justify-center items-center relative">
      {/* <Image src="/Logo.svg" alt="logo" width={width} height={height} /> */}
      <div className="">
        <Image
          src="/hto.png"
          alt="logo"
          width={width}
          height={height}
        />
      </div>
    </div>
  );
};

export default Logo;
