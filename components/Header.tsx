import Link from 'next/link';
import { useState } from 'react';
import MainPageNav from './MainPageNav';
import PopupMenu from './PopupMenu';
import styles from '../styles/modules/Header.module.scss';
import Image from 'next/image';
import logo from '../public/img/any/logo.png';

const Header = () => {
  const [phonesIsVisible, setPhonesIsVisible] = useState(false);

  const handlerPhoneButtonClick = () => {
    setPhonesIsVisible(state => !state);
    const timerId = setTimeout(() => setPhonesIsVisible(false), 5000);
    clearTimeout(timerId);
  };

  return (
    <div className={styles.Header}>
      <Link 
        aria-label="логотип CLEVER DUCK"
        href={'/'}
        role="button"
        className="logo Header__logo"
      >
        <Image 
          src={logo} 
          alt="логотип CLEVER DUCK"
          placeholder="blur"
          className="logo__img_header"
        />
        
        <span className="logo__title logo__title--header">
          CLEVER DUCK
        </span>
      </Link>
      
      <div 
        className={styles.Header__menu} 
        data-cy="header"
      >
        <MainPageNav 
          style={''}
        />
      </div>
      
      <div className={styles.Header__contacts}>
        <a
          aria-label="Перехід на нашу сторінку в telegram" 
          href="https://telegram.com" 
          target="_blank" 
          rel="noreferrer"
        >
          <div
            role="button"
            className="icon icon--telegram_big" 
          />
        </a>

        <button 
          aria-label="Відкрити меню з номерами телефонів"
          type="button"
          className="icon icon--phone"
          onClick={handlerPhoneButtonClick}
        >
          {phonesIsVisible &&
           <PopupMenu setPhonesIsVisible={setPhonesIsVisible}/>
          }
        </button>  

        <Link 
          aria-label="Відкрити навігацію"
          href={'/MobileMenu'} 
        >
          <div 
            role="button"
            className="icon icon--menu"
           />
        </Link>
      </div>
    </div>
  );
};

export default Header;
