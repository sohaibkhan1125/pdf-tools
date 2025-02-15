"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Page = () => {
  const [grams, setGrams] = useState("");
  const [pounds, setPounds] = useState(null);

  const convertToPounds = () => {
    if (!grams || isNaN(grams)) {
      setPounds("Please enter a valid number");
      return;
    }
    setPounds((grams * 0.00220462).toFixed(4));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center justify-center bg-gray-100 p-6">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full  text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Grams to Pounds Converter</h1>
          
          <input
            type="number"
            value={grams}
            onChange={(e) => setGrams(e.target.value)}
            placeholder="Enter grams"
            className="mb-4 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={convertToPounds}
            className="w-[120px] bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-3 rounded-lg transition duration-300"
          >
            Convert
          </button>

          {pounds !== null && (
            <p className="mt-5 text-lg font-semibold text-gray-700">{pounds} lbs</p>
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
