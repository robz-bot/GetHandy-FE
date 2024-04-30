import React, { useState } from "react";
import AvatarEditor from "react-avatar-editor";
const ImageAvatar = () => {
  const [image, setImage] = useState(null);
  const [scale, setScale] = useState(1);

  const handleScaleChange = (e) => {
    const scaleValue = parseFloat(e.target.value);
    setScale(scaleValue);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setImage(file);
  };

  const handleSave = () => {
    if (editorRef) {
      const canvas = editorRef.getImage();
      // You can now use the canvas to save or upload the cropped image
      console.log(canvas.toDataURL());
      const croppedData = canvas.toDataURL();

      const link = document.createElement("a");
      link.href = croppedData;
      link.download = image.name + "-cropped.png"; // Set the filename for download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  let editorRef;

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <section>
              <div class="">
                <div class="row">
                  <div class="col-lg-5 mx-auto d-flex  align-items-center justify-content-center">
                    <div class="p-5 bg-white shadow rounded-lg text-center">
                      <h4 className="fw-bold">IMAGE CROPPER</h4>
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
                            type="file"
                            accept=".png,.jpeg,.jpg"
                            onChange={handleImageChange}
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 mx-auto d-flex  align-items-center justify-content-center flex-column">
                    {image && (
                      <>
                        <div className="border border-2 rounded-1 ">
                          <AvatarEditor
                            ref={(ref) => (editorRef = ref)}
                            image={image}
                            width={450}
                            height={320}
                            border={10}
                            color={[255, 255, 255, 0.6]} // RGBA
                            scale={scale}
                            onScaleChange={handleScaleChange}
                          />
                        </div>
                        <div className="d-flex flex-column">
                          <small className="text-center">Zoom - {scale}%</small>
                          <input
                            type="range"
                            min="0"
                            max="5"
                            step="0.01"
                            value={scale}
                            onChange={handleScaleChange}
                          />
                          <button
                            onClick={handleSave}
                            className="btn btn-sm btn-success my-3"
                          >
                            Download
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageAvatar;
