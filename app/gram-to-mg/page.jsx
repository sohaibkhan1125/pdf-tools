'use client';
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FiRefreshCw } from 'react-icons/fi';

const Page = () => {
  const [grams, setGrams] = useState('');
  const [milligrams, setMilligrams] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleConversion = () => {
    setMilligrams(grams ? grams * 1000 : '');
    setShowResult(true);
  };

  const handleReset = () => {
    setGrams('');
    setMilligrams('');
    setShowResult(false);
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center bg-white min-h-screen h-80 mx-2 rounded-lg mt-10 p-4">
        <h1 className="text-2xl font-bold mb-4">Gram to Milligram Converter</h1>
        <div className="flex w-full items-center">
          <input 
            type="number" 
            value={grams} 
            onChange={(e) => setGrams(e.target.value)} 
            placeholder="Enter grams" 
            className="border py-2 px-2 rounded-lg mb-2 w-full text-left" 
          />
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={handleConversion} 
            className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
            Convert
          </button>
          {showResult && (
            <button onClick={handleReset} className="bg-gray-500 text-white px-3 py-2 rounded mt-2">
              <FiRefreshCw size={20} />
            </button>
          )}
        </div>
        {showResult && (
          <p className="text-lg mt-2">Milligrams: <span className="font-semibold">{milligrams}</span></p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Page;
