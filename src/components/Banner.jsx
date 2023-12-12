import PropTypes from 'prop-types';

// Définition des types attendus pour les props du composant Banner
Banner.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
};

function Banner({ image, title }) {
  // Destructuration du titre pour obtenir deux parties séparées par un '|', avec des valeurs par défaut
  // Si 'title' existe, le divise en deux parties autour du '|', sinon utilise des chaînes vides
  const [firstTitle, lastTitle] = title ? title.split('|') : ['', ''];

  return (
    <div className='banner'>
      <img src={image} className='banner__img' alt={image} />
      <h2 className='banner__title'>
        {firstTitle}
        <br className='mobile-break' />
        {lastTitle}
      </h2>
    </div>
  );
}

export default Banner;
