import data from "../../utils/dataFundadores.js";

const Linkedin = () => {
  return (
    <div className="col-span-5 w-full h-full">
      <div className="h-full grid xl:grid-cols-3 p-3 lg:grid-cols-2">
        {data.map((item) => (
          <div
            key={item.title}
            className="sm:mx-auto h-72 m-2 bg-[#ebebeb]  hover:bg-[#906be7] hover:text-white rounded-lg transition ease rounded-3xl py-6 w-[24rem] max-[430px]:w-[100%] max-[430px]:mx-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-700 shadow-lg"
          >
            <h2 className="mt-2 text-center">{item.title}</h2>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <img
                src={item.imagen}
                alt={item.url}
                className="rounded-full mx-auto p-4 w-40 h-40"
              ></img>
            </a>
            <p className="text-center">linkedin</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Linkedin;
