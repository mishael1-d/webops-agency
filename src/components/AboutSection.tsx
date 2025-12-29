function AboutSection() {
  return (
    <section className="relative py-[50px] bg-[#7C2DCB] rounded-t-[50px]">
      <div className="max-w-[95%] mx-auto">
        <div className="px-[40px] flex justify-between">
          <h2 className="text-[24px] font-bold mb-[20px] tracking-[20px] uppercase leading-[20px] text-white">
            WebOps
            <span className="text-[15px] tracking-[1.5px]">
              <br />
              Software Solutions
            </span>
          </h2>
          <div className="max-w-[700px] text-justify text-white">
            {/* <p className="text-[22px] tracking-tight uppercase mb-[16px] font-semibold text-white">
              Most businesses lose time and money on software that can’t scale.
            </p> */}
            <p className="text-[20px] tracking-tight leading-[30px]">
              What starts as a solution quickly becomes a bottleneck — slow
              systems, fragile code, and expensive rebuilds that stall growth
              and drain momentum. <br />
              At WebOps Software Solutions, we build high-performance web
              systems designed to grow with your business — not break when
              demand increases. <br />
              We focus on software that is fast to launch, built for scale, and
              efficient to operate. Every technical decision is tied to a real
              business outcome, helping teams move faster, reduce risk, and
              avoid costly rework. <br />
              The result is simple: Our clients launch faster, operate leaner,
              and scale confidently without rebuilding their entire platform.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-[24px] p-[20px] grid grid-cols-1 md:grid-cols-3 gap-[16px] m-[40px]">
          {/* Card 1: Projects Delivered */}
          <div
            className="row-span-1 md:row-span-3 bg-white rounded-[24px] p-[20px] flex flex-col justify-between min-h-[400px] border border-zinc-100"
            style={{
              background: "linear-gradient(180deg, #FFFFFF 0%, #FCE7F3 100%)",
            }}
          >
            <p className="text-[64px] font-semibold tracking-tight text-zinc-900">
              230+
            </p>
            <div>
              <p className="text-[20px] font-semibold tracking-tight text-zinc-900 mb-[8px]">
                Projects Delivered
              </p>
              <p className="text-[14px] font-medium tracking-tight text-zinc-500 leading-relaxed">
                Across SaaS, eCommerce, Real Estate, AI, and more — all
                conversion-focused and user-first.
              </p>
            </div>
          </div>

          {/* Card 2: Seamless Workflow */}
          <div className="bg-white rounded-[24px] p-[16px] border border-zinc-100 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="max-w-[250px]">
                <p className="text-[16px] font-semibold tracking-tight text-zinc-900 mb-[4px]">
                  Seamless Workflow Integration
                </p>
                <p className="text-[12px] font-medium tracking-tight text-zinc-500 leading-tight">
                  From Figma to Webflow — we keep things clean, fast, and
                  collaborative.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4: Client Growth Results */}
          <div
            className="row-span-1 md:row-span-2 bg-white rounded-[24px] p-[20px] flex flex-col justify-between border border-zinc-100"
            style={{
              background: "linear-gradient(180deg, #FFFFFF 0%, #E0F2FE 100%)",
            }}
          >
            <p className="text-[64px] font-semibold tracking-tight text-zinc-900">
              35X
            </p>
            <div>
              <p className="text-[20px] font-semibold tracking-tight text-zinc-900 mb-[8px]">
                Client Growth Results
              </p>
              <p className="text-[14px] font-medium tracking-tight text-zinc-500 leading-relaxed">
                Our clients see massive ROI through high-converting UX and
                Webflow development.
              </p>
            </div>
          </div>

          {/* Card 3: Client Satisfaction */}
          <div
            className="bg-white rounded-[24px] p-[20px] flex flex-col justify-between border border-zinc-100"
            style={{
              background: "linear-gradient(135deg, #FFFFFF 0%, #E0F2FE 100%)",
            }}
          >
            <p className="text-[64px] font-semibold tracking-tight text-zinc-900">
              98%
            </p>
            <div>
              <p className="text-[20px] font-semibold tracking-tight text-zinc-900 mb-[8px]">
                Client Satisfaction
              </p>
              <p className="text-[14px] font-medium tracking-tight text-zinc-500 leading-relaxed">
                Rated 5-stars across all platforms — we deliver exactly what
                your business needs.
              </p>
            </div>
          </div>

          {/* Card 5: Our Clients in 35+ Countries */}
          <div className="col-span-1 md:col-span-2 bg-white rounded-[24px] p-[16px] border border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-[16px]">
            <div>
              <p className="text-[18px] font-semibold tracking-tight text-zinc-900 mb-[4px]">
                Our Clients in 35+ Countries
              </p>
              <p className="text-[14px] font-medium tracking-tight text-zinc-500">
                We collaborate with startups and businesses across the US,
                Europe, and Asia.
              </p>
            </div>
            <div className="flex -space-x-[8px]">
              {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                <div
                  key={i}
                  className="w-[32px] h-[32px] rounded-full border-2 border-white bg-zinc-100 overflow-hidden"
                >
                  <img
                    src={`https://flagcdn.com/w80/${
                      ["us", "gb", "de", "fr", "jp", "ca", "au"][i - 1]
                    }.png`}
                    alt="flag"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
