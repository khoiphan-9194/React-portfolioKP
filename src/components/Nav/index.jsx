import { Link } from 'react-router-dom';
import { capitalizeFirstLetter } from '../../utils/helpers';
import './Nav.css';

export const Nav = ({ currentPage }) => {
  const pages = ['portfolio', 'contact', 'resume'];

  const listItems = pages.map((Page) => (
    <li className={`${currentPage === `/${Page}` && 'navActive'}`} key={Page}>
      <Link to={`/${Page}`}>{capitalizeFirstLetter(Page)}</Link>
    </li>
  ));

  return (
    <nav>
      <ul>
        <li className={`${currentPage === '/' && 'navActive'}`} key='about'>
          <Link to='/'>About</Link>
        </li>
        {listItems}
      </ul>
    </nav>
  );
}