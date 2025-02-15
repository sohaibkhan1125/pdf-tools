"use client";
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HeicToJpgConverter = () => {
  const [status, setStatus] = useState('');
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const convertFile = async () => {
    if (!file) {
      setStatus('Please select a HEIC file.');
      return;
    }

    setLoading(true);
    const reader = new FileReader();
    reader.onload = async (e) => {
      const base64String = e.target.result.split(',')[1];
      setStatus('');

      try {
        const response = await fetch('https://v2.convertapi.com/convert/heic/to/jpg', {
          method: 'POST',
          headers: {
            'Authorization': 'Bearer x7fFowh7f4l2j2LL',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "Parameters": [
              {
                "Name": "File",
                "FileValue": {
                  "Name": file.name,
                  "Data": base64String
                }
              },
              {
                "Name": "StoreFile",
                "Value": true
              }
            ]
          })
        });

        const result = await response.json();
        if (result.Files && result.Files.length > 0) {
          setImageUrl(result.Files[0].Url);
          setStatus('Conversion successful!');
        } else {
          setStatus('Conversion failed. Try again.');
        }
      } catch (error) {
        setStatus('An error occurred. Please try again.');
      } finally {
        setLoading(false);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Main content that expands */}
      <div className="flex-grow flex flex-col items-center justify-center w-full mt-10 bg-gray-100">
        <div className="bg-white py-20 h-auto w-[95%] md:py-8  p-6 rounded-lg shadow-lg md:w-[80%] text-center">
          <h1 className="text-xl font-semibold mb-4">HEIC to JPG Converter</h1>
          <input type="file" accept=".heic" onChange={handleFileChange} className="mb-4 w-full p-2 border rounded" />
          <button onClick={convertFile} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
            Convert
          </button>
          
          <div className="flex flex-col justify-center items-center mt-4">
            {loading && 
<div class="newtons-cradle">
<div class="newtons-cradle__dot"></div>
<div class="newtons-cradle__dot"></div>
<div class="newtons-cradle__dot"></div>
<div class="newtons-cradle__dot"></div>
</div>}
            {imageUrl && (
              <div className="mt-4">
                <img src={imageUrl} alt="Converted Preview" className="w-96 rounded-lg border" />
                <a href={imageUrl} download className="mt-4 block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                  Download JPG
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default HeicToJpgConverter;
