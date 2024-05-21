import { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import { Outlet } from 'react-router-dom';

export default function Page({ currentPage }) {
  // save currentPage without the preceeding '/'
  currentPage = currentPage.substring(1);
  
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage);
  }, [currentPage]);

  return (
    <section id='pageSection' className='my-2'>
      <h2>{capitalizeFirstLetter(currentPage) || 'About Me'}</h2>
      <div>
        <Outlet />
      </div>
    </section>
  );
}