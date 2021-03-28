/* eslint no-unused-vars: 0 */
import React, { useContext } from "react";
import AppContext from "./context";

export default () => {
  const context = useContext(AppContext);
  const cartItems = context.shoppingCart;

  return (
    <div className="shopping-cart">
      {cartItems.map((item, index) => (
        <div key={`${item.name}_${index}`}>
          <h3>{item.name}</h3>
          <button
            onClick={() => context.actions.removeProductFromCartAtIndex(index)}
          >
            Delete
          </button>
          <hr />
        </div>
      ))}
    </div>
  );
};
