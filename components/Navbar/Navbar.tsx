import React from "react";
import Image from "next/image";
import Link from "next/link";

import GlowText from "../Reusable/GlowText";
import GlowTextNormal from "../Reusable/GlowTextNormal";
import Logo from "./Logo";
import MobileNav from "./MobileNav";

//Data
import { NAV_DATA } from "../../data/NavData";

const Navbar = () => {
  const [menu, setMenu] = React.useState(false);

  return (
    <div className="h-32 w-full flex flex-row justify-between items-center px-6 md:px-32 font-JetBrains font-semibold">
      <Link href="/">
        <div className="flex flex-row items-center cursor-pointer">
          <div>
            <Logo width={100} height={50} />
          </div>
          <div className="ml-4">
            <GlowText text={"HACKTOBERFEST"} size={"text-xl"} />
          </div>
        </div>
      </Link>
      <div className="hidden md:flex flex-row space-x-6">
        {NAV_DATA.map((e, i) => {
          return (
            <div key={i}>
              <a href={e.link.toString()}>
                <GlowText text={e.text} size={"text-xl"} />
              </a>
            </div>
          );
        })}
      </div>
      <div onClick={() => setMenu(!menu)} className="flex md:hidden">
        <GlowText text={"MENU"} size={"text-xl"} />
      </div>
      {menu && <MobileNav menu={menu} setMenu={setMenu} />}
    </div>
  );
};

export default Navbar;
