import React, { useState, createRef } from "react";
import Cropper, { ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";
interface CropperComponentProps {
  image: string | undefined;
  onCrop: (croppedImage: string) => void; // Send both cropped image and file name
}

const CropperComponent: React.FC<CropperComponentProps> = ({ image, onCrop }) => {
  const [cropData, setCropData] = useState("");
  const cropperRef = createRef<ReactCropperElement>();
  const getCropData = async () => {
    try {
      if (typeof cropperRef?.current?.cropper !== "undefined") {
        const croppedCanvas = await cropperRef?.current?.cropper?.getCroppedCanvas();
        if (croppedCanvas) {
          const croppedDataURL = croppedCanvas.toDataURL();
          setCropData(croppedDataURL);
        }
      }
    } catch (error) {
      console.error("Error while getting cropped data:", error);
    }
  };

  const handleCroppedImageSetAsFinalImage = async () => {
    try {
      if (cropperRef.current?.cropper && typeof cropperRef.current?.cropper !== "undefined") {
        const canvas = await cropperRef?.current?.cropper?.getCroppedCanvas();
        if (canvas) {
          const croppedImage = canvas.toDataURL(); 
          await onCrop(croppedImage); // Send cropped image and original file name
        }
      }
    } catch (error) {
      console.error("Error while setting cropped image as final:", error);
    }
  };

  return (
    <div className="w-full flex justify-center gap-4 items-center h-[400px]">
      {/* Left Section: Cropper */}
      <div className="w-[400px] gap-y-3 h-full flex flex-col justify-between">
        <Cropper
          ref={cropperRef}
          style={{ height: "90%", width: "100%" }}
          initialAspectRatio={1}
          src={image}
          viewMode={1}
          minCropBoxHeight={10}
          minCropBoxWidth={10}
          background={false}
          responsive={true}
          autoCropArea={1}
          checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
          guides={true}
        />
        <button className="w-1/2 ml-24  border border-black mt-4  rounded-full py-2 px-4 text-black"
          type="button"
          onClick={getCropData}>
          Crop Image
        </button>
      </div>
      {/* Right Section: Cropped Image Display */}
      {cropData &&
        <div className="w-[400px] h-full flex-col justify-end items-end">
          <img
            src={cropData}
            className="w-[90%] h-[90%] object-contain"
            alt="Cropped"

          />
          <button
            className="  w-1/2 ml-24 text-black border border-black  block py-2 px-4 rounded-full"
            type="button"
            onClick={handleCroppedImageSetAsFinalImage}
          >
            Set as Final
          </button>
        </div>
      }
    </div>
  );
};

export default CropperComponent;