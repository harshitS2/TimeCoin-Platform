import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import Explore from "./pages/Explore";
import Login from "./pages/Login";
import Dashboard from "./pages/Home";

function App() {
  return (
    <Router>
      <div className=" bg-[#F8FAFC]">
        <Navbar />
        <div className="container mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Dashboard" element={<Dashboard />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
