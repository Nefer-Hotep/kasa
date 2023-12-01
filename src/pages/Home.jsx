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
        <section className='main__gallery'>
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                <img src={item.cover} alt='' />
                <h2>{item.title}</h2>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export default Home;
