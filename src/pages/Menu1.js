import React from 'react';
import { MenuList } from "../helpers/Menulist1";
import  MenuItem  from "../components/MenuItem";
import "../styles/Menu.css";
import { Link } from 'react-router-dom';

function Menu1() {
	return (
	  <div className="menu">
		<h1 className="menuTitle">Список товаров</h1>
		<Link to="/About1">
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

export default Menu1;