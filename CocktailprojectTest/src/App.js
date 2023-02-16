/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link, useParams, useNavigate, Outlet} from 'react-router-dom';
import Main from './main/main';
import Cocktail from './cocktail/cocktail';
import Header from './header';
import CocktailDetail from './cocktail/detail';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/cocktail" element={<Cocktail />}></Route>
        <Route path="/cocktail/:no" element={<CocktailDetail />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
