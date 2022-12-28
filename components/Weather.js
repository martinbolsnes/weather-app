import React from 'react';
import 'weather-icons/css/weather-icons.css';

function Weather({ data }) {
  const temp = data.main.temp;
  const roundedtemp = Math.round(temp * 10) / 10;

  return (
    <div className='mt-10 flex flex-col justify-between items-center'>
      <div className='mb-10'>
        <h1 className='text-white text-2xl font-semibold'>{data.name}</h1>
      </div>
      <div>
        <i
          className={`wi wi-owm-${data.weather[0].id} text-9xl text-white`}
        ></i>
      </div>
      <div className='text-white text-3xl font-bold mt-10'>
        {roundedtemp} <span className='text-white opacity-60'>°C</span>
      </div>
      <div>
        <h2 className='text-white font-semibold mt-6'>
          {data.weather[0].main}
        </h2>
      </div>
    </div>
  );
}

export default Weather;
