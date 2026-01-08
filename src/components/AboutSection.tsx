import { ArrowUpRight } from "lucide-react";

function AboutSection() {
  return (
    <section className="!mt-[80px]">
      <div className="border border-[#1F1F1F] !p-[10px] rounded-[16px]">
        <div className="bg-dark rounded-[10px] p-[20px] md:p-[40px]">
          <h2 className="uppercase text-[24px] md:text-[35px] font-semibold text-white tracking-tight">
            reasons to choose webops for your digital journey
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 !mt-[10px] gap-[10px]">
          <div className="bg-dark rounded-[10px] p-[30px] min-h-auto lg:min-h-[290px] text-white">
            <h3 className="uppercase text-[22px] font-medium tracking-tight mb-[10px]">
              Expertise in Cutting-Edge Technologies
            </h3>
            <p className="text-grey !mb-[30px]">
              WebOps ensures your projects are powered by state-of-the-art
              technologies, guaranteeing...
            </p>
            <div className="flex items-center gap-[10px]">
              <div className="w-[52px] h-[52px] rounded-full bg-custom-black border border-[#1F1F1F] flex items-center justify-center">
                <ArrowUpRight className="text-primary/60" />
              </div>
              <p className="capitalize text-grey text-[16px] font-medium leading-tight">
                learn more
              </p>
            </div>
          </div>
          <div className="bg-dark rounded-[10px] p-[30px] min-h-auto lg:min-h-[290px] text-white">
            <h3 className="uppercase text-[22px] font-medium tracking-tight mb-[10px]">
              Proven Track Record of Success
            </h3>
            <p className="text-grey !mb-[30px]">
              WebOps demonstrates a consistent ability to meet and exceed client
              expectations, providing reliable...
            </p>
            <div className="flex items-center gap-[10px]">
              <div className="w-[52px] h-[52px] rounded-full bg-custom-black border border-[#1F1F1F] flex items-center justify-center">
                <ArrowUpRight className="text-primary/60" />
              </div>
              <p className="capitalize text-grey text-[16px] font-medium leading-tight">
                learn more
              </p>
            </div>
          </div>
          <div className="bg-dark rounded-[10px] p-[30px] min-h-auto lg:min-h-[290px] text-white">
            <h3 className="uppercase text-[22px] font-medium tracking-tight mb-[10px]">
              Client-Centric Approach
            </h3>
            <p className="text-grey !mb-[30px]">
              At WebOps, we prioritize understanding our clients' unique
              requirements, fostering ...
            </p>
            <div className="flex items-center gap-[10px]">
              <div className="w-[52px] h-[52px] rounded-full bg-custom-black border border-[#1F1F1F] flex items-center justify-center">
                <ArrowUpRight className="text-primary/60" />
              </div>
              <p className="capitalize text-grey text-[16px] font-medium leading-tight">
                learn more
              </p>
            </div>
          </div>
          <div className="bg-dark rounded-[10px] p-[30px] min-h-auto lg:min-h-[290px] text-white">
            <h3 className="uppercase text-[22px] font-medium tracking-tight mb-[10px]">
              Dedicated Team of Professionals
            </h3>
            <p className="text-grey !mb-[30px]">
              Our professionals bring a wealth of expertise to the table,
              ensuring the delivery of top-notch, scalable...
            </p>
            <div className="flex items-center gap-[10px]">
              <div className="w-[52px] h-[52px] rounded-full bg-custom-black border border-[#1F1F1F] flex items-center justify-center">
                <ArrowUpRight className="text-primary/60" />
              </div>
              <p className="capitalize text-grey text-[16px] font-medium leading-tight">
                learn more
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
