import React, { useState } from "react";
import Logo from "../assets/pizzaLogo.png";
// since we are inside the Navbar component we need to get out of the components folder (by using ..) and get into the images folder
//Logo is the var name
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/menu"> Menu </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/menu"> Menu </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
// our Navbar is on the whole screen but  is divided into 2 parts:
// left side: logo
// right side: all the links to the different pages
// both sides will be created using div
// class --> className

// link is a component similar to an a tag where u can click on it and it will take u to a link
// to create the link we put in between the text that represents that link
// we also put the to property which u just pass the path u want to go to whenever u click on this link

// to see the changes applied while using the navbar.css we should import Navbar.css here (in navbar.js), we should put the path to that css component

//in NavBar.css, we added the media querries at the end so that when we rectify the size of the page, it doesnt fit
// we make it in a way that when it reaches a certain screen size the logo will disappear

//we used the material icons, installed it, then copied the import ... for each icon
// we will then put the reorder icon component in a button bcz whenever we want to click on it we want it to change the route

//div className="hiddenLinks" bcz initially it wont be shown

// we will also use states which is a true or false variable : if it's true we want to show the links and not show the logo; if not we dont want them to be shown and show the logo
// to use the hook we should create a const and we set it to useState
// initially it will be false
// we will create a function setOpenLinks

// we will add an ID to the leftSide so that we can add styles depending on the ID, depending on whether we clicked on it or not
// if its clicked the id will be open if not it will be close its represented by : {openLinks ? "open" : "close"}
// the function toggleNavbar is called whenever we click on the button
// in const toggleNavbar we will create the setOpenLinks a function that will give the opposite situation (true & false)
// however we dont want it to always take the value false or True so we will use .openLinks that will give the opposit value of openLinks
