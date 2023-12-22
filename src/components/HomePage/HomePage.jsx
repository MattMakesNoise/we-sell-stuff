import React from "react";
import Hero from "../Hero/Hero";

const HomePage = ({ data, loading, error }) => {
    return (
        <div>
            <h1>Home Page</h1>
            <Hero data={data} loading={loading} error={error} />
        </div>
    )
}

export default HomePage;