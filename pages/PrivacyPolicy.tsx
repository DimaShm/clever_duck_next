import { useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from '../styles/modules/PrivacyPolicy.module.scss';

const PrivacyPolicy = () => {

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

      <div className={styles.PrivacyPolicy}>
        <h1>Privacy policy page</h1>
      </div>
      
      <Footer />
    </>
  );
};

export default PrivacyPolicy;