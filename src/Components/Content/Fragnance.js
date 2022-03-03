import React from 'react'
import { FragnanceData } from './Data'
import {Link} from "react-router-dom"
import Card from './Card'
import "./Content.css"
 const Fragnance = () => {
function cards (item){
return(
    <Card instock={item.inStock} key={item.id} img={item.img} title={item.title} amount={item.amount}
    />
)
}
  return (
    <div className='category'>
      <h3>Fragnance</h3>
      <div className='card'>
     {FragnanceData.map(cards)} 
     </div> 
     <button><Link to="fragnance">Show All</Link></button>
     </div>
     
  )
}
export default Fragnance;