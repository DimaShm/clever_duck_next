import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';

type Props = {
  style: string;
  color: string;
};

const MainPageNav: React.FC<Props> = ({ style, color}) => {
  const mainLinks = [
    { id: 0, name: 'Мій профіль', path: '/Profile'},
    { id: 1, name: 'Переваги', path: '/Benefits'},
    { id: 2, name: 'Тарифи', path: '/Tariffs'},
    { id: 3, name: 'Відгуки', path: '/Reviews'},
    { id: 4, name: 'Команда', path: '/Team'},
  ];
  const { pathname } = useRouter();

  return (
    <ul className={`menu menu${style}`}>
      {mainLinks.map(link => (
        <li
          key={link.id}
          className={(classNames(
           'menu__item',
           `menu__item${style}`,
           link.id === 0
            ? 'menu__item--profile'
            : ''
          ))}  
        >
          <Link
            aria-label={`перейти на сторінку ${link.name}`}
            href={link.path}
            className={(classNames(
              'small_text',
              'menu__link', 
              `menu__link${style}`,
              `menu__link_${color}`,
              pathname === link.path 
                ? `menu__link--active menu__link_${color}--active` 
                : ''
            ))}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MainPageNav;
