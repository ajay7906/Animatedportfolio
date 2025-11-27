import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuthStore from '../context/userContaxt';

const AdminLogin = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
   const setAuth = useAuthStore(state => state.setAuth);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Temporary validation
    if (email === 'admin@example.com' && password === 'admin123') {
      setIsAuthenticated(true);
      navigate('/admin/dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700 p-4">
      <div className="w-full max-w-md bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden border border-white/30">
        <div className="p-8">
          <h2 className="text-3xl font-bold text-center text-white mb-8">Admin Portal</h2>
          
          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/50 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
                placeholder="admin@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white/80 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/50 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition duration-200 shadow-md hover:shadow-lg"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link 
              to="/" 
              className="text-white/80 hover:text-white text-sm underline underline-offset-2"
            >
              ← Back to Portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;