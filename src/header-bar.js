/* eslint no-unused-vars: 0 */
import React, { useState, useContext } from "react";
import AppContext from "./context";

export default () => {
  const context = useContext(AppContext);
  const [searchText, setSearchText] = useState("");

  const onInputChange = (e) => {
    const { value } = e.target;
    setSearchText(value);
    context.actions.filterProductsByName(value);
  };

  return (
    <div className="header-bar">
      <input
        value={searchText}
        onChange={(e) => onInputChange(e)}
        placeholder={"Search Products"}
      />
      <p style={{ textAlign: "right" }}>{context.totalCartPrice}</p>
    </div>
  );
};
