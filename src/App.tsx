import { Header } from './components/Header/Header';
import { ShoppingCard } from './components/ShoppingCard/ShoppingCard';
import { ShoppingContent } from './components/ShoppingContent/ShoppingContent';

import { GlobalStyles } from './styles/global';

export function App() {
  return (
    <>
      <GlobalStyles />

      <Header />

      <ShoppingContent>
        <ShoppingCard />
      </ShoppingContent>
    </>
  );
}
