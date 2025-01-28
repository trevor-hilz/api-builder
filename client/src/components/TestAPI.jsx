import React, { useState, useEffect, useCallback } from 'react';
import TestAPIPres from './TestAPIPres';

const TestAPI = () => {
  const [getDB, setDB] = useState([]);

  const fetchDB = useCallback(async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts/';
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`RESPONSE STATUS: ${res.status}`);
      const data = await res.json();
      console.log(`fetchDB DATA: ${data}`);
      setDB(data);
    } catch (error) {
      console.error(error.message);
    }
  });

  const addDb = useCallback(async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts/';
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: 'bananas',
          body: 'are amazing',
          userId: 0,
        }),
      });
      const data = await res.json();
      console.log(`DATA: ${data}`);
      setDB((prev) => [...prev, data]);
    } catch (error) {
      console.error(error.message);
    }
  });

  const zero = 1;

  const deleteZeroDB = useCallback(async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts/';
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      // const data = await res.json();
      // const newData = await fetch(url);
      // setDB(newData);
      setDB((prev) => prev.filter((item) => item.userId !== zero));
    } catch (error) {
      console.error(error.message);
    }
  });

  useEffect(() => {
    fetchDB();
  }, []);
  return (
    <div>
      <button onClick={fetchDB}>Fetch DB</button>
      <button onClick={addDb}>Add DB</button>
      <button onClick={deleteZeroDB}>Delete Zero</button>
      <TestAPIPres dbData={getDB} />
    </div>
  );
};

export default TestAPI;
