import React from 'react'
import CardMain from "./CardMain"
import "./CardMain.css"
import {FragnanceData}   from "../Content/Data"
import { Link, Outlet } from 'react-router-dom'
 const FragnanceMain = () => {
     function abc(item) {
         return( 
             <Link key="item.number" to={`/fragnance/${item.number}`}>
         <CardMain stock={item.inStock} desc={item.desc} amount={item.amount} title={item.title}
         img={item.img}
         /></Link>
         )
        
    }
    
    return (<>
    <h3 id="main-heading">Fragnance</h3>
    <div className="box">
{FragnanceData.map(abc)}
    </div>
    
    </>)
}
export default FragnanceMain;