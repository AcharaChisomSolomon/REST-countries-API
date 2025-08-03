import React from 'react';

// Simple in-memory cache
const cache = new Map();

export function useFetch(url) {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    console.log('running')
    let ignore = false;
    setLoading(true);
    setError(null);

    // Check cache first
    if (cache.has(url)) {
      console.log('Using cached data for:', url);
      setData(cache.get(url));
      setLoading(false);
      return;
    }

    const handleFetch = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        if (ignore) {
          return;
        }

        const responseData = await response.json();
        
        // Cache the response
        cache.set(url, responseData);
        console.log('Cached data for:', url);
        
        setData(responseData);
        setError(null);
        setLoading(false);
      } catch (e) {
        if (!ignore) {
          setError(e.message);
          setLoading(false);
        }
      }
    };

    handleFetch();

    return () => {
      ignore = true;
    };
  }, [url]);

  return { data, loading, error };
}