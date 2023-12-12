import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Images/logo.png';
import cart_icon from '../Images/cart_icon.png';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  const [shopActive, setShopActive] = useState(true);
  const [mensActive, setMensActive] = useState(false);
  const [womensActive, setWomensActive] = useState(false);
  const [kidsActive, setKidsActive] = useState(false);
  const {getTotalCartItems} = useContext (ShopContext)

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>DAPPER CART</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={() => { setShopActive(true); setMensActive(false); setWomensActive(false); setKidsActive(false); }}>
          <Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>
          {shopActive ? <hr /> : <></>}
        </li>
        <li onClick={() => { setShopActive(false); setMensActive(true); setWomensActive(false); setKidsActive(false); }}>
          <Link style={{ textDecoration: 'none' }} to='/mens'>Men</Link>
          {mensActive ? <hr /> : <></>}
        </li>
        <li onClick={() => { setShopActive(false); setMensActive(false); setWomensActive(true); setKidsActive(false); }}>
          <Link style={{ textDecoration: 'none' }} to='/womens'>Women</Link>
          {womensActive ? <hr /> : <></>}
        </li>
        <li onClick={() => { setShopActive(false); setMensActive(false); setWomensActive(false); setKidsActive(true); }}>
          <Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link>
          {kidsActive ? <hr /> : <></>}
        </li>
      </ul>
      <div className='nav-login-cart'>
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className='nav-cart-count'>{getTotalCartItems()}</div>
      </div>
    </div>
  );
}

export default Navbar;
