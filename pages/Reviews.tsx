import { useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from '../styles/modules/Reviews.module.scss';

const Reviews: React.FC = () => {

  useEffect(() => {
    if (window !== undefined) {
      window.scrollTo({
        top: 0, left: 0, behavior: 'smooth',
      })
    }
  }, []);

  return (
    <>
      <Header />

      <div className={styles.Reviews}>
        <h1 className={`title ${styles.Reviews}`}>Відгуки</h1>
        <br /><br /><br /> <br />
        <div className={styles.Reviews__list}>
          <div className={styles.card}>
            <div 
              className={`${styles.photo} ${styles.photo1}`}
              aria-label="user photo"
            />
            <div className={styles.card_content}>
              <div className={styles.quotes}/>
              <span className="text text--center">
                Дуже сподобався індивідуальний підхід до кожного улюбленця. Планую замовляти ще
              </span>
              <span className="subtitle">
                Попова Жанна
              </span> 
            </div>
          </div>

          <div className={styles.card}>
            <div 
              className={`${styles.photo} ${styles.photo2}`}
              aria-label="user photo"
            />
            <div className={styles.card_content}>
            <div className={styles.quotes}/>
              <span className="text text--center">
                Не дорого, якісно та швидко. Найкраща доставкка з тих, якими я користувався
              </span>
              <span className="subtitle">
                Горобчик Максим
              </span> 
            </div>
          </div>

          <div className={styles.card}>
            <div 
              className={`${styles.photo} ${styles.photo3}`}
              aria-label="user photo"
            />
            <div className={styles.card_content}>
            <div className={styles.quotes}/>
              <span className="text text--center">
                Я купую тут корм більше ніж 8 місяців поспіль і мене ще жодного разу не підвели. Раджу!
              </span>
              <span className="subtitle">
                Філіпова Марія
              </span> 
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Reviews;
