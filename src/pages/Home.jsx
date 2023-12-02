import { useState, useEffect } from 'react';
import Banner from '../components/Banner';

function Home() {
  const [items, setItems] = useState([]);

  const getData = () => {
    fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((dataJson) => setItems(dataJson));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <main className='main'>
        <Banner />
        <ul className='gallery'>
          {items.map((item, index) => (
            <li key={index} className='card'>
              <img src={item.cover} className='card__img' alt={item.over} />
              <h2 className='card__title'>{item.title}</h2>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default Home;
