import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  const cardData = [
    {
      title: "Color Thief",
      date: "Apr 23, 2024",
      description: "Upload an image and get all possible colors!",
      link: "/color-thief",
      background:
        "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(115,194,237,1) 100%)",
    },
    {
      title: "My Sign",
      date: "Apr 24, 2024",
      description: "Sign here and download it!",
      link: "/my-sign",
      background:
        "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(115,194,237,1) 100%)",
    },
    {
      title: "Base64 Encrypt Decrypt",
      date: "Apr 24, 2024",
      description: "Encrypt/ Decrypt the text!",
      link: "/base64",
      background:
        "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(115,194,237,1) 100%)",
    },
    {
      title: "Image Cropper",
      date: "Apr 29, 2024",
      description: "Upload your image, crop and download it!",
      link: "/image-avatar",
      background:
        "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(115,194,237,1) 100%)",
    },
    {
      title: "Image <-> Base64 Convertor",
      date: "Apr 29, 2024",
      description: "Convert your image to Base64 and vice-versa!",
      link: "/Base64_image",
      background:
        "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(115,194,237,1) 100%)",
    },
    {
      title: "Text Analyser",
      date: "Apr 30, 2024",
      description: "Analyse all the words, characters and sentence!",
      link: "/count",
      background:
        "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(115,194,237,1) 100%)",
    },
    {
      title: "Text Transformation",
      date: "Apr 30, 2024",
      description: "Num - Text & possible text tranformations!",
      link: "/num-to-words",
      background:
        "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(115,194,237,1) 100%)",
    },
    {
      title: "Text Extractor",
      date: "Apr 30, 2024",
      description: "Upload an image and extract text!",
      link: "/image-text",
      background:
        "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(115,194,237,1) 100%)",
    },
    {
      title: "Text to Speech",
      date: "Apr 30, 2024",
      description: "Write a text convert into speech!",
      link: "/text-speech",
      background:
        "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(115,194,237,1) 100%)",
    },
    {
      title: "JPG to PDF",
      date: "May 01, 2024",
      description: "Upload your JPG files and download it as PDF!",
      link: "/jpg-pdf",
      background:
        "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(115,194,237,1) 100%)",
    },
  ];

  // Filter the cardData based on search query
  const filteredCardData = cardData.filter((card) =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-center align-items-center ">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="form-control form-control-sm my-4 w-75"
            placeholder="Search by Title..."
          />
          <p className="m-4 badge bg-secondary ">
            Total Assets: {filteredCardData.length}
          </p>
        </div>
        <small className="m-3 fw-bold ">Most popular tags:</small>
        <span className="mx-2 badge bg-danger">text</span>
        <span className="mx-2 badge bg-warning text-dark">image</span>
        <span className="mx-2 badge bg-info text-dark">base64</span>
        <div className="row my-4 mb-3 d-flex align-items-center justify-content-center">
          {filteredCardData.map((card, index) => (
            <div key={index} className="col-md-4">
              <div
                className=" row bg-white g-0 rounded-5 overflow-hidden flex-md-row mb-4 shadow-lg h-md-250 position-relative text-dark"
                style={{
                  border: "1px solid grey",
                  background: card.background,
                }}
              >
                <div className="col p-4 d-flex flex-column position-static">
                  <h5 className="text-center d-inline-block mb-2 text-primary-emphasis">
                    {card.title}
                    <Link
                      to={card.link}
                      className="text-end icon-link gap-1 icon-link-hover stretched-link badge text-primary"
                    >
                      <i className="bi bi-box-arrow-up-right text-dark"></i>
                    </Link>
                  </h5>
                  <small className="badge text-primary mb-1 ">
                    {card.date}
                  </small>
                  <small className="text-wrap badge text-dark card-text mb-auto my-2 ">
                    {card.description}
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
