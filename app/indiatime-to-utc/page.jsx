'use client';
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FiRefreshCw } from 'react-icons/fi';

const Page = () => {
  const [indiaTime, setIndiaTime] = useState('');
  const [utcTime, setUtcTime] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleConversion = () => {
    if (indiaTime) {
      const [hours, minutes] = indiaTime.split(':').map(Number);
      let utcHours = hours - 5;
      let utcMinutes = minutes - 30;
      
      if (utcMinutes < 0) {
        utcMinutes += 60;
        utcHours -= 1;
      }
      if (utcHours < 0) {
        utcHours += 24;
      }
      
      setUtcTime(`${String(utcHours).padStart(2, '0')}:${String(utcMinutes).padStart(2, '0')}`);
      setShowResult(true);
    }
  };

  const handleReset = () => {
    setIndiaTime('');
    setUtcTime('');
    setShowResult(false);
  };

  return (
    <section>
      <Navbar/>
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      
      <div className="bg-white shadow-lg rounded-lg p-6 w-full mt-10">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">India Time to UTC Converter</h1>
        <div className="flex flex-col w-full">
          <input 
            type="time" 
            value={indiaTime} 
            onChange={(e) => setIndiaTime(e.target.value)} 
            className="border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none p-3 rounded-lg w-full text-gray-700" 
          />
        </div>
        <div className="flex items-center gap-4 mt-4">
          <button 
            onClick={handleConversion} 
            className="bg-blue-600 hover:bg-blue-700 transition-all text-white font-medium px-6 py-2 rounded-lg flex-1">
            Convert
          </button>
          {showResult && (
            <button 
              onClick={handleReset} 
              className="bg-gray-500 hover:bg-gray-600 transition-all text-white font-medium px-4 py-2 rounded-lg">
              <FiRefreshCw size={20} />
            </button>
          )}
        </div>
        {showResult && (
          <div className="mt-6 p-4 bg-green-100 border border-green-400 rounded-lg text-center">
            <p className="text-xl font-semibold text-green-700">UTC Time: {utcTime}</p>
          </div>
        )}
      </div>
      
    </div>
    <Footer />
    </section>
  );
};

export default Page;