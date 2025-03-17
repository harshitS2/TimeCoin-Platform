import { Users, Shield, Globe, Database, Code } from "lucide-react";
import { Link } from "react-router-dom";
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
            <Shield className="w-16 h-16 text-[#0369A0] mb-4 " />
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
      <div className=" w-full text-center items-center mt-12">
        <h1 className="font-bold text-3xl mb-8">Our Technology</h1>
        <div className="flex  max-sm:flex-col max-md:flex-col lg:flex-row items-center  justify-center">
          <div className="flex card bg-white shadow-xl p-6 items-start text-start transition-all hover:shadow-2xl hover:-translate-y-1 rounded-lg max-w-xl m-7">
            <Database className="text-[#0369A0] w-10 h-10 text-primary flex-shrink-0" />
            <div className="flex flex-col ml-2">
              <h2 className="text-xl font-bold mb-2">MERN Stack</h2>
              <p>
                TimeCoin is built using the MERN stack (MongoDB, Express.js,
                React, Node.js) to ensure a robust, scalable, and maintainable
                platform.
              </p>
            </div>
          </div>

          <div className="flex card bg-white shadow-xl p-6 items-start text-start transition-all hover:shadow-2xl hover:-translate-y-1 rounded-lg max-w-xl m-7">
            <Code className="w-10 h-10 text-[#0369A0]    flex-shrink-0" />
            <div className="flex flex-col ml-2">
              <h2 className="text-xl font-bold mb-2">MERN Stack</h2>
              <p>
                TimeCoin is built using the MERN stack (MongoDB, Express.js,
                React, Node.js) to ensure a robust, scalable, and maintainable
                platform.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="about-team" className="items-center text-center mt-10">
        <h1 className="text-4xl font-semibold">Our Team</h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 items-center mt-10 space-x-3">
          <div className="flex flex-col items-center pb-10">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
              alt="Bonnie image"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900">
              Harshit Pandey
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Developer
            </span>
            <div className="flex mt-4 md:mt-6">
              {/* <a
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add friend
              </a> */}
            </div>
          </div>
          <div className="flex flex-col items-center pb-10">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
              alt="Bonnie image"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900">
              Harshit Pandey
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Developer
            </span>
            <div className="flex mt-4 md:mt-6">
              {/* <a
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add friend
              </a> */}
            </div>
          </div>
          <div className="flex flex-col items-center pb-10">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
              alt="Bonnie image"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900">
              Harshit Pandey
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Developer
            </span>
            <div className="flex mt-4 md:mt-6">
              {/* <a
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add friend
              </a> */}
            </div>
          </div>
        </div>
      </div>
      <div className="items-center text-center bg-[#1272A6] w-full p-10 text-white">
        <h1 className="text-4xl font-semibold">Ready to join our community?</h1>
        <p className=" p-10">
          Start exchanging skills and knowledge with TimeCoin today. Services
        </p>
        <Link
          to="/register"
          className="px-6 py-2 border-2 border-[#0369A0] text-[#fff] bg-[#F43098] rounded-lg hover:bg-[#c56c9c] hover:text-white transition-all "
        >
          Get Started Now
        </Link>
      </div>
    </div>
  );
};

export default About;
