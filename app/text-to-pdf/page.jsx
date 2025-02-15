'use client';
import React, { useState } from 'react';
import axios from 'axios';

const TxtToPdfConverter = () => {
    const [file, setFile] = useState(null);
    const [pdfUrl, setPdfUrl] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleConvert = async () => {
        if (!file) {
            alert("Please select a TXT file first.");
            return;
        }

        setLoading(true);
        setError(null);
        setPdfUrl(null);

        const formData = new FormData();
        formData.append('File', file);

        try {
            const response = await axios.post(
                'https://v2.convertapi.com/convert/txt/to/pdf?secret=x7fFowh7f4l2j2LL',
                formData,
                {
                    headers: { 'Content-Type': 'multipart/form-data' },
                }
            );

            console.log("Full API Response:", response.data);
            
            if (!response.data?.Files || response.data.Files.length === 0) {
                throw new Error("Invalid API response. No file data returned.");
            }

            const pdfFile = response.data.Files[0];
            const base64Data = pdfFile.FileData;

            if (!base64Data) {
                throw new Error("PDF file data is missing in the API response.");
            }

            // Convert Base64 to Blob URL
            const blob = new Blob([Uint8Array.from(atob(base64Data), c => c.charCodeAt(0))], { type: 'application/pdf' });
            const blobUrl = URL.createObjectURL(blob);
            
            console.log("Generated Blob URL:", blobUrl);
            setPdfUrl(blobUrl);
        } catch (err) {
            console.error("Error during conversion:", err);
            setError("Conversion failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
                <h1 className="text-xl font-semibold mb-4 text-center">TXT to PDF Converter</h1>
                <input type="file" accept=".txt" onChange={handleFileChange} className="w-full p-2 border rounded mb-4" />
                <button
                    onClick={handleConvert}
                    className="bg-blue-500 text-white px-4 py-2 rounded w-full"
                    disabled={loading}
                >
                    {loading ? 'Converting...' : 'Convert to PDF'}
                </button>
                {error && <p className="text-red-500 mt-4">{error}</p>}
                {pdfUrl && (
                    <div className="mt-4">
                        <p className="text-green-600">Conversion successful!</p>
                        <iframe src={pdfUrl} className="w-full h-64 border rounded" title="Converted PDF"></iframe>
                        <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="block mt-2 bg-green-500 text-white text-center px-4 py-2 rounded">
                            View PDF
                        </a>
                        <a href={pdfUrl} download="converted.pdf" className="block mt-2 bg-blue-500 text-white text-center px-4 py-2 rounded">
                            Download PDF
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TxtToPdfConverter;
