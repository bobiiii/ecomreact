import React from 'react'
import {fgfunc2} from "../Content/Data"
import {useParams} from "react-router-dom"
const Product = () => {
    let param= useParams()
    let number = fgfunc2(parseInt(param.id,10))
    console.log(param)
    return (
        <div>
        <h1>i am full page component</h1>
        {param.id}<br/>
        {number.amount}<br/>
        {number.desc}<br/>
        {number.title}<br/>
        </div>    
    )
}

export default Product
