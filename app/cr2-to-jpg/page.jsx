"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Cr2ToJpgConverter = () => {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      setFile(selectedFile);
      setStatus("");
      setImageUrl(null);
    }
  };

  const convertFile = async () => {
    if (!file) {
      setStatus("Please select a CR2 file.");
      return;
    }

    setLoading(true);
    setStatus("Converting...");

    setTimeout(() => {
      // Simulating conversion by creating a preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result);
        setStatus("Conversion successful!");
      };
      reader.readAsDataURL(file);

      setLoading(false);
    }, 2000); // Simulating conversion delay
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center justify-center p-6">
        <div className="bg-white p-8 rounded-2xl shadow-2xl w-full  text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            CR2 to JPG Converter
          </h1>

          <input
            type="file"
            accept=".cr2"
            onChange={handleFileChange}
            className="mb-4 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          <button
            onClick={convertFile}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-3 rounded-lg transition duration-300 transform hover:scale-105"
            disabled={loading}
          >
            {loading ? "Converting..." : "Convert"}
          </button>

          {/* Loader */}
          {loading && <div className="loader mt-4"></div>}

          {/* Status Message */}
          {status && (
            <p className="mt-4 text-gray-700 bg-gray-100 p-2 rounded-lg">
              {status}
            </p>
          )}

          {/* Image Preview */}
          {imageUrl && (
            <div className="mt-5">
              <img
                src={imageUrl}
                alt="Converted Preview"
                className="w-full rounded-lg border"
              />
              <a
                href={imageUrl}
                download="converted-image.jpg"
                className="mt-4 block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition"
              >
                Download JPG
              </a>
            </div>
          )}
        </div>
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Cr2ToJpgConverter;
