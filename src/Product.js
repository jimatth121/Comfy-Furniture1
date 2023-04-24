import React from "react";
import "./Product.css";
import Button from "./Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PageviewIcon from "@mui/icons-material/Pageview";
import { useStateValue } from "./StateProvider";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Product = ({ title, image, price, id }) => {
  const [basket, dispatch] = useStateValue();
  const [showAlert, setShowAlert] = useState(null);



  useEffect(()=>{
  const matTimeOut =   setTimeout(() => {
      setShowAlert(null)
    }, 1000);

    return () => {
      clearTimeout(matTimeOut);
    };

  },[showAlert])



  const handleAddToCart = () => {

      
    if(!!basket.basket.find(el => el.title === title)){
      setShowAlert(2)
      return
    }

    setShowAlert(1)

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
    // dispatch({
    //   type: "VIEW__ITEM",
    //   payload: {
    //     title,
    //     image,
    //     price,
    //   },
    // });
    navigate(`/viewitem/${id}/${title.replace(/ /g, "-")}`);
  };

  // console.log(title, image, price);
  return (
    <div className="product">
      <div className="image__wrap">
      {showAlert === 1 &&
        <div className="alert__container flex justify-center items-center w-full"> <p className="bg-green-600 px-2 py-1 rounded text-white shadow-sm transition-all">Item add to cart</p></div>
        
      }
      
      {showAlert === 2 &&
        <div className="alert__container flex justify-center items-center w-full"> <p className="bg-red-600 px-2  py-1 rounded text-white shadow-sm transition-all">Item already in cart</p></div>
        
      }

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
            <Button onClick={handleViewItem}>
              View
              <PageviewIcon />
            </Button>
          </span>
          <span className="right__button">
            <Button className="" onClick={handleAddToCart}>
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
