import React, { useContext } from "react";
import './Header.scss';
import BasketContext from '../Basket/BasketContext';

const Header = () => {
    const { basket } = useContext(BasketContext);
    let itemCount = 0;
    
    basket.forEach(item => {
        itemCount += item.quantity;
    });
    
    return (
        <header>
            <div className="header-inner">
                <button className="burger-wrapper">
                    <span className="burger-box">
                        <span className="burger-inner"></span>
                    </span>
                </button>
                <div className="logo-wrapper">
                    <img src="../../../assets/images/logo.png" alt="logo"/>
                </div>
                <div className="basket-wrapper">
                    <i className="fas fa-shopping-cart"></i>
                    <div className="basket-count-wrapper">
                        <span className="basket-count">{itemCount}</span>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;