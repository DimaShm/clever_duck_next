import Head from 'next/head';
import Image from "next/image";
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styles from '../styles/modules/Home.module.scss';
import Layout from './Layout';

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
    <Layout>
      <Head>
        <meta name="keywords" content="доставка їжі для тварин" />
        <meta name="description" content="Головна сторінка" />
      </Head>

      <div className={styles.Home}>
        <div className={styles.Home__content}>
          <span className={styles.Home__title}>
            Доставка їжі для тварин
          </span>

          <button
            aria-label="main button"
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
              src="/img/any/home.png"
              alt="dog photo" 
              width="320"
              height="331"
              className={styles.Home__photo}
            />
        </div>  
      </div>

    </Layout>
  );
};

export default Home;
