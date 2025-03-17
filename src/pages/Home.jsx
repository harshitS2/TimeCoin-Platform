import React from "react";
import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Cards from "../components/Cards";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <div className="mt-30 flex flex-col items-center">
      <div className="inline-flex items-center px-3 py-1.5 mb-6 border rounded-full bg-timecoin-50 text-xs font-medium animate-fade-down text-[#1272A6]">
        <Clock className="w-3.5 h-3.5 mr-1.5" />
        <span>Exchange skills, not money</span>
      </div>
      {/* Time is the new currency of expertise */}
      <div className="text-4xl md:text-5xl text-center lg:text-6xl font-bold tracking-tight mb-6 text-balance animate-fade-up item-c">
        <span className="text-[#068ED2] font-extrabold">Time</span> is the new
        currency of expertise
      </div>
      <div className="text-lg text-[#65758B] max-w-2xl mb-8 text-balance leading-relaxed animate-fade-up animation-delay-100 text-center">
        A global platform where professionals, enthusiasts, and learners
        exchange skills using time as currency. Give an hour, get an hour — it's
        that simple.
      </div>

      <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animation-delay-200">
        {/* Start Exchanging Skills Button */}
        <Link
          to="/register"
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 py-2 h-12 px-6 rounded-full bg-[#0284C7] hover:bg-timecoin-700 text-white shadow-md shadow-[#0384C7]-600/20"
        >
          Start Exchanging Skills
        </Link>

        {/* How It Works Button */}
        <Link
          to="/how-it-works"
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent py-2 h-12 px-6 rounded-full hover:text-timecoin-600 hover:border-timecoin-300"
        >
          <span>How It Works</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
      <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground animate-fade-up animation-delay-300">
        {/* Active Users */}
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-[#0284C7] flex items-center justify-center text-white font-medium">
            12k+
          </div>
          <span className="ml-2 text-[#65758B]">Active Users</span>
        </div>

        {/* Skills Exchanged */}
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-[#0284C7] flex items-center justify-center text-white font-medium">
            8k+
          </div>
          <span className="ml-2 text-[#65758B]">Skills Exchanged</span>
        </div>

        {/* User Rating */}
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-[#0284C7] flex items-center justify-center text-white font-medium">
            4.9
          </div>
          <span className="ml-2 text-[#65758B]">User Rating</span>
        </div>
      </div>
      <div className="py-20 bg-gradient-to-b from-background to-timecoin-50/30 container px-4 mx-auto max-w-6xl">
        <div className="text-center mb-12">
          {/* Title */}
          <h2 className="text-3xl font-bold mb-4 animate-fade-up">
            Why Choose TimeCoin?
          </h2>

          {/* Description */}
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-up animation-delay-100">
            Our platform reimagines how people share skills and knowledge
            through a time-based economy.
          </p>
        </div>
        <div className="mb-12">
          <Cards />
        </div>
        <div className="container px-4 mx-auto max-w-6xl">
        <Skills />
        </div>
      </div>
    </div>
  );
};

export default Home;
