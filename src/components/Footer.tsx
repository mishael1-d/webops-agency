import React from "react";
import {
  Instagram,
  Twitter,
  Dribbble,
  MoveUpRight,
  ArrowRight,
} from "lucide-react";

function Footer() {
  return (
    <footer className="w-full flex flex-col gap-6 mt-20 font-roboto-flex text-white">
      {/* CTA Section */}
      <div className="w-full bg-primary rounded-[16px] p-8 md:p-[60px] flex flex-col md:flex-row items-start md:items-center justify-between relative overflow-hidden gap-6">
        <div className="max-w-[917px] z-10">
          <h2 className="text-3xl md:text-[38px] font-medium mb-4 uppercase">
            Ready to transform your digital presence?
          </h2>
          <p className="text-sm md:text-base opacity-90 max-w-2xl mb-8">
            Take the first step towards digital success with NexGen by your
            side. Our team of experts is eager to craft tailored solutions that
            drive growth for your business.
          </p>
        </div>
        <button className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-2 text-sm font-medium hover:bg-opacity-80 transition-all uppercase w-full md:w-auto justify-center">
          Get in touch <MoveUpRight size={16} />
        </button>
      </div>

      {/* Marquee Section */}
      <div className="w-full bg-dark py-4 overflow-hidden flex rounded-[10px]">
        <div className="animate-scroll flex gap-8 whitespace-nowrap items-center text-grey text-sm font-medium uppercase tracking-wider">
          {[...Array(10)].map((_, i) => (
            <React.Fragment key={i}>
              <span>Follow us on social media</span>
              <span className="text-primary text-[8px]">●</span>
            </React.Fragment>
          ))}
          {[...Array(10)].map((_, i) => (
            <React.Fragment key={`dup-${i}`}>
              <span>Follow us on social media</span>
              <span className="text-primary text-[8px]">●</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Social Cards - Left Column (5 columns on large screens) */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
          {/* Instagram */}
          <div className="bg-dark rounded-[16px] p-6 aspect-square flex flex-col justify-between group cursor-pointer hover:bg-[#252525] transition-colors">
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 bg-[#252525] rounded-xl flex items-center justify-center text-primary">
                <Instagram size={24} />
              </div>
              <div className="w-10 h-10 border border-[#333] rounded-full flex items-center justify-center text-grey group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                <MoveUpRight size={18} />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium uppercase mb-1">Instagram</h3>
              <p className="text-xs text-grey">
                Share visually appealing snippets of our projects.
              </p>
            </div>
          </div>

          {/* Twitter */}
          <div className="bg-dark rounded-[16px] p-6 aspect-square flex flex-col justify-between group cursor-pointer hover:bg-[#252525] transition-colors">
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 bg-[#252525] rounded-xl flex items-center justify-center text-primary">
                <Twitter size={24} />
              </div>
              <div className="w-10 h-10 border border-[#333] rounded-full flex items-center justify-center text-grey group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                <MoveUpRight size={18} />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium uppercase mb-1">Twitter</h3>
              <p className="text-xs text-grey">
                Tweet about interesting coding challenges
              </p>
            </div>
          </div>

          {/* Dribbble */}
          <div className="bg-dark rounded-[16px] p-6 aspect-square flex flex-col justify-between group cursor-pointer hover:bg-[#252525] transition-colors">
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 bg-[#252525] rounded-xl flex items-center justify-center text-primary">
                <Dribbble size={24} />
              </div>
              <div className="w-10 h-10 border border-[#333] rounded-full flex items-center justify-center text-grey group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                <MoveUpRight size={18} />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium uppercase mb-1">Dribbble</h3>
              <p className="text-xs text-grey">
                Showcase design elements of our web projects.
              </p>
            </div>
          </div>

          {/* Behance */}
          <div className="bg-dark rounded-[16px] p-6 aspect-square flex flex-col justify-between group cursor-pointer hover:bg-[#252525] transition-colors">
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 bg-[#252525] rounded-xl flex items-center justify-center text-primary font-bold text-xl">
                Be
              </div>
              <div className="w-10 h-10 border border-[#333] rounded-full flex items-center justify-center text-grey group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                <MoveUpRight size={18} />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium uppercase mb-1">Behance</h3>
              <p className="text-xs text-grey">
                Create detailed presentations for our projects.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - Links & Newsletter (7 columns) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Links Grid */}
          <div className="bg-dark rounded-[16px] p-8 md:p-12 flex-1">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Home */}
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-roboto-mono text-white mb-2">
                  Home
                </h3>
                <a
                  href="#"
                  className="text-grey hover:text-white text-sm transition-colors"
                >
                  Why Us
                </a>
                <a
                  href="#"
                  className="text-grey hover:text-white text-sm transition-colors"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="text-grey hover:text-white text-sm transition-colors"
                >
                  Testimonials
                </a>
                <a
                  href="#"
                  className="text-grey hover:text-white text-sm transition-colors"
                >
                  FAQ's
                </a>
              </div>
              {/* Services */}
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-roboto-mono text-white mb-2">
                  Services
                </h3>
                <a
                  href="#"
                  className="text-grey hover:text-white text-sm transition-colors"
                >
                  Web Development
                </a>
                <a
                  href="#"
                  className="text-grey hover:text-white text-sm transition-colors"
                >
                  App Development
                </a>
                <a
                  href="#"
                  className="text-grey hover:text-white text-sm transition-colors"
                >
                  Web Design
                </a>
                <a
                  href="#"
                  className="text-grey hover:text-white text-sm transition-colors"
                >
                  Digital Marketing
                </a>
              </div>
              {/* Projects */}
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-roboto-mono text-white mb-2">
                  Projects
                </h3>
                <a
                  href="#"
                  className="text-grey hover:text-white text-sm transition-colors"
                >
                  Klothink
                </a>
                <a
                  href="#"
                  className="text-grey hover:text-white text-sm transition-colors"
                >
                  Zenith
                </a>
                <a
                  href="#"
                  className="text-grey hover:text-white text-sm transition-colors"
                >
                  Novus
                </a>
                <a
                  href="#"
                  className="text-grey hover:text-white text-sm transition-colors"
                >
                  Apex
                </a>
              </div>
              {/* Blogs */}
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-roboto-mono text-white mb-2">
                  Blogs
                </h3>
                <a
                  href="#"
                  className="text-grey hover:text-white text-sm transition-colors"
                >
                  Business
                </a>
                <div className="flex items-center gap-2">
                  <a
                    href="#"
                    className="text-grey hover:text-white text-sm transition-colors"
                  >
                    Design
                  </a>
                  <span className="text-[10px] bg-[#252525] text-grey px-2 py-0.5 rounded border border-[#333]">
                    Soon
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="#"
                    className="text-grey hover:text-white text-sm transition-colors"
                  >
                    Development
                  </a>
                  <span className="text-[10px] bg-[#252525] text-grey px-2 py-0.5 rounded border border-[#333]">
                    Soon
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="bg-[#1A1A1A] rounded-[16px] p-8 md:px-12 md:py-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h4 className="text-sm text-grey uppercase mb-2">Newsletter</h4>
                <h3 className="text-2xl font-medium uppercase">
                  Subscribe to our newsletter
                </h3>
              </div>
              <div className="flex-1 max-w-md">
                <div className="flex items-center gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-transparent border-b border-[#333] pb-2 text-white placeholder-grey focus:outline-none focus:border-[#D97757] transition-colors"
                  />
                  <button className="w-10 h-10 border border-[#333] rounded-full flex items-center justify-center text-grey hover:bg-[#D97757] hover:text-white hover:border-[#D97757] transition-all shrink-0">
                    <MoveUpRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-[#1A1A1A] rounded-[24px] p-6 flex flex-col md:flex-row justify-between items-center text-sm font-roboto-mono text-grey gap-4">
        <p>&copy; 2026 WebOps. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">
            Terms & Conditions
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
