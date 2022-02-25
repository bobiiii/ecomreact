import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import shoe from "../icons/shoe.ico"
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
            <Link to="#"><i>{shoe}</i>Shoes</Link>
          </li>
          <li>
            <Link to="#">Fragnance</Link>
          </li>
          <li>
            <Link to="#">Watches</Link>
          </li>
          <li>
            <Link to="#">HandBags</Link>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Header;
