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
    <Layout>

      <div className={styles.PrivacyPolicy}>
        <h1>Privacy policy page</h1>
      </div>
      
    </Layout>
  );
};

export default PrivacyPolicy;