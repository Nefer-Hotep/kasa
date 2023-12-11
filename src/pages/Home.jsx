import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/UseFetch';
import ErrorPage from './ErrorPage';
import Card from '../components/Card';
import Loader from '../utils/Loader';
import HomeImage from '../style/assets/img/home-image.png';

function Home() {
  const { data, error, loading } = useFetch('../data.json');

  if (loading) return <Loader />;

  if (error) {
    return <ErrorPage />;
  }
  const bannerTitle = 'Chez vous, | partout et ailleurs';

  return (
    <main className='main'>
      <Banner image={HomeImage} title={bannerTitle} />
      <ul className='gallery'>
        {data?.map((item, index) => (
          <Link
            to={{ pathname: `/rental/${item.id}` }}
            key={index}
            className='card'
          >
            <Card cover={item.cover} title={item.title} />
          </Link>
        ))}
      </ul>
    </main>
  );
}

export default Home;
