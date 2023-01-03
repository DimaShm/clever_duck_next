import Head from 'next/head';
import { useEffect } from 'react';
import styles from '../styles/modules/Reviews.module.scss';
import Layout from './Layout';
import Image from 'next/image';
import reviewPhoto1 from '../public/img/reviews/review_1.png';
import reviewPhoto2 from '../public/img/reviews/review_2.png';
import reviewPhoto3 from '../public/img/reviews/review_3.png';

const Reviews: React.FC = () => {

  useEffect(() => {
    if (window !== undefined) {
      window.scrollTo({
        top: 0, left: 0, behavior: 'smooth',
      })
    }
  }, []);

  return (
    <Layout headerColor="">

      <Head>
        <title>CLEVER DUCK | Відгуки</title>
        <meta 
          name="keywords" 
          content="відгуки не дорого якісно найкраща доставка сподобався купую не підвели" 
        />
        <meta name="description" content="Відгуки" />
      </Head>

      <div className={styles.Reviews}>
        <h1 className={`title ${styles.Reviews__title}`}>Відгуки</h1>
        <br /><br /><br /> <br />
        <div className={styles.Reviews__list}>
          <div className={styles.Reviews__card}>
            <Image 
              src={reviewPhoto1} 
              alt="фотографія людини, яка залишила відгук" 
              placeholder="blur"
              className={styles.Reviews__photo}
            />
            <div className={styles.Reviews__card_content}>
              <div className="quotes"/>
              <span className="text text--center">
                Дуже сподобався індивідуальний підхід до кожного улюбленця. Планую замовляти ще
              </span>
              <span className="subtitle">
                Попова Жанна
              </span> 
            </div>
          </div>

          <div className={styles.Reviews__card}>
            <Image 
              src={reviewPhoto2} 
              alt="фотографія людини, яка залишила відгук" 
              placeholder="blur"
              className={styles.Reviews__photo}
            />
            <div className={styles.Reviews__card_content}>
              <div className="quotes"/>
              <span className="text text--center">
                Не дорого, якісно та швидко. Найкраща доставкка з тих, якими я користувався
              </span>
              <span className="subtitle">
                Горобчик Максим
              </span> 
            </div>
          </div>

          <div className={styles.Reviews__card}>
            <Image 
              src={reviewPhoto3} 
              alt="фотографія людини, яка залишила відгук" 
              placeholder="blur"
              className={styles.Reviews__photo}
            />
            <div className={styles.Reviews__card_content}>
              <div className="quotes"/>
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
