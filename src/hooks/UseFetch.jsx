import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error(error);
        setError(true);
      }
    };

    fetchData();
  }, [url]);

  return { data, error };
};

export default useFetch;
