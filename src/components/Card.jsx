import propTypes from 'prop-types'

// Définition des types attendus pour les props du composant Card
Card.propTypes = {
  cover: propTypes.string,
  title: propTypes.string
}

function Card({cover, title}) {
  return (
    <>
      <img src={cover} className='card__img' alt={cover} />
      <h2 className='card__title'>{title}</h2>
    </>
  );
}


export default Card;
