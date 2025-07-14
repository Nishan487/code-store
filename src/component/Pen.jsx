import React, { useState } from 'react';
import penImage from '../assets/pen.png'; // Make sure this is the correct path
import './Pen.css'; // Custom CSS for Pen page

const Pen = () => {
  const [color, setColor] = useState('#0000ff');
  const [customText, setCustomText] = useState('');
  const [textColor, setTextColor] = useState('#000000'); 

  const handleAddToCart = () => {
    const newItem = {
      id: 'pen-' + Date.now(),
      type: 'stationarys',
      name: 'Custom Pen',
      color,
      text: customText,
      textColor,
      image: penImage,
    };

    const existing = JSON.parse(localStorage.getItem('cart')) || [];
    const updated = [...existing, newItem];
    localStorage.setItem('cart', JSON.stringify(updated));

    alert('Pen added to cart!');
    setCustomText('');
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
