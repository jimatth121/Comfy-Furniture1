import React from "react";
import "./Product.css";
import Button from "./Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PageviewIcon from "@mui/icons-material/Pageview";
import { useStateValue } from "./StateProvider";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Product = ({ title, image, price, id }) => {
  const [basket, dispatch] = useStateValue();
  const [showAlert, setShowAlert] = useState(false);

  const handleAddToCart = () => {
      setShowAlert(true)
    const isadded = false;
    if(!isadded){

    }else{

    }
    // console.log("marwefbwufwbeuf");
    dispatch({
      type: "ADD_TO_BASKET",
      payload: {
        title,
        image,
        price,
        qty: 1,
      },
    });
  };
  const navigate = useNavigate();
  const handleViewItem = () => {
    console.log("working");
    dispatch({
      type: "VIEW__ITEM",
      payload: {
        title,
        image,
        price,
      },
    });
    navigate(`/viewitem/${id}/${title.replace(/ /g, "-")}`);
  };

  // console.log(title, image, price);
  return (
    <div className="product">
      <div className="image__wrap">
        <div className="alert__container">{showAlert? <p>item add to cart</p>: '' }</div>
        <img src={image} />
        <div className="button__container1">
          <div className="inner__wrap">
            <span className="left__button">
              {/* <Link to='/viewitem'> */}
              <Button onClick={handleViewItem}>
                View
                <PageviewIcon />
              </Button>
              {/* </Link> */}
            </span>
            <span className="right__button">
              <Button onClick={handleAddToCart}>
                Add
                <ShoppingCartIcon />
              </Button>
            </span>
          </div>
        </div>
      </div>
      <div className="product__info">
        <div className="button__container">
          <span className="left__button">
            <Button>
              View
              <PageviewIcon />
            </Button>
          </span>
          <span className="right__button">
            <Button onClick={handleAddToCart}>
              Add
              <ShoppingCartIcon />
            </Button>
          </span>
        </div>
        <h3>{title}</h3>
        <h2>${price}</h2>
      </div>
    </div>
  );
};

export default Product;
