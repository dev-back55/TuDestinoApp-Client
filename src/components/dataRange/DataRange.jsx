import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "./Loading";

//const URL = "https://tudestino.onrender.com/api/payment";
const URL = "https://paimentpaypal-production.up.railway.app/api/payment";
const URLP = "https://tudestinoapp-api-production.up.railway.app/api/products/";

const DataRange = ({ info }) => {
  const [result, setResult] = useState();
  const [dataInput, setDataInput] = useState();
  const [numberDay, setNumberDay] = useState();
  const [noUser, setNoUser] = useState(false);
  const [bookingOk, setBookingOk] = useState(false);
  const [redirect, setRedirect] = useState();
  const [loading, setLoading] = useState(false);
  const [dateAvailable, setdateAvailable] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const users = useSelector((state) => state.user);

  useEffect(() => {
    axios.get(`${URLP}${info._id}`).then((resp) => {
      setdateAvailable(resp.data.unAvailable);
    });
  }, []);

  const calculatePrice = (data) => {
    setDataInput(data);

    const currentDate = new Date().toJSON().slice(0, 10).replaceAll("-", ".");
    const dateInput = new Date(data.init)
      .toJSON()
      .slice(0, 10)
      .replaceAll("-", ".");
    const init = new Date(data.init).getTime();
    const end = new Date(data.end).getTime();

    if (init < end && currentDate <= dateInput) {
      let totalDay = (end - init) / (1000 * 60 * 60 * 24);
      setNumberDay(totalDay);
      setResult(totalDay * info.price);
    } else {
      setResult(0);
    }
  };

  const generatePaypalLink = async () => {
    if (dataInput === undefined) {
      setDataInput(false);
    }

    if (dataInput) {
      const init = new Date(dataInput.init).getTime();
      const end = new Date(dataInput.end).getTime();

      let totalDay = (end - init) / (1000 * 60 * 60 * 24);
      const totalPrice = totalDay * info.price;

      if (init < end && users.username !== "") {
        setLoading(true);
        const respBooking = await axios.post(URL, { totalPrice });

        if (respBooking.data.paypal.status === "CREATED") {
          setRedirect(respBooking.data.paypal?.links[1]?.href);
          setBookingOk(true);
          setNumberDay();
          setResult();
          setLoading(false);
        }
      } else {
        setNoUser(true);
      }
    }
  };

  const saveBooking = async () => {
    const init = new Date(dataInput.init).getTime();
    const end = new Date(dataInput.end).getTime();

    let totalDay = (end - init) / (1000 * 60 * 60 * 24);
    const totalPrice = totalDay * info.price;

    const booking = {
      image: info.image[0],
      dateInit: dataInput.init,
      dateEnd: dataInput.end,
      numberEvening: totalDay,
      total: totalPrice,
      idProduct: info._id,
      idUser: users.id,
      price: info.price,
      username: users.username,
      dateRegister: new Date().toISOString().replace("T", " ").slice(0, 19),
    };

    const respSave = await axios.post(`${URL}/save`, booking);
    const respUpdate = await axios.patch(`${URLP}${info._id}`, {
      unAvailable: [
        ...dateAvailable,
        {
          booking: new Date().getTime(),
          initial: new Date(dataInput.init).toISOString(),
          exit: new Date(dataInput.end).toISOString(),
        },
      ],
    });

    setBookingOk(false);
  };

  const navigateLogin = () => navigate("/login");

  const handleBooking = () => setNoUser(false);

  return (
    <div className="bg-[#ebebeb]  rounded-3xl py-6 w-[24rem] max-[430px]:w-[100%] max-[430px]:mx-auto">
      {noUser === false ? (
        <div className="flex flex-col justify-center">
          <>
            {loading === false ? (
              <>
                {bookingOk === false && (
                  <>
                    <form
                      onSubmit={handleSubmit(calculatePrice)}
                      className="form-control w-full"
                    >
                      <span className="text-lg">
                        Precio por noche:{" "}
                        <span className="text-slate-600">
                          $ {info.price} US
                        </span>
                      </span>
                      {
                        <div className=" flex justify-between w-full my-4 max-[430px]:flex-col max-[430px]:gap-5">
                          <div className="flex flex-col ">
                            <label className="">Fecha de llegada</label>
                            <input
                              className=" input focus:ring-2 bg-[#A780ff] focus:ring-blue-500 focus:outline-none text-white cursor-pointer"
                              type="date"
                              min={
                                dateAvailable !== undefined
                                  ? dateAvailable[
                                      dateAvailable?.length - 1
                                    ]?.exit.slice(0, 10)
                                  : new Date().toISOString().slice(0, 10)
                              }
                              {...register("init", {
                                required: "Debes ingresar una fecha",
                              })}
                            />
                            <p className="text-red-700 text-xs">
                              {errors.init?.message}
                            </p>
                          </div>
                          <div className="flex flex-col">
                            <label className="">Fecha de salida</label>
                            <input
                              className=" input focus:ring-2 bg-[#A780ff] focus:ring-blue-500 focus:outline-none text-white cursor-pointer"
                              type="date"
                              min={
                                dateAvailable !== undefined
                                  ? dateAvailable[
                                      dateAvailable?.length - 1
                                    ]?.exit.slice(0, 10)
                                  : new Date().toISOString().slice(0, 10)
                              }
                              {...register("end", {
                                required: "Debes ingresar una fecha",
                              })}
                            />
                            <p className="text-red-700 text-xs">
                              {errors.end?.message}
                            </p>
                          </div>
                        </div>
                      }
                      <div className="flex flex-col">
                        <div className="flex">
                          <button className="btn w-full bg-[#A780ff] hover:bg-[#906be7] border-transparent hover:border-transparent text-white">
                            Calcular estadia
                          </button>
                        </div>
                        {numberDay !== undefined && (
                          <p className="text-slate-600 mt-4 text-[1.1rem]">
                            Num noches: {numberDay} x Valor noche:{" "}
                            <span>$ {info.price} US</span>
                          </p>
                        )}
                        <span className="my-3 text-violet-500 text-lg font-bold">
                          <span className="text-slate-400"></span>{" "}
                          {result > 0 && <span>Total: $</span>}
                          {result <= 0 ? (
                            <span className="text-red-700 font-light text-xs leading-[0.1rem]">
                              El rango de fecha no es válido debe ser mayor al
                              día actual
                            </span>
                          ) : (
                            <span> {result}</span>
                          )}{" "}
                          {result > 0 && <span>US</span>}
                        </span>
                      </div>
                    </form>
                    {result > 0 && (
                      <button
                        onClick={generatePaypalLink}
                        className="btn w-full mb-2 bg-[#A780ff] hover:bg-[#906be7] border-transparent hover:border-transparent text-white"
                      >
                        confirmar
                      </button>
                    )}
                  </>
                )}
              </>
            ) : (
              <div>
                <Loading />{" "}
              </div>
            )}
          </>
          {dataInput === false && (
            <p className="text-red-700 text-xs ml-2">
              Debes ingresar un rango de fecha valido
            </p>
          )}
          {bookingOk === true && (
            <a
              onClick={saveBooking}
              href={redirect}
              className="btn my-9 hover:bg-green-800 text-white text-center bg-green-500 border-transparent"
            >
              Reserva ahora
            </a>
          )}
        </div>
      ) : (
        <>
          <p className="text-xl mb-7 text-center uppercase">
            debes ingresar para poder reservar
          </p>
          <button
            onClick={navigateLogin}
            className="btn w-full  bg-[#A780ff] hover:bg-[#906be7] border-transparent hover:border-transparent text-white mb-5"
          >
            {" "}
            ingresar ahora
          </button>
          <button
            onClick={handleBooking}
            className="btn w-full  bg-[#A780ff] hover:bg-[#906be7] border-transparent hover:border-transparent text-white"
          >
            {" "}
            ingresar despues
          </button>
        </>
      )}
    </div>
  );
};

export default DataRange;
