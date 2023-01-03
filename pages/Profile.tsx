import Head from 'next/head';
import { useEffect } from 'react';
import styles from '../styles/modules/Profile.module.scss';
import Layout from './Layout';

const Profile = () => {

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
      <meta name="keywords" content="мій профіль" />
      <meta name="description" content="Сторінка моїх особистих даних" />
    </Head>

      <div
        aria-label="мій профіль"
        className={styles.Profile}
      >
        <h1>Мій профіль</h1>
      </div>
      
    </Layout>
  );
};

export default Profile;