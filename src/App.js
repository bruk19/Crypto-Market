import { Route, Routes } from 'react-router-dom';
import Nav from '../src/components/Nav'
import './App.css';
import Pages from './components/Pages';
import SingleCrypto from './components/SingleCrypto';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/*' exact='true' element={<Pages />} />
        <Route path=":cryptoId" exact="true" element={<SingleCrypto />} />
      </Routes>
    </>  
  );
}

export default App;
