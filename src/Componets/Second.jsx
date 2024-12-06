import React from "react";

const Second = () => {
  return (
    <section className="w-full bg-[#CECEDE] p-10 py-24 text-center">
      <h1 className="text-center text-[#0d2727] font-bold text-[2rem] md:text-[2.8rem]">
        What We Offer
      </h1>
      <p className="text-center text-[1rem] md:text-[1.3rem] text-[#003311] font-semibold">
        Receive Orders, Pickup, and Deliver
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-24 mt-8">
        <div className="h-[85px] w-[300px] cursor-default text-white py-6 px-5 rounded-lg bg-[#07190B]">
          <p>Increased Business Opportunities</p>
        </div>
        <div className="h-[85px] w-[300px] cursor-default text-white py-6 px-12 rounded-lg bg-[#07190B]">
          <p>Route Optimization</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-24 mt-8">
        <div className="h-[80px] w-[300px] text-white cursor-default py-6 px-4 rounded-lg bg-[#07190B]">
          <p>Access to Verified Clients</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-24 mt-8">
        <div className="h-[80px] w-[300px] cursor-default text-white py-6 px-12 rounded-lg bg-[#07190B]">
          <p>Real-Time Tracking</p>
        </div>
        <div className="h-[80px] w-[300px] cursor-default text-white py-6 px-7 rounded-lg bg-[#07190B]">
          <p>Improved Asset Utilization</p>
        </div>
      </div>
    </section>
  );
};

export default Second;
