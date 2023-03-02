import React from "react";

const ProductContainer = (props) => {
  return (
    <section className="bg-[#EBEBEB] m-8 grid grid-cols-4 max-[1538px]:grid-cols-3 max-[1280px]:grid-cols-2 max-[800px]:grid-cols-1 gap-3">
      {props.children}
    </section>
  );
};

export default ProductContainer;
