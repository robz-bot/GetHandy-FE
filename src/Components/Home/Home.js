import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div class="container">
        <div class="row mb-2">
          <div class="col-md-6">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <h4 class="d-inline-block mb-2 text-primary-emphasis">
                  Color Thief
                </h4>
                <div class="mb-1 text-body-secondary">Apr 23</div>
                <p class="card-text mb-auto">
                  Upload an image and get all possbile color
                </p>
                <Link
                  to="/color-thief"
                  class="icon-link gap-1 icon-link-hover stretched-link"
                >
                  Use it
                </Link>
              </div>
              <div class="col-auto d-none d-lg-block">
                <Link to="/color-thief">
                  <img
                    class="img-fluid rounded mb-3 mb-md-0"
                    src="https://source.unsplash.com/random/356X250/?color"
                    alt=""
                    style={{ maxHeight: "185px" }}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <h4 class="d-inline-block mb-2 text-primary-emphasis">
                  My Sign
                </h4>
                <div class="mb-1 text-body-secondary">Apr 24</div>
                <p class="card-text mb-auto">
                  Sign here and download it!
                </p>
                <Link
                  to="/my-sign"
                  class="icon-link gap-1 icon-link-hover stretched-link"
                >
                  Use it
                </Link>
              </div>
              <div class="col-auto d-none d-lg-block">
                <Link to="/color-thief">
                  <img
                    class="img-fluid rounded mb-3 mb-md-0"
                    src="https://source.unsplash.com/random/356X250/?signature"
                    alt=""
                    style={{ maxHeight: "185px" }}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <h4 class="d-inline-block mb-2 text-primary-emphasis">
                  Base64 Encrypt Decrypt
                </h4>
                <div class="mb-1 text-body-secondary">Apr 24</div>
                <p class="card-text mb-auto">
                  Encrypt/ Decrypt the text
                </p>
                <Link
                  to="/base64"
                  class="icon-link gap-1 icon-link-hover stretched-link"
                >
                  Use it
                </Link>
              </div>
              <div class="col-auto d-none d-lg-block">
                <Link to="/color-thief">
                  <img
                    class="img-fluid rounded mb-3 mb-md-0"
                    src="https://source.unsplash.com/random/356X250/?encrypt"
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
