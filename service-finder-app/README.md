🧭 Service Finder App

A modern React + Tailwind CSS web application that connects service seekers with local service providers such as shoe menders, cleaners, electricians, and more.
Users can register, log in, search, filter, and view profiles of service providers by city, service type, or category.

🖥️ Tech Stack
Category	Tools / Frameworks
Frontend	React (Vite)
Styling	Tailwind CSS
State Management	Zustand
Version Control	Git & GitHub
Code Editor	Visual Studio Code
📂 Folder Structure
SERVICE-FINDER-APP/
│
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── LoginForm.jsx
│   │   ├── Navbar.jsx
│   │   ├── RegistrationForm.jsx
│   │   └── serviceStore.js
│   │
│   ├── Pages/
│   │   ├── HomePage.jsx
│   │   ├── LandingPage.jsx
│   │   ├── ProfilePage.jsx
│   │   └── ServicesPage.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── index.html
│
├── .gitignore
├── eslint.config.js
└── package.json

🚀 Features

✅ User Authentication — Registration and Login using localStorage.
✅ Dynamic Search & Filtering — Search for providers by service type or location.
✅ Service Provider Profiles — View provider details such as name, contact, and service offered.
✅ Editable User Profile — Logged-in users can update their personal info and upload a profile image.
✅ Responsive UI — Optimized for both mobile and desktop screens.
✅ Persistent State — Data is saved in localStorage via Zustand store.
✅ Hero Section & CTA — Engaging homepage with call-to-action that links to service listings.
✅ Modern Navbar & Footer — Clean and minimal layout with social media icons and copyright text.

⚙️ How to Run Locally

Clone the Repository

git clone https://github.com/yourusername/service-finder-app.git


Navigate to Project Directory

cd service-finder-app


Install Dependencies

npm install


Run the Development Server

npm run dev


Open in Browser
Visit → http://localhost:5173/

🧠 Project Logic Overview

State Management:
All data (users, currentUser, service filters) are managed via Zustand and persisted in localStorage.

Search & Filter:
The ServicesPage filters providers based on:

Selected category

Service type input

Location input

Profile Update:
Users can edit and save their profile details (name, service type, location, contact, and image).
(Currently, the Zustand store doesn’t auto-update after editing — this will be fixed soon.)

🧩 Known Issues / To Fix

 Zustand store doesn’t refresh after profile update (requires reactive store sync).

 Add loading indicators for async actions.

 Improve form validation for registration and login pages.

 Add a global toast/notification system for better UX.

💡 Future Enhancements

✅ Connect to a backend (Node.js / Firebase / Supabase) for real database storage.

✅ Add user roles & authentication via JWT.

✅ Enable messaging between seekers and providers.

✅ Add service ratings and reviews.

✅ Improve UI with animation and better category icons.

👨‍💻 Author

Tanko Fabrice Ngala
Frontend Developer | ALX Africa Learner
LinkedIn

