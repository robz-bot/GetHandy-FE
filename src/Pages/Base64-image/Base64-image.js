import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Breadcrums from "../../Components/Breadcrums/Breadcrums";

const Base64_image = () => {
  const [base64Image, setBase64Image] = useState("");
  const [type, setType] = useState("IB"); // BI - Base64 to Image , IB - Image to Base64
  const [imageUrl, setImageUrl] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setBase64Image(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleBase64Change = (event) => {
    const base64String = event.target.value;
    setBase64Image(base64String);
  };

  const handleDecode = () => {
    if (
      base64Image &&
      (base64Image.toString().includes("data:image/png;base64,") ||
        base64Image.toString().includes("data:image/jpeg;base64,") ||
        base64Image.toString().includes("data:image/jpg;base64,") ||
        base64Image.toString().includes("data:image/gif;base64,"))
    ) {
      setImageUrl(base64Image);
    } else {
      toast("Something went wrong.. Or Format error");
    }
  };

  const copyBase64 = (text) => {
    console.log({ text });
    const textarea = document.createElement("textarea");
    textarea.value = text.base64Image;

    textarea.style.position = "fixed";
    textarea.style.top = 0;
    textarea.style.left = 0;

    document.body.appendChild(textarea);

    textarea.select();

    try {
      document.execCommand("copy");
      console.log("Text copied to clipboard:", text.base64Image);
      toast("Base64 copied!");
    } catch (error) {
      console.error("Unable to copy text to clipboard:", error);
    }

    document.body.removeChild(textarea);
  };

  const handleSave = () => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "your-img.png"; // Set the filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
    <Breadcrums/>
      <div className="container">
        <div className=" row">
          <div className="col-2"></div>
          <div
            className="p-3 col-4 border border-2 d-flex align-items-center justify-content-center"
            style={{
              cursor: "pointer",
              background:
                type == "IB"
                  ? "linear-gradient(175deg, rgba(37,78,128,1) 0%, rgba(85,170,215,1) 38%)"
                  : "black",
            }}
            onClick={() => setType("IB")}
          >
            <h5 className="text-center fw-bold text-light">
              Convert From Image to Base64
            </h5>
          </div>
          <div
            className="p-3 col-4 border border-2 d-flex align-items-center justify-content-center"
            style={{
              cursor: "pointer",
              background:
                type == "BI"
                  ? "linear-gradient(175deg, rgba(37,78,128,1) 0%, rgba(85,170,215,1) 38%)"
                  : "black",
            }}
            onClick={() => setType("BI")}
          >
            <h5 className="text-center fw-bold text-light">
              Convert From Base64 to Image
            </h5>
          </div>
          <div className="col-2"></div>
        </div>
      </div>

      {type == "IB" && (
        <div className="container text-center my-3 d-flex align-items-center justify-content-center flex-column">
          <p>Upload an image file and convert into base64</p>
          <input
            type="file"
            accept=".png,.jpeg,.jpg"
            className="text-center form-control form-control-sm w-50"
            onChange={handleImageChange}
          />
          {base64Image && (
            <div className="row my-3">
              <div className="col-6">
                <h5>Uploaded Image</h5>
                <img src={base64Image} alt="Uploaded" />
              </div>
              <div className="col-6">
                <h5>
                  Base64 representation{" "}
                  <button
                    className="btn btn-sm"
                    onClick={() => {
                      copyBase64({ base64Image });
                    }}
                  >
                    <i className="bi bi-copy"></i> Copy
                  </button>
                </h5>
                <textarea
                  className="form-control form-control-sm"
                  rows="10"
                  cols="50"
                  value={base64Image}
                  readOnly
                />
              </div>
            </div>
          )}
        </div>
      )}

      {type == "BI" && (
        <div className="container text-center my-3 ">
          <p>Paste your Base64 code and convert into an image</p>
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <textarea
                className="text-center form-control form-control-sm w-100"
                onChange={handleBase64Change}
                value={base64Image}
                rows={15}
              ></textarea>
              <button
                className="my-2 btn btn-sm btn-primary w-100"
                onClick={handleDecode}
              >
                <i class="bi bi-code-slash"></i> Decode
              </button>
            </div>
            <div className="col-lg-6 col-sm-12">
              {imageUrl && (
                <>
                  <div className="d-flex flex-column ">
                    <img
                      className="border border-2"
                      src={imageUrl}
                      alt="Decoded"
                      height={325}
                    />
                    <button
                      className="my-2 btn btn-sm btn-success"
                      onClick={handleSave}
                    >
                      <i class="bi bi-cloud-arrow-down-fill"></i> Download
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <ToastContainer />
    </>
  );
};

export default Base64_image;
