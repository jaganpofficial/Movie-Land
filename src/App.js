import React,{useEffect} from 'react';
import './App.css';
import searchIcon from './search.svg';

// 
const API_URL = 'http://www.omdbapi.com?apikey=6929e876';

const App = ()=> {

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

  }


useEffect(() => {
searchMovies('Spiderman');
}, []);

  return (
    <div className='app'>
      <h1>MovieLand</h1>

      <div className='search'>
        <input 
        placeholder='Search for movies'
        value=""
        onChange={() => {}}
        />
        <img 
        src={searchIcon}
        alt='search'
        onClick={() => {}}
        />
      </div>

      <div className='container'>

      </div>
    </div>
  );
}

export default App
