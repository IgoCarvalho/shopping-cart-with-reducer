import { Header } from './components/Header/Header';

import { Home } from './pages/Home/Home';

import { GlobalStyles } from './styles/global';

export function App() {
  return (
    <>
      <GlobalStyles />

      <Header />

      <Home />
    </>
  );
}
