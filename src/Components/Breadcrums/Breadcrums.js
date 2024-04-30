import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Breadcrums = () => {
  const [urlName, setUrlName] = useState("");
  const [currentUrl, setCurrentUrl] = useState(window.location.href);

  useEffect(() => {
    if (currentUrl.includes("color-thief")) {
      setUrlName("COLOR THIEF");
    }
    else if (currentUrl.includes("image-avatar")) {
      setUrlName("IMAGE CROPPER");
    }
    else if (currentUrl.includes("my-sign")) {
      setUrlName("MY SIGN");
    }
    else if (currentUrl.includes("base64")) {
      setUrlName("BASE64 ENCRYPT DECRYPT");
    }
    else if (currentUrl.includes("Base64_image")) {
      setUrlName("IMAGE <-> BASE64 CONVERTOR");
    }
    else if (currentUrl.includes("count")) {
      setUrlName("TEXT ANALYSER");
    }
    else if (currentUrl.includes("num-to-words")) {
      setUrlName("TEXT TRANSFORMATION");
    }
    else if (currentUrl.includes("image-text")) {
      setUrlName("IMAGE TEXT EXTARCTOR");
    }
  }, []);

  return (
    <div>
      <div class="container ">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb breadcrumb-custom overflow-hidden text-center bg-body-tertiary border rounded-3">
            <li class="breadcrumb-item">
              <Link
                class="mx-2 link-body-emphasis fw-semibold text-decoration-none"
                to="/"
              >
                <i class="bi bi-house-door-fill"></i> HOME
              </Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
            <i class="bi bi-link-45deg"></i> {urlName}
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default Breadcrums;
