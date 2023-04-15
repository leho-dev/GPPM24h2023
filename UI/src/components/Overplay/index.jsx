import { useEffect, useRef } from 'react';
import { useOverplayContext, useUserContext } from '../../hook';
import styles from './Overplay.module.css';

function Overplay({ children }) {
  const [overplay, setOverplay] = useOverplayContext();

  useEffect(() => {
    document.querySelector(`.${styles.wrapper}`).onclick = (e) => {
      const clickO = e.target.classList.value == `${styles.wrapper}`;
      if (clickO) setOverplay(false);
    };
  }, []);
  return <div className={styles.wrapper}>{children}</div>;
}

export default Overplay;
