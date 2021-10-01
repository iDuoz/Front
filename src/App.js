import AppRouter from './router';
import firebaseInit from './config/firebase';
// import 'antd/dist/antd.css';
import run from './init/start';
import { createGlobalStyle } from 'styled-components';
import { React, useEffect } from 'react';

const GlobalStyle = createGlobalStyle`
  html, body {
    height : 100%;
    width : 100%;
  }
`;

function App() {
  useEffect(() => {
    console.log(firebaseInit);
    run();
  }, []);

  return (
    <>
      <GlobalStyle />
      <AppRouter />
    </>
  );
}

export default App;
