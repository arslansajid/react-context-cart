/* eslint no-unused-vars: 0 */
import React, { useContext } from "react";
import AppContext from "./context";

export default (props) => {
  const context = useContext(AppContext);
  return (
    <div>
      <div
        className="roundel"
        style={{ backgroundColor: props.product.color }}
      />
      <div className="title">{props.product.name}</div>
      <div className="price">
        ${(props.product.pricePerUnit / 100).toFixed(2)}
      </div>
      <button
        style={{ marginBottom: "20px" }}
        onClick={() => {
          context.actions.addProductToCart(props.product);
        }}
      >
        Add To Cart
      </button>
    </div>
  );
};
