import { useState, useEffect } from "react";
import MovieListing from "./MovieListing";

const MovieListings = ({ isHome = true }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/movies-list/");
      const data = await res.json();
      setMovies(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="">
      {(isHome ? movies?.slice(0, 3) : movies)?.map((movie) => (
        <MovieListing
          key={movie.id}
          poster={movie.poster}
          title={movie.title}
          description={movie.plot}
          rating={movie.rating}
          id={movie.id}
        />
      ))}
    </div>
  );
};

export default MovieListings;