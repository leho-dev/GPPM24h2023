import { useEffect, useContext } from 'react';
import { UserContext } from '../../store/UserContext';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../hook';

/**
 * A React component that acts as a protected route, ensuring only authenticated users can access the wrapped content.
 * @param {React.ReactNode} children - The child components to be rendered if the user is authenticated.
 * @returns {React.ReactNode|null} The children components if the user is authenticated, otherwise redirects to the auth page and returns null.
 /**
  * A React hook that checks for user authentication and redirects if necessary.
  * @param {Object} user - The user object containing authentication information.
  * @param {string|null} user.uid - The user ID, if available.
  * @returns {void} This hook doesn't return anything, it performs a side effect.
  */
 */
function ProtectedRoute({ children }) {
  const [user, setUser] = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    const uid = localStorage.getItem('uid') || null;
    if (!uid) {
      navigate('/auth');
    }
  }, [user?.uid]);
  return children;
}

export default ProtectedRoute;
