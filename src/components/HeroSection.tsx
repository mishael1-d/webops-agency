import React from "react";
import { Button } from "./ui/Button";
import Image from "next/image";

function HeroSection() {
  return (
    <section className="relative pt-[100px] overflow-hidden h-full">
      {/* Perspective Grid Background */}
      <div
        className="absolute left-0 right-0 bottom-[0px] h-full w-full pointer-events-none opacity-20"
        style={{
          transform: "perspective(5000px) rotateX(5deg) translateY(5%)",
          transformOrigin: "bottom center",
          zIndex: 1,
        }}
      >
        <Image
          src="/images/grid4.png"
          alt="Perspective Grid"
          width={1000}
          height={1000}
          className="w-full h-full"
        />
      </div>

      <div className="relative z-10 max-w-[800px] mx-auto">
        <h1 className="capitalize text-center text-[48px] font-medium leading-[1.2] tracking-tight">
          We Build{" "}
          <span className="bg-[#7C2DCB] text-white rounded-[50px] px-[18px] py-[4px]">
            Business-Critical
          </span>{" "}
          Software That Helps Companies{" "}
          <span className="bg-[#14B8A6] text-white rounded-[50px] px-[14px] py-[2px]">
            Grow
          </span>
          ,{" "}
          <span className="bg-[#4F46E5] text-white rounded-[50px] px-[14px] py-[2px]">
            Scale
          </span>
          , and{" "}
          <span className="bg-[#60A5FA] text-white rounded-[50px] px-[14px] py-[2px]">
            Operate
          </span>{" "}
          Smarter.
        </h1>
        <p className="mt-[24px] text-center text-[16px] font-medium text-zinc-600 max-w-[650px] mx-auto">
          From small businesses launching their first systems to corporate teams
          modernizing complex platforms — WebOps Software Solutions designs and
          delivers scalable software that drives real business results.
        </p>
      </div>
      <div className="relative z-[50] w-fit mx-auto flex justify-center items-center gap-[24px] mt-[48px]">
        <Button>Book a Strategy Call</Button>
        <Button variant="outline">Get A Free Roadmap</Button>
      </div>

      {/* Partners and Brands */}
      <div className="relative z-[20] mt-[80px] mb-[50px] max-w-[1200px] mx-auto overflow-hidden faded-marquee-container">
        <div className="flex w-fit items-center gap-x-[60px] animate-marquee whitespace-nowrap">
          {[
            { name: "Gallery Artisan", icon: "G" },
            { name: "SnapShot", icon: "S" },
            { name: "ProNature", icon: "P" },
            { name: "Network", icon: "N" },
            { name: "waveless", icon: "W" },
            { name: "akacollective.", icon: "A" },
            { name: "anss", icon: "a" },
            { name: "Gallery Artisan 2", icon: "G" },
            { name: "SnapShot 2", icon: "S" },
            { name: "ProNature 2", icon: "P" },
            { name: "Network 2", icon: "N" },
            { name: "waveless 2", icon: "W" },
            { name: "akacollective. 2", icon: "A" },
            { name: "anss 2", icon: "a" },
          ].map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex items-center gap-2 transition-all duration-300 hover:opacity-100 hover:grayscale-0"
            >
              <div className="w-8 h-8 rounded-lg bg-zinc-200 flex items-center justify-center font-bold text-black shrink-0">
                {brand.icon}
              </div>
              <span className="text-[20px] font-semibold tracking-tight text-black">
                {brand.name.replace(" 2", "")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
