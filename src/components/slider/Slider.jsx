import React, { useEffect, useState } from "react";
import slides from "../../utils/imagesCountries";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        currentIndex === slides.length - 1 ? 0 : currentIndex + 1
      );
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <div className="h-[575px]  w-full m-auto  relative group  ">
      <img
        className="w-full h-full object-cover"
        src={slides[currentIndex].url}
        alt="gooto"
      />
      <h1 className="absolute  text-[3rem]  lg:text-8xl bottom-2 flex w-full h-full justify-center items-center text-[#e8e3ede2] uppercase  font-bold">
        {slides[currentIndex].name}
      </h1>

      <div onClick={prevSlide} className="hidden group-hover:block ">
        <div className="w-[50px] h-[50px] absolute flex justify-center items-center cursor-pointer bg-[#f7f4f484]  hover:bg-[#f6efefe8]   left-0    top-1/2 ">
          <i className="fa-solid fa-chevron-left  text-4xl text-slate-500"></i>
        </div>
        <div
          onClick={nextSlide}
          className="w-[50px] h-[50px]  absolute flex justify-center items-center  cursor-pointer bg-[#f7f4f484]  hover:bg-[#f6efefe8]   right-0  top-1/2"
        >
          <i className="fa-solid fa-chevron-right text-slate-500 text-4xl"></i>
        </div>
      </div>
    </div>
  );
};

export default Slider;
