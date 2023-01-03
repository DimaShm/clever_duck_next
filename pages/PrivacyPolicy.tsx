import Head from 'next/head';
import { useEffect } from 'react';
import styles from '../styles/modules/PrivacyPolicy.module.scss';
import Layout from './Layout';

const PrivacyPolicy = () => {

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
      <meta name="keywords" content="політика конфіденційності" />
      <meta name="description" content="Сторінка політика конфіденційності" />
    </Head>

      <div
        aria-label="політика конфіденційності"
        className={styles.PrivacyPolicy}
      >
        <h1>Privacy policy page</h1>
      </div>
      
    </Layout>
  );
};

export default PrivacyPolicy;