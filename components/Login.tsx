import React from 'react';

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-8 text-center">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" className="mt-1 p-2 w-full border border-gray-300 rounded" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Password</label>
            <input type="password" className="mt-1 p-2 w-full border border-gray-300 rounded" />
          </div>
          <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;