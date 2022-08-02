import { Route, Routes } from 'react-router-dom';
import Nav from '../src/components/Nav'
import './App.css';
import Pages from './components/Pages';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/*' exact='true' element={<Pages />} />
      </Routes>
    </>  
  );
}

export default App;
