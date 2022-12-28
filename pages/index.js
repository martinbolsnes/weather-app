import Head from 'next/head';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BsSearch } from 'react-icons/bs';
import Weather from '../components/Weather';
import Spinner from '../components/Spinner';
import ShowTime from '../components/ShowTime';
import AdditionalWeather from '../components/AdditionalWeather';

export default function Home() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(url).then((response) => {
      setWeather(response.data);
      console.log(response.data);
      setLoading(false);
      setCity('');
    });
  };

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div>
        <Head>
          <title>Weather App - Next App</title>
          <meta name='description' content='Generated by create next app' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <main className='flex flex-col'>
          <form onSubmit={fetchWeather} className='flex flex-col items-center'>
            <div className='mt-16 flex flex-row align-center relative'>
              <input
                onChange={(e) => setCity(e.target.value)}
                type='text'
                placeholder='Search location'
                className='placeholder:text-white placeholder:text-opacity-60 font-medium p-2 text-white bg-transparent border-solid border-b-2 border-white focus:outline-none'
              ></input>
              <button
                className='ml-2 bg-transparent text-white pl-4 pr-4 rounded-md font-serif absolute right-0 top-3.5'
                onClick={fetchWeather}
              >
                <BsSearch></BsSearch>
              </button>
            </div>
            <div className='flex flex-col items-center'>
              <ShowTime />
            </div>
          </form>
          {weather.main && <Weather data={weather} />}
          <div className='flex flex-col items-center mt-10'>
            <span className='border border-white w-4/5 md:w-2/5 opacity-60'></span>
          </div>
          {weather.main && <AdditionalWeather data={weather} />}
        </main>
      </div>
    );
  }
}
