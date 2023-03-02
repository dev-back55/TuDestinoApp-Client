import React, { useEffect, useState } from "react";
import GaleryProduct from "../components/productDescription/GaleryProduct";
import SlideDescriptionProduct from "../components/productDescription/SlideDescriptionProduct";
import ModalGalery from "../components/productDescription/ModalGalery";
import Map from "../components/productDescription/Map";
import Footer from "../components/footer/Footer";
import { useParams } from "react-router-dom";
import getProduct from "../services/getProduct.services";
import NavBar from "../components/navBar/navBar";
import DataRange from "../components/dataRange/DataRange";
import DataDescriptionRent from "../components/dataRent/DataDescriptionRent";
import ModalDataRange from "../components/dataRange/ModalDataRange";

const DescriptionProduct = () => {
  const [data, setData] = useState();
  const { productId } = useParams();

  useEffect(() => {
    getProduct(productId).then((resp) => {
      setData(resp?.data);
    });
  }, []);

  return (
    <>
      {data !== undefined && (
        <div className="min-h-screen flex flex-col justify-between">
          <div>
            <div className="fixed mt-0 py-3 z-20 w-full flex justify-center bg-[#ebebeb]">
              <div className="w-[80%] max-[800px]:w-full max-[1220px]:w-[90%]">
                <NavBar />
              </div>
            </div>
            <div className="mx-auto max-[800px]:p-2 max-[800px]:w-full max-[1200px]:w-5/6 w-3/4 mt-28 mb-8">
              <h2 className="text-slate-800 text-2xl py-2 capitalize">
                {data.title}{" "}
                <span className="text-sm underline">{data.country} - </span>
                <span className="text-sm underline">{data.city}</span>
              </h2>
              <div className="hidden min-[700px]:block rounded-3xl shadow-xl">
                <GaleryProduct data={data} />
              </div>
              <div className="min-[700px]:hidden min-[700px]:w-full  shadow-xl">
                <SlideDescriptionProduct data={data} />
              </div>
            </div>

            <div className="flex gap-3  mx-auto max-[800px]:p-2 max-[1000px]:flex-col max-[800px]:w-full max-[1200px]:w-5/6 w-3/4 my-5">
              <div className=" w-full">
                <DataDescriptionRent data={data} />
              </div>
              <div className="max-[1000px]:hidden">
                <DataRange info={data} />
              </div>
              <div className="min-[1000px]:hidden">
                <label
                  htmlFor="my-modal-5"
                  className="btn w-full mb-2 bg-[#A780ff] hover:bg-[#906be7] border-transparent hover:border-transparent text-white"
                >
                  Reservar
                </label>
              </div>
            </div>

            <div className="mx-auto max-[800px]:p-2 max-[800px]:w-full max-[1200px]:w-5/6 w-3/4 mb-5">
              <Map data={data} />
            </div>
            <ModalGalery data={data} />
            <ModalDataRange data={data} />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      )}
    </>
  );
};

export default DescriptionProduct;
