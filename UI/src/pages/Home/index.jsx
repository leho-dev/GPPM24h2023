import { useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import styles from './Home.module.css';
import Header from '../../components/Header';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import { useOverplayContext, useUserContext } from '../../hook';
import { books } from '../../bookdata';
import Overplay from '../../components/Overplay';

/**
 * Home component that displays a list of books and their details
 * @returns {JSX.Element} The rendered Home component
 */
function Home() {
  const [user, setUser] = useUserContext();
  /**
   * Handles the action of showing a PDF by updating the state.
   * @param {Object} data - The book data to be displayed.
   * @returns {void} This function doesn't return a value.
   */
  const [overplay, setOverplay] = useOverplayContext();

  const [book, setBook] = useState(null);

  const handleShowPDF = (data) => {
    setOverplay(true);
    setBook(data);
  /**
   * Renders a list of book items
   * @param {Array} books - An array of book objects
   * @param {Function} handleShowPDF - Function to handle showing PDF when a book is clicked
   * @param {Object} styles - Object containing CSS class names
   * @returns {Array} An array of JSX elements representing book items
   */
  };

  return (
    <div className={clsx(styles.wrapper, 'grid')}>
      <Header />
      <section className={styles.body}>
        <h2 className={styles.headerTitle}>Các loại sách</h2>
        <div className={styles.bookList}>
          /**
           * Handles the click event to show a PDF document
           * @param {Function} onClick - Event handler function to be called when the element is clicked
           * @param {Object} b.data - The data object containing PDF information
           * @returns {void} This function doesn't return a value
           */
          {books.length > 0 &&
            books.map((b) => {
              /**
               * Renders a list of book pages with images and titles
               * @param {Array} book - An array of book objects, each containing an id and a page array
               * @param {Object} user - The user object containing VIP status
               * @param {Object} styles - An object containing CSS class names
               * @returns {JSX.Element} A JSX element representing the rendered book pages
               */
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
                  /**
                   * Renders a list of book pages with images and titles
                   * @param {Object} b - The book object containing page information
                   * @param {Array} b.page - An array of page objects
                   * @param {string} b.page[].src - The source URL of the page image
                   * @param {string} b.page[].title - The title of the page
                   * @returns {Array} An array of React elements representing book pages
                   */
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
