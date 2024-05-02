import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Breadcrums = () => {
  const [urlName, setUrlName] = useState("");
  const [currentUrl, setCurrentUrl] = useState(window.location.href);

  useEffect(() => {
    const urlMap = {
      "color-thief": "COLOR THIEF",
      "image-avatar": "IMAGE CROPPER",
      "my-sign": "MY SIGN",
      base64: "BASE64 ENCRYPT DECRYPT",
      Base64_image: "IMAGE <-> BASE64 CONVERTOR",
      count: "TEXT ANALYSER",
      "num-to-words": "TEXT TRANSFORMATION",
      "image-text": "IMAGE TEXT EXTARCTOR",
      "text-speech": "TEXT TO SPEECH",
      "jpg-pdf": "JPG TO PDF",
      "json-xml": "JSON <-> XML",
      "faker": "FAKER",
    };

    const matchingKey = Object.keys(urlMap).find((key) =>
      currentUrl.includes(key)
    );
    if (matchingKey) {
      setUrlName(urlMap[matchingKey]);
    }
  }, [currentUrl]);

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
