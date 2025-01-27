import React, { useState, useEffect } from 'react';
import SwapiPres from './SwapiPres';

const SwapiLogic = () => {
  const [getSwapi, setSwapi] = useState('');

  useEffect(() => {
    controller.swapi();
  }, []);

  const controller = {
    swapi: async function getSwapi() {
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
    },
  };

  return (
    <div>
      <SwapiPres swapi={getSwapi} />
    </div>
  );
};

export default SwapiLogic;
