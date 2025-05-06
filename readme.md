# ProTask – Unified Task Management System

**ProTask** is a cross-platform task management application built for individuals and teams to efficiently organize, manage, and track their tasks. This project is designed for learning and experimentation with modern frontend, backend, and backend-as-a-service technologies.

---

## 📌 Project Description

ProTask includes:

- A **web-based dashboard** using **React** and **Next.js**
- A **mobile application** using **Flutter**
- Integration with **MongoDB**, **Firebase**, and **Supabase** for data handling and authentication

The project focuses on production-level architecture, secure code practices, and clean state management.

---

## 🎯 Primary Objectives

- Develop scalable, secure, and maintainable code using modern software engineering principles.
- Use **Redux** (React/Next.js) and **Provider/BLoC** (Flutter) for robust state management.
- Set up a modular **Node.js** backend (for MongoDB) with secure REST APIs.
- Experiment with **Firebase** and **Supabase** for real-time sync and BaaS learning.
- Compare BaaS platforms based on real-world implementations.

---

## 🧰 Tech Stack Overview

| Platform           | Stack                                                  |
|--------------------|---------------------------------------------------------|
| **Frontend (Web)** | React, Next.js, Redux, TailwindCSS                      |
| **Frontend (Mobile)** | Flutter, Provider, BLoC                               |
| **Backend**        | Node.js (with MongoDB), Firebase SDK, Supabase SDK     |
| **Databases**      | MongoDB, Firebase Firestore, Supabase Postgres         |
| **Authentication** | Firebase Auth, Supabase Auth                           |
| **Storage**        | Firebase Storage, Supabase Buckets                     |
| **Hosting**        | Vercel, Firebase Hosting, Render, Supabase Studio (optional)  |

---

## 🔑 Key Features

### 1. User Authentication
- Email/Password registration & login
- JWT token-based auth (Node.js + MongoDB)
- OAuth support via Firebase and Supabase

### 2. Task Management
- Create, Read, Update, Delete (CRUD) operations
- Fields: `title`, `description`, `priority`, `due_date`, `status`, `assigned_to`
- Status flow: `To Do`, `In Progress`, `Completed`

### 3. Team Collaboration
- Project and team management
- Assign and manage tasks per user/team
- Kanban-style task board (web)

### 4. Real-Time Updates
- Firebase and Supabase listeners for live data sync

### 5. Notification System
- Push notifications (Flutter + FCM)
- In-app alerts for due tasks or changes

### 6. Cross-platform UI
- Responsive React/Next.js web dashboard
- Flutter app for Android
