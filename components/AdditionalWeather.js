import React from 'react';
import 'weather-icons/css/weather-icons.css';

function AdditionalWeather({ weatherData }) {
  const wind = weatherData.wind.speed;
  const roundedwind = Math.round(wind * 10) / 10;
  return (
    <div className='flex justify-center max-w-screen-sm m-auto'>
      <div className='flex justify-between w-4/5 md:w-2/5 items-center ml-4 mr-4 mt-6'>
        <div className='flex flex-col items-center align-center'>
          <i className='wi wi-strong-wind text-white text-2xl mb-2'></i>
          <h3 className='text-white'>{roundedwind} m/s</h3>
          <h4 className='text-white text-xs opacity-60'>Wind</h4>
        </div>
        <div className='flex flex-col items-center align-center'>
          <i className='wi wi-humidity text-white text-2xl mb-2 '></i>
          <h3 className='text-white'>{weatherData.main.humidity}%</h3>
          <h4 className='text-white text-xs opacity-60'>Humidity</h4>
        </div>
        <div className='flex flex-col items-center align-center'>
          <i className='wi wi-barometer text-white text-2xl mb-2'></i>
          <h3 className='text-white'>{weatherData.main.pressure} hPa</h3>
          <h4 className='text-white text-xs opacity-60'>Pressure</h4>
        </div>
      </div>
    </div>
  );
}

export default AdditionalWeather;
