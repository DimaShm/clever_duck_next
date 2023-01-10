import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import PetCard from '../components/PetCard';
import styles from '../styles/modules/Profile.module.scss';
import { Pet } from '../types/Pet';
import { User } from '../types/User';
import { pets } from './api/pets';
import { users } from './api/users';
import Layout from './Layout';

const Profile = () => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState('');
  const [petsList, setPetsList] = useState<Pet[]>([]);
  let phoneNumber: string;

  useEffect(() => {
    if (window !== undefined) {
      window.scrollTo({
        top: 0, left: 0, behavior: 'smooth',
      });
      phoneNumber = localStorage.getItem('phoneNumber') || '';
      console.log(phoneNumber);
    }
    const personPhone = (phone: string) => `"${phone}"`;
    setUser(
      users.find(person => personPhone(person.phone) === phoneNumber) || null
    );
    console.log(user);

  }, []);

  useEffect(() => {
    setPetsList(
      pets.filter(pet => pet.userId === user?.id) || []
    ); 
  }, [user]);

  const handlerPetAddClick = () => {
    if (!user) {
      return;
    }
    const newPet: Pet= {
      id: pets[pets.length - 1].id + 1,
      userId: user.id,
      name: '',
      type: '',
      breed: '',
      intolerableFoods: '',
      favoriteDelicacy: '',
      favoriteToy: '',
      tariff: '',
    }
    pets.push(newPet);
    petsList.push(newPet);
    setPetsList(pets.filter(pet => pet.userId === user?.id) || []);
  }
  return (
    <Layout headerColor="white">

    <Head>
      <meta name="keywords" content="мій профіль" />
      <meta name="description" content="Сторінка моїх особистих даних" />
    </Head>

      <div
        aria-label="мій профіль"
        className={styles.Profile}
      >
        <h1 className={`title ${styles.Profile__title}`}>Особистий кабінет</h1>

        <form
          action="#"
          method="POST"
          className={styles.Profile__form}
          style={{marginBottom: '60px'}}
        >
          <div className={styles.Profile__item}>
            <label 
              htmlFor="#user" 
              className={`small_text ${styles.Profile__label}`}
            >
              Користувач
            </label>
            <input
              aria-label="користувач"
              id="#user"
              name="user"
              type="text"
              value={user?.name}
              className={styles.Profile__input}
            />
          </div> 
          <div className={styles.Profile__item}>
            <label 
              htmlFor="#phone" 
              className={`small_text ${styles.Profile__label}`}
            >
              Номер телефону
            </label>
            <input
              aria-label="номер телефону"
              id="#phone"
              name="phone"
              type="text"
              value={user?.phone}
              className={styles.Profile__input}
            />
          </div>

          <div className={styles.Profile__item}>
            <label 
              htmlFor="#email" 
              className={`small_text ${styles.Profile__label}`}
            >
              Електронна адреса
            </label>
            <input
              aria-label="електронна адреса"
              id="#email"
              name="email"
              type="email"
              value={user?.email? user.email : email}
              className={styles.Profile__input}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
          </div> 

          <div className={styles.Profile__item}>
            <label 
              htmlFor="#address" 
              className={`small_text ${styles.Profile__label}`}
            >
              Адреса
            </label>
            <input
              aria-label="адреса"
              id="#address"
              name="address"
              type="text"
              value={user?.address}
              className={styles.Profile__input}
            />
          </div>  
        </form>

        <div className={styles.Profile__title_block}>
          <h1 className="title">
            Інформація про тварин
          </h1>
          <button
            aria-label="додати тваринку"
            type="button"
            className={`small_text small_text--grey ${styles.Profile__pet_add}`}
            onClick={handlerPetAddClick}
          >  
            Додати
          </button>
        </div>

        {petsList.map(pet =>
          <div key={pet.id}>
            <PetCard pet={pet}/>
          </div>
        )}

        <h1 className={`title ${styles.Profile__title}`}>Ваші тарифні плани</h1>

        <div className={styles.Profile__tariffs_field}>
          {petsList.map(pet =>
            <div 
              key={pet.id}
              className={styles.Profile__item}
            >
              <div className={styles.Profile__tariff}>
                <span>{pet.tariff}</span>
                <div style={{display:'flex', alignItems: 'center'}}>
                  <button 
                    className={styles.Profile__tariff_add}
                    onClick={() => router.push('/Tariffs')}
                  >
                    <div className="icon icon--cart"/>
                  </button> 
                  <button className={styles.Profile__tariff_remove}>
                    <div className="icon icon--cross" />
                  </button> 
                </div>
              </div>
              <span 
                className={`small_text small_text--grey ${styles.Profile__title}`}
              >
                {pet.name}
              </span>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Profile;