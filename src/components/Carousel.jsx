import { useState } from 'react';
import propTypes from 'prop-types';

// Définition des types attendus pour les props du composant Carousel
Carousel.propTypes = {
  images: propTypes.array,
};

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    // Incrémente l'index et utilise le modulo pour revenir à 0 si l'index dépasse la longueur du tableau
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    // Décrémente l'index et utilise le modulo pour éviter les valeurs négatives
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className='carousel'>
      {images.length > 0 && (
        <>
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className='carousel__img'
          />
          {/* Counter Display */}
          <p className='carousel__counter'>
            {/* Affiche l'index de l'image courante et le total d'images */}
            {currentIndex + 1}/{images.length}
          </p>
          <button
            onClick={goToPrevious}
            className='btn__prev'
            aria-label='Previous image'
          ></button>
          <button
            onClick={goToNext}
            className='btn__next'
            aria-label='Next image'
          ></button>
        </>
      )}
    </div>
  );
}


export default Carousel;
