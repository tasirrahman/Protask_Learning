import React from 'react';
import { Calendar, X, ArrowLeft } from 'lucide-react';

const PageNotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white shadow rounded-xl p-8 text-center">


        <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Page Not Found</h2>

        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </button>

          <a
            href="/"
            className="flex items-center justify-center px-6 py-3 border-2 border-gray-800 text-gray-800 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Return Home
          </a>
        </div>
      </div>

      <p className="mt-8 text-gray-500 text-sm">
        Need help? Contact support@example.com
      </p>
    </div>
  );
};

export default PageNotFound;