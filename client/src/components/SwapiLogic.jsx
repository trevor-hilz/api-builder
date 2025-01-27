import React, { useState, useEffect, useCallback } from 'react';
import SwapiPres from './SwapiPres';

const SwapiLogic = () => {
  const [getSwapi, setSwapi] = useState(null);
  const [getTestDB, setTestDB] = useState([]);

  const fetchSwapi = useCallback(async () => {
    const url = 'https://swapi.dev/api/planets/';
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Response Status: ${res.status}`);
      const data = await res.json();
      console.log('swapi data: ', data);
      setSwapi(data);
    } catch (error) {
      console.error(error.message);
    }
  }, []);

  const fetchTestDB = useCallback(async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log('TESTDB: ', data);
      setTestDB(data);
    } catch (error) {
      console.error(error.message);
    }
  }, []);

  const postTestDB = useCallback(async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: 'testing',
          body: 'testing',
          userId: 14,
        }),
      });
      const data = await res.json();
      console.log(data);
      setTestDB((prev) => [...prev, data]);
    } catch (error) {
      console.error(error.message);
    }
  }, []);

  useEffect(() => {
    fetchSwapi();
    fetchTestDB();
  }, [fetchSwapi, fetchTestDB]);

  return (
    <div>
      <SwapiPres swapi={getSwapi} testDB={getTestDB} />
      <button onClick={fetchTestDB}>TestDB</button>
      <button onClick={postTestDB}>POSTDB</button>
    </div>
  );
};

export default SwapiLogic;
