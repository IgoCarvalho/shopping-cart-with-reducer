import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --text: #11293b;
    --background: #ffffff;
    --foreground: #e7e9eb;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #app {
    width: 100%;
    min-height: 100vh;
  }

  body {
    background-color: var(--background);
    color: var(--text);

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  body, button, input {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }

  img {
    display: block;
    max-width: 100%;
  }
`;

export { GlobalStyles };
