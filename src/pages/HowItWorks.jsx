import React, { useState } from "react";
import {Link} from "react-router-dom"
import {
  CircleCheckBig,
  Clock,
  LucideCircleCheckBig,
  RefreshCcw,
  User,
  Users,
} from "lucide-react";

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
  const timeCoinUses = [
    "Equal value for everyone's time regardless of skill type.",
    "Zero monetary cost - exchange services based purely on time.",
    "Build community connections while developing new skills.",
    "Transparent system with reviews to ensure quality exchanges.",
  ];
  const accordionItems = [
    {
      title: "How do I earn my first TimeCoins?",
      content:
        "New members receive a small starting balance to help them get started. You can also earn your first TimeCoins by providing services to other members of the community based on skills you already have.",
    },
    {
      title: "Can I save my TimeCoins for later?",
      content:
        "Yes! TimeCoins don't expire, so you can save them for when you need services in the future. This allows you to contribute your skills now and benefit from others' skills when the need arises.",
    },
    {
      title: "What if I'm not satisfied with a service?",
      content:
        "Our platform has a dispute resolution process. If you're not satisfied, you can contact our support team who will help mediate and find a fair solution. Our review system also helps maintain quality standards.",
    },
    {
      title: "Is there a limit to how many TimeCoins I can earn?",
      content:
        "There's no upper limit to how many TimeCoins you can earn. However, we encourage a healthy balance of earning and spending to keep the community ecosystem thriving.",
    },
    {
      title: "How can I ensure my TimeCoins are safe and secure?",
      content:
        "We use industry-standard encryption and secure payment processing to protect your TimeCoins. We also have a robust and transparent review system to ensure that our community remains safe and trustworthy.",
    },
    {
      title: "Can businesses join TimeCoin?",
      content:
        "Yes, businesses can join TimeCoin as community partners. This allows businesses to offer services and accept TimeCoins, creating more options for members and fostering local economic resilience.",
    },
  ];
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
      <div className="mt-12 pt-12 bg-[#0B9EE1] md:max-w-3xl lg:max-w-6xl mx-auto rounded-2xl p-8 md:p-12 text-white">
        <div className="md:max-w-3xl">
          <h1 className="text-2xl md:text-3xl font-bold mb-6 text-left">
            Why Use TimeCoin?
          </h1>
          <ul className="space-y-4">
            {timeCoinUses.map((use) => (
              <li key={use} className="flex items-start">
                <LucideCircleCheckBig className="w-6 h-6 mr-4 flex-shrink-0 mt-0.5" />
                <span className="text-lg">{use}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-12">
        <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Frequently Asked Questions
        </h1>
        <div className="bg-white rounded-xl shadow-sm ">
          <div className="">
            {" "}
            <div className="w-full  mx-auto bg-white rounded-xl shadow-sm border border-gray-200">
              {accordionItems.map((item, index) => (
                <div key={index}>
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="flex items-center justify-between w-full p-5 font-medium text-gray-500 border-b border-gray-200 hover:bg-gray-100 transition-all"
                  >
                    <span>{item.title}</span>
                    <svg
                      className={`w-3 h-3 transform ${
                        openIndex === index ? "rotate-0" : "rotate-180"
                      } transition-transform`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all ${
                      openIndex === index ? "block" : "hidden"
                    }`}
                  >
                    <div className="p-5 border border-t-0 border-gray-200">
                      <p className="text-gray-500 text-left">{item.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="py-12  md:max-w-3xl lg:max-w-6xl mx-auto rounded-2xl p-8 md:p-12  text-center">
        <h1 className="font-bold text-4xl">Ready to Get Started?</h1>
        <p className="text-lg mt-2 md:text-xl text-gray-500 max-w-3xl mx-auto">
          Join our community today and start exchanging time and skills with
          people in your area.
        </p>

        <div className="mt-12">
          <Link to="/register">
            <button className="inline-block bg-[#0A99DD] hover:bg-[#1272A6] text-white font-semibold py-3 px-8 rounded-full text-lg transition-colors">
              Create Your Account
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
