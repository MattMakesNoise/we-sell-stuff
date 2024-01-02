import React, { useState, useEffect } from 'react';
import './Basket.scss';
import QuantitySelector from '../QuantitySelector/QuantitySelector';

const Basket = ({ product }) => {
    const [basketItems, setBasketItems] = useState([]);

    useEffect(() => {
        // Load basketItems from local storage when the component mounts
        const loadedBasketItems = JSON.parse(localStorage.getItem('basketItems'));

        if (loadedBasketItems) {
            setBasketItems(loadedBasketItems);
        }
    }, []);
    
    return (
        <div className='basket'>
            <div className="basket-header">
                <div className="basket-title">
                    <h1>Basket</h1>
                </div>
                <div className="basket-amounts">
                    <h3 className="price">Price</h3>
                    <h3 className="quantity">Qty</h3>
                    <h3 className="Subtotal">Subtotal</h3>
                </div>
            </div>
            {basketItems.map(item => (
                <div className="basket-item" key={item.ID}>
                    <div className="item-details">
                        <img src={item['IMG-HREF']} alt={item.TITLE} />
                        <h2>{item.TITLE}</h2>
                    </div>
                    <div className="price-quantity-subtotal">
                        <div className="price">£{item.PRICE}</div>
                        <QuantitySelector product={item} />
                        <p>£{item.PRICE * item.quantity}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Basket;