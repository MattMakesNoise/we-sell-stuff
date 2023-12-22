import React, { useEffect } from 'react';
import useFetch from './components/Fetch/useFetch.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';

import './App.scss';
import LoadingSpinner from './components/Loading/LoadingSpinner.jsx';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';

const WooCommerce = new WooCommerceRestApi({
    url: 'http://woo-store.local/wp-json',
    // ssl: true,
    consumerKey: 'ck_45ea2c80dbc501cfd7c4c8101ec57d0138c78575',
    consumerSecret: 'cs_a5e7c639e8ec26418403f9d2794e21bd0b5c19ea',
    wpAPI: true,
    version: 'wc/v3',
    // queryStringAuth: true,
});

function App() {
    // const options = {
    //     headers: {
    //         'Authorization': 'Basic ' + btoa('ck_45ea2c80dbc501cfd7c4c8101ec57d0138c78575:cs_a5e7c639e8ec26418403f9d2794e21bd0b5c19ea')
    //     }
    // }

    const {loading, error, data} = useFetch('http://woo-store.local/wp-json/wc/v3/products', options);

    useEffect(() => {
        //     if(data) {
        //         localStorage.setItem('data', JSON.stringify(data));
        //     }
        // }, [data]);

        if (data) {
            try {
                // Try to stringify the data
                const stringifiedData = JSON.stringify(data);
                // If no error was thrown, store the data
                localStorage.setItem('data', stringifiedData);
            } catch (error) {
                // If an error was thrown, log the error and the data to the console
                console.error('Invalid JSON:', data);
                console.error('Error:', error);
            }
        }
    }, [data]);

        if(loading) return <LoadingSpinner />

        if(error) console.log(error);

        // const items = data.slice(1, 4, 12);

        return (
            <Router>
                <div className="App">
                    <Header />
                    <main className="App-body">
                        <Routes>
                            <Route path="/" element={<HomePage data={data} loading={loading} error={error} />} />
                        </Routes>    
                    </main>
                    <Footer />
                </div>
            </Router>
        );
}

export default App;