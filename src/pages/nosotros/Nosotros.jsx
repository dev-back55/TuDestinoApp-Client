import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navBar/navBar";
import Linkedin from "./Linkedin";
import { useState } from "react";
import Github from "./Github";

const Nosotros = () => {
  const [active, setActive] = useState(true);
  const [buttonActive, setButtonActive] = useState(false);

  const linkedin = () => {
    setActive(true);
    // setButtonActive(false)
  };

  const github = () => {
    setActive(false);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between ">
      <div className="fixed mt-0 py-3 w-full flex justify-center bg-[#ebebeb] z-50">
        <div className=" container ">
          <NavBar />
        </div>
      </div>

      <section className="container min-h-screen mx-auto grid xl:grid-cols-6 mt-24 sm:grid-cols-1  mb-10">
        <div className="col-span-1 w-full h-full mt-0">
          <div className="mt-6 m-2 sm:mx-auto">
            <div
              onClick={linkedin}
              className={
                active === true
                  ? "bg-[#906be7] w-[13.5rem] rounded-lg "
                  : "w-[13.5rem]"
              }
            >
              <h2 className="py-3 uppercase font-bold tracking-[4px] text-center w-full mb-2 hover:bg-[#906be7] hover:text-white rounded-lg transition ease-in-out delay-150 duration-700">
                <i className="fa-brands fa-linkedin mx-2"></i>
                Linkedin
              </h2>
            </div>
          </div>
          <div className="mt-6 m-2 sm:mx-auto">
            <div
              onClick={github}
              className={
                active === false
                  ? "bg-[#906be7] w-[13.5rem] rounded-lg "
                  : "w-[13.5rem]"
              }
            >
              <h2 className=" py-3 uppercase font-bold tracking-[4px] text-center w-full mb-2 hover:bg-[#906be7] hover:text-white rounded-lg transition ease-in-out delay-150 duration-700">
                <i className="fa-brands fa-github mx-2"></i>
                GitHub
              </h2>
            </div>
          </div>
        </div>
        <div className="col-span-5 w-full h-full mt-8">
          {active === true ? <Linkedin /> : <Github />}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Nosotros;
