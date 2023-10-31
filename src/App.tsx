import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./views/home";
import Product from "./views/product";
import Manufacturers from "./views/manufacturers";
import Bom from "./views/bom";
import Rfqs from "./views/rfqs";
const App: React.FC = () => {
    return (
        <div>
            <Header />
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/manufacturers" element={<Manufacturers />} />
                    <Route path="/other/bom" element={<Bom />} />
                    <Route path="/other/rfqs" element={<Rfqs />} />
                </Routes>
            </div>
            <Footer />
        </div>


    );
};

export default App;
