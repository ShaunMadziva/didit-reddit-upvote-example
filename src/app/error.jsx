"use client";

// Error boundaries must be Client Components

export default function Error({ error, reset }) {
  return (
    <html className="h-full bg-gray-100">
      <body className="flex h-full items-center justify-center">
        <div className="text-center bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            Oh no! Something went wrong on that page! 🙈
          </h2>
          <p className="text-gray-700 mb-6">{error.message}</p>
          <button
            onClick={() => reset()}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
