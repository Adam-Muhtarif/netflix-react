import Header from "./Components/Header";
import Search from "./Components/Search";
import MovieCard from "./Components/MovieCard";
import { useEffect, useState } from "react";

export default function App() {
  let [movies, setMovies] = useState([]);
  let [movieName, setMovieName] = useState("Test");

  useEffect(() => {
    async function getData() {
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
    getData();
  }, [movieName]);

  return (
    <div className="App">
      <Header />
      <div className="main">
        <Search setMovieName={setMovieName} />
        <div className="movies-section">
          {movies.map((movie, i) => (
            <MovieCard key={i} {...movie} />
          ))}
        </div>
      </div>
    </div>
  );
}
