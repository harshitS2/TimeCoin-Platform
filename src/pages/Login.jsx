import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
const Login = () => {
  const [visible, setVisible] = useState(false);
  const onEyeClick = () => {
    setVisible(!visible);

  };
  return (
    <div className="flex h-screen justify-center items-center bg-gradient-to-br ">
      <form className="w-96 max-w-full p-6 bg-white rounded-xl shadow-lg">
        <div className="mb-4 flex flex-col gap-2">
          <label htmlFor="email" className="text-gray-800 font-medium">
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-4 flex flex-col relative">
          <label htmlFor="password" className="text-gray-800 font-medium mb-2">
            Your password
          </label>
          <input
            type={visible ? "text" : "password"}
            id="password"
            className="p-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none w-full"
            required
          />
          <div
            className="absolute right-3 top-2/3 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700"
            onClick={() => onEyeClick()}
          >
            {visible ? <EyeOff /> : <Eye />}
          </div>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <input id="remember" type="checkbox" className="w-4 h-4" />
          <label htmlFor="remember" className="text-sm text-gray-700">
            Remember me
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 hover:scale-105 transition-all"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
