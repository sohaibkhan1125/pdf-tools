'use client';
import React, { useState } from "react";
import axios from "axios";

const RtfToPdfConverter = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("File", file);

    try {
      const response = await axios.post(
        "https://v2.convertapi.com/convert/rtf/to/pdf",
        formData,
        {
          params: { Secret: "x7fFowh7f4l2j2LL" },
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      console.log("Full API Response:", response.data);

      if (response.data.Files && response.data.Files.length > 0) {
        const base64String = response.data.Files[0].FileData;
        const fileName = response.data.Files[0].FileName || "converted.pdf";

        // Convert Base64 to a Blob
        const byteCharacters = atob(base64String);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: "application/pdf" });

        // Create a download link
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        console.log("Download started for:", fileName);
      } else {
        console.error("No file data found in API response");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div>
      <h2>RTF to PDF Converter</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" accept=".rtf" onChange={handleFileChange} />
        <button type="submit">Convert to PDF</button>
      </form>
    </div>
  );
};

export default RtfToPdfConverter;
