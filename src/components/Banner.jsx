import PropTypes from 'prop-types';

Banner.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
};

function Banner({ image, title }) {
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
