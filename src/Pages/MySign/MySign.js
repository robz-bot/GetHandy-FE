import React, { useRef, useState } from "react";
import SignaturePad from "react-signature-pad-wrapper";
import Breadcrums from "../../Components/Breadcrums/Breadcrums";

const MySignaturePad = () => {
  const signaturePadRef = useRef(null);
  const [signatureData, setSignatureData] = useState(null);

  const handleClear = () => {
    if (signaturePadRef.current) {
      signaturePadRef.current.clear();
      setSignatureData(null);
    }
  };

  const handleSave = () => {
    if (signaturePadRef.current) {
      const dataUrl = signaturePadRef.current.toDataURL();
      console.log({ dataUrl });
      setSignatureData(dataUrl);
    }
  };

  const handleDownload = () => {
    // Create a temporary link element
    const link = document.createElement("a");
    link.href = signatureData;
    link.download = "signature.png"; // Set the filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Breadcrums />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 border rounded-4 ">
            <h2 className="text-center">Sign here</h2>
            <SignaturePad
              ref={signaturePadRef}
              canvasProps={{ className: "border rounded-3" }}
            />
            <div className="d-flex align-items-center justify-content-center my-4">
              <button
                onClick={handleClear}
                className="btn btn-sm btn-danger mx-2"
              >
                Clear
              </button>
              <button onClick={handleSave} className="btn btn-sm btn-primary">
                Save
              </button>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 border rounded-4">
            {signatureData && (
              <div>
                <h2 className="text-center">Your Signature</h2>
                <img
                  src={signatureData}
                  alt="Signature"
                  class="img-fluid rounded mb-3 mb-md-0"
                />
                <div className="d-flex align-items-center justify-content-center my-4">
                  <button
                    onClick={handleDownload}
                    className="btn btn-sm btn-success "
                  >
                    Download
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MySignaturePad;
