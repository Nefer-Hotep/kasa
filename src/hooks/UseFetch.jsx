import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // console.log('useEffect');
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
      } finally {
        setLoading(false)
      }
    };
    fetchData();
  }, [url]);

  return { data, error, loading };
};

export default useFetch;
