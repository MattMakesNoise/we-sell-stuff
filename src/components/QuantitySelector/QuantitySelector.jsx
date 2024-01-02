import React, { useState, useEffect } from "react";
import "./QuantitySelector.scss";

const QuantitySelector = ({ product, maxQuantity = 100, onQuantityChange }) => {
    // Get basketItems from local storage and parse it
    let basketItems = JSON.parse(localStorage.getItem('basketItems'));
    
    // Check if the current product is already in the basket and if so what the quantity is
    let initialQuantity = 1;
    if (basketItems) {
        const basketItem = basketItems.find(item => item.ID === product.ID);
        if (basketItem) {
            initialQuantity = basketItem.quantity;
        }
    }

    const [quantity, setQuantity] = useState(initialQuantity);

    useEffect(() => {
        setQuantity(initialQuantity);
    }, [initialQuantity]);

    const handleIncrement = () => {
        if (quantity < maxQuantity) {
            const newQuantity = quantity + 1;
            setQuantity(newQuantity);
            onQuantityChange(newQuantity);
        }
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            onQuantityChange(newQuantity);
        }
    };

    return (
        <div className="quantity-selector">
            <button onClick={handleDecrement}>-</button>
            <span>{quantity}</span>
            <button onClick={handleIncrement}>+</button>
        </div>
    );
}

export default QuantitySelector;