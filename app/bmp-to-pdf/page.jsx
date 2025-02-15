'use client';
'use client';
import React, { useState } from 'react';

const Page = () => {
  const [file, setFile] = useState(null);
  const [pdfUrl, setPdfUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleConvert = async () => {
    if (!file) {
      alert('Please select a BMP file first.');
      return;
    }
  
    setLoading(true);
    setError(''); // Clear previous errors
    const formData = new FormData();
    formData.append('File', file);
  
    try {
      const response = await fetch(
        'https://v2.convertapi.com/convert/bmp/to/pdf?Secret=x7fFowh7f4l2j2LL',
        {
          method: 'POST',
          body: formData,
        }
      );
  
      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }
  
      const result = await response.json();
      console.log('🔍 Full API Response:', result);
      
      if (result.Files && Array.isArray(result.Files) && result.Files.length > 0) {
        console.log('✅ Files Array:', result.Files);
  
        const fileObject = result.Files[0];
        console.log('📂 First File Object:', fileObject);
  
        if (fileObject && fileObject.Url) {
          console.log('🔗 Extracted PDF URL:', fileObject.Url);
          setPdfUrl(fileObject.Url);
        } else {
          throw new Error('No valid PDF URL returned inside Files[0]');
        }
      } else {
        throw new Error('Invalid API response format: No "Files" array found');
      }
    } catch (error) {
      console.error('❌ Error converting file:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">BMP to PDF Converter</h1>
      <input
        type="file"
        accept=".bmp"
        onChange={handleFileChange}
        className="mb-4 p-2 border rounded"
      />
      <button
        onClick={handleConvert}
        className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        disabled={loading}
      >
        {loading ? 'Converting...' : 'Convert to PDF'}
      </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      {pdfUrl && (
        <div className="mt-4 flex flex-col items-center">
          <iframe
            src={pdfUrl}
            title="PDF Preview"
            className="w-full h-96 border rounded"
          />
          <a
            href={pdfUrl}
            download="converted.pdf"
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
          >
            Download PDF
          </a>
        </div>
      )}
    </div>
  );
};

export default Page;
