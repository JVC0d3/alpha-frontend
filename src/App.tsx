import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Popup from './components/actions/Popup';
import { useState } from 'react';

function App() {
    const [popupVisible, setPopupVisible] = useState<boolean>(false);
    return (
        <BrowserRouter>
            <Popup visible={popupVisible} setVisible={setPopupVisible} />
            <Header setPopupVisible={setPopupVisible} />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/categories' element={<Categories />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;

