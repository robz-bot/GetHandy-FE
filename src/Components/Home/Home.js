import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row mb-2 d-flex align-items-center justify-content-center">
          <div className="col-md-6  ">
            <div
              className="row bg-white g-0 rounded-5 overflow-hidden flex-md-row mb-4 shadow-lg h-md-250 position-relative"
              style={{ border: "2px solid black" }}
            >
              <div className="col p-4 d-flex flex-column position-static">
                <h4 className="d-inline-block mb-2 text-primary-emphasis">
                  Color Thief
                </h4>
                <small className="mb-1 text-body-secondary">Apr 23</small>
                <small className="card-text mb-auto">
                  Upload an image and get all possbile color
                </small>
                <Link
                  to="/color-thief"
                  className="icon-link gap-1 icon-link-hover stretched-link badge text-primary"
                >
                  Use it
                </Link>
              </div>
              <div className="col-auto d-none d-lg-block">
                <Link to="/color-thief">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="https://source.unsplash.com/random/356X250/?color"
                    alt=""
                    style={{ maxHeight: "185px" }}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="row bg-white g-0 rounded-5 overflow-hidden flex-md-row mb-4 shadow-lg h-md-250 position-relative"
              style={{ border: "2px solid black" }}
            >
              <div className="col p-4 d-flex flex-column position-static">
                <h4 className="d-inline-block mb-2 text-primary-emphasis">
                  My Sign
                </h4>
                <small className="mb-1 text-body-secondary">Apr 24</small>
                <small className="card-text mb-auto">Sign here and download it!</small>
                <Link
                  to="/my-sign"
                  className="icon-link gap-1 icon-link-hover stretched-link badge text-primary"
                >
                  Use it
                </Link>
              </div>
              <div className="col-auto d-none d-lg-block">
                <Link to="/color-thief">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="https://source.unsplash.com/random/356X250/?signature"
                    alt=""
                    style={{ maxHeight: "185px" }}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="row bg-white g-0 rounded-5 overflow-hidden flex-md-row mb-4 shadow-lg h-md-250 position-relative"
              style={{ border: "2px solid black" }}
            >
              <div className="col p-4 d-flex flex-column position-static">
                <h4 className="d-inline-block mb-2 text-primary-emphasis">
                  Base64 Encrypt Decrypt
                </h4>
                <small className="mb-1 text-body-secondary">Apr 24</small>
                <small className="card-text mb-auto">Encrypt/ Decrypt the text</small>
                <Link
                  to="/base64"
                  className="icon-link gap-1 icon-link-hover stretched-link badge text-primary"
                >
                  Use it
                </Link>
              </div>
              <div className="col-auto d-none d-lg-block">
                <Link to="/color-thief">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="https://source.unsplash.com/random/356X250/?encrypt"
                    alt=""
                    style={{ maxHeight: "185px" }}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="row bg-white g-0 rounded-5 overflow-hidden flex-md-row mb-4 shadow-lg h-md-250 position-relative"
              style={{ border: "2px solid black" }}
            >
              <div className="col p-4 d-flex flex-column position-static">
                <h4 className="d-inline-block mb-2 text-primary-emphasis">
                Image Editor Avatar
                </h4>
                <small className="mb-1 text-body-secondary">Apr 29</small>
                <small className="card-text mb-auto">Upload your image, crop and download it!</small>
                <Link
                  to="/image-avatar"
                  className="icon-link gap-1 icon-link-hover stretched-link badge text-primary"
                >
                  Use it
                </Link>
              </div>
              <div className="col-auto d-none d-lg-block">
                <Link to="/image-avatar">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="https://source.unsplash.com/random/356X250/?avatar"
                    alt=""
                    style={{ maxHeight: "185px" }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
