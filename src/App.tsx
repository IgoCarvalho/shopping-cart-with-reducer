import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header/Header';

import { AppRoutes } from './routes';

import { GlobalStyles } from './styles/global';

export function App() {
  return (
    <>
      <GlobalStyles />

      <BrowserRouter>
        <Header />
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}
