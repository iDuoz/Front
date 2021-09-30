import AppRouter from './router';
import firebaseInit from './config/firebase';

function App() {
  console.log(firebaseInit);
  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
