import Head from 'next/head';
import { useEffect } from 'react';
import styles from '../styles/modules/Reviews.module.scss';
import Layout from './Layout';

const Reviews: React.FC = () => {

  useEffect(() => {
    if (window !== undefined) {
      window.scrollTo({
        top: 0, left: 0, behavior: 'smooth',
      })
    }
  }, []);

  return (
    <Layout>

      <Head>
        <title>CLEVER DUCK | Відгуки</title>
        <meta name="keywords" content="не дорого якісно" />
        <meta name="description" content="Відгуки" />
      </Head>

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

    </Layout>
  );
};

export default Reviews;