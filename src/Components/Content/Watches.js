import React from 'react'
import { WatchesData } from './Data'
import Card from './Card'
import "./Content.css"
 const Watches = () => {
  function cards (item){
    return(
        <Card key={item.id} img={item.img} title={item.title} amount={item.amount}
        />
    )
    }
      return (
        <div className='category'>
          <h3>Watches</h3>
          <div className='card'>
         {WatchesData.map(cards)} 
         
         </div> </div>
      )}
export default Watches;