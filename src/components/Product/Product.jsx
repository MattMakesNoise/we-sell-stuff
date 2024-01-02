import React, { useContext, useState } from 'react';
import BasketContext from '../Basket/BasketContext';
import { useParams } from 'react-router-dom';
import './Product.scss';
import QuantitySelector from '../QuantitySelector/QuantitySelector';
import BasketItem from '../Basket/BasketItem';

const Product = ({ data }) => {
    // const { basket, setBasket } = useContext(BasketContext);
    const { id } = useParams();
    const product = data.find(item => item.ID === id);
    const [quantity, setQuantity] = useState(1);

    // const addToBasket = () => {
    //     const newBasket = [...basket];
    //     const basketItem = basket.find(item => item.ID === product.ID);

    //     if (basketItem) {
    //         basketItem.QUANTITY += quantity;
    //     } else {
    //         newBasket.push({ ...product, QUANTITY: quantity });
    //     }

    //     setBasket(newBasket);
    // }

    return (
        <div className='product'>
            <div className="image-particulars-wrap">
                <div className="image-wrap">
                    <img src={product['IMG-HREF']} alt={product.TITLE} />
                </div>
                
                <div className='product-particulars'>
                    <h1>{product.TITLE}</h1>
                    <h2>{product.INFO}</h2>
                    <p>Price: £{product.PRICE}</p>
                    <p>Add a star rating and reviews</p>
                    <p>Add some kind of colour selector that changes the image</p>
                    <p>Add a size selector</p>
                    <p>Category: {product.CATEGORY}</p>
                    <div className="add-to-basket-wrapper">
                        <BasketItem product={product}/>                    
                    </div>
                </div>
            </div>

            <div className="product-extras-wrap">
                EXTRA, EXTRA
            </div>
        </div>
    );
};

export default Product;