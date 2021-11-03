import AppRouter from './router';
import firebaseInit from './lib/firebase';
import fireStore from './lib/firestore';
import 'antd/dist/antd.css';
import run from './init/start';
import { React, useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';

function App() {
  const [isInit, setIsInit] = useState(false);
  useEffect(() => {
    run().then((status) => {
      console.log(firebaseInit);
      console.log(fireStore);
      const auth = getAuth();
      console.log(auth);
      setIsInit(true);
    });
  }, []);

  return isInit ? (
    <>
      <AppRouter />
    </>
  ) : null;
}

export default App;
