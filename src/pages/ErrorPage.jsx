import { NavLink } from 'react-router-dom';

function ErrorPage() {
  return (
    <>
      <section className='error'>
        <h1>404</h1>
        <p>Oups! La page que vous demandez n&apos;existe pas</p>
        <NavLink to='/' className='navLink'>
          Retourner sur la page d&apos;acceuil
        </NavLink>
      </section>
    </>
  );
}

export default ErrorPage;
