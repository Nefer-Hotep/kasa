import propTypes from 'prop-types'

function Card({cover, title}) {
  return (
    <>
      <img src={cover} className='card__img' alt={cover} />
      <h2 className='card__title'>{title}</h2>
    </>
  );
}

Card.propTypes = {
  cover: propTypes.string,
  title: propTypes.string
}

export default Card;
