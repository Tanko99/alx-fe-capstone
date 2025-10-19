import { Link } from "react-router-dom";

function Navbar(){
  return (
    <nav className="bg-green-900 py-8 px-10">
      <div className="flex flex-col md:flex-row justify-between gap-6">
        <h1 className="text-xl font-bold text-left">ServiceFinder</h1>
        <div className="flex flex-row gap-6">
          <Link className="text-lg font-bold px-2 py-1 rounded-lg hover:bg-blue-700" to="/home">Home</Link>
          <Link  className="text-lg font-bold px-2 py-1 rounded-lg hover:bg-blue-700" to="/services">Services</Link>
          <Link  className="text-lg font-bold px-2 py-1 rounded-lg hover:bg-blue-700" to="/">Login/Register</Link>
          <Link  className="text-lg font-bold px-2 py-1 rounded-lg hover:bg-blue-700" to="/profile">Profile</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;