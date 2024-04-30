import React, { useState } from "react";
import Tesseract from "tesseract.js";
import Breadcrums from "../../Components/Breadcrums/Breadcrums";

const ImageTextExtractor = () => {
  const [image, setImage] = useState(null);
  const [extractedText, setExtractedText] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  const extractTextFromImage = () => {
    Tesseract.recognize(image, "eng", { logger: (m) => console.log(m) })
      .then(({ data: { text } }) => {
        setExtractedText(text);
      })
      .catch((error) => {
        console.error("Error extracting text:", error);
      });
  };

  return (
    <>
      <Breadcrums />
      <div className="container">
        <h4 className="text-center">IMAGE TEXT EXTRACTOR</h4>
        <input
          type="file"
          className="form-control form-control-sm "
          accept="image/*"
          onChange={handleImageChange}
        />
        {image && (
          <>
            <div className="my-2 d-flex flex-column align-items-center justify-content-center ">
              <img
                className="border border-2"
                src={image}
                alt="Uploaded"
                style={{ maxWidth: "70%" }}
              />
              <button
                className="btn btn-sm btn-success"
                onClick={extractTextFromImage}
              >
                Extract Text
              </button>
            </div>{" "}
          </>
        )}
        {extractedText && (
          <div>
            <h3 className="badge bg-warning text-center text-dark">
              Extracted Text:
            </h3>
            <br />
            <p className="badge text-dark text-wrap m-1 text">
              {extractedText}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default ImageTextExtractor;
