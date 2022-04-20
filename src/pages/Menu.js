import React from 'react';
import { MenuList } from "../helpers/Menulist";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";
import { Link } from 'react-router-dom';

function Menu() {
	return (
	  <div className="menu">
		<h1 className="menuTitle">Категории товаров</h1>
		<Link to="/Menu1">
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
		</Link>
	  </div>
	);
  }

export default Menu;