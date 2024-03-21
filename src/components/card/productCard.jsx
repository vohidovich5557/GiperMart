import React from "react";


export const ProductCard = ({ img, title, price, id }) => {
  return (
    <div className="flex flex-col  items-center">
      <div>
        <img src={img} alt="img" />
      </div>
      <div>
        <h2>{title}</h2>
        <strong>{price}</strong>
      </div>
    </div>
  );
};