import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
//import userDefaultPicture from "../../assets/user.png";

import Logo from "../../assets/logo/carlogo1.png";
import { AuthContext } from "../../authentication/Authprovider";
import { useTheme } from "../../authentication/ThemeState/ThemeContext";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false); // To control the mobile dropdown menu
  const { theme } = useTheme();

  const handleSignOut = () => {
    logOut().then().catch();
  };

  const navLinks = (
    <div className={`${menuOpen ? "block" : "hidden"} lg:flex`}>
      <li className="mt-3 lg:mt-0">
        <NavLink exact to="/" activeClassName="text-red-500">
          Home
        </NavLink>
      </li>
      <li className="mt-3 lg:mt-0">
        <NavLink to="/addproduct" activeClassName="text-red-500">
          Add Product
        </NavLink>
      </li>
      <li className="mt-3 lg:mt-0">
        <NavLink to="/mycart" activeClassName="text-red-500">
          My Cart
        </NavLink>
      </li>
    </div>
  );

  return (
    <div
      className={`navbar h-32 flex items-center justify-between px-6 ${
        theme === "dark" ? "bg-gray-900" : "bg-slate-300"
      }`}
    >
      <div className="flex items-center mr-40">
        <img
          src={Logo}
          alt="Logo"
          className="h-16 w-16 md:h-24 md:w-24 lg:h-28 lg:w-28 xl:w-48 rounded-md"
        />
      </div>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className={`text-2xl lg:hidden ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        ☰
      </button>

      <div className="navbar-center hidden lg:block">
        <ul
          className={`menu menu-horizontal px-1 space-x-4 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          {navLinks}
        </ul>
      </div>

      <div className="navbar-end flex items-center">
        {user ? (
          <>
            <div className="flex flex-col items-end mr-1 md:mr-2 lg:mr-4">
              <span
                className={`text-sm font-bold ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
              >
                {user.displayName}
              </span>
            </div>
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar mr-2"
            >
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} alt="User Avatar" />
              </div>
            </label>
            <button
              onClick={handleSignOut}
              className="btn bg-red-400 text-white px-3 py-1 md:px-4 md:py-2 rounded block text-center ml-1 md:ml-2 lg:ml-4"
            >
              Sign Out
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="bg-red-400 text-white px-4 py-2 rounded block text-center ml-2"
          >
            Login/Register
          </Link>
        )}
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div
          className={`absolute top-32 left-4 right-4 z-20 lg:hidden ${
            theme === "dark" ? "bg-gray-900" : "bg-slate-300"
          }`}
        >
          <ul
            className={`menu py-4 ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            {navLinks}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
