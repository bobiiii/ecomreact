import React from "react";
import Header from "./Components/Header/Header"
import Content from "./Components/Content/Content"
import Footer from "./Components/Footer/Footer"
import Product from "./Components/MainComp/Product";
import "./App.css"
import { Route, Routes } from "react-router-dom";
import FragnanceMain from "./Components/MainComp/FragnanceMain";
import ShoesMain from "./Components/MainComp/ShoesMain";
const App = () => {
  return (
    <>
    
      <Header/>
      <Routes>
        <Route path="/" element={<Content/>}/>
        <Route path="fragnance" element={<FragnanceMain/>}>
        </Route>
          <Route path="fragnance/:id" element={<Product/>}/>
        <Route path="shoes" element={<ShoesMain/>}/>

      </Routes>
      <Footer/>
    
    </>
  );
};
export default App;
