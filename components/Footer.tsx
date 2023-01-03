import Link from 'next/link';
import MainPageNav from './MainPageNav';
import styles from '../styles/modules/Footer.module.scss';
import Image from 'next/image';
import logo from '../public/img/any/logo.png';
import footerPhoto from '../public/img/any/footer.png';

const Footer = () => {
  return(
    <div className={styles.Footer}>
      <div className={styles.Footer__block}>
        <Link href={'/'}
          aria-label="логотип CLEVER DUCK"
          role="button"
          className="logo"
        >
          <Image 
            src={logo} 
            alt="логотип CLEVER DUCK"
            placeholder="blur"
            className="logo__img_footer"
          />
          
          <span className="logo__title logo__title--footer">
            CLEVER DUCK
          </span>
        </Link>
        <p className={`small_text small_text--white ${styles.Footer__message}`}>
          Здоров’я вашого <br /> вихованця в ваших руках
        </p>
        <div className={styles.Footer__socials}>
          <a 
            aria-label="Наша сторінка инстаграм"
            href="https://www.instagram.com"
            target="_blank"
            className="icon icon--instagram_white"
            rel="noreferrer"
          />
          <a 
            aria-label="Наша сторінка телеграм"
            href="https://telegram.com" 
            target="_blank"
            className="icon icon--telegram_white"
            rel="noreferrer"
          />
          <a 
            aria-label="Наша сторінка фейсбук"
            href="https://www.facebook.com"
            target="_blank"
            className="icon icon--facebook_white"
            rel="noreferrer"
          />
        </div>
      </div>

      <div className={styles.Footer__block}>
        <div
          aria-label="панель навігації" 
          className={styles.Footer__menu}
        >
          <MainPageNav 
            style={''}
            color={''}
          />
        </div>
      </div>
      <div className={styles.Footer__block}>
        <ul 
          aria-label="контакти" 
          className="menu menu--contacts"
        >
          <li className="menu__item">
            <a 
              aria-label="Позвонити по телефону +380654220173"
              href="tel:+380654220173"
              className="small_text small_text--light_grey menu__link"
            >
              +380654220173
            </a>
          </li>
          <li className="menu__item">
            <a
              aria-label="Позвонити по телефону +380966550112"
              href="tel:+380966550112"
              className="small_text small_text--light_grey menu__link"
            >
              +380966550112
            </a>
          </li>
          <li className="menu__item">
            <a 
              aria-label="Написати листа на пошту: mailto:Petcare@hello.com"
              href="mailto:Petcare@hello.com"
              className="small_text small_text--light_grey menu__link"
            >
              cleverduck@gmail.com
            </a>
          </li>
          <li className="menu__item">
            <Link
              aria-label="Перейти на страницю политика конфіденційності"
              href={'/PrivacyPolicy'}
              className="small_text small_text--light_grey menu__link"
            >
               політика конфіденційності
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.Footer__block}>
        <Image 
          src={footerPhoto} 
          alt="Фотографія собаки породи чихуа-хуа" 
          placeholder="blur"
          className={styles.Footer__photo}
        />
      </div>
  </div>
  );
}

export default Footer;
