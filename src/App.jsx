import React, { useEffect, useState } from 'react';
import useFetch from './components/Fetch/useFetch.js';
import BasketContext from './components/Basket/BasketContext.js';   
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import LoadingSpinner from './components/Loading/LoadingSpinner.jsx';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import Product from './components/Product/Product';
import Basket from './components/Basket/Basket';

function App() {
    const {loading, error, data} = useFetch('http://localhost:3009/products');
    const [basket, setBasket] = useState([]);

    // Stores fetched data in local storage
    useEffect(() => {
        if (data) {
            localStorage.setItem('products', JSON.stringify(data));
        }
    }, [data]);

    const products = JSON.parse(localStorage.getItem('products'));

    // Stores basket in local storage
    useEffect(() => {
        if (basket) {
            localStorage.setItem('basket', JSON.stringify(basket));
        }
    }, [basket]);

    let basketItems = JSON.parse(localStorage.getItem('basket'));
    console.log("This is what's in the basket!: ", basketItems);
    
    if(loading) return <LoadingSpinner />

    if(error) console.log(error);

    return (
        <BasketContext.Provider value={{ basket, setBasket }}>
            <Router>
                <div className="App">
                    <Header />
                    <main className="App-body">
                        <Routes>
                            <Route path="/" element={<HomePage data={data} loading={loading} error={error} />} />
                            <Route path="/product/:id" element={<Product data={data} />} />
                            <Route path="/basket" element={<Basket data={data}/>} />
                        </Routes>    
                    </main>
                    <Footer />
                </div>
            </Router>
        </ BasketContext.Provider>
    );
}

export default App;