import useServiceStore from "../components/serviceStore";
import { UserCircle } from "lucide-react";

const ServicesPage = () => {
  const { users, serviceType, location, selectedCategory } = useServiceStore();

  // Ensure we only show providers (not seekers)
  const filteredProviders = users.filter((user) => {
    if (user.role !== "Provider") return false;

    const matchService =
      selectedCategory
        ? user.serviceType.toLowerCase() === selectedCategory.toLowerCase()
        : serviceType
        ? user.serviceType.toLowerCase().includes(serviceType.toLowerCase())
        : true;

    const matchLocation =
      location
        ? user.location.toLowerCase().includes(location.toLowerCase())
        : true;

    return matchService && matchLocation;
  });

  return (
    <div className="min-h-screen bg-black text-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Available Providers</h1>

      {filteredProviders.length > 0 ? (
        <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {filteredProviders.map((provider, idx) => (
            <li
              key={idx}
              className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center gap-y-2"
            >
              {/* Profile Image / Placeholder */}
              {provider.profileImage ? (
                <img
                  src={URL.createObjectURL(provider.profileImage)}
                  alt={provider.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
              ) : (
                <UserCircle className="w-16 h-16 text-gray-400" />
              )}

              <p className="font-bold text-lg">{provider.name}</p>
              <p>{provider.serviceType}</p>
              <p>{provider.location}</p>
              <p className="text-purple-400">{provider.contact}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No providers found for your search.</p>
      )}
    </div>
  );
};

export default ServicesPage;
