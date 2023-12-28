import React from 'react';
import { useParams } from 'react-router-dom';

const Product = ({ data }) => {
    const { id } = useParams();
    const product = data.find(item => item.ID === id);

    return (
        <div>
            <h1>{product.TITLE}</h1>
            <img src={product['IMG-HREF']} alt={product.TITLE} />
            <p>{product.DETAILS}</p>
            <p>Price: {product.PRICE}</p>
        </div>
    );
};

export default Product;