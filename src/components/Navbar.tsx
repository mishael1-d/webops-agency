import Image from "next/image";
import React from "react";
import { Button } from "./ui/Button";

function Navbar() {
  return (
    <div className="sticky top-0 py-[10px] px-[40px] flex justify-between items-center border-b border-slate-100">
      {/* Logo */}
      <div className="w-[143px] h-[59px]">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={200}
          height={100}
          className="w-full h-full"
        />
      </div>
      {/* Navigation */}
      <nav>
        <ul className="flex items-center gap-[24px] text-[14px] font-medium tracking-tight">
          <li>ABOUT</li>
          <li>SERVICES</li>
          <li>PROJECTS</li>
          <li>CONTACT</li>
          <li>BLOG</li>
        </ul>
      </nav>
      {/* Hamburger */}
      {/* CTA Button */}
      <Button>BOOK A STRATEGY CALL</Button>
    </div>
  );
}

export default Navbar;
