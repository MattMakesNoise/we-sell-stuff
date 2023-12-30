import React, { useState } from "react";
import "./QuantitySelector.scss";

const QuantitySelector = ({ initialQuantity = 1, maxQuantity = 100, onQuantityChange }) => {
    const [quantity, setQuantity] = useState(initialQuantity);

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