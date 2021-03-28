/* eslint no-unused-vars: 0 */
import React from "react";
import productData from "./data";

const Context = React.createContext();

export const AppContextProvider = (props) => {
  const [products, setProducts] = React.useState(productData);
  const [shoppingCart, setShoppingCart] = React.useState([]);
  const [totalCartPrice, setTotalCartPrice] = React.useState(0);

  const filterProductsByName = React.useCallback((name) => {
    let results = productData.filter((x) =>
      x.name.toLowerCase().includes(name.toLowerCase().trim())
    );
    setProducts(results);
  }, []);
  const addProductToCart = React.useCallback(
    (product) => {
      let cartCopy = [...shoppingCart, product];
      setShoppingCart(cartCopy);
    },
    [shoppingCart]
  );
  const removeProductFromCartAtIndex = React.useCallback(
    (index) => {
      let cartCopy = [...shoppingCart];
      cartCopy.splice(index, 1);
      setShoppingCart([...cartCopy]);
    },
    [shoppingCart]
  );

  React.useEffect(() => {
    let totalPrice = 0;
    shoppingCart.forEach((item) => {
      totalPrice = totalPrice + item.pricePerUnit;
    });
    setTotalCartPrice(totalPrice);
  }, [shoppingCart]);

  const providerValue = React.useMemo(
    () => ({
      products,
      shoppingCart,
      totalCartPrice,
      actions: {
        filterProductsByName,
        addProductToCart,
        removeProductFromCartAtIndex
      }
    }),
    [
      products,
      shoppingCart,
      totalCartPrice,
      filterProductsByName,
      addProductToCart,
      removeProductFromCartAtIndex
    ]
  );

  return (
    <Context.Provider value={providerValue}>{props.children}</Context.Provider>
  );
};
export default Context;
