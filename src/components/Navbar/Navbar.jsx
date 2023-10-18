import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
//import userDefaultPicture from "../../assets/user.png";

//import Logo from '../../assets/images/logo.jpg';
import { AuthContext } from "../../authentication/Authprovider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false); // To control the mobile dropdown menu

  const handleSignOut = () => {
        logOut().then().catch();
  }

  const navLinks = (
    <div className={`${menuOpen ? 'block' : 'hidden'} lg:flex`}>
      <li className="mt-3 lg:mt-0">
        <NavLink exact to="/" activeClassName="text-red-500">Home</NavLink>
      </li>
      <li className="mt-3 lg:mt-0">
        <NavLink to="/addproduct" activeClassName="text-red-500">Add Product</NavLink>
      </li>
      <li className="mt-3 lg:mt-0">
        <NavLink to="/mycart" activeClassName="text-red-500">My Cart</NavLink>
      </li>
   
    </div>
  );

  return (
    <div className="navbar bg-slate-300 h-32 flex items-center justify-between px-6 mb-4">
      <div className="flex items-center mr-40">
        <img src="" alt="Logo" className="h-24 w-24 lg:w-48 rounded-full" />
      </div>

      <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden">
        {/* Hamburger icon */}
        ☰
      </button>

      <div className="navbar-center hidden lg:block">
        <ul className="menu menu-horizontal px-1 space-x-4">{navLinks}</ul>
      </div>
      
      <div className="navbar-end flex items-center">
        {user ? (
          <>
            <div className="flex flex-col items-end mr-2">
              <span className="text-sm font-bold">{user.displayName}</span>
            </div>
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar mr-2">
              <div className="w-10 rounded-full">
                <img src="" alt="User Avatar" />
              </div>
            </label>
            <button onClick={handleSignOut} className="btn bg-red-400 text-white px-4 py-2 rounded block text-center ml-2">Sign Out</button>
          </>
        ) : (
          <Link to="/login" className="bg-red-400 text-white px-4 py-2 rounded block text-center ml-2">
            Login/Register
          </Link>
        )}
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="absolute top-32 left-0 right-0 z-20 bg-slate-300 lg:hidden">
          <ul className="menu py-4">{navLinks}</ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
