import Banner from '../components/Banner';
import { NavLink } from 'react-router-dom';
import useFetch from '../hooks/UseFetch';

function Home() {

  const data  = useFetch('data.json');

  return (
    <>
      <main className='main'>
        <Banner />
        <ul className='gallery'>
          {data?.map((item, index) => (
            <NavLink
              to={{ pathname: `/Rental/${item.id}`, state: { item } }}
              key={index}
              className='card'
            >
              <img src={item.cover} className='card__img' alt={item.over} />
              <h2 className='card__title'>{item.title}</h2>
            </NavLink>
          ))}
        </ul>
      </main>
    </>
  );
}

export default Home;
