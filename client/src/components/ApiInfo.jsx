import React, { useState, useEffect } from 'react';
import DisplayPage from './DisplayPage';

const ApiInfo = () => {
  const [getImg, setImg] = useState('dogs');
  const [getSwapi, setSwapi] = useState(null);

  useEffect(() => {
    swapi.first();
  }, []);

  const controller = {
    cats: async function getCats() {
      const url = 'https://api.thecatapi.com/v1/images/0XYvRd7oD';
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Response status: ${res.status}`);

        const json = await res.json();
        setImg(json.url);
      } catch (error) {
        console.error(error.message);
      }
    },
    dogs: async function getDogs() {
      const url =
        'https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1';
      try {
        const res = await fetch(url, {
          method: 'GET',
          headers: {
            'x-api-key':
              'live_Pgk1nnFfRprjsOfObVeBeIpMcSoOpt450tiFZxu3ukyUBTBCAKmMaiOIOwGVbalv',
          },
        });
        if (!res.ok) throw new Error(res.status);

        const data = await res.json();
        setImg(data[0].url);
      } catch (error) {
        console.error(error.message);
      }
    },
  };

  const swapi = {
    first: async function getFirstSwapi() {
      const url = 'http://swapi.dev/api/planets/';
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Response Status: ${res.status}`);

        const data = await res.json();
        setSwapi(data); // Store parsed data in state
      } catch (error) {
        console.error(error.message);
      }
    },
  };

  if (!getSwapi) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <button onClick={controller.cats}>CAT</button>
        <button onClick={controller.dogs}>DOG</button>
        <img className='image' src={getImg} alt='Random animal' />
        {getSwapi ? <DisplayPage swapi={getSwapi} /> : <div>Loading...</div>}
      </div>
    );
  }
};

export default ApiInfo;
