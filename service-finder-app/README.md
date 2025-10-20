# 🛠️ Service Finder App

A **React + Tailwind CSS** web application that connects **service seekers** with **service providers**.  
Users can create accounts, log in, and search for nearby providers such as *cleaners, shoe menders, electricians*, etc., filtered by city, service type, or category.  

---

## 🚀 Overview

**Service Finder** simplifies access to local services by connecting users (seekers) to skilled providers (vendors).  
The app features **search filtering**, **user authentication**, and **profile management** — all built with modern web tools.

---

## 🌟 Features

- 🔐 **User Authentication** — Register and login as a Seeker or Provider  
- 🧭 **Homepage (Hero Section)** — Introduces the platform with a CTA to explore services  
- 🔍 **Smart Search & Filtering** — Find providers by:
  - City / Location  
  - Service Type  
  - Category  
- 👩‍🔧 **Service Listing Page** — Displays available providers dynamically  
- 👤 **Profile Page** — Users can view and update their info  
- 💻 **Responsive Design** — Built with Tailwind CSS for all device sizes  
- ⚙️ **State Management** — Handled via [Zustand](https://zustand-demo.pmnd.rs/) for simplicity and performance  
- 🧰 **Version Control** — Managed using Git and GitHub  

---

## 🧩 Tech Stack

| Category | Technology Used |
|-----------|----------------|
| **Frontend Framework** | [React](https://react.dev/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) |
| **State Management** | [Zustand](https://github.com/pmndrs/zustand) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Package Manager** | npm |
| **Code Editor** | [Visual Studio Code](https://code.visualstudio.com/) |
| **Version Control** | Git + GitHub |

---

## 📂 Folder Structure

service-finder-app/
│
├── src/
│ ├── components/
│ │ ├── Footer.jsx
│ │ ├── LoginForm.jsx
│ │ ├── Navbar.jsx
│ │ ├── RegistrationForm.jsx
│ │ └── serviceStore.js
│ │
│ ├── Pages/
│ │ ├── HomePage.jsx
│ │ ├── LandingPage.jsx
│ │ ├── ProfilePage.jsx
│ │ └── ServicesPage.jsx
│ │
│ ├── App.jsx
│ ├── main.jsx
│ ├── index.css
│ └── index.html
│
├── .gitignore
├── eslint.config.js
└── README.md

yaml
Copy code

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com/<your-username>/service-finder-app.git
Navigate into the project directory

bash
Copy code
cd service-finder-app
Install dependencies

bash
Copy code
npm install
Run the development server

bash
Copy code
npm run dev
Open your browser and go to
👉 http://localhost:5173 (or whichever port Vite assigns)

🧠 Usage Guide
Register a new user (as a Seeker or Provider)

Log in using your credentials

Explore the homepage hero section, then click “Find Services” to access the Services page

Use the search bar to filter providers by:

Location

Type of service

Category

Click on Profile to update your user information

🧪 Known Issues
⚠️ Profile Update Bug:
Currently, the Zustand store does not update automatically when users edit their profile info.
This is being fixed in the next version.

🧭 Future Improvements
Add backend integration (Node.js / Firebase)

Improve profile image upload

Add rating & review system

Enable chat between seekers and providers

🎥 Demo Video
Watch the project walkthrough here:
👉 Service Finder App Demo on Loom
(Replace with your Loom video link once ready)

👨‍💻 Author
Tanko Fabrice Ngala
📍 Frontend Developer — ALX Software Engineering Program
🔗 LinkedIn
🧠 Passionate about building digital solutions that connect people and services.

📝 License
This project is open-source and available under the MIT License.

Built with ❤️ by Tanko Fabrice Ngala


---





