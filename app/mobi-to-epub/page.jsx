'use client';
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Page = () => {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const convertFile = async () => {
    if (!file) {
      setStatus('Please select a MOBI file.');
      return;
    }

    setLoading(true);
    setStatus('Converting...');

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('https://api.cloudconvert.com/v2/convert', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNDFiMTdmZTI4ZmYzNThiZWQ4MjRlM2UxYmQxYzdlYWM0YzIwMDBjODViNDYyNDM4ZmE3YTZmNzU0OWE5YjQzNDhkY2U5NDJjNjcxMjYzYWQiLCJpYXQiOjE3Mzg5NDUzNjYuMDczMDE2LCJuYmYiOjE3Mzg5NDUzNjYuMDczMDE3LCJleHAiOjQ4OTQ2MTg5NjYuMDY4NTM0LCJzdWIiOiI2MTUxODAwMSIsInNjb3BlcyI6W119.Inr4gi9DqtyfmKsz8OSQCOaseFaf2AVJmvT5DBBm05fe2MwKdRbHJ5Tqxh4BCtcnVzkn9Z5WkhYIHwJwi26NqkZ4lfD1Nb_KvvQR59uDqm6d036oymK746uar6TK-PbBLEmuoD1wxhEv67upc3S57TxQj8UsuWHici-hhzc7gd4DkD88yBl2pWk-fmfl3C0hOkDL3cLWToKTIi5iePxkeNTyVMpitSJ7eQT0mDRV_nijNsN_-8Cg7TBIfa7fGf_31L_G5h-WhSqWzIgUQBUSwF8O0htGJGNvWq5OJ9DVwtCINUTfFvV5R9uUhduEms4F6tKRLoQQPYQte-b6QN29hrFjT7fv9KOh_L_Ly0p0acTx_0Tucymrh6ikk8Jx8UIs4ReeOuhdilfz6EHNzu0ezLG_pENAwY5cwpkSlIGrJThFSMkrqH_YYnQoFDxdHVr9D1mcsxmNh3oumf4Zwwe1N8Ky0FjaVSBbHAEjtf1b9lCFUztz5j2TbYxw6iBXLwKJFp_qcEh4E7wboZZtnirMUbQ0qzGkW2f0Rh5jfrlAKpO6iERM09QYF2peN2forVEkNHKUbM_r8dOg_-a07Z8y328GfFzIe_uLS4WTxxBN5R9toW5DB0XY7Jo9pX-EOYhOlpqyFdSe2_ePzJx-cduUZtj2rggErTKlgVeLfVZnZDs'
        },
        body: formData
      });

      const result = await response.json();
      if (result.data && result.data.url) {
        setDownloadUrl(result.data.url);
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

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
          <h1 className="text-xl font-semibold mb-4">MOBI to EPUB Converter</h1>
          <input 
            type="file" 
            accept=".mobi" 
            onChange={handleFileChange} 
            className="mb-4 w-full p-2 border rounded"
          />
          <button onClick={convertFile} className="bg-blue-500 text-white px-4 py-2 rounded">Convert</button>
          <p className="mt-4 text-gray-700">{status}</p>
          {loading && <div className="loader mt-4"></div>}
          {downloadUrl && (
            <a href={downloadUrl} download className="mt-4 block bg-green-500 text-white px-4 py-2 rounded">Download EPUB</a>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
