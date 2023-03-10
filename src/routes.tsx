import { Route, Routes } from 'react-router-dom';

import { Cart } from './pages/Cart/Cart';
import { Home } from './pages/Home/Home';
import { Product } from './pages/Product/Product';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}
