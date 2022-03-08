import React from 'react'
import {Link} from 'react-router-dom'
import { RiCake2Fill } from "react-icons/ri";
import { TiShoppingCart } from "react-icons/ti";

function Nav() {
  return (
    <div className='nav'>
        <div className='nav-links'>
        <p> <Link to='/products' style={linkStyle}>Our cakes <RiCake2Fill /></Link> </p>
        <p> <Link to='/checkout' style={linkStyle}>Checkout <TiShoppingCart /></Link> </p>
        </div>
    </div>
  )
}

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: '#393939'
};

export default Nav