import { useContext } from 'react';
import { UserContext } from '../store/UserContext';
import { OverplayContext } from '../store/OverplayContext';

function useUserContext() {
  const [user, setUser] = useContext(UserContext);
  return [user, setUser];
}

function useOverplayContext() {
  const [overplay, setOverplay] = useContext(OverplayContext);
  return [overplay, setOverplay];
}

export { useUserContext, useOverplayContext };
