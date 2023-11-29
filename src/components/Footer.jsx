import LogoFooter from '../style/assets/icons/logo-footer.svg';

function Footer() {
  return (
    <>
      <footer className='footer'>
        <div className='footer__box'>
          <img src={LogoFooter} alt='Logo Kasa' />
          <h2>© 2020 Kasa. All rights reserved</h2>
        </div>
      </footer>
    </>
  );
}

export default Footer;
