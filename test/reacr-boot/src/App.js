import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import About from './screens/About';
import NabBarElements from './compnents/NabBarElements'
import EmptyPAge from './screens/EmptyPAge';

import Main from './test/main';
import Upload from './test/CreateLable';
import List from './test/fToB';
import DayList from './test/DayList';
import Day from './test/day';
import Header from './test/header'
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
        <Route path='/' element={<Main />} />
        <Route path='/CreateLable' element={<Upload />} /> 
        <Route path='/FToB' element={<List />} /> 
        <Route path='/*' element={<EmptyPAge />} />
      </Routes>

  {/*
      <Header />
      <Routes>
        <Route path='/' element={<DayList />} /> 
        <Route path='/day' element={<Day />} /> 
        <Route path='/*' element={<EmptyPAge />} />
      </Routes>
*/}
    </>
  );
}

export default App;
