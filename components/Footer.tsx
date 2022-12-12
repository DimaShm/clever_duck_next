import Link from 'next/link';
import MainPageNav from './MainPageNav';
import styles from '../styles/modules/Footer.module.scss';

const Footer = () => {
  return(
    <div className={styles.Footer}>
      <div className={styles.Footer__block}>
        <Link href={'/'}>
          <div 
            aria-label="logo"
            role="button"
            className={`logo ${styles.Footer__logo}`}
          >
            <div className="logo__img logo__img--footer" />
            <span className="logo__title">CLEVER DUCK</span>
          </div>
        </Link>
        <p className={`small_text small_text--white ${styles.Footer__message}`}>
          Здоров’я вашого <br /> вихованця в ваших руках
        </p>
        <div className={styles.Footer__socials}>
          <a 
            href="https://www.instagram.com"
            target="_blank"
            className="icon icon--instagram_white"
            rel="noreferrer"
          />
          <a 
            href="https://telegram.com" 
            target="_blank"
            className="icon icon--telegram_white"
            rel="noreferrer"
          />
          <a 
            href="https://www.facebook.com"
            target="_blank"
            className="icon icon--facebook_white"
            rel="noreferrer"
          />
        </div>
      </div>
      <div className={styles.Footer__block}>
        <div className={styles.Footer__menu}>
          <MainPageNav 
            style={''}
          />
        </div>
      </div>
      <div className={styles.Footer__block}>
        <ul className="menu menu--contacts">
          <li className="menu__item">
            <a 
              aria-label="telephone number"
              href="tel:+380654220173"
              className="small_text small_text--light_grey menu__link"
            >
              +380654220173
            </a>
          </li>
          <li className="menu__item">
            <a
              aria-label="telephone number" 
              href="tel:+380966550112"
              className="small_text small_text--light_grey menu__link"
            >
              +380966550112
            </a>
          </li>
          <li className="menu__item">
            <a 
              aria-label="email"
              href="mailto:Petcare@hello.com"
              className="small_text small_text--light_grey menu__link"
            >
              cleverduck@gmail.com
            </a>
          </li>
          <li className="menu__item">
            <Link
              aria-label="privacy policy"
              href={'/PrivacyPolicy'}
              className="small_text small_text--light_grey menu__link"
            >
               політика конфіденційності
            </Link>
          </li>
        </ul>
      </div>
  </div>
  );
}

export default Footer;
