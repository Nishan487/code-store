import React, { useState } from 'react';
import bookImage from '../assets/book.png'; // Make sure the path is correct
import './Stationary.css';
import Pen from './Pen';

const Stationary = () => {
  const [color, setColor] = useState('#060606ff');
  const [customText, setCustomText] = useState('');
const [textColor, setTextColor] = useState('#0d0d0dff'); 
  const handleAddToCart = () => {
    const newItem = {
      id: 'stationary-' + Date.now(),
      type: 'stationary',
      name: 'Colored Book',
      color,
      text: customText,
      textColor,
      image: bookImage,
    };

    const existing = JSON.parse(localStorage.getItem('cart')) || [];
    const updated = [...existing, newItem];
    localStorage.setItem('cart', JSON.stringify(updated));

    alert('Book added to cart!');
    setCustomText(''); // clear the text after adding
  };

  return (
    
    <div className="div">
    <div className="stationary-container">
      <h1>Customize Your Book</h1>

      <label className="color-picker-label">
        Choose Book Color:
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="color-picker-input"
        />
      </label>
       <label className="color-picker-label">
          Choose Text Color:
          <input
            type="color"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
            className="color-picker-input"
          />
        </label>
      <label className="custom-text-label">
        Write Text on Book:
        <input
          type="text"
          value={customText}
          onChange={(e) => setCustomText(e.target.value)}
          placeholder="Type here"
          maxLength={10}
          className="custom-text-input"
        />
        {/* <h7>*put 11 letter only</h7> */}
      </label>


      <div className="book-wrapper">
  <svg className="book-svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
    <defs>
      <filter id="colorize">
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1
                  0 0 0 0 1
                  0 0 0 0 1
                  0 0 0 1 0"
          result="white"
        />
        <feFlood floodColor={color} result="flood" />
        <feComposite in="flood" in2="white" operator="in" result="colored" />
        <feBlend in="SourceGraphic" in2="colored" mode="multiply" />
      </filter>

      {/* Curved path for text */}
      <path
        id="text-curve"
        d="M 10,80 A 40,40 0 0,1 90,80"
        fill="transparent"
      />
    </defs>

    {/* Book image */}
    <image
      href={bookImage}
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
      filter="url(#colorize)"
    />

    {/* Curved text on book */}
    <text fontSize="5" fill={textColor}>
      <textPath href="#text-curve" startOffset="50%" textAnchor="middle">
        {customText}
      </textPath>
    </text>
  </svg>
</div>


      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
          <Pen className='pen'/>
    </div>
    
    
  );
};

export default Stationary;
