import React from "react";
import "./BasketModal.css";
import CloseIcon from "@mui/icons-material/Close";
import CartCard from "./CartCard";
import { useStateValue } from "./StateProvider";

const BasketModal = ({ onCancelModal, showModal }) => {
  const [{ basket,}, dispatch] = useStateValue();
  const total = basket.length
    ? basket?.reduce(
        (accumulator, currentValue) =>
          accumulator + currentValue.price * currentValue.qty,
        0
      )
    :0;
    const cartnumber =  basket.length? basket?.reduce((acumulator, currentValue)=> acumulator + currentValue.qty,0 ):0 
  return (
    <div className={`basket__modal ${!showModal ? "hide__modal" : ""} `}>
      <div className="empty__modal"></div>
      <div className="modal">
        <div className="inner__modal">
          <span className="cancelModal">
            <CloseIcon onClick={onCancelModal} />
          </span>
          <div className="modal__header">
            <p className="colorD">Total Items In Cart: ( {cartnumber} )</p>
            <p className="colorL">Total Price In Cart: ${total.toFixed(2)}</p>
            <button className="modal__btn">Proceed to Checkout</button>
            <div className="card__container">
              {basket.map((each, index) => (
                <CartCard key={index} obj={each} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketModal;
