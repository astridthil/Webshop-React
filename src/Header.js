import React from 'react'
import Nav from './Nav'
import Cart from './Cart'

function Header() {
  return (
    <div>
        <h1 className='logo'>CakeShop</h1>
        <Cart />
        <Nav />
    </div>
  )
}

export default Header