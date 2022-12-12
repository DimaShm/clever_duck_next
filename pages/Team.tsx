import Head from 'next/head';
import { useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from '../styles/modules/Team.module.scss';
import Layout from './Layout';

const Team = () => {

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
        <title>CLEVER DUCK | Наша команда</title>
        <meta name="keywords" content="Ветеринар Фасувальник Менеджер" />
        <meta name="description" content="Наша команда" />
      </Head>


      <div className={styles.Team}>
        <h1 className={`title ${styles.Team__title}`}>Наша команда</h1>
        <div className={styles.Team__list}>
          <div className={styles.Team__card}>
            <div
              aria-label="workers photo"
              className={`${styles.Team__photo} ${styles.Team__photo1}`} 
            />
            <span className={`subtitle ${styles.Team__name}`}>
              Іван Стрилецький
            </span>
            <span 
              className={`smalltext amalltext--grey ${styles.Team__position}`}
            >
              Ветеринар, підбирає раціон
            </span>
            <div className={styles.Team__socials}>
              <a 
                aria-label="instagram"
                href="https://www.instagram.com"
                target="_blank"
                className="icon icon--instagram_black"
                rel="noreferrer"
              />
              <a 
                aria-label="facebook"
                href="https://www.facebook.com"
                target="_blank"
                className="icon icon--facebook_black"
                rel="noreferrer"
              />
              <a 
                aria-label="telegram"
                href="https://telegram.com" 
                target="_blank"
                className="icon icon--telegram_black"
                rel="noreferrer"
              />
            </div>
          </div>

          <div className={styles.Team__card}>
          <div
              aria-label="workers photo"
              className={`${styles.Team__photo} ${styles.Team__photo2}`} 
            />
            <span className={`subtitle ${styles.Team__name}`}>
              Степан Різдвяний
            </span>
            <span 
              className={`smalltext amalltext--grey ${styles.Team__position}`}
            >
              Фасувальник та доставщик товару
            </span>
            <div className={styles.Team__socials}>
              <a
                aria-label="instagram" 
                href="https://www.instagram.com"
                target="_blank"
                className="icon icon--instagram_black"
                rel="noreferrer"
              />
              <a 
                aria-label="facebook"
                href="https://www.facebook.com"
                target="_blank"
                className="icon icon--facebook_black"
                rel="noreferrer"
              />
              <a 
                aria-label="telegram"
                href="https://telegram.com" 
                target="_blank"
                className="icon icon--telegram_black"
                rel="noreferrer"
              />
            </div>
          </div>

          <div className={styles.Team__card}>
          <div
              aria-label="workers photo"
              className={`${styles.Team__photo} ${styles.Team__photo3}`} 
            />
            <span className={`subtitle ${styles.Team__name}`}>
              Мішель Різонова
            </span>
            <span 
              className={`smalltext amalltext--grey ${styles.Team__position}`}
            >
              Менеджер
            </span>
            <div className={styles.Team__socials}>
              <a
                aria-label="instagram" 
                href="https://www.instagram.com"
                target="_blank"
                className="icon icon--instagram_black"
                rel="noreferrer"
              />
              <a
                aria-label="facebook" 
                href="https://www.facebook.com"
                target="_blank"
                className="icon icon--facebook_black"
                rel="noreferrer"
              />
              <a
                aria-label="telegram" 
                href="https://telegram.com" 
                target="_blank"
                className="icon icon--telegram_black"
                rel="noreferrer"
              />
            </div>
          </div>
        </div>
      </div>

    </Layout>
  );
};

export default Team;
