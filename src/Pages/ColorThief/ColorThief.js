import React, { useState } from "react";
import tinycolor from "tinycolor2";
import "./ColorThief.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ColorThiefComponent = () => {
  const [imageSrc, setImageSrc] = useState("");
  const [colors, setColors] = useState([]);
  const [totColor, setTotColor] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setImageSrc(e.target.result);
        extractColors(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const copyColorCode = (text) => {
    console.log({ text });
    // Create a textarea element to hold the text temporarily
    const textarea = document.createElement("textarea");
    textarea.value = text.color;

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
      console.log("Text copied to clipboard:", text.color);
      toast(text.color + " copied!");
    } catch (error) {
      console.error("Unable to copy text to clipboard:", error);
    }

    // Remove the textarea from the DOM
    document.body.removeChild(textarea);
  };

  const extractColors = (imageUrl) => {
    const image = new Image();
    image.src = imageUrl;

    image.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = image.width;
      canvas.height = image.height;
      ctx.drawImage(image, 0, 0, image.width, image.height);

      const imageData = ctx.getImageData(0, 0, image.width, image.height);
      const pixels = imageData.data;

      const uniqueColors = {};

      for (let i = 0; i < pixels.length; i += 4) {
        const r = pixels[i];
        const g = pixels[i + 1];
        const b = pixels[i + 2];
        const a = pixels[i + 3];

        if (a !== 0) {
          // Exclude transparent pixels
          const colorKey = `${r},${g},${b}`;
          uniqueColors[colorKey] = (uniqueColors[colorKey] || 0) + 1;
        }
      }
      // Convert unique colors object to an array of { color: <colorKey>, frequency: <frequency> }
      const uniqueColorsArray = Object.keys(uniqueColors).map((colorKey) => ({
        color: colorKey,
        frequency: uniqueColors[colorKey],
      }));

      setTotColor(uniqueColorsArray.length);
      // Sort unique colors by frequency
      uniqueColorsArray.sort((a, b) => b.frequency - a.frequency);

      // Select top 20 unique colors
      const topColors = uniqueColorsArray
        .slice(0, 1000)
        .map((item) => item.color);

      const colorCodes = topColors.map((colorKey) => {
        const [r, g, b] = colorKey.split(",").map(Number);
        const hexColor = tinycolor({ r, g, b }).toHexString();
        return hexColor;
      });

      console.log(colorCodes);

      setColors(colorCodes);
    };
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* <input type="file" className="form-control" onChange={handleImageUpload} /> */}
            <section>
              <div class="container ">
                <div class="row">
                  <div class="col-lg-5 mx-auto d-flex  align-items-center justify-content-center">
                    <div class="p-5 bg-white shadow rounded-lg text-center">
                      <h4 className="fw-bold">COLOR THIEF</h4>
                      <img
                        src="https://res.cloudinary.com/mhmd/image/upload/v1557366994/img_epm3iz.png"
                        alt=""
                        width="100%"
                        class="d-block mx-auto mb-4 rounded-pill"
                      />
                      <div class="d-flex align-items-center justify-content-center">
                        <label
                          for="fileUpload"
                          class="file-upload btn btn-primary btn-block rounded-pill shadow text-center"
                        >
                          <i class="bi bi-cloud-arrow-up"></i> Browse for file
                          ...
                          <input
                            id="fileUpload"
                            accept=".png,.jpeg,.jpg"
                            type="file"
                            onChange={handleImageUpload}
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-7 mx-auto d-flex  align-items-center justify-content-center">
                    {imageSrc && (
                      <img
                        src={imageSrc}
                        className="img-thumbnail"
                        alt="Uploaded"
                        style={{ maxWidth: "100%", maxHeight: "100%" }}
                      />
                    )}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        {colors.length > 0 && (
          <div>
            <h2>
              Analysed Colors - Showing top {colors.length} colors out of{" "}
              {totColor}
            </h2>
            <div className="row" style={{ maxHeight: "500px" }}>
              {colors.map((color, index) => (
                <>
                  <div
                    className="col-2 my-2 d-flex align-items-center justify-content-center"
                    key={index}
                    style={{
                      backgroundColor: color,
                      border: "2px solid white",
                      height: "80px",
                      cursor: "pointer",
                    }}
                    title={"Click to copy " + color}
                    onClick={() => copyColorCode({ color })}
                  >
                    <span className="badge bg-white text-dark">{color}</span>
                  </div>
                </>
              ))}
              <hr />
            </div>
          </div>
        )}
      </div>
      <br />

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
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </>
  );
};

export default ColorThiefComponent;
