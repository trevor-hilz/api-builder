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

  const postTestDB2 = useCallback(async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: 'bananas',
          body: 'are awesome',
          userId: 15,
        }),
      });
      if (!res.ok) throw new Error(`Response Status: ${res.status}`);
      const data = await res.json();
      console.log('test 2: ', data);
      setTestDB((prev) => [...prev, data]);
    } catch (error) {
      console.error(error.message);
    }
  }, []);

  const fifteen = 15;

  const deleteTestDB2 = useCallback(async () => {
    const url = `https://jsonplaceholder.typicode.com/posts/${fifteen}`;
    try {
      const res = await fetch(url, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await res.json();
      setTestDB((prev) => prev.filter((item) => item.userId !== fifteen));
    } catch (error) {
      console.error(error.message);
    }
  }, []);

  const fourteen = 99;

  const deleteTestDB = useCallback(async () => {
    const url = `https://jsonplaceholder.typicode.com/posts`;
    try {
      const res = await fetch(url, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });
      console.log(`RESPONSE STATUS: ${res.status}`);
      setTestDB((prev) => prev.filter((item) => item.id !== fourteen));
    } catch (error) {
      console.error(error.message);
    }
  }, []);

  // const update = 20;

  // const updateTestDB = useCallback(async() => {
  //   const url = `https://jsonplaceholder.typicode.com/posts/${update}`
  //   try{
  //     const res = await fetch(url, {
  //       method: "PUT",
  //       headers: {'Content-Type': 'application/json'}
  //     })
  //     const data = res.json();
  //     setTestDB
  //   }
  // })

  useEffect(() => {
    fetchSwapi();
    fetchTestDB();
  }, [fetchSwapi, fetchTestDB]);

  return (
    <div>
      <SwapiPres swapi={getSwapi} testDB={getTestDB} />
      <button onClick={fetchTestDB}>TestDB</button>
      <button onClick={postTestDB}>POSTDB</button>
      <button onClick={postTestDB2}>POSTDB2</button>
      <button onClick={deleteTestDB}>DeleteDB</button>
      <button onClick={deleteTestDB2}>DeleteDB2</button>
    </div>
  );
};

export default SwapiLogic;
