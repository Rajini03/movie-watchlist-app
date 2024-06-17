import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

const MovieListing = ({ id, poster, title, description, rating }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <div className="bg-zinc-700 m-2 rounded-lg border-2 border-zinc-500 shadow-md md:flex">
      <div className="flex justify-center mt-2 md:m-2">
        <img
          className="max-h-60 max-w-48 md:max-h-72 md:max-w-56 shadow-md select-none"
          src={`http://127.0.0.1:8000${poster}`}
          alt={`${title} movie poster`}
        />
      </div>
      <div className="ml-3 mb-3">
        <div className="mt-2">
          <span
            id="description"
            className="text-2xl md:text-3xl lg:text-4xl font-bold capitalize text-blue-400"
          >
            {title}
          </span>
        </div>
        <div className="mt-2">
          <span className="text-sm md:text-base lg:text-lg font-light text-gray-50">
            {showFullDescription
              ? description
              : description.substring(0, 50) + "..."}
          </span>
        </div>
        <button
          onClick={() =>
            setShowFullDescription(
              (prevShowFullDescription) => !prevShowFullDescription
            )
          }
          className="text-blue-400 mb-5 hover:text-indigo-500 select-none"
        >
          Show {showFullDescription ? "less" : "more"}
        </button>
        <div className="flex items-center mt-2">
          <span className="text-gray-50 font-light text-sm md:text-base lg:text-lg">
            Rating: {rating}
          </span>
          <div className="text-yellow-300 ml-1 md:text-xl">
            <FaStar />
          </div>
        </div>
        <div className="mt-2 mb-2">
          <Link
            to={`/movies/${id}/`}
            className="bg-blue-400 px-3 py-1 rounded-lg text-blue-50 hover:bg-blue-500 select-none cursor-pointer"
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieListing;