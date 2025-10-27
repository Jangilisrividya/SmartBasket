import React from 'react';
import '../App.css';

function Cart({ cart, setCart }) {
  const removeFromCart = (item) => {
    setCart(cart.filter((cartItem) => cartItem.id !== item.id));
  };

  const handleOrder = () => {
    alert('Order placed successfully!');
    setCart([]);
  };

  // ✅ Calculate total cost
  const totalCost = cart.reduce((total, item) => total + parseFloat(item.cost || 0), 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-grid">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.img} alt={item.name} className="cart-img" />
                <div className="cart-info">
                  <h3>{item.name}</h3>
                  <p><b>Brand:</b> {item.brand}</p>
                  <p><b>Cost:</b> ₹{item.cost}</p>
                </div>
                <button className="remove-btn" onClick={() => removeFromCart(item)}>Remove</button>
              </div>
            ))}
          </div>

          {/* ✅ Total Cost Section */}
          <div className="cart-total">
            <h3>Total: ₹{totalCost.toFixed(2)}</h3>
          </div>

          <button className="order-btn" onClick={handleOrder}>Place Order</button>
        </>
      )}
    </div>
  );
}

export default Cart;