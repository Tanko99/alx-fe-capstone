import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const linkClasses = (path) =>
    `text-lg font-bold px-3 py-2 rounded-lg transition ${
      location.pathname === path
        ? "bg-green-600 text-white"
        : "hover:bg-green-700 text-gray-200"
    }`;

  return (
    <nav className="bg-green-900 py-4 px-6 sticky top-0 z-50 shadow-lg">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">ServiceFinder</h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6">
          <Link className={linkClasses("/home")} to="/home">Home</Link>
          <Link className={linkClasses("/services")} to="/services">Services</Link>
          <Link className={linkClasses("/")} to="/">Login/Register</Link>
          <Link className={linkClasses("/profile")} to="/profile">Profile</Link>
        </div>

        {/* Hamburger Icon (mobile) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col mt-4 space-y-3 md:hidden">
          <Link className={linkClasses("/home")} to="/home" onClick={toggleMenu}>
            Home
          </Link>
          <Link className={linkClasses("/services")} to="/services" onClick={toggleMenu}>
            Services
          </Link>
          <Link className={linkClasses("/")} to="/" onClick={toggleMenu}>
            Login/Register
          </Link>
          <Link className={linkClasses("/profile")} to="/profile" onClick={toggleMenu}>
            Profile
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;