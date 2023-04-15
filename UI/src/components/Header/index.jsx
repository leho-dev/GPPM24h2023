import { useNavigate } from 'react-router-dom';
import { logo } from '../../assets/img';
import styles from './Header.module.css';
import { useUserContext } from '../../hook';
import { useState } from 'react';

function Header() {
  const navigate = useNavigate();
  const [user, setUser] = useUserContext();

  const [key, setKey] = useState('');

  const handleLogout = () => {
    user?.auth.signOut();
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
