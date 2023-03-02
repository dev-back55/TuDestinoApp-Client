import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MessageDelete from "./MessageDelete";

const DeleteUser = ({ setOpenDelete, openDelete }) => {
  const close = () => {
    setOpenDelete(!openDelete);
  };
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const deletes = (e) => {
    e.preventDefault();
    const isActives = {
      isActive: false,
    };
    axios
      .patch(
        `https://tudestinoapp-api-production.up.railway.app/api/users/${user.id}`,
        isActives
      )
      .then((res) => {
        localStorage.clear("user");
        navigate("/message");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-screen h-screen fixed top-0 left-0 bg-[rgba(0,0,0,.5)] flex justify-center items-center ">
      <div className="w-[500px] min-h-[100px] bg-white relative rounded-xl m-2 p-5">
        <div className="m-2">
          <h1 className="text-[black] border-b border-[black] p-1">
            Eliminar cuenta definitivamente
          </h1>
          <h2 className="my-3 font-normal text-[#626161] text-justify">
            Si crees que no volverás a usar tu Destino App y quieres eliminar tu
            cuenta, podemos ayudarte hacerlo. Ten en cuenta que no podrás volver
            a activarla ni recuperar ningún dato. Estas a punto de eliminar tu
            cuenta de forma permanente. Si ya lo tienes todo listo para hacerlo,
            haz clic en "Eliminar cuenta". A partir de este momento, sera
            eliminado tu cuenta.
          </h2>

          <div className="flex justify-end my-1 ">
            <button
              onClick={close}
              className="btn bg-[#A780ff] hover:bg-[#906be7] border-transparent hover:border-transparent text-white mx-1 "
            >
              cancelar
            </button>
            <button
              onClick={deletes}
              className="btn bg-[#A780ff] hover:bg-[#906be7] border-transparent hover:border-transparent text-white   mx-1 "
            >
              <i className="fa-sharp fa-solid fa-triangle-exclamation text-[yellow] mx-2"></i>
              Eliminar cuenta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteUser;
