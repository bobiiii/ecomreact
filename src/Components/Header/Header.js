import React, { useEffect, useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import shoes from "../icons/shoes.png"
import watch from "../icons/watch.png"
import handbag from "../icons/handbag.png"
import fragnance from "../icons/fragnance.png"
import "./Header.css";
const Header = () => {
  const ref = useRef();
  const ref2 = useRef();

  const [menuOpen, setMenuOpen] = useState(false);
  console.log(menuOpen);

  const toggle = () => {
    const x = document.getElementById("menulist");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };

  useEffect(() => {
    const checkClick = (e) => {
      if (!ref.current.contains(e.target)) {
        document.getElementById("menulist").style.display = "none";
      }
    };
    document.addEventListener("mousedown", checkClick);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkClick);
    };
  }, [document.getElementById("menulist")]);

  // const toggle =()=>{
  //   setMenuOpen(prevmenuOpen => !prevmenuOpen)
  // };

  // const menulist = (

  // );
  return (
    <>
      <div className="header">
        <h3>SiteName</h3>
        <button aref={ref2} className="button" onClick={toggle}>
          ☰
        </button>
      </div>
      <div id="menulist" className="menulist">
        <ul ref={ref}>
          <li>
            <Link to="shoes"><img alt="image"  src={shoes}/>Shoes</Link>
          </li>
          <li>
            <Link to="fragnance"><img alt="image" src={fragnance}/>Fragnance</Link>
          </li>
          <li>
            <Link to="watches"><img alt="image" src={watch}/>Watches</Link>
          </li>
          <li>
            <Link to="handbags"><img alt="image" src={handbag}/>HandBags</Link>
          </li>
        </ul>
        
      </div>
    </>
  );
};
export default Header;
