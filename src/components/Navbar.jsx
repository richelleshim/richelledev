import { logoImg } from "../utils";
import { navLists } from "../constants";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="w-full  py-5 sm:px-10 px-5 bg-black fixed top-0 left-0 z-10">
      <nav className="flex w-full justify-between items-center screen-max-width">
        {/* Logo */}

        <img src={logoImg} alt="Richelle" width={150} height={50} />

        {/* Navigation Links */}
        <div className="flex flex-1 justify-center space-x-5 max-sm:hidden">
          {navLists.map((nav) => (
            <div
              key={nav}
              className="px-4 text-lg cursor-pointer text-gray-100 hover:text-white transition-all"
            >
              <NavLink to={nav.route}>{nav.name}</NavLink>
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
