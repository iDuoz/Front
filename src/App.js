import AppRouter from './router';
import firebaseInit from './config/firebase';
import 'antd/dist/antd.css';
import run from './init/start';
import { React, useEffect } from 'react';

function App() {
  useEffect(() => {
    console.log(firebaseInit);
    run();
  }, []);

  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
