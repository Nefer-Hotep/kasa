import PropTypes from 'prop-types';
import fullStar from '../style/assets/icons/full-star.svg';
import emptyStar from '../style/assets/icons/empty-star.svg';

StarRating.propTypes = {
  rating: PropTypes.string,
};

function StarRating({ rating }) {
  const totalStars = 5;
  let stars = [];

  // Ajoute des étoiles pleines
  for (let i = 0; i < Math.floor(rating); i++) {
    stars.push(<img src={fullStar} alt='Full Star' key={`full-${i}`} />);
  }

  // Ajoute les étoiles vides restantes
  for (let i = Math.ceil(rating); i < totalStars; i++) {
    stars.push(<img src={emptyStar} alt='Empty Star' key={`empty-${i}`} />);
  }

  return <div className='profile__rating'>{stars}</div>;
}

export default StarRating;
