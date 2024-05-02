import React, { useState } from "react";
import { getDocument, GlobalWorkerOptions } from "pdfjs-dist/legacy/build/pdf";

const PDFMetadataDisplay = () => {
  const [metadata, setMetadata] = useState('');

  // Set the path to the PDF worker
  GlobalWorkerOptions.workerSrc = process.env.PUBLIC_URL + "/PDFWorker.js"; // Adjust the version number accordingly

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (event) => {
        const buffer = event.target.result;
        try {
          const loadingTask = getDocument(buffer);
          const pdf = await loadingTask.promise;
          const pdfMetadata = await pdf.getMetadata();
          setMetadata(pdfMetadata);
        } catch (error) {
          console.error("Error reading PDF file:", error);
        }
      };
      reader.readAsArrayBuffer(file);
    }
  };

  return (
    <>
      <div className="container">
        <h3 className="text-center">PDF Metadata Viewer</h3>
        <input
          type="file"
          className="mx-2 form-control form-control-sm"
          accept=".pdf"
          onChange={handleFileChange}
        />
        {metadata && (
          <div>
            <h3 className="m-2">Metadata:</h3>
            <p>
              <span className="badge bg-primary mx-2">Author:</span>
              {metadata.info.Author != '' ? metadata.info.Author : "N/A"}
            </p>
            <p>
              <span className="badge bg-primary mx-2">Creation Date:</span>
              {metadata.info.CreationDate != ''
                ? metadata.info.CreationDate
                : "N/A"}
            </p>
            <p>
              <span className="badge bg-primary mx-2">Creator:</span>
              {metadata.info.Creator != '' ? metadata.info.Creator : "N/A"}
            </p>
            <p>
              <span className="badge bg-primary mx-2">IsSignaturesPresent:</span>
              {metadata.info.IsSignaturesPresent != ''
                ? metadata.info.IsSignaturesPresent
                : "N/A"}
            </p>
            <p>
              <span className="badge bg-primary mx-2">Language:</span>
              {metadata.info.Language != '' ? metadata.info.Language : "N/A"}
            </p>
            <p>
              <span className="badge bg-primary mx-2">PDFFormatVersion:</span>
              {metadata.info.PDFFormatVersion != ''
                ? metadata.info.PDFFormatVersion
                : "N/A"}
            </p>
            <p>
              <span className="badge bg-primary mx-2">Producer:</span>
              {metadata.info.Producer != '' ? metadata.info.Producer : "N/A"}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default PDFMetadataDisplay;
