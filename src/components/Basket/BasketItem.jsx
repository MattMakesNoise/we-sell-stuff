import React, { useContext, useState, useEffect } from 'react';
import BasketContext from './BasketContext';
import QuantitySelector from '../QuantitySelector/QuantitySelector';

const BasketItem = ({ product, data }) => {
    const { basket, setBasket } = useContext(BasketContext);
    const [ currentQuantity, setCurrentQuantity ] = useState(1);

    useEffect(() => {
        // Load basket from local storage
        const loadedBasket = JSON.parse(localStorage.getItem('basketItems'));
        if (loadedBasket) {
            setBasket(loadedBasket);
        }
    }, []);
    
    const handleQuantityChange = (newQuantity) => {
        setCurrentQuantity(newQuantity);
        
        const basketItem = basket.find(item => item.id === product.ID);

        if (basketItem) {
            // If the product is in the basket, update its quantity
            basketItem.quantity = newQuantity;
            setBasket([...basket]);
        } 
    };

    const addToBasket = () => {
        // Check if product is already in basket
        const existingProduct = basket.find(item => item.ID === product.ID);

        if (!existingProduct) {
            // If product is not in basket, add it
            setBasket([...basket, { ...product, quantity: currentQuantity }]);
        } else {
            // If product is in basket, update its quantity
            existingProduct.quantity = currentQuantity;
            setBasket([...basket]);
        }

        // Save updated basket to local storage
        localStorage.setItem('basketItems', JSON.stringify(basket));
    }

    return (
        <div>
            <QuantitySelector initialQuantity={1} onQuantityChange={handleQuantityChange} />
            <button className='add-to-basket' onClick={addToBasket}>Add to basket</button>
        </div>
    );
};

export default BasketItem;