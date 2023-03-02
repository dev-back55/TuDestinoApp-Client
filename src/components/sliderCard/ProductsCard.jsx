import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./products.module.css";

const ProductsCard = ({ image, data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? image.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === image.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (x) => {
    setCurrentIndex(x);
  };

  const navigateDescription = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <aside className=" bg-transparent w-full min-[1270px]:w-[343px] group m-2 rounded-xl hover:scale-105 duration-300 cursor-pointer hover:shadow-2xl justify-items-center">
      <div className="relative w-full h-[250px]">
        <img
          onClick={() => navigateDescription(data._id)}
          className="w-full h-full  object-cover rounded-xl"
          src={image[currentIndex]}
          alt="image product"
        />
        <div className=" hidden group-hover:block ">
          <div
            onClick={prevSlide}
            className="w-[2rem] h-[2rem] absolute flex justify-center items-center cursor-pointer bg-white rounded-[50%] left-1    top-1/2 "
          >
            {" "}
            <i className="fa-solid fa-chevron-left  text-slate-800"></i>
          </div>
          <div
            onClick={nextSlide}
            className="w-[2rem] h-[2rem]  absolute flex justify-center items-center  cursor-pointer bg-white rounded-[50%]  hover:rounded-[50%] right-1   top-1/2"
          >
            <i className="fa-solid fa-chevron-right text-slate-800 "></i>
          </div>
        </div>
        <div className="absolute  bottom-0 flex  w-full  justify-center m-1">
          {image.map((imag, imagIndex) => (
            <div
              key={imagIndex}
              onClick={() => goToSlide(imagIndex)}
              className={`${
                imagIndex === currentIndex
                  ? `${styles.dot} ${styles.activedot}`
                  : `${styles.dot}`
              }`}
            >
              <span className="w-1 h-1 cursor-pointer "></span>
            </div>
          ))}
        </div>
      </div>
      <div className="p-1 flex flex-col">
        <div className="flex items-start justify-between py-1">
          <span className="text-[1rem] text-[#0a0a0a]  font-bold">
            {data.title}
          </span>
          <div className="w-[10rem] text-[.9rem] font-medium text-[#0a0a0a] p-1 text-end">
            {data.city}, {data.country}
          </div>
        </div>
        <span className="text-[#9c9898] font-normal text-[1rem]  px-1 ">
          {data.address}
        </span>
        <span className="text-right text-[#0a0a0a] font-bold text-[.9rem]  p-1">
          ${data.price} US{" "}
          <span className="text-slate-700 font-light">noche</span>
        </span>
      </div>
    </aside>
  );
};

export default ProductsCard;
