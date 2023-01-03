import Head from 'next/head';
import Image from "next/image";
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styles from '../styles/modules/Home.module.scss';
import Layout from './Layout';
import homePhoto from '../public/img/any/home.png';

const Home: React.FC = () => {
  const router = useRouter();

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
        <meta 
          name="keywords" 
          content="Доставка їжі для тварин Зробити замовлення" 
        />
        <meta name="description" content="Головна сторінка" />
      </Head>

      <div className={styles.Home}>
        <div className={styles.Home__content}>
          <span className={styles.Home__title}>
            Доставка їжі для тварин
          </span>

          <button
            aria-label="Кнопка для переходу к замовленню"
            type="button"
            className={styles.Home__button}
            onClick={() => router.push('/Tariffs')}
          >
            <span>
              Зробити замовлення
          </span>
        </button>
        </div>

        <div className={styles.Home__photo_container}>
          <Image 
            src={homePhoto} 
            alt="Фотографія собаки мисливської породи" 
            placeholder="blur"
            className={styles.Home__photo}
            />
        </div>  
      </div>

    </Layout>
  );
};

export default Home;
