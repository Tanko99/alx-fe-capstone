import { useState } from "react";
import Navbar from "../components/Navbar";
import { Scissors, Hammer, Paintbrush, Brush, Utensils } from "lucide-react";
import useServiceStore from "../components/serviceStore";



const HomePage = () => {
    const [serviceType, setServiceType] = useState('');
    const [location, setLocation] = useState('');

    const { setServiceType: saveServiceType, setLocation: saveLocation, setSelectedCategory} = useServiceStore();


    const handleSubmit = (event) => {
        event.preventDefault();

        saveServiceType(serviceType);
        saveLocation(location);

        // opens in services page 

        window.location.href = "/services";
        // this will clear the input fields

        setServiceType('');
        setLocation('');
    };

    return (
        <div className="min-h-screen bg-black text-gray-100 md:p-4 sm:p-8">
            <header>
                <Navbar />
                <h1 className="md:text-4xl sm:text-2xl text- xl  mt-20 font-bold">Find local professionals for your services!</h1>
            </header>
            <div>
                <form onSubmit={handleSubmit} className="flex justify-center gap-x-5 mt-10  ">
                    <input className="px-4 py-2 focus:border-purple-600 focus:ring-2 focus:ring-purple-600
                    focus:outline-none rounded-md shadow-sm w-64"
                    type="text"
                    value={serviceType} 
                    onChange={(e) => setServiceType(e.target.value)} 
                    placeholder="what kind of service do you need?"  />

                    <input  className="px-4 py-2 focus:border-purple-600 focus:ring-2 focus:ring-purple-600
                    focus:outline-none rounded-md shadow-sm w-64"
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)} 
                    placeholder="enter city to see services" />

                    <button className="px-4 py-2 bg-green-700 rounded-lg shadow-lg font-bold" type="submit"> Search</button>
                </form>
            </div>
            <div>
                <h2 className="md:text-3xl sm:text-xl text-lg   mt-10 font-bold  md:text-3xl sm:text-xl">Popular categories </h2>
                
             </div>
             <div className="flex  mb-6 justify-center gap-x-4">
                <button onClick={() => {
                    setSelectedCategory("Barbing");
                    window.location.href="/services";
                }} className="bg-bgray-600 rounded-lg font-bold 
                py-4 px-6"> <Scissors size={20} /> Barbing 
                </button>
                <button onClick={() => {
                    setSelectedCategory("Shoe mending");
                    window.location.href= "/services" ;
                 }} className="bg-blue-600 rounded-lg font-bold 
                py-4 px-6">
                   <Hammer size={25} /> Shoe mending
                 </button>
                 <button onClick={() => {
                    setSelectedCategory("Painting");
                    window.location.href = "/services";
                 }} className="bg-blue-600 rounded-lg font-bold 
                py-4 px-6">
                  <Paintbrush size={25}  /> Painting
                 </button>
                 <button onClick={() => {
                    setSelectedCategory("Cleaning");
                    window.location.href ="/services";
                 }} className="bg-blue-600 rounded-lg font-bold 
                py-4 px-6">
                  <Brush size={25} /> Cleaning 
                 </button>
                 <button onClick={() => {
                    setSelectedCategory("Cooking")
                    window.location.href = "/services"
                 }} className="bg-blue-600 rounded-lg font-bold 
                py-4 px-6" >
                  <Utensils size={25} /> Cooking
                 </button>
            </div>
        </div>
    );
};

export default HomePage;