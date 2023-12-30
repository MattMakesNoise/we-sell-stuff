import React, { useEffect } from 'react';
import useFetch from './components/Fetch/useFetch.js';
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


        if(data) console.log(data);
        
        if(loading) return <LoadingSpinner />

        if(error) console.log(error);

        return (
            <Router>
                <div className="App">
                    <Header />
                    <main className="App-body">
                        <Routes>
                            <Route path="/" element={<HomePage data={data} loading={loading} error={error} />} />
                            <Route path="/product/:id" element={<Product data={data} />} />
                            <Route path="/basket" element={<Basket data={data} />} />
                        </Routes>    
                    </main>
                    <Footer />
                </div>
            </Router>
        );
}

export default App;