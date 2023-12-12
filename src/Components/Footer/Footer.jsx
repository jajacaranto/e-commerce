import React, { useState } from 'react';
import './Footer.css';
import footer_logo from '../Images/logo_big.png';
import instagram_icon from '../Images/instagram_icon.png';
import pintester_icon from '../Images/pintester_icon.png';
import whatsapp_icon from '../Images/whatsapp_icon.png';

const Footer = () => {
  const [company, setCompany] = useState('');
  const [products, setProducts] = useState('');
  const [offices, setOffices] = useState('');
  const [about, setAbout] = useState('');
  const [contact, setContact] = useState('');

  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>DAPPER CART</p>
      </div>
      <ul className="footer-links">
        <li>{company}</li>
        <li>{products}</li>
        <li>{offices}</li>
        <li>{about}</li>
        <li>{contact}</li>
      </ul>
      <div className="footer-socials-icon">
        <div className="footer-icon-container">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icon-container">
          <img src={pintester_icon} alt="" />
        </div>
        <div className="footer-icon-container">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
