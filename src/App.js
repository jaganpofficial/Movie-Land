import React,{useState,useEffect} from 'react';
import MovieCard from './MovieCard';
import './App.css';
import searchIcon from './search.svg';

// 
const API_URL = 'http://www.omdbapi.com?apikey=6929e876';

const movie1 = {
  "Title": "Spiderman",
  "Year": "2010",
  "imdbID": "tt1785572",
  "Type": "movie",
  "Poster": "N/A"
}

const App = ()=> {
 const [movies, setmovies] = useState([]);
 const [searchTerm,setSearchterm] = useState('');
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setmovies(data.Search);
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
        value={searchTerm}
        onChange={(e) => setSearchterm(e.target.value)}
        />
        <img 
        src={searchIcon}
        alt='search'
        onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {movies?.length > 0
        ? (
          <div className='container'>
          {movies.map((movie) => (
            <MovieCard movie={movie}/>
          ))}
         </div>
        ) : (
          <div className='empty'>
            <h2>Movie Not Found</h2>
          </div>
        )}
     
    </div>
  );
}

export default App
