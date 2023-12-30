import React from 'react';
import { useParams } from 'react-router-dom';
import './Product.scss';
import QuantitySelector from '../QuantitySelector/QuantitySelector';

const Product = ({ data }) => {
    const { id } = useParams();
    const product = data.find(item => item.ID === id);

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
                        <QuantitySelector onQuantityChange={(value) => console.log(value)} />
                        <button className='add-to-basket'>Add to basket</button>
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