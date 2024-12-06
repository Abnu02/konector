import React from "react";

const Third = () => {
  return (
    <section className="w-full bg-[#003311] py-16 px-3 md:px-6 text-white">
      <h1 className="text-center font-Manrope font-bold text-[2rem] md:text-[2.8rem] leading-tight md:leading-snug">
        How It Works in 3 Simple Steps
      </h1>

      {/* Step 1 */}
      <div className="w-full flex justify-between gap-2 md:gap-0 items-center mt-10 px-6 md:px-20">
        <div className="basis-[65%] bg-[#b6d8c1] rounded-xl text-[#003311] p-5 md:p-10">
          <h1 className="text-[1rem] md:text-[1.8rem] font-bold md:ml-32">
            Step 1
          </h1>
          <h1 className="text-[0.9rem] md:text-[1.4rem] font-bold mt-3">
            Sign Up & Add Vehicle Information
          </h1>
          <p className="text-[0.8rem] md:text-[1.4rem] mt-3 md:mt-5">
            Get started by creating an account on Konectar. If you are a
            logistics partner, simply fill in your vehicle details to ensure our
            system matches you with suitable delivery orders.
          </p>
        </div>
        <div className="basis-[35%] md:basis-[30%] flex items-end gap-3">
          <div className="basis-[60%]">
            <img
              src="/assets/ip1-D6PYdQ4K.png"
              alt="Picture 1"
              loading="lazy"
            />
          </div>
          <div className="basis-[60%] mb-[-2rem] md:mb-[-4rem]">
            <img
              src="/assets/iphone1-2-zSGsJbL1.png"
              alt="Picture 2"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Step 2 */}
      <div className="w-full flex justify-between gap-6 items-center mt-10 md:mt-20 px-6 md:px-20">
        <div className="basis-[35%] md:basis-[30%] flex items-end gap-3">
          <div className="basis-[70%]">
            <img
              src="/assets/ip6-C50gFvN2.png"
              alt="Picture 1"
              loading="lazy"
            />
          </div>
          <div className="basis-[60%] mb-[-2rem] md:mb-[-3rem]">
            <img
              src="/assets/ip7-749xnqVA.png"
              alt="Picture 2"
              loading="lazy"
            />
          </div>
        </div>
        <div className="basis-[65%] bg-[#b6d8c1] rounded-xl text-[#003311] p-5 md:p-10">
          <h1 className="text-[1rem] md:text-[1.8rem] font-bold md:ml-32">
            Step 2
          </h1>
          <h1 className="text-[0.9rem] md:text-[1.4rem] font-bold mt-3">
            Access Logistics Dashboard & Manage Orders
          </h1>
          <p className="text-[0.8rem] md:text-[1.4rem] mt-3 md:mt-5">
            Once registered, log in to your personalized Logistics Dashboard to
            view available orders. See order details, routes, and delivery
            timelines, then accept orders that match your vehicle's capacity and
            schedule.
          </p>
        </div>
      </div>

      {/* Step 3 */}
      <div className="w-full flex justify-between gap-2 md:gap-0 items-center mt-10 md:mt-20 px-6 md:px-20">
        <div className="basis-[65%] bg-[#b6d8c1] rounded-xl text-[#003311] p-5 md:p-10">
          <h1 className="text-[1rem] md:text-[1.8rem] font-bold md:ml-32">
            Step 3
          </h1>
          <h1 className="text-[0.9rem] md:text-[1.4rem] font-bold mt-3">
            Confirm Payment & Track Order History
          </h1>
          <p className="text-[0.8rem] md:text-[1.4rem] mt-3 md:mt-5">
            Upon completing a delivery, confirm payment through our secure
            platform. Easily track past deliveries and earnings by viewing your
            order history in the dashboard.
          </p>
        </div>
        <div className="basis-[35%] md:basis-[30%] flex items-center gap-3">
          <div className="basis-[70%]">
            <img
              src="/assets/ip8-JmZWqyLT.png"
              alt="Picture 1"
              loading="lazy"
            />
          </div>
          <div className="basis-[70%]">
            <img
              src="/assets/ip9-BYAlTt3n.png"
              alt="Picture 2"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Third;
