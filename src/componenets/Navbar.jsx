import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive ? "mr-3 text-blue-400" : "mr-3 hover:text-blue-400";

  return (
    <div className="bg-zinc-700 h-20 flex items-center justify-between">
      <div className="ml-4 sm:ml-12">
        <NavLink to="/" className="flex items-center justify-center">
          <img
            className="h-10 w-auto select-none"
            src={logo}
            alt="movie watchlist logo"
          />
          <span className="ml-2 text-blue-400 hover:text-blue-500 md:text-lg sm:text-base text-sm font-bold">
            Movie Watchlist
          </span>
        </NavLink>
      </div>
      <div className="text-gray-50 sm:mr-10 hover:text-gray-100 md:text-base sm:text-sm text-xs font-bold flex items-center justify-center">
        <NavLink to="/" className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/movies" className={linkClass}>
          Movies
        </NavLink>
        <NavLink to="/add-movie" className={linkClass}>
          Add movie
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;