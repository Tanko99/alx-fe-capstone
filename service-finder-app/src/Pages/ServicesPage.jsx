import useServiceStore from "../components/serviceStore";
import { UserCircle } from "lucide-react";

function ServicesPage () {
  const { 
    users, 
    serviceType, 
    location, 
    selectedCategory, 
    setServiceType, 
    setLocation, 
    setSelectedCategory 
  } = useServiceStore();

  // Filter providers based on search
  const filteredProviders = users.filter(user => user.role === "Provider")
    .filter(user =>
      (!selectedCategory || user.serviceType.toLowerCase().includes(selectedCategory.toLowerCase()))
    )
    .filter(user =>
      (!serviceType || user.serviceType.toLowerCase().includes(serviceType.toLowerCase()))
    )
    .filter(user =>
      (!location || user.location.toLowerCase().includes(location.toLowerCase()))
    );

  return (
    <div className="min-h-screen bg-black text-gray-100 p-6">
      <h1 className="text-2xl sm:text-3xl md:text-4xl text-center font-bold mb-6">
        Available Service Providers
      </h1>

      {/* Search Inputs */}
      <div className="flex flex-col md:flex-row gap-4 mb-7 tezt=gray-100 justify-center items-center">
        <input className="px-4 py-2 focus:border-green-600 focus:ring-2 focus:ring-green-600
        focus:outline-none rounded-lg shadow-lg w-full sm:w-auto"
          type="text"
          value={serviceType}
          onChange={(e) => setServiceType(e.target.value)}
          placeholder="Search by service type"
        
        />

        <input className="px-4 py-2 focus:border-green-600 focus:ring-2 focus:ring-green-600
        focus:outline-none rounded-lg shadow-lg w-full sm:w-auto"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Search by location"
        
        />

        <input className="px-4 py-2 focus:border-green-600 focus:ring-2 focus:ring-green-600
        focus:outline-none rounded-lg shadow-lg w-full sm:w-auto"
          type="text"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          placeholder="Filter by category"
        
        />
      </div>

      {/* Providers List */}
      {filteredProviders.length > 0 ? (
        <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProviders.map((provider, idx) => (
            <li
              key={idx}
              className="bg-gray-900 p-4 rounded-lg shadow-lg flex flex-col items-center gap-y-2"
            >
              {/* Profile Image / Placeholder */}
              {provider.profileImage ? (
                <img
                  src={URL.createObjectURL(provider.profileImage)}
                  alt={provider.name}
                  className="w-38 h-38 rounded-full object-cover"
                />
              ) : (
                <UserCircle className="w-38 h-38 text-gray-500" />
              )}

              <p className="font-bold text-lg">{provider.name}</p>
              <p>{provider.serviceType}</p>
              <p>{provider.location}</p>
              <p className="text-green-400">{provider.contact}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center mt-4">No providers found for your search.</p>
      )}
    </div>
  );
}

export default ServicesPage;
