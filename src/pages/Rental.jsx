import ErrorPage from './ErrorPage';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/UseFetch';
import Carousel from '../components/Carousel';

function Rental() {
  const { id } = useParams();
  const { data, error } = useFetch('../data.json');

  if (error) {
    return <ErrorPage />;
  }

  const rentalData = data?.find((item) => item.id === id);
  const images = rentalData?.pictures

  return (
    <main className='main'>
      {rentalData && <Carousel images={images} />}
    </main>
  );
}

export default Rental;
