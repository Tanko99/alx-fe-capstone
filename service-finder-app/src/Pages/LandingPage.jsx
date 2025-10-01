import LoginForm from "../components/LoginForm";
import { Link } from "react-router-dom";


const LandingPage = () => {
    return (
        <div className="min-h-screen flex flex-col p-4 sm:p8 justify-center items-center bg-black">
            <div className=" w-full sm:w-96 flex flex-col justify-center items-center bg-black">
                <h1 className="text-center md:text-5xl font-bold sm:text-2xll text-gray-100 font-bold">Welcome back!</h1>

                <LoginForm  />
                <p className="text-gray-100 text-sm  md:text-lg font-medium">Don't have an account? {" "}
                    <Link className="text-blue-500 hover:underline" to="/register" >Register Now!</Link>
                </p>
            </div>
        </div>
    );
};


export  default LandingPage;