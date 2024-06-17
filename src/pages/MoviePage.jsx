import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const MoviePage = () => {
  const params = useParams();
  const id = params.id;
  const [movie, setMovie] = useState({});

  useEffect(() => {
    getMovie();
  }, [id]);

  const getMovie = async () => {
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/movies-list/${id}/`);
      const data = await res.json();

      setMovie(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="">
      <div className="bg-zinc-700 flex justify-center items-center py-4 m-2 md:py-6 rounded-lg border-2 border-zinc-500">
        <span className="text-2xl md:text-3xl font-bold text-blue-400 shadow-sm">
          {movie.title} (<span className="text-blue-200">{movie.year}</span>)
        </span>
      </div>
      <div className="md:flex md:items-center md:ml-2">
        <div className="md:ml-0 mb-2 md:mr-4 flex justify-center items-center">
          <img
            className="max-h-96 max-w-72 shadow-md select-none"
            src={`http://127.0.0.1:8000${movie.poster}`}
            alt="The Godfather Movie image"
          />
        </div>
        <div className="mx-2 my-4 md:w-full">
          <table class="w-full shadow-md rounded-lg overflow-hidden">
            <tr>
              <td class="border border-zinc-400 px-4 py-2 text-zinc-400 font-bold text-base md:text-lg">
                Title
              </td>
              <td class="border border-zinc-400 px-4 py-2 text-blue-200 text-sm md:text-base">
                {movie.title}
              </td>
            </tr>
            <tr>
              <td class="border border-zinc-400 px-4 py-2 text-zinc-400 font-bold text-base md:text-lg">
                Year
              </td>
              <td class="border border-zinc-400 px-4 py-2 text-blue-200 text-sm md:text-base">
                {movie.year}
              </td>
            </tr>
            <tr>
              <td class="border border-zinc-400 px-4 py-2 text-zinc-400 font-bold text-base md:text-lg">
                Genre
              </td>
              <td class="border border-zinc-400 px-4 py-2 text-blue-200 text-sm md:text-base">
                {movie.genre}
              </td>
            </tr>
            <tr>
              <td class="border border-zinc-400 px-4 py-2 text-zinc-400 font-bold text-base md:text-lg">
                Director
              </td>
              <td class="border border-zinc-400 px-4 py-2 text-blue-200 text-sm md:text-base">
                {movie.director}
              </td>
            </tr>
            <tr>
              <td class="border border-zinc-400 px-4 py-2 text-zinc-400 font-bold text-base md:text-lg">
                Cast
              </td>
              <td class="border border-zinc-400 px-4 py-2 text-blue-200 text-sm md:text-base">
                {movie.cast}
              </td>
            </tr>
            <tr>
              <td class="border px-4 py-2 border-zinc-400 text-zinc-400 font-bold text-base md:text-lg">
                Rating
              </td>
              <td class="border px-4 py-2 border-zinc-400 text-blue-200 text-sm md:text-base">
                {movie.rating}
                <div className="text-yellow-300 inline-block ml-1 md:text-xl">
                  <FaStar />
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div className="bg-zinc-700 mx-2 mb-4 px-2 md:px-4 py-3 md:py-4 rounded-lg border-2 border-zinc-500">
        <div className="mb-1">
          <span className="text-2xl md:text-3xl capitalize font-bold text-blue-400">
            Story of {movie.title}
          </span>
        </div>
        <div className="text-justify">
          <span className="text-base md:text-lg tracking-tight md:tracking-wider text-blue-200">
            {movie.plot}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;