import Head from 'next/head';
import { SyntheticEvent, useEffect, useState } from 'react';
import styles from '../styles/modules/Payment.module.scss';
import Layout from './Layout';
import Image from 'next/image';
import map from '../public/img/any/map.png';
import { useRouter } from 'next/router';
import Loader from '../components/Loader';
import { tariffs } from '../data/tariffs';

const Payment: React.FC = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [formNotFilled, setFormNotFilled] = useState(true);
  const [isTariffsVisivle, setIsTariffsVisible] = useState(false);
  const [tariff, setTariff] = useState('');
  let currentTariff: string = '';

  useEffect(() => {
    if (window !== undefined) {
      window.scrollTo({
        top: 0, left: 0, behavior: 'smooth',
      });
      currentTariff = localStorage.getItem('currentTariff') || 'Популярний';
      setTariff(currentTariff);
    }
  }, []);

  useEffect(() => {
    if (name !== '' && address !== '' && phoneNumber !== '' ) {
      setFormNotFilled(false);
      return;
    } 
    setFormNotFilled(true);
  }, [name, address, phoneNumber]);

  const handlerTariffsItemClick = (tariffsName: string) => {
    setTariff(tariffsName);
    localStorage.setItem('currentTariff', JSON.stringify(tariffsName));
    setIsTariffsVisible(false);
  }

  const handlerFormSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      localStorage.setItem('currentTariff', JSON.stringify(currentTariff));
      router.push('/');
    }, 1000);  
  }

  return (
    <Layout headerColor="white">
      <Head>
        <title>CLEVER DUCK | Оплата</title>
        <meta 
          name="keywords" 
          content="оплата, тариф, ПІБ, номер телефону, замовити" 
        />
        <meta name="description" content="Оплата" />
      </Head>

      <div className={styles.Payment}>
        <h1 className={`title ${styles.Payment__title}`}>Оплата</h1>
        
        <form
          action="#"
          method="POST"
          className={styles.Payment__form}
          onSubmit={(e) => handlerFormSubmit(e)}
        >

          <input
            aria-label="напишить, будь ласка, свої прізвище, ім'я та по-батькові"
            name="name"
            type="text"
            value={name}
            className={styles.Payment__item}
            placeholder="ПІБ"
            required
            title={
              name === '' 
               ? `напишить, будь ласка, свої прізвище, ім'я та по-батькові`
               : ''
            }
            onChange={(e) => setName(e.currentTarget.value)}
          />

          <input
            aria-label="напишить, будь ласка, свою адресу"
            name="address"
            type="text"
            value={address}
            className={styles.Payment__item}
            placeholder="Адреса"
            required
            title={
              address === '' 
               ? 'напишить, будь ласка, свою адресу'
               : ''
            }
            onChange={(e) => setAddress(e.currentTarget.value)}
          />

          <input 
            aria-label="напишить, будь ласка, свій телефон у форматі +38**********"
            name="phone"
            type="tel"
            value={phoneNumber}
            className={styles.Payment__item}
            placeholder="Номер телефону"
            required
            title={
              address === '' 
               ? 'напишить, будь ласка, свій телефон у форматі +38**********'
               : ''
            }
            onChange={(e) => setPhoneNumber(e.currentTarget.value)}
          />

          <div 
            className={styles.Payment__tariffs}
            onMouseLeave={() => setIsTariffsVisible(false)}
           >
            <input 
              aria-label="оберіть, будь ласка, свій тариф"
              type="text"
              name="tariff"
              value={tariff}
              className={
                `${styles.Payment__item} ${styles.Payment__current_tariff}`
              }
              readOnly
              title="оберіть, будь ласка, свій тариф"
              onClick={() => setIsTariffsVisible(() => !isTariffsVisivle)}
            />

            {isTariffsVisivle &&
              <ul 
                className={styles.Payment__tariffs_list}
              >
                {tariffs.map(item =>
                  <li 
                    key={item.id}
                    className={`text ${styles.Payment__tariffs_item}`}
                    onClick={() => handlerTariffsItemClick(item.name)}
                  >
                    {item.name}
                  </li>
                )}
              </ul>
            }
          </div>

          <Image 
              src={map} 
              alt="мапа" 
              placeholder="blur"
              className={styles.Payment__map}
          />
          <button
            aria-label="замовити"
            className={`order_button order_button--pink ${styles.Payment__button}`}
            type="submit"
            disabled={formNotFilled}
            title={
              formNotFilled 
               ? 'заповнить, будь ласка, всі поля'
               : ''
            }
          >
            {isLoading 
              ? <Loader />
              : <span>Замовити</span> 
            }
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Payment;
