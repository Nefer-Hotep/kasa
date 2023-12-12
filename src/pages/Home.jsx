import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/UseFetch';
import ErrorPage from './ErrorPage';
import Card from '../components/Card';
import Loader from '../utils/Loader';
import HomeImage from '../style/assets/img/home-image.png';

function Home() {
  // Utilise le hook useFetch pour récupérer les données depuis '../data.json'
  const { data, error, loading } = useFetch('../data.json');

  if (loading) return <Loader />;

  if (error) {
    return <ErrorPage />;
  }

  // Définition du titre pour le composant Banner avec le symbole "|",
  //  pour faire la séparation du titre en version mobile
  const bannerTitle = 'Chez vous, | partout et ailleurs';

  return (
    <main className='main'>
      <Banner image={HomeImage} title={bannerTitle} />
      <ul className='gallery'>
        {data?.map((item, index) => ( // Mappe chaque élément de data à un Card dans un Link
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
