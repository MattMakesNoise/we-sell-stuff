import React, { useContext } from 'react';
import BasketContext from './BasketContext';

const Basket = ({}) => {
    const basket = useContext(BasketContext);
    console.log(basket);

    return (
        <div className='basket'>
            <h1>Basket</h1>
            {/* {basket.map(item => (
                <div className="basket-item">
                    <img src={item['IMG-HREF']} alt={item.TITLE} />
                    <h2>{item.TITLE}</h2>
                    <p>Price: £{item.PRICE}</p>
                    <p>Quantity: {item.QUANTITY}</p>
                    <p>Total: £{item.PRICE * item.QUANTITY}</p>
                </div>
            ))} */}
        </div>
    );
};

export default Basket;