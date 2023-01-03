import Link from 'next/link';
import { useState } from 'react';
import MainPageNav from './MainPageNav';
import PopupMenu from './PopupMenu';
import styles from '../styles/modules/Header.module.scss';
import Image from 'next/image';
import logo from '../public/img/any/logo.png';
import logoWhite from '../public/img/any/logo_white.svg';

type Props = {
  color: string;
}

const Header: React.FC<Props> = ({ color }) => {
  const [phonesIsVisible, setPhonesIsVisible] = useState(false);

  const handlerPhoneButtonClick = () => {
    setPhonesIsVisible(state => !state);
    const timerId = setTimeout(() => setPhonesIsVisible(false), 5000);
    clearTimeout(timerId);
  };

  return (
    <div 
      className={styles.Header} 
      style={color === 'white' ? {backgroundColor: `${color}`} : {}}
    >
      <Link 
        aria-label="логотип CLEVER DUCK"
        href={'/'}
        role="button"
        className={`logo Header__logo Header__logo--${color}`}
      >
        <Image 
          src={color ? logoWhite : logo} 
          alt="логотип CLEVER DUCK"
          className="logo__img_header"
        />
        
        <span className={`logo__title logo__title--header logo__title--${color}`}>
          CLEVER DUCK
        </span>
      </Link>
      
      <div 
        className={styles.Header__menu} 
        data-cy="header"
      >
        <MainPageNav 
          style={''}
          color={color}
        />
      </div>
      
      <div className={styles.Header__contacts}>
        <a
          aria-label="Перехід на нашу сторінку в telegram" 
          href="https://telegram.com" 
          target="_blank" 
          rel="noreferrer"
          className={styles.Header__contacts_item}
        >
          <div
            role="button"
            className={`icon icon--telegram_big icon--telegram_big_${color}`}
          />
        </a>

        <button 
          aria-label="Відкрити меню з номерами телефонів"
          type="button"
          className={
            `icon icon--phone icon--phone_${color} ${styles.Header__contacts_item}`
          }
          onClick={handlerPhoneButtonClick}
        >
          {phonesIsVisible &&
           <PopupMenu setPhonesIsVisible={setPhonesIsVisible}/>
          }
        </button>  

        <Link 
          aria-label="Відкрити навігацію"
          href={'/MobileMenu'} 
          className={styles.Header__contacts_item}
        >
          <div 
            role="button"
            className={`icon icon--menu icon--menu_${color}`}
          />  
        </Link>

        <Link 
          aria-label="Мій профіль"
          href={'/Profile'} 
          className={styles.Header__contacts_item}
        >
          <div 
            role="button"
            className={`icon icon--profile icon--profile_${color}`}
          />  
        </Link>
      </div>
    </div>
  );
};

export default Header;
