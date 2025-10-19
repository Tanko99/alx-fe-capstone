import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div className="bg-black text-gray-300 min-h-screen md:px-8 px-4"> 
       <Navbar />
       <div className="max-w-3xl text-center flex flex-col mx-auto items-center justify-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold  mb-6 text-green-200">
          Find Trusted Service Providers Near You
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          ServiceFinder connects you instantly with skilled professionals in your area          From electricians to plumbers, cleaners, and more..
        </p>
        <Link
          to="/services"
          className="bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-8 rounded-full transition duration-300"
        >
          Find Services
        </Link>
      </div>
      <Footer />
    </div>
  
  );
}

export default HomePage;