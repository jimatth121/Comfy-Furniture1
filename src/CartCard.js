import React from "react";
import "./CartCard.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useStateValue } from "./StateProvider";

const CartCard = ({ obj }) => {
  const [{ basket }, dispatch] = useStateValue();

  // console.log("obj ------", obj);
  const handleIncreaseQty = () => {
    dispatch({ type: "INCREMENT__QUANTITY", payload: { title: obj.title } });
  };
  const handleDecreaseQty = () => {
    dispatch({ type: "DECREMENT__QUANTITY", payload: { title: obj.title } });
  };

  const handleDelete = ()=>{
    dispatch({type:'DELETE__ITEM', payload:{title:obj.title}})
  }

  return (
    <div className="cartcard">
      <div className="split">
        <span className="image__con">
          <img src={obj.image} />
        </span>
        <span className="text__con">
          <span className="title">{obj.title}</span>
          <span className="price">${obj.price}</span>
        </span>
      </div>
      <div className="smallbtns">
        <button onClick={handleDecreaseQty}>
          <RemoveIcon />
        </button>
        <span>{obj.qty}</span>
        <button onClick={handleIncreaseQty}>
          <AddIcon />
        </button>
      </div>
      <div className="bigbtns">
        <button onClick={handleDelete}>Delete</button>
        <button>Save for Later</button>
      </div>
      {/* <hr/> */}
    </div>
  );
};

export default CartCard;
