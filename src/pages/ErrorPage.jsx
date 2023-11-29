import { NavLink } from 'react-router-dom';
import Header from '../components/Headers';
import Footer from '../components/Footer';

function ErrorPage() {
  return (
    <>
      <Header />
      <section className='error'>
        <h1>404</h1>
        <p>Oups! La page que vous demandez n&apos;existe pas</p>
        <NavLink to='/' className='navLink'>
          Retourner sur la page d&apos;acceuil
        </NavLink>
      </section>
      <Footer />
    </>
  );
}

export default ErrorPage;
