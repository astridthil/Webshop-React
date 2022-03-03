import React from 'react'
import {Link} from 'react-router-dom'
import { RiCake2Fill } from "react-icons/ri";
import styled from 'styled-components';
import { motion } from 'framer-motion'

function Nav() {
  return (
    <div className='nav'>
        <div className='nav-links'>
        <p> <Link to='/' style={linkStyle}>home</Link> </p>
        <p> <Link to='/checkout' style={linkStyle}>checkout</Link> </p>
        <p> <Link to='/products' style={linkStyle}>Our cakes <RiCake2Fill /></Link> </p>
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