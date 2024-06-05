import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Popup from './components/layout/Popup';

function App() {
    return (
        <BrowserRouter>
            <Popup />
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/categories' element={<Categories />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
