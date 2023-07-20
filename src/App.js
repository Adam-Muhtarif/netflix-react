import Header from "./Components/Header";
import Search from "./Components/Search";
import MovieCard from "./Components/MovieCard";
import { useState } from "react";

export default function App() {
  let [movies, setMovies] = useState([]);

  async function searchMovie(movieName) {
    try {
      const api = "https://api.tvmaze.com/search/shows?q=".concat(movieName);
      const response = await fetch(api);
      if (response.status === 200) {
        const data = await response.json();
        setMovies(data);
      }
    } catch (reason) {
      console.log(reason);
    }
  }

  return (
    <div className="App">
      <Header />
      <div className="main">
        <Search searchMovie={searchMovie} />
        <div className="movies-section">
          {movies.map((movie, i) => (
            <MovieCard key={i} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}
