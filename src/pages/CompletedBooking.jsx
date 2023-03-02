import React from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../components/dataRange/Loading";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navBar/navBar";

const CompletedBooking = () => {
  const navigate = useNavigate();

  const navigateHome = () => navigate("/profile");

  setTimeout(() => {
    navigateHome();
  }, 3000);

  return (
    <div className="h-screen flex flex-col justify-between">
      <NavBar />
      <div className="w-full my-auto flex flex-col justify-center items-center">
        <Loading />
        <p className="text-2xl">
          Gracias por reservar con{" "}
          <span className="text-[#A780ff]">tuDestino</span>
        </p>
        <p className="text-2xl">Redirigiendo...</p>
      </div>
      <Footer />
    </div>
  );
};

export default CompletedBooking;
