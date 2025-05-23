import { Link } from "react-router-dom";

const AdminLogin = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700 p-4">
            <div className="w-full max-w-md bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden border border-white/30">
               <div className="p-8">
                <h2 className="text-3xl font-bold text-center text-white mb-8">Admin Portal</h2>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">Email</label>
                        <input type="email" id="email" className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-white/50 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50" 
                         placeholder="Enter your email"
                         required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-white/80 mb-1">Password</label>
                        <input type="password" id="password"  className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/50 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50" />
                    </div>
                    <button type="submit" className="w-full py-3 px-4 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition duration-200 shadow-md hover:shadow-lg">Sign In</button>
                </form>

                <div className="mt-6 text-center">
                    <Link to="/" className="text-sm text-white/80 hover:text-white text-sm underline underline-offset-2">
                    Back to Portfolio
                    </Link>
  
                </div>

               </div>
            </div>
        </div>
    )
}

export default AdminLogin;