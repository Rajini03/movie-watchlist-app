import FavoriteMoviesSection from "../components/FavoriteMoviesSection";
import MovieListings from "../components/MovieListings";
import ViewAllMovies from "../components/ViewAllMovies";

const HomePage = () => {
  return (
    <>
      <FavoriteMoviesSection />
      <MovieListings />
      <ViewAllMovies />
    </>
  );
};

export default HomePage;