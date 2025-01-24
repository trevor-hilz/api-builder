import React, { useState, useEffect } from 'react';
import DisplayPage from './DisplayPage';
import FrontPage from './FrontPage';

const ImagesLogic = () => {
  const [getImg, setImg] = useState('dogs');
  const [getDisplay, setDisplay] = useState('');

  // useEffect(() => {
  //   controller.cats();
  // }, []);

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

  const FrontPage = (e) => {
    console.log(e);
    setDisplay(e);
  };

  if (getDisplay === 'FrontPage') {
    return (
      <div>
        <FrontPage />
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={(event) => {
          FrontPage(event.target.value);
        }}
        value='FrontPage'
      >
        Front Page
      </button>
      <button onClick={controller.cats}>CAT</button>
      <button onClick={controller.dogs}>DOG</button>
      <img className='image' src={getImg} alt='Random animal' />
    </div>
  );
};

export default ImagesLogic;
