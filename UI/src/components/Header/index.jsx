import { useNavigate } from 'react-router-dom';
import { logo } from '../../assets/img';
import styles from './Header.module.css';
import { useUserContext } from '../../hook';
import { useState } from 'react';

/**
 * Header component for the application
 * Handles user authentication, VIP status, and navigation
 * @returns {JSX.Element} The rendered header component
 */
function Header() {
  const navigate = useNavigate();
  const [user, setUser] = useUserContext();

  const [key, setKey] = useState('');

  /**
   * Handles the user logout process.
   * @param {void} - This function doesn't take any parameters.
   * @returns {void} This function doesn't return a value.
   */
  const handleLogout = () => {
    /**
     * Handles the form submission for VIP activation.
     * @param {Event} e - The form submission event.
     * @returns {void} This function doesn't return a value, but it may trigger an alert or update the state.
     */
    user?.auth.signOut();
    ```
    /**
     * Updates the user object by setting the VIP property to true
     * @param {Function} setUser - React state setter function for updating the user object
     * @returns {void} This function doesn't return a value, it updates state
     */
    ```
    navigate('/auth');
    localStorage.removeItem('uid');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (key != 'GPPM24h') {
      return alert('Key không hợp lệ!');
    }

    setUser((prev) => {
      return {
        ...prev,
        VIP: true,
      };
    });
    setKey('');
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <div className={styles.headerLogo}>
          <img className={styles.headerLogoImg} src={logo} alt='LOGO' />
        </div>
      </div>

      {user && !user?.VIP && (
        <form onSubmit={handleSubmit} action=''>
          <input
            type='text'
            value={key}
            /**
             * Handles the change event for an input element and updates the key state
             * @param {React.ChangeEvent<HTMLInputElement>} e - The change event object
             * @returns {void} This function does not return a value
             */
            onChange={(e) => setKey(e.target.value)}
            placeholder='Nhập key để mở khóa ...'
            className={styles.key}
          />
        </form>
      )}

      <div className={styles.headerRight}>
        {user && (
          <div className={styles.user}>
            <div className={styles.userAvt}>
              <img
                className={styles.userAvtImg}
                src={user?.photoURL}
                alt='avatar'
              />
            </div>
            <div className={styles.userName}>{user?.displayName}</div>
          </div>
        )}
        {user ? (
          <button onClick={handleLogout} className={styles.btnLogout}>
            Đăng xuất
          </button>
        ) : (
          <button
            /**
             * Navigates to the authentication page when clicked
             * @param {void} - No parameters required
             * @returns {void} Does not return a value, triggers navigation
             */
            onClick={() => navigate('/auth')}
            className={styles.btnLogout}
          >
            Đăng nhập
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
