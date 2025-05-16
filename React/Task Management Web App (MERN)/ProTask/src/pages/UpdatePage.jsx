import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UpdatePage = () => {
  // Dummy task to simulate pre-loaded data
  const [formData, setFormData] = useState({
    title: '',
    timestamp: '',
    complete: false,
    priority: 1,
    note: ''
  });

  useEffect(() => {
    // Simulate loading existing task (Replace with actual API call or Redux data)
    const existingTask = {
      title: 'Initial Task Title',
      timestamp: '2025-05-20',
      complete: true,
      priority: 3,
      note: 'Preloaded task note for update.'
    };
    setFormData(existingTask);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Integrate with backend API to update task
    console.log('Task updated:', formData);
  };

  return (
    <div className="min-h-screen bg-white flex">
      {/* Sidebar Navigation */}
      <aside className="w-1/3 bg-gray-100 p-6 border-r border-gray-300">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">📌 CRUD Sitemap</h2>
        <nav className="space-y-4">
          <Link to="/create" className="block px-4 py-2 rounded-lg text-blue-700 bg-blue-50 hover:bg-blue-100 shadow transition">➕ Create Page</Link>
          <Link to="/read" className="block px-4 py-2 rounded-lg text-green-700 bg-green-50 hover:bg-green-100 shadow transition">📖 Read Page</Link>
          <Link to="/update" className="block px-4 py-2 rounded-lg text-yellow-700 bg-yellow-50 hover:bg-yellow-100 shadow transition">🔄 Update Page</Link>
          <Link to="/delete" className="block px-4 py-2 rounded-lg text-red-700 bg-red-50 hover:bg-red-100 shadow transition">❌ Delete Page</Link>
        </nav>
      </aside>

      {/* Form Section */}
      <section className="w-2/3 p-10">
        <div className="max-w-7xl mx-auto bg-white">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">🔄 Update Task</h1>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
            {/* Title */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Timestamp */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Timestamp</label>
              <input
                type="date"
                name="timestamp"
                value={formData.timestamp}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Complete */}
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                name="complete"
                checked={formData.complete}
                onChange={handleChange}
                className="h-5 w-5 text-yellow-600 border-gray-300 focus:ring-yellow-500 rounded"
              />
              <label className="text-gray-700 font-medium">Mark as Complete</label>
            </div>

            {/* Priority */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Priority (1-5)</label>
              <input
                type="number"
                name="priority"
                min="1"
                max="5"
                value={formData.priority}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Note */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Note</label>
              <textarea
                name="note"
                rows="4"
                value={formData.note}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                className="w-full py-3 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-700 transition shadow-md"
              >
                🔄 Update Task
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default UpdatePage;
