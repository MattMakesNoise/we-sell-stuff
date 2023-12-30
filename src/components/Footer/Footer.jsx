import React from "react";
import './Footer.scss';

// Gets the current year
const year = new Date().getFullYear();

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="footer-inner">
                    <h3>&copy; Matt Jones - {year}</h3>
                </div>
            </footer>
        )
    }
}

export default Footer;