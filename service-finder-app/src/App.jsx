import {  Routes, Route  } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import RegistrationForm from "./components/RegistrationForm";
import HomePage from "./Pages/HomePage";
import ServicesPage from "./Pages/ServicesPage";
import ProfilePage from "./Pages/ProfilePage";
import useServiceStore from "./components/serviceStore";

const App = () => {
  const isAuthenticated = useServiceStore(state => state.isAunthenticated)
  return (
    <div>

      <Routes>
        <Route path="/"    element={<LandingPage />} />
        <Route path="/register"    element={<RegistrationForm />} />
        <Route path="home" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
};


export default App;