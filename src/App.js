import React from "react";
import Header from "./Components/Header/Header"
import Content from "./Components/Content/Content"
import Footer from "./Components/Footer/Footer"
import "./App.css"
import { Route, Routes } from "react-router-dom";
import FragnanceMain from "./Components/MainComp/FragnanceMain";
import ShoesMain from "./Components/MainComp/ShoesMain";
const App = () => {
  return (
    <>
    
      <Header/>
      <Routes>
        <Route path="/" element={<App/>}>
        <Route path="fragnance" element={<FragnanceMain/>}/>
        <Route path="shoes" element={<ShoesMain/>}/>
</Route>
      </Routes>
      <Footer/>
    
    </>
  );
};
export default App;
