import React from 'react'
import "./CardMain.css"

 const CardMain = (props) => {
    return (
    <div className="cardcont">
    <div className="cardmain">
            <img src={props.img}/>
    <div className="cardmain-td"><h3>{props.title}</h3>
    <p>{props.desc}</p></div>
    <div className="cardmain-details"><h5>Price :</h5><h5>{props.amount}</h5></div>
    <div className="cardmain-details"> <h5>InStock :</h5><h5>{props.stock}</h5></div>
    
    </div>
    </div>
        
    )
}
export default CardMain;