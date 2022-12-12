import { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LinkFda from "../components/LinkFda";
import styles from '../styles/modules/Benefits.module.scss';

const Benefits: React.FC = () => {

  useEffect(() => {
    if (window !== undefined) {
      window.scrollTo({
        top: 0, left: 0, behavior: 'smooth',
      })
    }
  }, []);

  return (
    <>
      <Header />

      <div className={styles.Benefits}>
      <section className={styles.Benefits__about}>
        <h1 className={`title ${styles.Benefits__title}`}>
          Ми дотримуємося вказівок FDA
        </h1> 
        <br />
        <div
          aria-label="dogs photo" 
          className={`${styles.Benefits__photo} ${styles.Benefits__photo1}`}
        />
        <p className={`text ${styles.Benefits__text}`}>
          На жаль, дослідження показують, що більшість власників собак не дотримуються <LinkFda /> щодо кормів для домашніх тварин через брак часу, зусиль чи обізнаності. Їх впровадження можуть значно зменшити випадки бактеріальних захворювань та зараження собак.
          <br /> <br />
          Наша компанія дотримується всіх норм грамування та калорійності їжі для тваринок, фасуючи тільки потрібну кількість корму та наповнювача для вашого вихованця. Для отримання консультації дзвоніть на гарячу лінію чи пишіть в наш телеграм.
        </p>
      </section>

      <section className={styles.Benefits__care}>
        <h1 
          className={
            `title ${styles.Benefits__title} ${styles.Benefits__title_care}`
          }
        >
          Індивідуальний підхід
        </h1> 
        <br />
        <div
          aria-label="dogs photo" 
          className={`${styles.Benefits__photo} ${styles.Benefits__photo2}`}
        />
        <p 
          className={`text ${styles.Benefits__text} ${styles.Benefits__text_care}`}
        >
          Так як наша команда піклується про те, щоб наші клієнти були задоволеними, 
          до кожного з них ми маємо індивідуальний підхід.
          <br /><br />
          Ми завжди уточнюємо зручний час доставки з кожним покупцем i можемо змінити його, якщо у вас не буде можливості забрати замовлення.
        </p>
      </section>

      <section className={styles.Benefits__bonus}>
        <h1 
          className={`title ${styles.Benefits__title} ${styles.Benefits__title_bonus}`}
        >
          Додаткові приємності
        </h1> 
        <div
          aria-label="cats photo"
          className={`${styles.Benefits__photo} ${styles.Benefits__photo3}`}
        />
        <p 
          className={`text ${styles.Benefits__text} ${styles.Benefits__text_bonus}`}
        >
          Крім цього, в кожне замовлення ми додаємо приємні подарунки та іграшки для ваших улюбленців.
          <br /><br />
          З нами в будь-який момент ви зможете повідомити нас про потрібність поповнення запасів для вашої тваринки
          <br />
          i ми привеземо вам їжу.
        </p>
      </section>
      </div>
      
      <Footer />
    </>
  );
};

export default Benefits;
