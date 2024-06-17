import { Link } from "react-router-dom";
import facebookLogo from "../assets/images/facebookLogo.png";
import instagramLogo from "../assets/images/instagramLogo.png";
import linkedinLogo from "../assets/images/linkedinLogo.png";

const Footer = () => {
  return (
    <div className="h-20 bg-zinc-700 flex justify-around items-center">
      <div className="">
        <span className="text-gray-50 md:text-base sm:text-sm text-xs font-bold ml-4">
          Copyright &copy; WatchList {new Date().getFullYear()}
        </span>
      </div>
      <div className="flex items-center justify-center">
        <div className="select-none bg-zinc-800 hover:bg-zinc-900 cursor-pointer rounded-full p-2 w-fit mr-3">
          <Link to="#">
            <img
              className="h-6 w-auto"
              src={facebookLogo}
              alt="facebook logo"
            />
          </Link>
        </div>
        <div className="select-none bg-zinc-800 hover:bg-zinc-900 cursor-pointer rounded-full p-2 w-fit mr-3">
          <Link to="#">
            <img
              className="h-6 w-auto"
              src={instagramLogo}
              alt="instagram logo"
            />
          </Link>
        </div>
        <div className="select-none bg-zinc-800 hover:bg-zinc-900 cursor-pointer rounded-full p-2 w-fit mr-4">
          <Link to="#">
            <img
              className="h-6 w-auto"
              src={linkedinLogo}
              alt="linkedin logo"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;