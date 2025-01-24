import React, { useState } from 'react';
import Images from './ImagesLogic';

const FrontPage = () => {
  const [getDisplay, setDisplay] = useState('');
  const sendToImages = (e) => {
    console.log(e);
    setDisplay(e);
  };

  if (getDisplay === 'images') {
    return (
      <div>
        <Images />
      </div>
    );
  }
  return (
    <div>
      <button
        value='images'
        onClick={(event) => sendToImages(event.target.value)}
      >
        Images
      </button>
      <button>SW-API</button>
    </div>
  );
};

export default FrontPage;
