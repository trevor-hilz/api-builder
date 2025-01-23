import React from 'react';

const FrontPage = () => {
  const sendToImages = () => {
    //sent to images page
    //possibly use redirect?
  };
  return (
    <div>
      <button onClick={sendToImages}>Images</button>
      <button>Databases</button>
    </div>
  );
};

export default FrontPage;
