"use client";

import { ArrowUpRight, Minus, Plus } from "lucide-react";
import React, { useState } from "react";

const faqData = [
  {
    question: "How long does it take to complete a web development project?",
    answer:
      "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.",
  },
  {
    question: "Can you handle large-scale mobile app development projects?",
    answer:
      "Yes, we specialize in scalable mobile application development for both iOS and Android platforms, ensuring high performance and robustness.",
  },
  {
    question: "Can you integrate third-party APIs into our mobile app?",
    answer:
      "Absolutely. We have extensive experience integrating various third-party services and APIs to enhance the functionality of your mobile applications.",
  },
  {
    question: "How do you ensure cross-platform compatibility for mobile apps?",
    answer:
      "We use modern frameworks like React Native and Flutter to build cross-platform apps that provide a seamless native-like experience on both iOS and Android devices.",
  },
  {
    question: "What is your approach to user experience (UX) design?",
    answer:
      "Our UX design process focuses on user research, wireframing, and prototyping to create intuitive and engaging interfaces that meet user needs and business goals.",
  },
];

function QuestionSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mt-[80px]">
      <div className="bg-dark rounded-[10px] p-[40px] flex items-center justify-between mb-[10px]">
        <h2 className="uppercase text-[35px] font-semibold text-white tracking-tight">
          Frequently Asked Questions
        </h2>
        <div className="flex items-center gap-[10px]">
          <div className="w-[52px] h-[52px] rounded-full bg-custom-black border border-[#1F1F1F] flex items-center justify-center">
            <ArrowUpRight className="text-white" strokeWidth={1} />
          </div>
          <p className="uppercase text-white text-[16px] font-medium leading-tight">
            view all
          </p>
        </div>
      </div>
      <div className="flex gap-[10px] items-start">
        {/* Left Column: FAQ Accordion */}
        <div className="w-[60%] flex flex-col gap-[10px]">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                onClick={() => toggleAccordion(index)}
                className={`bg-dark rounded-[10px] p-[30px] cursor-pointer transition-all duration-300 ${
                  isOpen ? "min-h-[180px]" : "h-[100px] flex items-center"
                }`}
              >
                <div className="flex justify-between items-start w-full">
                  <h3 className="text-white text-[18px] font-medium leading-snug max-w-[85%]">
                    {item.question}
                  </h3>
                  <button className="w-[38px] h-[38px] rounded-full bg-[#262626] flex items-center justify-center transition-colors hover:bg-[#333]">
                    {isOpen ? (
                      <Minus className="text-gray-400 w-5 h-5" />
                    ) : (
                      <Plus className="text-gray-400 w-5 h-5" />
                    )}
                  </button>
                </div>
                {isOpen && (
                  <div className="mt-6 border-t border-[#262626] pt-6 animate-fadeIn">
                    <p className="text-gray-400 text-[15px] leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Column: Contact Form */}
        <div className="w-[40%] bg-dark rounded-[10px] p-[40px] h-[640px] flex flex-col">
          <h3 className="text-white text-[20px] uppercase font-medium mb-[35px]">
            Ask Your Question
          </h3>
          <form className="flex flex-col gap-[25px]">
            <div className="flex flex-col gap-[10px]">
              <label className="text-gray-400 text-[12px] uppercase tracking-wider font-medium">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full h-[55px] bg-custom-black rounded-[8px] px-5 text-white placeholder-gray-600 outline-none focus:ring-1 focus:ring-gray-700 transition-all text-sm"
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <label className="text-gray-400 text-[12px] uppercase tracking-wider font-medium">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-[55px] bg-custom-black rounded-[8px] px-5 text-white placeholder-gray-600 outline-none focus:ring-1 focus:ring-gray-700 transition-all text-sm"
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <label className="text-gray-400 text-[12px] uppercase tracking-wider font-medium">
                Your Question
              </label>
              <textarea
                placeholder="Enter Your Question Here ....."
                className="w-full h-[140px] bg-custom-black rounded-[8px] p-5 text-white placeholder-gray-600 outline-none focus:ring-1 focus:ring-gray-700 transition-all text-sm resize-none"
              />
            </div>
            <button
              type="submit"
              className="mt-[5px] w-full h-[55px] bg-primary text-black uppercase font-bold text-[14px] tracking-tight rounded-[8px] hover:bg-[#c57a63] transition-colors"
            >
              Send Your Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default QuestionSection;
