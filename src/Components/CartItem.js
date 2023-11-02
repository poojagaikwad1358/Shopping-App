import React from 'react';

function CartItem({ item, updateQuantity, removeFromCart }) {
  const { product, quantity } = item;

  const isQuantityZero = quantity === 0;
  
  return (
    <div>
      <h4 className='text-center'>Name: {product.name}</h4>
      <h5 className='text-center'>Price: ${product.price*quantity}</h5>
      <div>
        <div className="d-flex justify-content-center align-items-center">
          <h6> Quantity:</h6>
          <button
            className="btn btn-sm border-none"
            onClick={() => updateQuantity(product.productId, quantity + 1)}
          >
            +
          </button>
          <button className="btn border btn-sm m-1 px-3">
            {quantity}
          </button>
          <button
            className="btn btn-sm border-none"
            onClick={() => {
              if (!isQuantityZero) {
                updateQuantity(product.productId, quantity - 1);
              }
            }}
            disabled={isQuantityZero} 
          >
            -
          </button>
          <div className="text-center">
            <button
              className='btn btn-sm btn-danger text-center'
              onClick={() => removeFromCart(product.productId)}
            >
              REMOVE FROM CART
            </button>
          </div>
        </div>
        <hr/>
      </div>
    </div>
  );
}

export default CartItem;
