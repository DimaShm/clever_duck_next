import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import LinkFda from "../components/LinkFda";
import styles from '../styles/modules/Benefits.module.scss';
import Layout from "./Layout";
import benefitsPhoto1 from '../public/img/any/benefits_1.png';
import benefitsPhoto2 from '../public/img/any/benefits_2.png';
import benefitsPhoto3 from '../public/img/any/benefits_3.png';

const Benefits: React.FC = () => {

  useEffect(() => {
    if (window !== undefined) {
      window.scrollTo({
        top: 0, left: 0, behavior: 'smooth',
      })
    }
  }, []);

  return (
    <Layout headerColor="">

      <Head>
        <title>CLEVER DUCK | Переваги</title>
        <meta 
          name="keywords" 
          content="вказівки FDA Iндивідуальний підхід компанія дотримується норм грамування та калорійності їжі для тваринок, фасуючи тільки потрібну кількість корму та наповнювача для вашого вихованця. Для отримання консультації дзвоніть завжди уточнюємо зручний час доставки." 
        />
        <meta name="description" content="Сторінка про переваги" />
      </Head>

      <div className={styles.Benefits}>
      <section className={styles.Benefits__about}>
        <h1 className={`title ${styles.Benefits__title}`}>
          Ми дотримуємося вказівок FDA
        </h1> 
        <br />
        <Image 
          src={benefitsPhoto1} 
          alt="іотографія собаки породи лабрадор" 
          placeholder="blur"
          className={styles.Benefits__photo1}
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
        <Image 
          src={benefitsPhoto2} 
          alt="фотографія собаки породи рассел-терьер" 
          placeholder="blur"
          className={styles.Benefits__photo2}
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
        <Image 
          src={benefitsPhoto3} 
          alt="фотографія кішки" 
          placeholder="blur"
          className={styles.Benefits__photo3}
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
      
    </Layout>
  );
};

export default Benefits;
