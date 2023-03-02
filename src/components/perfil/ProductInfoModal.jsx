import axios from "axios";
import React, { useEffect, useState } from "react";

const URLP = "https://tudestinoapp-api-production.up.railway.app/api/products/";

const ProductInfoModal = ({ openModal, setopenModal, productById }) => {
  const cerra = () => {
    setopenModal(!openModal);
  };

  const [infoProduct, setInfoProduct] = useState();

  useEffect(() => {
    axios
      .get(`${URLP}${productById}`)
      .then((res) => setInfoProduct(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="w-screen h-screen fixed top-0 left-0 bg-[rgba(0,0,0,.5)]  z-50 p-4 overflow-auto">
        <div className="w-[100%] max-w-xl m-auto h-auto bg-white relative my-10 rounded-3xl p-4 ">
          <i
            onClick={cerra}
            className="fa-sharp fa-solid fa-circle-xmark absolute right-4 top-4 text-2xl cursor-pointer"
          ></i>
          <div className="m-4">
            <h2 className="text-slate-800 text-2xl capitalize">
              {infoProduct?.title}
              <span className="text-sm underline"> {infoProduct?.country}</span>
              <span className="text-sm underline"> {infoProduct?.city}</span>
            </h2>
            <div className="w-full h-[360px]">
              <img
                className="object-cover w-full h-full rounded-md "
                src={infoProduct?.image[0]}
                alt="image"
              />
            </div>
            <div>
              <h3 className="my-3 font-bold text-xl">Descripción</h3>
              <div className="flex my-1 ">
                <div>
                  <i className="fa-sharp fa-solid fa-earth-americas"></i>
                </div>
                <h3 className="mx-3">
                  <span className=" font-bold"> Pais : </span>
                  {infoProduct?.country}
                </h3>
              </div>
              <div className="flex my-1">
                <div>
                  <i className="fa-sharp fa-solid fa-city"></i>
                </div>

                <h3 className="mx-3">
                  <span className=" font-bold"> Ciudad : </span>
                  {infoProduct?.city}
                </h3>
              </div>
              <div className="flex my-1">
                <div>
                  <i className="fa-sharp fa-solid fa-map-location-dot"></i>
                </div>
                <h3 className="mx-3">
                  <span className=" font-bold"> Dirección : </span>
                  {infoProduct?.address}
                </h3>
              </div>
              <div className="flex my-1">
                <div>
                  <i className="fa-sharp fa-solid fa-people-group"></i>
                </div>
                <h3 className="mx-3">
                  <span className=" font-bold"> Maximo de personas : </span>
                  {infoProduct?.maxPeople}
                </h3>
              </div>
              <div className="flex my-1">
                <div>
                  <i className="fa-sharp fa-solid fa-person-booth"></i>
                </div>
                <h3 className="mx-3">
                  <span className=" font-bold"> Numero de Habitaciones : </span>
                  {infoProduct?.numberBedrom}
                </h3>
              </div>
              <div className="flex my-1">
                <div>
                  <i className="fa-sharp fa-solid fa-toilet"></i>
                </div>
                <h3 className="mx-3">
                  <span className=" font-bold"> Numero de Baños : </span>
                  {infoProduct?.numberBathroom}
                </h3>
              </div>
              <div className="flex my-1">
                <div>
                  <i className="fa-sharp fa-solid fa-dumbbell"></i>
                </div>
                <h3 className="mx-3">
                  <span className=" font-bold"> Gym : </span>
                  {infoProduct?.gym === false ? "No" : "Si"}
                </h3>
              </div>
              <div className="flex my-1">
                <div>
                  <i className="fa-sharp fa-solid fa-person-swimming"></i>
                </div>
                <h3 className="mx-3">
                  <span className=" font-bold"> Piscina : </span>
                  {infoProduct?.swimmimgPool === false ? "No" : "Si"}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductInfoModal;
