import Link from 'next/link';
import MainPageNav from '../components/MainPageNav';
import styles from '../styles/modules/MobileMenu.module.scss';

const MobileMenu = () => {
  return (
    <div className={styles.MobileMenu}>
      <div className={styles.MobileMenu__header}>
        <span className={styles.MobileMenu__title}>Меню</span>
        <div>
          <Link
            aria-label="cross button"
            role="button"
            className="icon icon--cross"
            href={'/'} 
          />
        </div>
      </div>
      <div className={styles.MobileMenu__content}>
        <MainPageNav 
          style={'--mobile'}
        />
      </div>
    </div>
  );
};

export default MobileMenu;
