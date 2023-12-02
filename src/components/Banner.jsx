import HomeImage from '../style/assets/img/home-image.png';

function Banner() {
  return (
    <div className='banner'>
      <img src={HomeImage} className='banner__img' alt='Rivage rocheux' />
      <h2 className='banner__title'>
        Chez vous,
        <br className='mobile-break' /> partout et ailleurs
      </h2>
    </div>
  );
}

export default Banner;
