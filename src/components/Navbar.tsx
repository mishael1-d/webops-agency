"use client"

import Image from "next/image";
import React, { useState } from "react";
import { Button } from "./ui/Button";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-dark rounded-[16px] !mb-[42px] relative z-50">
      <div className="!p-[20px] flex items-center justify-between">
        <div>
          <p className="text-white text-[24px] font-bold font-roboto-mono tracking-tighter">
            WebOps Agency
          </p>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden w-[40px] h-[40px] bg-custom-black rounded-[8px] flex items-center justify-center text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-[14px]">
          <ul className="font-roboto-mono flex items-center gap-[14px]">
            <li className="uppercase text-primary/80 bg-custom-black !px-[20px] rounded-[12px] font-medium text-[14px] h-[49px] flex items-center cursor-pointer hover:bg-opacity-80 transition-all">
              Home
            </li>
            <li className="uppercase text-grey bg-custom-black !px-[20px] rounded-[12px] font-medium text-[14px] h-[49px] flex items-center cursor-pointer hover:bg-opacity-80 transition-all">
              Services
            </li>
            <li className="uppercase text-grey bg-custom-black !px-[20px] rounded-[12px] font-medium text-[14px] h-[49px] flex items-center cursor-pointer hover:bg-opacity-80 transition-all">
              Projects
            </li>
            <li className="uppercase text-grey bg-custom-black !px-[20px] rounded-[12px] font-medium text-[14px] h-[49px] flex items-center cursor-pointer hover:bg-opacity-80 transition-all">
              About
            </li>
            <li className="uppercase text-grey bg-custom-black !px-[20px] rounded-[12px] font-medium text-[14px] h-[49px] flex items-center cursor-pointer hover:bg-opacity-80 transition-all">
              Blogs
            </li>
          </ul>
          <button className="uppercase bg-primary !px-[20px] rounded-[10px] font-medium text-[14px] h-[46px] flex items-center">
            contact us
          </button>
        </nav>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-[#1F1F1F] p-[20px] animate-fadeIn">
          <ul className="font-roboto-mono flex flex-col gap-[10px]">
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
          <button className="w-full mt-[14px] uppercase bg-primary !px-[20px] rounded-[10px] font-medium text-[14px] h-[46px] flex items-center justify-center">
            contact us
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
