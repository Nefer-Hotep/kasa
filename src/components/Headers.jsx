import { Link } from 'react-router-dom';
import LogoKasa from './icons/logo.svg';

function Header() {
  return (
    <>
      <header>
        <img src={LogoKasa} alt="Logo Kasa" />
        <nav>
          <Link to='/Home'>Acceuil</Link>
          <Link to='/About'>A propos</Link>
        </nav>
      </header>
    </>
  );
}

export default Header;
