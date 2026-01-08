import { ArrowRight, ArrowUpRight } from "lucide-react";
import React from "react";

function TestimonialSection() {
  return (
    <section className="mt-[80px]">
      <div className="border border-[#1F1F1F] !p-[10px] rounded-[16px]">
        <div className="bg-dark rounded-[10px] p-[40px] flex items-center justify-between mb-[10px]">
          <h2 className="uppercase text-[35px] font-semibold text-white tracking-tight">
            Testimonials
          </h2>
          <div className="flex items-center gap-[10px]">
            <div className="w-[52px] h-[52px] rounded-full bg-custom-black border border-[#1F1F1F] flex items-center justify-center">
              <ArrowUpRight className="text-white" strokeWidth={1} />
            </div>
            <p className="uppercase text-white text-[16px] font-medium leading-tight">
              all Testimonials
            </p>
          </div>
        </div>
        <div className="grid grid-cols-4 !mt-[10px] gap-[10px]">
          <div className="bg-dark rounded-[10px] h-[357px] text-white relative">
            <div className="p-[30px]">
              <h3 className="uppercase text-[22px] font-medium tracking-tight mb-[20px]">
                WebOps turned our business around!
              </h3>
              <p className="text-grey !mb-[30px]">
                Their digital marketing strategies helped us reach new customers
                and increase our revenue by 30% within just a few months. Highly
                recommended!
              </p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 px-[30px] py-[20px] bg-[#1F1F1F] rounded-b-[16px] flex items-center">
              <div className="w-[45px] h-[45px] rounded-full bg-primary text-white flex items-center justify-center mr-[10px]">
                ST
              </div>
              <div>
                <p className="text-[18px] tracking-tight">Wade Warren</p>
                <p className="text-[#B3B3B2]">Art Director</p>
              </div>
              <div className="w-[40px] h-[40px] rounded-full text-white flex items-center justify-center ml-[20px] border border-[#333333]">
                <ArrowRight strokeWidth={1} className="text-primary"/>
              </div>
            </div>
          </div>
          <div className="bg-dark rounded-[10px] h-[357px] text-white relative">
            <div className="p-[30px]">
              <h3 className="uppercase text-[22px] font-medium tracking-tight mb-[20px]">
                Working with WebOps was a pleasure
              </h3>
              <p className="text-grey !mb-[30px]">
                Their digital marketing strategies helped us reach new customers
                and increase our revenue by 30% within just a few months. Highly
                recommended!
              </p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 px-[30px] py-[20px] bg-[#1F1F1F] rounded-b-[16px] flex items-center">
              <div className="w-[45px] h-[45px] rounded-full bg-primary text-white flex items-center justify-center mr-[10px]">
                ST
              </div>
              <div>
                <p className="text-[18px] tracking-tight">Lisa Williams</p>
                <p className="text-[#B3B3B2]">CEO of HealthTech</p>
              </div>
              <div className="w-[40px] h-[40px] rounded-full text-white flex items-center justify-center ml-[20px] border border-[#333333]">
                <ArrowRight strokeWidth={1} className="text-primary"/>
              </div>
            </div>
          </div>
          <div className="bg-dark rounded-[10px] h-[357px] text-white relative">
            <div className="p-[30px]">
              <h3 className="uppercase text-[22px] font-medium tracking-tight mb-[20px]">
                webops's web design brought our vision
              </h3>
              <p className="text-grey !mb-[30px]">
                Their digital marketing strategies helped us reach new customers
                and increase our revenue by 30% within just a few months. Highly
                recommended!
              </p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 px-[30px] py-[20px] bg-[#1F1F1F] rounded-b-[16px] flex items-center">
              <div className="w-[45px] h-[45px] rounded-full bg-primary text-white flex items-center justify-center mr-[10px]">
                ST
              </div>
              <div>
                <p className="text-[18px] tracking-tight">Jennifer Lee</p>
                <p className="text-[#B3B3B2]">COO of Foddie Haven</p>
              </div>
              <div className="w-[40px] h-[40px] rounded-full text-white flex items-center justify-center ml-[20px] border border-[#333333]">
                <ArrowRight strokeWidth={1} className="text-primary"/>
              </div>
            </div>
          </div>
          <div className="bg-dark rounded-[10px] h-[357px] text-white relative">
            <div className="p-[30px]">
              <h3 className="uppercase text-[22px] font-medium tracking-tight mb-[20px]">
                webops turned our business around!
              </h3>
              <p className="text-grey !mb-[30px]">
                Their digital marketing strategies helped us reach new customers
                and increase our revenue by 30% within just a few months. Highly
                recommended!
              </p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 px-[30px] py-[20px] bg-[#1F1F1F] rounded-b-[16px] flex items-center">
              <div className="w-[45px] h-[45px] rounded-full bg-primary text-white flex items-center justify-center mr-[10px]">
                ST
              </div>
              <div>
                <p className="text-[18px] tracking-tight">Sarah Thompson</p>
                <p className="text-[#B3B3B2]">CEO of BlueBloom</p>
              </div>
              <div className="w-[40px] h-[40px] rounded-full text-white flex items-center justify-center ml-[20px] border border-[#333333]">
                <ArrowRight strokeWidth={1} className="text-primary"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
