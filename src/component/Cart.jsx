import React, { useEffect, useState } from "react";
import "./Cart.css";
import ShirtPreview from "./ShirtPreview";
import PantPreview from "./PantPreview";
import axios from "axios";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleRemove = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/cart/${id}`);
      setCartItems((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Failed to remove item:", error);
      alert("Failed to remove item. Please try again.");
    }
  };

  const handleClearCart = async () => {
    if (window.confirm("Are you sure you want to clear the cart?")) {
      try {
        await Promise.all(
          cartItems.map((item) =>
            axios.delete(`http://localhost:5000/api/cart/${item.id}`)
          )
        );
        setCartItems([]);
      } catch (error) {
        console.error("Failed to clear cart:", error);
        alert("Failed to clear cart. Please try again.");
      }
    }
  };

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/cart");
        const parsed = res.data.map((item) => ({
          ...item,
          itemDetails:
            typeof item.itemDetails === "string"
              ? JSON.parse(item.itemDetails)
              : item.itemDetails,
        }));
        setCartItems(parsed);
      } catch (error) {
        console.error("Failed to fetch cart items:", error);
        alert("Could not load cart items.");
      } finally {
        setLoading(false);
      }
    };
    fetchCart();
  }, []);

  return (
    <div className="div">
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
          cartItems.map((item) => {
            const details = item.itemDetails || {};
            return (
              <div
                key={item.id}
                className="id-card"
                style={{
                  background: details.backgroundColor,
                }}
              >
                {item.itemType === "idcard" ? (
                  <>
                    <h3>🎓 ID CARD</h3>
                    <p className="university">{details.collageName}</p>
                    <div className="photo">
                      {details.photo ? (
                        <img src={details.photo} alt="Uploaded" />
                      ) : (
                        <div className="photo-placeholder">Photo</div>
                      )}
                    </div>
                    <p>
                      <strong>Name:</strong> {details.name}
                    </p>
                    <p>
                      <strong>Student ID:</strong> {details.studentId}
                    </p>
                    <p>
                      <strong>Parent Name:</strong> {details.parentName}
                    </p>
                    <p>
                      <strong>ContactInfo:</strong> {details.contactinfo}
                    </p>
                    <p className="validity">Valid until: 12/2026</p>
                  </>
                ) : item.itemType === "uniform" ? (
                  <div style={{ background: "#6953da" }}>
                    <h3>👕 Uniform</h3>
                    <ShirtPreview
                      color={details.shirtColor}
                      frontText={details.shirtFrontText}
                      backText={details.shirtBackText}
                      textColor={details.shirtTextColor}
                    />
                    <PantPreview color={details.pantColor} />
                  </div>
                ) : item.itemType === "stationary" ? (
                  <div style={{ background: "#6953da" }}>
                    <h3>📚 Stationary - Colored Book</h3>
                    <div
                      style={{
                        position: "relative",
                        width: 350,
                        height: 280,
                        marginBottom: "20px",
                      }}
                    >
                      <svg
                        viewBox="0 0 100 100"
                        preserveAspectRatio="xMidYMid slice"
                        width="100%"
                        height="100%"
                      >
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
                            <feFlood
                              floodColor={details.color}
                              result="flood"
                            />
                            <feComposite
                              in="flood"
                              in2="white"
                              operator="in"
                              result="colored"
                            />
                            <feBlend
                              in="SourceGraphic"
                              in2="colored"
                              mode="multiply"
                            />
                          </filter>
                          <path
                            id={`curve-${item.id}`}
                            d="M 10,80 A 40,40 0 0,1 90,80"
                            fill="transparent"
                          />
                        </defs>

                        <image
                          href={details.image}
                          width="100%"
                          height="100%"
                          preserveAspectRatio="xMidYMid meet"
                          filter={`url(#colorize-${item.id})`}
                        />
                        <text fontSize="6" fill={details.textColor}>
                          <textPath
                            href={`#curve-${item.id}`}
                            startOffset="50%"
                            textAnchor="middle"
                          >
                            {details.text}
                          </textPath>
                        </text>
                      </svg>
                    </div>
                  </div>
                ) : item.itemType === "stationarys" ? (
                  <div style={{ background: "#6953da" }}>
                    <h3>📚 Stationary - Colored Pen</h3>
                    <div
                      style={{
                        position: "relative",
                        width: 360,
                        height: 290,
                        marginBottom: "20px",
                      }}
                    >
                      <svg
                        viewBox="0 0 115 100"
                        preserveAspectRatio="xMidYMid slice"
                        width="100%"
                        height="100%"
                      >
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
                            <feFlood
                              floodColor={details.color}
                              result="flood"
                            />
                            <feComposite
                              in="flood"
                              in2="white"
                              operator="in"
                              result="colored"
                            />
                            <feBlend
                              in="SourceGraphic"
                              in2="colored"
                              mode="multiply"
                            />
                          </filter>
                          <path
                            id={`curve-${item.id}`}
                            d="M 12.5,80 A 46,40 0 0,1 102,80"
                            fill="transparent"
                          />
                        </defs>

                        <image
                          href={details.penImage}
                          width="100%"
                          height="100%"
                          preserveAspectRatio="xMidYMid meet"
                          filter={`url(#colorize-${item.id})`}
                        />
                        <text fontSize="3" fill={details.textColor}>
                          <textPath
                            href={`#curve-${item.id}`}
                            startOffset="50%"
                            textAnchor="middle"
                          >
                            {details.text}
                          </textPath>
                        </text>
                      </svg>
                    </div>
                  </div>
                ) : null}

                <button
                  className="remove-button"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Cart;
