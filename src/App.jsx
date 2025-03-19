import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Login from "./pages/Login";
import Dashboard from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Register from "./pages/Register";
import HowItWorks from "./pages/HowItWorks";

function App() {
  return (
    <Router>
      <div className="bg-[#F8FAFC] flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<Register />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
