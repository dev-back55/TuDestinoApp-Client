import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import fetchLogin from "../../services/login.services";

const FormLogin = () => {
  const [resultFech, setResultFech] = useState();
  const [active, setActive] = useState(true);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigateRegister = () => navigate("/register");

  const onSubmit = async (data) => {
    const result = await fetchLogin(data);
    setResultFech(result);

    if (result.details.isActive === false) {
      setActive(false);
    }

    if (result.details.isActive === true) {
      localStorage.setItem("user", JSON.stringify(result));
    }

    if (typeof result === "object" && result.details.isActive === true) {
      navigate("/home");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-slate-500">Usuario</span>
          </label>
          <input
            type="text"
            placeholder="Usuario"
            className="input input-bordered bg-zinc-300 text-black"
            {...register("username", {
              required: "El campo usuario es requerido",
            })}
          />
          {errors.username && (
            <p className="text-red-500 text-xs   " role="alert">
              {errors.username?.message}
            </p>
          )}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-slate-500">Contraseña</span>
          </label>
          <input
            type="password"
            placeholder="Contraseña"
            className="input input-bordered bg-zinc-300 text-black"
            {...register("password", {
              required: "El campo contraseña es requerido",
            })}
          />
          {errors.password && (
            <p className="text-red-500 text-xs" role="alert">
              {errors.password?.message}
            </p>
          )}
          <label onClick={navigateRegister} className="label">
            <a className="label-text-alt link link-hover text-slate-500 ">
              ¿No tienes una cuenta?{" "}
              <span className="text-[#906be7] hover:text-[#503296]">
                Regístrate.
              </span>
            </a>
          </label>
        </div>
        {resultFech === 404 ||
          (active === false && (
            <p className="pl-1 text-xs text-rose-500">
              el usuario no se encuentra registrado
            </p>
          ))}
        {resultFech === 400 && (
          <p className="pl-1 text-xs text-rose-500">
            el usuario o contraseña son incorrectos
          </p>
        )}

        <div className="form-control">
          <button className="btn bg-[#A780ff] hover:bg-[#906be7] border-transparent hover:border-transparent text-white">
            Iniciar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormLogin;
