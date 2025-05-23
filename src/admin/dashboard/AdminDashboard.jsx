import { useNavigate } from 'react-router-dom';

const AdminDashboard = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/admin/login');
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">Admin Panel</h2>
        </div>
        <nav className="p-4 space-y-2">
          <button className="w-full flex items-center space-x-3 p-3 rounded-lg bg-blue-50 text-blue-600 font-medium">
            <span>📊</span>
            <span>Dashboard</span>
          </button>
          <button className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 text-gray-700">
            <span>✍️</span>
            <span>Posts</span>
          </button>
          <button className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 text-gray-700">
            <span>🏷️</span>
            <span>Categories</span>
          </button>
          <button className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 text-gray-700">
            <span>👥</span>
            <span>Users</span>
          </button>
          <button className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 text-gray-700">
            <span>⚙️</span>
            <span>Settings</span>
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Welcome back, Admin!</h1>
            <p className="text-gray-600">Here's what's happening with your blog today</p>
          </div>
          <button 
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Sign Out
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { title: "Total Posts", value: "24", color: "bg-blue-100 text-blue-600" },
            { title: "Drafts", value: "5", color: "bg-yellow-100 text-yellow-600" },
            { title: "Comments", value: "42", color: "bg-green-100 text-green-600" },
            { title: "Visitors", value: "1.2K", color: "bg-purple-100 text-purple-600" },
          ].map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-sm font-medium text-gray-500">{stat.title}</h3>
              <p className={`mt-2 text-3xl font-semibold ${stat.color}`}>{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[
              { icon: "✏️", text: "You published 'React Hooks Guide'", time: "2 hours ago" },
              { icon: "💬", text: "John commented on 'CSS Grid Tutorial'", time: "5 hours ago" },
              { icon: "👍", text: "Sarah liked your post about Next.js", time: "1 day ago" },
            ].map((activity, index) => (
              <div key={index} className="flex items-start pb-4 border-b border-gray-100 last:border-0">
                <span className="text-2xl mr-4">{activity.icon}</span>
                <div>
                  <p className="text-gray-800">{activity.text}</p>
                  <p className="text-sm text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;