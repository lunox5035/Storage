import './App.css';
import { Route, Routes } from 'react-router-dom';
import NabBarElements from './compnents/NabBarElements'
import EmptyPAge from './screens/EmptyPAge';

import Main from './test/main';
import Upload from './test/CreateLable';
import List from './test/board';
import Board from './test/boardIn';
import BoardRe from './test/boardRe';
import Ingredient from './test/ingredient';
import IngredientIn from './test/ingredientin';

function App() {
  // const [,] =useState([])
  


  return (
    <>
      <NabBarElements/>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/CreateLable' element={<Upload />} /> 
        <Route path='/board' element={<List />} /> 
        <Route path='/*' element={<EmptyPAge />} />
        <Route path='/boardIn/:no' element={<Board />} />
        <Route path='/boardRe/:no' element={<BoardRe />} />
        <Route path='/ingredient' element={<Ingredient />} />
        <Route path='/ingredient/:no' element={<IngredientIn />} />
      </Routes>
    </>
  );
}

export default App;
