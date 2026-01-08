import {
  ArrowUpRight,
  Braces,
  LoaderPinwheel,
  Palette,
  Store,
  TabletSmartphone,
} from "lucide-react";

function ServicesSection() {
  return (
    <section className="!mt-[80px]">
      <div className="border border-[#1F1F1F] !p-[10px] rounded-[16px]">
        <div className="bg-dark rounded-[10px] p-[40px]">
          <h2 className="uppercase text-[35px] font-semibold text-white tracking-tight">
            Our services
          </h2>
        </div>
        <div className="grid grid-cols-2 !mt-[10px] gap-[10px]">
          <div className="bg-dark rounded-[10px] p-[60px] h-[290px] text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[10px]">
                <div className="w-[56px] h-[56px] rounded-[10px] border border-[#1F1F1F] bg-[#1f1f1f] flex items-center justify-center">
                  <Palette color="#7c2dcb" />
                </div>
                <h3 className="uppercase text-[22px] font-medium tracking-tight">
                  web design
                </h3>
              </div>
              <div className="flex items-center gap-[10px]">
                <div className="w-[52px] h-[52px] rounded-full bg-custom-black border border-[#1F1F1F] flex items-center justify-center">
                  <ArrowUpRight className="text-white" strokeWidth={1} />
                </div>
                <p className="uppercase text-white text-[16px] font-medium leading-tight">
                  book a call
                </p>
              </div>
            </div>
            <div className="mt-[40px]">
              <p className="text-grey">
                Our Web Design service is all about creating visually stunning
                and user-friendly websites that leave a lasting.
              </p>
              <p className="uppercase text-right tracking-tight mt-[16px] font-medium text-[22px]">
                starts from $1,500
              </p>
            </div>
          </div>
          <div className="bg-dark rounded-[10px] p-[60px] h-[290px] text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[10px]">
                <div className="w-[56px] h-[56px] rounded-[10px] border border-[#1F1F1F] bg-[#1f1f1f] flex items-center justify-center">
                  <Braces color="#7c2dcb" />
                </div>
                <h3 className="uppercase text-[22px] font-medium tracking-tight">
                  web development
                </h3>
              </div>
              <div className="flex items-center gap-[10px]">
                <div className="w-[52px] h-[52px] rounded-full bg-custom-black border border-[#1F1F1F] flex items-center justify-center">
                  <ArrowUpRight className="text-white" strokeWidth={1} />
                </div>
                <p className="uppercase text-white text-[16px] font-medium leading-tight">
                  book a call
                </p>
              </div>
            </div>
            <div className="mt-[40px]">
              <p className="text-grey">
                Our Web Development service is focused on turning your website
                into a powerful digital asset. We utilize the latest
                technologies and industry best practices to build websites.
              </p>
              <p className="uppercase text-right tracking-tight mt-[16px] font-medium text-[22px]">
                starts from $1,800
              </p>
            </div>
          </div>
          <div className="bg-dark rounded-[10px] p-[60px] h-[290px] text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[10px]">
                <div className="w-[56px] h-[56px] rounded-[10px] border border-[#1F1F1F] bg-[#1f1f1f] flex items-center justify-center">
                  <TabletSmartphone color="#7c2dcb" />
                </div>
                <h3 className="uppercase text-[22px] font-medium tracking-tight">
                  mobile app development
                </h3>
              </div>
              <div className="flex items-center gap-[10px]">
                <div className="w-[52px] h-[52px] rounded-full bg-custom-black border border-[#1F1F1F] flex items-center justify-center">
                  <ArrowUpRight className="text-white" strokeWidth={1} />
                </div>
                <p className="uppercase text-white text-[16px] font-medium leading-tight">
                  book a call
                </p>
              </div>
            </div>
            <div className="mt-[40px]">
              <p className="text-grey">
                With our Mobile App Development service, we harness the power of
                mobile technology to create cutting-edge applications .
              </p>
              <p className="uppercase text-right tracking-tight mt-[16px] font-medium text-[22px]">
                starts from $2,500
              </p>
            </div>
          </div>
          <div className="bg-dark rounded-[10px] p-[60px] h-[290px] text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[10px]">
                <div className="w-[56px] h-[56px] rounded-[10px] border border-[#1F1F1F] bg-[#1f1f1f] flex items-center justify-center">
                  <Store color="#7c2dcb" />
                </div>
                <h3 className="uppercase text-[22px] font-medium tracking-tight">
                  digital marketing
                </h3>
              </div>
              <div className="flex items-center gap-[10px]">
                <div className="w-[52px] h-[52px] rounded-full bg-custom-black border border-[#1F1F1F] flex items-center justify-center">
                  <ArrowUpRight className="text-white" strokeWidth={1} />
                </div>
                <p className="uppercase text-white text-[16px] font-medium leading-tight">
                  book a call
                </p>
              </div>
            </div>
            <div className="mt-[40px]">
              <p className="text-grey">
                In the digital age, marketing is a critical aspect of your
                business's success. Our Digital Marketing service employs
                data-driven strategies to enhance your brand's visibility
              </p>
              <p className="uppercase text-right tracking-tight mt-[16px] font-medium text-[22px]">
                starts from $1,200
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
