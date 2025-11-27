import { useLocation } from 'react-router-dom';
import useAuthStore from '../../context/userContaxt'
export const protectedRoute = ({children}) => {
    const {user, loading} = useAuthStore();
    const location = useLocation();
    if(loading){
        return <div>Loading...</div>
    }
    if(!user){
        return <Navigate to="/login" state={{from: location}} replace />
    }
    return children;


}

export const AdminRoute = ({ children }) => {
  const { user, loading } = useAuthStore();
  const location = useLocation();

  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/login" state={{ from: location }} replace />;
  if (user.role !== 'admin') return <Navigate to="/403" replace />;
  return children;
};