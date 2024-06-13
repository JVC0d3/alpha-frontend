import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import LoginPopup from './components/actions/LoginPopup';
import RegisterPopup from './components/actions/RegisterPopup';
import { useState } from 'react';

const App = () => {
    const [popup, setPopup] = useState<Popup>(null);
    return (
        <BrowserRouter>
            {popup === 'login' ? (
                <LoginPopup popup={popup} setPopup={setPopup} />
            ) : (
                popup === 'register' && (
                    <RegisterPopup popup={popup} setPopup={setPopup} />
                )
            )}
            <Header setPopup={setPopup} />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/categories' element={<Categories />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
