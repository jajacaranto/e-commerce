import React, { useReducer } from 'react';
import './Hero.css';
import hand_icon from '../Images/hand_icon.png';
import arrow_icon from '../Images/arrow.png';
import hero_image from '../Images/hero_image.png';

//** */
const actionTypes = {
  UPDATE_COLLECTION: 'UPDATE_COLLECTION',
};


const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_COLLECTION:
      return { ...state, collection: action.payload };
    default:
      return state;
  }
};

const Hero = () => {
  
  const initialState = {
    collection: 'new',
  };

  
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>{state.collection}</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>collection</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn" onClick={() => dispatch({ type: actionTypes.UPDATE_COLLECTION, payload: 'latest' })}>
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
