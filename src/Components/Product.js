import React, { useState } from 'react';
import data from './data';

const Product = ({ cartItems, setCartItems }) => {
    const [productQuantities, setProductQuantities] = useState({});

    const incrementQuantity = (productId) => {
        setProductQuantities((prevQuantities) => ({
            ...prevQuantities,
            [productId]: (prevQuantities[productId] || 0) + 1,
        }));
    };

    const decrementQuantity = (productId) => {
        if (productQuantities[productId] > 1) {
            setProductQuantities((prevQuantities) => ({
                ...prevQuantities,
                [productId]: prevQuantities[productId] - 1,
            }));
        }
    };

    const addToCart = (product) => {
        const quantity = productQuantities[product.productId] || 1;
        
        const existingItem = cartItems.find((item) => item.product.productId === product.productId);

        if (existingItem) {
            setCartItems((prevCartItems) => {
                const updatedCartItems = prevCartItems.map((item) => {
                    if (item.product.productId === product.productId) {
                        return {
                            ...item,
                            quantity: item.quantity + quantity,
                        };
                    }
                    return item;
                });

                return updatedCartItems;
            });
        } else {
            setCartItems((prevCartItems) => [
                ...prevCartItems,
                {
                    product,
                    quantity,
                },
            ]);
        }
       
        setProductQuantities((prevQuantities) => ({
            ...prevQuantities,
            [product.productId]: 1,
        }));
    };

    return (
        <div className="container mt-3">
            <div className="row">
                {data &&
                    data.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="col-12 col-md-6">
                            <div className="card mb-3">
                                <div className="card-header">
                                    <h4>{category.name}</h4>
                                </div>
                                <div className="card-body row">
                                    {category.productList.map((product, productIndex) => (
                                        <div key={productIndex} className="col-6">
                                            <div className="card mb-3">
                                                <div className="d-flex justify-content-center align-items-center mt-2">
                                                    <img
                                                        className="card-img-top img-thumbnail"
                                                        src={product.imageUrl}
                                                        alt={product.name}
                                                        style={{ height: '200px', width: '200px' }}
                                                    />
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">{product.name}</h5>
                                                    <p className="card-text">Price: ${product.price}</p>
                                                    <div className="d-flex justify-content-center align-items-center">
                                                        <div className="d-flex justify-content-center align-items-center">
                                                            <button
                                                                className="btn btn-sm border-none"
                                                                onClick={() => incrementQuantity(product.productId)}
                                                            >
                                                                +
                                                            </button>
                                                            <span className="mx-2">{productQuantities[product.productId] || 0}</span>
                                                            <button
                                                                className="btn btn-sm border-none"
                                                                onClick={() => decrementQuantity(product.productId)}
                                                            >
                                                                -
                                                            </button>
                                                        </div>
                                                        <button
                                                            className="btn btn-sm btn-danger"
                                                            onClick={() => addToCart(product)}
                                                        >
                                                            ADD TO CART
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Product;
