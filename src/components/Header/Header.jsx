import React from "react";
import './Header.scss';

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="header-inner">
                    <div className="logo-wrapper">
                        <img src="../../../assets/images/logo.png" alt="logo"/>
                    </div>
                    <h1>Header header head head</h1>
                </div>
            </header>
        )
    }
}

export default Header;