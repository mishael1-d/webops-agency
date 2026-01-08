import Image from "next/image";
import React from "react";
import { Button } from "./ui/Button";

function Navbar() {
  return (
    <div className="bg-dark !p-[20px] rounded-[16px] flex items-center justify-between !mb-[42px]">
      <div>
        <p className="text-white text-[24px] font-bold font-roboto-mono tracking-tighter">
          WebOps Agency
        </p>
      </div>
      <nav className="flex items-center gap-[14px]">
        <ul className="font-roboto-mono flex items-center gap-[14px]">
          <li className="uppercase text-primary/80 bg-custom-black !px-[20px] rounded-[12px] font-medium text-[14px] h-[49px] flex items-center">
            Home
          </li>
          <li className="uppercase text-grey bg-custom-black !px-[20px] rounded-[12px] font-medium text-[14px] h-[49px] flex items-center">
            Services
          </li>
          <li className="uppercase text-grey bg-custom-black !px-[20px] rounded-[12px] font-medium text-[14px] h-[49px] flex items-center">
            Projects
          </li>
          <li className="uppercase text-grey bg-custom-black !px-[20px] rounded-[12px] font-medium text-[14px] h-[49px] flex items-center">
            About
          </li>
          <li className="uppercase text-grey bg-custom-black !px-[20px] rounded-[12px] font-medium text-[14px] h-[49px] flex items-center">
            Blogs
          </li>
        </ul>
        <button className="uppercase bg-primary !px-[20px] rounded-[10px] font-medium text-[14px] h-[46px] flex items-center">
          contact us
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
