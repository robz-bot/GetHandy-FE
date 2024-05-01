import React, { useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Breadcrums from "../../Components/Breadcrums/Breadcrums";

const JpgToPdfConverter = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [pdf, setPdf] = useState(null);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedImages([...selectedImages, ...files]);
  };

  const removeImage = (index) => {
    const updatedImages = [...selectedImages];
    updatedImages.splice(index, 1);
    setSelectedImages(updatedImages);
  };

  const convertToPdf = async () => {
    const pdf = new jsPDF();

    for (let i = 0; i < selectedImages.length; i++) {
      const image = selectedImages[i];
      const canvas = await getImageCanvas(image);
      const imageData = canvas.toDataURL("image/jpeg");
      pdf.addImage(imageData, "JPEG", 10, 10, 180, 160);
      if (i < selectedImages.length - 1) {
        pdf.addPage();
      }
    }

    setPdf(pdf);
  };

  const downloadPdf = () => {
    if (pdf) {
      pdf.save("converted_images.pdf");
    }
  };

  const getImageCanvas = async (image) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        resolve(canvas);
      };
      img.src = URL.createObjectURL(image);
    });
  };

  return (
    <>
      <Breadcrums />
      <div className="container">
        <input
          className="form-control form-control-sm"
          type="file"
          accept=".jpg, .jpeg"
          multiple
          onChange={handleFileChange}
        />
        <button
          className="my-2 btn btn-sm btn-primary"
          onClick={convertToPdf}
          disabled={selectedImages.length === 0}
        >
          Convert to PDF
        </button>
        <button
          className="mx-2 btn btn-sm btn-success"
          onClick={downloadPdf}
          disabled={!pdf}
        >
          Download PDF
        </button>
        {selectedImages.length > 0 && (
          <div>
            <h4>Uploaded Images: {selectedImages.length}</h4>
            <div className="row ">
              {selectedImages.map((image, index) => (
                <div className="col-3 p-3 position-relative" key={index}>
                  <div className="card shadow-sm">
                    <span
                      onClick={() => removeImage(index)}
                      class="btn position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle"
                    >
                      <span class="visually-hidden">Delete</span>
                      <i className="text-light bi bi-x"></i>
                    </span>
                    <img
                      className="bd-placeholder-img card-img-top"
                      width="50%"
                      height="225"
                      src={URL.createObjectURL(image)}
                      alt={`Image ${index + 1}`}
                    ></img>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default JpgToPdfConverter;
