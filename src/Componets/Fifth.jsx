import React, { useState } from "react";

const Fifth = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#003311] m-auto py-10 px-10 md:px-60">
      <h1 className="font-bold text-[1.5rem] md:text-[2.3rem] text-center text-neutral20">
        FAQs for Logistics Providers.
      </h1>
      <p className="mt-3 text-center mb-12 text-neutral20">
        We have answered some of your questions.
      </p>

      <div>
        <div
          className="text-[#003311] bg-white rounded-md py-2 px-3 mb-7 font-semibold"
          onClick={() => toggleFAQ(0)}
        >
          <div className="flex justify-between items-center">
            <p>How do I register as a logistics provider on Konectar?</p>
            <p className="cursor-pointer text-[2.3rem] font-bold">
              {openIndex === 0 ? "-" : "+"}
            </p>
          </div>
          {openIndex === 0 && (
            <div className="mt-4">
              {/* Add answer here */}
              <p>
                To register as a logistics provider, sign up on the Konectar
                platform and provide your vehicle details to start accepting
                deliveries.
              </p>
            </div>
          )}
        </div>

        <div
          className="text-[#003311] bg-white rounded-md py-2 px-3 mb-7 font-semibold"
          onClick={() => toggleFAQ(1)}
        >
          <div className="flex justify-between items-center">
            <p>What kind of logistics services can I offer on Konectar?</p>
            <p className="cursor-pointer text-[2.3rem] font-bold">
              {openIndex === 1 ? "-" : "+"}
            </p>
          </div>
          {openIndex === 1 && (
            <div className="mt-4">
              {/* Add answer here */}
              <p>
                You can offer cold-chain logistics, perishable goods transport,
                and other specialized delivery services based on your vehicle
                capacity and expertise.
              </p>
            </div>
          )}
        </div>

        <div
          className="text-[#003311] bg-white rounded-md py-2 px-3 mb-7 font-semibold"
          onClick={() => toggleFAQ(2)}
        >
          <div className="flex justify-between items-center">
            <p>How do I receive delivery requests?</p>
            <p className="cursor-pointer text-[2.3rem] font-bold">
              {openIndex === 2 ? "-" : "+"}
            </p>
          </div>
          {openIndex === 2 && (
            <div className="mt-4">
              {/* Add answer here */}
              <p>
                Delivery requests will appear in your dashboard once you are
                registered. You can review and accept orders based on your
                availability and capacity.
              </p>
            </div>
          )}
        </div>

        <div
          className="text-[#003311] bg-white rounded-md py-2 px-3 mb-7 font-semibold"
          onClick={() => toggleFAQ(3)}
        >
          <div className="flex justify-between items-center">
            <p>What are the requirements for logistics providers?</p>
            <p className="cursor-pointer text-[2.3rem] font-bold">
              {openIndex === 3 ? "-" : "+"}
            </p>
          </div>
          {openIndex === 3 && (
            <div className="mt-4">
              {/* Add answer here */}
              <p>
                Providers must have a registered vehicle, be in compliance with
                local transport regulations, and have the capacity to handle
                specific logistics needs such as cold-chain transport.
              </p>
            </div>
          )}
        </div>

        <div
          className="text-[#003311] bg-white rounded-md py-2 px-3 mb-7 font-semibold"
          onClick={() => toggleFAQ(4)}
        >
          <div className="flex justify-between items-center">
            <p>How are rates for logistics services determined?</p>
            <p className="cursor-pointer text-[2.3rem] font-bold">
              {openIndex === 4 ? "-" : "+"}
            </p>
          </div>
          {openIndex === 4 && (
            <div className="mt-4">
              {/* Add answer here */}
              <p>
                Rates are determined based on factors such as delivery distance,
                vehicle type, and specific requirements of the delivery, such as
                temperature control for perishables.
              </p>
            </div>
          )}
        </div>

        <div className="flex justify-end font-bold">
          <button className="text-[#003311] rounded-md bg-white p-3">
            View More FAQs
          </button>
        </div>
      </div>
    </section>
  );
};

export default Fifth;
