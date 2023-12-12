import PropTypes from 'prop-types';
import fullStar from '../style/assets/icons/full-star.svg';
import emptyStar from '../style/assets/icons/empty-star.svg';

// Définition des types attendus pour les props du composant StarRating
StarRating.propTypes = {
  rating: PropTypes.string,
};

function StarRating({ rating }) {
  const totalStars = 5;
  let stars = [];

  // Ajoute des étoiles pleines
  for (let i = 0; i < Math.floor(rating); i++) {
    // Math.floor(rating) arrondit la note à l'entier inférieur
    // Par exemple, si rating est 4.7, Math.floor(rating) sera 4
    stars.push(<img src={fullStar} alt='Full Star' key={`full-${i}`} />);
  }

  // Ajoute les étoiles vides restantes
  for (let i = Math.ceil(rating); i < totalStars; i++) {
    // Math.ceil(rating) arrondit la note à l'entier supérieur
    // Cela garantit que si rating a une partie fractionnaire (ex. 4.2),
    // l'étoile suivante sera comptée comme vide et non comme pleine
    // Par exemple, si rating est 4.2, Math.ceil(rating) sera 5
    stars.push(<img src={emptyStar} alt='Empty Star' key={`empty-${i}`} />);
  }

  return <div className='profile__rating'>{stars}</div>;
}

export default StarRating;
