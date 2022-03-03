import React from "react";
import "./Card.css";
const Card = (props) => {
  return (<>
    <div className="card-box">
      <img src={props.img} />
      <div className="card-box-details">
        <h5>{props.title}</h5>
        <div className="card-box-details-price">
          <h5>PKR:</h5>
          <h5>{props.amount}</h5>
        </div>
          <div className="card-box-stock">
            <h5>In-Stock</h5><h5>{props.instock}</h5> 
            </div></div>
      
    </div>
    
    </>);
};
export default Card;
