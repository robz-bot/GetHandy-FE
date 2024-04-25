import React, { useState } from "react";
import Base64 from "base-64";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Base641 = () => {
  const [input, setInput] = useState("");
  const [encryptedText, setEncryptedText] = useState("");
  const [decryptedText, setDecryptedText] = useState("");

  const encrypt = (stringToEncrypt) => {
    if (stringToEncrypt == null || stringToEncrypt == "") {
      toast("Input required!");
      return;
    }
    setEncryptedText(btoa(stringToEncrypt));
    setDecryptedText(atob(stringToEncrypt));
    return btoa(stringToEncrypt);
  };

  const copyColorCodeEnc = (text) => {
    console.log({ text });
    const textarea = document.createElement("textarea");
    textarea.value = text.encryptedText;

    textarea.style.position = "fixed";
    textarea.style.top = 0;
    textarea.style.left = 0;

    document.body.appendChild(textarea);

    textarea.select();

    try {
      document.execCommand("copy");
      console.log("Text copied to clipboard:", text.encryptedText);
      toast(text.encryptedText + " copied!");
    } catch (error) {
      console.error("Unable to copy text to clipboard:", error);
    }

    document.body.removeChild(textarea);
  };

  const copyColorCodeDec = (text) => {
    console.log({ text });
    // Create a textarea element to hold the text temporarily
    const textarea = document.createElement("textarea");
    textarea.value = text.decryptedText;

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
      console.log("Text copied to clipboard:", text.decryptedText);
      toast(text.decryptedText + " copied!");
    } catch (error) {
      console.error("Unable to copy text to clipboard:", error);
    }

    // Remove the textarea from the DOM
    document.body.removeChild(textarea);
  };

  return (
    <>
      <div className="container text-center ">
        <div className="d-flex align-items-center justify-content-center ">
          <div className="input-group mb-3 w-50 ">
            <span className="input-group-text" id="basic-addon1">
              <i className="bi bi-pen-fill"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Text"
              aria-label="Username"
              aria-describedby="basic-addon1"
              name="input"
              onChange={(event) => {
                console.log(event.target.value);
                setInput(event.target.value);
              }}
            />
          </div>
        </div>
        <div>
          <button
            className="btn btn-sm btn-primary mx-3"
            onClick={() => {
              encrypt(input);
            }}
          >
            Do Encryption & Decryption
          </button>
        </div>
        {encryptedText && decryptedText && (
          <div className="row my-4">
            <div className="col-5">
              <span className="badge bg-dark my-3">Encrypted Text:</span>
              <div className="input-group input-group-lg">
                <input
                  type="text"
                  className="form-control disabled "
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg"
                  value={encryptedText}
                />
                <span
                  className="input-group-text"
                  title="Click here to copy"
                  style={{ cursor: "pointer" }}
                  id="inputGroup-sizing-lg"
                  onClick={() => {
                    copyColorCodeEnc({ encryptedText });
                  }}
                >
                  <i className="bi bi-copy"></i>
                </span>
              </div>
            </div>
            <div className="col-2"></div>
            <div className="col-5">
              <span className="badge bg-dark my-3">Decrypted Text:</span>
              <div className="input-group input-group-lg">
                <input
                  type="text"
                  className="form-control disabled "
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg"
                  value={decryptedText}
                />
                <span
                  className="input-group-text"
                  style={{ cursor: "pointer" }}
                  title="Click here to copy"
                  id="inputGroup-sizing-lg"
                  onClick={() => {
                    copyColorCodeDec({ decryptedText });
                  }}
                >
                  <i className="bi bi-copy"></i>
                </span>
              </div>
            </div>
          </div>
        )}
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
      <ToastContainer />
    </>
  );
};

export default Base641;
