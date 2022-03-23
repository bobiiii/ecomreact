import React from 'react'
import {fgfunc2,FragnanceData} from "../Content/Data"
import {useParams} from "react-router-dom"
import "./Product.css"
const Product = () => {
    let param= useParams()
    let number = fgfunc2(parseInt(param.id,10))
    
    return (
        <div className="product-main">
           <div className="product-heading"><h2> {number.title}</h2></div>
           
        <div className="product-img"><img src={number.img}/></div>
        <div className="product-details">
            <h4 className="product-heading">Details</h4>
        <div className="details-justify"><h5> Description</h5> <h5>{number.desc}</h5></div>
        <div className="details-justify"><h5> Price</h5> <h5>{number.amount}</h5></div>
        <div className="details-justify"><h5> Availibility</h5> <h5>{number.inStock}</h5></div>
        
        
        </div>
        </div>    
    )
}

export default Product
