import React from "react";
import { Link } from "react-router-dom";
//import Footer from "../../components/footer/Footer";
//import NavBar from "../../components/navBar/NavBar";
import data from "../../utils/dataFundadores";

const Github = () => {
  return (
    <div className="col-span-5 w-full h-full">
      <div className="h-full grid xl:grid-cols-3 p-3 lg:grid-cols-2">
        {data.map((item) => (
          <div
            key={item.title}
            className="sm:mx-auto h-72 m-2 bg-[#ebebeb]  hover:bg-[#906be7] hover:text-white rounded-lg transition ease rounded-3xl py-6 w-[24rem] max-[430px]:w-[100%] max-[430px]:mx-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-700 shadow-lg"
          >
            <h2 className="mt-2 text-center">{item.title}</h2>
            <a href={item.urlGithub} target="_blank" rel="noopener noreferrer">
              <img
                src={item.imagen}
                alt={item.urlGithub}
                className="rounded-full mx-auto p-4 w-40 h-40"
              ></img>
            </a>
            <p className="text-center">Github</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Github;

/* 

 <div className=" grid grid-cols-3 p-3 bg-slate-700">
        <div className="h-72 m-2 bg-[#ebebeb]  rounded-3xl py-6 w-[24rem] max-[430px]:w-[100%] max-[430px]:mx-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-700">
          <h2 className="mt-2 text-center">Anmy Moreno</h2>
          <img
            src="https://i.pravatar.cc/200"
            alt=""
            className="rounded-full mx-auto p-4"
          />
        </div>
        <div className="h-72 m-2 bg-[#ebebeb]  rounded-3xl py-6 w-[24rem] max-[430px]:w-[100%] max-[430px]:mx-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-700">
          <h2 className="mt-2 text-center">Eitan Sanabria</h2>
          <img
            src="https://i.pravatar.cc/200"
            alt=""
            className="rounded-full mx-auto p-4"
          />
        </div>
        <div className="h-72 m-2 bg-[#ebebeb]  rounded-3xl py-6 w-[24rem] max-[430px]:w-[100%] max-[430px]:mx-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-700">
          <h2 className="mt-2 text-center">Horacio Abitu</h2>
          <img
            src="https://i.pravatar.cc/200"
            alt=""
            className="rounded-full mx-auto p-4"
          />
        </div>
        <div className="h-72 m-2 bg-[#ebebeb]  rounded-3xl py-6 w-[24rem] max-[430px]:w-[100%] max-[430px]:mx-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-700">
          <h2 className="mt-2 text-center">Jorge Espinoza</h2>
          <img
            src="https://i.pravatar.cc/200"
            alt=""
            className="rounded-full mx-auto p-4"
          />
        </div>
        <div className="h-72 m-2 bg-[#ebebeb]  rounded-3xl py-6 w-[24rem] max-[430px]:w-[100%] max-[430px]:mx-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-700">
          <h2 className="mt-2 text-center">Luciana Rabozzi</h2>
          <img
            src="https://i.pravatar.cc/200"
            alt=""
            className="rounded-full mx-auto p-4"
          />
        </div>
        <div className="h-72 m-2 bg-[#ebebeb]  rounded-3xl py-6 w-[24rem] max-[430px]:w-[100%] max-[430px]:mx-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-700">
          <h2 className="mt-2 text-center">Luis Alomia</h2>
          <img
            src="https://i.pravatar.cc/200"
            alt=""
            className="rounded-full mx-auto p-4"
          />
        </div>
        <div className="h-72 m-2 bg-[#ebebeb]  rounded-3xl py-6 w-[24rem] max-[430px]:w-[100%] max-[430px]:mx-auto transition shadow ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-700">
          <h2 className="mt-2 text-center">Victor Fernandez</h2>
          <img
            src="https://i.pravatar.cc/200"
            alt=""
            className="rounded-full mx-auto p-4"
          />
        </div>
      </div>
      ; 




*/
