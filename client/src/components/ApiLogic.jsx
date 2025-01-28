import React, { useState, useEffect, useCallback } from 'react';
import ApiPres from './ApiPres';

const ApiLogic = () => {
  const [GetDB, SetDB] = useState([]);

  const fetchDB = useCallback(async () => {
    const url = 'https://jsonplaceholder.typicode.com/todos/';
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`RESPONSE STATUS: ${res.status}`);
      const data = await res.json();
      console.log(`fetchDB: ${data}`);
      SetDB(data);
    } catch (error) {
      console.error(error.message);
    }
  }, []);

  const postDB = useCallback(async () => {
    const url = 'https://jsonplaceholder.typicode.com/todos/';
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: 0, title: 'bananas are amazing!' }),
      });
      const data = await res.json();
      console.log(`POST DATA: ${data}`);
      SetDB((prev) => [...prev, data]);
    } catch (error) {
      console.error(error.message);
    }
  }, []);

  const exampleVariable = 1;

  const deleteDB = useCallback(async () => {
    const url = 'https://jsonplaceholder.typicode.com/todos/';
    try {
      const res = await fetch(url, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await res.json();
      SetDB((prev) => prev.filter((item) => item.userId !== exampleVariable));
    } catch (error) {
      console.error(error.message);
    }
  }, []);

  useEffect(() => {
    fetchDB();
  }, []);

  return (
    <div>
      <button onClick={fetchDB}>Fetch DB</button>
      <button onClick={postDB}>Post DB</button>
      <button onClick={deleteDB}>Delete DB</button>
      <ApiPres data={GetDB} />
    </div>
  );
};

export default ApiLogic;
