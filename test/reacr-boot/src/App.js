import './App.css';
import { Route, Routes } from 'react-router-dom';
import NabBarElements from './compnents/NabBarElements'
import EmptyPAge from './screens/EmptyPAge';

import Main from './test/main';
import Upload from './test/CreateLable';
import List from './test/board';
import Test from './test/boardIn';

function App() {
  return (
    <>
      <NabBarElements/>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/CreateLable' element={<Upload />} /> 
        <Route path='/board' element={<List />} /> 
        <Route path='/*' element={<EmptyPAge />} />
        <Route path='/boardIn' element={<Test />} />
      </Routes>
    </>
  );
}

export default App;
