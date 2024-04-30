import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const cardData = [
    {
      title: "Color Thief",
      date: "Apr 23",
      description: "Upload an image and get all possible colors!",
      link: "/color-thief",
      background:
        "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(115,194,237,1) 100%)",
    },
    {
      title: "My Sign",
      date: "Apr 24",
      description: "Sign here and download it!",
      link: "/my-sign",
      background:
        "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(115,194,237,1) 100%)",
    },
    {
      title: "Base64 Encrypt Decrypt",
      date: "Apr 24",
      description: "Encrypt/ Decrypt the text!",
      link: "/base64",
      background:
        "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(115,194,237,1) 100%)",
    },
    {
      title: "Image Cropper",
      date: "Apr 29",
      description: "Upload your image, crop and download it!",
      link: "/image-avatar",
      background:
        "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(115,194,237,1) 100%)",
    },
    {
      title: "Image <-> Base64 Convertor",
      date: "Apr 29",
      description: "Convert your image to Base64 and vice-versa!",
      link: "/Base64_image",
      background:
        "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(115,194,237,1) 100%)",
    },
    {
      title: "Text Analyser",
      date: "Apr 30",
      description: "Analyse all the words, characters and sentence!",
      link: "/count",
      background:
        "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(115,194,237,1) 100%)",
    },
  ];

  return (
    <>
      <div className="container my-3">
        <div className="row mb-2 d-flex align-items-center justify-content-center">
          {cardData.map((card, index) => (
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
                  <small className="badge text-dark card-text mb-auto my-2 ">
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
