"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Page = () => {
  const [yards, setYards] = useState("");
  const [meters, setMeters] = useState(null);

  const convertToMeters = () => {
    if (!yards || isNaN(yards)) {
      setMeters("Please enter a valid number");
      return;
    }
    setMeters((yards * 0.9144).toFixed(4));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center justify-center  p-6">
        <div className="bg-white p-8 rounded-2xl shadow-2xl w-full  text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Yards to Meters Converter
          </h1>

          <input
            type="number"
            value={yards}
            onChange={(e) => setYards(e.target.value)}
            placeholder="Enter yards"
            className="mb-4 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          <button
            onClick={convertToMeters}
            className="w-[120px] bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-3 rounded-lg transition duration-300 transform hover:scale-105"
          >
            Convert
          </button>

          {meters !== null && (
            <p className="mt-5 text-lg font-semibold text-gray-700 bg-gray-100 p-3 rounded-lg">
              {meters} meters
            </p>
          )}
        </div>
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Page;
