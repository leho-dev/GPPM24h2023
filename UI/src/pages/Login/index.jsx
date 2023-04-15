import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { useContext, useEffect } from 'react';
import { UserContext } from '../../store/UserContext';
import { google } from '../../assets/img';
import styles from './Login.module.css';

function Login() {
  const navigate = useNavigate();
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
