import React from 'react';

const TestAPIPres = ({ dbData }) => {
  return (
    <div>
      <div className='apiCards'>
        {dbData.map((item) => (
          <div className='apiCard'>
            <li className='apiItem' item={item.id}>
              {item.title}
            </li>
            <li className='apiItem' item={item.id}>
              {item.body}
            </li>
            <li className='apiItem' item={item.id}>
              {item.userId}
            </li>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestAPIPres;
