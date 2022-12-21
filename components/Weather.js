import React from 'react';

function Weather({ data }) {
  console.log(data);
  return (
    <div className='mt-20 flex flex-col justify-between items-center'>
      <div>
        <h1 className='text-white text-2xl'>{data.name}</h1>
      </div>
      <div></div>
      <div className='text-white text-3xl'>{data.main.temp}</div>
      <div></div>
    </div>
  );
}

export default Weather;
