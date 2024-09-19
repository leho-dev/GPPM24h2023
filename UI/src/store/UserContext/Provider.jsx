import { useState, useEffect } from 'react';
import { UserContext } from './Context';
import { getAuth } from 'firebase/auth';
import { useUserContext } from '../../hook';
import { useNavigate } from 'react-router-dom';

/**
 * Provides a context for managing user authentication state
 * @param {Object} props - The component props
 * @param {React.ReactNode} props.children - The child components to be wrapped by the provider
 * @returns {JSX.Element} A UserContext.Provider component wrapping the children
 */
function UserProvider({ children }) {
  const auth = getAuth();

  const [user, setUser] = useState(null);

  /**
   * Handles authentication state changes and updates local storage
   * @param {object} auth - The authentication object
   * @returns {function} Cleanup function to unsubscribe from the auth listener
   */
  useEffect(() => {
    /**
     * Sets up a listener for changes in the user's ID token and updates the user state accordingly.
     * @param {function} callback - The callback function to be executed when the ID token changes.
     * @returns {function} A function to unsubscribe from the listener.
     */
    const unsubscribe = auth.onIdTokenChanged((user) => {
      setUser(user);
      localStorage.setItem('uid', JSON.stringify(user?.uid));

      if (!user?.uid) {
        setUser(null);
        localStorage.removeItem('uid');
      }
    });

    /**
     * Creates and returns a cleanup function that unsubscribes from a subscription.
     * @returns {Function} A function that, when called, will unsubscribe from the subscription.
     */
    return () => {
      unsubscribe();
    };
  }, [auth]);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
