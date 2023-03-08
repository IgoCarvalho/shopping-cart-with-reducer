import { Header } from './components/Header/Header';

import { GlobalStyles } from './styles/global';

export function App() {
  return (
    <>
      <GlobalStyles />

      <Header />

      <div>
        <h1>Hello World!</h1>
      </div>
    </>
  );
}
