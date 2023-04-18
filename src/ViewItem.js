import React from "react";
import "./ViewItem.css";
import { useStateValue } from "./StateProvider";
import { myData } from "./App";
import { useParams, useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const ViewItem = () => {
  //   const [{ v basket }, dispatch] = useStateValue();
  const { id, title } = useParams();
  const navigate = useNavigate()
  const backTo=()=>{
    navigate(-1)
  }

  const product = myData.find((item) => item.id === +id);
  const viewItem = product;
  return (
    <div className="viewitem">
      <div className="inner__container">
        <div className="image__container">
          <img src={viewItem?.image} alt="image item" />
        </div>
        <div className="info__container">
          <h1>{viewItem?.title}</h1>
          <p> ${viewItem?.price}</p>
          <span onClick={backTo}> <ArrowBackIcon/> Go Back To Products</span>
        </div>
      </div>
    </div>
  );
};

export default ViewItem;
