import React from "react";

const DataDescriptionRent = ({ data }) => {
  return (
    <>
      <div className="rounded-3xl bg-[#ebebeb] mb-2 h-full w-full p-4">
        <h3 className="mb-3 font-bold text-xl">Descripción</h3>
        <div className="flex">
          <div>
            <i className="fa-sharp fa-solid fa-earth-americas"></i>
          </div>
          <h3 className="mx-3">
            <span className=" font-bold"> Pais : </span>
            {data.country}
          </h3>
        </div>
        <div className="flex">
          <div>
            <i className="fa-sharp fa-solid fa-city"></i>
          </div>

          <h3 className="mx-3">
            <span className=" font-bold"> Ciudad : </span>
            {data.city}
          </h3>
        </div>
        <div className="flex">
          <div>
            <i className="fa-sharp fa-solid fa-map-location-dot"></i>
          </div>
          <h3 className="mx-3">
            <span className=" font-bold"> Dirección : </span>
            {data.address}
          </h3>
        </div>
        <div className="flex">
          <div>
            <i className="fa-sharp fa-solid fa-people-group"></i>
          </div>
          <h3 className="mx-3">
            <span className=" font-bold"> Maximo de personas : </span>
            {data.maxPeople}
          </h3>
        </div>
        <div className="flex">
          <div>
            <i className="fa-sharp fa-solid fa-person-booth"></i>
          </div>
          <h3 className="mx-3">
            <span className=" font-bold"> Numero de Habitaciones : </span>
            {data.numberBedrom}
          </h3>
        </div>
        <div className="flex">
          <div>
            <i className="fa-sharp fa-solid fa-toilet"></i>
          </div>
          <h3 className="mx-3">
            <span className=" font-bold"> Numero de Baños : </span>
            {data.numberBathroom}
          </h3>
        </div>
        <div className="flex">
          <div>
            <i className="fa-sharp fa-solid fa-dumbbell"></i>
          </div>
          <h3 className="mx-3">
            <span className=" font-bold"> Gym : </span>
            {data.gym === false ? "No" : "Si"}
          </h3>
        </div>
        <div className="flex">
          <div>
            <i className="fa-sharp fa-solid fa-person-swimming"></i>
          </div>
          <h3 className="mx-3">
            <span className=" font-bold"> Piscina : </span>
            {data.swimmimgPool === false ? "No" : "Si"}
          </h3>
        </div>
        <div className="flex">
          <div>
            <i className="fa-regular fa-file-lines"></i>
          </div>
          <p className="mx-3">
            <span className=" font-bold"> Reseña : </span>
            {data.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default DataDescriptionRent;
