'use client';
import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PdfToSvgConverter = () => {
    const [file, setFile] = useState(null);
    const [svgUrl, setSvgUrl] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleConvert = async () => {
        if (!file) {
            alert("Please select a PDF file first.");
            return;
        }

        setLoading(true);
        setError(null);
        setSvgUrl(null);

        const formData = new FormData();
        formData.append('File', file);

        try {
            const response = await axios.post(
                'https://v2.convertapi.com/convert/pdf/to/svg?secret=x7fFowh7f4l2j2LL',
                formData,
                {
                    headers: { 'Content-Type': 'multipart/form-data' },
                }
            );

            console.log("Full API Response:", response.data);
            
            if (!response.data?.Files || response.data.Files.length === 0) {
                throw new Error("Invalid API response. No file data returned.");
            }

            const svgFile = response.data.Files[0];
            const base64Data = svgFile.FileData;

            if (!base64Data) {
                throw new Error("SVG file data is missing in the API response.");
            }

            // Convert Base64 to Blob URL
            const blob = new Blob([Uint8Array.from(atob(base64Data), c => c.charCodeAt(0))], { type: 'image/svg+xml' });
            const blobUrl = URL.createObjectURL(blob);
            
            console.log("Generated Blob URL:", blobUrl);
            setSvgUrl(blobUrl);
        } catch (err) {
            console.error("Error during conversion:", err);
            setError("Conversion failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section>
            <Navbar/>
        <div className="flex flex-col items-center justify-center min-h-screen  bg-gray-100 p-4">
            <div className="bg-white shadow-md rounded-lg p-6  w-full">
                <h1 className="text-xl font-semibold mb-4 text-center">PDF to SVG Converter</h1>
                <input type="file" accept=".pdf" onChange={handleFileChange} className="w-full p-2 border rounded mb-4" />
                <button
                    onClick={handleConvert}
                    className="bg-blue-500 text-white px-4 py-2 rounded w-full"
                    disabled={loading}
                >
                    {loading ? 'Converting...' : 'Convert to SVG'}
                </button>
                {loading && (
                    <div className="flex justify-center mt-4">
                        <div className="newtons-cradle">
                            <div className="newtons-cradle__dot"></div>
                            <div className="newtons-cradle__dot"></div>
                            <div className="newtons-cradle__dot"></div>
                            <div className="newtons-cradle__dot"></div>
                        </div>
                    </div>
                )}
                {error && <p className="text-red-500 mt-4">{error}</p>}
                {svgUrl && (
                    <div className="mt-4">
                        <p className="text-green-600">Conversion successful!</p>
                        <img src={svgUrl} alt="Converted SVG" className="w-full h-64 border rounded" />
                        <a href={svgUrl} target="_blank" rel="noopener noreferrer" className="block mt-2 bg-green-500 text-white text-center px-4 py-2 rounded">
                            View SVG
                        </a>
                        <a href={svgUrl} download="converted.svg" className="block mt-2 bg-blue-500 text-white text-center px-4 py-2 rounded">
                            Download SVG
                        </a>
                    </div>
                )}
            </div>
        </div>
        <Footer/>
        </section>
    );
};

export default PdfToSvgConverter;
