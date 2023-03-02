import images from "../../utils/descriptionImages";

const GaleryProduct = ({ data }) => {
  return (
    <>
      {data !== undefined && (
        <div className="grid grid-cols-4 grid-rows-2 grid-flow-col gap-2">
          <div className="row-span-2 col-span-2">
            <label htmlFor="my-modal-3">
              <img
                className="max-[800px]:rounded-none rounded-tl-3xl rounded-bl-3xl h-[28.5rem] w-full object-cover cursor-pointer"
                src={data.image[0]}
                alt="image"
              />
            </label>
          </div>
          <div>
            <label htmlFor="my-modal-3">
              {data.image.length > 1 ? (
                <img
                  className="h-[14rem] w-full object-cover cursor-pointer"
                  src={data.image[1]}
                  alt="image"
                />
              ) : (
                <img
                  className="h-[14rem] w-full object-cover cursor-pointer"
                  src={images[0]}
                  alt="image"
                />
              )}
            </label>
          </div>
          <div>
            <label htmlFor="my-modal-3">
              {data.image.length > 1 ? (
                <img
                  className="h-[14rem] w-full object-cover cursor-pointer"
                  src={data.image[2]}
                  alt="image"
                />
              ) : (
                <img
                  className="h-[14rem] w-full object-cover cursor-pointer"
                  src={images[1]}
                  alt="image"
                />
              )}
            </label>
          </div>
          <div>
            <label htmlFor="my-modal-3">
              {data.image.length > 1 ? (
                <img
                  className="max-[800px]:rounded-none rounded-tr-3xl h-[14rem] w-full object-cover cursor-pointer"
                  src={data.image[3]}
                  alt="image"
                />
              ) : (
                <img
                  className="max-[800px]:rounded-none rounded-tr-3xl h-[14rem] w-full object-cover cursor-pointer"
                  src={images[2]}
                  alt="image"
                />
              )}
            </label>
          </div>
          <div>
            <label htmlFor="my-modal-3">
              {data.image.length > 1 ? (
                <img
                  className="max-[800px]:rounded-none rounded-br-3xl h-[14rem] w-full object-cover cursor-pointer"
                  src={data.image[4]}
                  alt="image"
                />
              ) : (
                <img
                  className="max-[800px]:rounded-none rounded-br-3xl h-[14rem] w-full object-cover cursor-pointer"
                  src={images[3]}
                  alt="image"
                />
              )}
            </label>
          </div>
        </div>
      )}
    </>
  );
};

export default GaleryProduct;
