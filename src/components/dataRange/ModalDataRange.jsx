import React from "react";
import DataRange from "./DataRange";

const ModalDataRange = ({ data }) => {
  return (
    <div>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal bg-[#ebebeb] z-[9999]">
        <div className="max-[430px]:w-[91%] shadow-xl p-3 rounded-3xl relative bg-[#ebebeb] ">
          <label
            htmlFor="my-modal-5"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="w-[100%]">
            <DataRange info={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDataRange;
