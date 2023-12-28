import React from 'react';
import { useParams } from 'react-router-dom';
import './Product.scss';

const Product = ({ data }) => {
    const { id } = useParams();
    const product = data.find(item => item.ID === id);
    // gets. the product.INFO and strips the returned string of quotation marks.
    const info = product.INFO.slice(1, product.INFO.length - 1);

    return (
        <div className='product'>
            <div className="image-particulars-wrap">
                <div className="image-wrap">
                    <img src={product['IMG-HREF']} alt={product.TITLE} />
                </div>
                
                <div className='product-particulars'>
                    <h1>{product.TITLE}</h1>
                    <h2>{info}</h2>
                    <p>Price: {product.PRICE}</p>
                    <p>Category: {product.CATEGORY}</p>
                </div>
            </div>
            
            <div className="product-extras">
                EXTRA, EXTRA
            </div>
        </div>
    );
};

export default Product;