import Head from 'next/head';
import { useEffect } from 'react';
import styles from '../styles/modules/Team.module.scss';
import Layout from './Layout';
import Image from 'next/image';
import persone1 from '../public/img/team/person_1.png';
import persone2 from '../public/img/team/person_2.png';
import persone3 from '../public/img/team/person_3.png';

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
        <meta 
          name="keywords" 
          content="Ветеринар Стрилецький Фасувальник Різдвяний Менеджер Різонова" 
        />
        <meta name="description" content="Наша команда" />
      </Head>

      <div className={styles.Team}>
        <h1 className={`title ${styles.Team__title}`}>Наша команда</h1>
        <div className={styles.Team__list}>
          <div className={styles.Team__card}>
            <Image 
              src={persone1} 
              alt="фотографія ветеринара" 
              placeholder="blur"
              className={styles.Team__photo}
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
                aria-label="сторінка в инстаграм"
                href="https://www.instagram.com"
                target="_blank"
                className="icon icon--instagram_black"
                rel="noreferrer"
              />
              <a 
                aria-label="сторінка в фейсбук"
                href="https://www.facebook.com"
                target="_blank"
                className="icon icon--facebook_black"
                rel="noreferrer"
              />
              <a 
                aria-label="сторінка в телеграм"
                href="https://telegram.com" 
                target="_blank"
                className="icon icon--telegram_black"
                rel="noreferrer"
              />
            </div>
          </div>

          <div className={styles.Team__card}>
            <Image 
              src={persone2} 
              alt="фотографія доставщика" 
              placeholder="blur"
              className={styles.Team__photo}
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
                aria-label="сторінка в инстаграм"
                href="https://www.instagram.com"
                target="_blank"
                className="icon icon--instagram_black"
                rel="noreferrer"
              />
              <a 
                aria-label="сторінка в фейсбук"
                href="https://www.facebook.com"
                target="_blank"
                className="icon icon--facebook_black"
                rel="noreferrer"
              />
              <a 
                aria-label="сторінка в телеграм"
                href="https://telegram.com" 
                target="_blank"
                className="icon icon--telegram_black"
                rel="noreferrer"
              />
            </div>
          </div>

          <div className={styles.Team__card}>
            <Image 
              src={persone3} 
              alt="фотографія менеджера" 
              placeholder="blur"
              className={styles.Team__photo}
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
                aria-label="сторінка в инстаграм"
                href="https://www.instagram.com"
                target="_blank"
                className="icon icon--instagram_black"
                rel="noreferrer"
              />
              <a
                aria-label="сторінка в фейсбук"
                href="https://www.facebook.com"
                target="_blank"
                className="icon icon--facebook_black"
                rel="noreferrer"
              />
              <a
                aria-label="сторінка в телеграм"
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
