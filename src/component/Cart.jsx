
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
    <div className="cart-wrapper">
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
          <div key={item.id} className="id-card">
            {item.type === "idcard" ? (
              <>
                <h3>🎓 ID CARD</h3>
                <p className="university">CodeStore University</p>
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
                <p className="validity">Valid until: 12/2026</p>
              </>
            ) : (
              <>
                {item.type === "uniform" && (
  <>
    <h3>👕 Uniform</h3>
    <ShirtPreview
      color={item.shirtColor}
      frontText={item.shirtFrontText}
      backText={item.shirtBackText}
      textColor={item.shirtTextColor}
    />
           <PantPreview color={item.pantColor} />
  </>
)}
              </>
            )}

            <button className="remove-button" onClick={() => handleRemove(item.id)}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;