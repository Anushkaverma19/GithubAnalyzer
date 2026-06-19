#  GitHub Analyzer

GitHub Analyzer is a full-stack MERN application that allows users to analyze any GitHub profile in seconds. It fetches real-time data from the GitHub API and displays insights such as repositories, followers, following, bio, and profile statistics in a clean and interactive dashboard. The application also stores analyzed profiles in a MySQL database and includes secure authentication using JWT.

---

##  Features

- Secure authentication using JWT (Login / Signup)
- Analyze any GitHub user profile in real-time
- View followers, following, repositories, and bio
- AI-style summary of developer profile
- Store analyzed profiles in MySQL database
- View previously searched profiles (history)
- REST API built with Express.js
- Responsive UI built with React.js
- Fully deployed (Frontend: Vercel, Backend: Render)

---

## Tech Stack

- **Frontend:** React.js, Axios, CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MySQL (Sequelize ORM)  
- **Authentication:** JWT (JSON Web Token)  
- **API:** GitHub REST API  
- **Deployment:** Vercel (Frontend), Render (Backend)

---

## Project Structure

github-analyzer/
│
├── backend/
│ ├── config/ # Database configuration (Sequelize setup)
│ ├── controllers/ # Business logic (API functions)
│ ├── models/ # Database models (MySQL tables)
│ ├── routes/ # API routes (auth, github)
│ ├── middleware/ # Auth middleware (JWT protection)
│ ├── server.js # Entry point of backend
│ └── .env # Environment variables
│
├── frontend/
│ ├── public/ # Static files
│ ├── src/
│ │ ├── components/ # Reusable UI components
│ │ ├── pages/ # Pages (Home, Login, Signup)
│ │ ├── services/ # API calls (axios)
│ │ ├── styles/ # CSS files
│ │ ├── App.js # Main app component
│ │ └── index.js # React entry point
│ ├── package.json
│ └── .env
│
└── README.md
