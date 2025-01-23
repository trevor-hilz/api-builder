import React from 'react';
import DisplayBreakdown from './DisplayBreakdown';

const DisplayPage = ({ swapi }) => {
  console.log(swapi);
  if (swapi) {
    return (
      <div>
        {/* <h1>{swapi.name || 'No Name Available'}</h1>
        <p>Climate: {swapi.climate || 'N/A'}</p> */}
        {/* <p>{swapi.results[0].name}</p> */}

        <DisplayBreakdown swapi={swapi} />
      </div>
    );
  } else {
    return null;
  }
};

export default DisplayPage;
