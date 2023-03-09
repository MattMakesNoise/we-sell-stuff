import React from "react";
import useFetch from "../Fetch/useFetch.js";
import './Hero.scss';
import LoadingSpinner from "../Loading/LoadingSpinner.jsx";

const Hero = () => {
    const {loading, error, data} = useFetch('https://fakestoreapi.com/products');

    if(loading) return <LoadingSpinner />

    if(error) console.log(error);

    return (
        <div className="hero-wrapper">
            <div className="hero-inner">
                <ul>
                    {data && data.map(({id, title}) => (
                        <li key={id}>
                            <h3>{title}</h3>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}


export default Hero;