import styles from '../styles/modules/PopupMenu.module.scss';

type Props = {
  setPhonesIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const PopupMenu: React.FC<Props> = ({ setPhonesIsVisible }) => {
  return (
    <div
      aria-label="меню с двумя телефонами"
      className={styles.PopupMenu}
      onMouseLeave={() => {setPhonesIsVisible(false)}}
    >
      <div className={styles.PopupMenu__pointer} />
      
      <div className={styles.PopupMenu__content}>
        <span className={styles.PopupMenu__number}>
          <a 
            aria-label="Телефонний номер +380654220173"
            href="tel:+380654220173"
            onClick={() => {setPhonesIsVisible(false)}}
            >
            +380654220173
          </a>
        </span>

        <span className={styles.PopupMenu__number}>
          <a 
            aria-label="Телефонний номер +380966550112"
            href="tel:+380966550112"
            onClick={() => {setPhonesIsVisible(false)}}
          >
            +380966550112
          </a>
        </span>
      </div>
    </div>
  );
};

export default PopupMenu;
