import React from 'react';
import { Link } from "react-router";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white flex">
      {/* Sidebar Navigation */}
      <aside className="w-1/3 bg-gray-100 p-6 border-r border-gray-300">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">📌 CRUD Sitemap</h2>
        <nav className="space-y-4">
          <Link
            to="/create"
            className="block bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium py-2 px-4 rounded-lg transition duration-200 shadow"
          >
            ➕ Create Page
          </Link>
          <Link
            to="/read"
            className="block bg-green-50 hover:bg-green-100 text-green-700 font-medium py-2 px-4 rounded-lg transition duration-200 shadow"
          >
            📖 Read Page
          </Link>
          <Link
            to="/update"
            className="block bg-yellow-50 hover:bg-yellow-100 text-yellow-700 font-medium py-2 px-4 rounded-lg transition duration-200 shadow"
          >
            🔄 Update Page
          </Link>
          <Link
            to="/delete"
            className="block bg-red-50 hover:bg-red-100 text-red-700 font-medium py-2 px-4 rounded-lg transition duration-200 shadow"
          >
            ❌ Delete Page
          </Link>
        </nav>
      </aside>

      {/* Right Content Section */}
      <section className="w-2/3 p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">📂 Project Overview</h1>
        <p className="text-gray-600 mb-2">
          <span className="font-semibold">Title:</span> ProTask - MERN
        </p>
        <p className="text-gray-600 mb-2">
          <span className="font-semibold">Description:</span> This project demonstrates a full CRUD flow with routing and clean layout using MERN.
        </p>
        <p className="text-gray-600 mb-2">
          <span className="font-semibold">Creation Date:</span> May 16, 2025
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Author:</span> Tasir Rahman
        </p>
      </section>
    </div>
  );
};

export default HomePage;
