import { useEffect, useState, useRef } from "react";
import { getCart, removeFromCart, clearCart } from "../utils/cart";
import { useNavigate } from "react-router-dom";
import "../styles/checkout.css";

import bellSound from "../images/bell.mp3";
import bellImg from "../images/bells.png";

export default function Checkout() {
  const audioRef = useRef(null);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setCart(getCart());
  }, []);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const playBellSound = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  };

  function handleRemove(id) {
    removeFromCart(id);
    setCart(getCart());
  }

  function handlePlaceOrder() {
    alert("Order placed successfully!");
    clearCart();
    setCart([]);
    navigate("/");
  }

  if (cart.length === 0) {
    return (
      <div className="checkout-empty">
        <h2>Your cart is empty</h2>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="checkout-stack">


        
        <div className="checkout-paper">
          <div className="checkout-header">
            <h2>We Hope You Enjoyed Your Stay</h2>
          </div>

          <div className="checkout-items">
            {cart.map((item) => (
              <div className="checkout-row" key={item.id}>
                <span className="item-name">
                  {item.name} x{item.qty}
                </span>

                <span className="item-price">
                  ${(item.price * item.qty).toFixed(2)}
                </span>

                <button
                  className="remove-btn"
                  onClick={() => handleRemove(item.id)}
                >
                  remove
                </button>
              </div>
            ))}
          </div>

          <div className="checkout-divider">
            --------------------------------------------------
          </div>

          <div className="checkout-total">
            <span>TOTAL</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button className="place-order-btn" onClick={handlePlaceOrder}>
            PLACE ORDER
          </button>
        </div>

        <div className="bell-wrapper">
          <img
            src={bellImg}
            alt="service bell"
            className="bell"
            onClick={playBellSound}
          />
        </div>
      </div>

      <audio ref={audioRef} src={bellSound} preload="auto" />
    </div>
  );
}
