import React, { useState } from 'react';
import penImage from '../assets/pen.png'; // Make sure this is the correct path
import './Pen.css'; // Custom CSS for Pen page
import axios from 'axios';
const Pen = () => {
  const [color, setColor] = useState('#0000ff');
  const [customText, setCustomText] = useState('');
  const [textColor, setTextColor] = useState('#000000'); 


const handleAddToCart = async () => {
  try {
    await axios.post('http://localhost:5000/api/cart', {
      itemName: 'Custom Pen',
      itemType: 'stationarys',
      itemDetails: {
        color,
        text: customText,
        textColor,
       penImage, // Make sure this is a URL or string your backend can store
      },
    });

    alert('Pen added to cart!');
    setCustomText('');
  } catch (error) {
    console.error('Failed to add pen to cart:', error);
    alert('Failed to add pen to cart. Please try again.');
  }
};

  return (
    <div className="pen-div">
      <div className="pen-container">
        <h1>Customize Your Pen</h1>

        <label className="pen-color-picker-label">
          Choose Pen Color:
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="pen-color-picker-input"
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

        <label className="pen-custom-text-label">
          Write Text on Pen:
          <input
            type="text"
            value={customText}
            onChange={(e) => setCustomText(e.target.value)}
            placeholder="Your name"
            maxLength={5}
            className="pen-custom-text-input"
          />
        </label>

        <div className="pen-wrapper">
          <svg className="pen-svg" viewBox="0 0 100 200" preserveAspectRatio="xMidYMid slice">
            <defs>
              <filter id="penColorize">
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

              <path
                id="pen-text-curve"
                d="M 20,170 Q 50,20 80,170"
                fill="transparent"
              />
            </defs>

            <image
              href={penImage}
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid meet"
              filter="url(#penColorize)"
            />

            <text fontSize="5" fill={textColor}>
              <textPath href="#pen-text-curve" startOffset="50%" textAnchor="middle">
                {customText}
              </textPath>
            </text>
          </svg>
        </div>

        <button className="pen-add-to-cart-btn" onClick={handleAddToCart}>
          Add Pen to Cart
        </button>
      </div>
    </div>
  );
};

export default Pen;
