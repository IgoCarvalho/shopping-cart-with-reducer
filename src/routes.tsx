import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home/Home';
import { Product } from './pages/Product/Product';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Product />} />
    </Routes>
  );
}
