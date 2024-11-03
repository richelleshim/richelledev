import { logoImg } from "../utils";
import { navLists } from "../constants";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-black fixed top-0 left-0 z-20">
      <nav className="flex w-full justify-between items-center">
        {/* Logo */}
        <a href="/">
          <img src={logoImg} alt="Richelle" width={150} height={50} />
        </a>

        {/* Navigation Links */}
        <div className="flex justify-center space-x-5 max-sm:hidden right-2">
          {navLists.map((nav) => (
            <div
              key={nav}
              className="px-4 text-lg cursor-pointer text-gray-400 hover:text-white transition-all"
            >
              <NavLink to={nav.route}>{nav.name}</NavLink>
            </div>
          ))}
          {/* <button className="bg-red-500 navgit-button text-white rounded opacity-50">
            <div className="flex-center text-lg  gap-2 font-normal">
              <img src={githubIcon} width={40} height={40} />
            </div>
          </button> */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
