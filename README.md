# ✅ Katomaran Todo Task Manager

A clean and responsive full-stack Todo app built for the **Katomaran Full Stack Hackathon**.  
It features Google login, task creation, editing, deletion, and real-time updates — all hosted free on Vercel and Render.

---

## 🔗 Live Links

- 🌐 Frontend: [https://todo-fsil-gokul75rvns-projects.vercel.app](https://todo-fsil-gokul75rvns-projects.vercel.app)
- ⚙️ Backend: [https://todo-backend-kgmy.onrender.com](https://todo-backend-kgmy.onrender.com)

---

## ✨ Features

- 🔐 Google OAuth Login
- 📝 Create, Edit, Delete Tasks
- 🚥 Task Status Handling
- 📨 Share Tasks via Email
- 🧠 Modern UI with Tailwind CSS
- 💻 Desktop-first Design
- 📦 Fully Deployed with Free Hosting (Vercel + Render)

---

## 🛠 Tech Stack

| Layer       | Tech                     |
|-------------|--------------------------|
| Frontend    | React, Tailwind CSS, Axios |
| Auth        | Google OAuth 2.0, JWT    |
| Backend     | Node.js, Express         |
| Database    | MongoDB Atlas            |
| Hosting     | Vercel (frontend), Render (backend) |

---

## 📁 Folder Structure

todo/
├── backend/ # Node.js + Express server
│ ├── models/ # Mongoose models
│ ├── routes/ # Auth & Task APIs
│ ├── .env # MongoDB connection string
│ └── server.js # Server entry
├── frontend/ # React frontend
│ ├── src/
│ │ ├── pages/ # Login, Dashboard components
│ │ └── App.js # Router setup
│ └── .env # Base API URL
└── README.md # Project overview



---

## 🚀 How to Run Locally

### 🔧 1. Clone the repo

```bash
git clone https://github.com/Gokul75rvn/todo.git
cd todo

cd backend
npm install
🔐 Google OAuth Setup
To use Google login:

Register app at Google Cloud Console

Set Authorized Origin: https://todo-fsil-gokul75rvns-projects.vercel.app

Add to .env:
REACT_APP_GOOGLE_CLIENT_ID=<your-client-id>

🧠 Assumptions & Notes
Desktop-first UI (mobile layout skipped per requirement)

Shared task feature uses email only (no full account linking)

Simple tag UI prepared but filtering logic is minimal

Real-time sync uses refetch (no WebSocket)
