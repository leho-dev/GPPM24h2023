import { useContext } from 'react';
import { UserContext } from '../store/UserContext';
import { OverplayContext } from '../store/OverplayContext';

/**
 * Custom hook that provides access to the user context
 * @returns {Array} An array containing the user object and a function to update it
 * @returns {Object} user - The current user object from the UserContext
 * @returns {Function} setUser - A function to update the user object in the UserContext
 */
function useUserContext() {
  const [user, setUser] = useContext(UserContext);
  return [user, setUser];
}

/**
 * Custom hook to access and update the Overplay context
 * @returns {[any, Function]} An array containing the current overplay state and a function to update it
 */
function useOverplayContext() {
  const [overplay, setOverplay] = useContext(OverplayContext);
  return [overplay, setOverplay];
}

export { useUserContext, useOverplayContext };
