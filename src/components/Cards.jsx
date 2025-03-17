import { Clock, Users, Star, Calendar, Globe, Shield } from 'lucide-react';
import React from 'react';

function Cards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Time as Currency */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 animate-fade-up animation-delay-0">
        <div className="w-12 h-12 rounded-full bg-[#F0F9FF] text-[#0284C7] flex items-center justify-center mb-4">
          <Clock className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Time as Currency</h3>
        <p className="text-[#65758B] text-sm">
          Exchange your expertise for TimeCoins and use them to request help from others.
        </p>
      </div>

      {/* Global Community */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 animate-fade-up animation-delay-100">
        <div className="w-12 h-12 rounded-full bg-[#ECFDF5] text-[#10B981] flex items-center justify-center mb-4">
          <Users className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Global Community</h3>
        <p className="text-[#65758B] text-sm">
          Connect with skilled individuals from around the world in diverse fields.
        </p>
      </div>

      {/* Reputation System */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 animate-fade-up animation-delay-200">
        <div className="w-12 h-12 rounded-full bg-[#FEF3C7] text-[#D97706] flex items-center justify-center mb-4">
          <Star className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Reputation System</h3>
        <p className="text-[#65758B] text-sm">
          Build trust with a transparent rating system that showcases your expertise.
        </p>
      </div>

      {/* Flexible Scheduling */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 animate-fade-up animation-delay-300">
        <div className="w-12 h-12 rounded-full bg-[#E0E7FF] text-[#6366F1] flex items-center justify-center mb-4">
          <Calendar className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
        <p className="text-[#65758B] text-sm">
          Set your availability and connect across time zones with automatic conversion.
        </p>
      </div>

      {/* Multilingual Support */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 animate-fade-up animation-delay-400">
        <div className="w-12 h-12 rounded-full bg-[#FFF7ED] text-[#F97316] flex items-center justify-center mb-4">
          <Globe className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Multilingual Support</h3>
        <p className="text-[#65758B] text-sm">
          Break language barriers with our expanding multilingual platform.
        </p>
      </div>

      {/* Secure Exchanges */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 animate-fade-up animation-delay-500">
        <div className="w-12 h-12 rounded-full bg-[#FEE2E2] text-[#DC2626] flex items-center justify-center mb-4">
          <Shield className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Secure Exchanges</h3>
        <p className="text-[#65758B] text-sm">
          Our moderation system ensures fair and safe skill exchanges.
        </p>
      </div>
    </div>
  );
}

export default Cards;
