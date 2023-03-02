import React from "react";
import styles from "./landing.module.css";
import imagen from "../../assets/hotel.jpg";
import { useNavigate } from "react-router-dom";
const Landing = () => {
  const navigate = useNavigate();

  const navigateHonme = () => {
    navigate("/home");
  };

  return (
    <>
      <section className={`${styles.landing}`}>
        <div className={`${styles.div1}`}>
          <img className={`${styles.image1}`} src={imagen} alt="image" />
        </div>
        <div
          className={`${styles.div2} opacity-75 sm:opacity-75 lg:opacity-95 xl:opacity-95 shadow-2xl`}
        >
          <div>
            <h4
              className={` ${styles.h4} sm:text-xl lg:text-3xl cursor-default font-bold`}
            >
              <span>
                Tu
                <span
                  className={`${styles.span} text-[#A780ff] text-3xl sm:text-3xl lg:text-6xl`}
                >
                  Destino
                </span>
                app.
              </span>
            </h4>
            <p className={`${styles.parrafo1} text-xl my-2`}>
              Un lugar donde llegar
            </p>
            <p className={`${styles.parrafo2}my-2 mt-12 text-justify`}>
              Aquí encontraras calidad, familiaridad y compromiso, planifica tus
              reservas con los mejores precios del mercado y ofertas increíbles.
              Mas de 500 casas, 800 apartamentos y miles de destinos en un solo
              lugar.
            </p>
          </div>

          <button
            onClick={navigateHonme}
            className={`${styles.button} btn bg-[#A780ff] hover:bg-[#906be7] border-transparent hover:border-transparent text-white`}
          >
            Ingresa Ya
          </button>
        </div>
      </section>
    </>
  );
};
export default Landing;
