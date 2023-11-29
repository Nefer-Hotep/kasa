import { NavLink } from 'react-router-dom';
import LogoKasa from '../style/assets/icons/logo-kasa.svg';

function Header() {
  return (
    <>
      <header className='header'>
        <img src={LogoKasa} alt='Logo Kasa' />
        <nav className='nav'>
          <NavLink to='/' className='navLink'>
            Acceuil
          </NavLink>
          <NavLink to='/About' className='navLink'>
            A Propos
          </NavLink>
        </nav>
      </header>
    </>
  );
}

export default Header;
