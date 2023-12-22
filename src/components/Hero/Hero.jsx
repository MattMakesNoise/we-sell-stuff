import React from "react";
import './Hero.scss';

const Hero = ({ data, loading, error }) => {
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="hero-wrapper">
            <div className="hero-inner">
                {data.map(item => (                    
                    <div className="hero-item" key={item.id}>
                        <img src={item.image} alt={item.title} />
                        <h2>{item.title}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Hero;