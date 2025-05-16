import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DeletePage = () => {
  const [notes, setNotes] = useState([
    { id: 1, title: 'Meeting Notes', timestamp: '2025-05-10' },
    { id: 2, title: 'Project Draft', timestamp: '2025-05-12' },
    { id: 3, title: 'Task Overview', timestamp: '2025-05-15' }
  ]);

  const handleDelete = (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this note?');
    if (confirmed) {
      setNotes(prev => prev.filter(note => note.id !== id));
    }
  };

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

      {/* Content Section */}
      <section className="w-2/3 p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">🗑️ Delete Notes</h1>
        {notes.length === 0 ? (
          <p className="text-gray-600">No notes available to delete.</p>
        ) : (
          <ul className="space-y-4">
            {notes.map(note => (
              <li key={note.id} className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-sm">
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">{note.title}</h2>
                  <p className="text-gray-500 text-sm">Created on: {note.timestamp}</p>
                </div>
                <button
                  onClick={() => handleDelete(note.id)}
                  className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default DeletePage;
