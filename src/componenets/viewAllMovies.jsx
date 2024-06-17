import { Link } from "react-router-dom";

const ViewAllMovies = () => {
  return (
    <div className="my-8 py-4 mx-2 text-center">
      <Link
        to="/movies"
        className="bg-blue-400 px-6 py-3 sm:px-8 md:px-16 lg:px-28 rounded-lg text-gray-50 hover:bg-blue-500 select-none"
      >
        View all movies
      </Link>
    </div>
  );
};

export default ViewAllMovies;