import { useState } from 'react';
import propTypes from 'prop-types';

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
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

Carousel.propTypes = {
  images: propTypes.array,
};

export default Carousel;
