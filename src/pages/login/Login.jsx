import React from "react";
import { useNavigate } from "react-router-dom";
import FormLogin from "../../components/login/FormLogin";
import style from "./login.module.css";

const Login = () => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/home");
  };

  return (
    <div className="h-screen flex-col lg:flex lg:flex-row">
      <div className="lg:w-full lg:h-screen lg:bg-[url('./assets/imgLogin.jpg')] bg-cover"></div>
      <div
        className={`${style.hero} w-full flex flex-shrink-0 h-full flex-col justify-center lg:w-1/3 lg:bg-[#ebebeb]`}
      >
        <h4 className="text-4xl px-[2rem] cursor-default font-bold text-slate-500 relative">
          <button
            onClick={navigateHome}
            className="rounded-full bg-white w-12 p-1 text-center ml-[-2.5rem] cursor-pointer absolute left-[2rem] top-[-2rem]"
          >
            <i onClick={navigateHome} className="fa-solid fa-arrow-left"></i>
          </button>
          <p>Bienvenido a</p>
          <span>
            Tu
            <span className="text-[#A780ff] text-6xl">Destino</span> app.
          </span>
        </h4>
        <div className={style.form}>
          <FormLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
