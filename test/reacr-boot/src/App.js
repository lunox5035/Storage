import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import About from './screens/About';
import NabBarElements from './compnents/NabBarElements'

function App() {
  return (
    <Routes>
      <Route path='/' element={<NabBarElements />}>
        <Route index element={<Home />} />
        <Route path='/About' element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
