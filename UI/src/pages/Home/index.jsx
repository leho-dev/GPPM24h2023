import { useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import styles from './Home.module.css';
import Header from '../../components/Header';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import { useOverplayContext, useUserContext } from '../../hook';
import { books } from '../../bookdata';
import Overplay from '../../components/Overplay';

function Home() {
  const [user, setUser] = useUserContext();
  const [overplay, setOverplay] = useOverplayContext();

  const [book, setBook] = useState(null);

  const handleShowPDF = (data) => {
    setOverplay(true);
    setBook(data);
  };

  return (
    <div className={clsx(styles.wrapper, 'grid')}>
      <Header />
      <section className={styles.body}>
        <h2 className={styles.headerTitle}>Các loại sách</h2>
        <div className={styles.bookList}>
          {books.length > 0 &&
            books.map((b) => {
              return (
                <div
                  onClick={() => handleShowPDF(b.data)}
                  key={b.id}
                  className={styles.bookItem}
                >
                  <div className={styles.bookBanner}>
                    <img
                      className={styles.bookBannerImg}
                      src={b.banner}
                      alt='banner'
                    />
                  </div>
                  <div className={styles.bookTitle}>{b.title}</div>
                </div>
              );
            })}
        </div>
      </section>
      {overplay && (
        <Overplay>
          <div className={styles.bodyO}>
            {book.map((b, index) => {
              return (
                <div
                  key={b.id}
                  className={clsx(styles.bookDataPage, {
                    [styles.show]: b.id == 1 || user?.VIP == true,
                  })}
                >
                  {b.page.map((p, idx) => {
                    return (
                      <div key={idx} className={styles.bookDataImg}>
                        <img
                          className={styles.bookDataImgSrc}
                          src={p.src}
                          alt=''
                        />
                        <div className={styles.titleImg}>{p.title}</div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </Overplay>
      )}
    </div>
  );
}

export default Home;
