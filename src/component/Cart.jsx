
import React, { useEffect, useState } from "react";
import "./Cart.css";
import ShirtPreview from "./ShirtPreview";
import PantPreview from "./PantPreview";
function Cart() {
  const [cartItems, setCartItems] = useState([]);
  
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(saved);
  }, []);

  const handleRemove = (id) => {
    const updated = cartItems.filter((item) => item.id !== id);
    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const handleClearCart = () => {
    if (window.confirm("Are you sure you want to clear the cart?")) {
      setCartItems([]);
      localStorage.removeItem("cart");
    }
  };

  return (
    <div className="div" >
    <div className="cart-wrapper" >
      <h2>🛒 Cart</h2>

      {cartItems.length > 0 && (
        <button className="clear-button" onClick={handleClearCart}>
          Clear Cart 🗑️
        </button>
      )}

      {cartItems.length === 0 ? (
        <p>No items in cart yet.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="id-card" style={{
            background:item.backgroundColor
          }}>
            {item.type === "idcard" ? (
              <>
                <h3>🎓 ID CARD</h3>
                <p className="university">{item.collageName}</p>
                <div className="photo">
                  {item.photo ? (
                    <img src={item.photo} alt="Uploaded" />
                  ) : (
                    <div className="photo-placeholder">Photo</div>
                  )}
                </div>
                
                <p><strong>Name:</strong> {item.name}</p>
                <p><strong>Student ID:</strong> {item.studentId}</p>
                <p><strong>Course:</strong> {item.course}</p>
                <p><strong>Parent Name:</strong> {item.parentName}</p>
               <p><strong>ContactInfo:</strong> {item.contactinfo}</p>
               {/* <p><strong>Course:</strong> {item.course}</p> */}
                <p className="validity">Valid until: 12/2026</p>
              </>
            ) : (
              <>
              <div style={{background:"#6953da"}}>
                {item.type === "uniform" && (
  <div>
    <h3>👕 Uniform</h3>
    <ShirtPreview
      color={item.shirtColor}
      frontText={item.shirtFrontText}
      backText={item.shirtBackText}
      textColor={item.shirtTextColor}
    />
           <PantPreview color={item.pantColor} />
  </div>
)}
</div>
<div style={{background:"#6953da"}}>
{item.type === 'stationary' && (
              <>
                <h3>📚 Stationary - Colored Book</h3>
                <div style={{ position: 'relative', width: 350,height: 280, marginBottom: '20px' }}>
  <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
    <defs>
      <filter id={`colorize-${item.id}`}>
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1
                  0 0 0 0 1
                  0 0 0 0 1
                  0 0 0 1 0"
          result="white"
        />
        <feFlood floodColor={item.color} result="flood" />
        <feComposite in="flood" in2="white" operator="in" result="colored" />
        <feBlend in="SourceGraphic" in2="colored" mode="multiply" />
      </filter>

      {/* curved path for text */}
      <path id={`curve-${item.id}`} d="M 10,80 A 40,40 0 0,1 90,80" fill="transparent" />
    </defs>

    <image
      href={item.image}
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
      filter={`url(#colorize-${item.id})`}
    />

    {/* curved text */}
    <text fontSize="6" fill={item.textColor}>
      <textPath href={`#curve-${item.id}`} startOffset="50%" textAnchor="middle">
        {item.text}
      </textPath>
    </text>
  </svg>
</div>
              </>
            )}
            {item.type === 'stationarys' && (
              <>
                <h3>📚 Stationary - Colored Book</h3>
                <div style={{ position: 'relative', width: 360, height: 290, marginBottom: '20px' }}>
  <svg viewBox="0 0 115 100" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
    <defs>
      <filter id={`colorize-${item.id}`}>
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1
                  0 0 0 0 1
                  0 0 0 0 1
                  0 0 0 1 0"
          result="white"
        />
        <feFlood floodColor={item.color} result="flood" />
        <feComposite in="flood" in2="white" operator="in" result="colored" />
        <feBlend in="SourceGraphic" in2="colored" mode="multiply" />
      </filter>

      {/* curved path for text */}
      <path id={`curve-${item.id}`} d="M 12.5,80 A 46,40 0 0,1 102,80" fill="transparent" />
    </defs>

    <image
      href={item.image}
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
      filter={`url(#colorize-${item.id})`}
    />

    {/* curved text */}
    <text fontSize="3" fill={item.textColor}>
      <textPath href={`#curve-${item.id}`} startOffset="50%" textAnchor="middle">
        {item.text}
      </textPath>
    </text>
  </svg>
</div>

              </>
            )}
            </div>
          
              </>
            )}

            <button className="remove-button" onClick={() => handleRemove(item.id)} >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
    </div>
  );
}

export default Cart;




