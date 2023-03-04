import React from 'react';
import { useState, useEffect } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() { 

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => {
                if(!res.ok) {
                    throw new Error(
                        `HTTP error! status: ${res.status}`
                    );
                }
                return res.json();
            })
            .then((actualData) => {
                setData(actualData);
                setError(null);
                console.log(actualData);
            })
            .catch((error) => {
                setError(error.message);
                setData(null);
                console.log(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <div className="App">
            <Header />
            <main className="App-body">
                <h1>API Posts</h1>
                {loading && <p>Wait up guys!!!...</p>}
                {error && (
                    <p>{`There's a problem fetching the data innit! ${error}`}</p>
                )}
                <ul>
                    {data && data.map(({id, title}) => (
                        <li key={id}>
                            <h3>{title}</h3>
                        </li>
                    ))}
                </ul>
            </main>
            <Footer />
        </div>
    );
}

export default App;