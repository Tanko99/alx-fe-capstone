import { useState } from "react";
import useServiceStore from "./serviceStore";
import { UserCircle } from "lucide-react";

const RegistrationForm = () => {
  const [role, setRole] = useState("Seeker");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [location, setLocation] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [profileImage, setProfileImage] = useState(null);

  const registerUser = useServiceStore((state) => state.registerUser);
  const error = useServiceStore((state) => state.error);

  const handleSubmit = (event) => {
    event.preventDefault();

    const userData = {
      role,
      name,
      email,
      password,
      contact,
      ...(role === "Provider" && { location, serviceType, profileImage }),
    };

    const success = registerUser(userData);

    if (success) {
      setName("");
      setEmail("");
      setPassword("");
      setContact("");
      setLocation("");
      setServiceType("");
      setProfileImage(null);
      setRole("Seeker");
    }
  };

  return (
    <div className="min-h-screen  sm:px-8 px-4 py-6 text-white  items-center items-center  p-4 md:p-8   bg-black">
      <h1 className="mb-6 text-center md:text-4xl text-xl sm:text-2xl text-gray-100">Register</h1>
      <form onSubmit={handleSubmit} className=" w-full  mx-auto flex flex-col gap-y-4 
       justify-center items-center bg-black rounded-xl  shadow-lg p-6 scrol-y-auto">
        {/* Role Dropdown */}
        <label className=" text-gray-100 text-lg font-medium mb-1" htmlFor="role">Role</label>
        <select className="md:w-96 sm:w-64 px-4 py-2 text-gray-600  focus:border-green-600 focus:ring-2
        focus:ring-green-600  outline-none rounded-lg shadow-lg"
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option className="text-gray-100 font-bold" value="Seeker">Service Seeker</option>
          <option className="text-gray-100" value="Provider">Service Provider</option>
        </select>

        {/* Common Fields for bothseekers and providers */}
        <label className=" text-gray-100 text-lg font-medium mb-1" htmlFor="name">Full Name</label>
        <input className="md:w-96 px-4 py-2 mb-2  
        rounded-lg focus:border-green-600 focus:ring-2 focus:ring-green-600 outline-none 
         sm-w-64 text-sm md:text-lg shadow-lg"
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your full name"
          required
        />

        <label className=" text-gray-100 text-lg font-medium mb-1" htmlFor="email">Email</label>
        <input className="w-full px-4 py-2 mb-2  
        rounded-lg focus:border-green-600 focus:ring-2 focus:ring-green-600 outline-none 
        sm:w-64 text-sn md:text-lg shadow-lg"
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />

        <label className=" text-gray-100 text-lg font-medium mb-1" htmlFor="password">Password</label>
        <input className="md:w-96 px-4 py-2 mb-2 
        rounded-lg focus:border-green-600 focus:ring-2 focus:ring-green-600 outline-none
        sm:w-64  text-sm md:text-lg  shadow-lg"
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          minLength={8}
          required
        />

        <label className=" text-gray-100 text-lg font-medium mb-1"  htmlFor="contact">Contact</label>
        <input className="md:w-96 px-4 py-2 mb-2 
        rounded-lg focus:border-green-600 focus:ring-2 focus:ring-green-600 outline-none 
         sm:w-64 text-sm md:text-lg shadow-lg"
          id="contact"
          type="tel"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="Enter your phone number"
          required
        />

        {/* Provider-only fields */}
        {role === "Provider" && (
          <>
            <label className=" text-gray-100 text-lg font-medium mb-1"  htmlFor="location">Location</label>
            <input className="md:w-96 px-4 py-2 mb-2 
               rounded-lg focus:border-green-600 focus:ring-2 focus:ring-green-600 outline-none 
               sm:w-64 text-sm md:text-lg shadow-lg"
              id="location"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter your city"
              required
            />

            <label className=" text-gray-100 text-lg font-medium mb-1"  htmlFor="service">Service Type</label>
            <input className="md:w-06 px-4 py-2 mb-2 
              rounded-lg focus:border-green-600 focus:ring-2 focus:ring-green-600 outline-none 
              sm:w-64 text-sm md:text-lg shadow-lg"
              id="service"
              type="text"
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              placeholder="E.g. barbing, cleaning"
              required
            />

            <label className=" text-gray-100md:w-96 sm:w-64 text-center px-4 py-2 mb-2 text-lg rounded-lg shadow-lg font-medium bg-green-600 mt-2" htmlFor="profileImage">Upload image </label>
            <div className="flex flex-col items-center mb-2">
  {profileImage ? (
    // Show preview if user picked a file
    <img
      src={URL.createObjectURL(profileImage)}
      alt="Preview"
      className="w-32 h-32 rounded-full object-cover bg-gray-300  mb-2"
    />
  ) : (
    // Show fallback icon if no image
    <UserCircle className="w-32 h-32   mb-6" />
  )}

  <input
    id="profileImage"
    type="file"
    className="hidden"
    onChange={(e) => setProfileImage(e.target.files[0])}
  />
</div>
          </>
        )}

        <button className="px-4 py-2 md:w-96 sm:w-64 bg-green-600 text-gray-100
        font-bold cursor-pointer rounded-lg hover:bg-green-900" type="submit">Create Account</button>
      </form>

      {error && <p className="text-red-600 font-bold">{error}</p>}
    </div>
  );
};

export  default RegistrationForm;