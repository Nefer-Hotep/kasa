import ErrorPage from './ErrorPage';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/UseFetch';
import Carousel from '../components/Carousel';
import StarRating from '../components/StarRating';
import Dropdown from '../components/Dropdown';

function Rental() {
  const { id } = useParams();
  const { data, error } = useFetch('../data.json');

  if (error) {
    return <ErrorPage />;
  }

  const rentalData = data?.find((item) => item.id === id);

  const images = rentalData?.pictures;
  const title = rentalData?.title;
  const location = rentalData?.location;
  const tags = rentalData?.tags;
  const name = rentalData?.host.name;
  const profilePic = rentalData?.host.picture;
  const rating = rentalData?.rating;
  const description = rentalData?.description;
  const equipements = rentalData?.equipments;

  const [firstName, lastName] = name ? name.split(' ') : ['', ''];

  return (
    <main className='main'>
      {rentalData && (
        <>
          <Carousel images={images} />
          <div className='rental'>
            <div className='article-header'>
              <h1 className='article-header__title'>{title}</h1>
              <h2 className='article-header__location'>{location}</h2>
              <div className='article-header__tags'>
                {tags.map((element) => (
                  <p key={element}>{element}</p>
                ))}
              </div>
            </div>
            <div className='profile'>
              <div className='profile__container'>
                <div className='profile__name'>
                  <span className='profile__firstName'>{firstName}</span>
                  <br />
                  <span className='profile__lastName'>{lastName}</span>
                </div>
                <img
                  className='profile__img'
                  src={profilePic}
                  alt={`Photo de profile de ${name}`}
                />
              </div>
              <StarRating rating={rating} />
            </div>
          </div>
          <div className='rental-dropdown'>
            <Dropdown title={'Description'} text={description} />
            <Dropdown title={'Equipements'} items={equipements} />
          </div>
        </>
      )}
    </main>
  );
}

export default Rental;
