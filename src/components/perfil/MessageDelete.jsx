import React from "react";
import { useNavigate } from "react-router-dom";

const MessageDelete = () => {
  const navigate = useNavigate();

  const a = () => {
    navigate("/home");
  };

  return (
    <div className="w-screen h-screen fixed top-0 left-0 bg-[rgba(0,0,0,.5)] flex justify-center items-center ">
      <div className="w-[500px] min-h-[100px] bg-white relative rounded-xl m-2">
        <div className="m-2">
          <h1 className="text-[black] border-b border-[black] p-1">
            Eliminar cuenta definitivamente
          </h1>
          <h2 className="p-4 font-normal text-[#626161]">
            Tu cuenta ha sido eliminada del sitio permanentemente
          </h2>
          <div className="flex justify-end">
            <button
              onClick={a}
              className="btn bg-[#A780ff] hover:bg-[#906be7] border-transparent hover:border-transparent text-white mx-1 "
            >
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageDelete;
