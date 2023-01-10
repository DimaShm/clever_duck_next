import Head from 'next/head';
import { useRouter } from 'next/router';
import { SyntheticEvent, useEffect, useState } from 'react';
import styles from '../styles/modules/CheckProfile.module.scss';
import Layout from './Layout';

const CheckProfile = () => {
  const [phoneNumber, setPhoneNumber] = useState('+38');
  const [code, setCode] = useState(0);
  const [formNotFilled, setFormNotFilled] = useState(true);
  const [isCodeFieldActive, setIsCodeFieldActive] = useState(false);
  const router = useRouter();
 
  useEffect(() => {
    if (window !== undefined) {
      window.scrollTo({
        top: 0, left: 0, behavior: 'smooth',
      });
      localStorage.setItem('isUserProfileOpen', JSON.stringify(false));
    }
  }, []);

  useEffect(() => {
    if (phoneNumber !== '' && code !== 0) {
      setFormNotFilled(false);
      return;
    } 
    setFormNotFilled(true);
  }, [phoneNumber, code]);


  const handlerFormSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
  }

  const handlerPhoneNumberChange = (phone: string) => {
    phone = phone.replace(/[^+\d]/g,'');

    if (phone.length > 13) {
      return;
    }

    phone.length < 4
     ? setPhoneNumber('+38')
     : setPhoneNumber(phone)
  }

  const handlerPhoneNumberKeyDown = (key: string) => {
    if (key !== 'Enter' || phoneNumber.length < 13) {
      setIsCodeFieldActive(false);
      return;
    }

    setIsCodeFieldActive(true);
    getCode();
  }

  function getCode() {
    const randomCode = Math.ceil(Math.random() * 1000000000);
    setCode(randomCode);
  }

  const handlerCheckProfileBtnClick = () => {
    localStorage.setItem('phoneNumber', JSON.stringify(phoneNumber));
    localStorage.setItem('isUserProfileOpen', JSON.stringify(true));
    router.push('/Profile');
  }

  return (
    <Layout headerColor="white">

    <Head>
      <meta name="keywords" content="мій профіль" />
      <meta name="description" content="Сторінка моїх особистих даних" />
    </Head>        
    
      <h1 className={`title ${styles.CheckProfile__title}`}>
        Особистий кабінет
      </h1>

      <form
        action="#"
        method="POST"
        className={styles.CheckProfile__form}
        onSubmit={(e) => handlerFormSubmit(e)}
      >
        <div className={styles.CheckProfile__item}>
          <label 
            htmlFor="#phone" 
            className={`small_text ${styles.CheckProfile__label}`}
          >
            Номер телефону
          </label>
          <input
            aria-label="напишить, будь ласка, свій телефон та натиснить <Enter>"
            id="#phone"
            name="phone"
            type="text"
            value={phoneNumber}
            className={styles.CheckProfile__input}
            required
            title={
              phoneNumber === '+38' || phoneNumber.length < 3
                ? 'напишить, будь ласка, свій телефон та натиснить <Enter>'
                : ''
            }
            onChange={(e) => handlerPhoneNumberChange(e.currentTarget.value)}
            onKeyDown={({ key }) => handlerPhoneNumberKeyDown(key)}
          />
        </div>  

        <div className={styles.CheckProfile__item}>
          <label 
            htmlFor="#code" 
            className={`small_text ${styles.CheckProfile__label}`}
          >
            Код з смс
          </label>
          <input
            aria-label="напишить, будь ласка, код із СМС"
            id="#code"
            name="code"
            type="text"
            value={code === 0 ? '' : code}
            className={styles.CheckProfile__input}
            required
            disabled={!isCodeFieldActive}
            title={
              code === 0 && true
                ? 'напишить, будь ласка, код із СМС'
                : ''
            }
            onChange={(e) => setCode(+e.currentTarget.value)}
          />
        </div>

        <button
          aria-label="Увійти"
          className={`order_button order_button--pink ${styles.CheckProfile__button}`}
          type="submit"
          disabled={formNotFilled}
          title={
            formNotFilled 
              ? 'заповнить, будь ласка, всі поля'
              : ''
          }
          onClick={handlerCheckProfileBtnClick}
        >
          <span>Увійти</span> 
        </button>
      </form>
    </Layout>
  );
};

export default CheckProfile;