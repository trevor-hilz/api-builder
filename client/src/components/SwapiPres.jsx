import React, { useState, useEffect } from 'react';

const SwapiPres = ({ swapi }) => {
  const list = [];

  if (!swapi) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className='SwapiCards'>
        {swapi.results.map((item) => (
          <div className='styleCard'>
            <ul>
              <li className='swapiItem' key={item.id}>
                {item.name}
              </li>
              <li className='swapiItem' key={item.id}>
                {item.climate}
              </li>
              <li className='swapiItem' key={item.id}>
                {item.population}
              </li>
              <li className='swapiItem' key={item.id}>
                {item.diameter}
              </li>
              <li className='swapiItem' key={item.id}>
                {item.created}
              </li>
              <li className='swapiItem' key={item.id}>
                {item.orbital_period}
              </li>
              <li className='swapiItem' key={item.id}>
                {item.surface_water}
              </li>
              <li className='swapiItem' key={item.id}>
                {item.terrain}
              </li>
            </ul>
          </div>
        ))}
      </div>
    );
  }
};

export default SwapiPres;
