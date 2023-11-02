import React from 'react';
import CartItem from './CartItem';

function Cart({ show, onClose, cartItems, updateQuantity, removeFromCart }) {
    const total = cartItems.reduce((acc, item) => {
        return acc + item.product.price * item.quantity;
    }, 0);

    return (
        <div className={`offcanvas offcanvas-end ${show ? 'show' : ''}`} tabIndex="-1" id="cartOffcanvas" aria-labelledby="cartOffcanvasLabel">
            <div className="offcanvas-header">
                <h2 className="offcanvas-title" id="cartOffcanvasLabel">My Cart</h2>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" onClick={onClose}></button>
            </div>
            <div className="offcanvas-body">
                <div>
                    {cartItems.map((item, index) => (
                        <CartItem
                            key={index}
                            item={item}
                            updateQuantity={updateQuantity}
                            removeFromCart={removeFromCart}
                        />
                    ))}
                </div>
                
                <div>
                    <h5><center>Total: ${total}</center></h5>
                </div>
            </div>
        </div>
    );
}

export default Cart;
