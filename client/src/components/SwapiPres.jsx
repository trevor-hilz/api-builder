import React from 'react';

const SwapiPres = ({ swapi }) => {
  if (!swapi) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className='swapiCards'>
        {swapi.results.map((item) => (
          <div className='swapiCard'>
            <ul>
              <li className='swapiItem' item={item.id}>
                {item.name}
              </li>
              <li className='swapiItem' item={item.id}>
                {item.climate}
              </li>
              <li className='swapiItem' item={item.id}>
                {item.population}
              </li>
              <li className='swapiItem' item={item.id}>
                {item.terrain}
              </li>
              <li className='swapiItem' item={item.id}>
                {item.orbital_period}
              </li>
              <li className='swapiItem' item={item.id}>
                {item.rotation}
              </li>
              <li className='swapiItem' item={item.id}>
                {item.diameter}
              </li>
            </ul>
          </div>
        ))}
      </div>
    );
  }
};

export default SwapiPres;
