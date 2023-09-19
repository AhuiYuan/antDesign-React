// App.tsx
import React from 'react';
import { Layout } from 'antd';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';

const { Content } = Layout;

const App: React.FC = () => {
    return (

            <Layout style={{background:'none'}}>
                <Header />
                <Content>
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/about"  element={<About />}/>
                    </Routes>
                </Content>
                <Footer />
            </Layout>

    );
};

export default App;
