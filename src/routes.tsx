import { Route, Routes, useLocation } from 'react-router-dom';

import { Cart } from './pages/Cart/Cart';
import { Home } from './pages/Home/Home';
import { Product } from './pages/Product/Product';

export function AppRoutes() {
  const location = useLocation();

  const state = location.state as { backgroundLocation?: Location };

  console.log(location, state);

  return (
    <>
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      {state?.backgroundLocation && (
        <Routes>
          <Route path="/products" element={<Product isModal />} />
        </Routes>
      )}
    </>
  );
}
