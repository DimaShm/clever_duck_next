import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from '../styles/modules/Home.module.scss';

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
    <>
      <Header />

      <div 
        aria-label="dog photo"
        className={styles.Home}
      >
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
      </div>

      <Footer />
    </>
  );
};

export default Home;
