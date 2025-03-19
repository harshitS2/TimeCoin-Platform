import React from "react";
import { CircleCheckBig, Clock, RefreshCcw, User, Users } from "lucide-react";

const HowItWorks = () => {
  const timeCoinProcess = [
    {
      icon: <Users />,
      heading: "1. Create Account",
      para: "Sign up and complete your profile with skills you can offer to the community.",
    },
    {
      icon: <Clock />,
      heading: "2. Offer Services",
      para: "List services based on your skills and set time durations for each service.",
    },
    {
      icon: <RefreshCcw />,
      heading: "3. Exchange Time",
      para: "Provide services to earn TimeCoins, then spend them on services you need.",
    },
    {
      icon: <CircleCheckBig />,
      heading: "4. Rate & Review",
      para: "After service completion, rate the experience to build trust in the community.",
    },
  ];
  return (
    <div className="  pt-24 pb-16 justify-center items-center text-center">
      <div className="py-2 md:py-16 px-6 ">
        <h1 className=" font-bold text-[#0A99DD] text-4xl">
          How TimeCoin Works
        </h1>
        <p className="text-lg mt-2 md:text-xl text-gray-500 max-w-3xl mx-auto">
          Exchange your skills for services you need through our time-based
          currency system. No money changes hands - just valuable time and
          skills.
        </p>
      </div>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold pb-12">The TimeCoin Process</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {timeCoinProcess.map((process, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-2xs transition-all"
            >
              <div className="h-12 w-12 rounded-full text-[#0A99DD] bg-[#E0F2FE] flex items-center justify-center mb-4">
                {process.icon}
              </div>
              <h1 className="text-xl font-semibold my-3 text-left">
                {process.heading}
              </h1>
              <p className="text-left text-gray-500">{process.para}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
