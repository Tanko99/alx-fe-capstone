import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Scissors, Hammer, Paintbrush, Brush, Utensils } from "lucide-react";
import useServiceStore from "../components/serviceStore";



function  HomePage() {
    const [serviceType, setServiceType] = useState('');
    const [location, setLocation] = useState('');
    const navigate = useNavigate();

    const { setServiceType: saveServiceType, setLocation: saveLocation, setSelectedCategory} = useServiceStore();


    const handleSubmit = (event) => {
        event.preventDefault();
        saveServiceType(serviceType);
        saveLocation(location);

        //delays for miliseconds to search and opens in services page
        setTimeout(() => {
            navigate("?services");
        }, 100);
        
        // this will clear the input fields
        setServiceType('');
        setLocation('');
    };

    return (
        <div className="min-h-screen bg-black text-gray-100 px-4 py-6 mx-auto  sm:px-8">
            <header>
                <Navbar />
                <h1 className="md:text-5xl sm:text-3xl text-2xl sm:text-teft  text-center sm:text-left  mt-20 font-bold">Find local professionals for your services!</h1>
            </header>
            <div>
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row w-full mx-auto  max-w-2xl gap-x-4 sm:gap-y-4 mt-10  ">
                    <input className="px-4 py-2 flex-1 w-full sm:w-auto focus:border-green-600 focus:ring-2 focus:ring-green-600
                    focus:outline-none rounded-lg shadow-lg"
                    type="text"
                    value={serviceType} 
                    onChange={(e) => setServiceType(e.target.value)} 
                    placeholder="what kind of service do you need?"  />

                    <input  className="px-4 py-2 flex-1 w-full sm:w-auto focus:border-green-600 focus:ring-2 focus:ring-green-600
                    focus:outline-none rounded-lg shadow-lg "
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)} 
                    placeholder="enter city to see services" />

                    <button className="px-4 py-2 bg-green-700 hover:bg-green-900 rounded-lg shadow-lg w-full sm:w-auto transition cursor-pointer font-bold" type="submit"> Search</button>
                </form>
            </div>
            <div>
                <h2 className=" text-center sm:text-left  mb-10 font-bold  md:text-4xl sm:text-3xl">Popular categories </h2>
                
             </div>
             <div className="grid grid-cols-2 sm:grid-cols-3 gap--4 md:grid-cols-4 lg:grid-cols-5  justify-items-center">
                <button onClick={() => {
                    setSelectedCategory("Barbing");
                    navigate("/services");
                }} className="bg-gray-600 rounded-lg font-bold 
                py-4 px-6"> <Scissors size={45} /> Barbing 
                </button>
                <button onClick={() => {
                    setSelectedCategory("Shoe mending");
                    navigate("/services");
                 }} className="bg-gray-600 rounded-lg font-bold 
                py-4 px-6">
                   <Hammer size={45} /> Shoe mending
                 </button>
                 <button onClick={() => {
                    setSelectedCategory("Painting");
                    navigate("/services");
                 }} className="bg-gray-600 rounded-lg font-bold 
                py-4 px-6">
                  <Paintbrush size={45}  /> Painting
                 </button>
                 <button onClick={() => {
                    setSelectedCategory("Cleaning");
                    navigate("/services");
                 }} className="bg-gray-600 rounded-lg font-bold 
                py-4 px-6">
                  <Brush size={45} /> Cleaning 
                 </button>
                 <button onClick={() => {
                    setSelectedCategory("Cooking")
                    navigate("/services");
                 }} className="bg-gray-600 rounded-lg font-bold 
                py-4 px-6" >
                  <Utensils size={45} /> Cooking
                 </button>
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;