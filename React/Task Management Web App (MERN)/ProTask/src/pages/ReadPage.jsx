import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ReadPage = () => {
  const [tasks] = useState([
    {
      id: 1,
      title: 'Complete Report',
      timestamp: '2025-05-10T09:30:00',
      complete: false,
      priority: 2,
      note: 'Prepare for presentation meeting.'
    },
    {
      id: 2,
      title: 'Review PRs',
      timestamp: '2025-05-12T14:15:00',
      complete: true,
      priority: 1,
      note: 'Review all pending pull requests.'
    },
    {
      id: 3,
      title: 'Client Call',
      timestamp: '2025-05-15T11:00:00',
      complete: false,
      priority: 3,
      note: 'Discuss contract details with client.'
    }
  ]);

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
        <h1 className="text-3xl font-bold text-gray-800 mb-6">📖 Read Tasks</h1>
        {tasks.length === 0 ? (
          <p className="text-gray-600">No tasks available to read.</p>
        ) : (
          <ul className="space-y-4">
            {tasks.map(task => (
              <li
                key={task.id}
                className="bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-sm"
              >
                <h2 className="text-lg font-semibold text-gray-800">{task.title}</h2>
                <p className="text-gray-500 text-sm">Timestamp: {new Date(task.timestamp).toLocaleString()}</p>
                <p className="text-gray-500 text-sm">
                  Status: {task.complete ? '✅ Completed' : '⏳ Incomplete'}
                </p>
                <p className="text-gray-500 text-sm">Priority: {task.priority}</p>
                <p className="text-gray-600 mt-2 italic">Note: {task.note}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default ReadPage;
