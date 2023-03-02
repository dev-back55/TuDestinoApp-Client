import React from "react";
import style from "./modealGalery.module.css";
import images from "../../utils/descriptionImages";

const ModalGalery = ({ data }) => {
  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal z-[9999]">
        <div
          className={`${style.scroll} modal-box  p-0 relative bg-transparent`}
        >
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle sticky left-4 top-12 text-slate-800 bg-white shadow-xl border-transparent"
          >
            ✕
          </label>
          <div>
            {data?.image.length > 1
              ? data.image.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    className="w-full object-cover"
                  />
                ))
              : images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    className="w-full object-cover"
                  />
                ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalGalery;
