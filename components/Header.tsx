import Link from 'next/link';
import { useState } from 'react';
import MainPageNav from './MainPageNav';
import PopupMenu from './PopupMenu';
import styles from '../styles/modules/Header.module.scss';

const Header = () => {
  const [phonesIsVisible, setPhonesIsVisible] = useState(false);

  const handlerPhoneButtonClick = () => {
    setPhonesIsVisible(state => !state);
    const timerId = setTimeout(() => setPhonesIsVisible(false), 5000);
    clearTimeout(timerId);
  };

  return (
    <div className={styles.Header}>
      <Link href={'/'}>
        <div 
          aria-label="logo"
          role="button"
          className="logo Header__logo"
        >
          <div className="logo__img logo__img--header" />
          <span className="logo__title logo__title--header">CLEVER DUCK</span>
        </div>
     </Link>
      
      <div className={styles.Header__menu} data-cy="header">
        <MainPageNav 
          style={''}
        />
      </div>
      
      <div className={styles.Header__contacts}>
        <a
          aria-label="telegram" 
          role="button"
          href="https://telegram.com" 
          target="_blank" 
          rel="noreferrer"
        >
          <div
            aria-label="telegram"
            role="button"
            className="icon icon--telegram_big" 
          />
        </a>

        <button 
          aria-label="phone"
          type="button"
          className="icon icon--phone"
          onClick={handlerPhoneButtonClick}
        >
          {phonesIsVisible &&
           <PopupMenu setPhonesIsVisible={setPhonesIsVisible}/>
          }
        </button>  

        <Link 
          href={'/MobileMenu'} 
        >
          <div 
            aria-label="menu"
            role="button"
            className="icon icon--menu"
           />
        </Link>
      </div>
    </div>
  );
};

export default Header;
