import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import About from './screens/About';
import NabBarElements from './compnents/NabBarElements'
import EmptyPAge from './screens/EmptyPAge';

function App() {
  return (
    <>
      {/*
      <NabBarElements/>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/*' element={<EmptyPAge />} />
      </Routes>
  */}

  <Routes>
    <Route path='/' element={<main />} />
{/*    <Route path='/' element={< />} />  */}
    <Route path='/*' element={<EmptyPAge />} />
  </Routes>

    </>
  );
}

export default App;
