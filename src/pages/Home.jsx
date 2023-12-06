import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/UseFetch';
import ErrorPage from './ErrorPage';
import Card from '../components/Card';

function Home() {
  const { data, error } = useFetch('../data.json');

  if (error) {
    return <ErrorPage />;
  }

  return (
    <main className='main'>
      <Banner />
      <ul className='gallery'>
        {data?.map((item, index) => (
          <Link to={{ pathname: `/rental/${item.id}` }} key={index} className='card'>
            <Card cover={item.cover} title={item.title} />
          </Link>
        ))}
      </ul>
    </main>
  );
}

export default Home;
