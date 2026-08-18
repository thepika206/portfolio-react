import { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

function NavBar() {
  useEffect(() => {
    const navbarNavDiv = document.querySelector('#navbarNav');

    if (!navbarNavDiv) {
      return;
    }

    const closeMenu = () => navbarNavDiv.classList.remove('show');
    navbarNavDiv.addEventListener('click', closeMenu);

    return () => navbarNavDiv.removeEventListener('click', closeMenu);
  }, []);

  return (
    <nav className='fixed-top navbar navbar-expand-lg navbar-dark portfolio-nav'>
      <div className='container-fluid'>
        <Link className='navbar-brand brand-mark' to='/'>
          Patrick Cheung
        </Link>
        <button
          className='navbar-toggler nav-toggle-btn'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ms-auto nav-list-gap'>
            <li className='nav-item'>
              <NavLink
                to='/'
                end
                className={({ isActive }) => `nav-link nav-link-custom${isActive ? ' active' : ''}`}
              >
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/projects'
                className={({ isActive }) => `nav-link nav-link-custom${isActive ? ' active' : ''}`}
              >
                Projects
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/contact'
                className={({ isActive }) => `nav-link nav-link-custom${isActive ? ' active' : ''}`}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
