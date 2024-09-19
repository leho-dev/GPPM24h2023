import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { useContext, useEffect } from 'react';
import { UserContext } from '../../store/UserContext';
import { google } from '../../assets/img';
import styles from './Login.module.css';

/**
 * Login component for user authentication using Google
 * @returns {JSX.Element} A div containing a button for Google login
 */
/**
 * Handles Google login authentication using Firebase.
 * @returns {Promise<UserCredential>} A promise that resolves with the user's credentials after successful authentication.
 */
function Login() {
  const navigate = useNavigate();
  ```
  /**
   * A React useEffect hook that checks for user authentication and redirects if authenticated
   * @param {Function} effect - The effect function to be executed
   * @param {Array} dependencies - An array containing user.uid as a dependency
   * @returns {void} No return value
   */
  ```
  const [user, setUser] = useContext(UserContext);

  const handleLoginGoogle = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const res = await signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const uid = localStorage.getItem('uid') || null;
    if (uid != null || uid != undefined) {
      navigate('/');
    }
  }, [user?.uid]);

  return (
    <div className={styles.wrapper}>
      <button onClick={handleLoginGoogle} className={styles.btnLogin}>
        <img className={styles.loginLogo} src={google} alt='LOGO GOOGLE' />
        <div className={styles.loginText}>Login with Google</div>
      </button>
    </div>
  );
}

export default Login;
