import axios from "axios";
import React, { useEffect, useState } from "react";
import hote from "../../assets/hotel.jpg";
import { useSelector } from "react-redux";
import ProductInfoModal from "./ProductInfoModal";

const URL = "https://tudestinoapp-api-production.up.railway.app/api/payment";

const Bookings = () => {
  const [infoBooking, setInfoBooking] = useState();
  const [openModal, setopenModal] = useState(false);
  const [productById, setProductById] = useState();

  const userLocal = JSON.parse(localStorage.getItem("user"));
  const users = useSelector((state) => state.user);

  const handleModal = (idProduct) => {
    setopenModal(!openModal);
    setProductById(idProduct);
  };

  const fetch = () => {
    axios.get(URL).then((resp) => {
      const data = resp.data.filter((user) => user.idUser === users.id);
      setInfoBooking(data);
    });
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <div className="overflow-x-auto w-[80%] container mx-auto mt-2 mb-10 rounded-xl border-2 border-[#b4b4b466] shadow-2xl">
        <table className="table  w-full">
          {/* head */}
          <thead className="bg-[#0a0a0a]">
            <tr className="border-b border-[#aea3a3db] ">
              <th className=" border-1 border-[#cbc7c7db]  bg-[#ebebeb]">
                <label></label>
              </th>
              <th className="bg-[#ebebeb] text-[#394e6a] text-center">Image</th>
              <th className="bg-[#ebebeb] text-[#394e6a] text-center">
                Reserva
              </th>
              <th className="bg-[#ebebeb] text-[#394e6a] text-center">
                Fecha inicio
              </th>
              <th className="bg-[#ebebeb] text-[#394e6a] text-center">
                Fecha Final
              </th>
              <th className="bg-[#ebebeb] text-[#394e6a] text-center">Dias</th>
              <th className="bg-[#ebebeb] text-[#394e6a] text-center">
                Precio
              </th>
              <th className="bg-[#ebebeb] text-[#394e6a] text-center">Total</th>
              <th className="bg-[#ebebeb] text-[#394e6a] text-center">Info</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1  */}

            {infoBooking?.map((booking, index) => (
              <tr key={booking._id}>
                <th className=" border-[#9b9898db] bg-[#ebebeb] text-[#394e6a]">
                  <label className="flex justify-center items-end text-center">
                    {index + 1}
                  </label>
                </th>
                <td className=" border-[#9b9898db] bg-[#ebebeb] text-[#394e6a]">
                  <div className="flex items-center space-x-3 justify-center">
                    <div className="avatar ">
                      <div className="mask mask-squircle w-12 h-12 ">
                        <img
                          src={booking?.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td className=" border-[#9b9898db] bg-[#ebebeb] text-[#394e6a] text-center">
                  {booking.dateRegister
                    .slice(0, 10)
                    .split(/[-/]/)
                    .reverse()
                    .join("-")}
                </td>
                <td className=" border-[#9b9898db] bg-[#ebebeb] text-[#394e6a] text-center">
                  {booking.dateInit.split(/[-/]/).reverse().join("-")}
                </td>
                <td className=" border-[#9b9898db] bg-[#ebebeb] text-[#394e6a] text-center">
                  {booking.dateEnd.split(/[-/]/).reverse().join("-")}
                </td>
                <td className=" border-[#9b9898db] bg-[#ebebeb] text-[#394e6a] text-center">
                  {booking.numberEvening}
                </td>
                <td className=" border-[#9b9898db] bg-[#ebebeb] text-[#394e6a] text-center">
                  {booking.price}
                </td>
                <td className=" border-[#9b9898db] bg-[#ebebeb] text-[#394e6a] text-center">
                  {booking.total}
                </td>
                <td className=" border-[#9b9898db] bg-[#ebebeb] text-[#394e6a] text-center">
                  <button
                    className="btn bg-[#A780ff] hover:bg-[#906be7] border-transparent hover:border-transparent text-white"
                    onClick={() => handleModal(booking.idProduct)}
                  >
                    Ver mas
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {openModal && (
        <ProductInfoModal
          setopenModal={setopenModal}
          openModal={openModal}
          productById={productById}
        />
      )}
    </>
  );
};

export default Bookings;
