import './App.css';
// import Header from './components/home-page/Header/Header';
// import Footer from './components/home-page/Footer/Footer';
// import Main from './components/home-page/Main/Main';
import { Routes, Route } from 'react-router-dom';
import ProductPage from './pages/ProductPage/ProductPage';
import BasketPage from './pages/BasketPage/BasketPage';

import IndexPage from './pages/IndexPage/IndexPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';


function App() {
  return (
    <div className="App">
      <Routes>

        <Route index path='/' element={<IndexPage />}></Route>
        <Route path={'contacts'} element={<ContactsPage />}></Route>
        <Route path={'/basket'} element={<BasketPage />}></Route>
        <Route path={'products'} >
          <Route path={':userId'} element={<ProductPage />}></Route>
        </Route>

      </Routes>
    </div>
  );
}

export default App;
