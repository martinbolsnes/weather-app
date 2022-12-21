import React from 'react';
import 'weather-icons/css/weather-icons.css';

function AdditionalWeather({ data }) {
  const wind = data.wind.speed;
  const roundedwind = Math.round(wind * 10) / 10;
  return (
    <div className='flex justify-center'>
      <div className='flex justify-between w-3/4 items-center ml-4 mr-4 mt-6'>
        <div className='flex flex-col items-center align-center'>
          <i className='wi wi-strong-wind text-white text-2xl mb-2'></i>
          <h3 className='text-white'>{roundedwind} m/s</h3>
          <h4 className='text-white text-xs opacity-60'>Wind</h4>
        </div>
        <div className='flex flex-col items-center align-center'>
          <i className='wi wi-raindrop text-white text-2xl mb-2 '></i>
          <h3 className='text-white'>{data.main.humidity}%</h3>
          <h4 className='text-white text-xs opacity-60'>Humidity</h4>
        </div>
        <div className='flex flex-col items-center align-center'>
          <i className='wi wi-barometer text-white text-2xl mb-2'></i>
          <h3 className='text-white'>{data.main.pressure} hPa</h3>
          <h4 className='text-white text-xs opacity-60'>Pressure</h4>
        </div>
      </div>
    </div>
  );
}

export default AdditionalWeather;
