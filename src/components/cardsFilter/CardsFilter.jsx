import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';


const CardsFilter = ({setOtherFilters, setHandleModal, handleModal, clear}) => {
  const { register, handleSubmit, reset } = useForm();
  const [prueba, setPrueba] = useState({});

  const modalVisibility = () => {
    setHandleModal(!handleModal)
  }

  useEffect(() => {
    reset({
      price: 50,
      numPeople: 1,
      numBathrooms: 1,
      numBedrooms: 1,
    })
  }, [clear]);


  const change = (e) => {
    setPrueba({...prueba, [e.target.name]:e.target.value})
  }

  const submit = (data) => {
    setOtherFilters(data)
    setHandleModal(!handleModal)
  }

  return (
    <form onSubmit={handleSubmit(submit)} >
      <div className="">
        <div className="modal-box relative bg-[#ebebeb] z-50 ">
          <label className="btn btn-sm btn-circle absolute right-2 top-2 " onClick={modalVisibility}>✕</label>
          <div className='my-4'>
            <label>Precio</label>
            <input type="range" min={50} max={160} className="range range-xs" {...register("price")} onChange={change} name="price"/>
            <p>{prueba.price}</p>
          </div>
          <div className='my-4'>
            <label>Cantidad de personas</label>
            <input type="range" min={1} max={7} className="range range-xs" {...register("numPeople")} onChange={change} name="numPeople"/>
            <p>{prueba.numPeople}</p>
          </div>
          <div className='my-4'>
            <label>Numero de habitaciones</label>
            <input type="range" min={1} max={6} className="range range-xs" {...register("numBedrooms")} onChange={change} name="numBedrooms"/>
            <p>{prueba.numBedrooms}</p>
          </div>
          <div className='my-4'>
            <label>Numero de baños</label>
            <input type="range" min={1} max={6} className="range range-xs" {...register("numBathrooms")} onChange={change} name="numBathrooms"/>
            <p>{prueba.numBathrooms}</p>
          </div>
        <button className='btn w-full my-4 bg-[#A780ff] hover:bg-[#906be7] border-transparent hover:border-transparent text-white'>Filtrar</button>
        </div>
      </div>
    </form>

  );
}

export default CardsFilter;
