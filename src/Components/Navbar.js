import React from 'react';
import { CartFill } from 'react-bootstrap-icons';

function Navbar({ onCartClick, cartItems }) {
  
    const uniqueProducts = [...new Set(cartItems.map((item) => item.product.productId))];
    const totalUniqueProducts = uniqueProducts.length;
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark sticky-top">
            <div className="container">
                <h2 className="text-danger">Shopping App</h2>
                <button
                    className="btn btn-outline-danger d-flex justify-content-center align-items-center"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#cartOffcanvas"
                    onClick={onCartClick}
                >
                    <CartFill size={25} className='me-1'/> Cart ({totalUniqueProducts})
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
