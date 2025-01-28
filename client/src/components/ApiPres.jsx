import React from 'react';

const ApiPres = ({ data }) => {
  return (
    <div>
      <div className='allApiCards'>
        {data.map((item) => (
          <div className='eachApiCard'>
            <li className='eachApiItem' item={item.id}>
              {item.userId}
            </li>
            <li className='eachApiItem' item={item.id}>
              {item.title}
            </li>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApiPres;
