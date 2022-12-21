import React from 'react';

function Weather({ data }) {
  console.log(data);
  const temp = data.main.temp;
  const roundedtemp = Math.round(temp * 10) / 10;
  return (
    <div className='mt-10 flex flex-col justify-between items-center'>
      <div>
        <h1 className='text-white text-2xl'>{data.name}</h1>
      </div>
      <div></div>
      <div className='text-white text-4xl'>{roundedtemp} °C</div>
      <div>
        <h2 className='text-white'>{data.weather[0].main}</h2>
      </div>
    </div>
  );
}

export default Weather;
