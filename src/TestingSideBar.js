import React from "react";
import "./SideBar.css";
import { useState } from "react";

const TestingSideBar = ({
  onClickIkea,
  onClickAll,
  onClickCaressa,
  onClickMarcos,
  onClickLiddy,
  onInputchange,
}) => {
  const [itemInput, setItemInput] = useState("");
  const handleInputChange = (e) => {
    setItemInput(e.target.value);
    // console.log(itemInput);
    onInputchange(e.target.value);
  };

  return (
    <div className="sidebar">
      <div className="sidebar__search">
        <input
          type="text"
          value={itemInput}
          onChange={handleInputChange}
          placeholder="Search"
        />
      </div>
      <div class="sidebar__btn__wrapper">
        <p className="btnheader">Companies</p>
        <div className="sidebar__btn">
          <button onClick={onClickAll}>All</button>

          <button onClick={onClickIkea}>Ikea</button>

          <button onClick={onClickMarcos}>Marcos</button>

          <button onClick={onClickCaressa}>Caressa</button>

          <button onClick={onClickLiddy}>Liddy</button>
        </div>
      </div>
      <div className="price__range">
        <span className="rangetitle">Price range</span>
        <input className="rangeinput" type="range" min={0} max={100} />
        <p>
          Value:$<span className="rangevalue"></span>100
        </p>
      </div>
    </div>
  );
};

export default TestingSideBar;
