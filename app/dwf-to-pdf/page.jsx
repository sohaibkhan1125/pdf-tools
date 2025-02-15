'use client';
import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const DxfToPdfConverter = () => {
    const [file, setFile] = useState(null);
    const [pdfBlobUrl, setPdfBlobUrl] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleConvert = async () => {
        if (!file) {
            alert("Please select a DXF file first.");
            return;
        }

        setLoading(true);
        setError(null);
        setPdfBlobUrl(null);

        const formData = new FormData();
        formData.append('File', file);

        try {
            const response = await axios.post(
                'https://v2.convertapi.com/convert/dxf/to/pdf?secret=x7fFowh7f4l2j2LL',
                formData,
                {
                    headers: { 'Content-Type': 'multipart/form-data' },
                }
            );

            console.log("API Response:", response.data);

            if (response.data?.Files?.length > 0) {
                const fileData = response.data.Files[0].FileData;
                if (fileData) {
                    const byteCharacters = atob(fileData);
                    const byteNumbers = new Array(byteCharacters.length);
                    for (let i = 0; i < byteCharacters.length; i++) {
                        byteNumbers[i] = byteCharacters.charCodeAt(i);
                    }
                    const byteArray = new Uint8Array(byteNumbers);
                    const blob = new Blob([byteArray], { type: 'application/pdf' });
                    const blobUrl = URL.createObjectURL(blob);

                    console.log("Generated PDF Blob URL:", blobUrl);
                    setPdfBlobUrl(blobUrl);
                } else {
                    setError("Failed to retrieve PDF data.");
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
                <div className="bg-white shadow-md rounded-lg p-6 h-96 w-full">
                    <h1 className="text-xl font-semibold mb-4 text-center">DXF to PDF Converter</h1>
                    <input type="file" accept=".dxf" onChange={handleFileChange} className="w-full p-2 border rounded mb-4" />
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
                    {pdfBlobUrl && (
                        <div className="mt-4">
                            <p className="text-green-600">Conversion successful!</p>
                            <iframe src={pdfBlobUrl} className="w-full h-64 border rounded" title="PDF Preview"></iframe>
                            <a href={pdfBlobUrl} target="_blank" rel="noopener noreferrer" className="block mt-2 bg-green-500 text-white text-center px-4 py-2 rounded">
                                View PDF
                            </a>
                            <a href={pdfBlobUrl} download="converted.pdf" className="block mt-2 bg-blue-500 text-white text-center px-4 py-2 rounded">
                                Download PDF
                            </a>
                        </div>
                    )}
                </div>
            </div>
            <Footer/>
            <style jsx>{`
                .newtons-cradle {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 80px;
                    height: 40px;
                    position: relative;
                }
                .newtons-cradle__dot {
                    width: 12px;
                    height: 12px;
                    margin: 0 5px;
                    background-color: #3498db;
                    border-radius: 50%;
                    animation: swing 1.2s infinite ease-in-out;
                }
                .newtons-cradle__dot:nth-child(1) { animation-delay: -0.3s; }
                .newtons-cradle__dot:nth-child(2) { animation-delay: -0.15s; }
                .newtons-cradle__dot:nth-child(3) { animation-delay: 0s; }
                .newtons-cradle__dot:nth-child(4) { animation-delay: 0.15s; }
                
                @keyframes swing {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
            `}</style>
        </section>
    );
};

export default DxfToPdfConverter;
