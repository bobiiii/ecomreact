import React from 'react'
import Fragnance from './Fragnance'
import Handbags from './Handbags'
import Shoes from './Shoes'
import Watches from './Watches'

import "./Content.css"
 const Content = () => {
  return (
    <div className='content'>
      <Fragnance/>
      <Shoes/>
       <Watches/>
      <Handbags/>
      {/*<Handbags/>
      <Handbags/>
      <Handbags/>
      <Handbags/>
      <Handbags/> */}
      
      
      
      </div>
  )
}
export default Content;