import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
// we added className="menuTitle" in the h1 cz its easier to access this in the css
//we imported MenuItem like that cz its not a default page
//we used the map function in div className="menulist" cz we want to grab the array, map through each element, and grab the menu Item and its key
// for each element we will create a div (individually)
