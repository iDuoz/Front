import AppRouter from './router';
import firebaseInit from './config/firebase';
import fireStore from './config/firestore';
import 'antd/dist/antd.css';
import run from './init/start';
import { createGlobalStyle } from 'styled-components';
import { React, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
const GlobalStyle = createGlobalStyle`
  html, body {
    height : 100%;
    width : 100%;
  }
`;

function App() {
  useEffect(() => {
    console.log(firebaseInit);
    console.log(fireStore);
    const auth = getAuth();
    console.log(auth);
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
