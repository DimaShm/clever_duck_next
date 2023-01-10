import { useState } from 'react';
import styles from '../styles/modules/Profile.module.scss';
import { Pet } from '../types/Pet';

type Props = {
  pet: Pet;
}

const PetCard: React.FC<Props> = ({ pet }) =>{
  const [petName, setPetName] = useState(pet.name);
  const [petBreed, setPetBreed] = useState(pet.breed);
  const [petType, setPetType] = useState(pet.type);
  const [petFavoriteDelicacy, setPetFavoriteDelicacy] = useState(pet.favoriteDelicacy);
  const [petIntolerableFoods, setPetIntolerableFoods] = useState(pet.intolerableFoods);
  const [petFavoriteToy, setPetFavoriteToy] = useState(pet.favoriteToy);

  return (
      <form
        action="#"
        method="POST"
        className={styles.Profile__form}
        style={{marginBottom: '60px'}}
      >
        <div className={styles.Profile__item}>
          <label 
            htmlFor="#petName" 
            className={`small_text ${styles.Profile__label}`}
          >
            Ім’я
          </label>
          <input
            aria-label="домашній улюблинець"
            id="#petName"
            name="petName"
            type="text"
            value={petName}
            className={styles.Profile__input}
            onChange={(e) => setPetName(e.currentTarget.value)}
          />
        </div> 

        <div className={styles.Profile__item}>
          <label 
            htmlFor="#petBreed" 
            className={`small_text ${styles.Profile__label}`}
          >
            Порода
          </label>
          <input
            aria-label="порода тваринки"
            id="#petBreed"
            name="petBreed"
            type="text"
            value= {petBreed}
            className={styles.Profile__input}
            onChange={(e) => setPetBreed(e.currentTarget.value)}
          />
        </div> 

        <div className={styles.Profile__item}>
          <label 
            htmlFor="#petType" 
            className={`small_text ${styles.Profile__label}`}
          >
             Тип тваринки
          </label>
          <input
            aria-label="Тип тваринки"
            id="#petType"
            name="#petType"
            type="text"
            value={petType}
            className={styles.Profile__input}
            onChange={(e) => setPetType(e.currentTarget.value)}
          />
        </div>

        <div className={styles.Profile__item}>
          <label 
            htmlFor="#favoriteDelicacy" 
            className={`small_text ${styles.Profile__label}`}
          >
            Улюблені ласощі
          </label>
          <input
            aria-label="Улюблені ласощі"
            id="#favoriteDelicacy"
            name="favoriteDelicacy"
            type="text"
            value={petFavoriteDelicacy}
            className={styles.Profile__input}
            onChange={(e) => setPetFavoriteDelicacy(e.currentTarget.value)}
          />
        </div> 

        <div className={styles.Profile__item}>
          <label 
            htmlFor="#intolerableFoods" 
            className={`small_text ${styles.Profile__label}`}
          >
           Непереносимі продукти
          </label>
          <input
            aria-label="Непереносимі продукти"
            id="#fintolerableFoods"
            name="intolerableFoods"
            type="text"
            value={petIntolerableFoods}
            className={styles.Profile__input}
            onChange={(e) => setPetIntolerableFoods(e.currentTarget.value)}
          />
        </div> 

        <div className={styles.Profile__item}>
          <label 
            htmlFor="#favoriteToy" 
            className={`small_text ${styles.Profile__label}`}
          >
            Улюблені іграшки
          </label>
          <input
            aria-label="Улюблені іграшки"
            id="#favoriteToy"
            name="favoriteToy"
            type="text"
            value={petFavoriteToy}
            className={styles.Profile__input}
            onChange={(e) => setPetFavoriteToy(e.currentTarget.value)}
          />
        </div>  
      </form>
  );
};

export default PetCard;