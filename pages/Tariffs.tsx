import Head from 'next/head';
import { useEffect } from 'react';
import OrderButton from '../components/OrderButton';
import styles from '../styles/modules/Tariffs.module.scss';
import Layout from './Layout';

const Tariffs = () => {

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
        <title>CLEVER DUCK | Тарифи</title>
        <meta 
          name="keywords" 
          content="Замовити тиждень два тижні Ранковий Стандартний Найпопулярніший Все включено Привозимо у будь-який час Кладемо їстівний подарунок
          Ви самі обираєте бренди Корм Привозимо навіть у вихідні Кладемо іграшку" 
        />
        <meta name="description" content="Тарифи" />
      </Head>

      <div className={styles.Tariffs}>
        <h1 className={`title ${styles.Tariffs__title}`}>Тарифи</h1>

        <div className={styles.Tariffs__card}>
          <div className={styles.Tariffs__item}>
            <span className={styles.Tariffs__name}>Ранковий</span>
            <div className={styles.Tariffs__price}>700 ₴</div>
            <span 
              className={`small_text small_text--grey ${styles.Tariffs__text}`}
            >
              Тиждень
            </span>
          </div>

          <div className={styles.Tariffs__item}>
            <span 
              className={`small_text small_text--grey ${styles.Tariffs__text}`}
            >
              Привозимо з 06 до 11:30
            </span>
            <span 
              className={`small_text small_text--grey ${styles.Tariffs__text}`}
            >
              Кладемо їстівний подарунок
            </span>
            <span 
              className={`small_text small_text--grey ${styles.Tariffs__text}`}
            >
              Ви самі обираєте бренди
            </span>
          </div>

          <div className={styles.Tariffs__item}>
            <span 
              className={`small_text small_text--grey ${styles.Tariffs__text}`}
            >
              Корм на 1250кк/день
            </span>
            <span 
              className={`small_text small_text--grey ${styles.Tariffs__text}`}
            >
              Привозимо навіть у вихідні
            </span>
            <span 
              className={`small_text small_text--grey ${styles.Tariffs__text}`}
            >
              Кладемо іграшку
            </span>
          </div>

          <div className={styles.Tariffs__item}>
            <OrderButton 
              buttonColor="--pink"
            />
          </div>
        </div>

        <div className={styles.Tariffs__card}>
          <div className={styles.Tariffs__item}>
            <span className={styles.Tariffs__name}>Стандартний</span>
            <div className={styles.Tariffs__price}>1250 ₴</div>
            <span 
              className={`small_text small_text--grey ${styles.Tariffs__text}`}
            >
              Тиждень
            </span>
          </div>

          <div className={styles.Tariffs__item}>
            <span 
              className={`small_text small_text--grey ${styles.Tariffs__text}`}
            >
              Привозимо з 10 до 18
            </span>
            <span 
              className={`small_text small_text--grey ${styles.Tariffs__text}`}
            >
              Кладемо їстівний подарунок
            </span>
            <span 
              className={`small_text small_text--grey ${styles.Tariffs__text}`}
            >
              Ви самі обираєте бренди
            </span>
          </div>

          <div className={styles.Tariffs__item}>
            <span 
              className={`small_text small_text--grey ${styles.Tariffs__text}`}
            >
              Корм на 1450кк/день
            </span>
            <span 
              className={`small_text small_text--grey ${styles.Tariffs__text}`}
            >
              Привозимо навіть у вихідні
            </span>
            <span 
              className={`small_text small_text--grey ${styles.Tariffs__text}`}
            >
              Кладемо іграшку
            </span>
          </div>

          <div className={styles.Tariffs__item}>
            <OrderButton 
              buttonColor="--pink"
              loaderColor="--grey"
            />
          </div>
        </div>

        <div className={`${styles.Tariffs__card} ${styles.pink}`}>
          <div className={styles.Tariffs__item}>
            <span className={`${styles.Tariffs__name} ${styles.white}`}>
              Найпопулярніший
            </span>
            <div className={`${styles.Tariffs__price} ${styles.white}`}>
              2000 ₴
            </div>
            <span 
              className={`small_text small_text--white ${styles.Tariffs__text}`}
            >
              Два тижні
            </span>
          </div>

          <div className={styles.Tariffs__item}>
            <span 
              className={`small_text small_text--white ${styles.Tariffs__text}`}
            >
              Привозимо у будь-який час
            </span>
            <span 
              className={`small_text small_text--white ${styles.Tariffs__text}`}
            >
              Кладемо їстівний подарунок
            </span>
            <span 
              className={`small_text small_text--white ${styles.Tariffs__text}`}
            >
              Ви самі обираєте бренди
            </span>
          </div>

          <div className={styles.Tariffs__item}>
            <span 
              className={`small_text small_text--white ${styles.Tariffs__text}`}
            >
              Корм на 1500кк/день
            </span>
            <span 
              className={`small_text small_text--white ${styles.Tariffs__text}`}
            >
              Привозимо навіть у вихідні
            </span>
            <span 
              className={`small_text small_text--white ${styles.Tariffs__text}`}
            >
              Кладемо три іграшки
            </span>
          </div>

          <div className={styles.Tariffs__item}>
            <OrderButton 
              buttonColor="--grey"
              loaderColor="--pink"
            />
          </div>
        </div>

        <div className={styles.Tariffs__card}>
          <div className={styles.Tariffs__item}>
            <span className={styles.Tariffs__name}>Все включено</span>
            <div className={styles.Tariffs__price}>2500 ₴</div>
            <span 
              className={`small_text small_text--grey ${styles.Tariffs__text}`}
            >
              Два тижні
            </span>
          </div>

          <div className={styles.Tariffs__item}>
            <span 
              className={`small_text small_text--grey ${styles.Tariffs__text}`}
            >
              Привозимо у будь-який час
            </span>
            <span 
              className={`small_text small_text--grey ${styles.Tariffs__text}`}
            >
              Кладемо їстівний подарунок
            </span>
            <span 
              className={`small_text small_text--grey ${styles.Tariffs__text}`}
            >
              Ви самі обираєте бренди
            </span>
          </div>

          <div className={styles.Tariffs__item}>
            <span 
              className={`small_text small_text--grey ${styles.Tariffs__text}`}
            >
              Корм на 1700кк/день
            </span>
            <span 
              className={`small_text small_text--grey ${styles.Tariffs__text}`}
            >
              Привозимо навіть у вихідні
            </span>
            <span 
              className={`small_text small_text--grey ${styles.Tariffs__text}`}
            >
              Кладемо три іграшки
            </span>
          </div>

          <div className={styles.Tariffs__item}>
            <OrderButton 
              buttonColor="--pink"
              loaderColor="--grey"
            />
          </div>
        </div>
      </div>

    </Layout>
  );
};

export default Tariffs;
