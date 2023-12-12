import React, { useState, useEffect } from 'react';
import './Breadcrum.css';
import arrow_icon from '../Images/breadcrum_arrow.png';

const Breadcrum = (props) => {
  const { product } = props;
  const [breadcrumItems, setBreadcrumItems] = useState([]);

  useEffect(() => {
    
    if (product) {
      setBreadcrumItems(['HOME', 'SHOP', product.category, product.name]);
    }
  }, [product]);

  return (
    <div className='breadcrum'>
      {breadcrumItems.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <img src={arrow_icon} alt="" />}
          {item}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrum;
