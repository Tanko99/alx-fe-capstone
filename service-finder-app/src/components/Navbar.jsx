import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation(); // to highlight active link

  return (
    <nav className="flex justify-center gap-x-6 bg-purple-600 text-gray-100 py-4 shadow-md">
      <Link
        to="/home"
        className={`transition-colors duration-300 hover:text-yellow-300 ${
          location.pathname === "/home" ? "font-semibold underline" : ""
        }`}
      >
        Home
      </Link>
      <Link
        to="/services"
        className={`transition-colors duration-300 hover:text-yellow-300 ${
          location.pathname === "/services" ? "font-semibold underline" : ""
        }`}
      >
        Services
      </Link>
      <Link
        to="/"
        className={`transition-colors duration-300 hover:text-yellow-300 ${
          location.pathname === "/" ? "font-semibold underline" : ""
        }`}
      >
        Login/Register
      </Link>
      <Link
        to="/profile"
        className={`transition-colors duration-300 hover:text-yellow-300 ${
          location.pathname === "/profile" ? "font-semibold underline" : ""
        }`}
      >
        Profile
      </Link>
    </nav>
  );
};

export default Navbar;