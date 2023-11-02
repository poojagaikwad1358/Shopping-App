import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Product from './Components/Product';
import Cart from './Components/Cart';

function App() {
  const [isCartVisible, setCartVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  console.log("Products in cart",cartItems)
  const toggleCart = () => {
    setCartVisible(!isCartVisible);
  };

  
  const updateQuantity = (productId, newQuantity) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = prevCartItems.map((item) => {
        if (item.product.productId === productId) {
          return {
            ...item,
            quantity: newQuantity,
            price: item.product.price * newQuantity, 
          };
        }
        return item;
      });
      return updatedCartItems;
    });
  };

  
  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) => {
      return prevCartItems.filter((item) => item.product.productId !== productId);
    });

    console.log("Products available after remove from cart:", cartItems)
  };

 

  return (
    <div className="App">
      <Navbar onCartClick={toggleCart} cartItems={cartItems} />
      <Cart
        show={isCartVisible}
        onClose={toggleCart}
        cartItems={cartItems}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
      />
      <Product
        cartItems={cartItems}
        setCartItems={setCartItems}
        updateQuantity={updateQuantity}
      />
    </div>
  );
}

export default App;
