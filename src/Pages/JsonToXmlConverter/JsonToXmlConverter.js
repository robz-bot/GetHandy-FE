import React, { useState } from "react";
import { js2xml, xml2js } from "xml-js"; // Import xml2js for XML to JSON conversion
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Breadcrums from "../../Components/Breadcrums/Breadcrums";

const JsonToXmlConverter = () => {
  const [jsonInput, setJsonInput] = useState("");
  const [xmlOutput, setXmlOutput] = useState("");
  const [conversionType, setConversionType] = useState("jsonToXml"); // Default to JSON to XML

  const handleJsonInputChange = (e) => {
    setJsonInput(e.target.value);
  };

  const handleConversionTypeChange = (type) => {
    setConversionType(type);
    setJsonInput(""); // Clear input on type change
    setXmlOutput(""); // Clear output on type change
  };

  const convertToXml = () => {
    try {
      const jsonObject = JSON.parse(jsonInput);
      const xml = js2xml(jsonObject, { compact: true, spaces: 2 });
      setXmlOutput(xml);
    } catch (error) {
      console.error("Error converting JSON to XML:", error);
      setXmlOutput(error);
    }
  };

  const convertToJson = () => {
    try {
      const xmlObject = xml2js(jsonInput, { compact: true, spaces: 2 });
      const json = JSON.stringify(xmlObject, null, 2);
      setXmlOutput(json);
    } catch (error) {
      console.error("Error converting XML to JSON:", error);
      setXmlOutput(error);
    }
  };

  const copyContent = () => {
    // Create a textarea element to hold the text temporarily
    const textarea = document.createElement("textarea");
    textarea.value = xmlOutput;

    // Make sure to make the textarea out of the viewport
    textarea.style.position = "fixed";
    textarea.style.top = 0;
    textarea.style.left = 0;

    // Append the textarea to the body
    document.body.appendChild(textarea);

    // Select the text inside the textarea
    textarea.select();

    try {
      // Copy the selected text to the clipboard
      document.execCommand("copy");
      console.log("Text copied to clipboard:", xmlOutput);
      toast("Content copied!");
    } catch (error) {
      console.error("Unable to copy text to clipboard:", error);
    }

    // Remove the textarea from the DOM
    document.body.removeChild(textarea);
  };

  return (
    <>
      <Breadcrums />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12 d-flex flex-column align-items-center justify-content-center">
            {/* <h4 className="text-center">Convert JSON to XML / XML to JSON</h4> */}
            <div className="btn-group" role="group">
              <button
                className={`btn btn-sm ${
                  conversionType === "jsonToXml"
                    ? "btn-primary"
                    : "btn-outline-primary"
                }`}
                onClick={() => handleConversionTypeChange("jsonToXml")}
              >
                JSON to XML
              </button>
              <button
                className={`btn btn-sm ${
                  conversionType === "xmlToJson"
                    ? "btn-primary"
                    : "btn-outline-primary"
                }`}
                onClick={() => handleConversionTypeChange("xmlToJson")}
              >
                XML to JSON
              </button>
            </div>
            <textarea
              className="form-control form-control-sm"
              placeholder={
                conversionType === "jsonToXml"
                  ? "Paste your JSON here..."
                  : "Paste your XML here..."
              }
              rows="20"
              cols="50"
              value={jsonInput}
              onChange={handleJsonInputChange}
            ></textarea>
            <button
              className="my-2 btn btn-sm btn-primary"
              onClick={
                conversionType === "jsonToXml" ? convertToXml : convertToJson
              }
            >
              {conversionType === "jsonToXml"
                ? "Convert to XML"
                : "Convert to JSON"}
            </button>
          </div>
          <div className="col-lg-6 col-sm-12 d-flex flex-column align-items-center justify-content-center">
            <button className="btn btn-sm btn-primary ">
              Conversion Output
            </button>
            <textarea
              className="form-control form-control-sm"
              placeholder="Conversion output will appear here..."
              rows="20"
              cols="50"
              readOnly
              value={xmlOutput}
            ></textarea>
            <button
              className="my-2 btn btn-sm btn-success"
              onClick={copyContent}
            >
              <i className="bi bi-copy"></i> Copy Content
            </button>
          </div>
        </div>
      </div>

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
    </>
  );
};

export default JsonToXmlConverter;
