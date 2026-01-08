import { ArrowUpRight, Star, Store } from "lucide-react";
import Image from "next/image";
import React from "react";

function WorkSection() {
  return (
    <section className="mt-[80px]">
      <div>
        <div className="bg-dark rounded-[10px] p-[20px] md:p-[40px] flex flex-col md:flex-row items-center justify-between mb-[10px] gap-4">
          <h2 className="uppercase text-[24px] md:text-[35px] font-semibold text-white tracking-tight text-center md:text-left">
            Our works
          </h2>
          <div className="flex items-center gap-[10px]">
            <div className="w-[52px] h-[52px] rounded-full bg-custom-black border border-[#1F1F1F] flex items-center justify-center">
              <ArrowUpRight className="text-white" strokeWidth={1} />
            </div>
            <p className="uppercase text-white text-[16px] font-medium leading-tight">
              all works
            </p>
          </div>
        </div>
        <div className="space-y-[10px]">
          <div className="border border-[#1F1F1F] !p-[10px] rounded-[16px] grid grid-cols-1 lg:grid-cols-3 gap-[10px]">
            <div className="bg-dark rounded-[10px] py-[30px] md:py-[50px] px-[20px] md:px-[30px] min-h-[348px] text-white">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-center gap-[6px]">
                  <div className="w-[56px] h-[56px] rounded-[10px] border border-[#1F1F1F] bg-[#1f1f1f] flex items-center justify-center">
                    <Star className="text-primary" />
                  </div>
                  <h3 className="uppercase text-[18px] font-medium tracking-tight">
                    zenith fitness app
                  </h3>
                </div>
                <div className="flex items-center gap-[10px]">
                  <div className="w-[44px] h-[44px] rounded-full bg-custom-black border border-[#1F1F1F] flex items-center justify-center">
                    <ArrowUpRight className="text-white" strokeWidth={1} />
                  </div>
                  <p className="uppercase text-white text-[14px] font-medium leading-tight">
                    details
                  </p>
                </div>
              </div>
              <div className="my-[30px] flex flex-wrap gap-2">
                <div className="flex items-center gap-[10px] text-[14px] text-grey bg-[#1F1F1F] py-[8px] px-[14px] rounded-[45px] w-fit">
                  <p>Category</p>
                  <div className="w-[5px] h-[5px] bg-primary rounded-full" />
                  <p className="text-white font-medium">
                    Mobile App Development
                  </p>
                </div>
                <div className="flex items-center gap-[10px] text-[14px] text-grey bg-[#1F1F1F] py-[8px] px-[14px] rounded-[45px] w-fit">
                  <p>Time Taken</p>
                  <div className="w-[5px] h-[5px] bg-primary rounded-full" />
                  <p className="text-white font-medium">6 months</p>
                </div>
              </div>
              <p>
                An all-in-one health and wellness app that offers personalized
                fitness plans, nutrition guidance
              </p>
            </div>
            <div className="min-h-[300px] lg:min-h-auto">
              <Image
                src={"/images/Image.png"}
                alt=""
                width={440}
                height={348}
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
            <div className="">
              <div className="bg-dark rounded-[10px] p-[30px] min-h-[182px] mb-[10px]">
                <h3 className="uppercase text-white font-medium tracking-tight mb-[16px]">
                  technologies used
                </h3>
                <div className="flex gap-[10px] md:gap-[16px] flex-wrap">
                  <div className="font-roboto-mono flex items-center gap-[10px] text-[14px] text-white bg-[#1F1F1F] py-[8px] px-[14px] rounded-[45px] w-fit">
                    React Native
                  </div>
                  <div className="font-roboto-mono flex items-center gap-[10px] text-[14px] text-white bg-[#1F1F1F] py-[8px] px-[14px] rounded-[45px] w-fit">
                    Firebase
                  </div>
                  <div className="font-roboto-mono flex items-center gap-[10px] text-[14px] text-white bg-[#1F1F1F] py-[8px] px-[14px] rounded-[45px] w-fit">
                    Redux
                  </div>
                  <div className="font-roboto-mono flex items-center gap-[10px] text-[14px] text-white bg-[#1F1F1F] py-[8px] px-[14px] rounded-[45px] w-fit">
                    REST API
                  </div>
                  <div className="font-roboto-mono flex items-center gap-[10px] text-[14px] text-white bg-[#1F1F1F] py-[8px] px-[14px] rounded-[45px] w-fit">
                    MongoDB
                  </div>
                </div>
              </div>
              <div className="bg-dark rounded-[10px] p-[16px] h-[72px] mb-[10px] flex items-center justify-between">
                <p className="uppercase text-white font-medium tracking-tight">
                  Team Members
                </p>
                <div className="flex items-center gap-[10px]">
                  <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-primary/50 font-medium font-roboto-mono text-white">
                    MD
                  </div>
                  <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-primary/50 font-medium font-roboto-mono text-white">
                    BC
                  </div>
                  <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-primary/50 font-medium font-roboto-mono text-white">
                    OP
                  </div>
                </div>
              </div>
              <button className="w-full uppercase bg-primary !px-[20px] rounded-[10px] font-medium text-[14px] h-[46px] flex items-center justify-center">
                book a call
              </button>
            </div>
          </div>
          <div className="border border-[#1F1F1F] !p-[10px] rounded-[16px] grid grid-cols-1 lg:grid-cols-3 gap-[10px]">
            <div className="bg-dark rounded-[10px] py-[30px] md:py-[50px] px-[20px] md:px-[30px] min-h-[348px] text-white">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-center gap-[6px]">
                  <div className="w-[56px] h-[56px] rounded-[10px] border border-[#1F1F1F] bg-[#1f1f1f] flex items-center justify-center">
                    <Store className="text-primary" />
                  </div>
                  <h3 className="uppercase text-[18px] font-medium tracking-tight">
                    A- aura ecommerce
                  </h3>
                </div>
                <div className="flex items-center gap-[10px]">
                  <div className="w-[44px] h-[44px] rounded-full bg-custom-black border border-[#1F1F1F] flex items-center justify-center">
                    <ArrowUpRight className="text-white" strokeWidth={1} />
                  </div>
                  <p className="uppercase text-white text-[14px] font-medium leading-tight">
                    details
                  </p>
                </div>
              </div>
              <div className="my-[30px] flex flex-wrap gap-2">
                <div className="flex items-center gap-[10px] text-[14px] text-grey bg-[#1F1F1F] py-[8px] px-[14px] rounded-[45px] w-fit">
                  <p>Category</p>
                  <div className="w-[5px] h-[5px] bg-primary rounded-full" />
                  <p className="text-white font-medium">
                    Web Design & Development
                  </p>
                </div>
                <div className="flex items-center gap-[10px] text-[14px] text-grey bg-[#1F1F1F] py-[8px] px-[14px] rounded-[45px] w-fit">
                  <p>Time Taken</p>
                  <div className="w-[5px] h-[5px] bg-primary rounded-full" />
                  <p className="text-white font-medium">3 months</p>
                </div>
              </div>
              <p>
                A complete overhaul of a corporate website to enhance its brand
                identity and user experience.
              </p>
            </div>
            <div className="min-h-[300px] lg:min-h-auto">
              <Image
                src={"/images/Image2.png"}
                alt=""
                width={440}
                height={348}
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
            <div className="">
              <div className="bg-dark rounded-[10px] p-[30px] min-h-[182px] mb-[10px]">
                <h3 className="uppercase text-white font-medium tracking-tight mb-[16px]">
                  technologies used
                </h3>
                <div className="flex gap-[10px] md:gap-[16px] flex-wrap">
                  <div className="font-roboto-mono flex items-center gap-[10px] text-[14px] text-white bg-[#1F1F1F] py-[8px] px-[14px] rounded-[45px] w-fit">
                    Figma
                  </div>
                  <div className="font-roboto-mono flex items-center gap-[10px] text-[14px] text-white bg-[#1F1F1F] py-[8px] px-[14px] rounded-[45px] w-fit">
                    NextJs
                  </div>
                  <div className="font-roboto-mono flex items-center gap-[10px] text-[14px] text-white bg-[#1F1F1F] py-[8px] px-[14px] rounded-[45px] w-fit">
                    Framer Motion
                  </div>
                  <div className="font-roboto-mono flex items-center gap-[10px] text-[14px] text-white bg-[#1F1F1F] py-[8px] px-[14px] rounded-[45px] w-fit">
                    Tailwind CSS
                  </div>
                  <div className="font-roboto-mono flex items-center gap-[10px] text-[14px] text-white bg-[#1F1F1F] py-[8px] px-[14px] rounded-[45px] w-fit">
                    Vercel
                  </div>
                </div>
              </div>
              <div className="bg-dark rounded-[10px] p-[16px] h-[72px] mb-[10px] flex items-center justify-between">
                <p className="uppercase text-white font-medium tracking-tight">
                  Team Members
                </p>
                <div className="flex items-center gap-[10px]">
                  <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-primary/50 font-medium font-roboto-mono text-white">
                    MD
                  </div>
                  <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-primary/50 font-medium font-roboto-mono text-white">
                    BC
                  </div>
                  <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-primary/50 font-medium font-roboto-mono text-white">
                    OP
                  </div>
                </div>
              </div>
              <button className="w-full uppercase bg-primary !px-[20px] rounded-[10px] font-medium text-[14px] h-[46px] flex items-center justify-center">
                book a call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkSection;
