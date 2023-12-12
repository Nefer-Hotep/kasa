import { useEffect, useState } from 'react';

// Définition d'un hook personnalisé pour effectuer des requêtes fetch
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect est utilisé pour exécuter le code de fetch après le premier
  // rendu et à chaque changement d'URL
  useEffect(() => {
    // Fonction asynchrone interne pour effectuer la requête fetch
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }
        const json = await res.json();
        setData(json); // Met à jour l'état 'data' avec les données JSON récupérées
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]); // Le hook useEffect est dépendant de l'URL,
  // il se réexécutera si l'URL change

  // Retourne les états pour les utiliser dans les composants
  return { data, error, loading };
};

export default useFetch;
