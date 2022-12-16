import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import Main from './pages/Main';
import ProductList from './pages/ProductList';
import Detail from './pages/ProductDetail';
import Payment from './pages/Payment';
import Cart from './pages/Cart';
import Like from './pages/Like';
import ScrollToTop from './ScrollToTop';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <ScrollToTop />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<Main />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/like" element={<Like />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default Router;
