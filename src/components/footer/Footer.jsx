import React from "react";
import logo from "../../assets/logo.png";
import logocopy from "../../assets/logocopy.png";
import logofb from "../../assets/logofb.png";
import logoig from "../../assets/logoig.png";
import logott from "../../assets/logott.png";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const navigatePage = (title) => navigate(`/page/${title}`);

  const navigateHome = () => navigate("/home");

  return (
    <>
      <footer className="footer p-10 bg-secondary-content justify-evenly border-t-2">
        <div>
          <span className="text-slate-700 font-bold">Asistencia</span>
          <a
            onClick={() => navigatePage("Centro de ayuda")}
            className="link text-slate-600 link-hover"
          >
            Centro de ayuda
          </a>
          <a
            onClick={() =>
              navigatePage("Apoyo a las personas con discapacidad")
            }
            className="link text-slate-600 link-hover"
          >
            Apoyo a las personas con discapacidad
          </a>
          <a
            onClick={() => navigatePage("Opciones de cancelación")}
            className="link text-slate-600 link-hover"
          >
            Opciones de cancelación
          </a>
          <a
            onClick={() =>
              navigatePage("Denunciar un problema en el vecindario")
            }
            className="link text-slate-600 link-hover"
          >
            Denunciar un problema en el vecindario
          </a>
        </div>
        <div>
          <span className="text-slate-700 font-bold">Tu destino app</span>

          <a
            onClick={() => navigatePage("Politicas de cancelación")}
            className="link text-slate-600 link-hover"
          >
            Politicas de cancelación
          </a>
          <a
            onClick={() => navigatePage("Politicas de privacidad")}
            className="link text-slate-600 link-hover"
          >
            Politicas de privacidad
          </a>

          <a
            onClick={() => navigatePage("Luchamos contra la discriminación")}
            className="link text-slate-600 link-hover"
          >
            Luchamos contra la discriminación
          </a>
          <a
            onClick={() => navigatePage("Carreras")}
            className="link text-slate-600 link-hover"
          >
            Carreras
          </a>
          <a
            onClick={() => navigatePage("Proteccion al cliente")}
            className="link text-slate-600 link-hover"
          >
            Protección al cliente
          </a>
        </div>
        <div>
          <span className="text-slate-900 font-bold">Sobre Nosotros</span>
          <Link
            to={"/nosotros"}
            className="link text-slate-600 link-hover font-semibold"
          >
            Desarrolladores
          </Link>
        </div>
        <div>
          <span className="text-slate-700 font-bold">Comunidad</span>
          <a
            onClick={() =>
              navigatePage(
                "Tu destino: alojamiento de ayuda en caso de catástrofe"
              )
            }
            className="link text-slate-600 link-hover"
          >
            Tu destino: alojamiento de ayuda en caso de catástrofe
          </a>
          <a
            onClick={() => navigatePage("Recursos para anfitriones")}
            className="link text-slate-600 link-hover"
          >
            Recursos para anfitriones
          </a>
          <a
            onClick={() =>
              navigatePage(
                "Como brindar servicios de anfitrión de forma responsable"
              )
            }
            className="link text-slate-600 link-hover"
          >
            Como brindar servicios de anfitrión de forma responsable
          </a>
        </div>
      </footer>
      <div className="flex px-10 max-[700px]:flex-col justify-evenly items-center py-6 gap-5">
        <div onClick={navigateHome} className="w-44 cursor-pointer">
          <img src={logo} alt="logo" />{" "}
        </div>
        <div className="flex items-center w-[40%] justify-center">
          <img className="w-5" src={logocopy} alt="logocopy" />{" "}
          <span className="text-sm ">
            2023 TuDestinoapp
            <span className="max-[700px]:hidden">
              , Todos los Derechos Reservados.
            </span>
          </span>
        </div>
        <div className="flex w-36 gap-2">
          <a href="https://es-la.facebook.com/" target={"_blank"}>
            <img className="w-10" src={logofb} alt="logofb" />{" "}
          </a>
          <a href="https://www.instagram.com/" target={"_blank"}>
            <img className="w-10" src={logoig} alt="logoig" />{" "}
          </a>
          <a href="https://twitter.com/?lang=es" target={"_blank"}>
            <img className="w-10" src={logott} alt="logott" />{" "}
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
