import useServiceStore from "./serviceStore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

 function LoginForm () {
  const loginUser = useServiceStore(State => State.loginUser);
  const error = useServiceStore(state => state.error);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const handleChange = (e) => {
    setFormData({
      ...formData, [e.target.name]: e.target.value
    });
    set({eror: ""});
  };

  const handleSubmit = (e) => {
     e.preventDefault();

     const success = loginUser(email, password);
     if(success){
      Navigate("/home");
      setFormData({
        email: '',
        password: '',
      });
     }
  };

  return (
    <div className="min-h-screen sm:px-8 px-4 text-white  bg-black">
      <h1 className="md:text-5xl sm:text-3xl text-4xl text-center  font-bold">Welcome!</h1>
      <form onSubmit={handleSubmit} className="flex  flex-col gap-y-4 w-full mx-auto items-center">
        <h2 className="md:text-4xl sm:text-2xl text-lg text-center font-bold  mt-4 mb-6">Sign In</h2>
        <label className="font-edium"  htmlFor="email">Email</label>
        <input className="md:w-76 sm:w-64 focus:border-green-700 focus:ring-2 focus:ring-green-700 focus:outline-none
        px-4 py-2 mb-2 rounded-lg shadow-lg"
        id="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="enter your email:"
        required
        />

        <label htmlFor="password" className="font-medium" >Password</label>
        <input className="md:w-96 sm:w-64 focus:border-green-700 focus:ring-2 focus:ring-green-700 focus:outline-none
        px-4 py-2 mb-2 rounded-lg shadow-lg"
        id="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="enter your password:"
        required
        />

        <button className="px-6 py-2 rounded-lg shadow-lg cursor-pointer bg-green-700" type="submit" > Log In</button>
      </form>
    <p className="text-center md:text-xl sm:text-lg mt-2 text-base"> Don't have an account? {" "} 
      <Link className="text-green-600 hover:underline" to="/register">Sign Up here</Link>
    </p>
    </div>
  );
 }

 export default LoginForm;