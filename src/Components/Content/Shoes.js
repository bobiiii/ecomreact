import React from 'react'
import Card from './Card'
import {ShoesData} from "./Data"
import "./Content.css"
 const Shoes = () => {
  function cards (item){
    return(
        <Card key={item.id} img={item.img} title={item.title} amount={item.amount}
        />
    )
    }
      return (
        <div className='category'>
          <h3>Shoes</h3>
          <div className='card'>
         {ShoesData.map(cards)} 
         
         </div> 
         <button>Show All</button></div>
      )
}
export default Shoes;