import React from "react";
import './Header.scss';

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="header-inner">
                    <div className="burger-wrapper">
                        <i className="fas fa-bars"></i>
                    </div>
                    <div className="logo-wrapper">
                        <img src="../../../assets/images/logo.png" alt="logo"/>
                    </div>
                    <div className="basket-wrapper">
                        <i className="fas fa-shopping-cart"></i>
                        <div className="basket-count-wrapper">
                            <span className="basket-count">0</span>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;