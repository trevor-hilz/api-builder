import React from 'react';

const DisplayBreakdown = ({ swapi }) => {
  return (
    <div className='allCards'>
      {swapi.results.map((item) => (
        <div className='styleCard'>
          <ul>
            <li className='swapiBullet' key={item.id}>
              {item.name}
            </li>
            <li className='swapiBullet' key={item.id}>
              {item.climate}
            </li>
            <li className='swapiBullet' key={item.id}>
              {item.created}
            </li>
            <li className='swapiBullet' key={item.id}>
              {item.diameter}
            </li>
            <li className='swapiBullet' key={item.id}>
              {item.population}
            </li>
            <li className='swapiBullet' key={item.id}>
              {item.orbital_period}
            </li>
            <li className='swapiBullet' key={item.id}>
              {item.surface_water}
            </li>
            <li className='swapiBullet' key={item.id}>
              {item.terrain}
            </li>
            <br></br>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default DisplayBreakdown;
