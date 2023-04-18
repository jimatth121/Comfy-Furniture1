import React from "react";
import "./Products.css";
import Product from "./Product";
import TestingSideBar from "./TestingSideBar";
import { useState } from "react";

const Products = ({ myData }) => {
  const [newData, setNewData] = useState(myData);

  // console.log(myData);
  const displayIdkea = () => {
    setNewData(myData.filter((data) => data.category === "ik"));
    console.log("ikea", newData);
    return newData;
  };
  const displayAll = () => {
    setNewData(myData);
    console.log("All", newData);
    return newData;
  };

  const displayMarcos = () => {
    setNewData(myData.filter((data) => data.category === "ma"));
    console.log("marcos", newData);
    return newData;
  };

  const displayLiddy = () => {
    setNewData(myData.filter((data) => data.category === "li"));
    console.log("Liddy", newData);
    return newData;
  };

  const displayCaressa = () => {
    setNewData(myData.filter((data) => data.category === "ca"));
    console.log("Casressa", newData);
    return newData;
  };
  const onInputchange = (val) => {
    console.log("input value pop", val);
    setNewData(myData.filter((data) => data.title.toLowerCase().startsWith(val)));
    return newData;
  };

  return (
    <div className="container">
      <div className="side__bar">
        <TestingSideBar
          onClickIkea={displayIdkea}
          onClickAll={displayAll}
          onClickMarcos={displayMarcos}
          onClickLiddy={displayLiddy}
          onClickCaressa={displayCaressa}
          onInputchange={onInputchange}
        />
      </div>
      <div className="main">
        {newData.map((data, index) => (
          <Product key={index} {...data} />
        ))}
      </div>
    </div>
  );
};

export default Products;
