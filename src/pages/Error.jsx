import React from "react";
import imgError from "../assets/error.png";
import { Link } from "react-router-dom";
import logo from "../assets/LogoIcono.png";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen min-[700px]:flex-row min-[700px]:gap-3">
      <div className="px-5 cursor-default max-w-2xl">
        <div className="flex gap-3">
          <img className="w-[4rem]" src={logo} alt="logo" />
          <h2 className="text-7xl text-[#A780ff]">Uups!</h2>
        </div>
        <h4 className="text-3xl my-6">
          Al parecer no podemos encontrar la página que estás buscando.
        </h4>
        <p className="text-2xl">
          Codigo de error: <span className="text-[#A780ff]">404</span>
        </p>
        <p className="my-3 text-lg font-bold">
          Aquí hay algunos enlaces útiles en su lugar:
        </p>
        <ul className="text-lg flex flex-col">
          <Link
            to={"/home"}
            className="hover:text-[#A780ff] hover:cursor-pointer"
          >
            Inicio
          </Link>
          <Link
            to={"/login"}
            className="hover:text-[#A780ff] hover:cursor-pointer"
          >
            iniciar sesión
          </Link>
          <Link
            to={"/register"}
            className="hover:text-[#A780ff] hover:cursor-pointer"
          >
            Registro
          </Link>
        </ul>
      </div>
      <div className="w-80">
        <img src={imgError} alt="error" />
      </div>
    </div>
  );
};

export default Error;
