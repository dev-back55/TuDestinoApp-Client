import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import users from "../../assets/users.png";
import Bookings from "./Bookings";
import DeleteUser from "./DeleteUser";
import FormUpdate from "./FormUpdate";

const Profile = () => {
  const [select, setselect] = useState(true);
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [edit, setEdit] = useState();
  const [userss, setUsers] = useState();

  const userLocal = JSON.parse(localStorage.getItem("user"));

  const user = useSelector((state) => state.user);

  const opens = () => {
    setOpen(!open);
    setEdit(userss);
  };
  const openDeletes = () => {
    setOpenDelete(!openDelete);
  };

  const change = () => {
    setselect(!select);
  };

  useEffect(() => {
    const url = `https://tudestinoapp-api-production.up.railway.app/api/users/${userLocal.details._id}`;
    axios
      .get(url)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, [open]);

  return (
    <>
      <div className="tabs bg-secondary-content tabs-boxed  gap-3 bg-transparent w-[80%] mx-auto mt-8">
        <button
          onClick={change}
          className={
            select
              ? "tab tab-active btn "
              : "tab btn bg-[#A780ff] hover:bg-[#906be7] border-transparent hover:border-transparent text-white"
          }
        >
          Informacion Personal
        </button>
        <button
          onClick={change}
          className={
            select
              ? "tab btn bg-[#A780ff] hover:bg-[#906be7] border-transparent hover:border-transparent text-white "
              : "tab tab-active btn"
          }
        >
          Reservas
        </button>
      </div>
      {select ? (
        <div className="w-[80%] m-auto  flex gap-2 flex-col my-4">
          <h1 className="p-4 text-3xl text-black text-center">
            Información personal
          </h1>

          <div className="flex max-[900px]:flex-col-reverse w-full  max-[900px]:items-center max-[900px]:justify-center min-[900px]:w-full   ">
            <div className=" flex  gap-1 flex-wrap p-4 min-[900px]:w-[80%]  ">
              <span className=" w-full text-xl text-black text-left m-0  min-[900px]:text-left ">
                Tu información de perfil{" "}
              </span>
              <p className="text-justify">
                Encontrarás tu información de perfil y las opciones para
                administrarla. Puedes hacer visible parte de esta información,
                como tus datos de contacto.También puedes ver un resumen de tus
                perfiles.
              </p>
            </div>
            <div className="flex w-[150px] h-[150px]  rounded-full  m-2  min-[900px]:w-[20%]  min-[900px]:justify-center min-[900px]:items-center   ">
              <img
                className="w-full h-full object-cover min-[900px]:w-[120px] min-[900px]:h-[120px] rounded-full"
                src={userss?.image ? userss?.image : users}
              />
            </div>
          </div>
          <form>
            <div className="w-full h-[350px]  flex flex-col  justify-between  border  border-[#cfccccdb] m-1 rounded  shadow-md ">
              <div className="p-6 text-xl text-black">
                <h2>Informacion basíca</h2>
              </div>
              <hr className="mx-4 border-1 border-[#9b9898db] shadow-lg" />
              <div className="p-5  flex ">
                <div className="w-[120px]">
                  <span className="text-black text-sm ">Nombre</span>
                </div>
                <div>
                  <span className=" text-black  ">{userss?.username}</span>
                </div>
              </div>
              <hr className="mx-4 border-1 border-[#9b9898db]" />
              <div className="p-5 flex">
                <div className="w-[120px]">
                  <span className="text-black  text-sm">Edad</span>
                </div>
                <div>
                  <span className="text-black  ">{userss?.age}</span>
                </div>
              </div>
              <hr className="mx-4 border-1 border-[#9b9898db]" />
              <div className="p-5 flex">
                <div className="w-[120px]">
                  <span className="text-black text-sm">Pais</span>
                </div>
                <div>
                  <span className=" text-black  ">{userss?.country}</span>
                </div>
              </div>
              <hr className="mx-4 border-1 border-[#9b9898db]" />
              <div className="p-5 flex">
                <div className="w-[120px]">
                  <span className="text-black text-sm ">Ciudad</span>
                </div>
                <div>
                  <span className=" text-black  ">{userss?.city}</span>
                </div>
              </div>
            </div>
            <div className="w-full h-[300px] border border-[#cfccccdb] flex  flex-col justify-evenly mt-7 mb-2 rounded shadow-md ">
              <div className="p-6 text-xl text-black">
                <h2>Información de contacto</h2>
              </div>
              <hr className="mx-4 border-1 border-[#9b9898db]" />
              <div className="p-5 flex flex-wrap">
                <div className="w-[120px] ">
                  <span className="text-black  text-sm ">Correo</span>
                </div>
                <div className="flex ">
                  <span className="text-black  text-sm ">{userss?.email}</span>
                </div>
              </div>

              <hr className="mx-4 border-1 border-[#9b9898db]" />
              <div className="p-5 flex flex-wrap">
                <div className="w-[120px]">
                  <span className="text-black  text-sm ">Telefono</span>
                </div>
                <div>
                  <span className="text-black  text-sm ">{userss?.phone}</span>
                </div>
              </div>
            </div>
          </form>
          <div className="flex justify-end gap-4 ">
            <button
              onClick={opens}
              className="btn bg-[#A780ff] hover:bg-[#906be7] border-transparent hover:border-transparent text-white "
            >
              Editar
            </button>
            <button
              onClick={openDeletes}
              className="btn bg-[#A780ff] hover:bg-[#906be7] border-transparent hover:border-transparent text-white "
            >
              Eliminar
            </button>
          </div>
        </div>
      ) : (
        <>
          <h1 className="text-3xl text-black container m-auto mt-8 mb-4 w-[80%]">
            Tus reservas
          </h1>
          <Bookings />
        </>
      )}

      {open && (
        <FormUpdate
          open={open}
          setOpen={setOpen}
          edit={edit}
          setEdit={setEdit}
        />
      )}

      {openDelete && (
        <DeleteUser setOpenDelete={setOpenDelete} openDelete={openDelete} />
      )}
    </>
  );
};

export default Profile;
