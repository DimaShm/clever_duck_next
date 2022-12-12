import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';

type Props = {
  style: string;
};

const MainPageNav: React.FC<Props> = ({ style }) => {
  const mainLinks = [
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
          className={`menu__item menu__item${style}`}
        >
          <Link
            href={link.path}
            className={(classNames(
              'small_text',
              'menu__link', 
              `menu__link${style}`,
              pathname === link.path ? 'menu__link--active' : ''
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
