import HomeImage from "../style/assets/img/home-image.png"

function Banner() {
  return (
      <div className='main__banner'>
        <img src={HomeImage} alt='Rivage rocheux' />
        <h2>Chez vous, partout et ailleurs</h2>
      </div>
  );
}

export default Banner;
