import React from "react";

const Fourth = () => {
  return (
    <section className="w-full p-10 text-[#003311] pb-32">
      <h1 className="text-[2rem] md:text-[2.8rem] font-bold text-center">
        The Benefits: For Logistics Providers
      </h1>

      {/* Benefit 1 */}
      <div className="flex flex-col md:flex-row justify-center items-center md:items-end md:px-14 mt-10 gap-5 md:gap-0">
        <div className="md:basis-[42%] md:z-40 md:mr-[-2rem] md:mb-[-2.5rem]">
          <img
            className="rounded-lg w-full h-full"
            src="/assets/ben1-DEGO-N0k.png"
            alt="Picture 1"
            loading="lazy"
          />
        </div>
        <div className="container bg-[#9acfab] rounded-lg py-3 md:py-10 px-16 md:basis-[58%]">
          <p className="font-bold text-[1rem] md:text-[1.4rem]">
            Consistent Demand for Services
          </p>
          <p className="mt-4 md:mt-8 text-[0.8rem] md:text-[1.3rem]">
            By Partnering with Konectar, Cold Chain Logistics providers gain
            access to a growing network of farmers and buyers, ensuring a steady
            demand for temperature-controlled transportation services. This
            creates a reliable stream of business opportunities within the
            agricultural sector.
          </p>
        </div>
      </div>

      {/* Benefit 2 */}
      <div className="flex flex-col md:flex-row justify-center items-center md:items-end md:px-14 mt-10 md:mt-20 gap-5 md:gap-0">
        <div className="md:basis-[42%] md:z-40 md:mr-[-2rem] md:mb-[-2.5rem]">
          <img
            className="rounded-lg w-full h-full"
            src="/assets/ben2-BDCOs4sQ.png"
            alt="Picture 2"
            loading="lazy"
          />
        </div>
        <div className="container bg-[#9acfab] rounded-lg py-3 md:py-14 px-16 md:basis-[58%]">
          <p className="font-bold text-[1rem] md:text-[1.4rem]">
            Optimized Route Planning
          </p>
          <p className="mt-4 md:mt-8 text-[0.8rem] md:text-[1.3rem]">
            With Konectar's platform, logistics providers can plan and optimize
            their delivery routes based on real-time orders from farmers and
            buyers. This helps reduce operational costs, improve delivery times,
            and maximize vehicle utilization.
          </p>
        </div>
      </div>

      {/* Benefit 3 */}
      <div className="flex flex-col md:flex-row justify-center items-center md:items-end md:px-14 mt-10 md:mt-20 gap-5 md:gap-0">
        <div className="md:basis-[42%] md:z-40 md:mr-[-2rem] md:mb-[-2.5rem]">
          <img
            className="rounded-lg w-full h-full"
            src="/assets/ben3-DAeljmNb.png"
            alt="Picture 3"
            loading="lazy"
          />
        </div>
        <div className="container bg-[#9acfab] rounded-lg py-3 md:py-10 px-16 md:basis-[58%]">
          <p className="font-bold text-[1rem] md:text-[1.4rem]">
            Enhanced Market Visibility
          </p>
          <p className="mt-4 md:mt-8 text-[0.8rem] md:text-[1.3rem]">
            Cold Chain providers listed on Konectar benefit from increased
            visibility to farmers and wholesale buyers who require reliable
            logistics for transporting perishable goods. This enhances their
            market presence and allows them to build long-term partnerships with
            key players in the agricultural supply chain.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Fourth;
