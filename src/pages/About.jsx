import { Users, Shield, Globe, Database } from "lucide-react";
const About = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full bg-gray-200">
        <div className="mx-auto hero py-16 max-w-6xl px-4 text-center">
          <h1 className="pt-10 font-bold text-5xl mb-5">About TimeCoin</h1>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Revolutionizing the way people exchange skills and knowledge through
            a time-based currency system.
          </p>
        </div>
      </div>
      <div className="w-full mx-auto py-12 max-w-6xl text-center">
        <h3 className="font-bold text-4xl mb-6">Our Mission</h3>
        <p className="px-10 text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
          At TimeCoin, we believe that everyone's time has value. Our mission is
          to create a global ecosystem where skills and knowledge can be freely
          exchanged using time as the universal currency, empowering individuals
          to learn, teach, and grow without financial barriers.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-[50%] h-0.5 bg-[#C0C8D5]"></div>
      </div>

      <div className="bg-white py-10 px-5 sm:max-w-6xl lg:max-w-[80%] mx-auto ">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Community-Driven Card */}
          <div className="card bg-white shadow-xl p-6 flex flex-col items-center text-center transition-all hover:shadow-2xl hover:-translate-y-1 rounded-lg">
            <Users className="w-16 h-16 text-[#0369A0] mb-4" />
            <h1 className="text-2xl font-semibold text-gray-800">
              Community-Driven
            </h1>
            <p className="text-gray-600">
              Our platform is built by and for our community of users, creating
              a collaborative ecosystem where everyone benefits.
            </p>
          </div>

          {/* Secure Exchange Card */}
          <div className="card bg-white shadow-xl p-6 flex flex-col items-center text-center transition-all hover:shadow-2xl hover:-translate-y-1 rounded-lg">
            <Shield className="w-16 h-16 text-[#0369A0] mb-4" />
            <h1 className="text-2xl font-semibold text-gray-800">
              Secure Exchange
            </h1>
            <p className="text-gray-600">
              We provide a safe environment for knowledge sharing with verified
              users and a trusted review system.
            </p>
          </div>

          {/* Global Access Card */}
          <div className="card bg-white shadow-xl p-6 flex flex-col items-center text-center transition-all hover:shadow-2xl hover:-translate-y-1 rounded-lg">
            <Globe className="w-16 h-16 text-[#0369A0] mb-4" />
            <h1 className="text-2xl font-semibold text-gray-800">
              Global Access
            </h1>
            <p className="text-gray-600">
              Connect with skilled individuals worldwide, breaking down
              geographical barriers to learning.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-red-400 w-full text-center items-center mt-12">
        <h1 className="font-bold text-3xl mb-8">Our Technology</h1>
        <div className="flex justify-center">
          <div className="flex card bg-white shadow-xl p-6  items-start text-start transition-all hover:shadow-2xl hover:-translate-y-1 rounded-lg  max-w-xl">
            <Database className="text-[#0369A0] w-16 h-16" />
            <div className="flex flex-col">
              <h2>MERN Stack</h2>
              <p>
                TimeCoin is built using the MERN stack (MongoDB, Express.js,
                React, Node.js) to ensure a robust, scalable, and maintainable
                platform.
              </p>
            </div>
          </div>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default About;
