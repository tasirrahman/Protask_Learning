# ProTask – Unified Task Management System

**ProTask** is a cross-platform task management application built for individuals and teams to efficiently organize, manage, and track their tasks. This project is designed for learning and experimentation with modern frontend, backend, and backend-as-a-service technologies.

---

## 📌 Project Description

ProTask includes:

- A **web-based dashboard** using **React** and **Next.js**
- A **mobile application** using **Flutter**
- Integration with **MongoDB** and **Supabase** for data handling and authentication

The project focuses on production-level architecture, secure code practices, and clean state management.

---

## 🎯 Primary Objectives

- Develop scalable, secure, and maintainable code using modern software engineering principles
- Use **Redux** (React/Next.js) and **Provider/BLoC** (Flutter) for robust state management
- Set up a modular **Node.js** backend (for MongoDB) with secure REST APIs
- Implement **Supabase** for real-time synchronization and backend-as-a-service functionality
- Evaluate BaaS approaches through practical implementation

---

## 🧰 Tech Stack Overview

| Platform             | Stack                                       |
|----------------------|---------------------------------------------|
| **Frontend (Web)**   | React, Next.js, Redux, TailwindCSS          |
| **Frontend (Mobile)**| Flutter, Provider, BLoC                     |
| **Backend**          | Node.js (with MongoDB), Supabase SDK        |
| **Databases**        | MongoDB, Supabase Postgres                  |
| **Authentication**   | Custom JWT (Node.js), Supabase Auth         |
| **Storage**          | Supabase Buckets                            |
| **Hosting**          | Vercel, Render, Supabase Studio (optional)  |

---

## 🔑 Key Features

### 1. User Authentication
- Email/Password registration & login
- JWT token-based auth (Node.js + MongoDB)
- OAuth support via Supabase

### 2. Task Management
- Create, Read, Update, Delete (CRUD) operations
- Fields: `title`, `description`, `priority`, `due_date`, `status`, `assigned_to`
- Status flow: `To Do`, `In Progress`, `Completed`

### 3. Team Collaboration
- Project and team management
- Assign and manage tasks per user/team
- Kanban-style task board (web)

### 4. Real-Time Updates
- Supabase listeners for live data synchronization

### 5. Notification System
- Push notifications for mobile (Flutter)
- In-app alerts for due tasks or changes

### 6. Cross-platform UI
- Responsive React/Next.js web dashboard
- Flutter app for Android and iOS

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- Flutter SDK
- MongoDB (local or Atlas)
- Supabase account

### Setup Instructions
1. Clone the repository
2. Set up environment variables
3. Install dependencies for both web and mobile
4. Run development servers

Detailed setup instructions are available in the project documentation.

---

## 📊 Architecture Overview

ProTask implements a hybrid backend approach:
- **Custom Node.js Backend**: For core data operations with MongoDB
- **Supabase BaaS**: For real-time features, authentication, and storage

This dual approach allows for learning and comparing different backend strategies within a single project.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.