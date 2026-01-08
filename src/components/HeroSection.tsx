import React from "react";
import { Button } from "./ui/Button";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";

function HeroSection() {
  return (
    <section className="">
      <div className="flex gap-[16px]">
        <div className="w-[64%] bg-dark !p-[16px] !pt-[80px] rounded-[16px] relative overflow-hidden">
          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover rounded-[16px]"
          >
            <source src="/images/hero-vid.mp4" type="video/mp4" />
          </video>

          {/* Dark Overlay for text readability */}
          <div className="absolute inset-0 bg-black/90 rounded-[16px]" />

          {/* Content */}
          <div className="max-w-[772px] !mx-auto relative z-10">
            <div className="flex items-center gap-[18px]">
              <h1 className="font-semibold text-[48px] uppercase text-white">
                Building Softwares{" "}
              </h1>
              <div className="flex items-center gap-[9px] relative">
                <svg
                  viewBox="0 0 200 100"
                  className=" absolute -left-[20px] w-[56px] h-[56px] -rotate-[90deg]"
                >
                  <path
                    d="M10 90 A90 90 0 0 1 190 90"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={6}
                    className="text-primary"
                  />
                </svg>

                <div className="bg-primary w-[40px] h-[40px] rounded-full flex items-center justify-center">
                  <ArrowRight />
                </div>
                <p className="text-primary uppercase text-[20px] font-medium">
                  start a project
                </p>
              </div>
            </div>
            <h2 className="font-semibold text-[48px] uppercase text-white !mb-[20px]">
              That Drives Growth
            </h2>
            <p className="max-w-[692px] text-grey">
              From small businesses launching their first systems to corporate
              teams modernizing complex platforms — WebOps Software Solutions
              designs and delivers scalable software that drives real business
              results.
            </p>
          </div>
          <div className="bg-custom-black !py-[16px] !mt-[78px] rounded-[10px] overflow-hidden relative">
            <div className="flex items-center gap-[10px] animate-scroll">
              {/* First set of items */}
              <div className="flex items-center gap-[10px] shrink-0">
                <div className="w-[7px] h-[7px] rounded-full bg-primary" />
                <p className="font-roboto-mono uppercase text-grey">branding</p>
              </div>
              <div className="flex items-center gap-[10px] shrink-0">
                <div className="w-[7px] h-[7px] rounded-full bg-primary" />
                <p className="font-roboto-mono uppercase text-grey">
                  web design
                </p>
              </div>
              <div className="flex items-center gap-[10px] shrink-0">
                <div className="w-[7px] h-[7px] rounded-full bg-primary" />
                <p className="font-roboto-mono uppercase text-grey">
                  web development
                </p>
              </div>
              <div className="flex items-center gap-[10px] shrink-0">
                <div className="w-[7px] h-[7px] rounded-full bg-primary" />
                <p className="font-roboto-mono uppercase text-grey">
                  mobile app development
                </p>
              </div>
              <div className="flex items-center gap-[10px] shrink-0">
                <div className="w-[7px] h-[7px] rounded-full bg-primary" />
                <p className="font-roboto-mono uppercase text-grey">
                  digital marketing
                </p>
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="flex items-center gap-[10px] shrink-0">
                <div className="w-[7px] h-[7px] rounded-full bg-primary" />
                <p className="font-roboto-mono uppercase text-grey">branding</p>
              </div>
              <div className="flex items-center gap-[10px] shrink-0">
                <div className="w-[7px] h-[7px] rounded-full bg-primary" />
                <p className="font-roboto-mono uppercase text-grey">
                  web design
                </p>
              </div>
              <div className="flex items-center gap-[10px] shrink-0">
                <div className="w-[7px] h-[7px] rounded-full bg-primary" />
                <p className="font-roboto-mono uppercase text-grey">
                  web development
                </p>
              </div>
              <div className="flex items-center gap-[10px] shrink-0">
                <div className="w-[7px] h-[7px] rounded-full bg-primary" />
                <p className="font-roboto-mono uppercase text-grey">
                  mobile app development
                </p>
              </div>
              <div className="flex items-center gap-[10px] shrink-0">
                <div className="w-[7px] h-[7px] rounded-full bg-primary" />
                <p className="font-roboto-mono uppercase text-grey">
                  digital marketing
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[36%] bg-dark rounded-[16px] bg-[url('/images/hero-img.png')] bg-cover bg-center bg-no-repeat relative overflow-hidden">
          <div className="absolute bg-black -top-[20px] -right-[20px] w-[120px] h-[120px] rounded-full flex items-center justify-center">
            <svg
              viewBox="0 0 200 100"
              className="absolute -left-[10px] -bottom-[10px] w-[111px] h-[111px] -rotate-[135deg]"
            >
              <path
                d="M10 90 A90 90 0 0 1 190 90"
                fill="none"
                stroke="currentColor"
                strokeWidth={6}
                className="text-primary"
              />
            </svg>
            <div className="bg-primary w-[60px] h-[60px] rounded-full flex items-center justify-center -rotate-[45deg] ">
              <ArrowRight size={40} strokeWidth={1.5} />
            </div>
          </div>
          <div className="absolute left-0 right-0 bottom-0 bg-dark !p-[24px]">
            <p className="uppercase text-white font-medium text-[20px] mb-[4px]">
              estatein real estate
            </p>
            <p className="text-grey text-[16px]">Web Development</p>
          </div>
        </div>
      </div>
      <div className="border border-[#1F1F1F] !mt-[16px] !p-[10px] rounded-[16px] grid grid-cols-6 gap-[10px]">
        <div className="h-[101px] flex flex-col items-center justify-center bg-dark rounded-[10px]">
          <p className="font-roboto-mono uppercase text-white text-[14px] font-medium leading-tight">
            clients
          </p>
          <p className="uppercase text-primary text-[40px] font-semibold leading-tight">
            100+
          </p>
        </div>
        <div className="h-[101px] flex flex-col items-center justify-center bg-dark rounded-[10px]">
          <p className="font-roboto-mono uppercase text-white text-[14px] font-medium leading-tight">
            projects
          </p>
          <p className="uppercase text-primary text-[40px] font-semibold leading-tight">
            100+
          </p>
        </div>
        <div className="h-[101px] flex flex-col items-center justify-center bg-dark rounded-[10px]">
          <p className="font-roboto-mono uppercase text-white text-[14px] font-medium leading-tight">
            happy clients
          </p>
          <p className="uppercase text-primary text-[40px] font-semibold leading-tight">
            100%
          </p>
        </div>
        <div className="h-[101px] flex flex-col items-center justify-center bg-dark rounded-[10px]">
          <p className="font-roboto-mono uppercase text-white text-[14px] font-medium leading-tight">
            follower
          </p>
          <p className="uppercase text-primary text-[40px] font-semibold leading-tight">
            100k
          </p>
        </div>
        <div className="h-[101px] flex flex-col items-center justify-center bg-dark rounded-[10px]">
          <p className="font-roboto-mono uppercase text-white text-[14px] font-medium leading-tight">
            Years of experience
          </p>
          <p className="uppercase text-primary text-[40px] font-semibold leading-tight">
            10+
          </p>
        </div>
        <div className="h-[101px] flex items-center justify-center bg-dark rounded-[10px] gap-[16px]">
          <div className="w-[48px] h-[48px] rounded-full bg-custom-black border border-[#1F1F1F] flex items-center justify-center">
            <ArrowUpRight className="text-primary" />
          </div>
          <p className="font-roboto-mono uppercase text-grey text-[16px] font-medium leading-tight">know more</p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
