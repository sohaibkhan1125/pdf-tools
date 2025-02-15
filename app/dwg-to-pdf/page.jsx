'use client';
import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const DwgToPdfConverter = () => {
    const [file, setFile] = useState(null);
    const [pdfUrl, setPdfUrl] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleConvert = async () => {
        if (!file) {
            alert("Please select a DWG file first.");
            return;
        }

        setLoading(true);
        setError(null);
        setPdfUrl(null);

        const formData = new FormData();
        formData.append('File', file);

        try {
            const response = await axios.post(
                'https://v2.convertapi.com/convert/dwg/to/pdf?secret=x7fFowh7f4l2j2LL',
                formData,
                {
                    headers: { 'Content-Type': 'multipart/form-data' },
                }
            );

            console.log("API Response:", response.data);
            
            if (response.data && response.data.Files && response.data.Files.length > 0) {
                const pdfFile = response.data.Files[0];
                
                if (pdfFile.Url) {
                    setPdfUrl(pdfFile.Url);
                } else if (pdfFile.FileData) {
                    const byteCharacters = atob(pdfFile.FileData);
                    const byteNumbers = new Array(byteCharacters.length);
                    for (let i = 0; i < byteCharacters.length; i++) {
                        byteNumbers[i] = byteCharacters.charCodeAt(i);
                    }
                    const byteArray = new Uint8Array(byteNumbers);
                    const fileBlob = new Blob([byteArray], { type: 'application/pdf' });
                    const objectUrl = URL.createObjectURL(fileBlob);
                    setPdfUrl(objectUrl);
                } else {
                    setError("PDF URL is missing in the API response.");
                }
            } else {
                setError("Unexpected response format. Conversion failed.");
            }
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
        <div className="flex flex-col items-center min-h-screen justify-center bg-gray-100 p-4">
            <div className="bg-white shadow-md rounded-lg p-6 h-auto w-full">
                <h1 className="text-xl font-semibold mb-4 text-center">DWG to PDF Converter</h1>
                <input type="file" accept=".dwg" onChange={handleFileChange} className="w-full p-2 border rounded mb-4" />
                <button
                    onClick={handleConvert}
                    className="bg-blue-500 text-white px-4 py-2 rounded w-full"
                    disabled={loading}
                >
                    {loading ? 'Converting...' : 'Convert to PDF'}
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
                {pdfUrl && (
                    <div className="mt-4">
                        <p className="text-green-600">Conversion successful!</p>
                        <iframe src={pdfUrl} className="w-full h-64 border rounded" title="PDF Preview"></iframe>
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
        <Footer/>
        </section>
    );
};

export default DwgToPdfConverter;
