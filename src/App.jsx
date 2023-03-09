import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <main className="App-body">
                <Hero />
            </main>
            <Footer />
        </div>
    );
}

export default App;