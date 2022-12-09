import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import Join from './pages/Join/Join';
import Detail from './pages/detailPage/Detail';
import Login from './pages/Login/Login';
import PayPage from './pages/payPage/PayPage';
import Product from './pages/ProductPage/Product';
import Main from './pages/main/Main';
import Cart from './pages/Cart/Cart';
import ScrollToTop from './ScrollToTop';
import Like from './pages/Like/Like';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/join" element={<Join />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/paypage" element={<PayPage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/like" element={<Like />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default Router;
