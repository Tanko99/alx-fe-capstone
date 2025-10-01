import { create } from "zustand";

// Store with persistence in localStorage
const useServiceStore = create((set, get) => ({
  users: JSON.parse(localStorage.getItem("users")) || [],
  currentUser: JSON.parse(localStorage.getItem("currentUser")) || null,
  isAuthenticated: !!localStorage.getItem("currentUser"),
  error: null,

  // Register user
  registerUser: (userData) => {
    const { users } = get();
    const exists = users.find((u) => u.email === userData.email);

    if (exists) {
      set({ error: "User already exists" });
      return false;
    }

    const updatedUsers = [...users, userData];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    set({ users: updatedUsers, error: null });
    return true;
  },

  // Login user
  loginUser: (email, password) => {
    const { users } = get();
    const foundUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (foundUser) {
      localStorage.setItem("currentUser", JSON.stringify(foundUser));
      set({ currentUser: foundUser, isAuthenticated: true, error: null });
      return true;
    } else {
      set({ error: "Invalid email or password" });
      return false;
    }
  },

  // Logout user
  logoutUser: () => {
    localStorage.removeItem("currentUser");
    set({ currentUser: null, isAuthenticated: false, error: null });
  },

  // in order to search services by type and location, we define the following states
  serviceType: "",
  location: "",
  selectedCategory: "",

  // actions to search service by type and location and then select a ctegory form the popular categories and persist them in local storage
  setServiceType: (type) => {
    localStorage.setItem("searchServiceType", type);
    set({serviceType: type});
  }, 
  searchLocation: (loc) => {
    localStorage.setItem("searchLocation", loc);
    set({location: loc});
  },

  setSelectedCategory: (category) => {
    localStorage.setItem("setSelectedCategory", category);
    set({selectedCategory: category}); 
  },
}));

export default useServiceStore;