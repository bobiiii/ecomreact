import React from 'react'
import Card from './Card'
import { HandbagsData } from './Data'
import "./Content.css"
 const Handbags = () => {
  function cards (item){
    return(
        <Card key={item.id} img={item.img} title={item.title} amount={item.amount}
        />
    )
    }
      return (
        <div className='category'>
          <h3>Handbags</h3>
          <div className='card'>
         {HandbagsData.map(cards)} 
         
         </div> </div>
      )
}
export default Handbags;