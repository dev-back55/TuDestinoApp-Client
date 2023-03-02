import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import fetchRegister from "../../services/register.services";

const FormRegister = ({ setRegister }) => {
  const [resultFech, setresultFech] = useState();
  const [isCreate, setIsCreate] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigateLogin = () => navigate("/login");

  const onSubmit = async (data) => {
    //Carga de imagen a cloudinary
    const img = new FormData();
    img.append("upload_preset", "myuploads");
    img.append("file", data.image[0]);
    const uploadRes = await axios.post(
      "https://api.cloudinary.com/v1_1/djdp4cavt/image/upload",
      img
    );

    const { url } = uploadRes.data;

    const newData = {
      ...data,
      image: url,
    };

    const result = await fetchRegister(newData);
    setresultFech(result);

    if (result.status === 200) {
      setIsCreate(true);
      setRegister(true);
    }
  };

  const nivigateLogin = () => {
    navigate("/login");
    setRegister(false);
  };

  return (
    <div className="card-body ">
      {isCreate === false ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-1">
            <div className="form-control w-2/3">
              <label className="label">
                <span className="label-text text-slate-500">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered bg-zinc-300 text-black"
                {...register("email", {
                  required: "El campo email es requerido",
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-xs" role="alert">
                  {errors.email?.message}
                </p>
              )}
            </div>

            <div className="form-control w-1/3">
              <label className="label">
                <span className="label-text text-slate-500">Usuario</span>
              </label>
              <input
                type="text"
                placeholder="usuario"
                className="input input-bordered bg-zinc-300 text-black"
                {...register("username", {
                  required: "El campo usuario es requerido",
                })}
              />
              {errors.username && (
                <p className="text-red-500 text-xs" role="alert">
                  {errors.username?.message}
                </p>
              )}
            </div>
          </div>

          {resultFech === 500 && (
            <p className="pl-1 text-xs text-rose-500">
              El nombre de usuario o correo ya existe intenta denuevo.
            </p>
          )}

          <div className="form-control">
            <label className="label">
              <span className="label-text text-slate-500">Contraseña</span>
            </label>
            <input
              type="password"
              placeholder="contraseña"
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
          </div>

          <div className="flex gap-1">
            <div className="form-control w-1/3">
              <label className="label">
                <span className="label-text text-slate-500">Edad</span>
              </label>
              <input
                type="number"
                placeholder="edad"
                className="input input-bordered bg-zinc-300 text-black"
                {...register("age", {
                  required: "El campo edad es requerido",
                })}
              />
              {errors.age && (
                <p className="text-red-500 text-xs" role="alert">
                  {errors.age?.message}
                </p>
              )}
            </div>

            <div className="form-control w-2/3">
              <label className="label">
                <span className="label-text text-slate-500">Telefono</span>
              </label>
              <input
                type="text"
                placeholder="telefono"
                className="input input-bordered bg-zinc-300 text-black"
                {...register("phone", {
                  required: "El campo telefono es requerido",
                })}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs" role="alert">
                  {errors.phone?.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex gap-1">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text text-slate-500">Pais</span>
              </label>
              <input
                type="text"
                placeholder="Pais"
                className="input input-bordered bg-zinc-300 text-black"
                {...register("country", {
                  required: "El campo pais es requerido",
                })}
              />
              {errors.country && (
                <p className="text-red-500 text-xs" role="alert">
                  {errors.country?.message}
                </p>
              )}
            </div>

            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text text-slate-500">Ciudad</span>
              </label>
              <input
                type="text"
                placeholder="ciudad"
                className="input input-bordered bg-zinc-300 text-black"
                {...register("city", {
                  required: "El campo ciudad es requerido",
                })}
              />
              {errors.city && (
                <p className="text-red-500 text-xs" role="alert">
                  {errors.city?.message}
                </p>
              )}
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-slate-500">Image</span>
            </label>
            <input
              type="file"
              className="file-input file-input-bordered file-input-primary bg-zinc-300 text-slate-500 text-sm"
              {...register("image", {
                required: false,
              })}
            />
            <label onClick={navigateLogin} className="label">
              <a className="label-text-alt link link-hover text-slate-500 ">
                ¿Ya tienes una cuenta?{" "}
                <span className="text-[#906be7] hover:text-[#503296]">
                  Ingresa ahora.
                </span>
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#A780ff] hover:bg-[#906be7] border-transparent hover:border-transparent text-white">
              Iniciar
            </button>
          </div>
        </form>
      ) : (
        <div>
          <p className="text-xl text-center mb-7 text-[#906be7]">
            Usuario registrado con exito !
          </p>
          <button
            onClick={nivigateLogin}
            className="w-full btn bg-[#A780ff] hover:bg-[#906be7] border-transparent hover:border-transparent text-white"
          >
            Ingresa ahora
          </button>
        </div>
      )}
    </div>
  );
};

export default FormRegister;
