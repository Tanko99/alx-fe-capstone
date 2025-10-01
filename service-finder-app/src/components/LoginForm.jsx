import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import useServiceStore from "./serviceStore";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const loginUser = useServiceStore((state) => state.loginUser);
  const error = useServiceStore((state) => state.error);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const success = loginUser(email, password);

    if (success) {
      navigate("/home");  // go to homepage
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex flex-col min-h-screen p-4 sm:p-8 justify-center bg-black">
      <h1 className="text-gray-100 text-center text-3xl sm:text-xl md:text-3xl font-bold mt-10">
        Sign In
      </h1>

      <form onSubmit={handleSubmit} className="items-center justify-center shadow-md 
      gap-y-4 flex flex-col">
        <label className="text-gray-100 text-lg mb-1 font-medium" htmlFor="email">
          Email
        </label>
        <input
          className="w-full text-center text-gray-100 focus:border-purple-500 focus:ring-2 focus:ring-purple-600 sm:w-64 text-sm md:text-lg px-4 py-2 bg-black rounded-md shadow-lg outline-none"
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          required
        />

        <label className="text-gray-100 text-lg mb-1" htmlFor="password">
          Password
        </label>
        <input
          className="w-full text-center text-gray-100 bg-black focus:border-purple-500 rounded-md focus:ring-2 focus:ring-purple-600 sm:w-64 text-sm md:text-lg mb-6 px-4 py-2"
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />

        <button
          className="py-2 px-6 text-gray-100 bg-purple-600 font-bold rounded-md hover:bg-purple-900"
          type="submit"
        >
          Sign In
        </button>
      </form>

      {error && <p className="text-red-600 text-base"> {error} </p>}
    </div>
  );
};

export default LoginForm;
