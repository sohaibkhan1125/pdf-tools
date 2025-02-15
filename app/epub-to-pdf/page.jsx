'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const EpubToPdfConverter = () => {
    const [file, setFile] = useState(null);
    const [pdfUrl, setPdfUrl] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleConvert = async () => {
        if (!file) {
            alert("Please select an EPUB file first.");
            return;
        }

        setLoading(true);
        setError(null);
        setPdfUrl(null);

        const formData = new FormData();
        formData.append('File', file);

        try {
            const response = await axios.post(
                'https://v2.convertapi.com/convert/epub/to/pdf?secret=x7fFowh7f4l2j2LL',
                formData,
                {
                    headers: { 'Content-Type': 'multipart/form-data' },
                }
            );

            console.log("Full API Response:", response.data);
            
            let extractedPdfUrl = null;

            if (response.data?.Files && Array.isArray(response.data.Files) && response.data.Files.length > 0) {
                const pdfFile = response.data.Files[0];
                
                if (pdfFile.Url) {
                    extractedPdfUrl = pdfFile.Url;
                } else if (pdfFile.FileData) {
                    // Convert base64 data to a Blob and create an object URL
                    const byteCharacters = atob(pdfFile.FileData);
                    const byteNumbers = new Array(byteCharacters.length);
                    for (let i = 0; i < byteCharacters.length; i++) {
                        byteNumbers[i] = byteCharacters.charCodeAt(i);
                    }
                    const byteArray = new Uint8Array(byteNumbers);
                    const fileBlob = new Blob([byteArray], { type: 'application/pdf' });
                    extractedPdfUrl = URL.createObjectURL(fileBlob);
                }
            }
            
            if (!extractedPdfUrl) {
                setError("PDF URL or FileData is missing in the API response.");
                setLoading(false);
                return;
            }

            console.log("Extracted PDF URL:", extractedPdfUrl);
            setPdfUrl(extractedPdfUrl);
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
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white shadow-md rounded-lg h-auto p-6 w-full">
                <h1 className="text-xl font-semibold mb-4 text-center">EPUB to PDF Converter</h1>
                <input type="file" accept=".epub" onChange={handleFileChange} className="w-full p-2 border rounded mb-4" />
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
                        <iframe 
                            src={pdfUrl} 
                            className="w-full h-64 border rounded"
                            title="PDF Preview"
                            type="application/pdf"
                        ></iframe>
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

export default EpubToPdfConverter;
