import React from "react";
// import Hero from "../Hero/Hero";

const HomePage = ({ data, loading, error }) => {
    return (
        <div>
            <h1>Home Page</h1>
            {/* <Hero data={data} loading={loading} error={error} /> */}
            {data.map((item, index) => (
                <div key={index}>
                    <h2>{item.TITLE}</h2>
                </div>
            ))}
        </div>
    )
}

export default HomePage;